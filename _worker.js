// Latest deployed front-end build. The browser compares this (returned as the
// X-App-Version response header) against the APP_BUILD_VERSION baked into the
// app.js it is currently running; a mismatch means the user is on a stale cached
// bundle and is prompted to refresh. Keep this in sync with APP_BUILD_VERSION in
// app.js on every deploy.
const SERVER_BUILD_VERSION = "2026.08.01-form-reset-v61";
const MODON_BASE = "https://mcht.modon-express.net/v1/merchant";
const DEFAULT_ADMIN_PASSWORD_HASH = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
const UPSTREAM_TIMEOUT_MS = 30000;
const PATCHABLE_STATE_COLLECTIONS = new Set([
  "suppliers",
  "products",
  "invoices",
  "deliveryOrders",
  "deliveryInvoices",
  "invoiceAudits",
  "auditLogs",
  "purchaseInvoices",
  "supplierDebts",
  "supplierPayments",
  "webhookLogs",
  "stockMovements",
  "customerDebts",
  "customerDebtPayments",
  "customers",
  "personalDebts",
  "vouchers",
  "cashTransactions",
]);

async function handleRequest(request, env) {
  try {
    if (request.method === "OPTIONS") return json({ status: true, msg: "ok" });
    const url = new URL(request.url);
    if (url.pathname === "/api/store/status") return await handleOnlineStoreStatus(request, env);
    if (url.pathname === "/api/auth/login") return await handleAuthLogin(request, env);
    if (url.pathname === "/api/modon/webhook") return await handleModonWebhook(request, env, url);
    const session = await authenticateRequest(request, env);
    if (!session) return json({ status: false, code: "AUTH_REQUIRED", msg: "انتهت جلسة الدخول أو أنها غير صالحة. سجل الدخول من جديد." }, 401);
    // Version gate: reject saves from stale cached builds at the edge (no DB hit),
    // so an out-of-date fleet cannot flood PostgREST's pool with REVISION_CONFLICT
    // save attempts and starve login/reads. See clientVersionGate().
    const versionGate = clientVersionGate(request, env, url);
    if (versionGate) return versionGate;
    if (url.pathname === "/api/store/template") return json({ status: true, state: defaultStateTemplate() });
    if (url.pathname === "/api/store/init") return await handleOnlineStoreInit(request, env, session);
    if (url.pathname === "/api/store/migrate-modon-cache") return await handleModonCacheMigration(request, env, session);
    if (url.pathname === "/api/store/backup") return await handleOnlineStoreBackup(request, env, session);
    if (url.pathname === "/api/store/patch") return await handleOnlineStorePatch(request, env, session);
    if (url.pathname === "/api/store") return await handleOnlineStore(request, env, session);
    if (url.pathname === "/api/modon/cache") return await handleModonCache(request, env, session);
    if (url.pathname.startsWith("/api/modon/")) return await handleModonApi(request, env, url, session);
    return json({ status: false, msg: "Unknown API endpoint" }, 404);
  } catch (error) {
    const errorStatus = Number(error.httpStatus || 500);
    const status = errorStatus >= 400 && errorStatus <= 599 ? errorStatus : 500;
    return json({ status: false, code: error.code || "SERVER_ERROR", msg: error.message || "Server error" }, status);
  }
}

async function handleAuthLogin(request, env) {
  if (request.method !== "POST") return json({ status: false, msg: "Method not allowed" }, 405);
  if (!env.APP_SESSION_SECRET || String(env.APP_SESSION_SECRET).length < 32 || !env.MODON_CREDENTIALS_KEY || String(env.MODON_CREDENTIALS_KEY).length < 32) {
    return json({ status: false, code: "SECURITY_NOT_CONFIGURED", msg: "الحماية غير مكتملة: أضف APP_SESSION_SECRET وMODON_CREDENTIALS_KEY بطول 32 حرفًا على الأقل داخل Cloudflare ثم أعد النشر." }, 503);
  }
  if (!onlineDataUrl(env) && !hasSupabaseConfig(env)) {
    return json({ status: false, code: "STORAGE_NOT_CONFIGURED", msg: "تخزين البيانات غير مهيأ في Cloudflare. أضف المتغير SUPABASE_URL (رابط مشروع Supabase) والسر SUPABASE_SERVICE_ROLE_KEY (مفتاح service_role من لوحة Supabase) في Cloudflare Pages > Settings > Variables and Secrets ثم أعد النشر." }, 503);
  }
  const body = await readJson(request);
  const username = String(body.username || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!username || !password) return json({ status: false, msg: "اكتب اسم المستخدم وكلمة المرور." }, 400);
  const state = await onlineStateProjection(env, ["adminLogin", "employees"]);
  const passwordHash = await sha256Hex(password);
  let userId = null;
  let displayName = "";
  if (String(state.adminLogin?.username || "").trim().toLowerCase() === username && state.adminLogin?.passwordHash === passwordHash) {
    userId = "admin";
    displayName = "الإدارة";
  } else {
    const employee = (state.employees || []).find((item) => item.active !== false && String(item.username || "").trim().toLowerCase() === username && item.passwordHash === passwordHash);
    if (employee) {
      userId = employee.id;
      displayName = employee.name || employee.username;
    }
  }
  if (!userId) return json({ status: false, msg: "اسم المستخدم أو كلمة المرور غير صحيحة." }, 401);
  const sessionDuration = body.rememberLogin ? 30 * 24 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000;
  const token = await createSessionToken({ userId, displayName, exp: Date.now() + sessionDuration }, env);
  return json({ status: true, userId, displayName, token });
}

async function authenticateRequest(request, env) {
  if (!env.APP_SESSION_SECRET || String(env.APP_SESSION_SECRET).length < 32) return null;
  const authorization = request.headers.get("Authorization") || "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  if (!token) return null;
  const [payloadPart, signaturePart] = token.split(".");
  if (!payloadPart || !signaturePart) return null;
  const expected = await hmacBase64Url(payloadPart, env.APP_SESSION_SECRET);
  if (!timingSafeEqual(expected, signaturePart)) return null;
  try {
    const payload = JSON.parse(base64UrlDecode(payloadPart));
    if (!payload.userId || Number(payload.exp || 0) <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

async function createSessionToken(payload, env) {
  const payloadPart = base64UrlEncode(JSON.stringify(payload));
  return `${payloadPart}.${await hmacBase64Url(payloadPart, env.APP_SESSION_SECRET)}`;
}

async function hmacBase64Url(value, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function base64UrlEncode(value) { return bytesToBase64Url(new TextEncoder().encode(value)); }
function base64UrlDecode(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return decodeURIComponent([...atob(normalized)].map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`).join(""));
}
function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function timingSafeEqual(left, right) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return mismatch === 0;
}

async function credentialEncryptionKey(env) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(env.MODON_CREDENTIALS_KEY));
  return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}

async function encryptCredential(value, env) {
  const text = String(value || "");
  if (!text || text.startsWith("enc:v1:")) return text;
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await credentialEncryptionKey(env), new TextEncoder().encode(text));
  return `enc:v1:${bytesToBase64Url(iv)}:${bytesToBase64Url(new Uint8Array(encrypted))}`;
}

async function decryptCredential(value, env) {
  const text = String(value || "");
  if (!text.startsWith("enc:v1:")) return text;
  const [, , ivPart, encryptedPart] = text.split(":");
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv: base64UrlToBytes(ivPart) }, await credentialEncryptionKey(env), base64UrlToBytes(encryptedPart));
  return new TextDecoder().decode(decrypted);
}

async function protectModonCredentials(state, env) {
  for (const employee of state.employees || []) {
    if (employee.modonPassword) employee.modonPassword = await encryptCredential(employee.modonPassword, env);
    if (employee.modonToken) employee.modonToken = await encryptCredential(employee.modonToken, env);
  }
}

function base64UrlToBytes(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Uint8Array.from(atob(normalized), (char) => char.charCodeAt(0));
}

async function handleOnlineStoreStatus(request, env) {
  if (request.method !== "GET") return json({ status: false, msg: "Method not allowed" }, 405);
  if (!hasOnlineStoreConfig(env)) {
    return json({ status: false, configured: false, msg: "التخزين الأونلاين غير مضبوط.", meta: storageMeta(env) });
  }
  try {
    const status = await onlineStoreRequest(env, "STATUS");
    return json({
      status: true,
      configured: true,
      msg: "التخزين الأونلاين جاهز",
      revision: Number(status.revision || 0),
      updatedAt: status.updatedAt || null,
      meta: storageMeta(env),
    });
  } catch (error) {
    return json({ status: false, configured: true, msg: error.message, meta: storageMeta(env) });
  }
}

async function handleOnlineStoreInit(request, env, session) {
  if (request.method !== "POST") return json({ status: false, msg: "Method not allowed" }, 405);
  if (session.userId !== "admin") return json({ status: false, msg: "تهيئة التخزين متاحة للإدارة فقط." }, 403);
  if (!hasOnlineStoreConfig(env)) return json({ status: false, msg: "التخزين الأونلاين غير مضبوط." }, 503);
  const body = await readJson(request);
  const template = sanitizeStateSecrets(body.state || defaultStateTemplate());
  stampStateRevision(template, null);
  const validation = validateStateShape(template);
  if (!validation.valid) return json({ status: false, msg: validation.msg }, 400);
  try {
    const existing = sanitizeStateSecrets(normalizeOnlineData(await onlineStoreRequest(env, "GET")));
    const existingValidation = validateStateShape(existing);
    const hasData = existingValidation.valid && hasBusinessData(existing);
    if (hasData && !body.force) {
      return json({ status: false, msg: "التخزين الأونلاين يحتوي بيانات عمل فعلية. لا يمكن التهيئة فوقها إلا بقرار مقصود." }, 409);
    }
  } catch {
  }
  await onlineStoreRequest(env, writeMethod(env), template);
  return json({ status: true, msg: "تمت تهيئة التخزين الأونلاين.", meta: storageMeta(env) });
}

async function handleOnlineStore(request, env, session) {
  if (!hasOnlineStoreConfig(env)) return json({ status: false, msg: "التخزين الأونلاين غير مضبوط." }, 503);
  if (request.method === "GET") {
    const data = await onlineStoreRequest(env, "GET");
    const state = sanitizeStateSecrets(normalizeOnlineData(data));
    stampStateRevision(state, state.dataRevision || 1);
    const validation = validateStateShape(state);
    if (!validation.valid) return json({ status: false, msg: validation.msg }, 502);
    return json({ status: true, data: state, updatedAt: state.dataUpdatedAt || null, meta: storageMeta(env) });
  }
  if (request.method === "POST" || request.method === "PUT") {
    const body = await readJson(request);
    if (!body.state) return json({ status: false, msg: "state is required" }, 400);
    const latestRaw = normalizeOnlineData(await onlineStoreRequest(env, "GET"));
    const state = compactStateForStorage(mergeStoredSecrets(body.state, latestRaw, session.userId === "admin"));
    await protectModonCredentials(state, env);
    const validation = validateStateShape(state);
    if (!validation.valid) return json({ status: false, msg: validation.msg }, 400);
    const latestRevision = Number(latestRaw?.dataRevision || 1);
    const clientRevision = Number(body.clientRevision || state.dataRevision || 0);
    if (clientRevision && clientRevision !== latestRevision) {
      return json({
        status: false,
        code: "REVISION_CONFLICT",
        msg: "تم تعديل البيانات من جلسة أخرى. أعد تحميل الصفحة قبل أي حفظ جديد.",
        latestRevision,
        clientRevision,
      }, 409);
    }
    if (state.modonExternalStats || latestRaw.modonExternalStats) {
      await mergeAndSaveModonCache(env, state.modonExternalStats, session, latestRaw.modonExternalStats);
      state.modonExternalStats = null;
    }
    if (!onlineDataUrl(env) && hasSupabaseConfig(env)) {
      try {
        const result = await onlineStoreRequest(env, "ATOMIC", { state, expectedRevision: clientRevision || latestRevision });
        const savedStatus = await onlineStoreRequest(env, "STATUS").catch(() => null);
        return json({ status: true, revision: Number(result?.revision || latestRevision + 1), updatedAt: savedStatus?.updatedAt || new Date().toISOString(), meta: storageMeta(env) });
      } catch (error) {
        if (error.code === "REVISION_CONFLICT") return json({ status: false, code: error.code, msg: "تم تحديث البيانات من جهاز آخر، وسيتم دمجها تلقائيًا.", latestRevision }, 409);
        if (error.code === "INSUFFICIENT_STOCK") return json({ status: false, code: error.code, msg: error.message }, 409);
        if (error.code === "PRODUCT_IN_USE") return json({ status: false, code: error.code, msg: error.message }, 409);
        throw error;
      }
    }
    stampStateRevision(state, latestRevision + 1);
    state.dataUpdatedAt = new Date().toISOString();
    await onlineStoreRequest(env, writeMethod(env), state);
    const savedStatus = await onlineStoreRequest(env, "STATUS").catch(() => null);
    return json({ status: true, revision: state.dataRevision, updatedAt: savedStatus?.updatedAt || state.dataUpdatedAt, meta: storageMeta(env) });
  }
  return json({ status: false, msg: "Method not allowed" }, 405);
}

async function handleModonWebhook(request, env, url) {
  if (request.method !== "POST") return json({ status: false, msg: "Method not allowed" }, 405);
  const expectedSecret = String(env.MODON_WEBHOOK_SECRET || "");
  if (expectedSecret.length < 32) return json({ status: false, code: "WEBHOOK_NOT_CONFIGURED", msg: "MODON_WEBHOOK_SECRET is not configured." }, 503);
  const receivedSecret = String(request.headers.get("X-Modon-Webhook-Secret") || "");
  if (!timingSafeEqual(expectedSecret, receivedSecret)) return json({ status: false, code: "WEBHOOK_UNAUTHORIZED", msg: "Invalid webhook secret." }, 401);
  const payload = await readJson(request);
  const body = payload?.data && typeof payload.data === "object" ? payload.data : payload;
  const order = body?.order && typeof body.order === "object" ? body.order : body;
  const externalOrderId = String(order?.external_order_id || order?.order_id || order?.id || order?.qr_id || "").trim();
  if (!externalOrderId) return json({ status: false, code: "WEBHOOK_ORDER_REQUIRED", msg: "Order identifier is required." }, 400);
  const eventType = String(body?.event_type || body?.type || body?.event || order?.status || "status_update").trim();
  const providedEventId = String(body?.event_id || payload?.event_id || "").trim();
  const eventId = providedEventId || await sha256Hex(`${externalOrderId}|${eventType}|${JSON.stringify(payload)}`);
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const latestRaw = normalizeOnlineData(await onlineStoreRequest(env, "GET"));
    const latestRevision = Number(latestRaw?.dataRevision || 1);
    const nextState = compactStateForStorage(structuredClone(latestRaw || {}));
    nextState.webhookLogs ||= [];
    if (nextState.webhookLogs.some((log) => String(log.event_id) === eventId)) {
      return json({ status: true, duplicate: true, event_id: eventId });
    }
    nextState.webhookLogs.unshift({
      id: crypto.randomUUID(),
      company_id: "modon",
      external_order_id: externalOrderId,
      event_id: eventId,
      event_type: eventType,
      payload,
      processed: false,
      review_only: true,
      created_at: new Date().toISOString(),
    });
    nextState.webhookLogs = nextState.webhookLogs.slice(0, 2000);
    try {
      const saved = await onlineStoreRequest(env, "ATOMIC", { state: nextState, expectedRevision: latestRevision });
      return json({ status: true, duplicate: false, event_id: eventId, revision: Number(saved?.revision || latestRevision + 1) });
    } catch (error) {
      if (error.code !== "REVISION_CONFLICT" || attempt === 1) throw error;
    }
  }
  return json({ status: false, code: "REVISION_CONFLICT", msg: "Retry webhook." }, 409);
}

async function handleOnlineStorePatch(request, env, session) {
  if (request.method !== "POST") return json({ status: false, msg: "Method not allowed" }, 405);
  if (!hasOnlineStoreConfig(env)) return json({ status: false, msg: "التخزين الأونلاين غير مضبوط." }, 503);
  const body = await readJson(request);
  const operationId = String(body.operationId || "").trim();
  const clientRevision = Number(body.clientRevision || 0);
  if (!/^[A-Za-z0-9_-]{8,128}$/.test(operationId)) {
    return json({ status: false, code: "INVALID_OPERATION_ID", msg: "معرف عملية الحفظ غير صالح." }, 400);
  }
  if (!Number.isInteger(clientRevision) || clientRevision < 1) {
    return json({ status: false, code: "INVALID_REVISION", msg: "نسخة البيانات المرسلة غير صالحة." }, 400);
  }
  const patchValidation = validateStatePatch(body.patch);
  if (!patchValidation.valid) return json({ status: false, code: "INVALID_PATCH", msg: patchValidation.msg }, 400);

  if (!onlineDataUrl(env) && hasSupabaseConfig(env)) {
    try {
      const result = await onlineStoreRequest(env, "PATCH_ATOMIC", {
        patch: body.patch,
        expectedRevision: clientRevision,
        operationId,
      });
      return json({
        status: true,
        revision: Number(result?.revision || clientRevision + 1),
        updatedAt: result?.updatedAt || new Date().toISOString(),
        duplicate: Boolean(result?.duplicate),
        mode: "atomic-patch",
        meta: storageMeta(env),
      });
    } catch (error) {
      if (error.code !== "PATCH_RPC_UNAVAILABLE") return patchStoreErrorResponse(error, clientRevision);
    }
  }

  try {
    const latestRaw = normalizeOnlineData(await onlineStoreRequest(env, "GET"));
    const latestRevision = Number(latestRaw?.dataRevision || 1);
    const previousOperations = Array.isArray(latestRaw?._syncOperations) ? latestRaw._syncOperations : [];
    if (previousOperations.includes(operationId)) {
      return json({ status: true, revision: latestRevision, updatedAt: latestRaw.dataUpdatedAt || null, duplicate: true, mode: "compatible-patch", meta: storageMeta(env) });
    }
    if (clientRevision !== latestRevision) {
      return json({ status: false, code: "REVISION_CONFLICT", msg: "تم تحديث البيانات من جهاز آخر، وسيتم دمجها تلقائيًا.", latestRevision }, 409);
    }
    const state = compactStateForStorage(applyStatePatch(latestRaw, body.patch));
    state._syncOperations = [...previousOperations.filter((id) => id !== operationId), operationId].slice(-100);
    const validation = validateStateShape(state);
    if (!validation.valid) return json({ status: false, code: "INVALID_PATCH_RESULT", msg: validation.msg }, 400);
    if (!onlineDataUrl(env) && hasSupabaseConfig(env)) {
      const result = await onlineStoreRequest(env, "ATOMIC", { state, expectedRevision: clientRevision });
      return json({ status: true, revision: Number(result?.revision || latestRevision + 1), updatedAt: new Date().toISOString(), mode: "compatible-patch", meta: storageMeta(env) });
    }
    stampStateRevision(state, latestRevision + 1);
    state.dataUpdatedAt = new Date().toISOString();
    await onlineStoreRequest(env, writeMethod(env), state);
    return json({ status: true, revision: state.dataRevision, updatedAt: state.dataUpdatedAt, mode: "compatible-patch", meta: storageMeta(env) });
  } catch (error) {
    return patchStoreErrorResponse(error, clientRevision);
  }
}

function patchStoreErrorResponse(error, clientRevision) {
  if (error.code === "REVISION_CONFLICT") {
    return json({ status: false, code: error.code, msg: "تم تحديث البيانات من جهاز آخر، وسيتم دمجها تلقائيًا.", latestRevision: Number(error.latestRevision || clientRevision) }, 409);
  }
  if (["INSUFFICIENT_STOCK", "PRODUCT_IN_USE"].includes(error.code)) {
    return json({ status: false, code: error.code, msg: error.message }, 409);
  }
  throw error;
}

function validateStatePatch(patch) {
  if (!patch || typeof patch !== "object" || Array.isArray(patch)) return { valid: false, msg: "بيانات التعديل الجزئي غير صالحة." };
  if (Number(patch.version || 1) !== 1) return { valid: false, msg: "إصدار التعديل الجزئي غير مدعوم." };
  const collections = patch.collections;
  if (!collections || typeof collections !== "object" || Array.isArray(collections)) return { valid: false, msg: "مجموعات التعديل غير صالحة." };
  const names = Object.keys(collections);
  if (!names.length || names.some((name) => !PATCHABLE_STATE_COLLECTIONS.has(name))) return { valid: false, msg: "يتضمن التعديل قسمًا غير مسموح به." };
  for (const name of names) {
    const operations = collections[name];
    if (!operations || typeof operations !== "object" || Array.isArray(operations)) return { valid: false, msg: `عمليات ${name} غير صالحة.` };
    const upserts = operations.upserts || [];
    const deletes = operations.deletes || [];
    const order = operations.order;
    if (!Array.isArray(upserts) || !Array.isArray(deletes) || (order !== undefined && !Array.isArray(order))) return { valid: false, msg: `قوائم ${name} غير صالحة.` };
    if (upserts.length > 5000 || deletes.length > 5000 || (order?.length || 0) > 50000) return { valid: false, msg: `تعديل ${name} أكبر من الحد المسموح.` };
    if (!upserts.every((row) => row && typeof row === "object" && !Array.isArray(row) && String(row.id || "").trim())) return { valid: false, msg: `يوجد سجل بلا معرف داخل ${name}.` };
    if (!deletes.every((id) => typeof id === "string" && id.trim()) || (order && !order.every((id) => typeof id === "string" && id.trim()))) return { valid: false, msg: `يوجد معرف غير صالح داخل ${name}.` };
    const upsertIds = upserts.map((row) => String(row.id));
    if (new Set(upsertIds).size !== upsertIds.length || new Set(deletes).size !== deletes.length || (order && new Set(order).size !== order.length)) return { valid: false, msg: `يوجد معرف مكرر داخل تعديل ${name}.` };
  }
  return { valid: true };
}

function applyStatePatch(inputState, patch) {
  const state = structuredClone(inputState || {});
  Object.entries(patch.collections || {}).forEach(([name, operations]) => {
    const rows = Array.isArray(state[name]) ? state[name] : [];
    const deletedIds = new Set((operations.deletes || []).map(String));
    const rowMap = new Map(rows.filter((row) => !deletedIds.has(String(row.id))).map((row) => [String(row.id), row]));
    (operations.upserts || []).forEach((row) => rowMap.set(String(row.id), structuredClone(row)));
    const result = [];
    (operations.order || []).forEach((id) => {
      const key = String(id);
      if (!rowMap.has(key)) return;
      result.push(rowMap.get(key));
      rowMap.delete(key);
    });
    rowMap.forEach((row) => result.push(row));
    state[name] = result;
  });
  return state;
}

async function handleOnlineStoreBackup(request, env, session) {
  if (request.method !== "GET") return json({ status: false, msg: "Method not allowed" }, 405);
  if (session.userId !== "admin") return json({ status: false, code: "FORBIDDEN", msg: "النسخة الاحتياطية متاحة للإدارة فقط." }, 403);
  if (!hasOnlineStoreConfig(env)) return json({ status: false, msg: "التخزين الأونلاين غير مضبوط." }, 503);
  const data = await onlineStoreRequest(env, "GET");
  const state = sanitizeStateSecrets(normalizeOnlineData(data));
  stampStateRevision(state, state.dataRevision || 1);
  const validation = validateStateShape(state);
  if (!validation.valid) return json({ status: false, msg: validation.msg }, 502);
  const modonCache = await readModonCache(env).catch(() => null);
  const date = new Date().toISOString().replace(/[:.]/g, "-");
  return new Response(JSON.stringify({
    exportedAt: new Date().toISOString(),
    source: "jouri-accounting-cloudflare-store",
    revision: state.dataRevision,
    state,
    modonCache,
  }, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="jouri-accounting-backup-v${state.dataRevision}-${date}.json"`,
      ...corsHeaders(),
    },
  });
}

async function handleModonApi(request, env, url, session) {
  if (request.method === "GET" && url.pathname === "/api/modon/cities") {
    return json(await modonGet("/citys"));
  }
  if (request.method === "GET" && url.pathname === "/api/modon/regions") {
    const cityId = url.searchParams.get("city_id");
    if (!cityId) return json({ status: false, msg: "city_id is required" }, 400);
    return json(await modonGet(`/regions?city_id=${encodeURIComponent(cityId)}`));
  }
  if (request.method === "GET" && url.pathname === "/api/modon/package-sizes") {
    return json(await modonGet("/package-sizes"));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/login") {
    const body = await readJson(request);
    return json(await modonLogin(body.username, body.password));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/create-order") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    return json(await modonPost(`/create-order?token=${encodeURIComponent(token)}`, body.order));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/edit-order") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    if (!body.order?.qr_id) return json({ status: false, msg: "qr_id is required" }, 400);
    return json(await modonPost(`/edit-order?token=${encodeURIComponent(token)}`, body.order));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/delete-order") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    if (!body.orderId) return json({ status: false, msg: "orderId is required" }, 400);
    return json(await modonPost(`https://mcht.modon-express.net/merchant/delete_orders?token=${encodeURIComponent(token)}`, { order_id: body.orderId }));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/orders") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    return json(await modonGet(`/merchant-orders?token=${encodeURIComponent(token)}`));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/orders-by-ids") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    const ids = Array.isArray(body.ids) ? body.ids.filter(Boolean).slice(0, 25).join(",") : String(body.ids || "");
    if (!ids) return json({ status: false, msg: "ids is required" }, 400);
    return json(await modonPost(`/get-orders-by-ids-bulk?token=${encodeURIComponent(token)}`, { ids }));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/invoices") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    return json(await modonGet(`/get_merchant_invoices?token=${encodeURIComponent(token)}`));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/invoice-orders") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    if (!body.invoiceId) return json({ status: false, msg: "invoiceId is required" }, 400);
    return json(await modonGet(`/get_merchant_invoice_orders?token=${encodeURIComponent(token)}&invoice_id=${encodeURIComponent(body.invoiceId)}`));
  }
  if (request.method === "POST" && url.pathname === "/api/modon/receive-invoice") {
    const body = await readJson(request);
    const token = await resolveToken(body.employeeId, env, session);
    if (!body.invoiceId) return json({ status: false, msg: "invoiceId is required" }, 400);
    return json(await modonGet(`/receive_merchant_invoice?token=${encodeURIComponent(token)}&invoice_id=${encodeURIComponent(body.invoiceId)}`));
  }
  return json({ status: false, msg: "Unknown API endpoint" }, 404);
}

async function modonGet(endpoint) {
  const response = await fetchWithTimeout(`${MODON_BASE}${endpoint}`, { method: "GET" }, "Modon");
  return parseModonResponse(response);
}

async function modonLogin(username, password) {
  if (!username || !password) throw new Error("Modon username/password are required");
  const form = new FormData();
  form.set("username", username);
  form.set("password", password);
  const response = await fetchWithTimeout(`${MODON_BASE}/login`, { method: "POST", body: form }, "Modon");
  return parseModonResponse(response);
}

async function modonPost(endpoint, payload) {
  const form = new FormData();
  Object.entries(payload || {}).forEach(([key, value]) => form.set(key, value == null ? "" : String(value)));
  const target = /^https?:\/\//i.test(endpoint) ? endpoint : `${MODON_BASE}${endpoint}`;
  const response = await fetchWithTimeout(target, { method: "POST", body: form }, "Modon");
  return parseModonResponse(response);
}

async function parseModonResponse(response) {
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    const error = new Error(`لم يرجع Modon استجابة صحيحة (HTTP ${response.status}). حاول مرة أخرى، وإذا استمرت المشكلة فتحقق من خدمة Modon.`);
    error.code = "MODON_INVALID_RESPONSE";
    error.httpStatus = 502;
    throw error;
  }
  if (!response.ok || data?.status === false) {
    const message = data?.msg || `رفض Modon الطلب (HTTP ${response.status})`;
    const error = new Error(message);
    error.code = /لا يمكن تعديل.*(?:السائق|المندوب)|استلامه من قبل السائق/.test(message)
      ? "MODON_ORDER_NOT_EDITABLE"
      : "MODON_REJECTED";
    error.httpStatus = response.status >= 400 && response.status < 500 ? response.status : 409;
    throw error;
  }
  return data;
}

async function resolveToken(employeeId, env, session) {
  if (!employeeId) throw new Error("employeeId is required");
  if (session.userId !== "admin" && session.userId !== employeeId) throw new Error("لا يمكنك استخدام حساب Modon التابع لموظف آخر.");
  const state = await onlineStateProjection(env, ["employees"]);
  const employee = (state.employees || []).find((item) => item.id === employeeId && item.active !== false);
  if (!employee) throw new Error("حساب الموظف غير موجود أو غير نشط.");
  if (employee.modonToken) return decryptCredential(employee.modonToken, env);
  const username = employee.modonUsername;
  const password = await decryptCredential(employee.modonPassword, env);
  if (!username || !password) throw new Error(`لا توجد بيانات دخول Modon لهذا الموظف: ${employeeId}. أدخل بيانات Modon من صفحة حسابات الموظفين.`);
  const login = await modonLogin(username, password);
  const token = login?.data?.token || login?.token;
  if (!token) throw new Error(login?.msg || "Modon login did not return token");
  return token;
}

async function handleModonCacheMigration(request, env, session) {
  if (request.method !== "POST") return json({ status: false, msg: "Method not allowed" }, 405);
  if (!hasSupabaseConfig(env) || onlineDataUrl(env)) {
    return json({ status: true, migrated: false, supported: false });
  }
  const projection = await onlineStateProjection(env, ["modonExternalStats", "dataRevision"]);
  if (!projection.modonExternalStats) {
    return json({ status: true, migrated: false, alreadySeparated: true });
  }

  const latestRaw = normalizeOnlineData(await onlineStoreRequest(env, "GET"));
  const legacyStats = latestRaw.modonExternalStats;
  if (!legacyStats) return json({ status: true, migrated: false, alreadySeparated: true });

  await mergeAndSaveModonCache(env, null, session, legacyStats);
  const nextState = compactStateForStorage(structuredClone(latestRaw));
  nextState.modonExternalStats = null;
  const latestRevision = Number(latestRaw.dataRevision || projection.dataRevision || 1);
  try {
    const result = await onlineStoreRequest(env, "ATOMIC", { state: nextState, expectedRevision: latestRevision });
    return json({
      status: true,
      migrated: true,
      revision: Number(result?.revision || latestRevision + 1),
    });
  } catch (error) {
    if (error.code === "REVISION_CONFLICT") {
      return json({ status: false, code: error.code, msg: "The data changed during Modon cache migration. Retry once." }, 409);
    }
    throw error;
  }
}

async function handleModonCache(request, env, session) {
  if (!hasSupabaseConfig(env)) {
    return json({ status: false, code: "MODON_CACHE_NOT_CONFIGURED", msg: "Modon cache requires Supabase storage." }, 503);
  }
  if (request.method === "GET") {
    const document = await readModonCache(env);
    return json({
      status: true,
      data: scopeModonCacheDocument(document, session),
      updatedAt: document?.dataUpdatedAt || null,
    });
  }
  if (request.method === "POST" || request.method === "PUT") {
    const body = await readJson(request);
    const incoming = body.modonExternalStats || body.data?.modonExternalStats || null;
    if (incoming && typeof incoming !== "object") {
      return json({ status: false, code: "INVALID_MODON_CACHE", msg: "modonExternalStats must be an object." }, 400);
    }
    const legacyProjection = await onlineStateProjection(env, ["modonExternalStats"]);
    const saved = await mergeAndSaveModonCache(env, incoming, session, legacyProjection.modonExternalStats);
    return json({
      status: true,
      data: scopeModonCacheDocument(saved, session),
      updatedAt: saved.dataUpdatedAt,
    });
  }
  return json({ status: false, msg: "Method not allowed" }, 405);
}

async function mergeAndSaveModonCache(env, incomingStats, session, trustedLegacyStats = null) {
  const current = await readModonCache(env);
  const baseStats = current?.modonExternalStats || trustedLegacyStats || null;
  const allowedIncoming = scopeModonStats(incomingStats, session);
  const mergedStats = mergeModonStats(baseStats, allowedIncoming);
  const document = {
    schemaVersion: 1,
    cacheRevision: Number(current?.cacheRevision || 0) + 1,
    dataUpdatedAt: new Date().toISOString(),
    modonExternalStats: mergedStats,
  };
  await writeModonCache(env, document);
  return document;
}

function mergeModonStats(baseStats, incomingStats) {
  if (!baseStats) return incomingStats || null;
  if (!incomingStats) return baseStats;
  const accounts = new Map();
  for (const account of baseStats.accounts || []) {
    const key = String(account.employeeId || account.modonUsername || "").trim();
    if (key) accounts.set(key, account);
  }
  for (const account of incomingStats.accounts || []) {
    const key = String(account.employeeId || account.modonUsername || "").trim();
    if (key) accounts.set(key, account);
  }
  return {
    ...baseStats,
    ...incomingStats,
    scope: "all",
    fetchedAt: incomingStats.fetchedAt || baseStats.fetchedAt || new Date().toISOString(),
    accounts: [...accounts.values()],
  };
}

function scopeModonStats(stats, session) {
  if (!stats || typeof stats !== "object") return null;
  if (session.userId === "admin") return stats;
  return {
    ...stats,
    scope: session.userId,
    accounts: (stats.accounts || []).filter((account) => String(account.employeeId || "") === String(session.userId)),
  };
}

function scopeModonCacheDocument(document, session) {
  if (!document) return null;
  return {
    ...document,
    modonExternalStats: scopeModonStats(document.modonExternalStats, session),
  };
}

async function readModonCache(env) {
  const base = supabaseUrl(env).replace(/\/+$/, "");
  const table = encodeURIComponent(supabaseTable(env));
  const rowId = encodeURIComponent(modonCacheRowId(env));
  const key = supabaseKey(env);
  const headers = { Accept: "application/json", apikey: key };
  if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;
  const response = await fetchWithTimeout(`${base}/rest/v1/${table}?id=eq.${rowId}&select=state`, { method: "GET", headers }, "Supabase Modon cache");
  const data = await parseSupabaseResponse(env, response);
  return Array.isArray(data) ? data[0]?.state || null : data?.state || null;
}

async function writeModonCache(env, document) {
  const base = supabaseUrl(env).replace(/\/+$/, "");
  const table = encodeURIComponent(supabaseTable(env));
  const key = supabaseKey(env);
  const headers = {
    Accept: "application/json",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates,return=minimal",
  };
  if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;
  const response = await fetchWithTimeout(`${base}/rest/v1/${table}`, {
    method: "POST",
    headers,
    body: JSON.stringify([{ id: modonCacheRowId(env), state: document, updated_at: document.dataUpdatedAt }]),
  }, "Supabase Modon cache");
  await parseSupabaseResponse(env, response);
}

async function onlineStateProjection(env, fields) {
  if (!onlineDataUrl(env) && hasSupabaseConfig(env)) return supabaseStateProjection(env, fields);
  const state = normalizeOnlineData(await onlineStoreRequest(env, "GET"));
  return fields.reduce((result, field) => {
    result[field] = state[field];
    return result;
  }, {});
}

async function supabaseStateProjection(env, fields) {
  const base = supabaseUrl(env).replace(/\/+$/, "");
  const table = encodeURIComponent(supabaseTable(env));
  const rowId = encodeURIComponent(supabaseRowId(env));
  const key = supabaseKey(env);
  const headers = { Accept: "application/json", apikey: key };
  if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;
  const select = encodeURIComponent(fields.map((field) => `${field}:state->${field}`).join(","));
  const response = await fetchWithTimeout(`${base}/rest/v1/${table}?id=eq.${rowId}&select=${select}`, { method: "GET", headers }, "Supabase");
  const data = await parseSupabaseResponse(env, response);
  return Array.isArray(data) ? data[0] || {} : data || {};
}

async function onlineStoreRequest(env, method, payload) {
  if (!onlineDataUrl(env) && hasSupabaseConfig(env)) return supabaseStoreRequest(env, method, payload);
  if (method === "STATUS") {
    const data = await onlineStoreRequest(env, "GET");
    const state = normalizeOnlineData(data);
    return { revision: state.dataRevision || 0, updatedAt: state.dataUpdatedAt || null };
  }
  const headers = { "Accept": "application/json" };
  const token = onlineDataToken(env);
  if (token) headers.Authorization = `Bearer ${token}`;
  const options = { method, headers };
  if (method !== "GET") {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(payload);
  }
  const response = await fetchWithTimeout(onlineDataUrl(env), options, "Online storage");
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(data.msg || data.message || `خطأ في التخزين الأونلاين ${response.status}`);
  return data;
}

async function supabaseStoreRequest(env, method, payload) {
  const base = supabaseUrl(env).replace(/\/+$/, "");
  const table = encodeURIComponent(supabaseTable(env));
  const rowId = encodeURIComponent(supabaseRowId(env));
  const key = supabaseKey(env);
  const headers = {
    "Accept": "application/json",
    "apikey": key,
  };
  if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;
  if (method === "STATUS") {
    const statusSelect = encodeURIComponent("updated_at");
    const response = await fetchWithTimeout(`${base}/rest/v1/${table}?id=eq.${rowId}&select=${statusSelect}`, { method: "GET", headers }, "Supabase");
    const data = await parseSupabaseResponse(env, response);
    const row = Array.isArray(data) ? data[0] || {} : {};
    return {
      revision: 0,
      updatedAt: row.updated_at || null,
    };
  }
  if (method === "GET") {
    const response = await fetchWithTimeout(`${base}/rest/v1/${table}?id=eq.${rowId}&select=state`, { method: "GET", headers }, "Supabase");
    const data = await parseSupabaseResponse(env, response);
    if (!Array.isArray(data) || !data[0]?.state) {
      throw new Error(`صف البيانات ${supabaseRowId(env)} غير موجود في جدول Supabase ${supabaseTable(env)}. شغل supabase-setup.sql ثم هيئ التخزين.`);
    }
    return data[0].state;
  }
  if (method === "ATOMIC") {
    headers["Content-Type"] = "application/json";
    const response = await fetchWithTimeout(`${base}/rest/v1/rpc/jouri_save_state_atomic`, {
      method: "POST",
      headers,
      body: JSON.stringify({ p_state: payload.state, p_expected_revision: Number(payload.expectedRevision || 0) }),
    }, "Supabase");
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
      const rawMessage = data?.message || data?.details || `Supabase HTTP ${response.status}`;
      const error = new Error(rawMessage.includes("INSUFFICIENT_STOCK:") ? rawMessage.split("INSUFFICIENT_STOCK:")[1].trim() : rawMessage);
      if (rawMessage.includes("REVISION_CONFLICT")) error.code = "REVISION_CONFLICT";
      if (rawMessage.includes("INSUFFICIENT_STOCK")) error.code = "INSUFFICIENT_STOCK";
      if (rawMessage.includes("PRODUCT_IN_USE")) error.code = "PRODUCT_IN_USE";
      throw error;
    }
    return data;
  }
  if (method === "PATCH_ATOMIC") {
    headers["Content-Type"] = "application/json";
    const response = await fetchWithTimeout(`${base}/rest/v1/rpc/jouri_apply_state_patch_atomic`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        p_patch: payload.patch,
        p_expected_revision: Number(payload.expectedRevision || 0),
        p_operation_id: String(payload.operationId || ""),
      }),
    }, "Supabase");
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
      const rawMessage = data?.message || data?.details || `Supabase HTTP ${response.status}`;
      const error = new Error(rawMessage.includes("INSUFFICIENT_STOCK:") ? rawMessage.split("INSUFFICIENT_STOCK:")[1].trim() : rawMessage);
      if (response.status === 404 || data?.code === "PGRST202" || /jouri_apply_state_patch_atomic|could not find the function/i.test(rawMessage)) error.code = "PATCH_RPC_UNAVAILABLE";
      else if (rawMessage.includes("REVISION_CONFLICT")) error.code = "REVISION_CONFLICT";
      else if (rawMessage.includes("INSUFFICIENT_STOCK")) error.code = "INSUFFICIENT_STOCK";
      else if (rawMessage.includes("PRODUCT_IN_USE")) error.code = "PRODUCT_IN_USE";
      throw error;
    }
    return data;
  }
  headers["Content-Type"] = "application/json";
  headers["Prefer"] = "resolution=merge-duplicates,return=representation";
  const response = await fetchWithTimeout(`${base}/rest/v1/${table}`, {
    method: "POST",
    headers,
    body: JSON.stringify([{ id: supabaseRowId(env), state: payload, updated_at: new Date().toISOString() }]),
  }, "Supabase");
  await parseSupabaseResponse(env, response);
  return payload;
}

async function parseSupabaseResponse(env, response) {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message || data?.msg || `Supabase HTTP ${response.status}`;
    if ((message.includes("relation") && message.includes("does not exist")) || message.includes(`public.${supabaseTable(env)}`)) {
      throw new Error(`جدول Supabase ${supabaseTable(env)} غير موجود. شغل ملف supabase-setup.sql في SQL Editor.`);
    }
    throw new Error(message);
  }
  return data;
}

function normalizeOnlineData(data) {
  if (Array.isArray(data)) return data[0]?.state || {};
  if (data?.state) return data.state;
  if (data?.data?.state) return data.data.state;
  if (data?.data && typeof data.data === "object") return data.data;
  return data;
}

function compactStateForStorage(inputState) {
  const state = structuredClone(inputState || {});
  (state.deliveryOrders || []).forEach((order) => {
    delete order.raw_response;
    delete order.raw_last_modon;
  });
  (state.invoices || []).forEach((invoice) => {
    delete invoice.raw_response;
    delete invoice.raw_last_modon;
  });
  (state.purchaseInvoices || []).forEach((invoice) => {
    delete invoice.raw_response;
  });
  (state.deliveryInvoices || []).forEach((invoice) => {
    if (invoice.raw_response) {
      const orders = Array.isArray(invoice.raw_response.orders) ? invoice.raw_response.orders : [];
      invoice.remote_order_refs = compactRemoteOrderRefs(orders);
      delete invoice.raw_response;
    }
    // External-only Modon invoices/returns are read-only and never linked to the
    // local books. Persisting their per-order arrays is a major source of state
    // bloat, so keep only the lightweight header (counts + amount) and drop the
    // heavy order lists. The Modon center still shows them from a live fetch.
    const matchedCount = Array.isArray(invoice.order_ids)
      ? invoice.order_ids.length
      : Number(invoice.matched_orders_count || 0);
    const isExternalOnly = invoice.external_only === true || matchedCount === 0;
    if (isExternalOnly) {
      delete invoice.remote_order_refs;
      delete invoice.remote_return_orders;
      delete invoice.raw_response;
    }
  });
  (state.webhookLogs || []).forEach((log) => {
    if (log.payload && typeof log.payload === "object") {
      log.payload = {
        event_id: log.payload.event_id || log.event_id || "",
        event_type: log.payload.event_type || log.event_type || "",
        status: log.payload.status || "",
        status_id: log.payload.status_id || "",
        external_order_id: log.payload.external_order_id || log.external_order_id || "",
      };
    }
  });
  (state.auditLogs || []).forEach((log) => {
    log.before = compactAuditValue(log.before);
    log.after = compactAuditValue(log.after);
  });
  if (state.modonExternalStats?.accounts) {
    state.modonExternalStats.accounts = state.modonExternalStats.accounts.map((account) => ({
      ...account,
      orders: (account.orders || []).map((order) => ({
        employeeId: order.employeeId,
        employeeName: order.employeeName,
        modonUsername: order.modonUsername,
        externalOrderId: order.externalOrderId,
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        statusLabel: order.statusLabel,
        statusCategory: order.statusCategory,
        price: toNumber(order.price),
        deliveryPrice: toNumber(order.deliveryPrice),
        merchantPrice: toNumber(order.merchantPrice),
        city: order.city,
        region: order.region,
        createdAt: order.createdAt,
      })),
    }));
  }
  return state;
}

function compactAuditValue(value) {
  if (Array.isArray(value)) return value.map(compactAuditValue);
  if (!value || typeof value !== "object") return value;
  const compact = {};
  Object.entries(value).forEach(([key, nestedValue]) => {
    if (["raw_response", "raw_last_modon"].includes(key)) return;
    compact[key] = compactAuditValue(nestedValue);
  });
  return compact;
}

function compactRemoteOrderRefs(orders = []) {
  return orders.slice(0, 200).map((order) => ({
    external_order_id: firstRemoteOrderId(order),
    merchant_price: toNumber(order.merchant_price || order.merchantPrice || order.net_price || order.netPrice),
    price: toNumber(order.price || order.total_price || order.total || order.amount),
    status: String(order.status || order.status_name || order.order_status || "").trim(),
  })).filter((order) => order.external_order_id || order.merchant_price || order.price || order.status);
}

function firstRemoteOrderId(order = {}) {
  return String(order.external_order_id || order.order_id || order.orderId || order.id || order.qr_id || order.qrId || order.tracking_no || order.code || "").trim();
}

function toNumber(value) {
  const parsed = Number(String(value ?? "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function sanitizeStateSecrets(state) {
  if (!state || typeof state !== "object") return state;
  if (state.adminLogin) {
    delete state.adminLogin.password;
    delete state.adminLogin.passwordHash;
  }
  (state.employees || []).forEach((employee) => {
    employee.hasModonCredentials = Boolean(employee.modonToken || (employee.modonUsername && employee.modonPassword));
    delete employee.password;
    delete employee.passwordHash;
    delete employee.modonPassword;
    delete employee.modonToken;
  });
  return state;
}

function mergeStoredSecrets(incomingState, storedState, isAdmin) {
  const incoming = structuredClone(incomingState || {});
  const stored = storedState || {};
  incoming.adminLogin ||= {};
  incoming.adminLogin.username = isAdmin ? incoming.adminLogin.username || stored.adminLogin?.username : stored.adminLogin?.username;
  incoming.adminLogin.passwordHash = isAdmin && incoming.adminLogin.passwordHash ? incoming.adminLogin.passwordHash : stored.adminLogin?.passwordHash;
  if (!isAdmin) {
    incoming.employees = structuredClone(stored.employees || []);
    incoming.settings = structuredClone(stored.settings || incoming.settings || {});
    return incoming;
  }
  const storedEmployees = new Map((stored.employees || []).map((employee) => [employee.id, employee]));
  incoming.employees = (incoming.employees || []).map((employee) => {
    const previous = storedEmployees.get(employee.id) || {};
    const merged = { ...employee };
    merged.passwordHash = isAdmin && employee.passwordHash ? employee.passwordHash : previous.passwordHash || employee.passwordHash;
    merged.modonPassword = isAdmin && employee.modonPassword ? employee.modonPassword : previous.modonPassword || "";
    merged.modonToken = isAdmin && employee.modonToken ? employee.modonToken : previous.modonToken || "";
    delete merged.hasModonCredentials;
    return merged;
  });
  return incoming;
}

function validateStateShape(state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) return { valid: false, msg: "التخزين الأونلاين لم يرجع بيانات نظام صحيحة" };
  if (!state.schemaVersion) state.schemaVersion = 1;
  const requiredArrays = ["employees", "products", "suppliers", "invoices", "cashTransactions"];
  const missing = requiredArrays.filter((key) => !Array.isArray(state[key]));
  if (missing.length) return { valid: false, msg: `بيانات التخزين الأونلاين ناقصة: ${missing.join(", ")}` };
  if (!state.settings || typeof state.settings !== "object") return { valid: false, msg: "بيانات التخزين الأونلاين لا تحتوي إعدادات النظام" };
  return { valid: true };
}

function stampStateRevision(state, revision) {
  if (!state || typeof state !== "object") return state;
  state.dataRevision = Number(revision || 1);
  state.dataUpdatedAt ||= new Date().toISOString();
  return state;
}

function storageMeta(env) {
  return {
    configured: hasOnlineStoreConfig(env),
    provider: onlineDataUrl(env) ? "generic" : "supabase",
    writeMethod: onlineDataUrl(env) ? writeMethod(env) : "UPSERT",
    hasToken: Boolean(onlineDataToken(env)),
    hasSupabaseKey: Boolean(supabaseKey(env)),
    supabaseUrl: supabaseUrl(env),
    supabaseTable: supabaseTable(env),
  };
}

function hasOnlineStoreConfig(env) {
  return Boolean(onlineDataUrl(env) || hasSupabaseConfig(env));
}

function hasSupabaseConfig(env) {
  return Boolean(supabaseUrl(env) && supabaseKey(env));
}

function hasBusinessData(state) {
  return ["employees", "suppliers", "products", "invoices", "deliveryOrders", "purchaseInvoices", "customers", "cashTransactions", "stockMovements"]
    .some((key) => Array.isArray(state[key]) && state[key].length > 0);
}

function defaultStateTemplate() {
  return {
    schemaVersion: 1,
    dataRevision: 1,
    dataUpdatedAt: new Date().toISOString(),
    settings: { connected: false, company: defaultCompanySettings(), modon: defaultModonSettings() },
    activeEmployeeId: "all",
    reportEmployeeId: "all",
    reportOperationScope: "all",
    reportSaleModeScope: "all",
    currentUserId: null,
    adminLogin: { username: "admin", passwordHash: DEFAULT_ADMIN_PASSWORD_HASH },
    employees: [],
    suppliers: [],
    products: [],
    invoices: [],
    deliveryOrders: [],
    modonExternalStats: null,
    deliveryInvoices: [],
    invoiceAudits: [],
    auditLogs: [],
    purchaseInvoices: [],
    supplierDebts: [],
    supplierPayments: [],
    webhookLogs: [],
    stockMovements: [],
    customerDebts: [],
    customerDebtPayments: [],
    customers: [],
    personalDebts: [],
    vouchers: [],
    cashTransactions: [],
    lastSelectedInvoiceId: null,
    selectedSupplierId: null,
    selectedPurchaseInvoiceId: null,
    selectedProductId: null,
  };
}

function defaultCompanySettings() {
  return { name: "مفروشات جوري", phone: "", address: "", taxNo: "", footer: "شكراً لتعاملكم معنا", logoDataUrl: "" };
}

function defaultModonSettings() {
  return { priceMarkup: 1000, deliveryPrice: 4000 };
}

async function fetchWithTimeout(url, options = {}, label = "الخدمة الخارجية") {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") throw new Error(`${label} تأخرت في الرد. أعد المحاولة بعد لحظات.`);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function readJson(request) {
  const text = await request.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON body");
  }
}

function json(payload, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store, no-cache, must-revalidate", "X-App-Version": SERVER_BUILD_VERSION, ...corsHeaders() },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Client-Build",
    "Access-Control-Expose-Headers": "X-App-Version",
  };
}

// Enabled by default; set the STORE_VERSION_LOCK env var to "0"/"off" to disable.
function storeVersionLockEnabled(env) {
  const v = String((env && env.STORE_VERSION_LOCK) ?? "").trim().toLowerCase();
  return !(v === "0" || v === "off" || v === "false" || v === "no");
}

// Returns a 423 response when a hot write endpoint is hit by a client whose build
// does not match the deployed SERVER_BUILD_VERSION, otherwise null. Only the two
// high-volume save paths are gated; reads, login and status stay open so users can
// still sign in and load (and get prompted to refresh onto the new build).
function clientVersionGate(request, env, url) {
  if (!storeVersionLockEnabled(env)) return null;
  const method = request.method;
  const isHotWrite =
    (url.pathname === "/api/store" && (method === "POST" || method === "PUT")) ||
    (url.pathname === "/api/store/patch" && method === "POST");
  if (!isHotWrite) return null;
  const clientBuild = String(request.headers.get("X-Client-Build") || "").trim();
  if (clientBuild && clientBuild === SERVER_BUILD_VERSION) return null;
  return json({
    status: false,
    code: "CLIENT_OUTDATED",
    msg: "نسختك من البرنامج قديمة. حدّث الصفحة للحصول على آخر نسخة قبل الحفظ.",
    serverVersion: SERVER_BUILD_VERSION,
  }, 423);
}

function onlineDataUrl(env) { return env.ONLINE_DATA_URL || env.SPACE_DATA_URL || ""; }
function onlineDataToken(env) { return env.ONLINE_DATA_TOKEN || env.SPACE_DATA_TOKEN || ""; }
function writeMethod(env) { return env.ONLINE_DATA_WRITE_METHOD || "PUT"; }
function supabaseUrl(env) { return String(env.SUPABASE_URL || "").replace(/\/+$/, ""); }
function supabaseKey(env) { return env.SUPABASE_SERVICE_ROLE_KEY || ""; }
function supabaseTable(env) { return env.SUPABASE_TABLE || "jouri_app_state"; }
function supabaseRowId(env) { return env.SUPABASE_ROW_ID || "main"; }
function modonCacheRowId(env) { return env.SUPABASE_MODON_CACHE_ROW_ID || `${supabaseRowId(env)}-modon-cache`; }


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) return handleRequest(request, env);
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') return env.ASSETS.fetch(request);
    return new Response('Not found', { status: 404 });
  },
};
