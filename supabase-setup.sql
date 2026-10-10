create table if not exists public.jouri_app_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.jouri_app_state enable row level security;

drop policy if exists jouri_app_state_select on public.jouri_app_state;
drop policy if exists jouri_app_state_insert on public.jouri_app_state;
drop policy if exists jouri_app_state_update on public.jouri_app_state;

revoke all on table public.jouri_app_state from public;
revoke all on table public.jouri_app_state from anon;
revoke all on table public.jouri_app_state from authenticated;

create or replace function public.jouri_save_state_atomic(
  p_state jsonb,
  p_expected_revision bigint
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_current_state jsonb;
  v_current_revision bigint;
  v_next_state jsonb;
  v_bad_product text;
  v_referenced_product text;
begin
  select state
    into v_current_state
    from public.jouri_app_state
   where id = 'main'
   for update;

  if v_current_state is null then
    raise exception 'STORE_NOT_INITIALIZED' using errcode = 'P0001';
  end if;

  v_current_revision := coalesce(nullif(v_current_state ->> 'dataRevision', '')::bigint, 1);
  if p_expected_revision <> v_current_revision then
    raise exception 'REVISION_CONFLICT' using errcode = '40001';
  end if;

  v_next_state := jsonb_set(p_state, '{dataRevision}', to_jsonb(v_current_revision + 1), true);
  v_next_state := jsonb_set(v_next_state, '{dataUpdatedAt}', to_jsonb(now()::text), true);

  select reference.product_id
    into v_referenced_product
    from (
      select invoice ->> 'productId' as product_id
        from jsonb_array_elements(coalesce(v_next_state -> 'invoices', '[]'::jsonb)) invoice
      union all
      select line ->> 'productId'
        from jsonb_array_elements(coalesce(v_next_state -> 'invoices', '[]'::jsonb)) invoice
        cross join lateral jsonb_array_elements(coalesce(invoice -> 'lines', '[]'::jsonb)) line
      union all
      select line ->> 'productId'
        from jsonb_array_elements(coalesce(v_next_state -> 'purchaseInvoices', '[]'::jsonb)) purchase_invoice
        cross join lateral jsonb_array_elements(coalesce(purchase_invoice -> 'lines', '[]'::jsonb)) line
      union all
      select delivery_order ->> 'product_id'
        from jsonb_array_elements(coalesce(v_next_state -> 'deliveryOrders', '[]'::jsonb)) delivery_order
    ) reference
   where nullif(reference.product_id, '') is not null
     and not exists (
       select 1
         from jsonb_array_elements(coalesce(v_next_state -> 'products', '[]'::jsonb)) product
        where product ->> 'id' = reference.product_id
     )
   limit 1;

  if v_referenced_product is not null then
    raise exception 'PRODUCT_IN_USE: لا يمكن حذف منتج مرتبط بفاتورة أو طلب' using errcode = 'P0001';
  end if;

  select product ->> 'name'
    into v_bad_product
    from jsonb_array_elements(coalesce(v_next_state -> 'products', '[]'::jsonb)) product
   where
     coalesce(nullif(product ->> 'openingQty', '')::numeric, 0)
     + coalesce((
       select sum(coalesce(nullif(movement ->> 'quantity', '')::numeric, 0))
         from jsonb_array_elements(coalesce(v_next_state -> 'stockMovements', '[]'::jsonb)) movement
        where movement ->> 'productId' = product ->> 'id'
     ), 0) < 0
   limit 1;

  if v_bad_product is not null then
    raise exception 'INSUFFICIENT_STOCK: الكمية المتوفرة لا تكفي للمنتج %', v_bad_product using errcode = 'P0001';
  end if;

  update public.jouri_app_state
     set state = v_next_state,
         updated_at = now()
   where id = 'main';

  return jsonb_build_object('status', true, 'revision', v_current_revision + 1);
end;
$$;

revoke all on function public.jouri_save_state_atomic(jsonb, bigint) from public;
revoke all on function public.jouri_save_state_atomic(jsonb, bigint) from anon;
revoke all on function public.jouri_save_state_atomic(jsonb, bigint) from authenticated;
grant execute on function public.jouri_save_state_atomic(jsonb, bigint) to service_role;

-- Bound how long a save may wait on the single 'main' row lock (and total run
-- time). Without this, a burst of concurrent saves queues up to 30s each, each
-- holding a PostgREST pool connection, which starves reads/login. A save that
-- cannot get the lock within lock_timeout fails fast and frees its pool slot.
alter function public.jouri_save_state_atomic(jsonb, bigint) set lock_timeout = '4s';
alter function public.jouri_save_state_atomic(jsonb, bigint) set statement_timeout = '15s';

create table if not exists public.jouri_operation_log (
  operation_id text primary key,
  result jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists jouri_operation_log_created_at_idx
  on public.jouri_operation_log (created_at);

alter table public.jouri_operation_log enable row level security;

revoke all on table public.jouri_operation_log from public;
revoke all on table public.jouri_operation_log from anon;
revoke all on table public.jouri_operation_log from authenticated;

create or replace function public.jouri_apply_state_patch_atomic(
  p_patch jsonb,
  p_expected_revision bigint,
  p_operation_id text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_current_state jsonb;
  v_current_revision bigint;
  v_next_state jsonb;
  v_collection text;
  v_operations jsonb;
  v_items jsonb;
  v_ordered jsonb;
  v_item jsonb;
  v_item_id text;
  v_item_exists boolean;
  v_bad_product text;
  v_referenced_product text;
  v_changed_collections text[];
  v_previous_result jsonb;
  v_result jsonb;
  v_updated_at timestamptz := now();
  v_allowed_collections constant text[] := array[
    'suppliers',
    'products',
    'invoices',
    'deliveryOrders',
    'deliveryInvoices',
    'invoiceAudits',
    'auditLogs',
    'purchaseInvoices',
    'supplierDebts',
    'supplierPayments',
    'webhookLogs',
    'stockMovements',
    'customerDebts',
    'customerDebtPayments',
    'customers',
    'personalDebts',
    'vouchers',
    'cashTransactions'
  ];
begin
  if p_operation_id is null or p_operation_id !~ '^[A-Za-z0-9_-]{8,128}$' then
    raise exception 'INVALID_OPERATION_ID' using errcode = 'P0001';
  end if;

  select state
    into v_current_state
    from public.jouri_app_state
   where id = 'main'
   for update;

  if v_current_state is null then
    raise exception 'STORE_NOT_INITIALIZED' using errcode = 'P0001';
  end if;

  select result
    into v_previous_result
    from public.jouri_operation_log
   where operation_id = p_operation_id;

  if v_previous_result is not null then
    return v_previous_result || jsonb_build_object('duplicate', true);
  end if;

  v_current_revision := coalesce(nullif(v_current_state ->> 'dataRevision', '')::bigint, 1);
  if p_expected_revision <> v_current_revision then
    raise exception 'REVISION_CONFLICT' using errcode = '40001';
  end if;

  if jsonb_typeof(coalesce(p_patch -> 'collections', '{}'::jsonb)) <> 'object' then
    raise exception 'INVALID_PATCH' using errcode = 'P0001';
  end if;

  v_next_state := v_current_state;
  for v_collection, v_operations in
    select key, value from jsonb_each(coalesce(p_patch -> 'collections', '{}'::jsonb))
  loop
    if not (v_collection = any(v_allowed_collections)) then
      raise exception 'PATCH_COLLECTION_NOT_ALLOWED: %', v_collection using errcode = 'P0001';
    end if;
    if jsonb_typeof(v_operations) <> 'object' then
      raise exception 'INVALID_PATCH_OPERATIONS: %', v_collection using errcode = 'P0001';
    end if;

    v_items := coalesce(v_next_state -> v_collection, '[]'::jsonb);
    if jsonb_typeof(v_items) <> 'array' then
      raise exception 'PATCH_TARGET_NOT_ARRAY: %', v_collection using errcode = 'P0001';
    end if;

    if jsonb_typeof(coalesce(v_operations -> 'deletes', '[]'::jsonb)) <> 'array'
       or jsonb_typeof(coalesce(v_operations -> 'upserts', '[]'::jsonb)) <> 'array' then
      raise exception 'INVALID_PATCH_LIST: %', v_collection using errcode = 'P0001';
    end if;

    select coalesce(jsonb_agg(entry.item order by entry.position), '[]'::jsonb)
      into v_items
      from jsonb_array_elements(v_items) with ordinality as entry(item, position)
     where not exists (
       select 1
         from jsonb_array_elements_text(coalesce(v_operations -> 'deletes', '[]'::jsonb)) deleted(id)
        where deleted.id = entry.item ->> 'id'
     );

    for v_item in
      select value from jsonb_array_elements(coalesce(v_operations -> 'upserts', '[]'::jsonb))
    loop
      v_item_id := nullif(v_item ->> 'id', '');
      if v_item_id is null then
        raise exception 'PATCH_ITEM_WITHOUT_ID: %', v_collection using errcode = 'P0001';
      end if;
      select exists(
        select 1 from jsonb_array_elements(v_items) existing where existing ->> 'id' = v_item_id
      ) into v_item_exists;

      if v_item_exists then
        select coalesce(jsonb_agg(
          case when entry.item ->> 'id' = v_item_id then v_item else entry.item end
          order by entry.position
        ), '[]'::jsonb)
          into v_items
          from jsonb_array_elements(v_items) with ordinality as entry(item, position);
      else
        v_items := v_items || jsonb_build_array(v_item);
      end if;
    end loop;

    if v_operations ? 'order' then
      if jsonb_typeof(v_operations -> 'order') <> 'array' then
        raise exception 'INVALID_PATCH_ORDER: %', v_collection using errcode = 'P0001';
      end if;
      v_ordered := '[]'::jsonb;
      for v_item_id in select value from jsonb_array_elements_text(v_operations -> 'order')
      loop
        select entry.item
          into v_item
          from jsonb_array_elements(v_items) entry(item)
         where entry.item ->> 'id' = v_item_id
         limit 1;
        if found then
          v_ordered := v_ordered || jsonb_build_array(v_item);
        end if;
      end loop;
      for v_item in
        select entry.item
          from jsonb_array_elements(v_items) entry(item)
         where not exists (
           select 1 from jsonb_array_elements_text(v_operations -> 'order') ordered(id)
            where ordered.id = entry.item ->> 'id'
         )
      loop
        v_ordered := v_ordered || jsonb_build_array(v_item);
      end loop;
      v_items := v_ordered;
    end if;

    v_next_state := jsonb_set(v_next_state, array[v_collection], v_items, true);
  end loop;

  v_next_state := jsonb_set(v_next_state, '{dataRevision}', to_jsonb(v_current_revision + 1), true);
  v_next_state := jsonb_set(v_next_state, '{dataUpdatedAt}', to_jsonb(v_updated_at::text), true);

  -- Which collections did this patch actually touch? The whole-state integrity
  -- scans below are expensive on a large state, so only run each one when a
  -- collection it depends on changed. Correctness is preserved: a product can
  -- only be deleted / newly referenced, or stock only move, through these
  -- exact collections.
  select coalesce(array_agg(k), '{}'::text[])
    into v_changed_collections
    from jsonb_object_keys(coalesce(p_patch -> 'collections', '{}'::jsonb)) as k;

  if v_changed_collections && array['products', 'invoices', 'deliveryOrders', 'purchaseInvoices']::text[] then
    select reference.product_id
      into v_referenced_product
      from (
        select invoice ->> 'productId' as product_id
          from jsonb_array_elements(coalesce(v_next_state -> 'invoices', '[]'::jsonb)) invoice
        union all
        select line ->> 'productId'
          from jsonb_array_elements(coalesce(v_next_state -> 'invoices', '[]'::jsonb)) invoice
          cross join lateral jsonb_array_elements(coalesce(invoice -> 'lines', '[]'::jsonb)) line
        union all
        select line ->> 'productId'
          from jsonb_array_elements(coalesce(v_next_state -> 'purchaseInvoices', '[]'::jsonb)) purchase_invoice
          cross join lateral jsonb_array_elements(coalesce(purchase_invoice -> 'lines', '[]'::jsonb)) line
        union all
        select delivery_order ->> 'product_id'
          from jsonb_array_elements(coalesce(v_next_state -> 'deliveryOrders', '[]'::jsonb)) delivery_order
      ) reference
     where nullif(reference.product_id, '') is not null
       and not exists (
         select 1
           from jsonb_array_elements(coalesce(v_next_state -> 'products', '[]'::jsonb)) product
          where product ->> 'id' = reference.product_id
       )
     limit 1;

    if v_referenced_product is not null then
      raise exception 'PRODUCT_IN_USE: لا يمكن حذف منتج مرتبط بفاتورة أو طلب' using errcode = 'P0001';
    end if;
  end if;

  if v_changed_collections && array['products', 'stockMovements']::text[] then
    select product ->> 'name'
      into v_bad_product
      from jsonb_array_elements(coalesce(v_next_state -> 'products', '[]'::jsonb)) product
     where
       coalesce(nullif(product ->> 'openingQty', '')::numeric, 0)
       + coalesce((
         select sum(coalesce(nullif(movement ->> 'quantity', '')::numeric, 0))
           from jsonb_array_elements(coalesce(v_next_state -> 'stockMovements', '[]'::jsonb)) movement
          where movement ->> 'productId' = product ->> 'id'
       ), 0) < 0
     limit 1;

    if v_bad_product is not null then
      raise exception 'INSUFFICIENT_STOCK: الكمية المتوفرة لا تكفي للمنتج %', v_bad_product using errcode = 'P0001';
    end if;
  end if;

  update public.jouri_app_state
     set state = v_next_state,
         updated_at = v_updated_at
   where id = 'main';

  v_result := jsonb_build_object(
    'status', true,
    'revision', v_current_revision + 1,
    'updatedAt', v_updated_at::text,
    'duplicate', false
  );

  insert into public.jouri_operation_log(operation_id, result, created_at)
  values (p_operation_id, v_result, v_updated_at);

  delete from public.jouri_operation_log
   where created_at < now() - interval '45 days';

  return v_result;
end;
$$;

revoke all on function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) from public;
revoke all on function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) from anon;
revoke all on function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) from authenticated;
grant execute on function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) to service_role;

-- See the note on jouri_save_state_atomic above: cap the row-lock wait and total
-- run time so a burst of concurrent patches can never monopolize the connection
-- pool and starve reads/login.
alter function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) set lock_timeout = '4s';
alter function public.jouri_apply_state_patch_atomic(jsonb, bigint, text) set statement_timeout = '15s';

-- Initial state: creates the empty starting row once (default login admin / admin).
-- Safe to run again: an existing row is never touched.
insert into public.jouri_app_state (id, state)
values ('main', '{"schemaVersion":1,"dataRevision":1,"settings":{"company":{"name":"مفروشات جوري","phone":"","address":"","taxNo":"","footer":"شكراً لتعاملكم معنا","logoDataUrl":""},"modon":{"priceMarkup":1000,"deliveryPrice":4000},"modonReconciliationStartDate":"2026-07-07"},"activeEmployeeId":"","reportEmployeeId":"","reportOperationScope":"all","reportSaleModeScope":"all","currentUserId":null,"adminLogin":{"username":"admin","passwordHash":"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"},"employees":[],"suppliers":[],"products":[],"invoices":[],"deliveryOrders":[],"modonExternalStats":null,"deliveryInvoices":[],"invoiceAudits":[],"auditLogs":[],"purchaseInvoices":[],"supplierDebts":[],"supplierPayments":[],"webhookLogs":[],"stockMovements":[],"customerDebts":[],"customerDebtPayments":[],"customers":[],"personalDebts":[],"vouchers":[],"cashTransactions":[],"lastSelectedInvoiceId":null,"selectedSupplierId":null,"selectedPurchaseInvoiceId":null,"selectedProductId":null,"reportDate":""}'::jsonb)
on conflict (id) do nothing;
