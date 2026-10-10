"use strict";

const catalog = {
  cities: [
    { id: "1", name: "بغداد" },
    { id: "2", name: "البصرة" },
    { id: "3", name: "أربيل" },
    { id: "4", name: "نينوى" },
    { id: "5", name: "النجف" },
    { id: "6", name: "كربلاء" },
    { id: "7", name: "بابل" },
    { id: "8", name: "واسط" },
    { id: "9", name: "ذي قار" },
    { id: "10", name: "ميسان" },
    { id: "11", name: "المثنى" },
    { id: "12", name: "الديوانية" },
    { id: "13", name: "ديالى" },
    { id: "14", name: "صلاح الدين" },
    { id: "15", name: "الأنبار" },
    { id: "16", name: "كركوك" },
    { id: "17", name: "دهوك" },
    { id: "18", name: "السليمانية" },
  ],
  regions: {
    "1": [{ id: "101", name: "الكرادة" }, { id: "102", name: "شارع فلسطين" }, { id: "103", name: "المنصور" }, { id: "104", name: "زيونة" }, { id: "105", name: "الأعظمية" }, { id: "106", name: "الكاظمية" }, { id: "107", name: "الدورة" }, { id: "108", name: "الغزالية" }, { id: "109", name: "حي الجامعة" }, { id: "110", name: "العامرية" }, { id: "111", name: "مدينة الصدر" }, { id: "112", name: "الجادرية" }],
    "2": [{ id: "201", name: "العشار" }, { id: "202", name: "الجزائر" }, { id: "203", name: "البراضعية" }, { id: "204", name: "المعقل" }, { id: "205", name: "الزبير" }, { id: "206", name: "أبو الخصيب" }, { id: "207", name: "القرنة" }],
    "3": [{ id: "301", name: "عنكاوا" }, { id: "302", name: "الإسكان" }, { id: "303", name: "شارع 100" }, { id: "304", name: "المركز" }, { id: "305", name: "شقلاوة" }, { id: "306", name: "كويسنجق" }],
    "4": [{ id: "401", name: "الموصل الجديدة" }, { id: "402", name: "الزهور" }, { id: "403", name: "الجانب الأيسر" }, { id: "404", name: "الجانب الأيمن" }, { id: "405", name: "تلعفر" }, { id: "406", name: "الحمدانية" }],
    "5": [{ id: "501", name: "مركز النجف" }, { id: "502", name: "الكوفة" }, { id: "503", name: "الحنانة" }, { id: "504", name: "المشخاب" }, { id: "505", name: "المناذرة" }],
    "6": [{ id: "601", name: "مركز كربلاء" }, { id: "602", name: "حي الحسين" }, { id: "603", name: "الحر" }, { id: "604", name: "الهندية" }, { id: "605", name: "عين التمر" }],
    "7": [{ id: "701", name: "الحلة" }, { id: "702", name: "المسيب" }, { id: "703", name: "الهاشمية" }, { id: "704", name: "المحاويل" }, { id: "705", name: "الإسكندرية" }],
    "8": [{ id: "801", name: "الكوت" }, { id: "802", name: "الحي" }, { id: "803", name: "الصويرة" }, { id: "804", name: "النعمانية" }, { id: "805", name: "بدرة" }],
    "9": [{ id: "901", name: "الناصرية" }, { id: "902", name: "الشطرة" }, { id: "903", name: "سوق الشيوخ" }, { id: "904", name: "الرفاعي" }, { id: "905", name: "الجبايش" }],
    "10": [{ id: "1001", name: "العمارة" }, { id: "1002", name: "المجر الكبير" }, { id: "1003", name: "علي الغربي" }, { id: "1004", name: "الكحلاء" }, { id: "1005", name: "الميمونة" }],
    "11": [{ id: "1101", name: "السماوة" }, { id: "1102", name: "الرميثة" }, { id: "1103", name: "الخضر" }, { id: "1104", name: "الوركاء" }],
    "12": [{ id: "1201", name: "الديوانية" }, { id: "1202", name: "الشامية" }, { id: "1203", name: "عفك" }, { id: "1204", name: "الحمزة" }],
    "13": [{ id: "1301", name: "بعقوبة" }, { id: "1302", name: "المقدادية" }, { id: "1303", name: "الخالص" }, { id: "1304", name: "خانقين" }, { id: "1305", name: "بلدروز" }],
    "14": [{ id: "1401", name: "تكريت" }, { id: "1402", name: "سامراء" }, { id: "1403", name: "بلد" }, { id: "1404", name: "الدور" }, { id: "1405", name: "بيجي" }],
    "15": [{ id: "1501", name: "الرمادي" }, { id: "1502", name: "الفلوجة" }, { id: "1503", name: "هيت" }, { id: "1504", name: "حديثة" }, { id: "1505", name: "القائم" }],
    "16": [{ id: "1601", name: "مركز كركوك" }, { id: "1602", name: "رحيم آوه" }, { id: "1603", name: "واحد حزيران" }, { id: "1604", name: "دبس" }, { id: "1605", name: "الحويجة" }],
    "17": [{ id: "1701", name: "مركز دهوك" }, { id: "1702", name: "زاخو" }, { id: "1703", name: "سيميل" }, { id: "1704", name: "عقرة" }, { id: "1705", name: "العمادية" }],
    "18": [{ id: "1801", name: "مركز السليمانية" }, { id: "1802", name: "رانية" }, { id: "1803", name: "كلار" }, { id: "1804", name: "حلبجة" }, { id: "1805", name: "جمجمال" }],
  },
  packageSizes: [
    { id: "s", name: "صغير" },
    { id: "m", name: "متوسط" },
    { id: "l", name: "كبير" },
    { id: "xl", name: "أثاث كبير" },
  ],
};

const modonCatalog = {
  cities: [],
  regions: {},
  packageSizes: [],
};

let paidAmountTouched = false;
let purchasePaidTouched = false;
let profitDetailFilter = "total";
let carrierInvoiceFilter = "ready";
let editingInvoiceId = null;
let editingEmployeeId = null;
let editingModonOrderId = null;
let modonExternalPage = 1;
// Count of lost orders rebuilt in the current refresh, so we can write ONE
// summary audit instead of one per order (see healOrphanFromRemote).
let modonHealsThisRun = 0;
const listPages = {
  allInvoices: 1,
  invoiceArchive: 1,
  vouchers: 1,
  internalOrders: 1,
  modonDaily: 1,
  purchaseInvoices: 1,
  products: 1,
  productMovements: 1,
  inventory: 1,
  stockMovements: 1,
  openingStock: 1,
  deliveredCarrierInvoices: 1,
  returnCarrierInvoices: 1,
};
let pendingReturnOrderId = null;
let pendingSalesReturnInvoiceId = null;
let pendingCarrierCashInvoiceId = null;
let returnScannerStream = null;
let returnScannerActive = false;
let returnScannerControls = null;
let returnScannerReader = null;
let connectionRecoveryInFlight = false;
const pendingLocalSaveModonOrderIds = new Set();
const MODON_EXTERNAL_PAGE_SIZE = 10;
const LIST_PAGE_SIZES = Object.freeze({
  allInvoices: 20,
  invoiceArchive: 20,
  vouchers: 20,
  internalOrders: 15,
  modonDaily: 12,
  purchaseInvoices: 12,
  products: 16,
  productMovements: 20,
  inventory: 20,
  stockMovements: 20,
  openingStock: 12,
  deliveredCarrierInvoices: 10,
  returnCarrierInvoices: 10,
});
const APP_BUILD_VERSION = "2026.08.01-form-reset-v61";
const MODON_OPERATIONAL_START_DATE = "2026-07-07";
const MODON_HUB_TAB_STORAGE_KEY = "jouri.modon.hub.tab";
const MODON_API_SAFE_REQUEST_LIMIT = 45;
const MODON_API_RATE_WINDOW_MS = 30000;
const modonApiRequestTimes = [];
const API_TIMEOUT_MS = 45000;
const API_HEALTH_TIMEOUT_MS = 15000;
const API_RETRY_DELAY_MS = 450;
const diagnostics = {
  lastApiOkAt: "",
  lastApiErrorAt: "",
  lastApiOperation: "",
  lastApiUrl: "",
  lastApiStatus: "",
  lastApiDurationMs: 0,
  lastApiError: "",
};

async function acquireModonApiRequestSlot() {
  while (true) {
    const current = Date.now();
    const cutoff = current - MODON_API_RATE_WINDOW_MS;
    while (modonApiRequestTimes.length && modonApiRequestTimes[0] <= cutoff) modonApiRequestTimes.shift();
    if (modonApiRequestTimes.length < MODON_API_SAFE_REQUEST_LIMIT) {
      modonApiRequestTimes.push(current);
      return;
    }
    const waitMs = Math.max(50, modonApiRequestTimes[0] + MODON_API_RATE_WINDOW_MS - current + 25);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }
}
const STORED_DELIVERY_INVOICE_ORDER_LIMIT = 200;
// How many of the newest audit entries keep their heavy before/after snapshots
// when saved. Older entries keep who/what/when/details but drop the snapshots,
// so the saved state (and every save) stays small and fast.
const AUDIT_SNAPSHOT_KEEP = 100;

const statusMap = {
  new: { label: "طلب جديد", kind: "pending" },
  with_courier: { label: "مع المندوب", kind: "pending" },
  delivered: { label: "تم التسليم", kind: "ok" },
  issue: { label: "مشكلة", kind: "issue" },
  returned: { label: "راجع", kind: "danger" },
  cancelled: { label: "ملغي", kind: "danger" },
};

const permissionCatalog = [
  ["sales.create", "إنشاء فواتير"],
  ["sales.edit", "تعديل الفواتير"],
  ["sales.cancel", "إلغاء الفواتير"],
  ["sales.discount", "تعديل السعر والخصم"],
  ["sales.print", "طباعة الفواتير"],
  ["sales.viewArchive", "عرض الفواتير المحفوظة"],
  ["delivery.modon.create", "إنشاء طلبات Modon"],
  ["delivery.modon.follow", "متابعة طلبات Modon"],
  ["delivery.modon.invoices", "جلب فواتير Modon"],
  ["delivery.modon.confirmCash", "تأكيد قبض فواتير Modon"],
  ["delivery.modon.receiveReturns", "استلام راجع Modon"],
  ["inventory.view", "عرض المخزون"],
  ["inventory.manage", "إدخال وتعديل المخزون"],
  ["inventory.purchase", "فواتير الشراء"],
  ["inventory.purchase.cancel", "إلغاء فواتير الشراء"],
  ["debts.manage", "إدارة الديون"],
  ["debts.cancel", "إلغاء الديون الشخصية"],
  ["cash.manage", "إدارة القاصة"],
  ["cash.expense", "إنشاء سند صرف"],
  ["cash.payment", "إنشاء سند دفع"],
  ["cash.receipt", "إنشاء سند قبض"],
  ["cash.cancel", "إلغاء السندات"],
  ["reports.view", "عرض التقارير"],
  ["reports.profit", "عرض الأرباح"],
  ["employees.manage", "إدارة الموظفين والصلاحيات"],
  ["settings.manage", "إعدادات النظام"],
];

const permissionGroups = [
  { title: "المبيعات والفواتير", keys: ["sales.create", "sales.edit", "sales.cancel", "sales.discount", "sales.print", "sales.viewArchive"] },
  { title: "Modon والتوصيل", keys: ["delivery.modon.create", "delivery.modon.follow", "delivery.modon.invoices", "delivery.modon.confirmCash", "delivery.modon.receiveReturns"] },
  { title: "المشتريات والمخزون", keys: ["inventory.view", "inventory.manage", "inventory.purchase", "inventory.purchase.cancel"] },
  { title: "الديون والأقساط", keys: ["debts.manage", "debts.cancel"] },
  { title: "القاصة والسندات", keys: ["cash.manage", "cash.expense", "cash.payment", "cash.receipt", "cash.cancel"] },
  { title: "التقارير", keys: ["reports.view", "reports.profit"] },
  { title: "الإدارة", keys: ["employees.manage", "settings.manage"] },
];

const permissionPresets = {
  sales: ["sales.create", "sales.print", "sales.viewArchive", "inventory.view"],
  modon: ["delivery.modon.create", "delivery.modon.follow"],
  accountant: ["sales.create", "sales.edit", "sales.print", "sales.viewArchive", "debts.manage", "debts.cancel", "cash.manage", "cash.expense", "cash.payment", "cash.receipt", "cash.cancel", "reports.view", "delivery.modon.follow", "delivery.modon.invoices", "delivery.modon.confirmCash"],
  warehouse: ["inventory.view", "inventory.manage", "inventory.purchase", "inventory.purchase.cancel", "delivery.modon.receiveReturns", "reports.view"],
  manager: permissionCatalog.map(([key]) => key),
};

const permissionAliases = {
  "delivery.modon.create": ["delivery.modon"],
  "delivery.modon.follow": ["delivery.modon"],
  "delivery.modon.invoices": ["delivery.modon"],
  "delivery.modon.confirmCash": ["delivery.modon", "cash.manage"],
  "delivery.modon.receiveReturns": ["delivery.modon", "inventory.manage"],
  "inventory.purchase": ["inventory.manage"],
  "inventory.purchase.cancel": ["inventory.manage"],
  "cash.expense": ["cash.manage"],
  "cash.payment": ["cash.manage"],
  "cash.receipt": ["cash.manage"],
  "sales.print": ["sales.create"],
  "sales.viewArchive": ["sales.create"],
  "reports.profit": ["reports.view"],
};

const DEFAULT_ADMIN_PASSWORD_HASH = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
const DEFAULT_EMPLOYEE_PASSWORD_HASH = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";
const MODON_AUTO_SYNC_MS = 180000;
const REALTIME_FALLBACK_MS = 20000;
const OFFLINE_AFTER_FAILURES = 3;
const LOCAL_SESSION_KEY = "jouri_current_user_id";
const API_SESSION_TOKEN_KEY = "jouri_api_session_token";
const LOCAL_STATE_KEYS = new Set([
  "currentUserId",
  "activeEmployeeId",
  "reportEmployeeId",
  "reportOperationScope",
  "reportSaleModeScope",
  "reportDate",
  "lastSelectedInvoiceId",
  "selectedSupplierId",
  "selectedPurchaseInvoiceId",
  "selectedProductId",
]);
const PATCHABLE_STATE_COLLECTIONS = Object.freeze([
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
const PATCH_IGNORED_STATE_KEYS = new Set([
  "dataRevision",
  "dataUpdatedAt",
  "modonExternalStats",
  "_syncOperations",
]);
const TRANSIENT_STORAGE_SETTING_KEYS = [
  "storageConnected",
  "storageReconnecting",
  "storageMessage",
  "localPreview",
];

const modonStatusKeywords = {
  cancelled: [
    "cancelled",
    "canceled",
    "ملغي",
    "ملغى",
    "ملغاة",
    "تم تعطيل الطلب من قبل العميل",
    "تم تعطيله من قبل العميل",
    "تعطيل الطلب",
  ],
  delivered: [
    "delivered",
    "واصل",
    "واصلة",
    "تم التسليم",
    "تم تسليم",
    "تسليم الطلب الى الزبون",
    "تسليم الطلب إلى الزبون",
    "الطلبات الواصلة",
  ],
  returned: [
    "returned",
    "راجع",
    "راجعة",
    "رواجع",
    "تم الارجاع",
    "تم الإرجاع",
    "ارجاع",
    "إرجاع",
    "مخزن الراجع",
    "\u0627\u0631\u062c\u0627\u0639 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644",
    "\u0625\u0631\u062c\u0627\u0639 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644",
    "\u0627\u0631\u0633\u0627\u0644 \u0627\u0644\u0649 \u0645\u062e\u0627\u0632\u0646 \u0648\u0645\u0633\u062a\u0648\u062f\u0639\u0627\u062a \u0645\u062f\u0646",
    "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0645\u062e\u0627\u0632\u0646 \u0648\u0645\u0633\u062a\u0648\u062f\u0639\u0627\u062a \u0645\u062f\u0646",
    "\u0645\u062e\u0627\u0632\u0646 \u0648\u0645\u0633\u062a\u0648\u062f\u0639\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
  ],
  withCourier: [
    "في عهدة كابتن الاستلام",
    "كابتن الاستلام",
    "مندوب الاستلام",
    "مع مندوب الاستلام",
    "مع المندوب",
    "استلامه من قبل السائق",
    "استلمه السائق",
  ],
  issues: [
    "issue",
    "problem",
    "مشاكل",
    "المشاكل",
    "مشكلة",
    "تأجيل",
    "تاجيل",
    "مؤجل",
    "لم يتم",
    "رفض",
    "مرفوض",
    "فشل",
  ],
};

const viewPermissions = {
  dashboard: "reports.view",
  sales: "sales.create",
  purchaseInvoices: "inventory.purchase",
  invoiceArchive: "sales.viewArchive",
  orders: "delivery.modon.create",
  modonToday: "delivery.modon.follow",
  modonFollow: "delivery.modon.follow",
  employees: "employees.manage",
  products: "inventory.manage",
  inventory: "inventory.view",
  suppliers: "inventory.manage",
  vouchers: "cash.receipt",
  expenseVoucher: "cash.expense",
  paymentVoucher: "cash.payment",
  receiptVoucher: "cash.receipt",
  accounts: "reports.view",
  carrierInvoices: "delivery.modon.invoices",
  modonReturns: "delivery.modon.receiveReturns",
  customers: "sales.create",
  reports: "reports.view",
  settings: "settings.manage",
};

const roleLabels = {
  sales: "موظف مبيعات",
  modon: "موظف Modon",
  accountant: "محاسب",
  warehouse: "مسؤول مخزون",
  manager: "مدير",
};

const titles = {
  dashboard: ["لوحة الحسابات", "ملخص الإدارة لكل المبيعات، القاصة، المخزون، الديون، وحسابات Modon."],
  sales: ["فاتورة بيع", "بيع نقدي أو دين زبون أو تقسيط؛ طلبات Modon لها قسم مستقل."],
  invoiceArchive: ["الفواتير", "سجل موحد لمراجعة فواتير الزبائن والموردين وطباعتها."],
  orders: ["إنشاء طلب Modon", "إنشاء طلب واضح من بيانات الزبون حتى التسعير والإرسال."],
  modonToday: ["كشوف طلبات Modon", "اعرض واطبع الطلبات يوميًا أو شهريًا أو ضمن نطاق مخصص."],
  modonFollow: ["مركز Modon", "إنشاء الوصل، تتبع الطلب، المطابقة، التحصيل والراجع من مكان واحد."],
  employees: ["حسابات الموظفين", "كل موظف له حساب Modon مستقل وتقرير يومي منفصل."],
  products: ["المنتجات", "كتالوج المنتجات والأسعار والمورد المرتبط وحالة المخزون."],
  inventory: ["المخزون", "الأرصدة الحالية، قيمة المخزون، التنبيهات وحركة كل منتج."],
  openingStock: ["المخزون الافتتاحي", "تثبيت أرصدة بداية النظام بدون اعتبارها فاتورة شراء."],
  purchaseInvoices: ["فاتورة شراء", "شراء من الموردين برأس فاتورة وبنود تؤثر على المخزون والقاصة أو ذمة المورد."],
  suppliers: ["الموردين", "إدارة الموردين وربطهم بإدخالات المخزون."],
  vouchers: ["مركز السندات", "سندات القبض والدفع والصرف وديون الزبائن اليدوية."],
  expenseVoucher: ["سند صرف", "مصروف إداري يخصم من القاصة."],
  paymentVoucher: ["سند دفع", "دفع من القاصة لا يسجل كمصروف إداري."],
  receiptVoucher: ["سند قبض", "قبض نقدي يزيد رصيد القاصة."],
  accounts: ["حساب شركة التوصيل", "المستحقات، أجور التوصيل، وفواتير Modon حسب الحساب."],
  carrierInvoices: ["التحصيل والفواتير", "فواتير الطلبات الواصلة وتأكيد استلام مبالغها من Modon."],
  modonReturns: ["الراجع والمخزون", "استلام الراجع بالباركود وإعادة القطع إلى المخزون بصورة موثقة."],
  customers: ["حسابات الزبائن", "كشف موحد للفواتير والديون والأقساط والدفعات لكل زبون."],
  reports: ["التقارير", "تقارير يومية فردية ومجمعة لكل حسابات الموظفين."],
  settings: ["إعدادات عامة", "ملاحظات تشغيلية وبنية الربط."],
};

const pageActions = {
  dashboard: { label: "فاتورة بيع", view: "sales" },
  sales: { label: "الفواتير", view: "invoiceArchive" },
  purchaseInvoices: { label: "الفواتير", view: "invoiceArchive" },
  invoiceArchive: { label: "حسابات الزبائن", view: "customers" },
  orders: { label: "طلبات اليوم", view: "modonToday" },
  modonToday: { label: "طلب Modon جديد", view: "orders" },
  modonFollow: { hidden: true },
  employees: { label: "التقارير", view: "reports" },
  products: { label: "فاتورة شراء", view: "purchaseInvoices" },
  inventory: { label: "مخزون افتتاحي", target: "toggleOpeningStock" },
  suppliers: { label: "فاتورة شراء", view: "purchaseInvoices" },
  vouchers: { label: "إنشاء سند", target: "openVoucherCreate" },
  expenseVoucher: { label: "سند دفع", view: "paymentVoucher" },
  paymentVoucher: { label: "سند قبض", view: "receiptVoucher" },
  receiptVoucher: { label: "سند صرف", view: "expenseVoucher" },
  accounts: { label: "فواتير Modon", view: "carrierInvoices" },
  carrierInvoices: { label: "متابعة Modon", view: "modonFollow" },
  modonReturns: { label: "متابعة Modon", view: "modonFollow" },
  customers: { label: "تسجيل قبض", target: "openCustomerPayment" },
  reports: { label: "طباعة التقرير", target: "printReport" },
  settings: { label: "حفظ الإعدادات", target: "companySettingsForm" },
};

function stateValueEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function buildStatePatch(baseState = {}, nextState = {}) {
  const collections = {};
  let requiresFullSave = false;
  const patchable = new Set(PATCHABLE_STATE_COLLECTIONS);
  const keys = new Set([...Object.keys(baseState || {}), ...Object.keys(nextState || {})]);

  keys.forEach((key) => {
    if (PATCH_IGNORED_STATE_KEYS.has(key)) return;
    let before = baseState?.[key];
    let after = nextState?.[key];
    if (key === "settings") {
      before = structuredClone(before || {});
      after = structuredClone(after || {});
      TRANSIENT_STORAGE_SETTING_KEYS.forEach((settingKey) => {
        delete before[settingKey];
        delete after[settingKey];
      });
    }
    if (stateValueEqual(before, after)) return;
    if (!patchable.has(key) || !Array.isArray(before) || !Array.isArray(after)) {
      requiresFullSave = true;
      return;
    }
    const rows = [...before, ...after];
    if (!rows.every((row) => row && typeof row === "object" && clean(row.id))) {
      requiresFullSave = true;
      return;
    }
    const beforeMap = new Map(before.map((row) => [String(row.id), row]));
    const afterMap = new Map(after.map((row) => [String(row.id), row]));
    const upserts = after
      .filter((row) => !beforeMap.has(String(row.id)) || !stateValueEqual(beforeMap.get(String(row.id)), row))
      .map((row) => structuredClone(row));
    const deletes = before
      .filter((row) => !afterMap.has(String(row.id)))
      .map((row) => String(row.id));
    const beforeOrder = before.map((row) => String(row.id));
    const afterOrder = after.map((row) => String(row.id));
    const orderChanged = !stateValueEqual(beforeOrder, afterOrder);
    if (upserts.length || deletes.length || orderChanged) {
      collections[key] = {
        upserts,
        deletes,
        ...(orderChanged ? { order: afterOrder } : {}),
      };
    }
  });

  return {
    changed: requiresFullSave || Object.keys(collections).length > 0,
    requiresFullSave,
    patch: { version: 1, collections },
  };
}

function mergeStateArrays(base = [], local = [], remote = []) {
  const canMergeById = [...base, ...local, ...remote].every((item) => item && typeof item === "object" && item.id != null);
  if (!canMergeById) return stateValueEqual(local, base) ? structuredClone(remote) : structuredClone(local);
  const baseMap = new Map(base.map((item) => [String(item.id), item]));
  const localMap = new Map(local.map((item) => [String(item.id), item]));
  const result = new Map(remote.map((item) => [String(item.id), structuredClone(item)]));
  localMap.forEach((item, id) => {
    const baseItem = baseMap.get(id);
    if (!baseItem || !stateValueEqual(item, baseItem)) result.set(id, structuredClone(item));
  });
  baseMap.forEach((item, id) => {
    if (!localMap.has(id)) result.delete(id);
  });
  const order = [...local.map((item) => String(item.id)), ...remote.map((item) => String(item.id))];
  return [...new Set(order)].map((id) => result.get(id)).filter(Boolean);
}

function mergeStateValues(base, local, remote) {
  if (stateValueEqual(local, base)) return structuredClone(remote);
  if (stateValueEqual(remote, base) || stateValueEqual(local, remote)) return structuredClone(local);
  if (Array.isArray(local) && Array.isArray(remote)) return mergeStateArrays(Array.isArray(base) ? base : [], local, remote);
  if (local && remote && typeof local === "object" && typeof remote === "object") {
    const output = {};
    const keys = new Set([...Object.keys(base || {}), ...Object.keys(local), ...Object.keys(remote)]);
    keys.forEach((key) => {
      output[key] = mergeStateValues(base?.[key], local[key], remote[key]);
    });
    return output;
  }
  return structuredClone(local);
}

function mergeStateVersions(base, local, remote) {
  const merged = mergeStateValues(base || {}, local || {}, remote || {});
  merged.dataRevision = number(remote?.dataRevision || 1);
  merged.dataUpdatedAt = remote?.dataUpdatedAt || now();
  return merged;
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
      if (invoice.type === "returned") invoice.remote_return_orders = orders.map(compactModonReturnOrder).slice(0, STORED_DELIVERY_INVOICE_ORDER_LIMIT);
      else invoice.remote_order_refs = compactRemoteOrderRefs(orders);
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
  // Audit before/after snapshots are the single biggest state bloat (a full
  // object pair per entry). Keeping them for every entry made the saved row
  // huge, so every save rebuilt a multi-MB array and took ~14s — which caused
  // the REVISION_CONFLICT storm on multi-device saves. Keep the diff only for
  // the newest entries (where it is actually reviewed); older entries retain
  // who/what/when/details but drop the heavy snapshots.
  (state.auditLogs || []).forEach((log, index) => {
    if (!log || typeof log !== "object") return;
    if (index < AUDIT_SNAPSHOT_KEEP) {
      log.before = compactAuditValue(log.before);
      log.after = compactAuditValue(log.after);
    } else {
      delete log.before;
      delete log.after;
    }
  });
  if (state.modonExternalStats?.accounts) {
    state.modonExternalStats.accounts = state.modonExternalStats.accounts.map((account) => ({
      ...account,
      orders: (account.orders || []).map((order) => ({
        employeeId: order.employeeId,
        employeeName: order.employeeName,
        modonUsername: order.modonUsername,
        externalOrderId: order.externalOrderId,
        externalOrderIds: remoteOrderIds(order),
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        statusLabel: order.statusLabel,
        statusCategory: order.statusCategory,
        price: number(order.price),
        deliveryPrice: number(order.deliveryPrice),
        merchantPrice: number(order.merchantPrice),
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
  return orders.slice(0, STORED_DELIVERY_INVOICE_ORDER_LIMIT).map((order) => ({
    external_order_id: remoteOrderIds(order)[0] || "",
    merchant_price: number(order.merchant_price || order.merchantPrice || order.net_price || order.netPrice),
    price: number(order.price || order.total_price || order.total || order.amount),
    status: clean(order.status || order.status_name || order.order_status || ""),
  })).filter((order) => order.external_order_id || order.merchant_price || order.price || order.status);
}

class Repository {
  constructor() {
    this.state = this.defaultState();
    this.online = false;
    this.saveTimer = null;
    this.flushInFlight = null;
    this.flushRequested = false;
    this.loadedRevision = 0;
    this.remoteUpdatedAt = "";
    this.baseState = null;
    this.syncTimer = null;
    this.syncInFlight = false;
    this.realtimeChannel = null;
    this.connectionFailures = 0;
    this.modonCacheReady = false;
    this.modonCacheLoadPromise = null;
    this.modonCacheMigrationChecked = false;
    this.migrate();
  }

  defaultState() {
    return {
      schemaVersion: 1,
      dataRevision: 1,
      dataUpdatedAt: now(),
      settings: { connected: true, company: defaultCompanySettings() },
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

  async loadRemote() {
    const localContext = this.captureLocalContext();
    let loaded = false;
    try {
      if (apiSessionToken()) await this.ensureModonCacheMigrated();
      const response = await apiGet("/api/store", { operation: "load-store" });
      if (response?.data && typeof response.data === "object" && Object.keys(response.data).length) {
        this.state = response.data;
      }
      this.loadedRevision = Number(this.state.dataRevision || response?.meta?.revision || 1);
      this.remoteUpdatedAt = response.updatedAt || "";
      this.state.settings ||= {};
      this.state.settings.localPreview = Boolean(response?.meta?.preview || response?.preview);
      this.markStorageOnline(this.state.settings.localPreview
        ? `معاينة محلية - نسخة ${this.loadedRevision} - لا تؤثر على الموقع المنشور`
        : `التخزين الأونلاين متصل - نسخة ${this.loadedRevision}`);
      loaded = true;
    } catch (error) {
      this.state.settings ||= {};
      if (error.code === "AUTH_REQUIRED") {
        try {
          sessionStorage.removeItem(API_SESSION_TOKEN_KEY);
          sessionStorage.removeItem(LOCAL_SESSION_KEY);
          localStorage.removeItem(API_SESSION_TOKEN_KEY);
          localStorage.removeItem(LOCAL_SESSION_KEY);
        } catch {}
        localContext.currentUserId = null;
        localContext.activeEmployeeId = "all";
        localContext.reportEmployeeId = "all";
        this.state.currentUserId = null;
        this.online = true;
        this.state.settings.storageConnected = true;
        this.state.settings.storageReconnecting = false;
        this.state.settings.storageMessage = "التخزين متصل - سجل الدخول للمتابعة";
      } else {
        this.markStorageProblem(error, "تعذر تحميل البيانات من التخزين الأونلاين");
      }
    }
    this.migrate();
    this.restoreLocalContext(localContext);
    this.baseState = this.serverSnapshot();
    if (loaded && apiSessionToken()) this.loadModonCacheInBackground();
    return loaded;
  }

  async ensureModonCacheMigrated() {
    if (this.modonCacheMigrationChecked) return true;
    try {
      await apiPost("/api/store/migrate-modon-cache", {}, {
        attempts: 1,
        timeoutMs: API_TIMEOUT_MS,
        operation: "migrate-modon-cache",
      });
      this.modonCacheMigrationChecked = true;
      return true;
    } catch {
      return false;
    }
  }

  loadModonCacheInBackground() {
    if (this.modonCacheLoadPromise) return this.modonCacheLoadPromise;
    this.modonCacheLoadPromise = this.loadModonCache()
      .catch(() => false)
      .finally(() => { this.modonCacheLoadPromise = null; });
    return this.modonCacheLoadPromise;
  }

  async loadModonCache() {
    const legacyStats = this.state.modonExternalStats || null;
    try {
      const response = await apiGet("/api/modon/cache", {
        timeoutMs: API_HEALTH_TIMEOUT_MS,
        operation: "load-modon-cache",
      });
      const remoteStats = response?.data?.modonExternalStats || null;
      if (remoteStats) this.state.modonExternalStats = remoteStats;
      else if (legacyStats) await this.saveModonCache(legacyStats);
      this.modonCacheReady = true;
      this.baseState = this.serverSnapshot();
      if (document.readyState !== "loading") renderActiveView();
      return true;
    } catch (error) {
      this.modonCacheReady = false;
      if (legacyStats) this.state.modonExternalStats = legacyStats;
      return false;
    }
  }

  async saveModonCache(stats = this.state.modonExternalStats) {
    if (!stats) {
      this.modonCacheReady = true;
      return true;
    }
    const response = await apiPost("/api/modon/cache", { modonExternalStats: stats }, {
      retry: true,
      operation: "save-modon-cache",
    });
    const savedStats = response?.data?.modonExternalStats || null;
    if (savedStats) this.state.modonExternalStats = savedStats;
    this.modonCacheReady = true;
    this.baseState = this.serverSnapshot();
    return true;
  }

  migrate() {
    const state = this.state;
    state.schemaVersion ||= 1;
    state.dataRevision ||= this.loadedRevision || 1;
    state.dataUpdatedAt ||= now();
    state.employees ||= [];
    state.suppliers ||= [];
    state.products ||= [];
    state.customerDebts ||= [];
    state.customerDebtPayments ||= [];
    state.customers ||= [];
    state.personalDebts ||= [];
    state.vouchers ||= [];
    state.cashTransactions ||= [];
    state.activeEmployeeId ||= "all";
    state.reportEmployeeId ||= "all";
    state.reportOperationScope ||= "all";
    state.reportSaleModeScope ||= "all";
    state.reportDate ||= today();
    state.adminLogin ||= { username: "admin", passwordHash: DEFAULT_ADMIN_PASSWORD_HASH };
    if (state.currentUserId === undefined) state.currentUserId = null;
    state.deliveryInvoices ||= [];
    state.invoiceAudits ||= [];
    state.auditLogs ||= [];
    state.purchaseInvoices ||= [];
    state.supplierDebts ||= [];
    state.supplierPayments ||= [];
    state.webhookLogs ||= [];
    state.stockMovements ||= [];
    state.deliveryOrders ||= [];
    state.modonExternalStats ||= null;
    state.invoices ||= [];
    state.selectedSupplierId ||= state.suppliers?.[0]?.id || null;
    state.selectedPurchaseInvoiceId ||= null;
    state.selectedProductId ||= state.products?.[0]?.id || null;
    state.settings ||= { connected: true };
    state.settings.company ||= defaultCompanySettings();
    repairCorruptedCompanySettings(state.settings.company);
    repairCorruptedAuditLogs(state.auditLogs);
    state.settings.modon ||= defaultModonSettings();
    state.settings.modon.priceMarkup = number(state.settings.modon.priceMarkup ?? 1000);
    state.settings.modon.deliveryPrice = number(state.settings.modon.deliveryPrice ?? 4000);
    state.employees.forEach((employee) => {
      if (!permissionPresets[employee.role]) employee.role = employee.role === "إدارة" ? "manager" : employee.role === "محاسب" ? "accountant" : "sales";
      employee.permissions ||= permissionPresets[employee.role] || permissionPresets.sales;
      if (employee.role === "manager") employee.permissions = permissionPresets.manager;
      if (employee.role === "accountant") {
        ["sales.edit", "debts.cancel", "cash.cancel"].forEach((permission) => {
          if (!employee.permissions.includes(permission)) employee.permissions.push(permission);
        });
      }
      employee.username ||= suggestedUsername(employee.name, employee.id);
      employee.modonPassword ||= "";
      employee.active = employee.active !== false;
    });
    state.products.forEach((product) => {
      if (product.supplierId == null) product.supplierId = "";
      product.category ||= "غير مصنف";
      product.openingQty ||= 0;
      product.retailPrice = number(product.retailPrice ?? product.price);
      product.wholesalePrice = number(product.wholesalePrice ?? product.retailPrice);
      product.price = product.retailPrice;
    });
    state.suppliers.forEach((supplier) => {
      if (supplier.openingPayable == null && supplier.openingBalance > 0) supplier.openingPayable = supplier.openingBalance;
      if (supplier.openingReceivable == null) supplier.openingReceivable = supplier.openingBalance < 0 ? Math.abs(supplier.openingBalance) : 0;
      supplier.openingPayable ||= 0;
      supplier.openingReceivable ||= 0;
    });
    state.invoices.forEach((invoice) => {
      const invoiceLines = invoice.lines || [];
      invoiceLines.forEach((line) => { line.priceType ||= "retail"; });
      invoice.priceType ||= invoiceLines.length && invoiceLines.every((line) => line.priceType === "wholesale") ? "wholesale" : "retail";
      if (!["customerDebt", "installment"].includes(invoice.saleMode) || clean(invoice.customerPhone)) return;
      invoice.customerPhone = `customer:${invoice.id}`;
      const debt = state.customerDebts.find((item) => item.invoiceId === invoice.id);
      if (debt) debt.customerPhone = invoice.customerPhone;
      if (!state.customers.some((item) => item.phone === invoice.customerPhone)) {
        state.customers.unshift({
          id: crypto.randomUUID(),
          name: clean(invoice.customerName) || "زبون بدون اسم",
          phone: invoice.customerPhone,
          createdAt: invoice.createdAt || now(),
          updatedAt: now(),
        });
      }
    });
    // Rebuild any Modon deliveryOrder that was lost while its invoice survived.
    // Deterministic (keyed on the qr_id now stamped on the invoice) and
    // idempotent, so it self-heals after every load, merge, or snapshot restore.
    reconcileMissingDeliveryOrders(state);
  }

  markStorageOnline(message = "") {
    this.connectionFailures = 0;
    this.online = true;
    this.state.settings ||= {};
    this.state.settings.storageConnected = true;
    this.state.settings.storageReconnecting = false;
    this.state.settings.storageMessage = message || `التخزين الأونلاين متصل - نسخة ${this.loadedRevision || this.state.dataRevision || 1}`;
  }

  markStorageProblem(error, fallback = "تعذر الاتصال المؤقت بالتخزين الأونلاين") {
    this.connectionFailures += 1;
    this.state.settings ||= {};
    const message = error?.message || fallback;
    if (navigator.onLine !== false) {
      const repeatedFailure = this.connectionFailures >= OFFLINE_AFTER_FAILURES;
      this.online = true;
      this.state.settings.storageConnected = true;
      this.state.settings.storageReconnecting = repeatedFailure;
      this.state.settings.storageMessage = repeatedFailure
        ? `الجهاز متصل، لكن خدمة البيانات لم تستجب بعد ${this.connectionFailures} محاولات. ${message}`
        : `فشل فحص عابر (${this.connectionFailures}/${OFFLINE_AFTER_FAILURES})، وسيعاد تلقائيًا. ${message}`;
      return;
    }
    this.online = false;
    this.state.settings.storageConnected = false;
    this.state.settings.storageReconnecting = false;
    this.state.settings.storageMessage = message;
  }

  captureLocalContext() {
    let sessionUserId = "";
    try {
      sessionUserId = apiSessionToken() ? sessionStorage.getItem(LOCAL_SESSION_KEY) || localStorage.getItem(LOCAL_SESSION_KEY) || "" : "";
    } catch {}
    return {
      currentUserId: sessionUserId || this.state.currentUserId || null,
      activeEmployeeId: this.state.activeEmployeeId || "all",
      reportEmployeeId: this.state.reportEmployeeId || "all",
      reportOperationScope: this.state.reportOperationScope || "all",
      reportSaleModeScope: this.state.reportSaleModeScope || "all",
      reportDate: this.state.reportDate || today(),
      lastSelectedInvoiceId: this.state.lastSelectedInvoiceId || null,
      selectedSupplierId: this.state.selectedSupplierId || null,
      selectedPurchaseInvoiceId: this.state.selectedPurchaseInvoiceId || null,
      selectedProductId: this.state.selectedProductId || null,
    };
  }

  restoreLocalContext(context = {}) {
    const requestedUserId = context.currentUserId || null;
    const employee = requestedUserId && requestedUserId !== "admin"
      ? this.state.employees.find((item) => item.id === requestedUserId && item.active)
      : null;
    this.state.currentUserId = requestedUserId === "admin" || employee ? requestedUserId : null;
    this.state.activeEmployeeId = this.state.currentUserId === "admin" || employee?.role === "manager"
      ? context.activeEmployeeId || "all"
      : employee?.id || "";
    this.state.reportEmployeeId = context.reportEmployeeId || (this.state.currentUserId === "admin" ? "all" : employee?.id || "all");
    this.state.reportOperationScope = context.reportOperationScope || "all";
    this.state.reportSaleModeScope = context.reportSaleModeScope || "all";
    this.state.reportDate = context.reportDate || today();
    this.state.lastSelectedInvoiceId = context.lastSelectedInvoiceId || null;
    this.state.selectedSupplierId = context.selectedSupplierId || this.state.suppliers[0]?.id || null;
    this.state.selectedPurchaseInvoiceId = context.selectedPurchaseInvoiceId || null;
    this.state.selectedProductId = context.selectedProductId || null;
    try {
      const storage = localStorage.getItem(API_SESSION_TOKEN_KEY) ? localStorage : sessionStorage;
      if (this.state.currentUserId) storage.setItem(LOCAL_SESSION_KEY, this.state.currentUserId);
      else {
        sessionStorage.removeItem(LOCAL_SESSION_KEY);
        localStorage.removeItem(LOCAL_SESSION_KEY);
      }
    } catch {}
  }

  serverSnapshot() {
    const snapshot = structuredClone(this.state);
    LOCAL_STATE_KEYS.forEach((key) => {
      if (key === "currentUserId") snapshot[key] = null;
      else if (["activeEmployeeId", "reportEmployeeId", "reportOperationScope", "reportSaleModeScope"].includes(key)) snapshot[key] = "all";
      else if (key === "reportDate") snapshot[key] = today();
      else snapshot[key] = null;
    });
    if (snapshot.settings && typeof snapshot.settings === "object") {
      TRANSIENT_STORAGE_SETTING_KEYS.forEach((key) => delete snapshot.settings[key]);
    }
    // Keep the audit trail bounded so it never bloats the state or the
    // per-save integrity scans (newest kept; unshift stores newest first).
    if (Array.isArray(snapshot.auditLogs) && snapshot.auditLogs.length > 3000) snapshot.auditLogs = snapshot.auditLogs.slice(0, 3000);
    if (Array.isArray(snapshot.invoiceAudits) && snapshot.invoiceAudits.length > 3000) snapshot.invoiceAudits = snapshot.invoiceAudits.slice(0, 3000);
    if (this.modonCacheReady) {
      snapshot.modonExternalStats = null;
    } else if (snapshot.modonExternalStats) {
      // Safety valve: if the Modon cache could not migrate to its own row, never
      // let it balloon the main state (that is what timed out /api/store). Drop
      // it from the main save once it grows past a safe size; it is a cache and
      // is rebuilt on the next Modon refresh.
      try {
        if (JSON.stringify(snapshot.modonExternalStats).length > 400000) snapshot.modonExternalStats = null;
      } catch {
        snapshot.modonExternalStats = null;
      }
    }
    return compactStateForStorage(snapshot);
  }

  async persistSnapshot(snapshot, expectedRevision, operation, baseSnapshot = this.baseState || {}) {
    const change = buildStatePatch(baseSnapshot, snapshot);
    if (!change.changed) {
      return { status: true, unchanged: true, revision: expectedRevision, updatedAt: this.remoteUpdatedAt || "" };
    }
    if (!change.requiresFullSave) {
      const operationId = crypto.randomUUID();
      try {
        return await apiPost("/api/store/patch", {
          patch: change.patch,
          clientRevision: expectedRevision,
          operationId,
        }, { retry: true, operation: `${operation}-patch` });
      } catch (error) {
        const endpointUnavailable = ["HTTP_404", "HTTP_405"].includes(error.code)
          || clean(error.details?.msg).toLowerCase().includes("unknown api endpoint");
        if (!endpointUnavailable) throw error;
      }
    }
    return apiPost("/api/store", {
      state: snapshot,
      clientRevision: expectedRevision,
    }, { retry: true, operation: `${operation}-full` });
  }

  commitSavedSnapshot(snapshot, response, fallbackRevision) {
    this.loadedRevision = Number(response.revision || fallbackRevision + (response.unchanged ? 0 : 1));
    const updatedAt = response.updatedAt || now();
    this.state.dataRevision = this.loadedRevision;
    this.state.dataUpdatedAt = updatedAt;
    snapshot.dataRevision = this.loadedRevision;
    snapshot.dataUpdatedAt = updatedAt;
    this.baseState = structuredClone(snapshot);
    this.remoteUpdatedAt = response.updatedAt || this.remoteUpdatedAt || "";
  }

  applyRemoteState(remoteState, revision = 0, shouldRender = true) {
    if (!remoteState || typeof remoteState !== "object") return;
    const localContext = this.captureLocalContext();
    const localModonCache = this.modonCacheReady ? this.state.modonExternalStats : null;
    this.state = structuredClone(remoteState);
    if (!this.state.modonExternalStats && localModonCache) this.state.modonExternalStats = localModonCache;
    this.loadedRevision = Number(revision || remoteState.dataRevision || 1);
    this.migrate();
    this.restoreLocalContext(localContext);
    this.markStorageOnline(`مزامنة لحظية متصلة - نسخة ${this.loadedRevision}`);
    this.baseState = this.serverSnapshot();
    if (shouldRender && document.readyState !== "loading") {
      renderActiveView();
      renderAuthState();
    }
  }

  async checkRemoteRevision() {
    if (document.hidden || !apiSessionToken() || this.syncInFlight || this.flushInFlight || this.saveTimer) return;
    this.syncInFlight = true;
    try {
      const status = await apiGet("/api/store/status", { timeoutMs: API_HEALTH_TIMEOUT_MS, operation: "sync-status" });
      const remoteRevision = Number(status.revision || 0);
      const remoteUpdatedAt = clean(status.updatedAt);
      if (status.status) {
        const changedByRevision = remoteRevision > 0 && remoteRevision > this.loadedRevision;
        const changedByTimestamp = !remoteRevision && remoteUpdatedAt && this.remoteUpdatedAt && remoteUpdatedAt !== this.remoteUpdatedAt;
        if (changedByRevision || changedByTimestamp) {
          const response = await apiGet("/api/store", { operation: "sync-load-store" });
          this.applyRemoteState(response.data, remoteRevision || response.data?.dataRevision);
          this.remoteUpdatedAt = remoteUpdatedAt || response.updatedAt || "";
        } else {
          if (remoteUpdatedAt) this.remoteUpdatedAt = remoteUpdatedAt;
          this.markStorageOnline(`التخزين الأونلاين متصل - نسخة ${this.loadedRevision || remoteRevision || this.state.dataRevision || 1}`);
          renderConnection();
        }
      }
    } catch (error) {
      this.markStorageProblem(error, "تعذر التحديث اللحظي");
      renderConnection();
    } finally {
      this.syncInFlight = false;
    }
  }

  startRealtimeSync() {
    if (!this.syncTimer) this.syncTimer = setInterval(() => this.checkRemoteRevision(), REALTIME_FALLBACK_MS);
  }

  save() {
    this.state.settings ||= {};
    if (document.body.classList.contains("storage-blocked")) {
      this.state.settings.storageConnected = false;
      this.state.settings.storageReconnecting = false;
      this.state.settings.storageMessage ||= "التخزين الأونلاين غير جاهز";
      renderConnection();
      return;
    }
    if (!this.online) {
      if (navigator.onLine === false) {
        this.markStorageProblem(null, "التخزين الأونلاين غير متصل");
        renderConnection();
        return;
      }
      this.online = true;
      this.state.settings.storageReconnecting = true;
    }
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null;
      this.queueFlush().catch(() => {});
    }, 800);
  }

  async saveNow() {
    clearTimeout(this.saveTimer);
    this.saveTimer = null;
    await this.queueFlush();
  }

  queueFlush() {
    if (this.flushInFlight) {
      this.flushRequested = true;
      return this.flushInFlight;
    }
    this.flushInFlight = this.flush().finally(async () => {
      this.flushInFlight = null;
      if (this.flushRequested) {
        this.flushRequested = false;
        await this.queueFlush();
      }
    });
    return this.flushInFlight;
  }

  async flush() {
    if (navigator.onLine === false) {
      const error = new Error("الجهاز غير متصل بالإنترنت. لم يتم حفظ العملية.");
      error.code = "OFFLINE";
      error.connectivityFailure = true;
      this.markStorageProblem(error, error.message);
      renderConnection();
      throw error;
    }
    if (!this.online) {
      this.online = true;
      this.state.settings.storageReconnecting = true;
    }
    try {
      const payload = this.serverSnapshot();
      const expectedRevision = this.loadedRevision || this.state.dataRevision || 1;
      const response = await this.persistSnapshot(payload, expectedRevision, "save-store");
      this.commitSavedSnapshot(payload, response, expectedRevision);
      this.markStorageOnline(`تم الحفظ أونلاين - نسخة ${this.loadedRevision || this.state.dataRevision}`);
      renderConnection();
    } catch (error) {
      if (error.code === "REVISION_CONFLICT") {
        try {
          await this.mergeLatestAndFlush();
        } catch (mergeError) {
          if (["INSUFFICIENT_STOCK", "PRODUCT_IN_USE"].includes(mergeError.code)) {
            await this.recoverFromRejectedStock(mergeError);
            throw mergeError;
          }
          this.markStorageProblem(mergeError, "تعذر دمج التعديلات تلقائيًا");
          renderConnection();
          throw mergeError;
        }
        return;
      }
      if (error.code === "INSUFFICIENT_STOCK") {
        await this.recoverFromRejectedStock(error);
        throw error;
      }
      if (error.code === "PRODUCT_IN_USE") {
        await this.recoverFromRejectedStock(error);
        throw error;
      }
      this.markStorageProblem(error, "تعذر حفظ البيانات أونلاين");
      renderConnection();
      throw error;
    }
  }

  async recoverFromRejectedStock(error) {
    try {
      const latest = await apiGet("/api/store", { operation: "recover-store" });
      this.applyRemoteState(latest.data, latest.data?.dataRevision || latest.meta?.revision || this.loadedRevision);
    } catch {}
    alert(error.message || "الكمية لم تعد متوفرة؛ تم تحديث المخزون من الخادم.");
    error.userNotified = true;
  }

  async mergeLatestAndFlush() {
    const localContext = this.captureLocalContext();
    const localModonCache = this.modonCacheReady ? this.state.modonExternalStats : null;
    let localState = this.serverSnapshot();
    let baseState = this.baseState || {};
    for (let attempt = 0; attempt < 4; attempt += 1) {
      // Back off with jitter between conflict retries so multiple devices
      // saving at the same moment stop colliding in lockstep (which hammered
      // the save RPC and pegged the database with REVISION_CONFLICT storms).
      if (attempt > 0) await wait(400 * attempt + Math.floor(Math.random() * 600));
      const latest = await apiGet("/api/store", { operation: "merge-load-store" });
      const remoteState = latest.data;
      const remoteRevision = Number(remoteState?.dataRevision || latest.meta?.revision || 1);
      const merged = mergeStateVersions(baseState, localState, remoteState);
      this.state = merged;
      if (!this.state.modonExternalStats && localModonCache) this.state.modonExternalStats = localModonCache;
      this.loadedRevision = remoteRevision;
      this.migrate();
      this.restoreLocalContext(localContext);
      const payload = this.serverSnapshot();
      try {
        const response = await this.persistSnapshot(payload, remoteRevision, "merge-save-store", remoteState);
        this.commitSavedSnapshot(payload, response, remoteRevision);
        this.markStorageOnline(`تم دمج التعديلات وحفظها - نسخة ${this.loadedRevision}`);
        renderActiveView();
        renderAuthState();
        return;
      } catch (error) {
        if (error.code !== "REVISION_CONFLICT") throw error;
        baseState = remoteState;
        localState = payload;
      }
    }
    throw new Error("حدثت تعديلات كثيرة في اللحظة نفسها. أعد المحاولة بعد لحظة.");
  }

  reset() {
    if (!this.online) {
      alert("لا يمكن تصفير البيانات قبل ربط التخزين الأونلاين.");
      return;
    }
    this.state = this.defaultState();
    this.migrate();
    this.loadedRevision = Number(this.state.dataRevision || 1);
    this.save();
  }
}

class ModonProvider {
  async verifyCredentials(username, password) {
    const response = await apiPost("/api/modon/login", { username, password }, { retry: true, operation: "modon-login" });
    if (!response.status) throw new Error(response.msg || "بيانات دخول Modon غير صحيحة");
    const token = response?.data?.token || response?.token;
    if (!token) throw new Error("تم الاتصال بـ Modon لكن لم يرجع Token للحساب.");
    return token;
  }

  async getCities() {
    const response = await apiGet("/api/modon/cities", { retry: true, operation: "modon-cities" });
    if (!response.status) throw new Error(response.msg || "فشل جلب محافظات Modon");
    return (response.data || []).map((city) => ({ id: String(city.id), name: city.city_name || city.name }));
  }

  async getRegions(cityId) {
    const response = await apiGet(`/api/modon/regions?city_id=${encodeURIComponent(cityId)}`, { retry: true, operation: "modon-regions" });
    if (!response.status) throw new Error(response.msg || "فشل جلب مناطق Modon");
    return (response.data || []).map((region) => ({ id: String(region.id), name: region.region_name || region.name }));
  }

  async getPackageSizes() {
    const response = await apiGet("/api/modon/package-sizes", { retry: true, operation: "modon-package-sizes" });
    if (!response.status) throw new Error(response.msg || "فشل جلب أحجام الطرود من Modon");
    return (response.data || []).map((size) => ({ id: String(size.id), name: size.size || size.name }));
  }

  async createOrder(invoice, deliveryPayload, employee) {
    const deliveryPrice = number(deliveryPayload.deliveryPrice);
    const collectAmount = number(invoice.total) + (deliveryPayload.freeDelivery ? 0 : deliveryPrice);
    const expectedMerchantPrice = Math.max(number(invoice.total) - (deliveryPayload.freeDelivery ? deliveryPrice : 0), 0);
    const response = await apiPost("/api/modon/create-order", {
      employeeId: employee.id,
      order: {
        client_name: invoice.customerName,
        client_mobile: normalizeModonPhone(invoice.customerPhone),
        client_mobile2: "",
        city_id: deliveryPayload.cityId,
        region_id: deliveryPayload.regionId,
        location: deliveryPayload.address,
        type_name: deliveryPayload.goodsType || invoice.productName,
        items_number: deliveryPayload.itemsCount,
        price: collectAmount,
        package_size: deliveryPayload.packageSizeId,
        merchant_notes: deliveryPayload.notes || "",
        replacement: deliveryPayload.isExchange ? 1 : 0,
      },
    }, { attempts: 1, operation: "modon-create-order" });
    if (!response.status) throw new Error(response.msg || "فشل إنشاء طلب Modon");
    const order = Array.isArray(response.data) ? response.data[0] : response.data;
    if (!order) throw new Error("Modon لم يرجع بيانات الطلب");
    return {
      external_order_id: String(order.id || order.qr_id || ""),
      qr_id: String(order.qr_id || order.id || ""),
      qr_link: order.qr_link || "",
      status_id: 1,
      status: "new",
      price: number(order.price || collectAmount),
      delivery_price: number(order.company_price || deliveryPrice),
      merchant_price: number(order.merchant_price || expectedMerchantPrice),
      raw_response: response,
    };
  }

  async editOrder(invoice, deliveryPayload, employee, qrId) {
    const deliveryPrice = number(deliveryPayload.deliveryPrice);
    const collectAmount = number(invoice.total) + (deliveryPayload.freeDelivery ? 0 : deliveryPrice);
    const expectedMerchantPrice = Math.max(number(invoice.total) - (deliveryPayload.freeDelivery ? deliveryPrice : 0), 0);
    const response = await apiPost("/api/modon/edit-order", {
      employeeId: employee.id,
      order: {
        qr_id: qrId,
        client_name: invoice.customerName,
        client_mobile: normalizeModonPhone(invoice.customerPhone),
        client_mobile2: "",
        city_id: deliveryPayload.cityId,
        region_id: deliveryPayload.regionId,
        location: deliveryPayload.address,
        type_name: deliveryPayload.goodsType || invoice.productName,
        items_number: deliveryPayload.itemsCount,
        price: collectAmount,
        package_size: deliveryPayload.packageSizeId,
        merchant_notes: deliveryPayload.notes || "",
        replacement: deliveryPayload.isExchange ? 1 : 0,
      },
    }, { attempts: 1, timeoutMs: 60000, operation: "modon-edit-order" });
    if (!response.status) throw new Error(response.msg || "رفض Modon تعديل الطلب");
    return {
      price: collectAmount,
      delivery_price: deliveryPrice,
      merchant_price: expectedMerchantPrice,
      raw_response: response,
    };
  }

  async deleteOrder(employee, orderId) {
    const response = await apiPost("/api/modon/delete-order", { employeeId: employee.id, orderId }, { attempts: 1, timeoutMs: 60000, operation: "modon-delete-order" });
    if (!response.status) throw new Error(response.msg || "رفض Modon إلغاء الطلب");
    return response;
  }

  async getOrders(employee) {
    const response = await apiPost("/api/modon/orders", {
      employeeId: employee.id,
    }, { retry: true, operation: "modon-orders" });
    if (!response.status) throw new Error(response.msg || "فشل جلب طلبات Modon");
    // /merchant-orders is the source of truth. Use one primary order list only.
    // Merging auxiliary return/replacement lists here mixes historical feeds
    // with the current merchant orders response and inflates every count.
    const primaryLists = [
      Array.isArray(response.data) ? response.data : null,
      response.data?.orders,
      response.data?.merchant_orders,
      Array.isArray(response.data?.data) ? response.data.data : null,
      response.data?.data?.orders,
      response.data?.data?.merchant_orders,
      response.orders,
      response.merchant_orders,
    ].filter(Array.isArray);
    const fallbackLists = [
      response.data?.items,
      response.data?.data?.items,
      response.items,
    ].filter(Array.isArray).map((list) => list.filter((order) => {
      if (!remoteOrderIds(order).length) return false;
      return Boolean(modonLiveStatusLabel(order) !== "غير معروف"
        || clean(order?.client_name || order?.customer_name || order?.receiver_name));
    }));
    const lists = primaryLists.length
      ? [primaryLists.find((list) => list.length) || primaryLists[0]]
      : fallbackLists.slice(0, 1);
    return dedupeModonOrdersByAliases(lists.flat());
  }

  async getOrdersByIds(employee, ids) {
    const response = await apiPost("/api/modon/orders-by-ids", {
      employeeId: employee.id,
      ids,
    }, { retry: true, operation: "modon-orders-by-ids" });
    if (!response.status) throw new Error(response.msg || "فشل التحقق من حالة الطلب في Modon");
    return firstArray(
      response.data?.orders,
      response.data?.data?.orders,
      response.data?.data,
      response.data?.result,
      response.data?.list,
      response.data,
      response.orders,
    );
  }

  async getInvoices(employee) {
    const response = await apiPost("/api/modon/invoices", {
      employeeId: employee.id,
    }, { retry: true, operation: "modon-invoices" });
    if (!response.status) throw new Error(response.msg || "فشل جلب فواتير Modon");
    return firstArray(
      response.data?.invoices,
      response.data?.data?.invoices,
      response.data?.data,
      response.data?.result,
      response.data?.list,
      response.data,
      response.invoices,
    );
  }

  async getInvoiceOrders(employee, invoiceId) {
    const response = await apiPost("/api/modon/invoice-orders", {
      employeeId: employee.id,
      invoiceId,
    }, { retry: true, operation: "modon-invoice-orders" });
    if (!response.status) throw new Error(response.msg || "فشل جلب طلبات فاتورة Modon");
    return firstArray(
      response.data?.orders,
      response.data?.invoice_orders,
      response.data?.data?.orders,
      response.data?.data,
      response.data?.result,
      response.data?.list,
      response.data,
      response.orders,
    );
  }

  async receiveInvoice(employee, invoiceId) {
    const response = await apiPost("/api/modon/receive-invoice", {
      employeeId: employee.id,
      invoiceId,
    }, { attempts: 1, operation: "modon-receive-invoice" });
    if (!response.status) throw new Error(response.msg || "فشل تأكيد استلام فاتورة Modon");
    return response;
  }
}

class AccountingService {
  constructor(repo) { this.repo = repo; }

  scopedInvoices(employeeId = activeEmployeeId()) {
    return this.repo.state.invoices.filter((item) => employeeId === "all" || item.employeeId === employeeId);
  }

  scopedOrders(employeeId = activeEmployeeId()) {
    return this.repo.state.deliveryOrders.filter((item) => employeeId === "all" || item.employeeId === employeeId);
  }

  totals(employeeId = activeEmployeeId()) {
    const invoices = this.scopedInvoices(employeeId).filter((invoice) => !invoice.cancelled);
    const orders = this.scopedOrders(employeeId).filter((order) => !isCancelledModonOrder(order));
    const cashTransactions = this.repo.state.cashTransactions.filter((item) => employeeId === "all" || item.employeeId === employeeId);
    const customerDebts = this.repo.state.customerDebts.filter((item) => employeeId === "all" || item.employeeId === employeeId);
    const debtPayments = this.repo.state.customerDebtPayments.filter((item) => !item.cancelled && (employeeId === "all" || item.employeeId === employeeId));
    const personalDebts = this.repo.state.personalDebts.filter((item) => !item.cancelled && (employeeId === "all" || item.employeeId === employeeId));
    const cashSales = invoices.filter((item) => item.saleMode === "cash").reduce(sumBy("total"), 0);
    const customerDebtSales = invoices.filter((item) => item.saleMode === "customerDebt").reduce(sumBy("total"), 0);
    const installmentSales = invoices.filter((item) => item.saleMode === "installment").reduce(sumBy("total"), 0);
    const modonSales = invoices.filter((item) => item.saleMode === "modon").reduce(sumBy("total"), 0);
    const deliveryFees = orders.reduce(sumBy("delivery_price"), 0);
    const merchantNet = orders.reduce(sumBy("merchant_price"), 0);
    const receivableModon = orders.filter((item) => item.status === "delivered" && !item.deliver_confirmed_fin).reduce(sumBy("merchant_price"), 0);
    const customerDebtBalance = Array.from(new Set(this.repo.state.customers.map((customer) => customer.phone))).reduce((sum, phone) => sum + customerOpenDebt(phone, true), 0);
    const personalDebtTotal = personalDebts.reduce((sum, debt) => sum + personalDebtOpenBalance(debt), 0);
    const profitExpenses = this.repo.state.vouchers.filter((item) => !item.cancelled && item.type === "expense").reduce(sumBy("amount"), 0);
    const cashBalance = cashTransactions.reduce((sum, item) => sum + item.amount, 0);
    return {
      invoiceCount: invoices.length,
      totalSales: cashSales + customerDebtSales + installmentSales + modonSales,
      cashSales,
      customerDebtSales,
      installmentSales,
      modonSales,
      deliveryFees,
      merchantNet,
      receivableModon,
      customerDebtBalance,
      personalDebtTotal,
      profitExpenses,
      cashBalance,
      orderCount: orders.length,
      delivered: orders.filter((item) => item.status === "delivered").length,
      returned: orders.filter((item) => item.status === "returned").length,
      issues: orders.filter((item) => item.status === "issue").length,
      missingInStatement: orders.filter((item) => item.reconciliation_status === "missing").length,
      deliveredNotInvoiced: orders.filter((item) => item.status === "delivered" && !item.has_merchant_fin_record).length,
      invoicedNotReceived: orders.filter((item) => item.has_merchant_fin_record && !item.deliver_confirmed_fin).length,
    };
  }

  entries(employeeId = activeEmployeeId()) {
    const rows = [];
    this.scopedInvoices(employeeId).filter((invoice) => !invoice.cancelled).forEach((invoice) => {
      if (invoice.saleMode === "cash") rows.push(["مدين: القاصة", "دائن: المبيعات", invoice.total, invoice.number]);
      if (invoice.saleMode === "customerDebt") rows.push(["مدين: ذمم الزبائن", "دائن: المبيعات", invoice.total, invoice.number]);
      if (invoice.saleMode === "installment") rows.push(["مدين: أقساط الزبائن", "دائن: المبيعات", invoice.total, invoice.number]);
      if (invoice.saleMode === "modon") {
        const order = getOrderByInvoice(invoice.id);
        rows.push(["مدين: مستحقات لدى Modon", "دائن: المبيعات", invoice.total, invoice.number]);
        if (order) rows.push(["مدين: أجور توصيل", "دائن: مستحقات لدى Modon", order.delivery_price, order.external_order_id]);
      }
    });
    this.repo.state.personalDebts
      .filter((item) => !item.cancelled && (employeeId === "all" || item.employeeId === employeeId))
      .forEach((item) => rows.push([
        "مدين: ذمم الزبائن",
        item.fundingSource === "external" ? "دائن: تمويل خارج القاصة" : "دائن: القاصة",
        item.amount,
        item.number || item.person,
      ]));
    return rows;
  }
}

const repo = new Repository();
const provider = new ModonProvider();
const accounting = new AccountingService(repo);
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
let modonAutoSyncTimer = null;
let modonAutoSyncInFlight = false;
let fullModonReconciliationInFlight = false;
let modonCenterRefreshInFlight = false;
let modonAuditSelectedCategory = "internalOnly";
const MODON_ORDERS_SYNC_CACHE_MS = 45 * 1000;
const MODON_ORDERS_STALE_FALLBACK_MS = 10 * 60 * 1000;
const modonOrdersSyncCache = new Map();
let selectedCustomerPhone = "";
let customerDirectoryFilter = "all";
let customerLedgerFrom = "";
let customerLedgerTo = "";
let customerLedgerType = "all";

document.addEventListener("DOMContentLoaded", async () => {
  showBootLoader("جاري تجهيز واجهة البرنامج...");
  try {
    bindNavigation();
    setupInventoryWorkspace();
    bindForms();
    showBootLoader("جاري الاتصال بالتخزين الأونلاين...");
    const dataReady = await repo.loadRemote();
    if (apiSessionToken() && !dataReady) {
      await logoutUser({ silent: true, keepMessage: "تعذر الاتصال ببيانات النظام. سجل الدخول عند عودة اتصال Data." });
    } else if (apiSessionToken()) {
      showBootLoader("جاري تحميل محافظات ومناطق Modon...");
      const modonReady = await fillCatalogs({ silent: true });
      const employee = currentEmployee();
      if (employeeRequiresModonOnline(employee) && !modonReady) {
        await logoutUser({ silent: true, keepMessage: "Modon غير متصل. سجل الدخول عند عودة اتصال Modon." });
      }
    }
    // Re-apply any Modon orders that were created remotely but never reached a
    // committed online save (failed save or closed tab). Only when signed in and
    // the server state actually loaded, so we never save into a stale/empty state.
    if (apiSessionToken() && dataReady) {
      try { replayPendingModonOrders(); } catch {}
    }
    showBootLoader("جاري تجهيز الحسابات والفواتير...");
    fillEmployeeControls();
    fillPermissionChecks("sales");
    fillSupplierControls();
    fillProductSelect();
    fillCategoryOptions();
    fillModonProductSelect();
    fillOpeningProductSelect();
    calculatePurchaseInvoice();
    renderAll();
    renderAuthState();
    repo.startRealtimeSync();
    bindConnectionRecovery();
  } finally {
    hideBootLoader();
  }
});

function bindConnectionRecovery() {
  window.addEventListener("online", () => repo.checkRemoteRevision());
  window.addEventListener("offline", () => {
    repo.markStorageProblem(null, "لا توجد شبكة في الجهاز");
    renderConnection();
    renderDataHealth();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) repo.checkRemoteRevision();
  });
}

function showBootLoader(message) {
  const loader = $("#appBootLoader");
  const text = $("#bootLoaderText");
  if (text && message) text.textContent = message;
  loader?.classList.remove("hidden");
}

function hideBootLoader() {
  $("#appBootLoader")?.classList.add("hidden");
}

function bindNavigation() {
  initializeSidebarNavigation();
  document.addEventListener("input", normalizeEnglishDigitsInField, true);
  document.addEventListener("paste", normalizeEnglishDigitsInField, true);
  $("#mobileMenuButton")?.addEventListener("click", () => document.body.classList.toggle("mobile-nav-open"));
  $("#mobileNavBackdrop")?.addEventListener("click", () => document.body.classList.remove("mobile-nav-open"));
  document.addEventListener("click", (event) => {
    const targetAction = event.target.closest("[data-target-action]");
    if (targetAction) {
      runPageTargetAction(targetAction.dataset.targetAction);
      return;
    }
    const drilldown = event.target.closest("[data-drilldown]");
    if (drilldown) {
      openDrilldown(drilldown.dataset.drilldown, {
        date: drilldown.dataset.drilldownDate || "",
        dateFrom: drilldown.dataset.drilldownDateFrom || "",
        dateTo: drilldown.dataset.drilldownDateTo || "",
        employeeId: drilldown.dataset.drilldownEmployee || "",
        saleMode: drilldown.dataset.drilldownSaleMode || "",
        stockFilter: drilldown.dataset.drilldownStock || "",
        voucherType: drilldown.dataset.drilldownVoucher || "",
      });
      return;
    }
    const modonAction = event.target.closest("[data-modon-action]");
    if (modonAction) {
      runModonAction(modonAction.dataset.modonAction);
      return;
    }
    const modonSimpleAction = event.target.closest("[data-modon-simple-action]");
    if (modonSimpleAction) {
      runModonSimpleAction(modonSimpleAction.dataset.modonSimpleAction);
      return;
    }
    const modonNavRefresh = event.target.closest("[data-modon-nav-refresh]");
    if (modonNavRefresh) {
      $("#refreshModonCenter")?.click();
      return;
    }
    const orderChip = event.target.closest("[data-order-chip]");
    if (orderChip) {
      $$("#orderChips [data-order-chip]").forEach((chip) => chip.classList.toggle("active", chip === orderChip));
      if ($("#orderStatusFilter")) $("#orderStatusFilter").value = orderChip.dataset.orderChip;
      resetListPage("internalOrders");
      renderInternalOrders();
      return;
    }
    const returnFilterChip = event.target.closest("[data-return-filter]");
    if (returnFilterChip) {
      $$("#returnFilterChips [data-return-filter]").forEach((chip) => chip.classList.toggle("active", chip === returnFilterChip));
      resetListPage("returnCarrierInvoices");
      renderCarrierInvoices();
      return;
    }
    const modonHubTab = event.target.closest("[data-modon-hub-tab]");
    if (modonHubTab) {
      showModonHubTab(modonHubTab.dataset.modonHubTab);
      return;
    }
    const modonAuditCategory = event.target.closest("[data-modon-audit-category]");
    if (modonAuditCategory) {
      showModonAuditCategory(modonAuditCategory.dataset.modonAuditCategory);
      return;
    }
    const modonFollowTab = event.target.closest("[data-modon-follow-tab]");
    if (modonFollowTab) {
      showModonFollowTab(modonFollowTab.dataset.modonFollowTab);
      return;
    }
    const profitFilter = event.target.closest("[data-profit-filter]");
    if (profitFilter) {
      setProfitDetailFilter(profitFilter.dataset.profitFilter);
      return;
    }
    const newProductButton = event.target.closest("[data-new-product]");
    if (newProductButton) {
      openProductEdit("");
      return;
    }
    const productStockButton = event.target.closest("[data-product-stock-filter]");
    if (productStockButton) {
      setProductStockFilter(productStockButton.dataset.productStockFilter);
      return;
    }
    const inventoryStockButton = event.target.closest("[data-inventory-stock-filter]");
    if (inventoryStockButton) {
      setInventoryStockFilter(inventoryStockButton.dataset.inventoryStockFilter);
      return;
    }
    const button = event.target.closest(".nav-item, [data-view-jump]");
    if (!button) return;
    showView(button.dataset.view || button.dataset.viewJump);
    document.body.classList.remove("mobile-nav-open");
  });
}

function initializeSidebarNavigation() {
  const collapseButton = $("#sidebarCollapseButton");
  const desktopCollapsed = localStorage.getItem("jouri.sidebar.collapsed") === "1";
  document.body.classList.toggle("sidebar-collapsed", desktopCollapsed);
  if (collapseButton) {
    collapseButton.setAttribute("aria-label", desktopCollapsed ? "توسيع القائمة" : "تصغير القائمة");
    collapseButton.title = desktopCollapsed ? "توسيع القائمة" : "تصغير القائمة";
    collapseButton.addEventListener("click", () => {
      const collapsed = document.body.classList.toggle("sidebar-collapsed");
      localStorage.setItem("jouri.sidebar.collapsed", collapsed ? "1" : "0");
      collapseButton.setAttribute("aria-label", collapsed ? "توسيع القائمة" : "تصغير القائمة");
      collapseButton.title = collapsed ? "توسيع القائمة" : "تصغير القائمة";
    });
  }

  let savedGroups = {};
  try {
    savedGroups = JSON.parse(localStorage.getItem("jouri.sidebar.groups") || "{}");
  } catch {
    savedGroups = {};
  }
  $$(".nav-group[data-nav-group]").forEach((group) => {
    const toggle = group.querySelector(".nav-group-toggle");
    const groupKey = group.dataset.navGroup;
    const collapsed = savedGroups[groupKey] === true;
    group.classList.toggle("collapsed", collapsed);
    toggle?.setAttribute("aria-expanded", String(!collapsed));
    toggle?.addEventListener("click", () => {
      const isCollapsed = group.classList.toggle("collapsed");
      toggle.setAttribute("aria-expanded", String(!isCollapsed));
      savedGroups[groupKey] = isCollapsed;
      localStorage.setItem("jouri.sidebar.groups", JSON.stringify(savedGroups));
    });
  });
  $$(".nav-item").forEach((item) => {
    const label = clean(item.querySelector(".nav-item-label")?.textContent || item.textContent);
    if (label) item.title = label;
  });
}

function runPageTargetAction(target) {
  if (target === "toggleOpeningStock") {
    $("#toggleOpeningStock")?.click();
    return;
  }
  if (target === "printReport") {
    $("#printReport")?.click();
    return;
  }
  if (target === "companySettingsForm") {
    $("#companySettingsForm")?.requestSubmit();
    return;
  }
  if (target === "openCustomerPayment") {
    openCustomerPaymentModal(selectedCustomerPhone);
    return;
  }
  if (target === "openVoucherCreate") {
    if ($(".view.active")?.id !== "vouchers") showView("vouchers");
    showVoucherTab("voucherCreateTab");
    return;
  }
  if (target === "openExpenseVoucher") {
    if ($(".view.active")?.id !== "vouchers") showView("vouchers");
    showVoucherTab("voucherCreateTab");
    setVoucherCreateType("expense");
  }
}

function setupInventoryWorkspace() {
  const purchaseFormNode = $("#purchaseInvoiceForm");
  if (purchaseFormNode && !$("#purchaseSummary")) {
    const summary = document.createElement("div");
    summary.id = "purchaseSummary";
    summary.className = "invoice-summary purchase-summary";
    const actions = Array.from(purchaseFormNode.children).find((child) => child.classList?.contains("actions"));
    purchaseFormNode.insertBefore(summary, actions);
  }
  setupSaleLinesUi();
  setupPurchaseLinesUi();
  return;

  const inventory = $("#inventory");
  const openingStock = $("#openingStock");
  const purchaseInvoices = $("#purchaseInvoices");
  if (!inventory || !openingStock || !purchaseInvoices || inventory.dataset.workspaceReady) return;

  const overviewTab = document.createElement("div");
  overviewTab.className = "inventory-tab active";
  overviewTab.id = "inventoryOverviewTab";
  while (inventory.firstChild) overviewTab.appendChild(inventory.firstChild);

  const tabs = document.createElement("div");
  tabs.className = "tabs inventory-tabs";
  tabs.innerHTML = `
    <button class="tab-button active" type="button" data-inventory-tab="inventoryOverviewTab">رصيد المخزون</button>
    <button class="tab-button" type="button" data-inventory-tab="inventoryOpeningTab">مخزون افتتاحي</button>
    <button class="tab-button" type="button" data-inventory-tab="inventoryPurchasesTab">قائمة شراء</button>
  `;

  const openingTab = document.createElement("div");
  openingTab.className = "inventory-tab";
  openingTab.id = "inventoryOpeningTab";
  while (openingStock.firstChild) openingTab.appendChild(openingStock.firstChild);

  const purchasesTab = document.createElement("div");
  purchasesTab.className = "inventory-tab";
  purchasesTab.id = "inventoryPurchasesTab";
  while (purchaseInvoices.firstChild) purchasesTab.appendChild(purchaseInvoices.firstChild);

  inventory.append(tabs, overviewTab, openingTab, purchasesTab);
  openingStock.remove();
  purchaseInvoices.remove();
  $$('[data-view="openingStock"], [data-view="purchaseInvoices"]').forEach((button) => button.remove());
  $$("#inventory .tab-button").forEach((button) => {
    button.addEventListener("click", () => showInventoryTab(button.dataset.inventoryTab));
  });

  const purchaseForm = $("#purchaseInvoiceForm");
  if (purchaseForm && !$("#purchaseSummary")) {
    const purchaseTitle = purchaseForm.querySelector(".panel-head h2");
    const purchaseHint = purchaseForm.querySelector(".panel-head .hint");
    if (purchaseTitle) purchaseTitle.textContent = "قائمة شراء";
    if (purchaseHint) purchaseHint.textContent = "اختر المورد، أضف المنتجات، ثم سجل المدفوع والمتبقي على المورد.";
    const summary = document.createElement("div");
    summary.id = "purchaseSummary";
    summary.className = "invoice-summary purchase-summary";
    const actions = Array.from(purchaseForm.children).find((child) => child.classList?.contains("actions"));
    purchaseForm.insertBefore(summary, actions);
  }
  setupSaleLinesUi();
  setupPurchaseLinesUi();
  inventory.dataset.workspaceReady = "1";
}

function showInventoryTab(tabId) {
  $$("#inventory .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.inventoryTab === tabId));
  $$("#inventory .inventory-tab").forEach((tab) => tab.classList.toggle("active", tab.id === tabId));
}

function setupPurchaseLinesUi() {
  const table = $("#purchaseLines")?.closest("table");
  if (!table) return;
  const headRow = table.querySelector("thead tr");
  if (headRow && !headRow.querySelector(".purchase-total-head")) {
    headRow.insertAdjacentHTML("beforeend", `<th class="purchase-total-head">الإجمالي</th><th></th>`);
  }
  $$("#purchaseLines .purchase-line").forEach(setupPurchaseLineRow);
  updatePurchaseLinesEmpty();
}

function updatePurchaseLinesEmpty() {
  const empty = $("#purchaseLinesEmpty");
  if (empty) empty.hidden = $$("#purchaseLines .purchase-line").length > 0;
}

function setupPurchaseLineRow(row) {
  if (!row.querySelector(".purchase-line-total")) {
    row.insertAdjacentHTML("beforeend", `<td><strong class="purchase-line-total">${money(0)}</strong></td>`);
  }
  if (!row.querySelector(".remove-purchase-line")) {
    row.insertAdjacentHTML("beforeend", `<td><button class="ghost remove-purchase-line" type="button">حذف</button></td>`);
    row.querySelector(".remove-purchase-line").addEventListener("click", () => {
      row.remove();
      updatePurchaseLinesEmpty();
      calculatePurchaseInvoice();
    });
  }
  updatePurchaseLinesEmpty();
}

function clearPurchaseLine(row) {
  row.classList.remove("locked-line");
  row.querySelector('[name="itemProductId"]')?.setAttribute("value", "");
  row.querySelectorAll("input").forEach((input) => {
    input.readOnly = false;
    input.value = ["itemName", "itemCategory"].includes(input.name) ? "" : "0";
  });
  row.querySelector(".purchase-line-total").textContent = money(0);
  updatePurchaseLinesEmpty();
}

function setupSaleLinesUi() {
  const table = $("#saleLines")?.closest("table");
  if (!table) return;
  const headRow = table.querySelector("thead tr");
  if (headRow && !headRow.querySelector(".sale-actions-head")) {
    headRow.insertAdjacentHTML("beforeend", `<th class="sale-actions-head"></th>`);
  }
  $$("#saleLines .sale-line").forEach(setupSaleLineRow);
}

function setupSaleLineRow(row) {
  if (!row.querySelector(".remove-sale-line")) {
    row.insertAdjacentHTML("beforeend", `<td><button class="ghost remove-sale-line" type="button">حذف</button></td>`);
    row.querySelector(".remove-sale-line").addEventListener("click", () => {
      if ($$("#saleLines .sale-line").length > 1) row.remove();
      else clearSaleLine(row);
      calculateSaleInvoice();
    });
  }
}

function createSaleLineRow(product) {
  const priceType = selectedSaleInvoicePriceType();
  const unitPrice = saleProductPrice(product, priceType);
  const row = document.createElement("tr");
  row.className = "sale-line locked-line";
  row.innerHTML = `
    <td>
      <input type="hidden" name="saleProduct" value="${product.id}" />
      <input type="hidden" name="salePriceType" value="${priceType}" />
      <strong class="selected-product">${escapeHtml(product.name)}</strong>
      <small class="sale-line-price-kind">${priceType === "wholesale" ? "سعر الجملة" : "سعر المفرد"}</small>
    </td>
    <td><input type="number" name="saleQty" min="1" value="1" /></td>
    <td><input type="number" name="salePrice" min="0" value="${unitPrice}" /></td>
    <td><input type="number" name="saleDiscount" min="0" value="0" /></td>
    <td class="line-total">0 د.ع</td>
  `;
  setupSaleLineRow(row);
  return row;
}

function selectedSaleInvoicePriceType() {
  return clean($("#invoiceForm")?.querySelector('[name="invoicePriceType"]:checked')?.value) === "wholesale" ? "wholesale" : "retail";
}

function saleProductPrice(product, priceType = selectedSaleInvoicePriceType()) {
  const retailPrice = number(product?.retailPrice ?? product?.price);
  const wholesalePrice = number(product?.wholesalePrice);
  return priceType === "wholesale" && wholesalePrice > 0 ? wholesalePrice : retailPrice;
}

function setSaleInvoicePriceType(priceType = "retail", updateLines = true) {
  const normalizedType = priceType === "wholesale" ? "wholesale" : "retail";
  const radio = $(`#invoiceForm [name="invoicePriceType"][value="${normalizedType}"]`);
  if (radio) radio.checked = true;
  if (!updateLines) return;
  $$("#saleLines .sale-line").forEach((row) => {
    const product = getProduct(row.querySelector('[name="saleProduct"]')?.value);
    if (!product) return;
    row.querySelector('[name="salePriceType"]').value = normalizedType;
    row.querySelector('[name="salePrice"]').value = saleProductPrice(product, normalizedType);
    const label = row.querySelector(".sale-line-price-kind");
    if (label) label.textContent = normalizedType === "wholesale"
      ? (number(product.wholesalePrice) > 0 ? "سعر الجملة" : "سعر المفرد — لا يوجد سعر جملة")
      : "سعر المفرد";
  });
  calculateSaleInvoice();
}

function clearSaleLine(row) {
  row.remove();
}

function lockSaleLine(row, product) {
  row.querySelector('[name="saleProduct"]').value = product.id;
  row.classList.add("locked-line");
  row.querySelector('[name="salePrice"]').value = saleProductPrice(product);
}

function bindForms() {
  bindProfessionalDateFilters();
  $("#employeeScope").addEventListener("change", (event) => {
    repo.state.activeEmployeeId = event.target.value;
    resetAllListPages();
    repo.save();
    renderAll();
  });
  $("#modonHubEmployeeScope")?.addEventListener("change", (event) => {
    repo.state.activeEmployeeId = event.target.value;
    if ($("#employeeScope")) $("#employeeScope").value = event.target.value;
    resetAllListPages();
    repo.save();
    renderAll();
  });
  $("#modonHubPeriodScope")?.addEventListener("change", (event) => {
    repo.state.settings ||= {};
    repo.state.settings.modonHubPeriodScope = event.target.value;
    syncModonHubCustomRange();
    resetAllListPages();
    repo.save();
    renderAll();
  });
  const onModonCustomDate = () => {
    repo.state.settings ||= {};
    const minimum = modonReconciliationStartDate();
    let from = clean($("#modonHubCustomFrom")?.value) || minimum;
    let to = clean($("#modonHubCustomTo")?.value) || today();
    if (from < minimum) from = minimum;
    if (to < minimum) to = minimum;
    if (to > today()) to = today();
    if (from > to) from = to;
    repo.state.settings.modonHubCustomFrom = from;
    repo.state.settings.modonHubCustomTo = to;
    syncModonHubCustomRange();
    resetAllListPages();
    repo.save();
    renderAll();
  };
  $("#modonHubCustomFrom")?.addEventListener("change", onModonCustomDate);
  $("#modonHubCustomTo")?.addEventListener("change", onModonCustomDate);
  $("#closeModonOrderDrawer")?.addEventListener("click", closeModonOrderDrawer);
  $("#modonOrderDrawerBackdrop")?.addEventListener("click", closeModonOrderDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#modonOrderDrawer")?.classList.contains("open")) closeModonOrderDrawer();
  });
  $("#loginForm").addEventListener("submit", loginUser);
  $("#logoutButton").addEventListener("click", logoutUser);
  $("#reloadStorage")?.addEventListener("click", () => location.reload());
  $("#initStorage")?.addEventListener("click", initializeOnlineStorage);
  $("#citySearch").addEventListener("input", () => {
    $("#citySelect").value = "";
    $("#regionSelect").value = "";
    $("#regionSearch").value = "";
    renderCityOptions();
  });
  $("#regionSearch").addEventListener("input", () => {
    $("#regionSelect").value = "";
    renderRegionOptions();
  });
  $("#citySearch").addEventListener("focus", () => renderCityOptions(true));
  $("#regionSearch").addEventListener("focus", () => renderRegionOptions(true));
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-combo")) {
      closeSuggestions();
    }
  });
  $("#invoiceForm").addEventListener("submit", saveInvoice);
  $("#backToInvoices").addEventListener("click", backToInvoiceArchive);
  $("#invoiceForm").addEventListener("reset", () => {
    editingInvoiceId = null;
    paidAmountTouched = false;
    setTimeout(() => {
      resetSaleLines();
      resetInvoiceFormMode();
      calculateSaleInvoice();
    });
  });
  $("#addSaleLine")?.addEventListener("click", () => addSaleLine());
  $("#saleProductSearch").addEventListener("input", () => renderProductSearch("sale"));
  $("#saleProductSearch").addEventListener("focus", () => renderProductSearch("sale", true));
  $("#saleCustomerName")?.addEventListener("input", () => {
    syncSaleCustomerPhone();
    renderSaleCustomerSuggestions();
    renderSaleCustomerAccountSummary();
  });
  $("#saleCustomerName")?.addEventListener("focus", () => renderSaleCustomerSuggestions(true));
  $$('#invoiceForm [name="invoicePriceType"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) setSaleInvoicePriceType(input.value);
    });
  });
  $("#invoiceForm").addEventListener("input", calculateSaleInvoice);
  $("#invoiceForm").customerPhone?.addEventListener("input", renderSaleCustomerAccountSummary);
  $("#invoiceForm").paidAmount.addEventListener("input", () => {
    paidAmountTouched = true;
  });
  $("#isInstallment").addEventListener("change", () => {
    $("#installmentBox").classList.toggle("active", $("#isInstallment").checked);
    if ($("#isInstallment").checked && !paidAmountTouched) $("#invoiceForm").paidAmount.value = 0;
    calculateSaleInvoice();
  });
  $("#modonOrderForm").addEventListener("submit", saveModonOrder);
  $("#cancelModonOrderEdit")?.addEventListener("click", resetModonOrderFormForNew);
  $("#modonProductSearch")?.addEventListener("input", () => {
    renderProductSearch("modon");
  });
  $("#modonProductSearch")?.addEventListener("focus", () => renderProductSearch("modon", true));
  $("#modonOrderForm").deliveryPrice.addEventListener("input", updateModonOrderPricing);
  $("#modonOrderForm").salePrice.addEventListener("input", () => updateModonOrderPricing(true));
  $("#modonOrderForm").freeDelivery.addEventListener("change", () => updateModonOrderPricing(true));
  $("#employeeForm").addEventListener("submit", saveEmployee);
  $("#newEmployeeButton")?.addEventListener("click", showNewEmployeeForm);
  $("#cancelEmployeeEdit")?.addEventListener("click", resetEmployeeForm);
  $("#permissionPreset").addEventListener("change", (event) => fillPermissionChecks(event.target.value));
  $("#toggleOpeningStock")?.addEventListener("click", () => {
    const panel = $("#openingStockPanel");
    panel?.classList.toggle("hidden");
    if (panel && !panel.classList.contains("hidden")) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#closeOpeningStock")?.addEventListener("click", () => $("#openingStockPanel")?.classList.add("hidden"));
  $$("#inventorySectionTabs [data-inventory-section]").forEach((button) => {
    button.addEventListener("click", () => showInventorySection(button.dataset.inventorySection));
  });
  $("#openingStockForm").addEventListener("submit", saveOpeningStock);
  $("#stockAdjustmentForm")?.addEventListener("submit", saveStockAdjustment);
  $("#closeStockAdjustment")?.addEventListener("click", closeStockAdjustment);
  $("#cancelStockAdjustment")?.addEventListener("click", closeStockAdjustment);
  $("#productEditForm")?.addEventListener("submit", saveProductEdit);
  $("#closeProductEdit")?.addEventListener("click", closeProductEdit);
  $("#cancelProductEdit")?.addEventListener("click", closeProductEdit);
  $("#openingStockForm").addEventListener("input", () => {
    collectOpeningStockLines();
    fillCategoryOptions();
  });
  $("#addOpeningStockLine")?.addEventListener("click", () => addOpeningStockLine());
  $("#purchaseInvoiceForm").addEventListener("submit", savePurchaseInvoice);
  $("#purchaseInvoiceForm").addEventListener("input", () => {
    calculatePurchaseInvoice();
    fillCategoryOptions();
  });
  $("#purchaseProductSearch").addEventListener("input", () => renderProductSearch("purchase"));
  $("#purchaseProductSearch").addEventListener("focus", () => renderProductSearch("purchase", true));
  $("#invoiceArchiveSearch")?.addEventListener("input", () => { resetListPage("invoiceArchive"); renderSalesRecentInvoices(); });
  $("#invoiceArchiveSaleMode")?.addEventListener("change", () => { resetListPage("invoiceArchive"); renderSalesRecentInvoices(); });
  $("#invoiceArchiveStatus")?.addEventListener("change", () => { resetListPage("invoiceArchive"); renderSalesRecentInvoices(); });
  $("#salesReturnSearch")?.addEventListener("input", renderSalesReturnCenter);
  $("#allInvoiceSearch")?.addEventListener("input", () => { resetListPage("allInvoices"); renderUnifiedInvoices(); });
  $("#allInvoiceType")?.addEventListener("change", () => { resetListPage("allInvoices"); renderUnifiedInvoices(); });
  $("#allInvoiceStatus")?.addEventListener("change", () => { resetListPage("allInvoices"); renderUnifiedInvoices(); });
  $$("#invoiceArchiveTabs [data-invoice-tab]").forEach((button) => {
    button.addEventListener("click", () => showInvoiceArchiveTab(button.dataset.invoiceTab));
  });
  $("#purchaseInvoiceSearch")?.addEventListener("input", () => { resetListPage("purchaseInvoices"); renderPurchaseInvoices(); });
  $("#purchaseInvoiceSupplierFilter")?.addEventListener("change", () => { resetListPage("purchaseInvoices"); renderPurchaseInvoices(); });
  $("#purchaseInvoiceStatusFilter")?.addEventListener("change", () => { resetListPage("purchaseInvoices"); renderPurchaseInvoices(); });
  $("#productCatalogSearch")?.addEventListener("input", () => { resetListPage("products"); renderProducts(); });
  $("#productCategoryFilter")?.addEventListener("change", () => { resetListPage("products"); renderProducts(); });
  $("#productStockFilter")?.addEventListener("change", () => { resetListPage("products"); renderProducts(); });
  $("#inventorySearch")?.addEventListener("input", () => { resetListPage("inventory"); renderInventory(); });
  $("#inventoryStockFilter")?.addEventListener("change", () => { resetListPage("inventory"); renderInventory(); });
  $("#stockMovementSearch")?.addEventListener("input", () => { resetListPage("stockMovements"); renderInventory(); });
  $("#openingStockSearch")?.addEventListener("input", () => { resetListPage("openingStock"); renderOpeningStock(); });
  $("#purchaseInvoiceForm").paidAmount.addEventListener("input", () => {
    purchasePaidTouched = true;
  });
  $("#addPurchaseLine").addEventListener("click", () => addPurchaseLine());
  $("#supplierForm").addEventListener("submit", saveSupplier);
  $("#supplierPaymentForm").addEventListener("submit", saveSupplierPayment);
  $("#supplierPaymentForm").addEventListener("input", updateSupplierPaymentBalance);
  $("#closeSupplierPaymentModal")?.addEventListener("click", closeSupplierPaymentModal);
  $("#cancelSupplierPaymentModal")?.addEventListener("click", closeSupplierPaymentModal);
  $("#personalDebtForm").addEventListener("submit", savePersonalDebt);
  $("#personalDebtCustomerSearch")?.addEventListener("input", () => {
    if ($("#personalDebtCustomerPhone")) $("#personalDebtCustomerPhone").value = "";
    renderPersonalDebtCustomerSuggestions();
  });
  $("#personalDebtCustomerSearch")?.addEventListener("focus", renderPersonalDebtCustomerSuggestions);
  $("#personalDebtFundingSource")?.addEventListener("change", updatePersonalDebtEffect);
  $("#debtPaymentForm").addEventListener("submit", saveCustomerDebtPayment);
  $$(".voucher-form").forEach((form) => form.addEventListener("submit", saveVoucher));
  $$("#voucherCenterTabs [data-voucher-tab]").forEach((button) => {
    button.addEventListener("click", () => showVoucherTab(button.dataset.voucherTab));
  });
  $$("#voucherTypeSelector [data-create-voucher]").forEach((button) => {
    button.addEventListener("click", () => setVoucherCreateType(button.dataset.createVoucher));
  });
  $$("#voucherPartyKindSelector [data-voucher-party-kind]").forEach((button) => {
    button.addEventListener("click", () => setVoucherPartyKind(button.dataset.voucherPartyKind));
  });
  $("#voucherAccountSelect")?.addEventListener("change", selectVoucherAccount);
  $("#voucherAccountSearch")?.addEventListener("input", handleVoucherAccountSearch);
  $("#voucherAccountSearch")?.addEventListener("focus", () => renderVoucherAccountSuggestions(true));
  $("#voucherAccountSuggestions")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-voucher-account-id]");
    if (!button) return;
    const select = $("#voucherAccountSelect");
    if (select) select.value = button.dataset.voucherAccountId;
    const search = $("#voucherAccountSearch");
    if (search) search.value = voucherAccountDisplayName(clean($("#voucherCreateForm")?.elements.accountKind.value), button.dataset.voucherAccountId);
    $("#voucherAccountSuggestions")?.classList.remove("active");
    selectVoucherAccount();
  });
  $("#voucherCreateForm")?.amount?.addEventListener("input", updateVoucherEffectPreview);
  $("#voucherSearch")?.addEventListener("input", () => { resetListPage("vouchers"); renderVouchers(); });
  $("#voucherTypeFilter")?.addEventListener("change", () => { resetListPage("vouchers"); renderVouchers(); });
  $("#voucherStatusFilter")?.addEventListener("change", () => { resetListPage("vouchers"); renderVouchers(); });
  $("#debtCustomerSearch").addEventListener("input", renderDebtCustomerSuggestions);
  $("#debtCustomerSearch").addEventListener("focus", renderDebtCustomerSuggestions);
  $("#debtPaymentForm")?.amount?.addEventListener("input", updateCustomerPaymentBalance);
  $("#closeCustomerPayment")?.addEventListener("click", closeCustomerPaymentModal);
  $("#cancelCustomerPayment")?.addEventListener("click", closeCustomerPaymentModal);
  $("#orderSearch")?.addEventListener("input", () => { resetListPage("internalOrders"); renderInternalOrders(); });
  $("#orderStatusFilter").addEventListener("change", () => { resetListPage("internalOrders"); renderInternalOrders(); });
  $("#modonExternalSearch")?.addEventListener("input", () => {
    modonExternalPage = 1;
    renderModonExternalOrders();
  });
  $("#modonExternalStatusFilter")?.addEventListener("change", () => {
    modonExternalPage = 1;
    renderModonExternalOrders();
  });
  $("#modonExternalSourceFilter")?.addEventListener("change", () => {
    modonExternalPage = 1;
    renderModonExternalOrders();
  });
  $("#modonExternalAccountFilter")?.addEventListener("change", () => {
    modonExternalPage = 1;
    renderModonExternalOrders();
  });
  $("#refreshModonCenter")?.addEventListener("click", refreshModonOperationsCenter);
  $("#runFullModonReconciliation")?.addEventListener("click", runFullModonReconciliation);
  $("#syncCarrierInvoices")?.addEventListener("click", syncCarrierInvoicesFromModon);
  $$("#carrierInvoiceFilters [data-carrier-invoice-filter]").forEach((button) => {
    button.addEventListener("click", () => setCarrierInvoiceFilter(button.dataset.carrierInvoiceFilter));
  });
  $("#carrierInvoiceSearch")?.addEventListener("input", () => {
    resetListPage("deliveredCarrierInvoices");
    renderCarrierInvoices();
  });
  $("#returnSearch")?.addEventListener("input", () => {
    resetListPage("returnCarrierInvoices");
    renderCarrierInvoices();
  });
  $("#syncReturnCarrierInvoices")?.addEventListener("click", syncReturnCarrierInvoicesFromModon);
  $("#returnBarcodeInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    previewReturnedOrderByBarcode(event.target.value);
  });
  $("#startReturnCameraScan")?.addEventListener("click", startReturnCameraScan);
  $("#stopReturnCameraScan")?.addEventListener("click", stopReturnCameraScan);
  $("#customerSearch").addEventListener("input", renderCustomerHistory);
  $$("#customerDirectoryFilters [data-customer-directory-filter]").forEach((button) => {
    button.addEventListener("click", () => setCustomerDirectoryFilter(button.dataset.customerDirectoryFilter));
  });
  $("#reportEmployeeScope")?.addEventListener("change", (event) => {
    repo.state.reportEmployeeId = event.target.value || "all";
    renderReports();
  });
  $("#reportOperationScope")?.addEventListener("change", (event) => {
    repo.state.reportOperationScope = event.target.value || "all";
    renderReports();
  });
  $("#reportSaleModeScope")?.addEventListener("change", (event) => {
    repo.state.reportSaleModeScope = event.target.value || "all";
    renderReports();
  });
  $("#exportCsv").addEventListener("click", exportCsv);
  $("#printReport").addEventListener("click", printProfessionalReport);
  $("#printModonOrdersReport")?.addEventListener("click", openModonOrdersPrintDialog);
  $("#printCollectedCarrierInvoices")?.addEventListener("click", printCollectedCarrierInvoices);
  $("#printModonOrdersFromHub")?.addEventListener("click", openModonOrdersPrintDialog);
  $$("#reportTabs .tab-button").forEach((button) => {
    button.addEventListener("click", () => showReportTab(button.dataset.reportTab));
  });
  $("#checkDataHealth")?.addEventListener("click", refreshDataHealth);
  $("#downloadBackup")?.addEventListener("click", downloadOnlineBackup);
  $("#companySettingsForm")?.addEventListener("submit", saveCompanySettings);
  $("#printA4TestPage")?.addEventListener("click", printA4TestPage);
  $("#printTemplateTestType")?.addEventListener("change", renderPrintTemplateTestPreview);
  $("#printSelectedTemplateTest")?.addEventListener("click", printSelectedTemplateTest);
  $("#adminSecurityForm")?.addEventListener("submit", saveAdminSecurity);
  $("#companyLogoInput")?.addEventListener("change", previewCompanyLogo);
  $("#removeCompanyLogo")?.addEventListener("click", removeCompanyLogo);
  $("#closeAuditModal")?.addEventListener("click", closeAuditDetails);
  $("#closeCarrierInvoiceModal")?.addEventListener("click", closeCarrierInvoiceDetails);
  $("#closeCarrierCashConfirm")?.addEventListener("click", closeCarrierCashConfirmation);
  $("#cancelCarrierCashConfirm")?.addEventListener("click", closeCarrierCashConfirmation);
  $("#closeConnectionRecovery")?.addEventListener("click", closeConnectionRecoveryModal);
  $("#retryConnectionNow")?.addEventListener("click", retryConnectionsNow);
  $("#closeSalesReturn")?.addEventListener("click", closeSalesReturnModal);
  $("#cancelSalesReturn")?.addEventListener("click", closeSalesReturnModal);
  $("#salesReturnForm")?.addEventListener("submit", saveSalesReturn);
  $("#salesReturnLines")?.addEventListener("input", updateSalesReturnTotal);
  [$("#storageState"), $("#connectionState")].filter(Boolean).forEach((node) => {
    const openRecovery = () => showConnectionRecovery(null, "افحص الاتصال بخدمة البيانات وModon.");
    node.addEventListener("click", openRecovery);
    node.addEventListener("keydown", (event) => {
      if (["Enter", " "].includes(event.key)) {
        event.preventDefault();
        openRecovery();
      }
    });
  });
  $("#confirmCarrierCashAction")?.addEventListener("click", () => {
    if (pendingCarrierCashInvoiceId) confirmCarrierInvoice(pendingCarrierCashInvoiceId);
  });
  $$("#supplierTabs .tab-button").forEach((button) => {
    button.addEventListener("click", () => showSupplierTab(button.dataset.supplierTab));
  });
}

async function fillCatalogs(options = {}) {
  try {
    const cities = await provider.getCities();
    modonCatalog.cities = cities;
    if (cities[0]) {
      $("#citySelect").value = cities[0].id;
      $("#citySearch").value = cities[0].name;
    }
    const sizes = await provider.getPackageSizes();
    modonCatalog.packageSizes = sizes;
    $("#packageSelect").innerHTML = sizes.map((size) => `<option value="${size.id}">${size.name}</option>`).join("");
    if (cities[0] && !await fillRegions(cities[0].id, { silent: true })) throw new Error("تعذر جلب مناطق Modon");
    repo.state.settings.connected = true;
    renderConnection();
    return true;
  } catch (error) {
    repo.state.settings.connected = false;
    renderConnection();
    $("#citySearch").value = "تعذر جلب محافظات Modon";
    $("#regionSearch").value = "تعذر جلب المناطق";
    $("#packageSelect").innerHTML = `<option value="">تعذر جلب الأحجام</option>`;
    if (!options.silent) notifyOperationError(error, "تعذر الاتصال بخدمة Modon");
    return false;
  }
}

async function fillRegions(cityId, options = {}) {
  try {
    const regions = await provider.getRegions(cityId);
    modonCatalog.regions[cityId] = regions;
    $("#regionSearch").value = "";
    if (regions[0]) {
      $("#regionSelect").value = regions[0].id;
      $("#regionSearch").value = regions[0].name;
      updateDeliveryAddress();
    }
    return true;
  } catch (error) {
    $("#regionSearch").value = "تعذر جلب المناطق";
    if (!options.silent) notifyOperationError(error, "تعذر جلب مناطق Modon");
    return false;
  }
}

function renderCityOptions(showAll = false) {
  const query = showAll ? "" : normalizeSearch($("#citySearch").value);
  const cities = modonCatalog.cities.filter((city) => normalizeSearch(city.name).includes(query));
  $("#citySuggestions").innerHTML = `<div class="suggestion-empty">اختر من القائمة أو اكتب للبحث</div>` + (cities.slice(0, 80).map((city) => `<button type="button" class="suggestion-item" data-id="${city.id}" data-name="${escapeHtml(city.name)}">${escapeHtml(city.name)}</button>`).join("") || `<div class="suggestion-empty">لا توجد نتائج</div>`);
  $("#citySuggestions").classList.add("active");
  $$("#citySuggestions .suggestion-item").forEach((button) => {
    button.addEventListener("click", async () => {
      $("#citySelect").value = button.dataset.id;
      $("#citySearch").value = button.dataset.name;
      $("#regionSelect").value = "";
      $("#regionSearch").value = "";
      closeSuggestions();
      updateDeliveryAddress();
      await fillRegions(button.dataset.id);
    });
  });
}

function renderRegionOptions(showAll = false) {
  const cityId = $("#citySelect").value;
  const query = showAll ? "" : normalizeSearch($("#regionSearch").value);
  const regions = (modonCatalog.regions[cityId] || []).filter((region) => normalizeSearch(region.name).includes(query));
  $("#regionSuggestions").innerHTML = `<div class="suggestion-empty">اختر من القائمة أو اكتب للبحث</div>` + (regions.slice(0, 100).map((region) => `<button type="button" class="suggestion-item" data-id="${region.id}" data-name="${escapeHtml(region.name)}">${escapeHtml(region.name)}</button>`).join("") || `<div class="suggestion-empty">${cityId ? "لا توجد نتائج" : "اختر المحافظة أولاً"}</div>`);
  $("#regionSuggestions").classList.add("active");
  $$("#regionSuggestions .suggestion-item").forEach((button) => {
    button.addEventListener("click", () => {
      $("#regionSelect").value = button.dataset.id;
      $("#regionSearch").value = button.dataset.name;
      closeSuggestions();
      updateDeliveryAddress();
    });
  });
}

function renderDebtCustomerSuggestions() {
  const query = normalizeSearch($("#debtCustomerSearch").value);
  const customers = repo.state.customers.filter((customer) => normalizeSearch(customer.name).includes(query));
  $("#debtCustomerSuggestions").innerHTML = customers.slice(0, 50).map((customer) => `<button type="button" class="suggestion-item" data-phone="${escapeHtml(customer.phone)}" data-name="${escapeHtml(customer.name)}">${escapeHtml(customer.name)}${customerPhoneLabel(customer.phone) ? ` - ${escapeHtml(customerPhoneLabel(customer.phone))}` : " - بدون هاتف"}</button>`).join("") || `<div class="suggestion-empty">لا توجد نتائج</div>`;
  $("#debtCustomerSuggestions").classList.add("active");
  $$("#debtCustomerSuggestions .suggestion-item").forEach((button) => {
    button.addEventListener("click", () => {
      $("#debtCustomerSearch").value = button.dataset.name;
      $("#debtCustomerPhone").value = button.dataset.phone;
      $("#debtInvoiceId").value = "";
      $("#debtPersonalDebtId").value = "";
      $("#debtPaymentType").value = "general";
      $("#debtInstallmentIndex").value = "";
      $("#debtPaymentTarget").value = "دفعة عامة على الزبون";
      selectedCustomerPhone = button.dataset.phone;
      closeSuggestions();
      updateCustomerPaymentBalance();
    });
  });
}

function renderPersonalDebtCustomerSuggestions() {
  const input = $("#personalDebtCustomerSearch");
  const box = $("#personalDebtCustomerSuggestions");
  if (!input || !box) return;
  const query = normalizeSearch(input.value);
  const customers = repo.state.customers
    .filter((customer) => !query || normalizeSearch(`${customer.name} ${customerPhoneLabel(customer.phone)}`).includes(query))
    .slice(0, 50);
  const createLabel = clean(input.value);
  box.innerHTML = customers.map((customer) => `
    <button type="button" class="suggestion-item" data-personal-debt-customer="${escapeAttr(customer.phone)}">
      <strong>${escapeHtml(customer.name || "زبون")}</strong>
      <small>${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")} · الرصيد ${money(customerOpenDebt(customer.phone))}</small>
    </button>
  `).join("") + (createLabel ? `
    <button type="button" class="suggestion-item create-customer-suggestion" data-create-personal-debt-customer="${escapeAttr(createLabel)}">
      <strong>＋ إنشاء زبون باسم «${escapeHtml(createLabel)}»</strong>
      <small>سيُنشأ ملف زبون تلقائيًا عند حفظ الدين</small>
    </button>
  ` : "");
  if (!customers.length && !createLabel) box.innerHTML = `<div class="suggestion-empty">اكتب اسم الزبون للبحث أو الإنشاء.</div>`;
  box.classList.add("active");
  box.querySelectorAll("[data-personal-debt-customer]").forEach((button) => {
    button.addEventListener("click", () => {
      const customer = repo.state.customers.find((item) => item.phone === button.dataset.personalDebtCustomer);
      if (!customer) return;
      input.value = customer.name;
      $("#personalDebtCustomerPhone").value = customer.phone;
      $("#personalDebtCustomerPhoneInput").value = customerPhoneLabel(customer.phone);
      closeSuggestions();
    });
  });
  box.querySelector("[data-create-personal-debt-customer]")?.addEventListener("click", (event) => {
    input.value = event.currentTarget.dataset.createPersonalDebtCustomer;
    $("#personalDebtCustomerPhone").value = "";
    closeSuggestions();
    $("#personalDebtCustomerPhoneInput")?.focus();
  });
}

function updatePersonalDebtEffect() {
  const box = $("#personalDebtEffect");
  if (!box) return;
  const fromCash = $("#personalDebtFundingSource")?.value !== "external";
  box.classList.toggle("external", !fromCash);
  box.innerHTML = fromCash
    ? `<strong>الأثر المحاسبي</strong><span>سيُنقص المبلغ من القاصة الآن، وعند السداد يعود إلى القاصة.</span>`
    : `<strong>الأثر المحاسبي</strong><span>لن تتأثر القاصة عند إنشاء الدين، لكن أي سداد لاحق سيدخل إليها.</span>`;
}

function updateDeliveryAddress() {
  const city = clean($("#citySearch").value);
  const region = clean($("#regionSearch").value);
  const parts = [city, region].filter(Boolean);
  if (parts.length) $("#deliveryAddress").value = parts.join(" - ");
}

function closeSuggestions() {
  $$(".suggestions").forEach((box) => box.classList.remove("active"));
}

function renderProductSearch(target, showAll = false) {
  const input = target === "sale" ? $("#saleProductSearch") : target === "purchase" ? $("#purchaseProductSearch") : $("#modonProductSearch");
  const box = target === "sale" ? $("#saleProductSuggestions") : target === "purchase" ? $("#purchaseProductSuggestions") : $("#modonProductSuggestions");
  if (!input || !box) return;
  const query = showAll ? "" : normalizeSearch(input.value);
  const products = repo.state.products
    .filter((product) => !query || normalizeSearch(`${product.name} ${product.category || ""}`).includes(query))
    .slice(0, 50);
  const productResults = products.map((product) => `
    <button type="button" class="suggestion-item product-suggestion" data-id="${product.id}">
      <strong>${escapeHtml(product.name)}</strong>
      <small>${escapeHtml(product.category || "غير مصنف")} | مفرد ${money(product.retailPrice ?? product.price)} - جملة ${money(product.wholesalePrice ?? product.retailPrice ?? product.price)} | رصيد ${stockOf(product.id)}</small>
    </button>
  `).join("");
  box.innerHTML = productResults || `<div class="suggestion-empty">${target === "sale" ? "لا توجد نتائج. أضف المنتج أولاً من المخزون الافتتاحي أو فاتورة الشراء." : "لا توجد نتائج. اضغط إضافة منتج في فاتورة الشراء واكتب المنتج الجديد."}</div>`;
  box.classList.add("active");
  Array.from(box.querySelectorAll(".product-suggestion")).forEach((button) => {
    button.addEventListener("click", () => {
      const product = getProduct(button.dataset.id);
      if (!product) return;
      if (target === "sale") {
        addSaleLine(product);
        input.value = "";
      } else if (target === "purchase") {
        addPurchaseLine(product);
        input.value = "";
      } else {
        selectModonProduct(product);
      }
      closeSuggestions();
    });
  });
}

function fillEmployeeControls() {
  const employees = repo.state.employees.filter((employee) => employee.active);
  const scopedEmployees = canUseAllAccounts() ? employees : employees.filter((employee) => employee.id === currentEmployee()?.id);
  const options = [
    ...(canUseAllAccounts() ? [`<option value="all">كل الشركة</option>`] : []),
    ...scopedEmployees.map((employee) => `<option value="${employee.id}">${employee.name}${employee.modonUsername ? ` - ${employee.modonUsername}` : ""}</option>`),
  ].join("");
  $("#employeeScope").innerHTML = options;
  if (!canUseAllAccounts() && currentEmployee()) repo.state.activeEmployeeId = currentEmployee().id;
  $("#employeeScope").value = repo.state.activeEmployeeId || (canUseAllAccounts() ? "all" : currentEmployee()?.id || "");
  const modonHubScope = $("#modonHubEmployeeScope");
  if (modonHubScope) {
    modonHubScope.innerHTML = options || `<option value="">لا يوجد حساب Modon</option>`;
    modonHubScope.value = repo.state.activeEmployeeId || (canUseAllAccounts() ? "all" : currentEmployee()?.id || "");
    modonHubScope.disabled = !canUseAllAccounts();
  }
  const modonHubPeriodScope = $("#modonHubPeriodScope");
  if (modonHubPeriodScope) {
    modonHubPeriodScope.value = ["system", "today", "month", "custom"].includes(repo.state.settings?.modonHubPeriodScope)
      ? repo.state.settings.modonHubPeriodScope
      : "system";
    syncModonHubCustomRange();
  }
  const reportScope = $("#reportEmployeeScope");
  if (reportScope) {
    const reportOptions = options || `<option value="">لا يوجد موظفون</option>`;
    const allowedIds = new Set([
      ...(canUseAllAccounts() ? ["all"] : []),
      ...scopedEmployees.map((employee) => employee.id),
    ]);
    if (!allowedIds.has(repo.state.reportEmployeeId)) {
      repo.state.reportEmployeeId = canUseAllAccounts() ? "all" : currentEmployee()?.id || "";
    }
    reportScope.innerHTML = reportOptions;
    reportScope.value = repo.state.reportEmployeeId;
  }
  const invoiceCreatorId = repo.state.currentUserId === "admin" ? "admin" : currentEmployee()?.id || "";
  const invoiceCreatorLabel = invoiceCreatorId ? employeeName(invoiceCreatorId) : "غير مسجل";
  $("#invoiceEmployee").innerHTML = `<option value="${invoiceCreatorId}">${escapeHtml(invoiceCreatorLabel)}</option>`;
  $("#invoiceEmployee").value = invoiceCreatorId;
  $("#modonEmployee").innerHTML = scopedEmployees.map((employee) => `<option value="${employee.id}">${employee.name} - ${employee.modonUsername || "Modon"}</option>`).join("");
}

function fillPermissionChecks(role, explicitPermissions = null) {
  const selected = new Set(explicitPermissions || permissionPresets[role] || []);
  $("#permissionChecks").innerHTML = permissionGroups.map((group) => `
    <div class="permission-group">
      <div class="permission-group-title">${escapeHtml(group.title)}</div>
      <div class="permission-group-items">
        ${group.keys.map((key) => {
          const label = permissionLabel(key);
          return `<label class="check-line">
            <input type="checkbox" name="permissions" value="${key}" ${selected.has(key) ? "checked" : ""} />
            <span>${escapeHtml(label)}</span>
          </label>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

function fillSupplierControls() {
  if ($("#productSupplier")) $("#productSupplier").innerHTML = repo.state.suppliers.map((supplier) => `<option value="${supplier.id}">${supplier.name}</option>`).join("");
  $("#purchaseSupplier").innerHTML = repo.state.suppliers.map((supplier) => `<option value="${supplier.id}">${supplier.name}</option>`).join("");
  $("#paymentSupplier").innerHTML = repo.state.suppliers.map((supplier) => `<option value="${supplier.id}">${supplier.name}</option>`).join("");
  if ($("#purchaseInvoiceSupplierFilter")) {
    const current = $("#purchaseInvoiceSupplierFilter").value || "all";
    $("#purchaseInvoiceSupplierFilter").innerHTML = `<option value="all">كل الموردين</option>` + repo.state.suppliers.map((supplier) => `<option value="${supplier.id}">${escapeHtml(supplier.name)}</option>`).join("");
    $("#purchaseInvoiceSupplierFilter").value = repo.state.suppliers.some((supplier) => supplier.id === current) ? current : "all";
  }
  if (repo.state.selectedSupplierId) $("#paymentSupplier").value = repo.state.selectedSupplierId;
}

function fillProductSelect() {
  $$("#saleLines .sale-line").forEach(bindSaleLine);
  calculateSaleInvoice();
}

function fillSaleProductSelect(select) {
  const current = select.value;
  select.innerHTML = `<option value="">اختر منتج</option>` + repo.state.products.map((product) => `<option value="${product.id}">${product.name} - ${money(product.retailPrice ?? product.price)}</option>`).join("");
  select.value = current;
  const product = getProduct(select.value);
  const row = select.closest(".sale-line");
  if (product && row) row.querySelector('[name="salePrice"]').value = product.retailPrice ?? product.price;
}

function bindSaleLine(row) {
  const select = row.querySelector('[name="saleProduct"]');
  if (!select || select.type === "hidden") return;
  select.onchange = () => {
    const product = getProduct(select.value);
    if (product) row.querySelector('[name="salePrice"]').value = product.retailPrice ?? product.price;
    calculateSaleInvoice();
  };
}

function addSaleLine(product = null) {
  if (!product?.id) return;
  const row = createSaleLineRow(product);
  $("#saleLines").append(row);
  calculateSaleInvoice();
}

function calculateSaleInvoice() {
  let subtotal = 0;
  $$("#saleLines .sale-line").forEach((row) => {
    const qty = number(row.querySelector('[name="saleQty"]').value);
    const price = number(row.querySelector('[name="salePrice"]').value);
    const discount = number(row.querySelector('[name="saleDiscount"]').value);
    const total = Math.max(qty * price - discount, 0);
    row.querySelector(".line-total").textContent = money(total);
    subtotal += total;
  });
  const invoiceDiscount = number($("#invoiceForm").invoiceDiscount.value);
  const net = Math.max(subtotal - invoiceDiscount, 0);
  const isInstallment = $("#isInstallment").checked;
  if (!paidAmountTouched) $("#invoiceForm").paidAmount.value = isInstallment ? 0 : net;
  const paid = Math.min(number($("#invoiceForm").paidAmount.value), net);
  const remaining = net - paid;
  $("#saleLinesEmpty")?.classList.toggle("hidden", $$("#saleLines .sale-line").length > 0);
  const modePreview = $("#salePaymentModePreview");
  if (modePreview) {
    const mode = remaining <= 0 ? "cash" : isInstallment ? "installment" : "debt";
    modePreview.className = `sale-mode-preview ${mode}`;
    modePreview.innerHTML = `
      <span>${remaining <= 0 ? "بيع نقدي" : isInstallment ? "بيع بالتقسيط" : "دين على الزبون"}</span>
      <strong>${remaining <= 0 ? "المبلغ مسدد بالكامل" : `متبقي ${money(remaining)}`}</strong>
    `;
  }
  const salePhone = clean($("#invoiceForm")?.customerPhone?.value);
  const previousDebt = salePhone ? (customerOpenDebt(salePhone) || 0) : 0;
  const totalOutstanding = previousDebt + remaining;
  const summaryRows = [
    { label: "المدفوع الآن", value: money(paid) },
    { label: "المتبقي الآن", value: money(remaining), warn: remaining > 0 },
    { label: "المتبقي سابقاً", value: money(previousDebt), warn: previousDebt > 0 },
    ...(invoiceDiscount > 0 ? [{ label: "خصم الفاتورة", value: money(invoiceDiscount) }] : []),
    { label: "الإجمالي لهذه الفاتورة", value: money(net) },
    { label: "الإجمالي المتبقي على الزبون", value: money(totalOutstanding), warn: totalOutstanding > 0, total: true },
    { label: "نوع المتبقي", value: remaining <= 0 ? "لا يوجد" : isInstallment ? "أقساط" : "دين زبون" },
  ];
  $("#saleInvoiceSummary").innerHTML = summaryRows
    .map((row) => `<div class="${row.warn ? "outstanding" : ""}${row.total ? " sale-summary-total" : ""}"><span>${row.label}</span><strong>${row.value}</strong></div>`)
    .join("");
  renderInstallmentPreview(remaining);
}

function renderSaleWorkspace() {
  calculateSaleInvoice();
  renderSaleCustomerAccountSummary();
}

function renderSaleCustomerAccountSummary() {
  const box = $("#saleCustomerAccountSummary");
  if (!box) return;
  const name = clean($("#saleCustomerName")?.value);
  const phone = clean($("#invoiceForm")?.customerPhone?.value);
  const customer = repo.state.customers.find((item) => (phone && item.phone === phone) || (name && normalizeSearch(item.name) === normalizeSearch(name)));
  if (!customer) {
    box.innerHTML = name ? `<div class="sale-account-new"><strong>زبون جديد</strong><span>سيتم إنشاء حسابه تلقائيًا عند حفظ الفاتورة.</span></div>` : "";
    return;
  }
  const invoices = accounting.scopedInvoices().filter((invoice) => !invoice.cancelled && invoice.customerPhone === customer.phone && invoice.type !== "return");
  const profile = customerDirectoryProfile(customer, accounting.scopedInvoices());
  const recent = invoices.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);
  box.innerHTML = `<div class="sale-account-summary-head"><div><span class="eyebrow">حساب الزبون السابق</span><strong>${escapeHtml(customer.name)}</strong></div><span class="sale-account-balance ${profile.balance > 0 ? "has-debt" : "settled"}">${profile.balance > 0 ? `عليه ${money(profile.balance)}` : "الحساب مسدد"}</span></div><div class="sale-account-summary-metrics"><span><small>فواتير سابقة</small><b>${profile.invoiceCount}</b></span><span><small>ديون مفتوحة</small><b>${money(profile.directDebtBalance)}</b></span><span><small>أقساط متبقية</small><b>${money(profile.installmentBalance)}</b></span><span><small>أقساط متأخرة</small><b>${profile.overdueInstallments}</b></span></div>${recent.length ? `<div class="sale-account-recent"><small>آخر الحركات</small>${recent.map((invoice) => `<span>${escapeHtml(invoice.number)} · ${money(invoice.total)} · ${escapeHtml(invoice.paymentStatus || "")}</span>`).join("")}</div>` : ""}`;
}

function renderSaleCustomerSuggestions(showAll = false) {
  const input = $("#saleCustomerName");
  const box = $("#saleCustomerSuggestions");
  if (!input || !box) return;
  const query = showAll ? "" : normalizeSearch(input.value);
  const scopedInvoices = repo.state.invoices.filter((invoice) => activeEmployeeId() === "all" || invoice.employeeId === activeEmployeeId());
  const customers = repo.state.customers
    .filter((customer) => !query || normalizeSearch(`${customer.name} ${customer.phone}`).includes(query))
    .sort((left, right) => clean(left.name).localeCompare(clean(right.name), "ar"))
    .slice(0, 40);
  box.innerHTML = customers.map((customer) => {
    const profile = customerDirectoryProfile(customer, scopedInvoices);
    const status = customerDirectoryStatus(profile);
    return `<button type="button" class="suggestion-item sale-customer-suggestion" data-phone="${escapeAttr(customer.phone)}" data-name="${escapeAttr(customer.name)}">
      <span class="sale-customer-suggestion-copy"><strong>${escapeHtml(customer.name || "زبون")}</strong><small>${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")} · ${profile.invoiceCount} فواتير</small></span>
      <span class="sale-customer-suggestion-status ${status.kind}"><small>${status.label}</small><strong>${profile.balance > 0 ? money(profile.balance) : "0 د.ع"}</strong></span>
    </button>`;
  }).join("") || `<div class="suggestion-empty sale-customer-empty"><strong>لا يوجد زبون مطابق</strong><span>يمكنك متابعة كتابة الاسم لإنشاء فاتورة لزبون جديد.</span></div>`;
  box.classList.add("active");
  $$("#saleCustomerSuggestions .sale-customer-suggestion").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.name;
      const phoneInput = $("#invoiceForm")?.customerPhone;
      if (phoneInput) phoneInput.value = customerPhoneLabel(button.dataset.phone);
      closeSuggestions();
      calculateSaleInvoice();
      renderSaleCustomerAccountSummary();
    });
  });
}

function syncSaleCustomerPhone() {
  const name = clean($("#saleCustomerName")?.value).toLowerCase();
  if (!name) return;
  const matches = repo.state.customers.filter((customer) => clean(customer.name).toLowerCase() === name);
  if (matches.length !== 1) return;
  const phoneInput = $("#invoiceForm")?.customerPhone;
  if (phoneInput && !clean(phoneInput.value)) phoneInput.value = customerPhoneLabel(matches[0].phone);
}

function renderInstallmentPreview(remaining) {
  if (!$("#isInstallment").checked) {
    $("#installmentPreview").innerHTML = "";
    return;
  }
  const schedule = buildInstallments(
    remaining,
    number($("#invoiceForm").installmentMonths.value),
    clean($("#invoiceForm").firstInstallmentDate.value) || today(),
    $("#invoiceForm").installmentFrequency.value,
  );
  const frequency = frequencyLabel($("#invoiceForm").installmentFrequency.value);
  $("#installmentPreview").innerHTML = `
    <div class="installment-schedule-head"><div><span class="eyebrow">الاستحقاقات</span><h3>جدول الأقساط</h3></div><strong>${frequency} · ${schedule.length} أقساط</strong></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>رقم القسط</th><th>تاريخ الاستحقاق</th><th>المبلغ</th></tr></thead>
        <tbody>${schedule.map((item, index) => `<tr><td>${index + 1}</td><td>${item.dueDate}</td><td>${money(item.amount)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function frequencyLabel(value) {
  if (value === "daily") return "يومي";
  if (value === "weekly") return "أسبوعي";
  if (value === "monthly") return "شهري";
  if (value === "yearly") return "سنوي";
  return value;
}

function fillModonProductSelect() {
  const search = $("#modonProductSearch");
  $$("#modonOrderLines .modon-order-line").forEach((row) => {
    if (!getProduct(row.dataset.productId)) row.remove();
  });
  if (search) search.value = "";
  updateModonOrderLinesEmpty();
  applyDefaultModonDelivery();
  updateModonOrderPricing();
}

function selectModonProduct(product, options = {}) {
  if (!product?.id) return;
  const existing = $(`#modonOrderLines .modon-order-line[data-product-id="${product.id}"]`);
  if (existing) {
    const quantity = existing.querySelector('[name="modonLineQty"]');
    quantity.value = number(quantity.value) + number(options.quantity || 1);
  } else {
    const row = document.createElement("tr");
    row.className = "modon-order-line";
    row.dataset.productId = product.id;
    const priceType = clean(options.priceType) || "retail";
    const unitPrice = number(options.unitPrice ?? (priceType === "wholesale" ? product.wholesalePrice ?? product.retailPrice ?? product.price : product.retailPrice ?? product.price));
    const quantity = Math.max(number(options.quantity || 1), 1);
    row.innerHTML = `
      <td><strong>${escapeHtml(product.name)}</strong><div class="hint">رصيد ${stockOf(product.id)}</div></td>
      <td><select name="modonLinePriceType"><option value="retail">مفرد</option><option value="wholesale">جملة</option></select></td>
      <td><input type="number" name="modonLineQty" min="1" value="${quantity}" /></td>
      <td><input type="number" name="modonLinePrice" min="0" value="${unitPrice}" /></td>
      <td class="modon-line-total">${money(unitPrice * quantity)}</td>
      <td><button class="ghost remove-modon-line" type="button">حذف</button></td>`;
    row.querySelector('[name="modonLinePriceType"]').value = priceType;
    row.querySelector('[name="modonLinePriceType"]').addEventListener("change", (event) => {
      row.querySelector('[name="modonLinePrice"]').value = event.target.value === "wholesale"
        ? number(product.wholesalePrice ?? product.retailPrice ?? product.price)
        : number(product.retailPrice ?? product.price);
      updateModonOrderPricing();
    });
    row.querySelectorAll('input').forEach((input) => input.addEventListener("input", () => updateModonOrderPricing()));
    row.querySelector('.remove-modon-line').addEventListener("click", () => {
      row.remove();
      updateModonOrderLinesEmpty();
      updateModonOrderPricing();
    });
    $("#modonOrderLines").append(row);
  }
  $("#modonProductSearch").value = "";
  updateModonOrderLinesEmpty();
  updateModonOrderPricing();
}

function resetModonOrderFormForNew() {
  editingModonOrderId = null;
  const form = $("#modonOrderForm");
  if (!form) return;
  form.reset();
  $("#modonOrderLines").innerHTML = "";
  $("#citySelect").value = "";
  $("#regionSelect").value = "";
  $("#citySearch").value = "";
  $("#regionSearch").value = "";
  $("#deliveryAddress").value = "";
  $("#modonProductSearch").value = "";
  $("#modonOrderFormTitle").textContent = "الزبون والوجهة";
  $("#modonOrderFormHint").textContent = "المعلومات الأساسية التي يعتمد عليها المندوب في الوصول والتواصل.";
  $("#modonOrderSubmitButton").textContent = "حفظ وإرسال طلب Modon";
  setModonOrderFormNotice("");
  $("#cancelModonOrderEdit")?.classList.add("hidden");
  fillEmployeeControls();
  applyDefaultModonDelivery();
  updateModonOrderLinesEmpty();
  updateModonOrderPricing();
}

function setModonOrderFormNotice(message, kind = "") {
  const box = $("#modonOrderFormNotice");
  if (!box) return;
  box.textContent = message || "";
  box.className = `form-notice ${kind || ""}`.trim();
  box.classList.toggle("hidden", !message);
}

function rejectModonOrderForm(message, useInline = false) {
  if (useInline) {
    setModonOrderFormNotice(message, "issue");
    $("#modonOrderFormNotice")?.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    alert(message);
  }
  return false;
}

function modonOrderEditBlockReason(order) {
  if (!order) return "لم يتم العثور على الطلب.";
  if (isCancelledModonOrder(order)) return "لا يمكن تعديل طلب ملغي.";
  if (order.deliver_confirmed_fin) return "لا يمكن تعديل طلب تم قبض فاتورته من Modon.";
  if (order.returned_received_stock) return "لا يمكن تعديل طلب تم استلامه كراجع داخل المخزون.";
  if (order.has_merchant_fin_record || order.merchant_invoice_id) return "لا يمكن تعديل طلب دخل في فاتورة/كشف Modon.";
  if (order.status === "delivered") return "لا يمكن تعديل طلب تم تسليمه للزبون.";
  if (order.status === "returned") return "لا يمكن تعديل طلب أصبح راجعًا.";
  if (order.status === "issue") return "لا يمكن تعديل طلب عليه مشكلة قبل تحديث حالته من Modon أو إلغائه إذا كان ما زال عند التاجر.";
  const statusText = clean(order.modon_status_text || order.status_name).toLowerCase();
  if (statusText.includes("استلامه من قبل السائق") || statusText.includes("مع المندوب") || statusText.includes("مندوب الاستلام")) {
    return "لا يمكن تعديل الطلب بعد استلامه من قبل السائق.";
  }
  const status = clean(order.status).toLowerCase();
  const statusId = clean(order.status_id).toLowerCase();
  if ((status && status !== "new") || (statusId && statusId !== "1" && statusId !== "new")) {
    return "لا يمكن تعديل الطلب بعد خروجه من عند التاجر. في هذه المرحلة يكون التعديل من داخل Modon غير آمن.";
  }
  return "";
}

function canEditModonOrder(order) {
  return !modonOrderEditBlockReason(order);
}

function reservedQuantityForInvoice(invoiceId, productId) {
  return repo.state.stockMovements
    .filter((movement) => movement.invoiceId === invoiceId && movement.productId === productId && number(movement.quantity) < 0)
    .reduce((sum, movement) => sum + Math.abs(number(movement.quantity)), 0);
}

function availableStockForModonEdit(productId, invoiceId = "") {
  return stockOf(productId) + reservedQuantityForInvoice(invoiceId, productId);
}

async function editModonOrderLocal(orderId) {
  if (!hasPermission("delivery.modon.create")) return alert("ليست لديك صلاحية تعديل طلبات Modon.");
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return alert("لم يتم العثور على الطلب.");
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  try {
    const remoteOrder = await withBusy(button, "جاري التحقق...", () => refreshSingleModonOrderStatus(order, { silent: true, throwOnError: true }));
    if (!remoteOrder) return alert("لم يرجع Modon بيانات هذا الطلب، لذلك لن يفتح التعديل حفاظًا على تطابق الطلبين.");
  } catch (error) {
    return notifyOperationError(error, "تعذر التحقق من حالة الطلب في Modon، ولن يفتح التعديل قبل نجاح الاتصال");
  }
  const blockReason = modonOrderEditBlockReason(order);
  if (blockReason) return alert(blockReason);
  const invoice = getInvoice(order.local_order_id);
  if (!invoice) return alert("لم يتم العثور على الفاتورة الداخلية المرتبطة بهذا الطلب.");
  editingModonOrderId = order.id;
  const form = $("#modonOrderForm");
  form.reset();
  $("#modonOrderLines").innerHTML = "";
  setModonOrderFormNotice("");
  $("#modonOrderFormTitle").textContent = `تعديل طلب Modon ${order.external_order_id || order.internal_order_no || ""}`;
  $("#modonOrderFormHint").textContent = "راجع بيانات الزبون والوجهة قبل إرسال التعديل إلى Modon.";
  $("#modonOrderSubmitButton").textContent = "حفظ تعديل طلب Modon";
  $("#cancelModonOrderEdit")?.classList.remove("hidden");
  fillEmployeeControls();
  form.employeeId.value = order.employeeId;
  form.customerName.value = order.customer_name || invoice.customerName || "";
  form.customerPhone.value = customerPhoneLabel(order.customer_phone || invoice.customerPhone || "");
  (order.lines?.length ? order.lines : invoice.lines || []).forEach((line) => {
    const product = getProduct(line.productId);
    if (product) {
      selectModonProduct(product, {
        quantity: line.quantity,
        unitPrice: line.price ?? line.unitPrice,
        priceType: line.priceType || "retail",
      });
    }
  });
  form.salePrice.value = number(order.local_total || invoice.total);
  $("#citySelect").value = order.city_id || "";
  $("#citySearch").value = order.city_name || "";
  if (order.city_id && !modonCatalog.regions[order.city_id]) {
    try { await loadRegions(order.city_id); } catch { /* Keep saved names even if Modon catalog is temporarily unavailable. */ }
  }
  $("#regionSelect").value = order.area_id || "";
  $("#regionSearch").value = order.area_name || "";
  form.address.value = order.address || "";
  form.goodsType.value = order.goods_type || order.product_name || "";
  form.packageSizeId.value = order.package_size_id || "";
  form.deliveryPrice.value = number(order.delivery_price || modonSettings().deliveryPrice);
  form.freeDelivery.checked = Boolean(order.free_delivery);
  form.isExchange.value = order.is_exchange ? "1" : "0";
  form.notes.value = order.issue_notes || "";
  updateModonOrderLinesEmpty();
  updateModonOrderPricing(true);
  showView("orders");
  setTimeout(() => form.customerName?.focus(), 50);
}

function collectModonOrderLines() {
  return $$("#modonOrderLines .modon-order-line").map((row) => {
    const product = getProduct(row.dataset.productId);
    const quantity = Math.max(number(row.querySelector('[name="modonLineQty"]').value), 0);
    const unitPrice = number(row.querySelector('[name="modonLinePrice"]').value);
    const priceType = clean(row.querySelector('[name="modonLinePriceType"]').value) || "retail";
    const total = quantity * unitPrice;
    row.querySelector('.modon-line-total').textContent = money(total);
    return product && quantity > 0 ? { productId: product.id, productName: product.name, quantity, unitPrice, priceType, cost: number(product.cost), total } : null;
  }).filter(Boolean);
}

function updateModonOrderLinesEmpty() {
  $("#modonOrderLinesEmpty")?.classList.toggle("hidden", $$("#modonOrderLines .modon-order-line").length > 0);
}

function applyDefaultModonDelivery() {
  const form = $("#modonOrderForm");
  if (!form) return;
  const defaultDelivery = modonSettings().deliveryPrice;
  if (!number(form.deliveryPrice.value)) form.deliveryPrice.value = defaultDelivery;
}

function updateModonOrderPricing(preserveManualTotal = false) {
  const form = $("#modonOrderForm");
  if (!form) return;
  const lines = collectModonOrderLines();
  const quantity = lines.reduce(sumBy("quantity"), 0);
  const markup = modonSettings().priceMarkup;
  const baseTotal = lines.reduce(sumBy("total"), 0);
  const orderTotal = preserveManualTotal ? number(form.salePrice.value) : baseTotal + (lines.length ? markup : 0);
  if (!preserveManualTotal) form.salePrice.value = orderTotal;
  const deliveryPrice = number(form.deliveryPrice.value) || modonSettings().deliveryPrice;
  const freeDelivery = Boolean(form.freeDelivery?.checked);
  const customerTotal = orderTotal + (freeDelivery ? 0 : deliveryPrice);
  const merchantNet = Math.max(orderTotal - (freeDelivery ? deliveryPrice : 0), 0);
  $("#modonOrderSummary").innerHTML = [
    ["عدد المنتجات", lines.length],
    ["إجمالي القطع", quantity],
    ["إجمالي المنتجات", money(baseTotal)],
    ["زيادة Modon للطلب", money(markup)],
    ["مبلغ الطلب", money(orderTotal)],
    ["أجرة التوصيل", money(deliveryPrice)],
    ["تحمل التوصيل", freeDelivery ? "التاجر" : "الزبون"],
    ["يدفع الزبون", money(customerTotal)],
    ["الصافي المتوقع", money(merchantNet)],
  ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function fillOpeningProductSelect() {
  if (!$("#openingProduct")) return;
  $("#openingProduct").innerHTML = repo.state.products.map((product) => `<option value="${product.id}">${product.name} - ${product.category || "غير مصنف"}</option>`).join("");
}

function categoryOptions() {
  const values = [
    ...repo.state.products.map((product) => product.category),
    ...$$('[name="itemCategory"]').map((input) => input.value),
  ].map(clean).filter(Boolean);
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "ar"));
}

function fillCategoryOptions() {
  const list = $("#categoryOptions");
  if (!list) return;
  list.innerHTML = categoryOptions().map((category) => `<option value="${escapeAttr(category)}"></option>`).join("");
}

function showView(viewId) {
  if ($("#modonOrderDrawer")?.classList.contains("open")) closeModonOrderDrawer();
  if (["debts", "installments"].includes(viewId)) viewId = "customers";
  const legacyVoucherType = { expenseVoucher: "expense", paymentVoucher: "payment", receiptVoucher: "receipt" }[viewId] || "";
  if (legacyVoucherType) viewId = "vouchers";
  const requestedModonHubTab = viewId === "carrierInvoices" ? "collection" : viewId === "modonReturns" ? "returns" : "";
  if (requestedModonHubTab) viewId = "modonFollow";
  if (viewId !== "modonFollow" && returnScannerActive) stopReturnCameraScan();
  if (!canOpenView(viewId)) {
    alert("ليست لديك صلاحية فتح هذا القسم.");
    viewId = firstAllowedView();
  }
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  const activeNavigationView = viewId;
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === activeNavigationView));
  const activeNavItem = $(`.nav-item[data-view="${activeNavigationView}"]`);
  const activeGroup = activeNavItem?.closest(".nav-group");
  if (activeGroup?.classList.contains("collapsed")) {
    activeGroup.classList.remove("collapsed");
    activeGroup.querySelector(".nav-group-toggle")?.setAttribute("aria-expanded", "true");
  }
  $("#pageTitle").textContent = titles[viewId][0];
  $("#pageSubtitle").textContent = titles[viewId][1];
  renderPageAction(viewId);
  renderActiveView({ includeControls: true });
  if (legacyVoucherType) {
    setVoucherCreateType(legacyVoucherType);
    showVoucherTab("voucherCreateTab");
  }
  if (["orders", "modonToday", "modonFollow", "modonReturns", "carrierInvoices", "accounts", "reports"].includes(viewId)) {
    repo.loadModonCacheInBackground();
  }
  stopModonAutoSync();
  if (viewId === "modonFollow") showModonHubTab(requestedModonHubTab || selectedStoredModonHubTab());
}

function showReportTab(tabId) {
  if (!tabId) return;
  $$("#reportTabs .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.reportTab === tabId));
  $$(".report-tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
}

function renderPageAction(viewId) {
  const button = $("#pagePrimaryAction");
  if (!button) return;
  const action = pageActions[viewId] || pageActions.dashboard;
  button.classList.toggle("hidden", Boolean(action.hidden));
  if (action.hidden) {
    delete button.dataset.viewJump;
    delete button.dataset.targetAction;
    return;
  }
  button.textContent = action.label;
  delete button.dataset.viewJump;
  delete button.dataset.targetAction;
  if (action.view) button.dataset.viewJump = action.view;
  if (action.target) button.dataset.targetAction = action.target;
}

function renderAuthState() {
  const storageReady = Boolean(repo.state.settings.storageConnected);
  document.body.classList.remove("storage-blocked");
  if (!storageReady) {
    $("#loginScreen").classList.remove("hidden");
    $("#currentUserBadge").textContent = "المستخدم: غير متاح";
    renderNavigationAccess();
    return;
  }
  const logged = Boolean(repo.state.currentUserId);
  $("#loginScreen").classList.toggle("hidden", logged);
  document.body.classList.toggle("locked", !logged);
  $("#currentUserBadge").textContent = `المستخدم: ${currentUserName()}`;
  const versionBadge = $("#appVersionBadge");
  if (versionBadge) versionBadge.textContent = `النسخة: ${APP_BUILD_VERSION}`;
  renderNavigationAccess();
  renderActionAccess();
  if (logged && !canOpenView($(".view.active")?.id || "dashboard")) showView(firstAllowedView());
}

function renderNavigationAccess() {
  $$(".nav-item, [data-view-jump]").forEach((button) => {
    const view = button.dataset.view || button.dataset.viewJump;
    const allowed = canOpenView(view);
    button.classList.toggle("hidden", !allowed);
  });
  $$(".nav-group[data-nav-group]").forEach((group) => {
    const visibleItems = Array.from(group.querySelectorAll(".nav-item")).some((item) => !item.classList.contains("hidden"));
    group.classList.toggle("hidden", !visibleItems);
  });
  $("#employeeScope").disabled = !canUseAllAccounts();
}

function renderActionAccess() {
  const rules = [
    ["#syncCarrierInvoices", "delivery.modon.invoices"],
    ["#syncReturnCarrierInvoices", "delivery.modon.receiveReturns"],
    ["#openingStockForm", "inventory.manage"],
    ["#purchaseInvoiceForm", "inventory.purchase"],
    ["#supplierForm", "inventory.manage"],
    ["#supplierPaymentForm", "cash.manage"],
    ["#personalDebtForm", "debts.manage"],
    ["#debtPaymentForm", "debts.manage"],
  ];
  rules.forEach(([selector, permission]) => {
    $$(selector).forEach((node) => node.classList.toggle("hidden", !hasPermission(permission)));
  });
}

function canOpenView(viewId) {
  if (!viewId) return true;
  if (viewId === "employees") return hasPermission("employees.manage") || hasPermission("delivery.modon.follow");
  if (viewId === "invoiceArchive") return hasPermission("sales.viewArchive") || hasPermission("inventory.purchase") || hasPermission("inventory.view");
  if (viewId === "vouchers") return ["cash.receipt", "cash.payment", "cash.expense"].some((permission) => hasPermission(permission));
  const permission = viewPermissions[viewId];
  return !permission || hasPermission(permission);
}

function employeeRequiresModonOnline(employee) {
  if (!employee || employee.role === "manager") return false;
  const permissions = employee.permissions || [];
  const hasModonPermission = permissions.some((permission) => permission === "delivery.modon" || permission.startsWith("delivery.modon."));
  return Boolean(employee.role === "modon" || employee.modonUsername || employee.hasModonCredentials || hasModonPermission);
}

function firstAllowedView() {
  return Object.keys(titles).find(canOpenView) || "dashboard";
}

function requirePermission(key, message = "ليست لديك صلاحية تنفيذ هذه العملية.") {
  if (hasPermission(key)) return true;
  alert(message);
  return false;
}

async function withBusy(button, label, task) {
  const previousText = button?.textContent || "";
  if (button) {
    button.disabled = true;
    button.textContent = label;
  }
  try {
    return await task();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function commitConfirmedMutation(mutation) {
  const stateBefore = structuredClone(repo.state);
  const baseStateBefore = structuredClone(repo.baseState || {});
  const revisionBefore = repo.loadedRevision;
  const remoteUpdatedAtBefore = repo.remoteUpdatedAt;
  const localContext = repo.captureLocalContext();
  try {
    const result = await mutation();
    await repo.saveNow();
    return result;
  } catch (error) {
    if (!["INSUFFICIENT_STOCK", "PRODUCT_IN_USE"].includes(error.code)) {
      repo.state = stateBefore;
      repo.loadedRevision = revisionBefore;
      repo.remoteUpdatedAt = remoteUpdatedAtBefore;
      repo.baseState = baseStateBefore;
      repo.migrate();
      repo.restoreLocalContext(localContext);
      renderActiveView();
      renderAuthState();
    }
    throw error;
  }
}

async function performConfirmedAction(button, label, mutation, errorContext) {
  try {
    await withBusy(button, label, () => commitConfirmedMutation(mutation));
    renderActiveView();
    return true;
  } catch (error) {
    notifyOperationError(error, errorContext);
    return false;
  }
}

async function saveAfterExternalChange(button, label = "جاري حفظ النسخة المحلية...") {
  let lastError = null;
  const previousText = button?.textContent || "";
  try {
    for (let attempt = 1; attempt <= 6; attempt += 1) {
      try {
        if (button) {
          button.disabled = true;
          button.textContent = attempt === 1 ? label : `${label} محاولة ${attempt}/6`;
        }
        await repo.saveNow();
        return true;
      } catch (error) {
        lastError = error;
        if (error.userNotified) throw error;
        await repo.checkRemoteRevision().catch(() => {});
        await wait(Math.min(1000 * attempt, 4000));
      }
    }
    throw lastError || new Error("تعذر حفظ النسخة المحلية بعد عدة محاولات.");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function saveInvoice(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const submitAction = event.submitter?.value || "save";
  const editingInvoice = editingInvoiceId ? getInvoice(editingInvoiceId) : null;
  const creatorId = editingInvoice?.employeeId || (repo.state.currentUserId === "admin" ? "admin" : currentEmployee()?.id);
  if (!creatorId) return alert("تعذر تحديد الحساب الذي ينشئ الفاتورة. أعد تسجيل الدخول.");
  const employee = creatorId === "admin" ? { id: "admin", name: "الإدارة" } : getEmployee(creatorId);
  if (!employee) return alert("الحساب الذي ينشئ الفاتورة غير موجود أو غير نشط.");
  if (editingInvoice && !hasPermission("sales.edit")) return alert("ليست لديك صلاحية تعديل الفواتير.");
  if (editingInvoice && (editingInvoice.cancelled || editingInvoice.saleMode === "modon")) return alert("لا يمكن تعديل هذه الفاتورة.");
  if (editingInvoice && invoicePaidAfterCreation(editingInvoice.id) > 0) return alert("لا يمكن تعديل فاتورة عليها دفعات لاحقة. ألغها أو راجع الدفعات أولًا.");

  const lines = collectSaleLines();
  if (!lines.length) return alert("أضف منتجًا واحدًا على الأقل.");
  const shortage = lines.find((line) => availableStockForSale(line.productId, editingInvoice?.id) < line.quantity);
  if (shortage) return alert(`الكمية غير كافية في المخزون للمنتج: ${shortage.productName}`);

  const isInstallment = form.get("isInstallment") === "1";
  const subtotal = lines.reduce(sumBy("total"), 0);
  const invoiceDiscount = number(form.get("invoiceDiscount"));
  const total = Math.max(subtotal - invoiceDiscount, 0);
  const paidAmount = Math.min(number(form.get("paidAmount")), total);
  const remaining = total - paidAmount;
  let saleMode = isInstallment && remaining > 0 ? "installment" : form.get("saleMode");
  if (!isInstallment && remaining > 0) saleMode = "customerDebt";
  if (remaining <= 0) saleMode = "cash";
  const invoice = {
    id: editingInvoice?.id || crypto.randomUUID(),
    number: editingInvoice?.number || uniqueDocumentNumber("INV"),
    receiptNo: editingInvoice?.receiptNo || uniqueDocumentNumber("RCPT"),
    employeeId: employee.id,
    productId: lines[0].productId,
    productName: lines.length === 1 ? lines[0].productName : `${lines.length} منتجات`,
    lines,
    priceType: clean(form.get("invoicePriceType")) === "wholesale" ? "wholesale" : "retail",
    customerName: clean(form.get("customerName")),
    customerPhone: clean(form.get("customerPhone")),
    quantity: lines.reduce(sumBy("quantity"), 0),
    unitPrice: lines[0].price,
    subtotal,
    invoiceDiscount,
    paidAmount,
    remaining,
    receivableAmount: remaining,
    total,
    saleMode,
    paymentStatus: remaining <= 0 ? "مسددة" : saleMode === "installment" ? "تقسيط" : "دين على الزبون",
    deliveryStatus: "لا يوجد توصيل",
    createdAt: editingInvoice?.createdAt || now(),
    editedAt: editingInvoice ? now() : undefined,
  };
  if (!invoice.customerPhone && remaining > 0) {
    invoice.customerPhone = editingInvoice?.customerPhone || `customer:${invoice.id}`;
  }
  if (saleMode === "installment" && remaining > 0) {
    invoice.installmentMonths = number(form.get("installmentMonths"));
    invoice.installmentFrequency = clean(form.get("installmentFrequency"));
    invoice.firstInstallmentDate = clean(form.get("firstInstallmentDate")) || today();
    invoice.installmentSchedule = buildInstallments(remaining, invoice.installmentMonths, invoice.firstInstallmentDate, invoice.installmentFrequency);
  }
  try {
    await withBusy(event.submitter, editingInvoice ? "جاري حفظ التعديل..." : "جاري حفظ الفاتورة...", async () => {
      await commitConfirmedMutation(async () => {
        if (editingInvoice) {
          const before = snapshot(editingInvoice);
          removeInvoiceEffects(editingInvoice);
          Object.assign(editingInvoice, invoice);
          addInvoiceAudit(invoice.id, "تعديل فاتورة", employee.id, `تم تعديل الفاتورة بقيمة ${money(invoice.total)} وعدد ${invoice.lines.length} بنود`);
          addAudit("تعديل فاتورة بيع", "invoice", invoice.id, invoice.number, money(invoice.total), before, invoice);
        } else {
          repo.state.invoices.unshift(invoice);
          addInvoiceAudit(invoice.id, "إنشاء فاتورة", employee.id, `تم إنشاء الفاتورة بقيمة ${money(invoice.total)} وعدد ${invoice.lines.length} بنود`);
          addAudit("إنشاء فاتورة بيع", "invoice", invoice.id, invoice.number, money(invoice.total), null, invoice);
        }
        upsertCustomer(invoice.customerName, invoice.customerPhone);
        applyInvoiceEffects(invoice);
        repo.state.lastSelectedInvoiceId = null;
      });
    });
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ فاتورة البيع");
    return;
  }
  if (submitAction === "save-print") {
    renderAll();
    printSaleInvoice(invoice.id);
  }
  event.target.reset();
  editingInvoiceId = null;
  resetInvoiceFormMode();
  paidAmountTouched = false;
  resetSaleLines();
  fillProductSelect();
  renderAll();
  showView("sales");
}

function collectSaleLines() {
  return $$("#saleLines .sale-line").map((row) => {
    const product = getProduct(row.querySelector('[name="saleProduct"]').value);
    const quantity = number(row.querySelector('[name="saleQty"]').value);
    const price = number(row.querySelector('[name="salePrice"]').value);
    const discount = number(row.querySelector('[name="saleDiscount"]').value);
    return product && quantity > 0 ? {
      productId: product.id,
      productName: product.name,
      quantity,
      price,
      priceType: clean(row.querySelector('[name="salePriceType"]')?.value) || "retail",
      cost: number(product.cost),
      discount,
      total: Math.max(quantity * price - discount, 0),
    } : null;
  }).filter(Boolean);
}

function applyInvoiceEffects(invoice) {
  (invoice.lines || []).forEach((line) => addStockMovement(line.productId, invoice.id, -line.quantity, "بيع", invoice.employeeId));
  if (invoice.remaining <= 0) {
    addCash(invoice.total, "بيع نقد", invoice.number, invoice.employeeId);
  } else {
    if (invoice.paidAmount > 0) addCash(invoice.paidAmount, invoice.saleMode === "installment" ? "دفعة مقدمة تقسيط" : "دفعة من دين زبون", invoice.number, invoice.employeeId);
    repo.state.customerDebts.unshift({
      id: crypto.randomUUID(),
      invoiceId: invoice.id,
      employeeId: invoice.employeeId,
      customerName: invoice.customerName,
      customerPhone: invoice.customerPhone,
      amount: invoice.remaining,
      type: invoice.saleMode === "installment" ? "installment" : "customerDebt",
      createdAt: now(),
    });
  }
}

function removeInvoiceEffects(invoice) {
  repo.state.stockMovements = repo.state.stockMovements.filter((item) => item.invoiceId !== invoice.id);
  repo.state.customerDebts = repo.state.customerDebts.filter((item) => item.invoiceId !== invoice.id);
  repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.reference !== invoice.number);
}

function availableStockForSale(productId, editingId = null) {
  const editingInvoice = editingId ? getInvoice(editingId) : null;
  const oldQty = editingInvoice?.cancelled ? 0 : (editingInvoice?.lines || [])
    .filter((line) => line.productId === productId)
    .reduce(sumBy("quantity"), 0);
  return stockOf(productId) + oldQty;
}

function hasInvoiceDraft() {
  const form = $("#invoiceForm");
  if (!form || editingInvoiceId) return false;
  const hasLines = $$("#saleLines .sale-line").length > 0;
  const hasDiscount = number(form.invoiceDiscount.value) > 0;
  const hasPaid = paidAmountTouched && number(form.paidAmount.value) > 0;
  const hasCustomerChange = Boolean(clean(form.customerName.value) || clean(form.customerPhone.value));
  return hasLines || hasDiscount || hasPaid || hasCustomerChange || $("#isInstallment").checked;
}

function editInvoice(invoiceId) {
  if (!hasPermission("sales.edit")) return alert("ليست لديك صلاحية تعديل الفواتير.");
  const invoice = getInvoice(invoiceId);
  if (!invoice || invoice.cancelled || invoice.saleMode === "modon") return alert("لا يمكن تعديل هذه الفاتورة.");
  if (invoicePaidAfterCreation(invoice.id) > 0) return alert("لا يمكن تعديل فاتورة عليها دفعات لاحقة.");
  if (hasInvoiceDraft() && !confirm("لديك فاتورة غير محفوظة في نموذج البيع. فتح تعديل فاتورة أخرى سيمسحها. هل تريد المتابعة؟")) return;
  editingInvoiceId = invoice.id;
  repo.state.lastSelectedInvoiceId = invoice.id;
  $("#invoiceEmployee").innerHTML = `<option value="${invoice.employeeId}">${escapeHtml(employeeName(invoice.employeeId))}</option>`;
  $("#invoiceEmployee").value = invoice.employeeId;
  $("#invoiceForm").customerName.value = invoice.customerName;
  $("#invoiceForm").customerPhone.value = customerPhoneLabel(invoice.customerPhone);
  $("#invoiceForm").invoiceDiscount.value = invoice.invoiceDiscount || 0;
  $("#invoiceForm").paidAmount.value = invoice.paidAmount || 0;
  paidAmountTouched = true;
  $("#isInstallment").checked = invoice.saleMode === "installment";
  $("#installmentBox").classList.toggle("active", $("#isInstallment").checked);
  $("#invoiceForm").installmentFrequency.value = invoice.installmentFrequency || "monthly";
  $("#invoiceForm").installmentMonths.value = invoice.installmentMonths || 1;
  $("#invoiceForm").firstInstallmentDate.value = invoice.firstInstallmentDate || "";
  setSaleInvoicePriceType(invoice.priceType || invoice.lines?.[0]?.priceType || "retail", false);
  resetSaleLines();
  (invoice.lines || []).forEach((line) => {
    const product = getProduct(line.productId);
    if (!product) return;
    addSaleLine(product);
    const row = $("#saleLines .sale-line:last-child");
    row.querySelector('[name="saleQty"]').value = line.quantity;
    row.querySelector('[name="salePriceType"]').value = line.priceType || "retail";
    const priceKind = row.querySelector(".sale-line-price-kind");
    if (priceKind) priceKind.textContent = (line.priceType || invoice.priceType) === "wholesale" ? "سعر الجملة" : "سعر المفرد";
    row.querySelector('[name="salePrice"]').value = line.price;
    row.querySelector('[name="saleDiscount"]').value = line.discount || 0;
  });
  setInvoiceFormMode(invoice);
  calculateSaleInvoice();
  showView("sales");
  $("#invoiceForm").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function cancelInvoice(invoiceId) {
  if (!hasPermission("sales.cancel")) return alert("ليست لديك صلاحية إلغاء الفواتير.");
  const invoice = getInvoice(invoiceId);
  if (!invoice || invoice.cancelled) return;
  if (invoice.saleMode === "modon") return alert("طلبات Modon تُلغى من قسم الطلبات.");
  if (invoicePaidAfterCreation(invoice.id) > 0) return alert("لا يمكن إلغاء فاتورة عليها دفعات لاحقة قبل معالجة الدفعات.");
  if (!confirm(`تأكيد إلغاء الفاتورة ${invoice.number}؟ سيتم عكس المخزون والقاصة/الدين.`)) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء الفاتورة...", async () => {
    const before = snapshot(invoice);
    removeInvoiceEffects(invoice);
    invoice.cancelled = true;
    invoice.cancelledAt = now();
    invoice.paymentStatus = "ملغاة";
    invoice.deliveryStatus = "ملغاة";
    invoice.remaining = 0;
    invoice.receivableAmount = 0;
    addInvoiceAudit(invoice.id, "إلغاء فاتورة", activeEmployeeId() === "all" ? "admin" : activeEmployeeId(), "تم عكس المخزون والقاصة/الدين لهذه الفاتورة");
    addAudit("إلغاء فاتورة بيع", "invoice", invoice.id, invoice.number, money(invoice.total), before, invoice);
    repo.state.lastSelectedInvoiceId = invoice.id;
  }, "تعذر إلغاء فاتورة البيع");
}

function invoiceFormTitleEl() {
  // The sales form heading is an <h2> inside the toolbar (there is no .panel-head
  // anymore). Select it defensively so a future markup change can't silently break
  // the whole edit flow.
  return $("#invoiceForm h2") || $("#invoiceForm .sales-invoice-toolbar h2");
}

function setInvoiceFormMode(invoice) {
  const title = invoiceFormTitleEl();
  if (title) title.textContent = `تعديل فاتورة ${invoice.number}`;
  const saveBtn = $("#invoiceForm button[name='action'][value='save']");
  if (saveBtn) saveBtn.textContent = "حفظ التعديل";
  const savePrintBtn = $("#invoiceForm button[name='action'][value='save-print']");
  if (savePrintBtn) savePrintBtn.textContent = "حفظ التعديل وطباعة";
  $("#backToInvoices")?.classList.remove("hidden");
}

function resetInvoiceFormMode() {
  const title = invoiceFormTitleEl();
  if (title) title.textContent = "إنشاء فاتورة بيع";
  const saveBtn = $("#invoiceForm button[name='action'][value='save']");
  if (saveBtn) saveBtn.textContent = "حفظ الفاتورة";
  const savePrintBtn = $("#invoiceForm button[name='action'][value='save-print']");
  if (savePrintBtn) savePrintBtn.textContent = "حفظ وطباعة الفاتورة";
  $("#backToInvoices")?.classList.add("hidden");
  const invoiceCreatorId = repo.state.currentUserId === "admin" ? "admin" : currentEmployee()?.id || "";
  $("#invoiceEmployee").innerHTML = `<option value="${invoiceCreatorId}">${escapeHtml(invoiceCreatorId ? employeeName(invoiceCreatorId) : "غير مسجل")}</option>`;
  $("#invoiceEmployee").value = invoiceCreatorId;
}

function backToInvoiceArchive() {
  editingInvoiceId = null;
  $("#invoiceForm").reset();
  paidAmountTouched = false;
  resetSaleLines();
  resetInvoiceFormMode();
  showView("invoiceArchive");
}

function resetSaleLines() {
  $("#saleLines").innerHTML = "";
  calculateSaleInvoice();
}

function buildInstallments(amount, months, firstDate, frequency = "monthly") {
  const count = Math.max(months || 1, 1);
  const base = Math.floor(amount / count);
  const remainder = amount - base * count;
  const start = new Date(firstDate);
  return Array.from({ length: count }, (_, index) => {
    const due = new Date(start);
    if (frequency === "daily") due.setDate(start.getDate() + index);
    if (frequency === "weekly") due.setDate(start.getDate() + index * 7);
    if (frequency === "monthly") due.setMonth(start.getMonth() + index);
    if (frequency === "yearly") due.setFullYear(start.getFullYear() + index);
    return {
      dueDate: due.toISOString().slice(0, 10),
      amount: base + (index === count - 1 ? remainder : 0),
      paid: false,
    };
  });
}

async function saveModonOrder(event) {
  event.preventDefault();
  if (!hasPermission("delivery.modon.create")) return alert("ليست لديك صلاحية إنشاء طلبات Modon.");
  const submitter = event.submitter || event.target.querySelector('button[type="submit"]');
  const form = new FormData(event.target);
  const employee = getEmployee(form.get("employeeId"));
  const editingOrder = editingModonOrderId ? repo.state.deliveryOrders.find((item) => item.id === editingModonOrderId) : null;
  const editingInvoice = editingOrder ? getInvoice(editingOrder.local_order_id) : null;
  if (editingModonOrderId && (!editingOrder || !editingInvoice)) {
    editingModonOrderId = null;
    return rejectModonOrderForm("تعذر العثور على الطلب الجاري تعديله. أعد فتح الطلب من صفحة طلبات اليوم.", true);
  }
  if (editingOrder) {
    const blockReason = modonOrderEditBlockReason(editingOrder);
    if (blockReason) return rejectModonOrderForm(blockReason, true);
    if (employee?.id !== editingOrder.employeeId) return rejectModonOrderForm("لا يمكن تغيير حساب Modon للطلب بعد إنشائه. إذا أردت حسابًا آخر ألغ الطلب وأنشئ طلبًا جديدًا.", true);
  }
  const customerPhone = clean(form.get("customerPhone"));
  if (!isValidIraqiMobile(customerPhone)) return rejectModonOrderForm("اكتب رقمًا عراقيًا صحيحًا من 11 رقمًا، مثل 07736866564.", Boolean(editingOrder));
  const lines = collectModonOrderLines();
  if (!employee || !lines.length) return rejectModonOrderForm("اختر الموظف وأضف منتجًا واحدًا على الأقل.", Boolean(editingOrder));
  const quantity = lines.reduce(sumBy("quantity"), 0);
  const baseTotal = lines.reduce(sumBy("total"), 0);
  const orderTotal = number(form.get("salePrice")) || (baseTotal + modonSettings().priceMarkup);
  const modonMarkup = Math.max(orderTotal - baseTotal, 0);
  const shortage = lines.find((line) => (editingInvoice ? availableStockForModonEdit(line.productId, editingInvoice.id) : stockOf(line.productId)) < line.quantity);
  if (shortage) return rejectModonOrderForm(`الكمية غير كافية للمنتج: ${shortage.productName}`, Boolean(editingOrder));
  if (!form.get("cityId")) return rejectModonOrderForm("اختر المحافظة من نتائج البحث.", Boolean(editingOrder));
  if (!form.get("regionId")) return rejectModonOrderForm("اختر المنطقة من نتائج البحث.", Boolean(editingOrder));

  if (editingOrder) {
    return saveEditedModonOrder({ event, submitter, form, employee, order: editingOrder, invoice: editingInvoice, lines, quantity, baseTotal, orderTotal, modonMarkup });
  }

  const invoice = {
    id: crypto.randomUUID(),
    number: uniqueDocumentNumber("MODON"),
    employeeId: employee.id,
    productId: lines[0].productId,
    productName: lines.length === 1 ? lines[0].productName : `${lines.length} منتجات`,
    lines: lines.map((line) => ({ productId: line.productId, productName: line.productName, quantity: line.quantity, price: line.unitPrice, priceType: line.priceType, cost: line.cost, discount: 0, total: line.total })),
    customerName: clean(form.get("customerName")),
    customerPhone,
    quantity,
    unitPrice: lines[0].unitPrice,
    total: orderTotal,
    saleMode: "modon",
    paymentStatus: "ذمة على Modon",
    deliveryStatus: "طلب جديد",
    source: "modonOrder",
    createdAt: now(),
  };
  const payload = deliveryPayloadFromForm(form);
  payload.itemsCount = quantity;
  payload.goodsType ||= lines.map((line) => line.productName).join("، ");
  let response;
  try {
    await withBusy(submitter, "جاري حجز الكمية...", async () => {
      repo.state.invoices.unshift(invoice);
      lines.forEach((line) => addStockMovement(line.productId, invoice.id, -line.quantity, "حجز طلب Modon", employee.id));
      await repo.saveNow();
      if (submitter) submitter.textContent = "جاري إنشاء الطلب في Modon...";
      try {
        response = await provider.createOrder(invoice, payload, employee);
      } catch (error) {
        repo.state.invoices = repo.state.invoices.filter((item) => item.id !== invoice.id);
        repo.state.stockMovements = repo.state.stockMovements.filter((item) => item.invoiceId !== invoice.id);
        await repo.saveNow();
        throw error;
      }
    });
  } catch (error) {
    notifyOperationError(error, "تعذر إنشاء طلب Modon");
    return;
  }
  repo.state.stockMovements.filter((item) => item.invoiceId === invoice.id).forEach((movement) => { movement.reason = "طلب Modon"; });
  // Stamp the Modon ids onto the invoice itself. The invoice is the durable
  // survivor, so carrying the qr_id here lets a lost deliveryOrder be rebuilt
  // deterministically (reconcileMissingDeliveryOrders) even if a wholesale
  // deliveryOrders overwrite drops it.
  invoice.modon_qr_id = clean(response.qr_id);
  invoice.modon_external_order_id = clean(response.external_order_id);
  invoice.modon_qr_link = clean(response.qr_link);
  const deliveryOrder = {
    id: crypto.randomUUID(),
    internal_order_no: invoice.number,
    employeeId: employee.id,
    modon_account: employee.modonUsername,
    local_order_id: invoice.id,
    company_id: "modon",
    company_name: "Modon Express",
    external_order_id: response.external_order_id,
    qr_id: response.qr_id,
    qr_link: response.qr_link,
    customer_name: invoice.customerName,
    customer_phone: invoice.customerPhone,
    city_id: payload.cityId,
    city_name: payload.cityName,
    area_id: payload.regionId,
    area_name: payload.regionName,
    address: payload.address,
    items_count: payload.itemsCount,
    package_size_id: payload.packageSizeId,
    package_size_name: payload.packageSizeName,
    product_id: lines[0].productId,
    product_name: invoice.productName,
    lines: invoice.lines,
    quantity,
    base_unit_price: lines[0].unitPrice,
    modon_markup: modonMarkup,
    local_unit_price: quantity > 0 ? Math.round(orderTotal / quantity) : orderTotal,
    local_total: invoice.total,
    price: response.price,
    delivery_price: response.delivery_price,
    free_delivery: payload.freeDelivery,
    customer_total: response.price,
    merchant_expected: response.merchant_price,
    merchant_price: response.merchant_price,
    status_id: response.status_id,
    status: response.status,
    issue_notes: "",
    is_exchange: payload.isExchange,
    deliver_confirmed_fin: false,
    returned_received_stock: false,
    has_merchant_fin_record: false,
    merchant_invoice_id: null,
    reconciliation_status: "unchecked",
    statement_matched_at: null,
    raw_response: response.raw_response,
    created_at: now(),
    updated_at: now(),
  };
  repo.state.deliveryOrders.unshift(deliveryOrder);
  addAudit("إنشاء طلب Modon", "modonOrder", invoice.id, invoice.number, `${employee.name} - ${money(invoice.total)}`, null, invoice);

  repo.state.lastSelectedInvoiceId = invoice.id;
  // Atomic-create safety net: the order now exists in Modon, so persist it to a
  // durable LOCAL queue BEFORE the online save. If that save fails, or the page
  // is closed before it commits, replayPendingModonOrders() re-applies it on the
  // next load — the order can never be silently lost between Modon and our books.
  savePendingModonOrder(deliveryOrder, invoice);
  try {
    await repo.saveNow();
    clearPendingModonOrder(invoice.id);
  } catch (error) {
    notifyOperationError(error, "تم إنشاء الطلب في Modon. سيُحفظ داخل النظام تلقائيًا عند عودة الاتصال أو إعادة فتح البرنامج.");
    return;
  }
  // Fully clear the form after a successful create so the next order starts
  // blank. The plain form.reset() used before left the custom city/region/
  // address fields filled with the previous order's destination.
  resetModonOrderFormForNew();
  fillModonProductSelect();
  renderAll();
  showView("modonFollow");
}

async function saveEmployee(event) {
  event.preventDefault();
  if (!hasPermission("employees.manage")) return alert("ليست لديك صلاحية إدارة الموظفين.");
  const form = new FormData(event.target);
  const submitter = event.submitter || $("#employeeSubmitButton");
  const employeeId = clean(form.get("employeeId"));
  const editingEmployee = employeeId ? getEmployee(employeeId) : null;
  const role = clean(form.get("role"));
  const permissions = form.getAll("permissions");
  const username = clean(form.get("username"));
  const password = clean(form.get("password"));
  const modonUsername = clean(form.get("modonUsername"));
  const modonPassword = clean(form.get("modonToken"));
  const hasExistingModonCredentials = Boolean(editingEmployee?.hasModonCredentials);
  if (!username) return alert("اكتب اسم مستخدم للبرنامج.");
  if (!editingEmployee && !password) return alert("اكتب كلمة مرور للموظف.");
  if (repo.state.employees.some((employee) => employee.id !== employeeId && normalizeSearch(employee.username) === normalizeSearch(username)) || normalizeSearch(username) === normalizeSearch(repo.state.adminLogin.username)) {
    return alert("اسم المستخدم موجود سابقًا.");
  }
  if ((!editingEmployee || !hasExistingModonCredentials) && ((modonUsername && !modonPassword) || (!modonUsername && modonPassword))) return alert("اكتب اسم مستخدم وكلمة مرور Modon معًا.");
  if (permissions.includes("delivery.modon.create") && (!modonUsername || (!modonPassword && !hasExistingModonCredentials))) {
    return alert("لا يمكن إعطاء صلاحية إنشاء طلبات Modon بدون إدخال حساب Modon للموظف.");
  }

  try {
    await withBusy(submitter, editingEmployee ? "جاري حفظ التعديل..." : "جاري إنشاء الحساب...", async () => {
      let modonToken = "";
      if (modonUsername && modonPassword) {
        submitter.textContent = "جاري التحقق من Modon...";
        modonToken = await provider.verifyCredentials(modonUsername, modonPassword);
      }
      const before = editingEmployee ? structuredClone(editingEmployee) : null;
      const payload = {
        name: clean(form.get("name")),
        username,
        role,
        permissions,
        modonUsername,
        active: form.get("active") === "1",
      };
      if (modonPassword) {
        payload.modonPassword = modonPassword;
        payload.modonToken = modonToken;
        payload.hasModonCredentials = true;
      } else if (hasExistingModonCredentials) {
        payload.hasModonCredentials = true;
      }
      if (password) payload.passwordHash = await hashText(password);
      if (editingEmployee) {
        Object.assign(editingEmployee, payload);
        addAudit("تعديل مستخدم", "employee", editingEmployee.id, editingEmployee.username, `تم تعديل حساب ${editingEmployee.name}`, before, editingEmployee);
      } else {
        const employee = { id: crypto.randomUUID(), passwordHash: payload.passwordHash, ...payload };
        repo.state.employees.push(employee);
        addAudit("إنشاء مستخدم", "employee", employee.id, employee.username, `تم إنشاء حساب ${employee.name}`, null, employee);
      }
      await repo.saveNow();
    });
    resetEmployeeForm();
    fillEmployeeControls();
    renderAll();
    alert(editingEmployee ? "تم حفظ تعديل الحساب بنجاح." : "تم إنشاء الحساب بنجاح.");
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ حساب الموظف");
  }
}

async function saveEditedModonOrder({ event, submitter, form, employee, order, invoice, lines, quantity, orderTotal, modonMarkup }) {
  setModonOrderFormNotice("");
  if (pendingLocalSaveModonOrderIds.has(order.id)) {
    try {
      await saveAfterExternalChange(submitter, "جاري حفظ النسخة المحلية السابقة...");
      pendingLocalSaveModonOrderIds.delete(order.id);
      resetModonOrderFormForNew();
      renderAll();
      showView("orders");
      setModonOrderFormNotice("تم حفظ النسخة المحلية ومطابقة الطلب مع Modon.", "ok");
    } catch (error) {
      setModonOrderFormNotice(`ما زال حفظ النسخة المحلية متعذرًا. لن يتم إرسال تعديل جديد إلى Modon حتى لا يتغير الوصل مرة ثانية. السبب: ${error.message}`, "issue");
      $("#modonOrderFormNotice")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }
  try {
    const remoteOrder = await withBusy(submitter, "جاري التحقق من حالة الطلب...", () => refreshSingleModonOrderStatus(order, { silent: true, throwOnError: true }));
    if (!remoteOrder) {
      setModonOrderFormNotice("لم يرجع Modon بيانات الطلب، لذلك لم يتم إرسال التعديل حفاظًا على تطابق البيانات.", "issue");
      return;
    }
    const blockReason = modonOrderEditBlockReason(order);
    if (blockReason) {
      setModonOrderFormNotice(blockReason, "issue");
      renderAll();
      return;
    }
  } catch (error) {
    setModonOrderFormNotice(`تعذر التحقق من حالة الطلب في Modon: ${error.message}. لم يتم إرسال أي تعديل.`, "issue");
    return;
  }
  const before = snapshot({ order, invoice });
  const oldExternalId = order.external_order_id || order.qr_id;
  const qrId = order.qr_id || order.external_order_id;
  const payload = deliveryPayloadFromForm(form);
  payload.itemsCount = quantity;
  payload.goodsType ||= lines.map((line) => line.productName).join("، ");
  const updatedInvoice = {
    ...invoice,
    employeeId: employee.id,
    productId: lines[0].productId,
    productName: lines.length === 1 ? lines[0].productName : `${lines.length} منتجات`,
    lines: lines.map((line) => ({ productId: line.productId, productName: line.productName, quantity: line.quantity, price: line.unitPrice, priceType: line.priceType, cost: line.cost, discount: 0, total: line.total })),
    customerName: clean(form.get("customerName")),
    customerPhone: clean(form.get("customerPhone")),
    quantity,
    unitPrice: lines[0].unitPrice,
    total: orderTotal,
    paymentStatus: "ذمة على Modon",
    deliveryStatus: "تم تعديل الطلب في Modon",
    updatedAt: now(),
  };
  let response;
  try {
    await withBusy(submitter, "جاري تعديل الطلب في Modon...", async () => {
      response = await provider.editOrder(updatedInvoice, payload, employee, qrId);
    });
  } catch (error) {
    if (error.code === "MODON_ORDER_NOT_EDITABLE") {
      order.status = "with_courier";
      order.status_id = "with_courier";
      order.modon_status_text = error.message;
      order.updated_at = now();
      invoice.deliveryStatus = "مع المندوب - التعديل متوقف";
      addAudit("تحديث حالة طلب Modon", "modonOrder", order.id, order.external_order_id || order.internal_order_no, error.message, before, { order, invoice });
      try { await repo.saveNow(); } catch { /* Keep the authoritative status in memory and let normal sync retry. */ }
      renderAll();
      setModonOrderFormNotice(`${error.message}. بقي الطلب القديم دون تغيير، وتم إيقاف التعديل لأنه أصبح مع المندوب.`, "issue");
      return;
    }
    if (!error.userNotified) {
      setModonOrderFormNotice(`لم يتم تعديل الطلب. ${error.message} لم يتم تغيير الطلب القديم ولا بياناته داخل النظام.`, "issue");
      $("#modonOrderFormNotice")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  Object.assign(invoice, updatedInvoice);
  // Backfill the durable qr link on the invoice so this order can be rebuilt
  // deterministically if its deliveryOrder record is ever lost.
  invoice.modon_qr_id ||= clean(order.qr_id || order.external_order_id);
  invoice.modon_external_order_id ||= clean(order.external_order_id || order.qr_id);
  invoice.modon_qr_link ||= clean(order.qr_link);
  repo.state.stockMovements = repo.state.stockMovements.filter((movement) => movement.invoiceId !== invoice.id);
  lines.forEach((line) => addStockMovement(line.productId, invoice.id, -line.quantity, "طلب Modon معدل", employee.id));
  Object.assign(order, {
    employeeId: employee.id,
    modon_account: employee.modonUsername,
    external_order_id: order.external_order_id,
    qr_id: order.qr_id,
    qr_link: order.qr_link,
    customer_name: invoice.customerName,
    customer_phone: invoice.customerPhone,
    city_id: payload.cityId,
    city_name: payload.cityName,
    area_id: payload.regionId,
    area_name: payload.regionName,
    address: payload.address,
    goods_type: payload.goodsType,
    items_count: payload.itemsCount,
    package_size_id: payload.packageSizeId,
    package_size_name: payload.packageSizeName,
    product_id: lines[0].productId,
    product_name: invoice.productName,
    lines: invoice.lines,
    quantity,
    base_unit_price: lines[0].unitPrice,
    modon_markup: modonMarkup,
    local_unit_price: quantity > 0 ? Math.round(orderTotal / quantity) : orderTotal,
    local_total: invoice.total,
    price: response.price,
    delivery_price: response.delivery_price,
    free_delivery: payload.freeDelivery,
    customer_total: response.price,
    merchant_expected: response.merchant_price,
    merchant_price: response.merchant_price,
    status_id: order.status_id,
    status: order.status,
    is_exchange: payload.isExchange,
    issue_notes: clean(form.get("notes")),
    printed_at: null,
    printed_by: null,
    raw_response: response.raw_response,
    updated_at: now(),
  });
  addAudit("تعديل طلب Modon", "modonOrder", order.id, order.external_order_id || order.internal_order_no, `تعديل الطلب ${oldExternalId || "-"} عبر واجهة Modon الرسمية`, before, { order, invoice });
  try {
    await saveAfterExternalChange(submitter, "تم تعديل Modon، جاري حفظ النسخة المحلية...");
    pendingLocalSaveModonOrderIds.delete(order.id);
  } catch (error) {
    pendingLocalSaveModonOrderIds.add(order.id);
    if (!error.userNotified) {
      setModonOrderFormNotice(`تم تعديل الطلب في Modon، لكن لم ينجح حفظ النسخة المحلية بعد عدة محاولات. اضغط "حفظ تعديل طلب Modon" مرة أخرى ليحاول النظام حفظ النسخة المحلية ومطابقة البيانات. السبب: ${error.message}`, "issue");
      $("#modonOrderFormNotice")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }
  resetModonOrderFormForNew();
  renderAll();
  showView("orders");
  setModonOrderFormNotice("تم تعديل الطلب في Modon وحفظه في النظام. بقي رقم الطلب نفسه ويمكنك إعادة طباعة الوصل المحدث.", "ok");
}

function editEmployee(employeeId) {
  if (!hasPermission("employees.manage")) return alert("ليست لديك صلاحية إدارة الموظفين.");
  const employee = getEmployee(employeeId);
  if (!employee) return alert("لم يتم العثور على الموظف.");
  showEmployeeForm();
  editingEmployeeId = employee.id;
  const form = $("#employeeForm");
  form.employeeId.value = employee.id;
  form.name.value = employee.name || "";
  form.username.value = employee.username || "";
  form.password.value = "";
  form.password.placeholder = "اتركها فارغة إذا لا تريد تغييرها";
  form.role.value = employee.role || "sales";
  form.modonUsername.value = employee.modonUsername || "";
  form.modonToken.value = "";
  form.modonToken.placeholder = employee.hasModonCredentials ? "اتركها فارغة للإبقاء على كلمة Modon الحالية" : "";
  form.active.value = employee.active ? "1" : "0";
  fillPermissionChecks(form.role.value, employee.permissions || []);
  $("#employeeFormTitle").textContent = `تعديل حساب ${employee.name}`;
  $("#employeeSubmitButton").textContent = "حفظ التعديل";
  $("#cancelEmployeeEdit").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showNewEmployeeForm() {
  if (!hasPermission("employees.manage")) return alert("ليست لديك صلاحية إدارة الموظفين.");
  resetEmployeeForm({ keepVisible: true });
  showEmployeeForm();
  $("#employeeForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  $("#employeeForm input[name='name']")?.focus();
}

function showEmployeeForm() {
  $("#employeeForm")?.classList.remove("hidden");
}

function hideEmployeeForm() {
  $("#employeeForm")?.classList.add("hidden");
}

function resetEmployeeForm(options = {}) {
  editingEmployeeId = null;
  const form = $("#employeeForm");
  if (!form) return;
  form.reset();
  form.employeeId.value = "";
  form.password.placeholder = "اكتبها عند إنشاء الحساب أو تغييرها";
  form.modonToken.placeholder = "";
  $("#employeeFormTitle").textContent = "إضافة موظف وحساب Modon";
  $("#employeeSubmitButton").textContent = "حفظ الموظف";
  $("#cancelEmployeeEdit")?.classList.add("hidden");
  fillPermissionChecks("sales");
  if (!options.keepVisible) hideEmployeeForm();
}

function updateOpeningStockLinesEmpty() {
  const empty = $("#openingStockLinesEmpty");
  if (empty) empty.hidden = $$("#openingStockLines .opening-stock-line").length > 0;
}

function setupOpeningStockLineRow(row) {
  if (!row.querySelector(".opening-stock-line-total")) {
    row.insertAdjacentHTML("beforeend", `<td><strong class="opening-stock-line-total">${money(0)}</strong></td>`);
  }
  if (!row.querySelector(".remove-opening-stock-line")) {
    row.insertAdjacentHTML("beforeend", `<td><button class="ghost remove-opening-stock-line" type="button">حذف</button></td>`);
    row.querySelector(".remove-opening-stock-line").addEventListener("click", () => {
      row.remove();
      updateOpeningStockLinesEmpty();
    });
  }
  updateOpeningStockLinesEmpty();
}

function collectOpeningStockLines() {
  return Array.from(document.querySelectorAll("#openingStockLines .opening-stock-line")).map((row) => {
    syncStockEntryLineProduct(row);
    const productId = clean(row.querySelector('[name="itemProductId"]')?.value);
    const name = clean(row.querySelector('[name="itemName"]').value);
    const category = clean(row.querySelector('[name="itemCategory"]').value) || "غير مصنف";
    const quantity = number(row.querySelector('[name="itemQty"]').value);
    const cost = number(row.querySelector('[name="itemCost"]').value);
    const price = number(row.querySelector('[name="itemPrice"]').value);
    const wholesalePrice = number(row.querySelector('[name="itemWholesalePrice"]').value);
    const total = quantity * cost;
    const totalCell = row.querySelector(".opening-stock-line-total");
    if (totalCell) totalCell.textContent = money(total);
    return { productId, name, category, quantity, cost, price, wholesalePrice, total };
  }).filter((line) => line.name && line.quantity > 0);
}

async function saveOpeningStock(event) {
  event.preventDefault();
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية تثبيت المخزون الافتتاحي.")) return;
  const form = new FormData(event.target);
  const lines = collectOpeningStockLines();
  if (!lines.length) return alert("أدخل منتجًا واحدًا على الأقل في المخزون الافتتاحي.");
  const seenNewNames = new Set();
  const duplicateNewLine = lines.find((line) => {
    if (line.productId) return false;
    const key = normalizeSearch(line.name);
    if (seenNewNames.has(key)) return true;
    seenNewNames.add(key);
    return false;
  });
  if (duplicateNewLine) return alert(`المنتج "${duplicateNewLine.name}" مكرر داخل المخزون الافتتاحي.`);
  const employeeId = operationEmployeeId();
  try {
    await withBusy(event.submitter, "جاري تثبيت المخزون الافتتاحي...", async () => {
      await commitConfirmedMutation(async () => {
        lines.forEach((line) => {
          let product = line.productId ? getProduct(line.productId) : null;
          if (!product) {
            product = { id: crypto.randomUUID(), supplierId: "", name: line.name, category: line.category, cost: line.cost, price: line.price, retailPrice: line.price, wholesalePrice: line.wholesalePrice || line.price, openingQty: 0 };
            repo.state.products.push(product);
          }
          product.category = line.category || product.category || "غير مصنف";
          product.cost = line.cost;
          product.price = line.price || product.price;
          product.retailPrice = line.price || product.retailPrice || product.price;
          product.wholesalePrice = line.wholesalePrice || product.wholesalePrice || product.retailPrice;
          addStockMovement(product.id, null, line.quantity, "مخزون افتتاحي", employeeId, product.supplierId, {
            source: "openingStock",
            notes: clean(form.get("notes")),
            date: clean(form.get("date")) || today(),
            unitCost: line.cost,
          });
        });
      });
    });
  } catch (error) {
    notifyOperationError(error, "تعذر تثبيت المخزون الافتتاحي");
    return;
  }
  event.target.reset();
  $("#openingStockLines").innerHTML = "";
  updateOpeningStockLinesEmpty();
  fillProductSelect();
  fillCategoryOptions();
  renderActiveView();
}

function collectPurchaseLines() {
  return Array.from(document.querySelectorAll("#purchaseLines .purchase-line")).map((row) => {
    syncPurchaseLineProduct(row);
    const productId = clean(row.querySelector('[name="itemProductId"]')?.value);
    const name = clean(row.querySelector('[name="itemName"]').value);
    const category = clean(row.querySelector('[name="itemCategory"]').value) || "غير مصنف";
    const quantity = number(row.querySelector('[name="itemQty"]').value);
    const cost = number(row.querySelector('[name="itemCost"]').value);
    const price = number(row.querySelector('[name="itemPrice"]').value);
    const wholesalePrice = number(row.querySelector('[name="itemWholesalePrice"]').value);
    const total = quantity * cost;
    const totalCell = row.querySelector(".purchase-line-total");
    if (totalCell) totalCell.textContent = money(total);
    return { productId, name, category, quantity, cost, price, wholesalePrice, total };
  }).filter((line) => line.name && line.quantity > 0);
}

function exactProductByName(name) {
  const key = normalizeSearch(name);
  if (!key) return null;
  return repo.state.products.find((product) => normalizeSearch(product.name) === key) || null;
}

function syncPurchaseLineProduct(row) {
  return syncStockEntryLineProduct(row);
}

function syncStockEntryLineProduct(row) {
  const nameInput = row.querySelector('[name="itemName"]');
  const productIdInput = row.querySelector('[name="itemProductId"]');
  if (!nameInput || !productIdInput) return null;
  const current = getProduct(productIdInput.value);
  if (current && normalizeSearch(current.name) === normalizeSearch(nameInput.value)) return current;
  const matched = exactProductByName(nameInput.value);
  if (matched) {
    productIdInput.value = matched.id;
    row.querySelector('[name="itemCategory"]').value = matched.category || "غير مصنف";
    row.querySelector('[name="itemCost"]').value = matched.cost || 0;
    row.querySelector('[name="itemPrice"]').value = matched.price || 0;
    row.querySelector('[name="itemWholesalePrice"]').value = matched.wholesalePrice ?? matched.retailPrice ?? matched.price ?? 0;
    row.classList.add("locked-line");
    return matched;
  }
  productIdInput.value = "";
  row.classList.remove("locked-line");
  return null;
}

function renderPurchaseLineProductSuggestions(row, showAll = false) {
  return renderStockEntryLineProductSuggestions(row, showAll);
}

function renderStockEntryLineProductSuggestions(row, showAll = false) {
  const input = row.querySelector('[name="itemName"]');
  const box = row.querySelector(".line-product-suggestions");
  if (!input || !box || input.readOnly) return;
  const query = showAll ? "" : normalizeSearch(input.value);
  const products = repo.state.products
    .filter((product) => !query || normalizeSearch(`${product.name} ${product.category || ""}`).includes(query))
    .slice(0, 8);
  box.innerHTML = products.map((product) => `
    <button type="button" class="suggestion-item product-suggestion" data-id="${product.id}">
      <strong>${escapeHtml(product.name)}</strong>
      <small>${escapeHtml(product.category || "غير مصنف")} - ${money(product.cost)} - رصيد ${stockOf(product.id)}</small>
    </button>
  `).join("") || `<div class="suggestion-empty">لا يوجد منتج مطابق، يمكنك إكماله كمنتج جديد.</div>`;
  box.classList.add("active");
  Array.from(box.querySelectorAll(".product-suggestion")).forEach((button) => {
    button.addEventListener("click", () => applyStockEntryLineProduct(row, button.dataset.id));
  });
}

function applyPurchaseLineProduct(row, productId) {
  return applyStockEntryLineProduct(row, productId);
}

function applyStockEntryLineProduct(row, productId) {
  const product = getProduct(productId);
  if (!product) return;
  row.querySelector('[name="itemProductId"]').value = product.id;
  row.querySelector('[name="itemName"]').value = product.name;
  row.querySelector('[name="itemCategory"]').value = product.category || "غير مصنف";
  row.querySelector('[name="itemCost"]').value = product.cost || 0;
  row.querySelector('[name="itemPrice"]').value = product.price || 0;
  row.querySelector('[name="itemWholesalePrice"]').value = product.wholesalePrice ?? product.retailPrice ?? product.price ?? 0;
  row.querySelector('[name="itemQty"]').value = number(row.querySelector('[name="itemQty"]').value) || 1;
  row.classList.add("locked-line");
  row.querySelector(".line-product-suggestions")?.classList.remove("active");
  calculatePurchaseInvoice();
}

function calculatePurchaseInvoice() {
  const form = $("#purchaseInvoiceForm");
  if (!form || !$("#purchaseSummary")) return;
  const lines = collectPurchaseLines();
  const subtotal = lines.reduce(sumBy("total"), 0);
  const discount = number(form.discount.value);
  const total = Math.max(subtotal - discount, 0);
  if (!purchasePaidTouched) form.paidAmount.value = total;
  const paid = Math.min(number(form.paidAmount.value), total);
  const balance = total - paid;
  $("#purchaseSummary").innerHTML = [
    ["إجمالي الشراء", money(subtotal)],
    ["خصم الفاتورة", money(discount)],
    ["الصافي", money(total)],
    ["المدفوع من القاصة", money(paid)],
    ["المتبقي للمورد", money(balance)],
    ["حالة الفاتورة", balance > 0 ? "ذمة مورد" : "مسددة"],
  ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
}

async function savePurchaseInvoice(event) {
  event.preventDefault();
  if (!requirePermission("inventory.purchase", "ليست لديك صلاحية إنشاء فواتير الشراء.")) return;
  const form = new FormData(event.target);
  const supplierId = clean(form.get("supplierId"));
  const supplier = getSupplier(supplierId);
  if (!supplier) return alert("اختر موردًا.");

  const lines = collectPurchaseLines();

  if (!lines.length) return alert("أدخل بندًا واحدًا على الأقل في فاتورة الشراء.");
  const seenNewNames = new Set();
  const duplicateNewLine = lines.find((line) => {
    if (line.productId) return false;
    const key = normalizeSearch(line.name);
    if (seenNewNames.has(key)) return true;
    seenNewNames.add(key);
    return false;
  });
  if (duplicateNewLine) return alert(`المنتج "${duplicateNewLine.name}" مكرر داخل فاتورة الشراء. استخدم بندًا واحدًا أو اختر المنتج الموجود من البحث.`);
  const existingNameLine = lines.find((line) => !line.productId && repo.state.products.some((product) => normalizeSearch(product.name) === normalizeSearch(line.name)));
  if (existingNameLine) return alert(`المنتج "${existingNameLine.name}" موجود سابقًا. ابحث عنه واختره من القائمة بدل إنشاء منتج جديد بنفس الاسم.`);
  const employeeId = operationEmployeeId();

  const purchaseInvoice = {
    id: crypto.randomUUID(),
    number: uniqueDocumentNumber("PUR"),
    supplierId,
    supplierInvoiceNo: clean(form.get("supplierInvoiceNo")),
    date: clean(form.get("date")) || today(),
    paymentMode: "cash",
    notes: clean(form.get("notes")),
    subtotal: lines.reduce(sumBy("total"), 0),
    discount: number(form.get("discount")),
    paidAmount: number(form.get("paidAmount")),
    total: Math.max(lines.reduce(sumBy("total"), 0) - number(form.get("discount")), 0),
    balance: 0,
    lines: [],
    employeeId,
    createdAt: now(),
  };
  purchaseInvoice.paidAmount = Math.min(purchaseInvoice.paidAmount, purchaseInvoice.total);
  purchaseInvoice.balance = purchaseInvoice.total - purchaseInvoice.paidAmount;
  purchaseInvoice.paymentMode = purchaseInvoice.balance > 0 ? "supplierDebt" : "cash";
  const submitter = event.submitter;
  const previousText = submitter?.textContent || "";
  if (submitter) {
    submitter.disabled = true;
    submitter.textContent = "جاري حفظ فاتورة الشراء...";
  }

  try {
    await commitConfirmedMutation(async () => {
  lines.forEach((line) => {
    let product = line.productId ? getProduct(line.productId) : null;
    if (!product) product = repo.state.products.find((item) => item.name === line.name);
    if (!product) {
      product = { id: crypto.randomUUID(), supplierId, name: line.name, category: line.category, cost: line.cost, price: line.price, retailPrice: line.price, wholesalePrice: line.wholesalePrice || line.price, openingQty: 0 };
      repo.state.products.push(product);
    }
    product.supplierId = supplierId;
    product.category = line.category || product.category || "غير مصنف";
    product.cost = line.cost;
    product.price = line.price || product.price;
    product.retailPrice = line.price || product.retailPrice || product.price;
    product.wholesalePrice = line.wholesalePrice || product.wholesalePrice || product.retailPrice;
    purchaseInvoice.lines.push({ productId: product.id, name: product.name, category: product.category, quantity: line.quantity, cost: line.cost, price: product.retailPrice, wholesalePrice: product.wholesalePrice, total: line.total });
    addStockMovement(product.id, purchaseInvoice.id, line.quantity, "فاتورة شراء", employeeId, supplierId, { source: "purchaseInvoice", unitCost: line.cost });
  });

  repo.state.purchaseInvoices.unshift(purchaseInvoice);
  if (purchaseInvoice.paidAmount > 0) {
    addCash(-purchaseInvoice.paidAmount, purchaseInvoice.balance > 0 ? "دفعة من فاتورة شراء" : "فاتورة شراء نقد", purchaseInvoice.number, employeeId);
  }
  if (purchaseInvoice.balance > 0) {
    repo.state.supplierDebts.unshift({
      id: crypto.randomUUID(),
      supplierId,
      purchaseInvoiceId: purchaseInvoice.id,
      employeeId,
      amount: purchaseInvoice.balance,
      createdAt: now(),
    });
  }
  addAudit("إنشاء فاتورة شراء", "purchaseInvoice", purchaseInvoice.id, purchaseInvoice.number, `${supplier.name} - ${money(purchaseInvoice.total)}`, null, purchaseInvoice);
    });
  event.target.reset();
  $("#purchaseLines").innerHTML = "";
  updatePurchaseLinesEmpty();
  purchasePaidTouched = false;
  calculatePurchaseInvoice();
  fillProductSelect();
  fillCategoryOptions();
  fillModonProductSelect();
  fillOpeningProductSelect();
  renderActiveView();
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ فاتورة الشراء");
  } finally {
    if (submitter) {
      submitter.disabled = false;
      submitter.textContent = previousText;
    }
  }
}

function addPurchaseLine(product = null) {
  const existingProduct = Boolean(product?.id);
  const row = document.createElement("tr");
  row.className = "purchase-line";
  row.innerHTML = `
    <td class="purchase-product-cell search-combo">
      <input type="hidden" name="itemProductId" value="${product?.id || ""}" />
      <input name="itemName" autocomplete="off" placeholder="اسم المنتج" value="${escapeAttr(product?.name || "")}" ${existingProduct ? "readonly" : ""} />
      <div class="suggestions line-product-suggestions"></div>
    </td>
    <td><input name="itemCategory" list="categoryOptions" placeholder="التصنيف" value="${escapeAttr(product?.category || "")}" /></td>
    <td><input type="number" name="itemQty" min="0" value="${product ? 1 : 0}" /></td>
    <td><input type="number" name="itemCost" min="0" value="${product?.cost || 0}" /></td>
    <td><input type="number" name="itemPrice" min="0" value="${product?.retailPrice ?? product?.price ?? 0}" /></td>
    <td><input type="number" name="itemWholesalePrice" min="0" value="${product?.wholesalePrice ?? product?.retailPrice ?? product?.price ?? 0}" /></td>
  `;
  if (existingProduct) {
    row.querySelector('[name="itemCategory"]').readOnly = true;
    row.classList.add("locked-line");
  }
  row.querySelector('[name="itemName"]')?.addEventListener("input", () => {
    syncPurchaseLineProduct(row);
    renderPurchaseLineProductSuggestions(row);
    calculatePurchaseInvoice();
  });
  row.querySelector('[name="itemName"]')?.addEventListener("focus", () => renderPurchaseLineProductSuggestions(row, true));
  setupPurchaseLineRow(row);
  $("#purchaseLines").append(row);
  updatePurchaseLinesEmpty();
  fillCategoryOptions();
  row.querySelector(existingProduct ? '[name="itemQty"]' : '[name="itemName"]')?.focus();
  calculatePurchaseInvoice();
}

function addOpeningStockLine(product = null) {
  const existingProduct = Boolean(product?.id);
  const row = document.createElement("tr");
  row.className = "opening-stock-line";
  row.innerHTML = `
    <td class="purchase-product-cell search-combo">
      <input type="hidden" name="itemProductId" value="${product?.id || ""}" />
      <input name="itemName" autocomplete="off" placeholder="اسم المنتج" value="${escapeAttr(product?.name || "")}" ${existingProduct ? "readonly" : ""} />
      <div class="suggestions line-product-suggestions"></div>
    </td>
    <td><input name="itemCategory" list="categoryOptions" placeholder="التصنيف" value="${escapeAttr(product?.category || "")}" /></td>
    <td><input type="number" name="itemQty" min="0" value="${product ? 1 : 0}" /></td>
    <td><input type="number" name="itemCost" min="0" value="${product?.cost || 0}" /></td>
    <td><input type="number" name="itemPrice" min="0" value="${product?.retailPrice ?? product?.price ?? 0}" /></td>
    <td><input type="number" name="itemWholesalePrice" min="0" value="${product?.wholesalePrice ?? product?.retailPrice ?? product?.price ?? 0}" /></td>
  `;
  if (existingProduct) {
    row.querySelector('[name="itemCategory"]').readOnly = true;
    row.classList.add("locked-line");
  }
  row.querySelector('[name="itemName"]')?.addEventListener("input", () => {
    syncStockEntryLineProduct(row);
    renderStockEntryLineProductSuggestions(row);
  });
  row.querySelector('[name="itemName"]')?.addEventListener("focus", () => renderStockEntryLineProductSuggestions(row, true));
  setupOpeningStockLineRow(row);
  $("#openingStockLines").append(row);
  updateOpeningStockLinesEmpty();
  fillCategoryOptions();
  row.querySelector(existingProduct ? '[name="itemQty"]' : '[name="itemName"]')?.focus();
}

async function saveSupplierPayment(event) {
  event.preventDefault();
  if (!requirePermission("cash.manage", "ليست لديك صلاحية تسجيل سندات الموردين من القاصة.")) return;
  const form = new FormData(event.target);
  const supplierId = clean(form.get("supplierId"));
  const supplier = getSupplier(supplierId);
  if (!supplier) return alert("اختر موردًا.");
  const type = clean(form.get("type"));
  const amount = number(form.get("amount"));
  if (!["pay", "receive"].includes(type)) return alert("اختر نوع حركة المورد.");
  if (amount <= 0) return alert("أدخل مبلغًا صحيحًا أكبر من صفر.");
  const balance = supplierBalance(supplierId);
  const maximumAmount = type === "pay" ? balance.payable : balance.receivable;
  if (maximumAmount <= 0) return alert(type === "pay" ? "لا يوجد مبلغ مستحق لهذا المورد." : "لا يوجد مبلغ مستحق لنا على هذا المورد.");
  if (amount > maximumAmount) return alert(`المبلغ أكبر من الرصيد المفتوح: ${money(maximumAmount)}`);
  const record = {
    id: crypto.randomUUID(),
    number: uniqueDocumentNumber("SUP-PAY"),
    supplierId,
    type,
    amount,
    reference: clean(form.get("reference")),
    employeeId: activeEmployeeId() === "all" ? "admin" : activeEmployeeId(),
    createdAt: now(),
  };
  try {
    await withBusy(event.submitter, "جاري حفظ سند المورد...", async () => {
      await commitConfirmedMutation(async () => {
        repo.state.supplierPayments.unshift(record);
        addCash(type === "pay" ? -amount : amount, type === "pay" ? "دفع للمورد" : "قبض من المورد", record.number, record.employeeId, { supplierId, supplierName: supplier.name });
        repo.state.selectedSupplierId = supplierId;
        addAudit(type === "pay" ? "دفع لمورد" : "قبض من مورد", "supplierPayment", record.id, record.number, `${supplier.name} - ${money(amount)}`, null, record);
      });
      event.target.reset();
      closeSupplierPaymentModal();
      fillSupplierControls();
      showSupplierTab("supplierLedgerTab");
      renderActiveView();
    });
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ سند المورد");
  }
}

async function cancelSupplierPayment(id) {
  if (!requirePermission("cash.cancel", "ليست لديك صلاحية إلغاء سندات الموردين.")) return;
  const payment = repo.state.supplierPayments.find((item) => item.id === id);
  if (!payment || payment.cancelled) return;
  const linkedVoucher = payment.voucherId ? repo.state.vouchers.find((voucher) => voucher.id === payment.voucherId && !voucher.cancelled) : null;
  if (linkedVoucher) return cancelVoucher(linkedVoucher.id);
  if (!confirm("تأكيد إلغاء سند المورد؟ سيتم عكس أثره من القاصة ورصيد المورد.")) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء سند المورد...", async () => {
    const before = snapshot(payment);
    repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.reference !== payment.number);
    payment.cancelled = true;
    payment.cancelledAt = now();
    payment.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
    repo.state.selectedSupplierId = payment.supplierId;
    addAudit("إلغاء سند مورد", "supplierPayment", payment.id, payment.number, money(payment.amount), before, payment);
  }, "تعذر إلغاء سند المورد");
}

async function saveSupplier(event) {
  event.preventDefault();
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية إضافة الموردين.")) return;
  const form = new FormData(event.target);
  const supplier = {
    id: crypto.randomUUID(),
    name: clean(form.get("name")),
    phone: clean(form.get("phone")),
    address: clean(form.get("address")),
    openingPayable: number(form.get("openingPayable")),
    openingReceivable: number(form.get("openingReceivable")),
    notes: clean(form.get("notes")),
  };
  try {
    await withBusy(event.submitter, "جاري حفظ المورد...", async () => {
      await commitConfirmedMutation(async () => {
        repo.state.suppliers.push(supplier);
        repo.state.selectedSupplierId ||= repo.state.suppliers.at(-1).id;
        addAudit("إنشاء مورد", "supplier", supplier.id, supplier.name, supplier.phone || "", null, supplier);
      });
      event.target.reset();
      fillSupplierControls();
      renderActiveView();
    });
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ المورد");
  }
}

function supplierDeletionStatus(supplierId) {
  const blockers = [];
  const purchaseInvoices = repo.state.purchaseInvoices.filter((item) => item.supplierId === supplierId);
  const supplierPayments = repo.state.supplierPayments.filter((item) => item.supplierId === supplierId);
  const supplierDebts = repo.state.supplierDebts.filter((item) => item.supplierId === supplierId);
  const linkedProducts = repo.state.products.filter((item) => item.supplierId === supplierId);
  const stockMovements = repo.state.stockMovements.filter((item) => item.supplierId === supplierId);
  const linkedVouchers = repo.state.vouchers.filter((item) => item.accountKind === "supplier" && item.accountId === supplierId);
  const cashTransactions = repo.state.cashTransactions.filter((item) => item.supplierId === supplierId || item.meta?.supplierId === supplierId);

  if (purchaseInvoices.length) blockers.push(`${purchaseInvoices.length} فواتير شراء`);
  if (supplierPayments.length) blockers.push(`${supplierPayments.length} سندات مورد`);
  if (supplierDebts.length) blockers.push(`${supplierDebts.length} قيود ذمة`);
  if (linkedVouchers.length) blockers.push(`${linkedVouchers.length} سندات مالية`);
  if (cashTransactions.length) blockers.push(`${cashTransactions.length} حركات قاصة`);

  return {
    canDelete: blockers.length === 0,
    blockers,
    linkedProducts,
    stockMovements,
    detachableLinks: [
      linkedProducts.length ? `${linkedProducts.length} منتجات` : "",
      stockMovements.length ? `${stockMovements.length} حركات مخزون` : "",
    ].filter(Boolean),
  };
}

async function deleteSupplier(supplierId) {
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية حذف الموردين.")) return;
  const supplier = getSupplier(supplierId);
  if (!supplier) return;
  const deletion = supplierDeletionStatus(supplierId);
  if (!deletion.canDelete) {
    return alert(`لا يمكن حذف المورد لأن لديه حركات حقيقية: ${deletion.blockers.join("، ")}.`);
  }
  const openingBalance = number(supplier.openingPayable) + number(supplier.openingReceivable);
  const openingNote = openingBalance > 0
    ? ` وسيُحذف الرصيد الافتتاحي ${money(openingBalance)}؛ هذا الرصيد لم يؤثر في القاصة.`
    : "";
  const unlinkNote = deletion.detachableLinks.length
    ? `\nسيتم فك ارتباط ${deletion.detachableLinks.join(" و")} بالمورد مع إبقاء المنتجات والكميات وسجل الحركات محفوظًا.`
    : "";
  if (!confirm(`تأكيد حذف المورد "${supplier.name}"؟${openingNote}${unlinkNote}\nلا يمكن التراجع عن الحذف.`)) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  const deleted = await performConfirmedAction(button, "جاري حذف المورد...", async () => {
    const latestStatus = supplierDeletionStatus(supplierId);
    if (!latestStatus.canDelete) {
      const error = new Error(`أصبح للمورد حركات مرتبطة: ${latestStatus.blockers.join("، ")}`);
      error.userMessage = error.message;
      throw error;
    }
    const before = snapshot(supplier);
    const detachedProductIds = latestStatus.linkedProducts.map((item) => item.id);
    latestStatus.linkedProducts.forEach((product) => { product.supplierId = ""; });
    latestStatus.stockMovements.forEach((movement) => { movement.supplierId = ""; });
    repo.state.suppliers = repo.state.suppliers.filter((item) => item.id !== supplierId);
    repo.state.selectedSupplierId = repo.state.suppliers[0]?.id || null;
    addAudit(
      "حذف مورد بلا حركات مالية",
      "supplier",
      supplier.id,
      supplier.name,
      [
        openingBalance > 0 ? `حذف رصيد افتتاحي ${money(openingBalance)}` : "",
        detachedProductIds.length ? `فك ارتباط ${detachedProductIds.length} منتجات` : "",
        latestStatus.stockMovements.length ? `فك ارتباط ${latestStatus.stockMovements.length} حركات مخزون` : "",
      ].filter(Boolean).join(" - ") || "لا توجد حركات مالية",
      before,
      null,
    );
  }, "تعذر حذف المورد");
  if (!deleted) return;
  fillSupplierControls();
  showSupplierTab("supplierDirectory");
  renderSuppliers();
}

async function savePersonalDebt(event) {
  event.preventDefault();
  if (!requirePermission("debts.manage", "ليست لديك صلاحية تسجيل الديون الشخصية.")) return;
  const form = new FormData(event.target);
  const amount = number(form.get("amount"));
  const customerName = clean(form.get("customerName"));
  const selectedCustomerKey = clean(form.get("customerPhone"));
  const enteredPhone = clean(form.get("customerPhoneInput"));
  const fundingSource = clean(form.get("fundingSource")) === "external" ? "external" : "cash";
  if (!customerName) return alert("اكتب اسم الزبون أو اختره من القائمة.");
  if (amount <= 0) return alert("أدخل مبلغ دين صحيحًا أكبر من صفر.");
  const customer = resolveManualDebtCustomer(customerName, enteredPhone, selectedCustomerKey);
  const record = {
    id: crypto.randomUUID(),
    number: uniqueDocumentNumber("P-DEBT"),
    employeeId: activeEmployeeId() === "all" ? "admin" : activeEmployeeId(),
    customerId: customer.id,
    customerPhone: customer.phone,
    customerName: customer.name,
    person: customer.name,
    amount,
    fundingSource,
    reason: clean(form.get("reason")),
    createdAt: now(),
  };
  try {
    await withBusy(event.submitter, "جاري حفظ الدين...", async () => {
      await commitConfirmedMutation(async () => {
        repo.state.personalDebts.unshift(record);
        if (fundingSource === "cash") {
          addCash(-amount, "دين زبون يدوي", record.number, record.employeeId, {
            customerPhone: customer.phone,
            customerId: customer.id,
            personalDebtId: record.id,
          });
        }
        addAudit(
          fundingSource === "cash" ? "دين زبون من القاصة" : "دين زبون خارج القاصة",
          "personalDebt",
          record.id,
          record.number,
          `${record.customerName} - ${money(amount)}`,
          null,
          record,
        );
      });
      event.target.reset();
      $("#personalDebtCustomerPhone").value = "";
      updatePersonalDebtEffect();
      selectedCustomerPhone = customer.phone;
      renderActiveView();
    });
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ الدين الشخصي");
  }
}

function resolveManualDebtCustomer(name, enteredPhone = "", selectedPhone = "") {
  const selected = selectedPhone ? repo.state.customers.find((customer) => customer.phone === selectedPhone) : null;
  if (selected) {
    selected.name = clean(name) || selected.name;
    if (enteredPhone && selected.phone.startsWith("customer:")) selected.contactPhone = enteredPhone;
    selected.updatedAt = now();
    return selected;
  }
  const phoneMatch = enteredPhone ? repo.state.customers.find((customer) => customer.phone === enteredPhone) : null;
  if (phoneMatch) {
    phoneMatch.name = clean(name) || phoneMatch.name;
    phoneMatch.updatedAt = now();
    return phoneMatch;
  }
  const nameMatch = repo.state.customers.find((customer) => normalizeSearch(customer.name) === normalizeSearch(name));
  if (nameMatch && !enteredPhone) return nameMatch;
  const customer = {
    id: crypto.randomUUID(),
    name: clean(name),
    phone: enteredPhone || `customer:${crypto.randomUUID()}`,
    contactPhone: enteredPhone,
    createdAt: now(),
    updatedAt: now(),
  };
  repo.state.customers.unshift(customer);
  addAudit("إنشاء زبون تلقائي", "customer", customer.id, customer.name, customerPhoneLabel(customer.phone) || "بدون هاتف", null, customer);
  return customer;
}

async function cancelPersonalDebt(id) {
  if (!hasPermission("debts.cancel")) return alert("ليست لديك صلاحية إلغاء الديون الشخصية.");
  const record = repo.state.personalDebts.find((item) => item.id === id);
  if (!record || record.cancelled) return;
  if (personalDebtPaidAmount(record.id) > 0) return alert("لا يمكن إلغاء الدين بعد تسجيل دفعة عليه. ألغِ الدفعات المرتبطة أولًا.");
  const affectsCash = record.fundingSource !== "external";
  if (!confirm(affectsCash ? "تأكيد إلغاء الدين؟ سيُعاد المبلغ إلى القاصة ويبقى السجل ظاهرًا كملغى." : "تأكيد إلغاء الدين الخارجي؟ لن تتغير القاصة.")) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء الدين...", async () => {
    const before = snapshot(record);
    if (affectsCash) {
      repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => {
        if (record.number && item.reference === record.number) return false;
        if (!record.number && item.reference === record.person && item.amount === -number(record.amount)) return false;
        return true;
      });
    }
    record.cancelled = true;
    record.cancelledAt = now();
    record.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
    addAudit("إلغاء دين زبون", "personalDebt", record.id, record.number || record.person, record.customerName || record.person, before, record);
  }, "تعذر إلغاء الدين الشخصي");
}
async function saveCustomerDebtPayment(event) {
  event.preventDefault();
  if (!requirePermission("debts.manage", "ليست لديك صلاحية قبض ديون الزبائن.")) return;
  const form = new FormData(event.target);
  const phone = clean(form.get("customerPhone"));
  if (!phone) return alert("اختر الزبون من نتائج البحث.");
  const amount = number(form.get("amount"));
  const invoiceId = clean(form.get("invoiceId"));
  const personalDebtId = clean(form.get("personalDebtId"));
  const type = clean(form.get("paymentType")) || "general";
  const installmentIndex = clean(form.get("installmentIndex"));
  const invoice = invoiceId ? getInvoice(invoiceId) : null;
  const personalDebt = personalDebtId ? repo.state.personalDebts.find((item) => item.id === personalDebtId && !item.cancelled) : null;
  const debt = repo.state.customerDebts.find((item) => item.customerPhone === phone && (!invoiceId || item.invoiceId === invoiceId));
  const employeeId = invoice?.employeeId || personalDebt?.employeeId || debt?.employeeId || (activeEmployeeId() === "all" ? "admin" : activeEmployeeId());
  const maxAmount = personalDebt
    ? personalDebtOpenBalance(personalDebt)
    : invoice && type === "installment"
      ? installmentOpenBalance(invoice, installmentIndex)
      : invoice
        ? invoiceOpenBalance(invoice)
        : customerOpenDebt(phone);
  if (amount <= 0) return alert("أدخل مبلغًا صحيحًا أكبر من صفر.");
  if (maxAmount <= 0) return alert("لا يوجد مبلغ مفتوح على هذا الزبون.");
  if (amount > maxAmount) return alert(`المبلغ أكبر من المتبقي: ${money(maxAmount)}`);
  try {
    await withBusy(event.submitter, "جاري حفظ القبض...", async () => {
      await commitConfirmedMutation(async () => {
        repo.state.customerDebtPayments.unshift({
          id: crypto.randomUUID(),
          number: uniqueDocumentNumber("CUST-PAY"),
          employeeId,
          customerPhone: phone,
          customerName: invoice?.customerName || personalDebt?.customerName || debt?.customerName || $("#debtCustomerSearch").value || phone,
          invoiceId,
          personalDebtId,
          type: personalDebt ? "personalDebt" : type,
          installmentIndex: installmentIndex === "" ? null : number(installmentIndex),
          amount,
          createdAt: now(),
        });
    if (invoice) {
      invoice.remaining = invoiceOpenBalance(invoice);
      if (type === "installment" && invoice.installmentSchedule?.[installmentIndex]) {
        const item = invoice.installmentSchedule[installmentIndex];
        item.paidAmount = installmentPaidAmount(invoice.id, installmentIndex);
        item.paid = installmentOpenBalance(invoice, installmentIndex) <= 0;
      }
      invoice.paymentStatus = invoiceOpenBalance(invoice) <= 0 ? "مسددة" : invoice.saleMode === "installment" ? "تقسيط جزئي" : "دين جزئي";
    }
        upsertCustomer(invoice?.customerName || personalDebt?.customerName || debt?.customerName || phone, phone);
        const payment = repo.state.customerDebtPayments[0];
        repo.state.invoices
          .filter((item) => item.customerPhone === phone && ["customerDebt", "installment"].includes(item.saleMode))
          .forEach(refreshInvoicePaymentStatus);
        const paymentLabel = personalDebt ? "تسديد دين يدوي" : type === "installment" ? "تسديد قسط زبون" : "تسديد دين زبون";
        addCash(amount, paymentLabel, payment.number, employeeId, { customerPhone: phone, invoiceId, personalDebtId });
        addAudit(personalDebt ? "قبض دين يدوي من زبون" : type === "installment" ? "قبض قسط زبون" : "قبض دين زبون", "customerPayment", payment.id, payment.number, `${payment.customerName} - ${money(amount)}`, null, payment);
      });
      event.target.reset();
      $("#debtPaymentType").value = "general";
      $("#debtPersonalDebtId").value = "";
      $("#debtPaymentTarget").value = "دفعة عامة على الزبون";
      selectedCustomerPhone = phone;
      closeCustomerPaymentModal();
      renderActiveView();
    });
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ قبض الزبون");
  }
}

async function cancelCustomerPayment(id) {
  if (!requirePermission("debts.cancel", "ليست لديك صلاحية إلغاء دفعات الزبائن.")) return;
  const payment = repo.state.customerDebtPayments.find((item) => item.id === id);
  if (!payment || payment.cancelled) return;
  const linkedVoucher = payment.voucherId ? repo.state.vouchers.find((voucher) => voucher.id === payment.voucherId && !voucher.cancelled) : null;
  if (linkedVoucher) return cancelVoucher(linkedVoucher.id);
  if (!confirm("تأكيد إلغاء قبض الزبون؟ سيتم عكس أثره من القاصة وحساب الزبون.")) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء قبض الزبون...", async () => {
    const before = snapshot(payment);
    repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.reference !== payment.number);
    payment.cancelled = true;
    payment.cancelledAt = now();
    payment.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
    const invoice = payment.invoiceId ? getInvoice(payment.invoiceId) : null;
    if (invoice) refreshInvoicePaymentStatus(invoice);
    else repo.state.invoices
      .filter((item) => item.customerPhone === payment.customerPhone && ["customerDebt", "installment"].includes(item.saleMode))
      .forEach(refreshInvoicePaymentStatus);
    addAudit("إلغاء قبض زبون", "customerPayment", payment.id, payment.number, payment.customerName || payment.customerPhone, before, payment);
  }, "تعذر إلغاء قبض الزبون");
}

function refreshInvoicePaymentStatus(invoice) {
  if (!invoice || !["customerDebt", "installment"].includes(invoice.saleMode)) return;
  invoice.remaining = invoiceOpenBalance(invoice);
  if (invoice.saleMode === "installment") {
    (invoice.installmentSchedule || []).forEach((item, index) => {
      item.paidAmount = installmentPaidAmount(invoice.id, index);
      item.paid = installmentOpenBalance(invoice, index) <= 0;
    });
  }
  invoice.paymentStatus = invoiceOpenBalance(invoice) <= 0 ? "مسددة" : invoice.saleMode === "installment" ? "تقسيط جزئي" : "دين جزئي";
}

async function saveVoucher(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  let type = clean(event.target.dataset.voucherType || form.get("type"));
  const accountKind = clean(form.get("accountKind")) || "general";
  const accountId = clean(form.get("accountId"));
  const settlementType = clean(form.get("settlementType"));
  const settlementInvoiceId = clean(form.get("settlementInvoiceId"));
  const settlementInstallmentIndex = clean(form.get("settlementInstallmentIndex"));
  const linkedCustomer = accountKind === "customer" ? repo.state.customers.find((customer) => customer.phone === accountId) : null;
  const linkedSupplier = accountKind === "supplier" ? getSupplier(accountId) : null;
  if (type !== "receipt" && accountKind !== "general") return alert("ربط الزبون أو المورد متاح في سند القبض فقط.");
  if (accountKind === "customer" && !linkedCustomer) return alert("اختر زبونًا من القائمة.");
  if (accountKind === "supplier" && !linkedSupplier) return alert("اختر موردًا من القائمة.");
  if (accountKind !== "general" && !settlementType) return alert("اختر وجهة التسديد من تفاصيل الحساب.");
  if (accountKind === "customer") type = "receipt";
  if (accountKind === "supplier" && settlementType !== "supplierReceive") return alert("في سند القبض يمكنك اختيار مورد لديه مبلغ مستحق لنا فقط.");
  if (settlementType === "supplierReceive") type = "receipt";
  const permission = voucherPermission(type);
  if (!permission) return alert("نوع السند غير معروف.");
  if (!requirePermission(permission, `ليست لديك صلاحية إنشاء ${voucherTypeLabel(type)}.`)) return;
  if (accountKind === "customer" && !requirePermission("debts.manage", "ليست لديك صلاحية قبض حسابات الزبائن.")) return;
  const amount = number(form.get("amount"));
  if (amount <= 0) return alert("أدخل مبلغًا صحيحًا أكبر من صفر.");
  const linkedInvoice = settlementInvoiceId ? getInvoice(settlementInvoiceId) : null;
  let maximumAmount = 0;
  if (accountKind === "customer") {
    maximumAmount = settlementType === "installment" && linkedInvoice
      ? installmentOpenBalance(linkedInvoice, settlementInstallmentIndex)
      : linkedInvoice ? invoiceOpenBalance(linkedInvoice) : customerOpenDebt(accountId);
  }
  if (accountKind === "supplier") {
    const balance = supplierBalance(accountId);
    maximumAmount = settlementType === "supplierReceive" ? balance.receivable : balance.payable;
  }
  if (accountKind !== "general" && maximumAmount <= 0) return alert("لا يوجد مبلغ مفتوح لتسديده في هذا الحساب.");
  if (maximumAmount > 0 && amount > maximumAmount) return alert(`المبلغ أكبر من المتبقي: ${money(maximumAmount)}`);
  const employeeId = linkedInvoice?.employeeId || (activeEmployeeId() === "all" ? "admin" : activeEmployeeId());
  const voucher = {
    id: crypto.randomUUID(),
    number: uniqueDocumentNumber("VCH"),
    type,
    amount,
    party: linkedCustomer?.name || linkedSupplier?.name || clean(form.get("party")),
    reference: clean(form.get("reference")),
    notes: clean(form.get("notes")),
    employeeId,
    affectsProfit: type === "expense",
    accountKind,
    accountId,
    settlementType,
    settlementInvoiceId,
    settlementInstallmentIndex: settlementInstallmentIndex === "" ? null : number(settlementInstallmentIndex),
    createdAt: now(),
  };
  let linkedRecord = null;
  if (accountKind === "customer") {
    linkedRecord = {
      id: crypto.randomUUID(),
      number: voucher.number,
      employeeId,
      customerPhone: accountId,
      customerName: linkedCustomer.name,
      invoiceId: settlementInvoiceId,
      type: settlementType === "installment" ? "installment" : settlementInvoiceId ? "debt" : "general",
      installmentIndex: settlementInstallmentIndex === "" ? null : number(settlementInstallmentIndex),
      amount,
      voucherId: voucher.id,
      createdAt: voucher.createdAt,
    };
  }
  if (accountKind === "supplier") {
    linkedRecord = {
      id: crypto.randomUUID(),
      number: voucher.number,
      supplierId: accountId,
      type: settlementType === "supplierReceive" ? "receive" : "pay",
      amount,
      reference: voucher.reference,
      employeeId,
      voucherId: voucher.id,
      createdAt: voucher.createdAt,
    };
  }
  if (linkedRecord) voucher.linkedRecordId = linkedRecord.id;
  try {
    await withBusy(event.submitter, `جاري حفظ ${voucherTypeLabel(type)}...`, async () => {
      await commitConfirmedMutation(async () => {
        repo.state.vouchers.unshift(voucher);
        if (accountKind === "customer") {
          repo.state.customerDebtPayments.unshift(linkedRecord);
          repo.state.invoices
            .filter((invoice) => invoice.customerPhone === accountId && ["customerDebt", "installment"].includes(invoice.saleMode))
            .forEach(refreshInvoicePaymentStatus);
          addAudit(settlementType === "installment" ? "قبض قسط زبون" : "قبض دين زبون", "customerPayment", linkedRecord.id, voucher.number, `${voucher.party} - ${money(amount)}`, null, linkedRecord);
        }
        if (accountKind === "supplier") {
          repo.state.supplierPayments.unshift(linkedRecord);
          repo.state.selectedSupplierId = accountId;
          addAudit(linkedRecord.type === "pay" ? "دفع لمورد" : "قبض من مورد", "supplierPayment", linkedRecord.id, voucher.number, `${voucher.party} - ${money(amount)}`, null, linkedRecord);
        }
        const cashReason = accountKind === "customer"
          ? settlementType === "installment" ? "تسديد قسط زبون" : "تسديد دين زبون"
          : accountKind === "supplier" ? settlementType === "supplierReceive" ? "قبض من مورد" : "دفع للمورد"
          : voucherTypeLabel(type);
        if (type === "payment") addCash(-amount, cashReason, voucher.number, voucher.employeeId, { affectsProfit: false, accountKind, accountId });
        if (type === "expense") addCash(-amount, "سند صرف", voucher.number, voucher.employeeId, { affectsProfit: true });
        if (type === "receipt") addCash(amount, cashReason, voucher.number, voucher.employeeId, { affectsProfit: false, accountKind, accountId });
        addAudit(voucherTypeLabel(type), "voucher", voucher.id, voucher.number, `${voucher.party || "بدون طرف"} - ${money(amount)}`, null, voucher);
      });
      event.target.reset();
      setVoucherPartyKind("general");
      setVoucherCreateType(type);
      showVoucherTab("voucherArchiveTab");
      renderActiveView();
    });
  } catch (error) {
    notifyOperationError(error, `تعذر حفظ ${voucherTypeLabel(type)}`);
  }
}

async function cancelVoucher(id) {
  if (!hasPermission("cash.cancel")) return alert("ليست لديك صلاحية إلغاء السندات.");
  const voucher = repo.state.vouchers.find((item) => item.id === id);
  if (!voucher || voucher.cancelled) return;
  if (!confirm("تأكيد إلغاء السند؟ سيتم عكس أثره من القاصة ويبقى السند محفوظًا كملغى.")) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء السند...", async () => {
    const before = snapshot(voucher);
    repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.reference !== voucher.number);
    if (voucher.accountKind === "customer") {
      const payment = repo.state.customerDebtPayments.find((item) => item.id === voucher.linkedRecordId || item.voucherId === voucher.id);
      if (payment && !payment.cancelled) {
        payment.cancelled = true;
        payment.cancelledAt = now();
        payment.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
        repo.state.invoices
          .filter((invoice) => invoice.customerPhone === payment.customerPhone && ["customerDebt", "installment"].includes(invoice.saleMode))
          .forEach(refreshInvoicePaymentStatus);
      }
    }
    if (voucher.accountKind === "supplier") {
      const payment = repo.state.supplierPayments.find((item) => item.id === voucher.linkedRecordId || item.voucherId === voucher.id);
      if (payment && !payment.cancelled) {
        payment.cancelled = true;
        payment.cancelledAt = now();
        payment.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
      }
    }
    voucher.cancelled = true;
    voucher.cancelledAt = now();
    voucher.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
    addAudit("إلغاء سند", "voucher", voucher.id, voucher.number, voucherTypeLabel(voucher.type), before, voucher);
  }, "تعذر إلغاء السند");
}
function upsertCustomer(name, phone) {
  const key = clean(phone);
  if (!key) return;
  let customer = repo.state.customers.find((item) => item.phone === key);
  if (!customer) {
    customer = { id: crypto.randomUUID(), name: clean(name), phone: key, createdAt: now(), updatedAt: now() };
    repo.state.customers.unshift(customer);
  } else {
    customer.name = clean(name) || customer.name;
    customer.updatedAt = now();
  }
}

function deliveryPayloadFromForm(form) {
  const cityId = form.get("cityId");
  const regionId = form.get("regionId");
  const packageSizeId = form.get("packageSizeId");
  return {
    cityId,
    cityName: findById(modonCatalog.cities, cityId).name,
    regionId,
    regionName: findById(modonCatalog.regions[cityId] || [], regionId).name,
    address: clean(form.get("address")),
    goodsType: clean(form.get("goodsType")),
    itemsCount: number(form.get("itemsCount")),
    packageSizeId,
    packageSizeName: findById(modonCatalog.packageSizes, packageSizeId).name,
    deliveryPrice: number(form.get("deliveryPrice")),
    freeDelivery: form.get("freeDelivery") === "1",
    isExchange: form.get("isExchange") === "1",
    notes: clean(form.get("notes")),
  };
}

function processWebhook(payload) {
  if (repo.state.webhookLogs.some((log) => log.event_id === payload.event_id)) return;
  repo.state.webhookLogs.unshift({ id: crypto.randomUUID(), company_id: "modon", external_order_id: payload.external_order_id, event_id: payload.event_id, event_type: payload.event_type, payload, processed: true, created_at: now() });
  const order = repo.state.deliveryOrders.find((item) => item.external_order_id === payload.external_order_id);
  if (order) {
    order.webhook_review_pending = true;
    order.webhook_last_status = clean(payload.status || payload.event_type || "");
    order.webhook_last_at = now();
  }
  // Webhooks are evidence only. A normal center refresh verifies the status
  // against Modon before any local state is changed. Cash and stock are never
  // mutated by an incoming webhook.
  repo.save();
  renderAll();
}

async function confirmReturnedOrder(orderId) {
  if (!requirePermission("delivery.modon.receiveReturns", "استلام الراجع وإرجاعه للمخزون يحتاج صلاحية استلام راجع Modon.")) return false;
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order || order.status !== "returned") { alert("هذا الطلب ليس بحالة راجع."); return false; }
  if (order.returned_received_stock) { alert("تم استلام هذا الراجع سابقًا."); return false; }
  const invoice = getInvoice(order.local_order_id);
  if (!invoice) { alert("لم يتم العثور على فاتورة الطلب."); return false; }
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  return performConfirmedAction(button, "جاري استلام الراجع...", async () => {
    const before = snapshot({ order, invoice });
    markReturnedOrderReceived(order, invoice);
    addAudit("استلام راجع Modon", "deliveryOrder", order.id, order.external_order_id, `${invoice.number} - ${invoice.quantity} قطعة`, before, { order, invoice });
  }, "تعذر تثبيت استلام الراجع");
}

async function previewReturnedOrderByBarcode(rawCode) {
  if (!requirePermission("delivery.modon.receiveReturns", "استلام الراجع بالباركود يحتاج صلاحية استلام راجع Modon.")) return;
  const code = clean(rawCode).trim();
  const resultBox = $("#returnBarcodeResult");
  const input = $("#returnBarcodeInput");
  pendingReturnOrderId = null;
  renderReturnOrderPreview(null);
  if (!code) {
    if (resultBox) resultBox.textContent = "امسح الباركود أو اكتب رقم الطلب أولًا.";
    return;
  }
  const matchingOrders = repo.state.deliveryOrders.filter((item) => {
    const ids = [item.external_order_id, item.qr_id, item.internal_order_no, item.local_order_id].map(clean).filter(Boolean);
    return ids.some((id) => barcodeCodeMatches(code, id));
  });
  if (matchingOrders.length > 1) {
    if (resultBox) resultBox.innerHTML = `<span class="badge danger">رقم ملتبس</span> هذا الرقم يطابق أكثر من طلب. امسح الباركود الكامل أو اكتب رقم Modon كاملًا.`;
    if (input) input.select();
    return;
  }
  const order = matchingOrders[0];
  if (!order) {
    if (resultBox) resultBox.innerHTML = `<span class="badge danger">غير موجود</span> لم يتم العثور على طلب داخلي بهذا الباركود: ${escapeHtml(code)}`;
    if (input) input.select();
    return;
  }
  if (order.returned_received_stock) {
    if (resultBox) resultBox.innerHTML = `<span class="badge ok">مستلم سابقًا</span> ${escapeHtml(order.external_order_id || order.internal_order_no)} - ${escapeHtml(order.customer_name || "")}`;
    if (input) input.value = "";
    renderReturnOrderPreview(order);
    return;
  }
  if (resultBox) resultBox.innerHTML = `<span class="badge issue">جاري التحقق</span> تم العثور على الطلب، جاري التأكد من حالته في Modon...`;
  await refreshSingleModonOrderStatus(order);
  const isReturned = order.status === "returned";
  pendingReturnOrderId = isReturned ? order.id : null;
  if (resultBox) {
    resultBox.innerHTML = isReturned
      ? `<span class="badge issue">راجع من Modon</span> راجع التفاصيل ثم اضغط تأكيد استلام الراجع.`
      : `<span class="badge danger">ليس راجعًا بعد</span> هذا الطلب لم يظهر كراجع من Modon. امسحه في تطبيق Modon أولًا أو اضغط تحديث من Modon.`;
  }
  renderReturnOrderPreview(order);
  if (input) input.value = "";
}

async function confirmScannedReturnedOrder() {
  if (!requirePermission("delivery.modon.receiveReturns", "استلام الراجع بالباركود يحتاج صلاحية استلام راجع Modon.")) return false;
  const order = repo.state.deliveryOrders.find((item) => item.id === pendingReturnOrderId);
  const resultBox = $("#returnBarcodeResult");
  if (!order) {
    if (resultBox) resultBox.textContent = "لا يوجد طلب محدد للتأكيد.";
    return false;
  }
  if (order.returned_received_stock) {
    if (resultBox) resultBox.innerHTML = `<span class="badge ok">مستلم سابقًا</span> هذا الراجع مؤكد سابقًا.`;
    return false;
  }
  if (order.status !== "returned") {
    if (resultBox) resultBox.innerHTML = `<span class="badge danger">لا يمكن التأكيد</span> الطلب ليس بحالة راجع من Modon بعد.`;
    renderReturnOrderPreview(order);
    return false;
  }
  if (resultBox) resultBox.innerHTML = `<span class="badge issue">جاري الحفظ</span> يتم تثبيت استلام الراجع وإرجاع الكمية إلى المخزون...`;
  const confirmed = await confirmReturnedOrder(order.id);
  if (!confirmed) {
    if (resultBox) resultBox.innerHTML = `<span class="badge danger">لم يتم الاستلام</span> تعذر تثبيت العملية، ولم تتغير حالة المخزون.`;
    renderReturnOrderPreview(repo.state.deliveryOrders.find((item) => item.id === order.id) || order);
    return false;
  }
  pendingReturnOrderId = null;
  if (resultBox) resultBox.innerHTML = `<span class="badge ok">تم استلام الراجع</span> ${escapeHtml(order.external_order_id || order.internal_order_no)} - رجعت الكمية للمخزون.`;
  renderReturnOrderPreview(order);
  $("#returnBarcodeInput")?.focus();
  return true;
}

function renderReturnOrderPreview(order) {
  const box = $("#returnOrderPreview");
  if (!box) return;
  if (!order) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  const invoice = getInvoice(order.local_order_id);
  const canConfirm = order.status === "returned" && !order.returned_received_stock && pendingReturnOrderId === order.id;
  box.classList.remove("hidden");
  box.innerHTML = `
    <div class="return-preview-head">
      <div>
        <strong>${escapeHtml(order.external_order_id || order.internal_order_no || "-")}</strong>
        <span>${statusBadge(order.status)} ${order.returned_received_stock ? `<span class="badge ok">مستلم فعليًا</span>` : `<span class="badge issue">بانتظار التأكيد</span>`}</span>
      </div>
      ${canConfirm ? `<button class="primary" type="button" onclick="confirmScannedReturnedOrder()">تأكيد استلام الراجع</button>` : `<span class="hint">زر التأكيد يظهر فقط إذا كان الطلب راجعًا من Modon ولم يُستلم سابقًا.</span>`}
    </div>
    <div class="return-preview-grid">
      <div><span>الزبون</span><strong>${escapeHtml(order.customer_name || "-")}</strong></div>
      <div><span>الهاتف</span><strong>${escapeHtml(order.customer_phone || "-")}</strong></div>
      <div><span>المنتج</span><strong>${escapeHtml(order.product_name || invoice?.productName || "-")}</strong></div>
      <div><span>الكمية</span><strong>${number(order.quantity || invoice?.quantity || 0)}</strong></div>
      <div><span>الموظف</span><strong>${escapeHtml(employeeName(order.employeeId))}</strong></div>
      <div><span>QR ID</span><strong>${escapeHtml(order.qr_id || "-")}</strong></div>
      <div><span>العنوان</span><strong>${escapeHtml([order.city_name, order.area_name, order.address].filter(Boolean).join(" - ") || "-")}</strong></div>
      <div><span>صافي التاجر</span><strong>${money(order.merchant_price)}</strong></div>
    </div>
    <div class="hint">التأكيد هنا يعني أننا استلمنا البضاعة الراجعة فعليًا في مخزوننا بعد أن صارت راجعة في Modon. لا يتم إدخال أي مبلغ في القاصة.</div>
  `;
}

async function refreshSingleModonOrderStatus(order, options = {}) {
  const employee = getEmployee(order.employeeId);
  if (!employee?.modonUsername) return null;
  const ids = [order.external_order_id, order.qr_id].map(clean).filter(Boolean);
  if (!ids.length) return null;
  try {
    const remoteOrders = await provider.getOrdersByIds(employee, ids.slice(0, 1));
    let remoteOrder = remoteOrders.find((item) => {
      const remoteIds = remoteOrderIds(item);
      return ids.some((id) => remoteIds.some((remoteId) => barcodeCodeMatches(remoteId, id)));
    }) || remoteOrders[0];
    if (!remoteOrder && options.fullListFallback) {
      const allRemoteOrders = await provider.getOrders(employee);
      remoteOrder = allRemoteOrders.find((item) => {
        const remoteIds = remoteOrderIds(item);
        return ids.some((id) => remoteIds.some((remoteId) => barcodeCodeMatches(remoteId, id)));
      });
    }
    if (remoteOrder) {
      updateLocalOrderFromModon(order, remoteOrder);
      repo.save();
      return remoteOrder;
    }
  } catch (error) {
    if (!options.silent && $("#returnBarcodeResult")) {
      $("#returnBarcodeResult").innerHTML = `<span class="badge issue">تعذر التحقق من Modon</span> ${escapeHtml(error.message)}. سيتم الاعتماد على آخر حالة محفوظة في النظام.`;
    }
    if (options.throwOnError) throw error;
  }
  return null;
}

function barcodeCodeMatches(scannedCode, expectedId) {
  const code = clean(scannedCode);
  const id = clean(expectedId);
  if (!code || !id) return false;
  if (code === id) return true;
  const tokens = code.split(/[^A-Za-z0-9_-]+/).filter(Boolean);
  if (tokens.some((token) => token === id)) return true;
  const minimumSafeSuffixLength = 10;
  if (code.length >= minimumSafeSuffixLength && id.length >= minimumSafeSuffixLength && (code.endsWith(id) || id.endsWith(code))) return true;
  return tokens.some((token) => token.length >= minimumSafeSuffixLength
    && id.length >= minimumSafeSuffixLength
    && (token.endsWith(id) || id.endsWith(token)));
}

async function startReturnCameraScan() {
  if (!requirePermission("delivery.modon.receiveReturns", "مسح الراجع بالكاميرا يحتاج صلاحية استلام راجع Modon.")) return;
  const hint = $("#returnScannerHint");
  if (!navigator.mediaDevices?.getUserMedia) {
    if (hint) hint.textContent = "الكاميرا غير متاحة. تأكد من فتح الموقع عبر HTTPS ومنح المتصفح صلاحية الكاميرا.";
    $("#returnScannerBox")?.classList.remove("hidden");
    return;
  }
  const hasNativeDetector = "BarcodeDetector" in window;
  const hasFallbackDetector = Boolean(window.ZXingBrowser?.BrowserMultiFormatReader);
  if (!hasNativeDetector && !hasFallbackDetector) {
    if (hint) hint.textContent = "تعذر تحميل قارئ الباركود. حدّث الصفحة ثم حاول مرة أخرى، أو اكتب رقم الطلب يدويًا.";
    $("#returnScannerBox")?.classList.remove("hidden");
    return;
  }
  try {
    stopReturnCameraScan();
    const video = $("#returnScannerVideo");
    returnScannerActive = true;
    $("#returnScannerBox")?.classList.remove("hidden");
    $("#startReturnCameraScan")?.classList.add("hidden");
    $("#stopReturnCameraScan")?.classList.remove("hidden");
    if (hint) hint.textContent = "جاري المسح... ثبّت الباركود داخل الإطار.";

    if (hasNativeDetector) {
      const formats = await BarcodeDetector.getSupportedFormats?.() || ["qr_code", "code_128", "ean_13"];
      const detector = new BarcodeDetector({ formats: formats.includes("qr_code") ? formats : ["qr_code", ...formats] });
      returnScannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      video.srcObject = returnScannerStream;
      await video.play();
      scanReturnCameraFrame(detector, video);
      return;
    }

    returnScannerReader = new window.ZXingBrowser.BrowserMultiFormatReader();
    returnScannerControls = await returnScannerReader.decodeFromConstraints(
      { video: { facingMode: { ideal: "environment" } }, audio: false },
      video,
      (result, _error, controls) => {
        if (!returnScannerActive || !result) return;
        const code = clean(result.getText?.() || result.text || "");
        if (!code) return;
        returnScannerControls = controls || returnScannerControls;
        completeReturnBarcodeScan(code);
      },
    );
    returnScannerStream = video.srcObject;
  } catch (error) {
    stopReturnCameraScan();
    const denied = error?.name === "NotAllowedError" || error?.name === "PermissionDeniedError";
    if (hint) hint.textContent = denied
      ? "تم رفض صلاحية الكاميرا. اسمح للموقع باستخدام الكاميرا من إعدادات المتصفح ثم حاول مجددًا."
      : `تعذر فتح الكاميرا: ${error.message || "خطأ غير معروف"}`;
    $("#returnScannerBox")?.classList.remove("hidden");
  }
}

function completeReturnBarcodeScan(code) {
  stopReturnCameraScan();
  const input = $("#returnBarcodeInput");
  if (input) input.value = code;
  previewReturnedOrderByBarcode(code);
}

async function scanReturnCameraFrame(detector, video) {
  if (!returnScannerActive) return;
  try {
    const codes = await detector.detect(video);
    const code = clean(codes?.[0]?.rawValue);
    if (code) {
      completeReturnBarcodeScan(code);
      return;
    }
  } catch {
    // Keep scanning; some frames fail while the camera is focusing.
  }
  requestAnimationFrame(() => scanReturnCameraFrame(detector, video));
}

function stopReturnCameraScan() {
  returnScannerActive = false;
  if (returnScannerControls) {
    try {
      returnScannerControls.stop();
    } catch {
      // The camera may already be stopped by the browser.
    }
    returnScannerControls = null;
  }
  returnScannerReader = null;
  if (returnScannerStream) {
    returnScannerStream.getTracks().forEach((track) => track.stop());
    returnScannerStream = null;
  }
  const video = $("#returnScannerVideo");
  if (video) video.srcObject = null;
  $("#returnScannerBox")?.classList.add("hidden");
  $("#startReturnCameraScan")?.classList.remove("hidden");
  $("#stopReturnCameraScan")?.classList.add("hidden");
}

function markReturnedOrderReceived(order, invoice) {
  const lines = invoice.lines?.length ? invoice.lines : [{ productId: invoice.productId, quantity: invoice.quantity }];
  lines.forEach((line) => {
    const key = `modon-return:${order.id}:${line.productId}`;
    // Dedupe by (invoice + product + return reason), not just the order-id key:
    // a healed/rebuilt return record carries a NEW order id, so an order-id key
    // alone would let its stock be returned a second time. The invoice id is
    // stable across rebuilds, so this blocks any double return into stock.
    const alreadyMoved = repo.state.stockMovements.some((item) =>
      item.meta?.idempotencyKey === key
      || (item.invoiceId === invoice.id
        && item.productId === line.productId
        && number(item.quantity) > 0
        && String(item.reason || "").includes("استلام راجع Modon")));
    if (!alreadyMoved) addStockMovement(line.productId, invoice.id, line.quantity, "استلام راجع Modon فعليًا", invoice.employeeId, null, {
      orderId: order.id,
      externalOrderId: order.external_order_id,
      idempotencyKey: key,
    });
  });
  order.returned_received_stock = true;
  order.returned_received_at = now();
  order.returned_received_by = auditActorId();
  order.updated_at = now();
  invoice.paymentStatus = "راجع - تم استلام الراجع وإرجاعه للمخزون";
}

async function syncCarrierInvoicesFromModon(options = {}) {
  const silent = Boolean(options.silent);
  if (!requirePermission("delivery.modon.invoices", "ليست لديك صلاحية جلب فواتير Modon.")) return { success: false, reason: "permission" };
  const button = $("#syncCarrierInvoices");
  const oldText = button?.textContent || "";
  if (button && !silent) {
    button.disabled = true;
    button.textContent = "جاري الجلب...";
  }
  try {
    const employees = modonEmployeesInScope();
    if (!employees.length) {
      const error = new Error("لا يوجد حساب Modon ضمن النطاق الحالي.");
      if (options.throwOnError) throw error;
      if (!silent) alert(error.message);
      return { success: false, reason: "no-account" };
    }
    let synced = 0;
    let matchedOrders = 0;
    let processedAccounts = 0;
    const failedAccounts = [];
    const partialInvoiceWarnings = [];
    for (const [employeeIndex, employee] of employees.entries()) {
      const employeeSnapshot = createModonRefreshSnapshot();
      let employeeMatched = 0;
      let employeeSynced = 0;
      try {
      const invoices = await provider.getInvoices(employee);
      const invoiceErrors = [];
      for (const [invoiceIndex, modonInvoice] of invoices.entries()) {
        const invoiceId = clean(modonInvoice.id);
        if (!invoiceId) continue;
        const invoiceDate = modonReconciliationItemDate(modonInvoice);
        if (options.range && invoiceDate && !dateMatchesRange(invoiceDate, options.range)) continue;
        let invoiceOrders;
        try {
          invoiceOrders = await provider.getInvoiceOrders(employee, invoiceId);
        } catch (invoiceError) {
          // One invoice failing to expand must not discard the whole account.
          // Skip it, keep every invoice fetched so far, and report it at the end.
          invoiceErrors.push(`فاتورة ${invoiceId}: ${invoiceError.message}`);
          continue;
        }
        if (options.range && !invoiceDate) {
          const belongsToRange = invoiceOrders.some((remoteOrder) => {
            if (dateMatchesRange(modonReconciliationItemDate(remoteOrder), options.range)) return true;
            const localOrder = findLocalOrderByRemote(remoteOrder, employee.id);
            return localOrder && dateMatchesRange(modonReconciliationItemDate(localOrder), options.range);
          });
          if (!belongsToRange) continue;
        }
        const orderIds = [];
        invoiceOrders.forEach((remoteOrder) => {
          const localOrder = findLocalOrderByRemote(remoteOrder, employee.id)
            || healOrphanFromRemote(remoteOrder, employee.id);
          if (!localOrder) return;
          updateLocalOrderFromModon(localOrder, remoteOrder);
          localOrder.has_merchant_fin_record = true;
          localOrder.merchant_invoice_id = invoiceId;
          localOrder.updated_at = now();
          orderIds.push(localOrder.id);
          employeeMatched += 1;
        });
        upsertModonDeliveredInvoice(employee, modonInvoice, invoiceOrders, orderIds);
        // If this invoice was already collected, top the till up for any linked
        // order that was healed (here or by an earlier live-orders sync) but
        // whose share never entered the box. Self-guards on collected status.
        completeCollectionForHealedOrders(employee, invoiceId);
        employeeSynced += 1;
        options.onProgress?.({
          current: employeeIndex + ((invoiceIndex + 1) / Math.max(invoices.length, 1)),
          total: employees.length,
          employee,
          count: employeeSynced,
          detail: `فاتورة ${invoiceIndex + 1} من ${invoices.length}`,
        });
      }
      synced += employeeSynced;
      matchedOrders += employeeMatched;
      processedAccounts += 1;
      if (invoiceErrors.length) {
        partialInvoiceWarnings.push({ employeeId: employee.id, employeeName: employee.name, count: invoiceErrors.length, errors: invoiceErrors });
      }
      options.onProgress?.({ current: employeeIndex + 1, total: employees.length, employee, count: employeeSynced });
      } catch (error) {
        restoreModonRefreshSnapshot(employeeSnapshot);
        failedAccounts.push({ employeeId: employee.id, employeeName: employee.name, message: error.message });
        options.onProgress?.({ current: employeeIndex + 1, total: employees.length, employee, count: 0, failed: true, detail: `تعذر التحديث وبقيت آخر لقطة ناجحة: ${error.message}` });
      }
    }
    if (!processedAccounts && failedAccounts.length) {
      const error = new Error(`تعذر تحديث فواتير جميع حسابات Modon: ${failedAccounts.map((item) => item.employeeName).join("، ")}`);
      error.failedAccounts = failedAccounts;
      throw error;
    }
    if (!options.deferSave) await saveAfterExternalChange(null, "جاري حفظ فواتير Modon...");
    if (!options.deferRender) renderAll();
    if (!silent) {
      const skipped = partialInvoiceWarnings.reduce((sum, item) => sum + item.count, 0);
      const warn = skipped ? `\nتعذّر توسيع ${skipped} فاتورة (تم تخطّيها وحفظ الباقي): ${partialInvoiceWarnings.map((item) => item.employeeName).join("، ")}.` : "";
      alert(`تم جلب ${synced} فاتورة واصل من Modon. المطابق داخل النظام: ${matchedOrders}. غير المطابق يظهر للقراءة فقط ولا يدخل القاصة.${warn}`);
    }
    return { success: true, synced, matchedOrders, processedAccounts, failedAccounts, partialInvoiceWarnings };
  } catch (error) {
    if (options.throwOnError) throw error;
    notifyOperationError(error, "تعذر جلب فواتير Modon");
    return { success: false, error };
  } finally {
    if (button && !silent) {
      button.disabled = false;
      button.textContent = oldText || "جلب فواتير الواصل من Modon";
    }
  }
}

async function getModonOrdersForSync(employee, options = {}) {
  const key = employee.id;
  const cached = modonOrdersSyncCache.get(key);
  const age = cached?.fetchedAt ? Date.now() - cached.fetchedAt : Number.POSITIVE_INFINITY;
  if (!options.force && cached?.orders && age < MODON_ORDERS_SYNC_CACHE_MS) {
    return { orders: cached.orders, source: "cache", fetchedAt: cached.fetchedAt };
  }
  if (cached?.promise) return cached.promise;
  const promise = provider.getOrders(employee)
    .then((orders) => {
      const result = { orders, source: "live", fetchedAt: Date.now() };
      modonOrdersSyncCache.set(key, result);
      return result;
    })
    .catch((error) => {
      if (cached?.orders && age < MODON_ORDERS_STALE_FALLBACK_MS) {
        const result = { orders: cached.orders, source: "stale", fetchedAt: cached.fetchedAt, error };
        modonOrdersSyncCache.set(key, result);
        return result;
      }
      throw error;
    });
  modonOrdersSyncCache.set(key, { ...(cached || {}), promise });
  try {
    return await promise;
  } finally {
    const latest = modonOrdersSyncCache.get(key);
    if (latest?.promise === promise) modonOrdersSyncCache.delete(key);
  }
}

async function supplementModonOrdersFromLocalIds(employee, primaryOrders, options) {
  primaryOrders ||= [];
  options ||= {};
  const canonicalOrders = dedupeModonOrdersByAliases(primaryOrders);
  const visibleAliases = new Set(canonicalOrders.flatMap(remoteOrderIds));
  const lookupIds = Array.from(new Set(repo.state.deliveryOrders
    .filter((order) => order.employeeId === employee.id)
    .filter((order) => localModonOrderIds(order).length)
    .filter((order) => !localModonOrderIds(order).some((id) => visibleAliases.has(id)))
    .map((order) => clean(order.external_order_id || order.qr_id || order.modon_order_id || order.remote_order_id))
    .filter(Boolean)));
  if (!lookupIds.length) return canonicalOrders;

  const batchSize = 25;
  const batches = [];
  for (let index = 0; index < lookupIds.length; index += batchSize) batches.push(lookupIds.slice(index, index + batchSize));
  const budget = options.requestBudget || { remaining: 48 };
  if (batches.length > number(budget.remaining)) {
    throw new Error(`فحص طلبات ${employee.name} يحتاج ${batches.length} دفعة، وهو أكبر من حد الأمان المتاح للـAPI.`);
  }

  const verified = [];
  for (const [batchIndex, ids] of batches.entries()) {
    budget.remaining -= 1;
    const rows = await provider.getOrdersByIds(employee, ids);
    verified.push(...rows);
    options.onProgress?.({
      current: batchIndex + 1,
      total: batches.length,
      employee,
      requested: ids.length,
      found: rows.length,
    });
  }
  return dedupeModonOrdersByAliases([...canonicalOrders, ...verified]);
}

async function syncReturnCarrierInvoicesFromModon(options = {}) {
  const silent = Boolean(options.silent);
  if (!requirePermission("delivery.modon.receiveReturns", "ليست لديك صلاحية جلب الراجع من Modon.")) return { success: false, reason: "permission" };
  const button = $("#syncReturnCarrierInvoices");
  const oldText = button?.textContent || "";
  if (button && !silent) {
    button.disabled = true;
    button.textContent = "جاري الجلب...";
  }
  try {
    const employees = modonEmployeesInScope();
    if (!employees.length) {
      const error = new Error("لا يوجد حساب Modon ضمن النطاق الحالي.");
      if (options.throwOnError) throw error;
      if (!silent) alert(error.message);
      return { success: false, reason: "no-account" };
    }
    let matched = 0;
    let fetchedReturns = 0;
    let cachedAccounts = 0;
    let staleAccounts = 0;
    const failedAccounts = [];
    let processedAccounts = 0;
    for (const [employeeIndex, employee] of employees.entries()) {
      const employeeSnapshot = createModonRefreshSnapshot();
      try {
      const remoteResult = await getModonOrdersForSync(employee);
      if (remoteResult.source === "stale") {
        staleAccounts += 1;
        throw remoteResult.error || new Error(`تعذر جلب كشف راجع حديث لحساب ${employee.name}`);
      }
      const usedCachedOrders = remoteResult.source === "cache";
      const remoteOrders = remoteResult.orders;
      // With a shared Modon merchant login every employee's /merchant-orders
      // returns the whole account, so the same return shows under every
      // employee. Skip returns that belong to another employee's local order
      // so each return appears only under its owning account (matched and
      // receivable there) instead of as "other account" noise everywhere.
      const belongsToAnotherEmployee = (remoteOrder) => {
        const aliasSet = new Set(remoteOrderIds(remoteOrder));
        if (!aliasSet.size) return false;
        return repo.state.deliveryOrders.some((order) => order.employeeId !== employee.id
          && localModonOrderIds(order).some((id) => aliasSet.has(id)));
      };
      const remoteReturnedOrders = dedupeModonOrdersByAliases(remoteOrders
        .filter(isModonReturnCandidate)
        .filter((order) => !belongsToAnotherEmployee(order))
        .filter((order) => !options.range || dateMatchesRange(modonReturnEventDate(order), options.range)));
      let employeeMatched = 0;
      const returnedOrders = remoteReturnedOrders
        .map((remoteOrder) => {
          const localOrder = findLocalOrderByRemote(remoteOrder, employee.id)
            || healOrphanFromRemote(remoteOrder, employee.id);
          if (!localOrder) return null;
          updateLocalOrderFromModon(localOrder, remoteOrder);
          localOrder.status = "returned";
          localOrder.return_invoice_id ||= `MRET-LIVE-${employee.id}`;
          localOrder.updated_at = now();
          employeeMatched += 1;
          return localOrder;
        })
        .filter(Boolean);
      const localReturnedOrders = repo.state.deliveryOrders.filter((order) => {
        if (order.employeeId !== employee.id || order.status !== "returned") return false;
        const verifiedByCurrentModon = order.raw_last_modon && isModonReturnCandidate(order.raw_last_modon);
        if (!order.returned_received_stock && !verifiedByCurrentModon && !order.manual_return_reclassified) return false;
        const eventDate = order.returned_received_at || (order.raw_last_modon ? modonReturnEventDate(order.raw_last_modon) : modonReconciliationItemDate(order));
        return !options.range || dateMatchesRange(eventDate, options.range);
      });
      const statementLocalOrders = Array.from(new Map([...returnedOrders, ...localReturnedOrders].map((order) => [order.id, order])).values());
      upsertModonReturnStatement(employee, statementLocalOrders, remoteReturnedOrders, returnedOrders.length, options.range || null, remoteResult.fetchedAt);
      matched += employeeMatched;
      fetchedReturns += remoteReturnedOrders.length;
      if (usedCachedOrders) cachedAccounts += 1;
      processedAccounts += 1;
      options.onProgress?.({ current: employeeIndex + 1, total: employees.length, employee, count: remoteReturnedOrders.length });
      } catch (error) {
        restoreModonRefreshSnapshot(employeeSnapshot);
        failedAccounts.push({ employeeId: employee.id, employeeName: employee.name, message: error.message });
        options.onProgress?.({ current: employeeIndex + 1, total: employees.length, employee, count: 0, failed: true, detail: `تعذر التحديث وبقي آخر كشف ناجح: ${error.message}` });
      }
    }
    if (!processedAccounts && (failedAccounts.length || staleAccounts)) {
      throw new Error(failedAccounts[0]?.message || "تعذر الحصول على كشف راجع حديث من Modon. بقي آخر كشف موثّق محفوظًا دون تغيير.");
    }
    if (!options.deferSave) await saveAfterExternalChange(null, "جاري حفظ راجع Modon...");
    if (!options.deferRender) renderAll();
    if (!silent) {
      const notes = [
        `تم تحديث ${fetchedReturns} طلب راجع من ${processedAccounts} حساب.`,
        `مطابق داخل النظام: ${matched}.`,
        `غير مطابق: ${Math.max(fetchedReturns - matched, 0)}.`,
        cachedAccounts ? `${cachedAccounts} حساب استُخدمت له نتيجة الجلب الحديثة لمنع التكرار.` : "",
        staleAccounts ? `${staleAccounts} حساب عُرض من آخر نتيجة محفوظة بسبب تعذر التحديث اللحظي.` : "",
        failedAccounts.length ? `تعذر تحديث ${failedAccounts.length} حساب وبقي كشفه السابق محفوظًا.` : "",
      ].filter(Boolean);
      alert(notes.join("\n"));
    }
    return { success: true, matched, fetchedReturns, processedAccounts, cachedAccounts, staleAccounts, failedAccounts };
  } catch (error) {
    if (options.throwOnError) throw error;
    notifyOperationError(error, "تعذر جلب راجع Modon");
    return { success: false, error };
  } finally {
    if (button && !silent) {
      button.disabled = false;
      button.textContent = oldText || "جلب الراجع من Modon";
    }
  }
}

// Modon returns an error when we tell it "receive this invoice" but it is already
// marked received on their side. That is not a real failure for us — we still need
// to record the collection locally — so we detect it and continue.
function isModonAlreadyReceivedError(error) {
  const msg = String(error?.message || error?.details?.msg || "");
  if (/تم استلام الفاتورة/.test(msg)) return true;
  return (/بالفعل|مسبق|already/i.test(msg) && /استلام|استلمت|received|collect/i.test(msg));
}

async function confirmCarrierInvoice(id) {
  if (!requirePermission("delivery.modon.confirmCash", "تأكيد قبض فاتورة Modon يحتاج صلاحية تأكيد قبض فواتير Modon.")) return;
  const invoice = repo.state.deliveryInvoices.find((item) => item.id === id);
  if (!invoice || invoice.status === "تم تأكيد القبض") return;
  if (!invoice.order_ids?.length) return alert("هذه الفاتورة من Modon خارج النظام ولا تحتوي طلبات داخلية مطابقة، لذلك لا يمكن إدخالها إلى القاصة.");
  const isPartial = !isCarrierInvoiceFullyMatched(invoice);
  const collectAmount = carrierInvoiceCollectableAmount(invoice);
  const button = $("#confirmCarrierCashAction");
  try {
    await withBusy(button, "جاري تأكيد القبض...", async () => {
      const before = snapshot(invoice);
      const employee = getEmployee(invoice.employeeId);
      if (employee && invoice.external_invoice_id && !String(invoice.external_invoice_id).startsWith("MINV-")) {
        try {
          await provider.receiveInvoice(employee, invoice.external_invoice_id);
        } catch (receiveError) {
          // If Modon already has this invoice marked as received, that's not a
          // failure for us — the goal (Modon knows it's received) is already met,
          // so we proceed to record the local cash. Re-throw any other error.
          if (!isModonAlreadyReceivedError(receiveError)) throw receiveError;
        }
      }
      invoice.status = "تم تأكيد القبض";
      // Record the amount actually collected (matched portion for partial invoices)
      // so cash totals and reports reflect what really entered the box.
      invoice.collected_amount = collectAmount;
      invoice.collected_partial = isPartial;
      invoice.updated_at = now();
      const collectedAt = now();
      invoice.order_ids.forEach((orderId) => {
        const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
        // A returned order is not collected financially (it is handled in the
        // returns flow), so it must not be marked as received into the cash box.
        if (order && !isReturnedDeliveryOrder(order)) {
          order.deliver_confirmed_fin = true;
          // Cash-basis recognition: the sale's revenue/profit is realized on this
          // collection date, not the original sale date. See invoiceCollectionEvents.
          order.deliver_confirmed_fin_at = collectedAt;
          order.updated_at = collectedAt;
          const saleInvoice = getInvoice(order.local_order_id);
          if (saleInvoice) {
            saleInvoice.paymentStatus = "تم قبض مبلغ Modon";
            saleInvoice.collectedAt = collectedAt;
          }
        }
      });
      const firstOrder = repo.state.deliveryOrders.find((item) => item.id === invoice.order_ids[0]);
      addCash(collectAmount, isPartial ? "قبض فاتورة Modon (مطابقة جزئية)" : "قبض فاتورة Modon", invoice.external_invoice_id, firstOrder?.employeeId || "admin", {
        idempotencyKey: `modon-cash:${invoice.employeeId}:${invoice.external_invoice_id}`,
      });
      addAudit("تأكيد قبض فاتورة Modon", "deliveryInvoice", invoice.id, invoice.external_invoice_id, money(collectAmount), before, invoice);
      await saveAfterExternalChange(null, "جاري تثبيت القبض محاسبيًا...");
    });
    closeCarrierCashConfirmation();
    renderAll();
    alert(`تم تأكيد قبض فاتورة Modon ${invoice.external_invoice_id} وإدخال ${money(collectAmount)} إلى القاصة${isPartial ? " (صافي الطلبات المطابقة فقط)" : ""}.`);
  } catch (error) {
    notifyOperationError(error, "تعذر تأكيد قبض فاتورة Modon");
  }
}

function openCarrierCashConfirmation(id) {
  if (!requirePermission("delivery.modon.confirmCash", "تأكيد قبض فاتورة Modon يحتاج صلاحية تأكيد قبض فواتير Modon.")) return;
  const invoice = repo.state.deliveryInvoices.find((item) => item.id === id);
  if (!invoice || invoice.status === "تم تأكيد القبض") return;
  if (!invoice.order_ids?.length) return alert("هذه الفاتورة خارج النظام ولا تحتوي طلبات داخلية مطابقة.");
  pendingCarrierCashInvoiceId = invoice.id;
  const isPartial = !isCarrierInvoiceFullyMatched(invoice);
  const isEstimate = isPartial && carrierInvoiceCollectableIsEstimate(invoice);
  const totalCount = carrierInvoiceRemoteOrderCount(invoice);
  const collectAmount = carrierInvoiceCollectableAmount(invoice);
  const currentCashBalance = accounting.totals().cashBalance;
  const cashAfterConfirmation = currentCashBalance + collectAmount;
  $("#carrierCashConfirmBody").innerHTML = `
    <div class="collection-cash-preview">
      <div><span>رصيد القاصة الحالي</span><strong>${money(currentCashBalance)}</strong></div>
      <div class="incoming"><span>المبلغ الداخل</span><strong>+ ${money(collectAmount)}</strong><small>${isPartial ? `صافي ${invoice.order_ids.length} طلباً مطابقاً فقط` : "صافي مستحق التاجر من Modon"}</small></div>
      <div><span>الرصيد بعد التأكيد</span><strong>${money(cashAfterConfirmation)}</strong></div>
    </div>
    ${isPartial ? `<p class="collection-partial-note">مطابقة جزئية: ${invoice.order_ids.length} من ${totalCount} طلباً. يدخل القاصة صافي الطلبات المطابقة فقط، والطلبات الخارجية لا تدخل.${isEstimate ? " ⚠️ Modon لا يوفّر سعر كل طلب على حدة، فالمبلغ محسوب بالتناسب مع عدد الطلبات المطابقة — راجعه قبل التأكيد." : ""}</p>` : ""}
    <div class="audit-meta financial-confirm-summary collection-confirm-meta">
      ${auditMetaItem("رقم فاتورة Modon", invoice.external_invoice_id || "-")}
      ${auditMetaItem("الطلبات المطابقة", `${invoice.order_ids.length}${isPartial ? ` من ${totalCount}` : ""} طلب`)}
      ${auditMetaItem("حساب Modon", employeeName(invoice.employeeId))}
    </div>
  `;
  const modal = $("#carrierCashConfirmModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeCarrierCashConfirmation() {
  pendingCarrierCashInvoiceId = null;
  const modal = $("#carrierCashConfirmModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

async function receiveReturnCarrierInvoice(id, mode = "selected") {
  if (!requirePermission("delivery.modon.receiveReturns", "استلام فاتورة الراجع يحتاج صلاحية استلام راجع Modon.")) return;
  const carrierInvoice = repo.state.deliveryInvoices.find((item) => item.id === id);
  if (!carrierInvoice || carrierInvoice.type !== "returned") return;
  const allOrders = carrierInvoice.order_ids
    .map((orderId) => repo.state.deliveryOrders.find((order) => order.id === orderId))
    .filter(Boolean);
  const selectedIds = mode === "all"
    ? new Set(allOrders.map((order) => order.id))
    : new Set($$(`[data-return-invoice="${id}"]:checked`).map((input) => input.value));
  const orders = allOrders.filter((order) => selectedIds.has(order.id) && order.status === "returned" && !order.returned_received_stock);
  if (!orders.length) return alert("لا توجد طلبات محددة قابلة للاستلام.");
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري استلام الراجع...", async () => {
    const before = snapshot(carrierInvoice);
    orders.forEach((order) => {
      const invoice = getInvoice(order.local_order_id);
      if (invoice) markReturnedOrderReceived(order, invoice);
    });
    carrierInvoice.received_return_count = allOrders.filter((order) => order.returned_received_stock).length;
    const externalCount = Math.max(number(carrierInvoice.returned_orders_count) - allOrders.length, number(carrierInvoice.external_orders_count));
    carrierInvoice.status = carrierInvoice.received_return_count >= allOrders.length
      ? externalCount > 0 ? "تم استلام المطابق - توجد طلبات خارج النظام" : "تم استلام الراجع بالكامل"
      : "استلام جزئي";
    carrierInvoice.updated_at = now();
    addAudit("استلام فاتورة راجع Modon", "deliveryInvoice", carrierInvoice.id, carrierInvoice.external_invoice_id, `${orders.length} من ${allOrders.length} طلب`, before, carrierInvoice);
  }, "تعذر تثبيت استلام فاتورة الراجع");
}

function modonEmployeesInScope() {
  const activeId = activeEmployeeId();
  return repo.state.employees
    .filter((employee) => employee.active)
    .filter((employee) => activeId === "all" || employee.id === activeId)
    .filter((employee) => employee.modonUsername);
}

function remoteOrderIds(order) {
  const storedIds = Array.isArray(order?.externalOrderIds)
    ? order.externalOrderIds
    : Array.isArray(order?.external_order_ids)
      ? order.external_order_ids
      : [];
  return Array.from(new Set([
    ...storedIds,
    order.external_order_id,
    order.order_id,
    order.orderId,
    order.id,
    order.qr_id,
    order.qrId,
    order.tracking_no,
    order.trackingNo,
    order.code,
    order.order_no,
    order.orderNo,
  ].map(clean).filter(Boolean).map(String)));
}

function dedupeModonOrdersByAliases(orders = []) {
  const groups = [];
  const aliasToGroup = new Map();
  (Array.isArray(orders) ? orders : []).forEach((order) => {
    if (!order || typeof order !== "object") return;
    const ids = remoteOrderIds(order);
    const matchedGroups = Array.from(new Set(ids.map((id) => aliasToGroup.get(id)).filter((index) => index !== undefined)));
    if (!matchedGroups.length) {
      const index = groups.length;
      groups.push({ ...order, external_order_ids: ids });
      ids.forEach((id) => aliasToGroup.set(id, index));
      return;
    }
    const primaryIndex = matchedGroups[0];
    const mergedIds = new Set([...(groups[primaryIndex]?.external_order_ids || []), ...ids]);
    matchedGroups.slice(1).forEach((index) => {
      const duplicate = groups[index];
      if (!duplicate) return;
      remoteOrderIds(duplicate).forEach((id) => mergedIds.add(id));
      groups[primaryIndex] = { ...duplicate, ...groups[primaryIndex] };
      groups[index] = null;
    });
    groups[primaryIndex] = { ...groups[primaryIndex], ...order, external_order_ids: Array.from(mergedIds) };
    mergedIds.forEach((id) => aliasToGroup.set(id, primaryIndex));
  });
  return groups.filter(Boolean);
}

function localModonOrderIds(order) {
  const storedIds = Array.isArray(order?.external_order_ids) ? order.external_order_ids : [];
  return Array.from(new Set([
    ...storedIds,
    order?.external_order_id,
    order?.qr_id,
    order?.modon_order_id,
    order?.remote_order_id,
    order?.internal_order_no,
  ].map(clean).filter(Boolean).map(String)));
}

function externalOrderMatchesLocal(order, employeeId = "") {
  const ids = new Set(remoteOrderIds(order));
  if (!ids.size) return false;
  return repo.state.deliveryOrders.some((localOrder) => {
    if (employeeId && localOrder.employeeId !== employeeId) return false;
    return localModonOrderIds(localOrder).some((id) => ids.has(id));
  });
}

function findLocalOrderByRemote(remoteOrder, employeeId) {
  const ids = new Set(remoteOrderIds(remoteOrder));
  return repo.state.deliveryOrders.find((order) => {
    if (employeeId && order.employeeId !== employeeId) return false;
    return localModonOrderIds(order).some((id) => ids.has(id));
  });
}

// ---------------------------------------------------------------------------
// Lost-order recovery (deliveryOrder is the ONLY record carrying the Modon
// qr_id ↔ our-order link; if it is lost while the invoice survives, the order
// becomes permanently "outside your system"). Two layered defences live here:
//   1) rebuildDeliveryOrderFromInvoice + reconcileMissingDeliveryOrders —
//      DETERMINISTIC self-heal. A Modon invoice now stamps its qr_id onto the
//      invoice at creation, so a missing deliveryOrder can always be rebuilt
//      from the surviving invoice with no guessing. Runs inside migrate() on
//      every load/merge/restore, so any wholesale deliveryOrders overwrite
//      (snapshot restore / full save / merge) self-repairs.
//   2) matchOrphanInvoiceForRemote — FUZZY backlog recovery for orders lost
//      BEFORE the qr stamp existed (their invoices carry no qr_id). During a
//      Modon invoice/return sync we match a surviving orphan invoice to the
//      remote order by phone + same day, requiring a UNIQUE match so money is
//      never attached to the wrong order.
// ---------------------------------------------------------------------------

function rebuildDeliveryOrderFromInvoice(invoice, remoteOrder = null) {
  const lines = Array.isArray(invoice.lines) ? invoice.lines : [];
  const qrId = clean(invoice.modon_qr_id || remoteOrder?.qr_id || remoteOrder?.qrId || "");
  const externalId = clean(invoice.modon_external_order_id)
    || (remoteOrder ? clean(remoteOrderIds(remoteOrder)[0]) : "")
    || qrId;
  const remoteStatusCategory = remoteOrder ? modonLiveStatusCategory(remoteOrder) : "";
  const status = remoteStatusCategory === "delivered" ? "delivered"
    : remoteStatusCategory === "returned" ? "returned"
    : remoteStatusCategory === "with_courier" ? "with_courier"
    : remoteStatusCategory === "issues" ? "issue"
    : "new";
  return {
    // Deterministic id derived from the invoice so two devices that rebuild the
    // same lost order produce the SAME record id — the merge dedupes them by id
    // instead of keeping two copies of one order.
    id: `rebuilt-${clean(invoice.id)}`,
    internal_order_no: invoice.number,
    employeeId: invoice.employeeId,
    local_order_id: invoice.id,
    company_id: "modon",
    company_name: "Modon Express",
    external_order_id: externalId,
    qr_id: qrId,
    qr_link: clean(invoice.modon_qr_link || remoteOrder?.qr_link || ""),
    customer_name: invoice.customerName,
    customer_phone: invoice.customerPhone,
    product_id: lines[0]?.productId || invoice.productId,
    product_name: invoice.productName,
    lines: invoice.lines,
    quantity: number(invoice.quantity),
    local_total: number(invoice.total),
    price: number(remoteOrder?.price ?? invoice.total),
    customer_total: number(invoice.total),
    merchant_expected: number(invoice.total),
    merchant_price: modonMerchantNetPrice(remoteOrder || {}, number(invoice.total)),
    status_id: clean(remoteOrder?.status_id || "1"),
    status,
    issue_notes: "",
    deliver_confirmed_fin: false,
    returned_received_stock: false,
    has_merchant_fin_record: false,
    merchant_invoice_id: null,
    reconciliation_status: "rebuilt",
    rebuilt_from_invoice: true,
    created_at: invoice.createdAt || now(),
    updated_at: now(),
    ...(remoteOrder ? { raw_last_modon: remoteOrder } : {}),
  };
}

// Deterministic rebuild of every deliveryOrder that was lost while its Modon
// invoice (carrying a qr_id) survived. Idempotent: an invoice that already has
// a linked deliveryOrder, or whose qr_id already exists on some order, is left
// untouched. Returns the number of orders rebuilt. Operates on the passed
// state so it is safe to call during migrate() before `repo` is fully wired.
function reconcileMissingDeliveryOrders(state) {
  const orders = Array.isArray(state?.deliveryOrders) ? state.deliveryOrders : [];
  const invoices = Array.isArray(state?.invoices) ? state.invoices : [];
  if (!invoices.length) return 0;
  // ADDITIVE ONLY — this function must NEVER delete or drop an order. (An earlier
  // version collapsed orders sharing a local_order_id, which silently deleted
  // legitimate distinct orders and made matched invoices lose orders across
  // refreshes.) Rebuilt orders already dedupe by their deterministic id in the
  // merge, so no dedupe is needed here.
  const linkedInvoiceIds = new Set();
  const knownModonIds = new Set();
  orders.forEach((order) => {
    const localId = clean(order?.local_order_id);
    if (localId) linkedInvoiceIds.add(localId);
    localModonOrderIds(order).forEach((id) => knownModonIds.add(id));
  });
  let rebuilt = 0;
  invoices.forEach((invoice) => {
    if (clean(invoice?.source) !== "modonOrder") return;
    if (invoice.cancelled) return;
    const qrId = clean(invoice.modon_qr_id || invoice.modon_external_order_id);
    if (!qrId) return; // no deterministic key; fuzzy backlog recovery handles these
    if (linkedInvoiceIds.has(clean(invoice.id))) return; // already linked
    if (knownModonIds.has(qrId)) return; // qr already present on some order
    const rebuiltOrder = rebuildDeliveryOrderFromInvoice(invoice);
    orders.unshift(rebuiltOrder);
    linkedInvoiceIds.add(clean(invoice.id));
    localModonOrderIds(rebuiltOrder).forEach((id) => knownModonIds.add(id));
    rebuilt += 1;
  });
  state.deliveryOrders = orders;
  return rebuilt;
}

// ---------------------------------------------------------------------------
// Atomic-create safety net. A Modon order is created REMOTELY before it is saved
// online, so a save failure (or a closed tab) in that window would strand it.
// We mirror the just-created order into localStorage the moment Modon confirms,
// then replay any that never reached a committed save on the next load — so an
// order can never be silently lost between Modon and our books.
// ---------------------------------------------------------------------------
const PENDING_MODON_ORDERS_KEY = "jouri_pending_modon_orders";

function readPendingModonOrders() {
  try {
    const raw = localStorage.getItem(PENDING_MODON_ORDERS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

function writePendingModonOrders(list) {
  try { localStorage.setItem(PENDING_MODON_ORDERS_KEY, JSON.stringify(Array.isArray(list) ? list : [])); } catch {}
}

function savePendingModonOrder(order, invoice) {
  if (!order?.local_order_id) return;
  const lean = { ...order };
  delete lean.raw_response;
  delete lean.raw_last_modon;
  const record = {
    order: lean,
    invoice_qr: {
      modon_qr_id: clean(invoice?.modon_qr_id || order.qr_id),
      modon_external_order_id: clean(invoice?.modon_external_order_id || order.external_order_id),
      modon_qr_link: clean(invoice?.modon_qr_link || order.qr_link),
    },
    at: now(),
  };
  const list = readPendingModonOrders().filter((rec) => rec?.order?.local_order_id !== order.local_order_id);
  list.push(record);
  writePendingModonOrders(list);
}

function clearPendingModonOrder(invoiceId) {
  const id = clean(invoiceId);
  if (!id) return;
  writePendingModonOrders(readPendingModonOrders().filter((rec) => rec?.order?.local_order_id !== id));
}

// Re-apply any locally-queued orders that are not yet in the loaded (server)
// state. Runs on load after the state is loaded and migrated. Self-cleaning: a
// record whose order is already present (server-confirmed) is dropped; a missing
// one is re-added and kept queued until a later load confirms it persisted.
function replayPendingModonOrders() {
  const pending = readPendingModonOrders();
  if (!pending.length) return;
  const stillPending = [];
  let restored = 0;
  pending.forEach((rec) => {
    const order = rec?.order;
    const localId = clean(order?.local_order_id);
    if (!localId) return; // malformed → drop
    const alreadyPresent = repo.state.deliveryOrders.some((existing) =>
      clean(existing.local_order_id) === localId
      || (order.qr_id && clean(existing.qr_id) === clean(order.qr_id)));
    if (alreadyPresent) return; // server already has it → drop from queue
    const invoice = repo.state.invoices.find((item) => clean(item.id) === localId);
    if (invoice) {
      invoice.modon_qr_id ||= rec.invoice_qr?.modon_qr_id || order.qr_id;
      invoice.modon_external_order_id ||= rec.invoice_qr?.modon_external_order_id || order.external_order_id;
      invoice.modon_qr_link ||= rec.invoice_qr?.modon_qr_link || order.qr_link;
    }
    repo.state.deliveryOrders.unshift({ ...order });
    stillPending.push(rec); // keep until a later load confirms it persisted
    restored += 1;
  });
  writePendingModonOrders(stillPending);
  if (restored) {
    addAudit("استرجاع طلب Modon من الطابور المحلي", "modonOrder", "pending-replay", "", `أُعيد إدخال ${restored} طلبًا أُنشئ في Modon ولم يكتمل حفظه داخل النظام.`, null, null);
    repo.save();
  }
}

// Pure matcher for fuzzy backlog recovery: given the full invoice/order lists
// and a remote Modon order, return the single surviving orphan invoice that
// this remote order belongs to, or null. Conservative on purpose — a match
// requires the same employee, same normalized phone and same calendar day, and
// must be UNIQUE (amount only narrows ties). Ambiguity => null (stays external
// for manual review) so a payment is never linked to the wrong order.
function matchOrphanInvoiceForRemote(invoices, deliveryOrders, remoteOrder, employeeId = "") {
  const remotePhone = normalizeModonPhone(clean(
    remoteOrder?.customer_phone || remoteOrder?.client_mobile || remoteOrder?.phone || remoteOrder?.mobile || ""));
  if (!remotePhone) return null;
  const remoteDay = dateOnly(modonReconciliationItemDate(remoteOrder));
  if (!remoteDay) return null;
  const linkedInvoiceIds = new Set(
    (deliveryOrders || []).map((order) => clean(order?.local_order_id)).filter(Boolean));
  const candidates = (invoices || []).filter((invoice) => {
    if (clean(invoice?.source) !== "modonOrder") return false;
    if (invoice.cancelled) return false;
    if (employeeId && invoice.employeeId !== employeeId) return false;
    if (linkedInvoiceIds.has(clean(invoice.id))) return false;
    if (normalizeModonPhone(clean(invoice.customerPhone)) !== remotePhone) return false;
    if (dateOnly(invoice.createdAt) !== remoteDay) return false;
    return true;
  });
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    // Repeat customer on the same day: only auto-link if exactly one candidate
    // matches the collected amount closely; otherwise leave for manual review.
    const remoteAmount = number(remoteOrder?.price || remoteOrder?.total_price || remoteOrder?.amount);
    if (remoteAmount > 0) {
      const byAmount = candidates.filter((invoice) => Math.abs(number(invoice.total) - remoteAmount) <= 1);
      if (byAmount.length === 1) return byAmount[0];
    }
  }
  return null;
}

// Wrapper used inside the live Modon sync loops: if a remote order matches a
// surviving orphan invoice, rebuild its deliveryOrder (with the real qr_id),
// stamp the qr onto the invoice so future heals are deterministic, and return
// the freshly linked order so the caller updates it like any matched order.
function healOrphanFromRemote(remoteOrder, employeeId) {
  const invoice = matchOrphanInvoiceForRemote(repo.state.invoices, repo.state.deliveryOrders, remoteOrder, employeeId);
  if (!invoice) return null;
  const rebuilt = rebuildDeliveryOrderFromInvoice(invoice, remoteOrder);
  invoice.modon_qr_id ||= rebuilt.qr_id;
  invoice.modon_external_order_id ||= rebuilt.external_order_id;
  repo.state.deliveryOrders.unshift(rebuilt);
  // NOTE: deliberately NOT writing a per-order audit here. Rebuilding the whole
  // backlog would add one audit row per order, and each audit upsert rebuilds
  // the large auditLogs array inside the save RPC — that churn was what made the
  // first bulk recovery save time out. Rebuilt orders are already identifiable by
  // reconciliation_status="rebuilt"; the money-moving completion audit remains.
  modonHealsThisRun += 1;
  return rebuilt;
}

// When a healed order re-links into a carrier invoice that was ALREADY collected
// ("collection confirmed"), the merchant physically received that order's cash from
// Modon but it was excluded from the partial collection (its deliveryOrder was
// lost at the time). Complete the collection now: recognize the order on the
// ORIGINAL collection date (cash-basis) and top the till up by its merchant
// share. Idempotent — the deliver_confirmed_fin flag and the addCash key both
// guard against a re-sync adding the money twice.
function completeCollectionForHealedOrders(employee, invoiceId) {
  const deliveryInvoice = repo.state.deliveryInvoices.find((inv) =>
    inv.type !== "returned" && inv.external_invoice_id === invoiceId && inv.employeeId === employee.id);
  // Only invoices whose cash already entered the till need completing; an
  // uncollected invoice will collect a healed order normally when confirmed.
  if (!deliveryInvoice || deliveryInvoice.status !== "تم تأكيد القبض") return 0;
  const collectedAt = deliveryInvoice.collectedAt || now();
  let added = 0;
  // Walk every order linked to THIS invoice, not just the ones healed in this
  // run: an order healed by an earlier live-orders sync is already matched here
  // but still unconfirmed, and its share must still be completed. The original
  // collection confirmed every order that existed at collection time, so any
  // linked-but-unconfirmed delivered order is a post-collection heal.
  (deliveryInvoice.order_ids || []).forEach((orderId) => {
    const order = repo.state.deliveryOrders.find((o) => o.id === orderId);
    if (!order || isReturnedDeliveryOrder(order)) return; // returns settle in the returns flow
    if (order.deliver_confirmed_fin) return;              // already recognized — idempotent
    order.deliver_confirmed_fin = true;
    order.deliver_confirmed_fin_at = collectedAt;
    order.updated_at = now();
    const saleInvoice = getInvoice(order.local_order_id);
    if (saleInvoice) {
      saleInvoice.paymentStatus = "تم قبض مبلغ Modon";
      saleInvoice.collectedAt = collectedAt;
    }
    const share = modonMerchantNetPrice(order.raw_last_modon || order, number(order.modon_merchant_price || order.merchant_price));
    // HARD SAFETY INVARIANT: the till can never receive more than Modon actually
    // paid for this invoice (its merchant_price). This blocks a double top-up if
    // the order's share was already inside the original collected amount (e.g. it
    // was matched at collection time, then briefly lost, then re-linked). The
    // order is still marked recognized above; we just skip re-adding its cash.
    const invoiceNet = number(deliveryInvoice.merchant_price);
    const withinInvoiceNet = invoiceNet <= 0 || number(deliveryInvoice.collected_amount) + share <= invoiceNet + 1;
    if (share > 0 && withinInvoiceNet) {
      addCash(share, "استكمال قبض طلب مُرمّم في فاتورة Modon مُستلَمة", deliveryInvoice.external_invoice_id, order.employeeId || employee.id, {
        idempotencyKey: `modon-cash-heal:${deliveryInvoice.external_invoice_id}:${order.id}`,
      });
      deliveryInvoice.collected_amount = number(deliveryInvoice.collected_amount) + share;
      added += share;
    }
  });
  if (added > 0) {
    // Once every remote order is matched the invoice is no longer partial.
    if (isCarrierInvoiceFullyMatched(deliveryInvoice)) deliveryInvoice.collected_partial = false;
    deliveryInvoice.updated_at = now();
    addAudit("استكمال قبض طلبات مُرمّمة", "deliveryInvoice", deliveryInvoice.id, deliveryInvoice.external_invoice_id,
      `أُضيف ${money(added)} إلى القاصة عن طلبات أُعيد ربطها في فاتورة مُستلَمة`, null, deliveryInvoice);
  }
  return added;
}

function modonRemoteOrderMatchesRange(remoteOrder, employeeId, range) {
  if (!range) return true;
  const remoteDate = modonReconciliationItemDate(remoteOrder);
  if (dateOnly(remoteDate)) return dateMatchesRange(remoteDate, range);
  const localOrder = findLocalOrderByRemote(remoteOrder, employeeId);
  return Boolean(localOrder && dateMatchesRange(modonReconciliationItemDate(localOrder), range));
}

// The amount the merchant actually collects (net of the delivery fee). Modon
// has used several key names for it across payloads; read every known synonym
// before falling back so the till never receives a gross figure or zero.
function modonMerchantNetPrice(source, fallback = 0) {
  if (!source || typeof source !== "object") return number(fallback);
  const keys = [
    "merchant_price", "merchantPrice", "net_price", "netPrice", "net_amount", "netAmount",
    "merchant_amount", "merchantAmount", "merchant_net", "merchantNet", "total_merchant_price", "merchant_total",
  ];
  for (const key of keys) {
    if (source[key] != null && source[key] !== "" && number(source[key]) > 0) return number(source[key]);
  }
  return number(fallback);
}

function updateLocalOrderFromModon(localOrder, remoteOrder) {
  const statusCategory = modonLiveStatusCategory(remoteOrder);
  const remoteStatusText = modonLiveStatusLabel(remoteOrder);
  if (statusCategory === "cancelled") {
    const before = snapshot(localOrder);
    const firstDetection = !localOrder.modon_cancelled;
    localOrder.modon_cancelled = true;
    localOrder.modon_cancelled_at ||= now();
    localOrder.reconciliation_status = "status_mismatch";
    const cancellationNote = `Modon يعرض الطلب ملغيًا: ${remoteStatusText || "ملغي في Modon"}. يحتاج مراجعة يدوية؛ لم تُلغ الفاتورة ولم يتغير المخزون.`;
    if (!clean(localOrder.issue_notes).includes(cancellationNote)) {
      localOrder.issue_notes = [localOrder.issue_notes, cancellationNote].filter(Boolean).join(" - ");
    }
    if (firstDetection) {
      addAudit("رصد إلغاء طلب في Modon", "modonOrder", localOrder.id, localOrder.external_order_id || localOrder.internal_order_no, cancellationNote, before, localOrder);
    }
  } else if (localOrder.manual_return_reclassified || localOrder.returned_received_stock) {
    // Keep it a return across refreshes when: the user manually reclassified it, OR
    // its returned pieces were already received into stock. Modon reuses the same
    // "received by the client" wording for both a customer delivery and a
    // merchant-received return, so a later ambiguous "delivered" status must NEVER
    // flip a physically-received return back to delivered.
    localOrder.modon_cancelled = false;
    localOrder.status = "returned";
    localOrder.status_id = clean(remoteOrder.status_id || localOrder.status_id);
  } else {
    localOrder.modon_cancelled = false;
    if (statusCategory === "delivered") localOrder.status = "delivered";
    if (statusCategory === "returned") localOrder.status = "returned";
    if (statusCategory === "issues") localOrder.status = "issue";
    if (statusCategory === "with_courier") localOrder.status = "with_courier";
    localOrder.status_id = clean(remoteOrder.status_id || localOrder.status_id);
  }
  localOrder.modon_status_id = clean(remoteOrder.status_id || localOrder.modon_status_id);
  const remoteIssueNotes = clean(remoteOrder.issue_notes || "");
  if (remoteIssueNotes && !clean(localOrder.issue_notes).includes(remoteIssueNotes)) {
    localOrder.issue_notes = [localOrder.issue_notes, remoteIssueNotes].filter(Boolean).join(" - ");
  }
  localOrder.modon_price = number(remoteOrder.price || remoteOrder.total_price || localOrder.modon_price);
  localOrder.modon_delivery_price = number(remoteOrder.delivery_price || remoteOrder.company_price || localOrder.modon_delivery_price);
  localOrder.modon_merchant_price = modonMerchantNetPrice(remoteOrder, localOrder.modon_merchant_price);
  localOrder.modon_status_text = remoteStatusText;
  localOrder.modon_deliver_confirmed_fin = number(remoteOrder.deliver_confirmed_fin || 0);
  localOrder.modon_has_merchant_fin_record = number(remoteOrder.has_merchant_fin_record || 0);
  if (isModonReplacementOrder(remoteOrder)) localOrder.is_exchange = true;
  localOrder.raw_last_modon = remoteOrder;
}

function upsertModonDeliveredInvoice(employee, modonInvoice, invoiceOrders, orderIds) {
  const invoiceId = clean(modonInvoice.id);
  const existing = repo.state.deliveryInvoices.find((invoice) => invoice.type !== "returned" && invoice.external_invoice_id === invoiceId && invoice.employeeId === employee.id);
  const matchedOrderIds = Array.from(new Set(orderIds));
  const remoteOrderCount = dedupeModonOrdersByAliases(invoiceOrders).length
    || number(modonInvoice.delivered_orders_count || modonInvoice.orders_count)
    || matchedOrderIds.length;
  const statusText = clean(modonInvoice.status || modonInvoice.status_name || "مجلوبة من Modon");
  const invoiceDate = clean(modonInvoice.created_at || modonInvoice.createdAt || modonInvoice.date || modonInvoice.invoice_date || modonInvoice.updated_at || "");
  const isExternalOnly = matchedOrderIds.length === 0;
  const payload = {
    type: "delivered",
    employeeId: employee.id,
    company_id: "modon",
    external_invoice_id: invoiceId,
    status: statusText,
    modon_created_at: invoiceDate,
    delivered_orders_count: remoteOrderCount,
    matched_orders_count: matchedOrderIds.length,
    external_only: isExternalOnly,
    fully_matched: remoteOrderCount > 0 && matchedOrderIds.length === remoteOrderCount,
    merchant_price: modonMerchantNetPrice(modonInvoice,
      invoiceOrders.reduce((sum, order) => sum + modonMerchantNetPrice(order), 0)
      || number(modonInvoice.price || modonInvoice.amount)),
    order_ids: matchedOrderIds,
    updated_at: now(),
  };
  // External-only invoices are read-only and never linked to the local books, so
  // we never persist their heavy per-order data — only the lightweight header
  // (counts + amount). Their details are always available from a live Modon fetch.
  // This keeps the saved state from ballooning with hundreds of external invoices.
  if (!isExternalOnly) {
    payload.raw_response = { invoice: modonInvoice, orders: invoiceOrders };
  }
  if (existing) {
    // Re-fetching from Modon must NEVER wipe a collection that already happened.
    // Modon's status text would otherwise overwrite "collection confirmed" and make a
    // collected invoice look uncollected again (money already entered the till).
    const collectionState = existing.status === "تم تأكيد القبض"
      ? {
          status: existing.status,
          collected_amount: existing.collected_amount,
          collected_partial: existing.collected_partial,
          collectedAt: existing.collectedAt,
        }
      : null;
    if (isExternalOnly) {
      delete existing.raw_response;
      delete existing.remote_order_refs;
      delete existing.remote_return_orders;
    }
    Object.assign(existing, payload);
    if (collectionState) Object.assign(existing, collectionState);
  } else {
    repo.state.deliveryInvoices.unshift({ id: crypto.randomUUID(), created_at: now(), ...payload });
  }
}

function compactModonReturnOrder(remoteOrder) {
  const ids = remoteOrderIds(remoteOrder);
  return {
    external_order_ids: ids,
    external_order_id: ids[0] || "",
    qr_id: clean(remoteOrder?.qr_id || remoteOrder?.qrId || ""),
    customer_name: clean(remoteOrder?.customer_name || remoteOrder?.client_name || remoteOrder?.receiver_name || remoteOrder?.name || "-"),
    customer_phone: clean(remoteOrder?.customer_phone || remoteOrder?.client_mobile || remoteOrder?.phone || remoteOrder?.mobile || ""),
    product_name: clean(remoteOrder?.product_name || remoteOrder?.type_name || remoteOrder?.goods_type || remoteOrder?.item_name || remoteOrder?.product?.name || "-"),
    quantity: number(remoteOrder?.quantity || remoteOrder?.items_number || remoteOrder?.items_count || remoteOrder?.pieces_count || remoteOrder?.qty || 1),
    status_name: modonLiveStatusLabel(remoteOrder),
    status_id: clean(remoteOrder?.status_id || remoteOrder?.statusId || ""),
    created_at: clean(remoteOrder?.created_at || remoteOrder?.createdAt || remoteOrder?.date || ""),
    updated_at: clean(remoteOrder?.updated_at || remoteOrder?.updatedAt || ""),
    return_event_at: clean(modonReturnEventDate(remoteOrder)),
    price: number(remoteOrder?.price || remoteOrder?.total_price || remoteOrder?.amount),
    merchant_price: number(remoteOrder?.merchant_price || remoteOrder?.merchantPrice || remoteOrder?.net_price),
    replacement: isModonReplacementOrder(remoteOrder) ? 1 : 0,
    price_direction: clean(remoteOrder?.price_type || remoteOrder?.type_price || remoteOrder?.price_direction || remoteOrder?.amount_type || ""),
    issue_notes: clean(remoteOrder?.issue_notes || remoteOrder?.issueNotes || ""),
    merchant_notes: clean(remoteOrder?.merchant_notes || remoteOrder?.merchantNotes || ""),
  };
}

function upsertModonReturnStatement(employee, orders, remoteOrders = [], remoteMatchedCount = orders.length, range = null, fetchedAt = Date.now()) {
  const statementId = `MRET-LIVE-${employee.id}`;
  const existing = repo.state.deliveryInvoices.find((invoice) => invoice.type === "returned" && invoice.external_invoice_id === statementId);
  const completeRemoteOrders = dedupeModonOrdersByAliases(remoteOrders).map(compactModonReturnOrder);
  const remoteOrderMap = new Map();
  completeRemoteOrders.forEach((remoteOrder, index) => {
    const key = remoteOrderIds(remoteOrder).join("|") || `return-row-${index}`;
    remoteOrderMap.set(key, compactModonReturnOrder(remoteOrder));
  });
  const storedRemoteOrders = dedupeModonOrdersByAliases(Array.from(remoteOrderMap.values())).slice(0, STORED_DELIVERY_INVOICE_ORDER_LIMIT);
  const storedMatchedCount = storedRemoteOrders.filter((remoteOrder) => findLocalOrderByRemote(remoteOrder, employee.id)).length;
  const totalCount = storedRemoteOrders.length || orders.length;
  const internalOnlyCount = orders.filter((order) => !storedRemoteOrders.some((remoteOrder) => findLocalOrderByRemote(remoteOrder, employee.id)?.id === order.id)).length;
  const fullyReceived = totalCount > 0 && storedMatchedCount === totalCount && internalOnlyCount === 0 && orders.every((order) => order.returned_received_stock);
  const payload = {
    type: "returned",
    employeeId: employee.id,
    company_id: "modon",
    external_invoice_id: statementId,
    status: fullyReceived ? "تم استلام الراجع بالكامل" : totalCount ? "راجع مجلوب من Modon" : "راجع داخلي يحتاج تحقق من Modon",
    returned_orders_count: totalCount,
    matched_orders_count: storedMatchedCount,
    external_orders_count: Math.max(totalCount - storedMatchedCount, 0),
    internal_only_count: internalOnlyCount,
    received_return_count: orders.filter((order) => order.returned_received_stock).length,
    order_ids: orders.map((order) => order.id),
    source: "modon_orders_api",
    remote_return_orders: storedRemoteOrders,
    snapshot_range_from: clean(range?.from || ""),
    snapshot_range_to: clean(range?.to || ""),
    snapshot_fetched_at: new Date(fetchedAt || Date.now()).toISOString(),
    raw_response: null,
    updated_at: now(),
  };
  if (existing) {
    Object.assign(existing, payload);
  } else if (totalCount || orders.length) {
    repo.state.deliveryInvoices.unshift({ id: crypto.randomUUID(), created_at: now(), ...payload });
  }
}

function paginateCollection(rows, pageKey, pageSize = LIST_PAGE_SIZES[pageKey] || 20) {
  const source = Array.isArray(rows) ? rows : [];
  const size = Math.max(1, Number(pageSize) || 20);
  const total = source.length;
  const totalPages = Math.max(1, Math.ceil(total / size));
  const requestedPage = Math.max(1, Number(listPages[pageKey]) || 1);
  const page = Math.min(requestedPage, totalPages);
  const start = (page - 1) * size;
  listPages[pageKey] = page;
  return {
    rows: source.slice(start, start + size),
    page,
    pageSize: size,
    total,
    totalPages,
    start,
  };
}

function renderListPagination(selector, pageKey, pageInfo) {
  const target = $(selector);
  if (!target || !pageInfo) return;
  const from = pageInfo.total ? pageInfo.start + 1 : 0;
  const to = pageInfo.total ? pageInfo.start + pageInfo.rows.length : 0;
  target.innerHTML = `
    <div class="pagination-summary">يعرض ${from}-${to} من ${pageInfo.total}</div>
    <div class="pagination-actions">
      <button class="ghost" type="button" ${pageInfo.page <= 1 ? "disabled" : ""} onclick="changeListPage('${pageKey}', -1)">السابق</button>
      <span>صفحة ${pageInfo.page} من ${pageInfo.totalPages}</span>
      <button class="ghost" type="button" ${pageInfo.page >= pageInfo.totalPages ? "disabled" : ""} onclick="changeListPage('${pageKey}', 1)">التالي</button>
    </div>
  `;
}

function resetListPage(pageKey) {
  if (Object.hasOwn(listPages, pageKey)) listPages[pageKey] = 1;
}

function resetAllListPages() {
  Object.keys(listPages).forEach(resetListPage);
  modonExternalPage = 1;
}

function changeListPage(pageKey, delta) {
  if (!Object.hasOwn(listPages, pageKey)) return;
  listPages[pageKey] = Math.max(1, listPages[pageKey] + Number(delta || 0));
  const renderers = {
    allInvoices: renderUnifiedInvoices,
    invoiceArchive: renderSalesRecentInvoices,
    vouchers: renderVouchers,
    internalOrders: renderInternalOrders,
    modonDaily: renderModonDailyPanel,
    purchaseInvoices: renderPurchaseInvoices,
    products: renderProducts,
    productMovements: renderProductDetails,
    inventory: renderInventory,
    stockMovements: renderInventory,
    openingStock: renderOpeningStock,
    deliveredCarrierInvoices: renderCarrierInvoices,
    returnCarrierInvoices: renderCarrierInvoices,
  };
  renderers[pageKey]?.();
}

function renderAll() {
  renderActiveView({ includeControls: true });
}

function renderActiveView(options = {}) {
  const viewId = $(".view.active")?.id || "dashboard";
  renderNavigationAccess();
  renderActionAccess();
  renderConnection();
  if (options.includeControls) fillEmployeeControls();

  const renderers = {
    dashboard: () => renderDashboard(),
    sales: () => renderSaleWorkspace(),
    invoiceArchive: () => {
      renderInvoiceCenterSummary();
      renderUnifiedInvoices();
      renderSalesRecentInvoices();
      renderInvoiceDetails();
      renderPurchaseInvoices();
    },
    orders: () => renderOrders(),
    modonToday: () => {
      renderModonOpsMetrics();
      renderModonDailyPanel();
    },
    modonFollow: () => renderOrders(),
    employees: () => renderEmployees(),
    products: () => renderProducts(),
    inventory: () => {
      renderInventory();
      renderOpeningStock();
    },
    purchaseInvoices: () => renderPurchaseInvoices(),
    suppliers: () => renderSuppliers(),
    vouchers: () => {
      renderVouchers();
      renderPersonalDebts();
    },
    accounts: () => renderAccounts(),
    modonReturns: () => renderCarrierInvoices(),
    carrierInvoices: () => renderCarrierInvoices(),
    customers: () => renderCustomerHistory(),
    reports: () => renderReports(),
    settings: () => {
      renderDataHealth();
      renderCompanySettings();
    },
  };
  (renderers[viewId] || renderers.dashboard)();
  if (["orders", "modonToday", "modonFollow", "carrierInvoices", "modonReturns", "accounts"].includes(viewId)) {
    renderModonWorkspaceChrome();
  }
}

function isConnectivityFailure(error) {
  if (!error) return navigator.onLine === false;
  if (error.connectivityFailure) return true;
  const code = clean(error.code).toUpperCase();
  return Boolean(error.apiFailure) && [
    "NETWORK_ERROR",
    "REQUEST_TIMEOUT",
    "EMPTY_API_RESPONSE",
    "INVALID_API_RESPONSE",
    "HTTP_502",
    "HTTP_503",
    "HTTP_504",
    "HTTP_520",
    "HTTP_522",
    "HTTP_523",
    "HTTP_524",
  ].includes(code);
}

function notifyOperationError(error, context = "") {
  if (error?.userNotified) return false;
  const readableContext = normalizeText(context);
  const readableMessage = normalizeText(error?.message);
  if (isConnectivityFailure(error)) {
    if (error) error.userNotified = true;
    showConnectionRecovery(error, readableContext);
    return false;
  }
  alert([readableContext, readableMessage || "حدث خطأ أثناء التنفيذ"].filter(Boolean).join(": "));
  if (error) error.userNotified = true;
  return false;
}
function showConnectionRecovery(error = null, context = "") {
  const modal = $("#connectionRecoveryModal");
  if (!modal) return alert(normalizeText(context || error?.message || "تعذر الاتصال مؤقتًا"));
  const offline = navigator.onLine === false;
  const title = $("#connectionRecoveryTitle");
  const message = $("#connectionRecoveryMessage");
  const status = $("#connectionRecoveryStatus");
  const dataState = $("#connectionRecoveryDataState");
  const modonState = $("#connectionRecoveryModonState");
  if (title) title.textContent = offline ? "لا توجد شبكة في الجهاز" : "تعذر الاتصال مؤقتًا";
  if (message) message.textContent = normalizeText(context || error?.message || "يمكنك التحقق من الاتصال وإعادته من هنا.");
  if (status) {
    status.className = "connection-recovery-status";
    status.textContent = offline
      ? "أعد تشغيل Wi-Fi أو بيانات الهاتف، ثم اضغط إعادة الاتصال."
      : "اضغط إعادة الاتصال لفحص Cloudflare وخدمة البيانات ثم Modon.";
  }
  if (dataState) dataState.textContent = repo.state.settings.storageReconnecting
    ? "يعيد الاتصال"
    : repo.state.settings.storageConnected ? "متصل سابقًا" : "غير متصل";
  if (modonState) modonState.textContent = repo.state.settings.connected ? "متصل سابقًا" : "غير متصل";
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeConnectionRecoveryModal() {
  if (connectionRecoveryInFlight) return;
  const modal = $("#connectionRecoveryModal");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
}

async function retryConnectionsNow() {
  if (connectionRecoveryInFlight) return;
  const button = $("#retryConnectionNow");
  const closeButton = $("#closeConnectionRecovery");
  const title = $("#connectionRecoveryTitle");
  const status = $("#connectionRecoveryStatus");
  const dataState = $("#connectionRecoveryDataState");
  const modonState = $("#connectionRecoveryModonState");
  connectionRecoveryInFlight = true;
  if (title) title.textContent = "جاري فحص الاتصال";
  if (button) {
    button.disabled = true;
    button.textContent = "جاري فحص Data...";
  }
  if (closeButton) closeButton.disabled = true;
  if (status) {
    status.className = "connection-recovery-status";
    status.textContent = "جاري الاتصال بخادم البيانات...";
  }
  if (dataState) dataState.textContent = "جاري الفحص...";
  if (modonState) modonState.textContent = "بانتظار Data";

  let dataReady = false;
  let modonReady = false;
  let failureMessage = "";
  try {
    if (navigator.onLine === false) throw Object.assign(new Error("الجهاز لا يملك اتصال شبكة الآن."), { code: "DEVICE_OFFLINE" });
    const response = await apiGet("/api/store/status", {
      attempts: 1,
      timeoutMs: API_HEALTH_TIMEOUT_MS,
      operation: "manual-reconnect-data",
    });
    if (!response.status) throw Object.assign(new Error(response.msg || "خدمة البيانات غير جاهزة"), { code: "DATA_NOT_READY" });
    dataReady = true;
    repo.markStorageOnline(response.msg || `التخزين الأونلاين متصل - نسخة ${repo.loadedRevision || repo.state.dataRevision || 1}`);
    if (dataState) dataState.textContent = "متصل";
  } catch (error) {
    failureMessage = error.message || "تعذر اتصال البيانات";
    repo.markStorageProblem(error, "تعذر اتصال البيانات");
    if (dataState) dataState.textContent = navigator.onLine === false ? "لا توجد شبكة" : "لم يستجب";
  }

  if (dataReady) {
    if (apiSessionToken()) {
      if (button) button.textContent = "جاري فحص Modon...";
      if (status) status.textContent = "تم اتصال البيانات. جاري فحص Modon...";
      if (modonState) modonState.textContent = "جاري الفحص...";
      modonReady = await fillCatalogs({ silent: true });
      if (modonState) modonState.textContent = modonReady ? "متصل" : "لم يستجب";
      if (!modonReady) failureMessage = "اتصلت خدمة البيانات، لكن Modon لم يستجب الآن.";
    } else {
      modonReady = true;
      if (modonState) modonState.textContent = "يُفحص بعد تسجيل الدخول";
    }
  }

  renderConnection();
  renderDataHealth();
  connectionRecoveryInFlight = false;
  if (closeButton) closeButton.disabled = false;
  if (button) {
    button.disabled = false;
    button.textContent = dataReady && modonReady ? "تم الاتصال" : "↻ إعادة الاتصال";
  }
  if (status) {
    status.className = `connection-recovery-status ${dataReady && modonReady ? "ok" : "issue"}`;
    status.textContent = dataReady && modonReady
      ? "تمت إعادة الاتصال بنجاح. يمكنك إغلاق النافذة وإعادة تنفيذ العملية التي توقفت."
      : `${failureMessage || "تعذر الاتصال الآن."} يمكنك الضغط على إعادة الاتصال مرة أخرى.`;
  }
  if (title) title.textContent = dataReady && modonReady ? "تمت إعادة الاتصال" : "تعذر الاتصال مؤقتًا";
}

function renderConnection() {
  const node = $("#connectionState");
  node.textContent = "Modon: " + (repo.state.settings.connected ? "متصل" : "غير متصل");
  node.classList.toggle("connected", repo.state.settings.connected);
  const storage = $("#storageState");
  if (storage) {
    storage.textContent = repo.state.settings.localPreview
      ? `Data: معاينة محلية v${repo.state.dataRevision || repo.loadedRevision || 1}`
      : repo.state.settings.storageReconnecting
      ? "Data: يعيد الاتصال"
      : repo.state.settings.storageConnected
        ? `Data: أونلاين v${repo.state.dataRevision || repo.loadedRevision || 1}`
        : navigator.onLine === false ? "Data: لا توجد شبكة" : "Data: تعذر اتصال البيانات";
    storage.title = repo.state.settings.storageMessage || "";
    storage.classList.toggle("connected", Boolean(repo.state.settings.storageConnected));
    storage.classList.toggle("reconnecting", Boolean(repo.state.settings.storageReconnecting));
  }
}

function renderDataHealth() {
  if (!$("#dataHealthMetrics")) return;
  const sizeKb = Math.ceil(new Blob([JSON.stringify(repo.state)]).size / 1024);
  const lastAudit = repo.state.auditLogs?.[0];
  renderMetrics("#dataHealthMetrics", [
    ["نسخة البيانات", `v${repo.state.dataRevision || repo.loadedRevision || 1}`, repo.state.settings.storageConnected ? "متصلة" : "تحتاج فحص"],
    ["آخر حفظ", repo.state.dataUpdatedAt ? formatDate(repo.state.dataUpdatedAt) : "-", "من التخزين الأونلاين"],
    ["الفواتير", repo.state.invoices.length + repo.state.purchaseInvoices.length, "بيع وشراء"],
    ["حجم البيانات", `${sizeKb} KB`, "تقريبي داخل المتصفح"],
  ]);
  $("#dataHealthDetails").innerHTML = [
    ["إصدار الواجهة", APP_BUILD_VERSION],
    ["إنترنت الجهاز", navigator.onLine === false ? "غير متصل" : "متصل"],
    ["حالة التخزين", repo.state.settings.storageMessage || "غير معروف"],
    ["آخر طلب API", diagnostics.lastApiOperation || "-"],
    ["آخر رابط API", diagnostics.lastApiUrl || "-"],
    ["آخر حالة API", diagnostics.lastApiStatus || "-"],
    ["مدة آخر طلب", diagnostics.lastApiDurationMs ? `${diagnostics.lastApiDurationMs} ms` : "-"],
    ["آخر نجاح API", diagnostics.lastApiOkAt ? formatDate(diagnostics.lastApiOkAt) : "-"],
    ["آخر خطأ API", diagnostics.lastApiError || "-"],
    ["آخر وقت خطأ", diagnostics.lastApiErrorAt ? formatDate(diagnostics.lastApiErrorAt) : "-"],
    ["فواتير البيع", repo.state.invoices.length],
    ["فواتير الشراء", repo.state.purchaseInvoices.length],
    ["منتجات", repo.state.products.length],
    ["موردين", repo.state.suppliers.length],
    ["زبائن", repo.state.customers.length],
    ["طلبات Modon", repo.state.deliveryOrders.length],
    ["حركات القاصة", repo.state.cashTransactions.length],
    ["حركات المخزون", repo.state.stockMovements.length],
    ["آخر حركة تدقيق", lastAudit ? `${lastAudit.action} - ${lastAudit.ref || "-"} - ${formatDate(lastAudit.createdAt)}` : "لا توجد"],
  ].map(reportRow).join("");
}

function renderCompanySettings() {
  const form = $("#companySettingsForm");
  if (!form) return;
  const company = companySettings();
  const modon = modonSettings();
  form.name.value = company.name || "";
  form.phone.value = company.phone || "";
  form.address.value = company.address || "";
  form.taxNo.value = company.taxNo || "";
  form.footer.value = company.footer || "";
  renderCompanyLogoPreview(company.logoDataUrl || "");
  form.modonPriceMarkup.value = modon.priceMarkup;
  form.modonDeliveryPrice.value = modon.deliveryPrice;
  const securityForm = $("#adminSecurityForm");
  if (securityForm) {
    securityForm.classList.toggle("hidden", repo.state.currentUserId !== "admin");
    securityForm.username.value = repo.state.adminLogin?.username || "";
  }
  renderPrintTemplateTestPreview();
}

async function saveCompanySettings(event) {
  event.preventDefault();
  if (!requirePermission("settings.manage", "ليست لديك صلاحية تعديل إعدادات الشركة.")) return;
  const formNode = event.target;
  try {
    await withBusy(event.submitter, "جاري حفظ الإعدادات...", async () => {
      const form = new FormData(formNode);
      const before = snapshot(companySettings());
      const logoFile = formNode.logoFile?.files?.[0];
      let logoDataUrl = repo.state.settings.company?.logoDataUrl || "";
      if (logoFile) logoDataUrl = await fileToDataUrl(logoFile);
      await commitConfirmedMutation(async () => {
        repo.state.settings.company = {
          name: clean(form.get("name")) || "مفروشات جوري",
          phone: clean(form.get("phone")),
          address: clean(form.get("address")),
          taxNo: clean(form.get("taxNo")),
          footer: clean(form.get("footer")) || "شكراً لتعاملكم معنا",
          logoDataUrl,
        };
        repo.state.settings.modon = {
          priceMarkup: number(form.get("modonPriceMarkup")),
          deliveryPrice: number(form.get("modonDeliveryPrice")),
        };
        addAudit("تعديل بيانات الشركة", "settings", "company", repo.state.settings.company.name, "بيانات الطباعة وModon", before, { company: repo.state.settings.company, modon: repo.state.settings.modon });
      });
      renderConnection();
      renderCompanyLogoPreview(logoDataUrl);
      applyDefaultModonDelivery();
      updateModonOrderPricing();
    });
    alert("تم حفظ بيانات الشركة والطباعة.");
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ إعدادات الشركة");
  }
}

async function saveAdminSecurity(event) {
  event.preventDefault();
  if (repo.state.currentUserId !== "admin") return alert("تغيير بيانات دخول الإدارة متاح للإدارة العامة فقط.");
  const form = new FormData(event.target);
  const username = clean(form.get("username"));
  const password = clean(form.get("password"));
  const passwordConfirm = clean(form.get("passwordConfirm"));
  if (!username) return alert("اكتب اسم دخول الإدارة.");
  if (password.length < 12) return alert("كلمة مرور الإدارة يجب ألا تقل عن 12 حرفًا.");
  if (password !== passwordConfirm) return alert("تأكيد كلمة المرور غير مطابق.");
  if (repo.state.employees.some((employee) => normalizeSearch(employee.username) === normalizeSearch(username))) return alert("اسم الدخول مستخدم لدى موظف آخر.");
  const submitter = event.submitter || event.target.querySelector('button[type="submit"]');
  try {
    await withBusy(submitter, "جاري تحديث الحماية...", async () => {
      const beforeUsername = repo.state.adminLogin?.username || "";
      repo.state.adminLogin ||= {};
      repo.state.adminLogin.username = username;
      repo.state.adminLogin.passwordHash = await hashText(password);
      addAudit("تغيير بيانات دخول الإدارة", "auth", "admin", username, `تم تغيير اسم الدخول من ${beforeUsername} إلى ${username}`);
      await repo.saveNow();
    });
    event.target.password.value = "";
    event.target.passwordConfirm.value = "";
    alert("تم تحديث اسم دخول الإدارة وكلمة المرور بنجاح. استخدم البيانات الجديدة عند تسجيل الدخول القادم.");
  } catch (error) {
    notifyOperationError(error, "تعذر تحديث بيانات الإدارة");
  }
}

function previewCompanyLogo(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  fileToDataUrl(file).then(renderCompanyLogoPreview).catch((error) => alert(error.message));
}

function removeCompanyLogo() {
  repo.state.settings.company ||= defaultCompanySettings();
  repo.state.settings.company.logoDataUrl = "";
  const input = $("#companyLogoInput");
  if (input) input.value = "";
  renderCompanyLogoPreview("");
  repo.save();
}

function renderCompanyLogoPreview(src) {
  const image = $("#companyLogoPreview");
  if (!image) return;
  image.src = src || "";
  image.classList.toggle("hidden", !src);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) return reject(new Error("اختر ملف صورة للشعار."));
    if (file.size > 700 * 1024) return reject(new Error("حجم الشعار كبير. اختر صورة أقل من 700KB."));
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("تعذر قراءة ملف الشعار."));
    reader.readAsDataURL(file);
  });
}

function canViewCustomerInvoices() {
  return hasPermission("sales.viewArchive");
}

function canViewSupplierInvoices() {
  return hasPermission("inventory.purchase") || hasPermission("inventory.view");
}

function unifiedInvoiceRows() {
  const rows = [];
  if (canViewCustomerInvoices()) {
    accounting.scopedInvoices().forEach((invoice) => {
      rows.push({
        id: invoice.id,
        kind: "customer",
        number: invoice.number,
        secondaryNumber: invoice.receiptNo || "",
        party: invoice.customerName || "زبون بدون اسم",
        partyMeta: customerPhoneLabel(invoice.customerPhone) || "",
        dateValue: invoice.updatedAt || invoice.createdAt,
        filterDate: invoice.createdAt,
        dateLabel: formatDate(invoice.createdAt),
        total: number(invoice.total),
        balance: invoiceOpenBalance(invoice),
        cancelled: Boolean(invoice.cancelled),
      });
    });
  }
  if (canViewSupplierInvoices()) {
    repo.state.purchaseInvoices.forEach((invoice) => {
      rows.push({
        id: invoice.id,
        kind: "supplier",
        number: invoice.number,
        secondaryNumber: invoice.supplierInvoiceNo || "",
        party: supplierName(invoice.supplierId),
        partyMeta: invoice.supplierInvoiceNo || "",
        dateValue: invoice.createdAt || invoice.date,
        filterDate: invoice.date || invoice.createdAt,
        dateLabel: invoice.date || formatDate(invoice.createdAt),
        total: number(invoice.total),
        balance: number(invoice.balance),
        cancelled: Boolean(invoice.cancelled),
      });
    });
  }
  return rows.sort((a, b) => new Date(b.dateValue) - new Date(a.dateValue));
}

function renderInvoiceCenterSummary() {
  const box = $("#invoiceCenterCounts");
  if (!box) return;
  const customerCount = canViewCustomerInvoices() ? accounting.scopedInvoices().length : 0;
  const supplierCount = canViewSupplierInvoices() ? repo.state.purchaseInvoices.length : 0;
  box.innerHTML = `
    <div><span>الإجمالي</span><strong>${customerCount + supplierCount}</strong></div>
    <div><span>فواتير الزبائن</span><strong>${customerCount}</strong></div>
    <div><span>فواتير الموردين</span><strong>${supplierCount}</strong></div>
  `;
  const customerTab = $('[data-invoice-tab="customerInvoicesTab"]');
  const supplierTab = $('[data-invoice-tab="supplierInvoicesTab"]');
  customerTab?.classList.toggle("hidden", !canViewCustomerInvoices());
  supplierTab?.classList.toggle("hidden", !canViewSupplierInvoices());
}

function renderUnifiedInvoices() {
  const box = $("#allInvoicesList");
  if (!box) return;
  const query = normalizeSearch($("#allInvoiceSearch")?.value || "");
  const type = clean($("#allInvoiceType")?.value || "all");
  const status = clean($("#allInvoiceStatus")?.value || "all");
  const filteredRows = unifiedInvoiceRows()
    .filter((item) => type === "all" || item.kind === type)
    .filter((item) => dateMatchesRange(item.filterDate, "allInvoices"))
    .filter((item) => {
      const text = normalizeSearch([item.number, item.secondaryNumber, item.party, item.partyMeta, item.dateLabel].join(" "));
      return !query || text.includes(query);
    })
    .filter((item) => {
      if (status === "cancelled") return item.cancelled;
      if (status === "paid") return !item.cancelled && item.balance <= 0;
      if (status === "open") return !item.cancelled && item.balance > 0;
      return true;
    });
  const pageInfo = paginateCollection(filteredRows, "allInvoices");
  box.innerHTML = pageInfo.rows.map((item) => `
    <tr>
      <td data-label="الفاتورة"><strong>${escapeHtml(item.number)}</strong>${item.secondaryNumber ? `<small class="table-secondary">${escapeHtml(item.secondaryNumber)}</small>` : ""}</td>
      <td data-label="التصنيف"><span class="invoice-kind-badge ${item.kind}">${item.kind === "customer" ? "فاتورة زبون" : "فاتورة مورد"}</span></td>
      <td data-label="الطرف"><strong>${escapeHtml(item.party)}</strong>${item.partyMeta ? `<small class="table-secondary">${escapeHtml(item.partyMeta)}</small>` : ""}</td>
      <td data-label="التاريخ">${escapeHtml(item.dateLabel)}</td>
      <td data-label="الإجمالي"><strong>${money(item.total)}</strong></td>
      <td data-label="المتبقي" class="${item.balance > 0 ? "open-balance-cell" : ""}">${money(item.balance)}</td>
      <td data-label="الحالة">${item.cancelled ? `<span class="badge danger">ملغاة</span>` : item.balance > 0 ? `<span class="badge issue">متبقي</span>` : `<span class="badge ok">مسددة</span>`}</td>
      <td data-label="الإجراءات" class="row-actions">
        <button class="ghost" onclick="openUnifiedInvoice('${item.kind}','${item.id}')">عرض</button>
        <button class="primary" onclick="${item.kind === "customer" ? `printSaleInvoice('${item.id}')` : `printPurchaseInvoice('${item.id}')`}">طباعة</button>
      </td>
    </tr>
  `).join("") || emptyRow(8, "لا توجد فواتير مطابقة.");
  renderListPagination("#allInvoicesPagination", "allInvoices", pageInfo);
}

function showInvoiceArchiveTab(tabId) {
  if (tabId === "customerInvoicesTab" && !canViewCustomerInvoices()) tabId = "allInvoicesTab";
  if (tabId === "supplierInvoicesTab" && !canViewSupplierInvoices()) tabId = "allInvoicesTab";
  $$("#invoiceArchiveTabs .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.invoiceTab === tabId));
  $$(".invoice-archive-tab").forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
  if (tabId === "customerInvoicesTab") {
    renderSalesRecentInvoices();
    renderInvoiceDetails();
  } else if (tabId === "salesReturnsTab") {
    renderSalesReturnCenter();
  } else if (tabId === "supplierInvoicesTab") {
    renderPurchaseInvoices();
  } else {
    renderUnifiedInvoices();
  }
}

function renderSalesReturnCenter() {
  const target = $("#salesReturnInvoiceList");
  if (!target) return;
  const search = normalizeSearch($("#salesReturnSearch")?.value || "");
  const invoices = accounting.scopedInvoices().filter((invoice) => !invoice.cancelled && invoice.type !== "return" && invoice.saleMode !== "modon" && (!search || normalizeSearch(`${invoice.number} ${invoice.customerName} ${invoice.customerPhone}`).includes(search))).slice(0, 50);
  target.innerHTML = invoices.map((invoice) => `<article class="sales-return-invoice-card"><div><strong>${escapeHtml(invoice.number)}</strong><span>${escapeHtml(invoice.customerName || "زبون نقدي")} · ${formatDate(invoice.createdAt)}</span></div><div><strong>${money(invoice.total)}</strong><small>${escapeHtml(invoice.paymentStatus || "")}</small></div><button class="primary" type="button" onclick="openSalesReturnModal('${invoice.id}')">اختيار الفاتورة</button></article>`).join("") || `<div class="empty">لا توجد فواتير بيع مطابقة.</div>`;
}

function openUnifiedInvoice(kind, id) {
  if (kind === "supplier") {
    repo.state.selectedPurchaseInvoiceId = id;
    repo.save();
    showInvoiceArchiveTab("supplierInvoicesTab");
    return;
  }
  repo.state.lastSelectedInvoiceId = id;
  repo.save();
  showInvoiceArchiveTab("customerInvoicesTab");
}

function renderSalesRecentInvoices() {
  const box = $("#salesRecentInvoices");
  if (!box) return;
  const canEdit = hasPermission("sales.edit");
  const canCancel = hasPermission("sales.cancel");
  const query = normalizeSearch($("#invoiceArchiveSearch")?.value || "");
  const saleMode = clean($("#invoiceArchiveSaleMode")?.value || "all");
  const status = clean($("#invoiceArchiveStatus")?.value || "all");
  const filteredInvoices = accounting.scopedInvoices()
    .filter((invoice) => saleMode === "all" || invoice.saleMode === saleMode)
    .filter((invoice) => dateMatchesRange(invoice.createdAt, "customerInvoices"))
    .filter((invoice) => {
      const text = normalizeSearch([invoice.number, invoice.receiptNo, invoice.customerName, invoice.customerPhone, employeeName(invoice.employeeId), invoice.paymentStatus].join(" "));
      return !query || text.includes(query);
    })
    .filter((invoice) => {
      const balance = invoiceOpenBalance(invoice);
      if (status === "active") return !invoice.cancelled;
      if (status === "cancelled") return invoice.cancelled;
      if (status === "paid") return !invoice.cancelled && balance <= 0;
      if (status === "open") return !invoice.cancelled && balance > 0;
      return true;
    })
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
  const pageInfo = paginateCollection(filteredInvoices, "invoiceArchive");
  const activeInvoices = filteredInvoices.filter((invoice) => !invoice.cancelled);
  const totalValue = activeInvoices.reduce(sumBy("total"), 0);
  const openBalance = activeInvoices.reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const archiveOverview = $("#invoiceArchiveOverview");
  if (archiveOverview) {
    archiveOverview.innerHTML = `
      <div><span>نتائج العرض</span><strong>${filteredInvoices.length}</strong><small>فاتورة مطابقة</small></div>
      <div><span>قيمة الفواتير</span><strong>${money(totalValue)}</strong><small>للفواتير الفعالة</small></div>
      <div class="${openBalance > 0 ? "has-open-balance" : ""}"><span>المبالغ المتبقية</span><strong>${money(openBalance)}</strong><small>ديون وأقساط مفتوحة</small></div>
      <div><span>فواتير ملغاة</span><strong>${filteredInvoices.filter((invoice) => invoice.cancelled).length}</strong><small>ضمن نتائج البحث</small></div>
    `;
  }
  box.innerHTML = pageInfo.rows.map((invoice) => {
      const balance = invoiceOpenBalance(invoice);
      return `
      <tr class="${repo.state.lastSelectedInvoiceId === invoice.id ? "selected-invoice-row" : ""}">
        <td data-label="رقم الفاتورة"><strong>${invoice.number}</strong></td>
        <td data-label="رقم الوصل">${invoice.receiptNo || invoice.number}</td>
        <td data-label="الموظف">${employeeName(invoice.employeeId)}</td>
        <td data-label="الزبون"><strong>${escapeHtml(invoice.customerName)}</strong><small class="table-secondary">${escapeHtml(customerPhoneLabel(invoice.customerPhone) || "")}</small></td>
        <td data-label="النوع"><span class="sale-mode-badge ${invoice.saleMode}">${saleModeLabel(invoice.saleMode)}</span></td>
        <td data-label="الإجمالي"><strong>${money(invoice.total)}</strong></td>
        <td data-label="المتبقي" class="${balance > 0 ? "open-balance-cell" : ""}">${money(balance)}</td>
        <td data-label="الحالة">${invoice.cancelled ? `<span class="badge danger">ملغاة</span>` : `<span class="badge ${balance > 0 ? "issue" : "ok"}">${escapeHtml(invoice.paymentStatus)}</span>`}</td>
        <td data-label="الإجراءات" class="row-actions">
          <button class="ghost" onclick="selectInvoice('${invoice.id}')">عرض</button>
          <button class="primary" onclick="printSaleInvoice('${invoice.id}')">طباعة</button>
          ${invoice.saleMode !== "modon" && customerPhoneLabel(invoice.customerPhone) ? `<button class="ghost" onclick="sendSaleInvoiceWhatsApp('${invoice.id}')">واتساب</button>` : ""}
          ${canEdit && !invoice.cancelled ? `<button class="ghost" onclick="editInvoice('${invoice.id}')">تعديل</button>` : ""}
          ${canCancel && !invoice.cancelled ? `<button class="danger-button" onclick="cancelInvoice('${invoice.id}')">إلغاء</button>` : ""}
        </td>
      </tr>
    `;
    }).join("") || emptyRow(9, "لا توجد فواتير مطابقة للفلاتر.");
  renderListPagination("#invoiceArchivePagination", "invoiceArchive", pageInfo);
}

function renderDashboard() {
  const t = accounting.totals();
  const supplierPayable = repo.state.suppliers.reduce((sum, supplier) => sum + supplierBalance(supplier.id).payable, 0);
  const stockRows = repo.state.products.map((product) => ({ product, qty: stockOf(product.id) }));
  const stockValue = stockRows.reduce((sum, row) => sum + row.qty * number(row.product.cost), 0);
  const lowStock = stockRows.filter((row) => row.qty > 0 && row.qty <= 1).length;
  const outStock = stockRows.filter((row) => row.qty <= 0).length;
  const purchaseTotal = repo.state.purchaseInvoices.filter((invoice) => !invoice.cancelled).reduce(sumBy("total"), 0);
  const activeVoucherCount = repo.state.vouchers.filter((voucher) => !voucher.cancelled && (activeEmployeeId() === "all" || voucher.employeeId === activeEmployeeId())).length;
  const todayModonOrders = repo.state.deliveryOrders.filter((order) => !isCancelledModonOrder(order) && dateOnly(order.created_at || order.createdAt || order.updated_at) === today());
  const modonAccounts = [{ id: "admin", name: "الإدارة" }, ...repo.state.employees].filter((account, index, list) => list.findIndex((item) => item.id === account.id) === index);
  const modonAccountRows = modonAccounts.map((account) => ({ account, orders: todayModonOrders.filter((order) => order.employeeId === account.id) })).filter((row) => row.orders.length || modonAccounts.length <= 12);
  $("#dashboardModonToday").innerHTML = `<div class="dashboard-modon-total"><strong>${todayModonOrders.length}</strong><span>إجمالي طلبات اليوم</span></div>${modonAccountRows.map((row) => `<button type="button" class="dashboard-modon-account" data-view-jump="modonToday"><span><strong>${escapeHtml(row.account.name || row.account.id)}</strong><small>${row.orders.length ? `${row.orders.filter((order) => order.status === "delivered").length} واصل · ${row.orders.filter((order) => order.status === "returned").length} راجع` : "لا توجد طلبات اليوم"}</small></span><b>${row.orders.length}</b></button>`).join("") || `<div class="empty">لا توجد طلبات Modon اليوم.</div>`}`;
  const dashboardCards = [
    { label: "إجمالي المبيعات", value: money(t.totalSales), meta: `${t.invoiceCount} فاتورة`, target: "sales", kind: "sales" },
    { label: "رصيد القاصة", value: money(t.cashBalance), meta: "الرصيد الحالي", target: "cash", kind: "cash" },
    { label: "ذمم الزبائن", value: money(t.customerDebtBalance), meta: "ديون وأقساط مفتوحة", target: "customers", kind: t.customerDebtBalance > 0 ? "attention" : "" },
    { label: "مستحقات الموردين", value: money(supplierPayable), meta: `${repo.state.suppliers.length} مورد`, target: "suppliers", kind: supplierPayable > 0 ? "attention" : "" },
    { label: "إجمالي المشتريات", value: money(purchaseTotal), meta: `${repo.state.purchaseInvoices.filter((invoice) => !invoice.cancelled).length} فاتورة`, target: "purchases", kind: "purchase" },
    { label: "قيمة المخزون", value: money(stockValue), meta: `${repo.state.products.length} منتج`, target: "stock", kind: "stock" },
    { label: "تحتاج متابعة", value: lowStock + outStock, meta: `${outStock} نافد · ${lowStock} منخفض`, target: outStock ? "outStock" : "lowStock", kind: lowStock + outStock > 0 ? "danger" : "" },
    { label: "السندات الفعالة", value: activeVoucherCount, meta: "قبض ودفع وصرف", target: "vouchers", kind: "voucher" },
  ];
  $("#dashboardMetrics").innerHTML = dashboardCards.map((card) => `
    <button class="dashboard-insight-card ${card.kind}" type="button" data-drilldown="${card.target}">
      <span>${card.label}</span>
      <strong>${card.value}</strong>
      <small>${card.meta}</small>
      <i aria-hidden="true">←</i>
    </button>
  `).join("");

  const overdueInstallments = repo.state.invoices
    .filter((invoice) => !invoice.cancelled && invoice.saleMode === "installment")
    .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({ item, balance: installmentOpenBalance(invoice, index) })))
    .filter(({ item, balance }) => balance > 0 && item.dueDate && item.dueDate < today());
  const overdueAmount = overdueInstallments.reduce((sum, item) => sum + item.balance, 0);
  const alerts = [
    overdueInstallments.length ? { label: "أقساط متأخرة", value: overdueInstallments.length, meta: money(overdueAmount), target: "installments", kind: "danger" } : null,
    outStock ? { label: "منتجات نافدة", value: outStock, meta: "تحتاج إعادة تجهيز", target: "outStock", kind: "danger" } : null,
    lowStock ? { label: "رصيد منخفض", value: lowStock, meta: "متبقي قطعة واحدة", target: "lowStock", kind: "attention" } : null,
    t.receivableModon > 0 ? { label: "مستحقات Modon", value: money(t.receivableModon), meta: "مسلم وغير مقبوض", target: "modonReceivable", kind: "info" } : null,
  ].filter(Boolean);
  $("#dashboardAlerts").innerHTML = alerts.length ? alerts.map((alert) => `
    <button class="dashboard-alert-card ${alert.kind}" type="button" data-drilldown="${alert.target}">
      <span>${alert.label}</span><strong>${alert.value}</strong><small>${alert.meta}</small><i aria-hidden="true">←</i>
    </button>
  `).join("") : `<div class="dashboard-clear-state"><span class="badge ok">الحالة مستقرة</span><strong>لا توجد تنبيهات عاجلة حاليًا</strong></div>`;
  $("#recentInvoices").innerHTML = accounting.scopedInvoices().filter((invoice) => invoice.saleMode !== "modon").slice(0, 8).map((invoice) => `
    <tr>
      <td data-label="الفاتورة"><button class="text-button" onclick="selectInvoice('${invoice.id}')">${invoice.number}</button></td>
      <td data-label="الزبون">${escapeHtml(invoice.customerName)}</td>
      <td data-label="المبلغ">${money(invoice.total)}</td>
      <td data-label="الحالة"><span class="badge ${invoiceOpenBalance(invoice) > 0 ? "issue" : "ok"}">${escapeHtml(invoice.paymentStatus)}</span></td>
    </tr>
  `).join("") || emptyRow(4, "لا توجد فواتير.");
  $("#cashLedger").innerHTML = repo.state.cashTransactions
    .filter((item) => activeEmployeeId() === "all" || item.employeeId === activeEmployeeId())
    .slice(0, 8).map((item) => `<button class="dashboard-cash-row" type="button" data-drilldown="cash">
      <span><strong>${escapeHtml(item.reason)}</strong><small>${escapeHtml(item.reference)} · ${formatDate(item.createdAt)}</small></span>
      <strong class="${number(item.amount) < 0 ? "out" : "in"}">${number(item.amount) > 0 ? "+" : ""}${money(item.amount)}</strong>
    </button>`)
    .join("") || `<div class="empty">لا توجد حركة قاصة.</div>`;
  const productSales = new Map();
  accounting.scopedInvoices().filter((invoice) => !invoice.cancelled).forEach((invoice) => {
    (invoice.lines || []).forEach((line) => {
      const product = repo.state.products.find((item) => item.id === line.productId);
      const key = line.productId || line.productName || "unknown";
      const current = productSales.get(key) || { name: line.productName || product?.name || "منتج", qty: 0 };
      current.qty += number(line.quantity);
      productSales.set(key, current);
    });
  });
  const topProducts = [...productSales.values()].sort((a, b) => b.qty - a.qty).slice(0, 5);
  const maxQty = topProducts[0]?.qty || 1;
  $("#dashboardTopProducts").innerHTML = topProducts.length ? topProducts.map((row) => `
    <div class="dashboard-bar-row"><span>${escapeHtml(row.name)}</span><i><b style="width:${Math.max(8, Math.round((row.qty / maxQty) * 100))}%"></b></i><strong>${number(row.qty)}</strong></div>
  `).join("") : `<div class="empty">لا توجد مبيعات مسجلة.</div>`;
  const trendDays = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(); day.setHours(0, 0, 0, 0); day.setDate(day.getDate() - (6 - index)); return dateOnly(day);
  });
  const trendRows = trendDays.map((day) => ({
    day,
    total: accounting.scopedInvoices().filter((invoice) => !invoice.cancelled && dateOnly(invoice.createdAt || invoice.date) === day).reduce((sum, invoice) => sum + number(invoice.total), 0),
  }));
  const trendMax = Math.max(...trendRows.map((row) => row.total), 1);
  $("#dashboardSalesTrend").innerHTML = `<div class="dashboard-trend-chart">${trendRows.map((row) => `<div class="dashboard-trend-column"><i style="height:${Math.max(8, Math.round((row.total / trendMax) * 100))}%"></i><small>${escapeHtml(row.day.slice(5))}</small></div>`).join("")}</div><div class="dashboard-trend-total"><strong>${money(trendRows.reduce((sum, row) => sum + row.total, 0))}</strong><small>إجمالي آخر 7 أيام</small></div>`;
  const salesTotal = number(t.totalSales);
  const mixTotal = salesTotal + purchaseTotal;
  const salesPercent = mixTotal ? Math.round((salesTotal / mixTotal) * 100) : 0;
  $("#dashboardSalesMix").innerHTML = `<div class="dashboard-donut" style="--sales:${salesPercent}%"><span><strong>${money(mixTotal)}</strong><small>الإجمالي</small></span></div><div class="dashboard-legend"><span><span><i class="sales-dot"></i>المبيعات</span><b>${salesPercent}%</b></span><span><span><i class="purchase-dot"></i>المشتريات</span><b>${100 - salesPercent}%</b></span></div>`;
}

function openDrilldown(target, options = {}) {
  const date = clean(options.date);
  const employeeId = clean(options.employeeId);
  if (employeeId && canUseAllAccounts() && (employeeId === "all" || repo.state.employees.some((employee) => employee.id === employeeId))) {
    repo.state.activeEmployeeId = employeeId;
  }

  if (target === "sales" || target === "customerDebt" || target === "installments") {
    showView("invoiceArchive");
    showInvoiceArchiveTab("customerInvoicesTab");
    setDateRange("customerInvoices", clean(options.dateFrom) || date, clean(options.dateTo) || date);
    if ($("#invoiceArchiveSaleMode")) {
      $("#invoiceArchiveSaleMode").value = target === "customerDebt" ? "customerDebt" : target === "installments" ? "installment" : clean(options.saleMode) || "all";
    }
    if ($("#invoiceArchiveStatus")) $("#invoiceArchiveStatus").value = "all";
    resetListPage("invoiceArchive");
    renderSalesRecentInvoices();
    return;
  }
  if (target === "purchases") {
    showView("invoiceArchive");
    showInvoiceArchiveTab("supplierInvoicesTab");
    return;
  }
  if (target === "customers") {
    showView("customers");
    return;
  }
  if (target === "suppliers") {
    showView("suppliers");
    return;
  }
  if (target === "stock" || target === "lowStock" || target === "outStock") {
    showView("inventory");
    showInventorySection("inventoryBalanceSection");
    const filter = target === "lowStock" ? "low" : target === "outStock" ? "out" : clean(options.stockFilter) || "all";
    if ($("#inventoryStockFilter")) $("#inventoryStockFilter").value = filter;
    resetListPage("inventory");
    renderInventory();
    return;
  }
  if (target === "vouchers") {
    showView("vouchers");
    showVoucherTab("voucherArchiveTab");
    setDateRange("vouchers", clean(options.dateFrom) || date, clean(options.dateTo) || date);
    if ($("#voucherTypeFilter")) $("#voucherTypeFilter").value = clean(options.voucherType) || "all";
    resetListPage("vouchers");
    renderVouchers();
    return;
  }
  if (target === "modonReceivable") {
    showView("carrierInvoices");
    return;
  }
  if (["profit", "profitTotal", "profitCollected", "profitUncollected"].includes(target)) {
    profitDetailFilter = target === "profitCollected" ? "collected" : target === "profitUncollected" ? "uncollected" : "total";
  }

  const reportTab = {
    cash: "reportCashTab",
    profit: "reportProfitsTab",
    profitTotal: "reportProfitsTab",
    profitCollected: "reportProfitsTab",
    profitUncollected: "reportProfitsTab",
    employees: "reportEmployeesTab",
    modon: "reportModonTab",
    audit: "reportAuditTab",
    debts: "reportDebtTab",
    stockReport: "reportStockTab",
  }[target] || "reportSummaryTab";
  repo.state.reportDate = date || today();
  repo.state.reportEmployeeId = employeeId || activeEmployeeId();
  repo.state.reportOperationScope = target === "cash" ? "cash" : target === "salesReport" ? "sales" : "all";
  repo.state.reportSaleModeScope = clean(options.saleMode) || "all";
  setDateRange("reports", clean(options.dateFrom) || repo.state.reportDate, clean(options.dateTo) || repo.state.reportDate);
  if ($("#reportEmployeeScope")) $("#reportEmployeeScope").value = repo.state.reportEmployeeId;
  if ($("#reportOperationScope")) $("#reportOperationScope").value = repo.state.reportOperationScope;
  if ($("#reportSaleModeScope")) $("#reportSaleModeScope").value = repo.state.reportSaleModeScope;
  showView("reports");
  showReportTab(reportTab);
}

function renderInvoiceDetails() {
  const invoice = repo.state.invoices.find((item) => item.id === repo.state.lastSelectedInvoiceId);
  const box = $("#invoiceDetails");
  if (!invoice) {
    box.className = "empty";
    box.textContent = "اختر فاتورة من سجل فواتير الزبائن لعرض تفاصيلها.";
    return;
  }
  const order = getOrderByInvoice(invoice.id);
  box.className = "";
  const lines = invoice.lines || [{ productName: invoice.productName, quantity: invoice.quantity, price: invoice.unitPrice, discount: 0, total: invoice.total }];
  const auditRows = repo.state.invoiceAudits.filter((item) => item.invoiceId === invoice.id);
  const balance = invoiceOpenBalance(invoice) || 0;
  const previousDebt = Math.max((customerOpenDebt(invoice.customerPhone) || 0) - balance, 0);
  box.innerHTML = `
    <header class="invoice-detail-header">
      <div>
        <span class="eyebrow">${escapeHtml(invoice.receiptNo || invoice.number)}</span>
        <h3>${escapeHtml(invoice.number)}</h3>
        <p>${escapeHtml(invoice.customerName)}${customerPhoneLabel(invoice.customerPhone) ? ` · ${escapeHtml(customerPhoneLabel(invoice.customerPhone))}` : ""}</p>
      </div>
      <div class="invoice-detail-status">
        <span class="sale-mode-badge ${invoice.saleMode}">${saleModeLabel(invoice.saleMode)}</span>
        ${invoice.cancelled ? `<span class="badge danger">ملغاة</span>` : `<span class="badge ${balance > 0 ? "issue" : "ok"}">${escapeHtml(invoice.paymentStatus)}</span>`}
      </div>
    </header>
    <div class="invoice-detail-metrics">
      <div><span>صافي الفاتورة</span><strong>${money(invoice.total)}</strong><small>بعد خصم ${money(invoice.invoiceDiscount || 0)}</small></div>
      <div><span>المدفوع</span><strong>${money(number(invoice.paidAmount) + invoicePaidAfterCreation(invoice.id))}</strong><small>${lines.length} بنود</small></div>
      <div class="${balance > 0 ? "outstanding" : ""}"><span>المتبقي الآن</span><strong>${money(balance)}</strong><small>${balance > 0 ? "على هذه الفاتورة" : "مسدد بالكامل"}</small></div>
      <div class="${previousDebt > 0 ? "outstanding" : ""}"><span>الدين السابق</span><strong>${money(previousDebt)}</strong><small>${previousDebt > 0 ? "قبل هذه الفاتورة" : "لا يوجد دين سابق"}</small></div>
      <div class="${previousDebt + balance > 0 ? "outstanding" : ""}"><span>إجمالي المستحق</span><strong>${money(previousDebt + balance)}</strong><small>السابق + الحالي</small></div>
    </div>
    <div class="invoice-detail-info">
      <div><span>الموظف</span><strong>${employeeName(invoice.employeeId)}</strong></div>
      <div><span>رقم الوصل</span><strong>${invoice.receiptNo || invoice.number}</strong></div>
      <div><span>تاريخ الفاتورة</span><strong>${formatDate(invoice.createdAt)}</strong></div>
      <div><span>نوع التسعير</span><strong>${invoice.priceType === "wholesale" ? "سعر الجملة" : "سعر المفرد"}</strong></div>
      ${order ? `<div><span>رقم طلب Modon</span><strong>${order.external_order_id}</strong></div><div><span>صافي التاجر</span><strong>${money(order.merchant_price)}</strong></div>` : ""}
    </div>
    <div class="actions compact-actions invoice-detail-actions">
      <button class="primary" onclick="printSaleInvoice('${invoice.id}')">طباعة</button>
      ${invoice.saleMode !== "modon" && customerPhoneLabel(invoice.customerPhone) ? `<button class="ghost whatsapp-action" onclick="sendSaleInvoiceWhatsApp('${invoice.id}')">إرسال واتساب</button>` : ""}
      ${hasPermission("sales.edit") && !invoice.cancelled ? `<button class="ghost" onclick="editInvoice('${invoice.id}')">تعديل الفاتورة</button>` : ""}
      ${invoice.saleMode !== "modon" && invoice.type !== "return" && !invoice.cancelled ? `<button class="ghost return-invoice-button" onclick="openSalesReturnModal('${invoice.id}')">إرجاع من الفاتورة</button>` : ""}
      ${hasPermission("sales.cancel") && !invoice.cancelled ? `<button class="danger-button" onclick="cancelInvoice('${invoice.id}')">إلغاء الفاتورة</button>` : ""}
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>خصم البند</th><th>الإجمالي</th></tr></thead>
        <tbody>${lines.map((line) => `<tr><td>${escapeHtml(line.productName)}</td><td>${line.quantity}</td><td>${money(line.price)}</td><td>${money(line.discount || 0)}</td><td>${money(line.total)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    ${invoice.installmentSchedule ? `<div class="section-title">جدول الأقساط</div><div class="table-wrap"><table><thead><tr><th>تاريخ الاستحقاق</th><th>المبلغ</th><th>المدفوع</th><th>المتبقي</th><th>الحالة</th></tr></thead><tbody>${invoice.installmentSchedule.map((item, index) => `<tr><td>${item.dueDate}</td><td>${money(item.amount)}</td><td>${money(installmentPaidAmount(invoice.id, index))}</td><td>${money(installmentOpenBalance(invoice, index))}</td><td>${installmentOpenBalance(invoice, index) <= 0 ? "مدفوع" : "غير مدفوع"}</td></tr>`).join("")}</tbody></table></div>` : ""}
    <div class="section-title">سجل الفاتورة</div>
    <div class="ledger">${auditRows.map((item) => `<div class="ledger-row"><span>${escapeHtml(item.action)}<br><small>${formatDate(item.createdAt)} - ${employeeName(item.employeeId)} - ${escapeHtml(item.details || "")}</small></span></div>`).join("") || `<div class="empty">لا توجد أحداث مسجلة لهذه الفاتورة.</div>`}</div>
  `;
}

function returnedQuantityForInvoice(invoiceId, productId) {
  return repo.state.invoices.filter((item) => !item.cancelled && item.type === "return" && item.returnOfInvoiceId === invoiceId)
    .flatMap((item) => item.lines || []).filter((line) => line.productId === productId).reduce((sum, line) => sum + Math.abs(number(line.quantity)), 0);
}

function openSalesReturnModal(invoiceId) {
  const invoice = getInvoice(invoiceId);
  if (!invoice || invoice.cancelled || invoice.type === "return" || invoice.saleMode === "modon") return;
  const modal = $("#salesReturnModal");
  const linesBox = $("#salesReturnLines");
  pendingSalesReturnInvoiceId = invoiceId;
  $("#salesReturnInvoiceLabel").textContent = `${invoice.number} · ${invoice.customerName || "زبون نقدي"}`;
  const lines = invoice.lines || [];
  linesBox.innerHTML = lines.map((line, index) => {
    const returned = returnedQuantityForInvoice(invoiceId, line.productId);
    const available = Math.max(number(line.quantity) - returned, 0);
    return `<div class="sales-return-line ${available <= 0 ? "is-complete" : ""}"><div><strong>${escapeHtml(line.productName)}</strong><small>المباع: ${number(line.quantity)} · المرتجع: ${returned}</small></div><label>الكمية<input type="number" min="0" max="${available}" step="any" value="0" data-return-index="${index}" data-return-max="${available}" data-return-price="${number(line.price)}" ${available <= 0 ? "disabled" : ""}></label></div>`;
  }).join("");
  updateSalesReturnTotal();
  modal.classList.remove("hidden"); modal.setAttribute("aria-hidden", "false");
}

function closeSalesReturnModal() {
  const modal = $("#salesReturnModal");
  pendingSalesReturnInvoiceId = null;
  modal?.classList.add("hidden"); modal?.setAttribute("aria-hidden", "true");
}

function updateSalesReturnTotal() {
  const total = $$("#salesReturnLines [data-return-index]").reduce((sum, input) => sum + number(input.value) * number(input.dataset.returnPrice), 0);
  if ($("#salesReturnTotal")) $("#salesReturnTotal").textContent = money(total);
}

async function saveSalesReturn(event) {
  event.preventDefault();
  const original = getInvoice(pendingSalesReturnInvoiceId);
  if (!original) return closeSalesReturnModal();
  const selected = $$("#salesReturnLines [data-return-index]").map((input) => ({ index: Number(input.dataset.returnIndex), quantity: Math.min(Math.max(number(input.value), 0), number(input.dataset.returnMax)) })).filter((row) => row.quantity > 0);
  if (!selected.length) return alert("اختر كمية واحدة على الأقل للإرجاع.");
  const originalLines = original.lines || [];
  const lines = selected.map(({ index, quantity }) => {
    const source = originalLines[index];
    const ratio = number(source.quantity) ? quantity / number(source.quantity) : 0;
    return { productId: source.productId, productName: source.productName, quantity, price: number(source.price), unitPrice: number(source.price), discount: number(source.discount) * ratio, total: Math.round(number(source.total) * ratio) };
  });
  const total = lines.reduce((sum, line) => sum + line.total, 0);
  const originalPaid = Math.min(number(original.paidAmount) + invoicePaidAfterCreation(original.id), number(original.total));
  const cashRefund = Math.min(total, originalPaid);
  const debtReduction = Math.max(total - cashRefund, 0);
  const employeeId = currentEmployee()?.id || "admin";
  const returnedInvoice = { id: crypto.randomUUID(), number: uniqueDocumentNumber("RET"), receiptNo: uniqueDocumentNumber("RCP"), type: "return", returnOfInvoiceId: original.id, employeeId, productId: lines[0].productId, productName: lines.length === 1 ? lines[0].productName : `${lines.length} منتجات`, lines: lines.map((line) => ({ ...line, quantity: -line.quantity, total: -line.total })), customerName: original.customerName, customerPhone: original.customerPhone, quantity: -lines.reduce(sumBy("quantity"), 0), subtotal: -total, invoiceDiscount: 0, paidAmount: -cashRefund, remaining: -debtReduction, receivableAmount: -debtReduction, total: -total, saleMode: cashRefund > 0 ? "cash" : "customerDebt", paymentStatus: "مرتجع", deliveryStatus: "لا يوجد توصيل", notes: clean(new FormData(event.target).get("notes")), createdAt: now() };
  try {
    await commitConfirmedMutation(async () => {
      repo.state.invoices.unshift(returnedInvoice);
      lines.forEach((line) => addStockMovement(line.productId, returnedInvoice.id, line.quantity * -1, "إرجاع مبيعات", employeeId));
      if (cashRefund > 0) addCash(-cashRefund, "رد مبلغ إرجاع مبيعات", returnedInvoice.number, employeeId);
      if (debtReduction > 0) repo.state.customerDebts.unshift({ id: crypto.randomUUID(), invoiceId: returnedInvoice.id, employeeId, customerName: original.customerName, customerPhone: original.customerPhone, amount: -debtReduction, type: "customerDebt", createdAt: now() });
      addInvoiceAudit(returnedInvoice.id, "إرجاع جزئي من فاتورة", employeeId, `إرجاع ${money(total)} من ${original.number}`);
      addAudit("إرجاع مبيعات", "invoice", returnedInvoice.id, returnedInvoice.number, money(total), null, returnedInvoice);
    });
    closeSalesReturnModal(); renderAll();
    repo.state.lastSelectedInvoiceId = original.id; renderInvoiceDetails();
  } catch (error) { notifyOperationError(error, "تعذر حفظ إرجاع المبيعات"); }
}

function renderOrders() {
  renderModonSimpleCenter();
  renderModonDailyPanel();
  renderModonReconciliation();
  renderModonLiveStats();
  renderModonExternalOrders();
  renderInternalOrders();
  renderCarrierInvoices();
}

function renderModonWorkspaceChrome() {
  const snapshot = repo.state.modonExternalStats;
  const syncLabel = snapshot?.fetchedAt ? formatDate(snapshot.fetchedAt) : "لم تتم المزامنة بعد";
  $$("[data-modon-sync-time]").forEach((node) => { node.textContent = syncLabel; });
  $$(".modon-suite-state").forEach((node) => {
    node.classList.toggle("synced", Boolean(snapshot?.fetchedAt));
    node.classList.toggle("waiting", !snapshot?.fetchedAt);
  });
}

function selectedStoredModonHubTab() {
  try {
    const stored = localStorage.getItem(MODON_HUB_TAB_STORAGE_KEY);
    return ["overview", "orders", "collection", "returns", "audit"].includes(stored) ? stored : "overview";
  } catch {
    return "overview";
  }
}

function showModonHubTab(tabId = "overview") {
  const selected = ["overview", "orders", "collection", "returns", "audit"].includes(tabId) ? tabId : "overview";
  $$("#modonFollow [data-modon-hub-tab]").forEach((button) => {
    const active = button.dataset.modonHubTab === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  $$("#modonFollow [data-modon-hub-panel]").forEach((panel) => {
    const active = panel.dataset.modonHubPanel === selected;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
  try { localStorage.setItem(MODON_HUB_TAB_STORAGE_KEY, selected); } catch {}
  if (selected !== "returns" && returnScannerActive) stopReturnCameraScan();
  if (selected === "returns") setTimeout(() => $("#returnBarcodeInput")?.focus(), 50);
  return selected;
}

function showModonFollowTab(tabId = "internal") {
  const mapped = {
    internal: "orders",
    external: "audit",
    reconciliation: "audit",
    overview: "overview",
    collection: "collection",
    returns: "returns",
    orders: "orders",
    audit: "audit",
  }[tabId] || "orders";
  return showModonHubTab(mapped);
}

function openModonAdvancedTab(tabId) {
  const details = $("#modonFollow");
  showModonFollowTab(tabId);
  details?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function runModonSimpleAction(action) {
  if (action === "create") {
    showView("orders");
    return;
  }
  if (action === "delivered") {
    showView("modonFollow");
    showModonHubTab("collection");
    return;
  }
  if (action === "returns") {
    showView("modonFollow");
    showModonHubTab("returns");
    return;
  }
  if (action === "print") {
    showView("modonToday");
    return;
  }
  if (action === "match") {
    showView("modonFollow");
    showModonHubTab("audit");
    return;
  }
  showView("modonFollow");
  showModonHubTab("orders");
  if ($("#orderStatusFilter")) $("#orderStatusFilter").value = "all";
  resetListPage("internalOrders");
  renderInternalOrders();
  setTimeout(() => $("#orderSearch")?.focus(), 250);
}

function modonSystemRange() {
  const minimum = modonReconciliationStartDate();
  const scope = repo.state.settings?.modonHubPeriodScope || "system";
  if (scope === "today") return { from: today(), to: today() };
  if (scope === "month") {
    const start = new Date();
    start.setDate(1);
    const from = dateOnly(start);
    return { from: from < minimum ? minimum : from, to: today() };
  }
  if (scope === "custom") {
    // Custom range, never allowed to reach before the system start date.
    let from = clean(repo.state.settings?.modonHubCustomFrom) || minimum;
    let to = clean(repo.state.settings?.modonHubCustomTo) || today();
    if (from < minimum) from = minimum;
    if (to < minimum) to = minimum;
    if (to > today()) to = today();
    if (from > to) from = to;
    return { from, to };
  }
  return { from: minimum, to: today() };
}

function syncModonHubCustomRange() {
  const minimum = modonReconciliationStartDate();
  const scope = repo.state.settings?.modonHubPeriodScope || "system";
  const wrap = $("#modonHubCustomRange");
  const fromInput = $("#modonHubCustomFrom");
  const toInput = $("#modonHubCustomTo");
  const clampDate = (value, fallback) => {
    let date = clean(value) || fallback;
    if (date < minimum) date = minimum;
    if (date > today()) date = today();
    return date;
  };
  if (fromInput) { fromInput.min = minimum; fromInput.max = today(); fromInput.value = clampDate(repo.state.settings?.modonHubCustomFrom, minimum); }
  if (toInput) { toInput.min = minimum; toInput.max = today(); toInput.value = clampDate(repo.state.settings?.modonHubCustomTo, today()); }
  if (wrap) wrap.hidden = scope !== "custom";
}

function deliveryInvoiceBelongsToSystemRange(invoice, range = modonSystemRange()) {
  if (dateMatchesRange(modonReconciliationItemDate(invoice), range)) return true;
  return (invoice.order_ids || []).some((orderId) => {
    const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
    return order && dateMatchesRange(modonReconciliationItemDate(order), range);
  });
}

function returnStatementBelongsToSystemRange(invoice, range = modonSystemRange()) {
  // Visibility is decided by the actual return events, not by the snapshot's
  // stored range. Evaluating per order keeps returns visible after a period
  // scope change or a manual fetch that stored no explicit range, while still
  // showing only the returns whose event date falls inside the current period.
  const entries = carrierReturnEntries(invoice);
  const matchesByEvent = entries.some(({ remoteOrder, localOrder }) => {
    const eventDate = remoteOrder
      ? modonReturnEventDate(remoteOrder)
      : localOrder?.returned_received_at || modonReconciliationItemDate(localOrder);
    return dateMatchesRange(eventDate, range);
  });
  if (matchesByEvent) return true;
  // Fallback for statements whose orders carry no readable date: show them when
  // the snapshot was captured for a range that overlaps the current period.
  const from = clean(invoice?.snapshot_range_from);
  const to = clean(invoice?.snapshot_range_to);
  if (from && to && range.from && range.to) {
    return from <= range.to && to >= range.from;
  }
  return false;
}

function dedupeModonDeliveredInvoices(invoices = []) {
  const grouped = new Map();
  invoices.forEach((invoice) => {
    const key = clean(invoice.external_invoice_id) || invoice.id;
    const previous = grouped.get(key);
    if (!previous) {
      grouped.set(key, invoice);
      return;
    }
    const previousScore = (previous.status === "تم تأكيد القبض" ? 100000 : 0) + carrierInvoiceMatchedCount(previous);
    const currentScore = (invoice.status === "تم تأكيد القبض" ? 100000 : 0) + carrierInvoiceMatchedCount(invoice);
    if (currentScore > previousScore) grouped.set(key, invoice);
  });
  return Array.from(grouped.values());
}

function renderModonSimpleCenter() {
  const range = modonSystemRange();
  const archivedOrders = accounting.scopedOrders();
  const periodOrders = archivedOrders.filter((order) => dateMatchesRange(modonReconciliationItemDate(order), range));
  const activePeriodOrders = periodOrders.filter((order) => !isCancelledModonOrder(order));
  const reconciliation = buildModonReconciliation(activeEmployeeId(), range);
  const scopedInvoices = dedupeModonDeliveredInvoices(repo.state.deliveryInvoices
    .filter((invoice) => invoice.type !== "returned")
    .filter((invoice) => activeEmployeeId() === "all" || invoice.employeeId === activeEmployeeId())
    .filter((invoice) => deliveryInvoiceBelongsToSystemRange(invoice, range)));
  const readyInvoices = scopedInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "ready");
  const readyAmount = readyInvoices.reduce(sumBy("merchant_price"), 0);
  const inTransit = activePeriodOrders.filter((order) => ["new", "with_courier"].includes(order.status)).length;
  const issues = activePeriodOrders.filter((order) => order.status === "issue").length;
  const returns = reconciliation.returnedPending.length;
  if ($("#modonHubArchiveCount")) $("#modonHubArchiveCount").textContent = String(archivedOrders.length);
  if ($("#modonHubPeriodCount")) $("#modonHubPeriodCount").textContent = String(periodOrders.length);

  const missing = reconciliation.missing.length;
  const unprinted = scopedTodayModonOrders().filter((order) => isModonOrderBeforeDelivery(order) && !order.printed_at).length;

  // Status statistics row — respects the hub's date range, and each card jumps to
  // the relevant tab. "Returned with courier" = still open in Modon but its live status
  // says it is being returned (in transit back), not yet received into stock.
  const statsEl = $("#modonNowStats");
  if (statsEl) {
    const deliveredCount = activePeriodOrders.filter((order) => modonOrderWorkStatus(order) === "delivered").length;
    const inDeliveryCount = activePeriodOrders.filter((order) => ["new", "with_courier"].includes(order.status)).length;
    const returnPendingCount = reconciliation.returnedPending.length;
    const returnReceivedCount = activePeriodOrders.filter((order) => order.returned_received_stock).length;
    statsEl.innerHTML = [
      ["مُسلّمة", deliveredCount, "#0f766e", "jumpToModonOrders('delivered')"],
      ["قيد التوصيل", inDeliveryCount, "#2563eb", "jumpToModonOrders('pending')"],
      ["راجع بانتظار الاستلام", returnPendingCount, "#b45309", "jumpToModonOrders('return_pending')"],
      ["الرواجع المستلمة", returnReceivedCount, "#b91c1c", "jumpToModonOrders('return_received')"],
      ["فواتير التحصيل", scopedInvoices.length, "#7c3aed", "showModonHubTab('collection')"],
    ].map(([label, value, color, action]) => `
      <button type="button" onclick="${action}" style="flex:1;min-width:118px;background:#fff;border:1px solid #e7ede9;border-top:3px solid ${color};border-radius:12px;padding:12px 10px;cursor:pointer;text-align:center;">
        <span style="display:block;color:#6b7280;font-size:13px;margin-bottom:4px;">${label}</span>
        <strong style="display:block;font-size:22px;color:${color};">${value}</strong>
      </button>`).join("");
  }

  // New "Now" guided screen: one prioritised list of single-action cards.
  const list = $("#modonNowList");
  if (!list) return;

  const cards = [];
  if (readyInvoices.length) {
    cards.push({ group: "أموال بانتظارك", tone: "money", icon: "◉", tab: "collection",
      kicker: "تحصيل جاهز",
      title: `${money(readyAmount)} بانتظار إدخالها للقاصة`,
      sub: `${readyInvoices.length} ${readyInvoices.length === 1 ? "فاتورة مطابقة" : "فواتير مطابقة"} بالكامل مع سجلك`,
      cta: "استلام" });
  }
  if (returns) {
    cards.push({ group: "مخزون بانتظارك", tone: "ret", icon: "▤", tab: "returns",
      kicker: "راجع بانتظار الاستلام",
      title: `${returns} ${returns === 1 ? "طلب راجع" : "طلبات راجعة"} بانتظار الاستلام`,
      sub: "لن تعود إلى المخزون قبل تأكيدك",
      cta: "استلام" });
  }
  if (missing) {
    cards.push({ group: "يحتاج انتباهك", tone: "warn", icon: "!", tab: "audit",
      kicker: "طلبات لم تظهر في مدن",
      title: `${missing} ${missing === 1 ? "طلب في نظامك" : "طلبات في نظامك"} لم تظهر في مدن`,
      sub: "قد تكون مدن حذفتها — افتح المطابقة للتحقق",
      cta: "راجع" });
  }
  if (issues) {
    cards.push({ group: "يحتاج انتباهك", tone: "warn", icon: "!", tab: "orders",
      kicker: "طلبات بحالة مشكلة",
      title: `${issues} ${issues === 1 ? "طلب بحالة مشكلة" : "طلبات بحالة مشكلة"}`,
      sub: "افتح الطلب لاتخاذ الإجراء المناسب",
      cta: "افتح" });
  }
  if (unprinted) {
    cards.push({ group: "تجهيز اليوم", tone: "prep", icon: "⎙", tab: "orders",
      kicker: "تجهيز اليوم",
      title: `${unprinted} ${unprinted === 1 ? "طلب جاهز" : "طلبات جاهزة"} غير مطبوعة`,
      sub: "اطبعها أو علّمها «تم التجهيز»",
      cta: "تجهيز" });
  }

  if (!cards.length) {
    list.innerHTML = `<div class="modon-now-clear"><span class="ic">✓</span><div><strong>كل شيء تحت السيطرة</strong><small>لا توجد إجراءات عاجلة الآن. اضغط «تحديث بيانات Modon» لجلب أحدث حالة من مدن.</small></div></div>`;
    return;
  }

  let html = "";
  let lastGroup = null;
  cards.forEach((card) => {
    if (card.group !== lastGroup) { html += `<div class="modon-now-group">${escapeHtml(card.group)}</div>`; lastGroup = card.group; }
    html += `
      <button class="modon-now-action ${card.tone}" type="button" data-modon-hub-tab="${card.tab}">
        <span class="mna-ic" aria-hidden="true">${card.icon}</span>
        <span class="mna-body">
          <span class="mna-k">${escapeHtml(card.kicker)}</span>
          <span class="mna-t">${escapeHtml(card.title)}</span>
          <span class="mna-s">${escapeHtml(card.sub)}</span>
        </span>
        <span class="mna-cta">${escapeHtml(card.cta)} ←</span>
      </button>`;
  });
  list.innerHTML = html;
}

function runModonAction(action) {
  if (action === "unprinted") {
    showView("modonToday");
    return;
  }
  if (action === "collection") {
    showView("modonFollow");
    showModonHubTab("collection");
    return;
  }
  if (action === "returns") {
    showView("modonFollow");
    showModonHubTab("returns");
    return;
  }
  if (action === "missing") {
    showView("modonFollow");
    showModonHubTab("audit");
    $("#modonReconciliationDetails")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  showView("modonFollow");
  showModonHubTab("orders");
  if ($("#orderStatusFilter")) $("#orderStatusFilter").value = action === "issues" ? "issue" : "pending";
  resetListPage("internalOrders");
  renderInternalOrders();
}

function renderModonActionQueue() {
  const target = $("#modonActionQueue");
  if (!target) return;
  const orders = accounting.scopedOrders();
  const reconciliation = buildModonReconciliation();
  const unprinted = scopedTodayModonOrders().filter((order) => isModonOrderBeforeDelivery(order) && !order.printed_at);
  const issues = orders.filter((order) => order.status === "issue");
  const cards = [
    { action: "issues", label: "مشاكل تحتاج متابعة", value: issues.length, note: issues.length ? "افتح الطلبات المعطلة" : "لا توجد مشاكل مفتوحة", kind: issues.length ? "danger" : "clear" },
    { action: "unprinted", label: "طلبات غير مطبوعة", value: unprinted.length, note: unprinted.length ? "جاهزة ضمن تجهيز اليوم" : "كل طلبات اليوم مطبوعة", kind: unprinted.length ? "attention" : "clear" },
    { action: "collection", label: "واصل بانتظار القبض", value: reconciliation.deliveredUnpaid.length, note: money(reconciliation.deliveredUnpaid.reduce(sumBy("merchant_price"), 0)), kind: reconciliation.deliveredUnpaid.length ? "money" : "clear" },
    { action: "returns", label: "راجع بانتظار المخزون", value: reconciliation.returnedPending.length, note: reconciliation.returnedPending.length ? "يحتاج استلامًا موثقًا" : "لا يوجد راجع معلق", kind: reconciliation.returnedPending.length ? "return" : "clear" },
    { action: "missing", label: "طلبات غير مطابقة", value: reconciliation.missing.length, note: reconciliation.missing.length ? "غير ظاهرة في حساب Modon" : "المطابقة مستقرة", kind: reconciliation.missing.length ? "danger" : "clear" },
  ];
  target.innerHTML = cards.map((card) => `
    <button class="modon-action-card ${card.kind}" type="button" data-modon-action="${card.action}">
      <span>${card.label}</span>
      <strong>${card.value}</strong>
      <small>${card.note}</small>
      <i aria-hidden="true">فتح ←</i>
    </button>
  `).join("");
}

function renderInternalOrders() {
  const container = $("#modonOrdersCards");
  if (!container) return;
  const filter = $("#orderStatusFilter")?.value || "all";
  const query = normalizeSearch($("#orderSearch")?.value || "");
  const rows = accounting.scopedOrders()
    .filter((order) => {
      if (filter === "all") return true;
      if (filter === "unprinted") return isModonOrderBeforeDelivery(order) && !order.printed_at;
      if (filter === "pending") return ["new", "with_courier"].includes(order.status);
      if (filter === "return_pending") return order.status === "returned" && !order.returned_received_stock;
      if (filter === "return_received") return order.status === "returned" && order.returned_received_stock;
      return order.status === filter;
    })
    .filter((order) => {
      const invoice = getInvoice(order.local_order_id);
      const text = normalizeSearch([
        order.external_order_id,
        order.internal_order_no,
        order.customer_name,
        order.customer_phone,
        order.product_name,
        order.modon_account,
        invoice?.number,
        employeeName(order.employeeId),
      ].join(" "));
      return !query || text.includes(query);
    })
    .sort((a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at));
  const pageInfo = paginateCollection(rows, "internalOrders");
  const statusClassMap = { new: "st-new", with_courier: "st-courier", delivered: "st-delivered", issue: "st-issue", returned: "st-returned" };
  container.innerHTML = pageInfo.rows.map((order) => {
    const invoice = getInvoice(order.local_order_id);
    const unprinted = isModonOrderBeforeDelivery(order) && !order.printed_at;
    const statusLabel = unprinted ? "جديد · غير مطبوع" : (statusMap[order.status]?.label || order.modon_status_text || order.status || "-");
    const statusClass = unprinted ? "st-new" : (statusClassMap[order.status] || "st-new");
    const product = escapeHtml(order.product_name || invoice?.productName || "");
    const city = escapeHtml(order.city_name || "");
    const when = order.updated_at || order.created_at ? formatDate(order.updated_at || order.created_at) : "";
    const reference = escapeHtml(order.external_order_id || order.internal_order_no || invoice?.number || "-");
    const meta = [product, city, when].filter(Boolean).map((part) => `<span>${part}</span>`).join("");
    return `
      <article class="mo-card" onclick="openModonOrderDrawer('${order.id}')">
        <div class="mo-main">
          <div class="mo-who">${escapeHtml(order.customer_name || "-")} <span class="mo-ref">#${reference}</span></div>
          <div class="mo-meta">${meta || "<span>—</span>"}</div>
        </div>
        <div class="mo-side">
          <span class="mo-st ${statusClass}">${escapeHtml(statusLabel)}</span>
          ${unprinted ? `<button class="mo-prep" type="button" onclick="event.stopPropagation();markModonOrderPrepared('${order.id}')">✓ تم التجهيز</button>` : ""}
        </div>
      </article>
    `;
  }).join("") || `<div class="modon-now-clear"><span class="ic">✓</span><div><strong>لا توجد طلبات مطابقة</strong><small>غيّر الفلتر أو امسح البحث لعرض المزيد.</small></div></div>`;
  renderListPagination("#internalOrdersPagination", "internalOrders", pageInfo);
}

// Manual "mark as prepared": clears an order from the unprinted list when it
// was printed from Modon's own app (Modon's API exposes no print signal).
async function markModonOrderPrepared(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order || order.printed_at) return;
  order.printed_at = now();
  order.updated_at = now();
  await saveAfterExternalChange(null, "جاري حفظ حالة التجهيز...");
  renderAll();
}

function openModonOrderDrawer(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return;
  const invoice = getInvoice(order.local_order_id);
  const drawer = $("#modonOrderDrawer");
  const backdrop = $("#modonOrderDrawerBackdrop");
  if (!drawer || !backdrop) return;
  $("#modonOrderDrawerTitle").textContent = `طلب ${order.external_order_id || order.internal_order_no || "Modon"}`;
  $("#modonOrderDrawerSubtitle").textContent = `${order.customer_name || invoice?.customerName || "-"} · ${employeeName(order.employeeId)}`;
  $("#modonOrderDrawerBody").innerHTML = modonOrderDrawerHtml(order, invoice);
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modon-drawer-open");
  setTimeout(() => $("#closeModonOrderDrawer")?.focus(), 20);
}

function closeModonOrderDrawer() {
  const drawer = $("#modonOrderDrawer");
  const backdrop = $("#modonOrderDrawerBackdrop");
  drawer?.classList.remove("open");
  drawer?.setAttribute("aria-hidden", "true");
  backdrop?.classList.add("hidden");
  backdrop?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modon-drawer-open");
}

// Manually mark a Modon order as a return when Modon's status text is
// ambiguous (it reuses the "received by customer" wording for both a real
// delivery and a merchant-received return). Sticky across refreshes; stock is
// only changed later when the user confirms receipt of the return.
async function reclassifyModonOrderAsReturn(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return;
  const financeWarning = order.deliver_confirmed_fin
    ? "\n\nتنبيه: هذا الطلب سبق تأكيد قبضه ماليًا — راجع التسوية المالية بعد التصنيف."
    : "";
  if (!confirm(`تأكيد: الطلب ${order.external_order_id || order.internal_order_no || ""} راجع فعليًا وقد استلمته؟\nسيُصنَّف كراجع ويبقى كذلك بعد التحديث. لن يتغيّر المخزون إلا بعد تأكيد الاستلام.${financeWarning}`)) return;
  const before = snapshot(order);
  order.status = "returned";
  order.manual_return_reclassified = true;
  order.manual_return_reclassified_at = now();
  order.updated_at = now();
  const note = "تصنيف يدوي كراجع: حالة مدن كانت مبهمة (نفس نص التسليم يُستخدم للراجع المستلم).";
  if (!clean(order.issue_notes).includes(note)) order.issue_notes = [order.issue_notes, note].filter(Boolean).join(" - ");
  addAudit("تصنيف طلب Modon كراجع يدويًا", "modonOrder", order.id, order.external_order_id || order.internal_order_no, note, before, order);
  await saveAfterExternalChange(null, "جاري حفظ تصنيف الراجع...");
  renderAll();
  openModonOrderDrawer(orderId);
}

async function undoModonReturnReclassify(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order || !order.manual_return_reclassified) return;
  if (order.returned_received_stock) { alert("لا يمكن التراجع بعد استلام الراجع إلى المخزون."); return; }
  if (!confirm("التراجع عن تصنيف الراجع سيعيد الطلب إلى حالته من مدن عند التحديث القادم. متابعة؟")) return;
  const before = snapshot(order);
  delete order.manual_return_reclassified;
  delete order.manual_return_reclassified_at;
  order.status = modonLiveStatusCategory(order.raw_last_modon || {}) === "returned" ? "returned" : "delivered";
  order.updated_at = now();
  addAudit("تراجع عن تصنيف راجع يدوي", "modonOrder", order.id, order.external_order_id || order.internal_order_no, "أُلغي التصنيف اليدوي كراجع", before, order);
  await saveAfterExternalChange(null, "جاري التراجع...");
  renderAll();
  openModonOrderDrawer(orderId);
}

function modonOrderDrawerHtml(order, invoice) {
  const productName = order.product_name || invoice?.productName || "-";
  const quantity = number(order.quantity || invoice?.quantity || 0);
  const address = [order.city_name, order.area_name, order.address].filter(Boolean).join(" - ") || "-";
  const events = modonOrderTimelineEvents(order, invoice);
  const actions = [
    `<button class="primary" type="button" onclick="printModonOrder('${order.id}')">طباعة الوصل</button>`,
    canEditModonOrder(order) ? `<button class="ghost" type="button" onclick="closeModonOrderDrawer();editModonOrderLocal('${order.id}')">تعديل الطلب</button>` : "",
    isModonOrderBeforeDelivery(order) ? `<button class="danger-button" type="button" onclick="closeModonOrderDrawer();cancelModonOrderLocal('${order.id}')">إلغاء الطلب</button>` : "",
    order.status === "returned" && !order.returned_received_stock ? `<button class="primary" type="button" onclick="confirmReturnedOrder('${order.id}').then((ok)=>{if(ok)openModonOrderDrawer('${order.id}')})">استلام الراجع</button>` : "",
    !["returned", "cancelled"].includes(order.status) && !order.modon_cancelled ? `<button class="ghost" type="button" onclick="reclassifyModonOrderAsReturn('${order.id}')">هذا الطلب راجع — صنّفه راجعًا</button>` : "",
    order.manual_return_reclassified ? `<button class="ghost" type="button" onclick="undoModonReturnReclassify('${order.id}')">تراجع عن تصنيف الراجع</button>` : "",
  ].filter(Boolean).join("");
  return `
    <div class="modon-order-file-grid">
      <div><span>الحالة الحالية</span><strong>${statusMap[order.status]?.label || order.status || "-"}</strong></div>
      <div><span>حساب Modon</span><strong>${escapeHtml(employeeName(order.employeeId))}</strong></div>
      <div><span>رقم Modon</span><strong>${escapeHtml(order.external_order_id || "-")}</strong></div>
      <div><span>QR ID</span><strong>${escapeHtml(order.qr_id || "-")}</strong></div>
      <div><span>الزبون</span><strong>${escapeHtml(order.customer_name || invoice?.customerName || "-")}</strong></div>
      <div><span>الهاتف</span><strong>${escapeHtml(order.customer_phone || invoice?.customerPhone || "-")}</strong></div>
      <div><span>المنتج</span><strong>${escapeHtml(productName)}</strong></div>
      <div><span>الكمية</span><strong>${quantity}</strong></div>
      <div><span>المبلغ</span><strong>${money(order.price || invoice?.total)}</strong></div>
      <div><span>صافي التاجر</span><strong>${money(order.merchant_price)}</strong></div>
      <div><span>حالة القاصة</span><strong>${order.deliver_confirmed_fin ? "تم قبضه" : "لم يدخل القاصة"}</strong></div>
      <div><span>العنوان</span><strong>${escapeHtml(address)}</strong></div>
    </div>
    <div class="modon-order-drawer-actions">${actions}</div>
    <section class="panel"><div class="panel-head"><div><span class="eyebrow">مسار التتبع</span><h3>الحالات والحركات المحفوظة</h3></div></div>
      <div class="modon-timeline">${events.map((event) => `
        <div class="timeline-item ${escapeAttr(event.kind || "")}"><div class="timeline-dot"></div><div class="timeline-body"><strong>${escapeHtml(event.title)}</strong><p>${escapeHtml(event.description || "")}</p><small>${event.date ? formatDate(event.date) : "-"} · ${escapeHtml(event.actor || "")}</small></div></div>
      `).join("") || `<div class="empty">لا توجد أحداث محفوظة لهذا الطلب.</div>`}</div>
    </section>`;
}

function showModonOrderTimeline(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return;
  const invoice = getInvoice(order.local_order_id);
  const modal = $("#carrierInvoiceModal");
  $("#carrierInvoiceModalTitle").textContent = `سجل طلب Modon ${order.external_order_id || order.internal_order_no}`;
  $("#carrierInvoiceModalSubtitle").textContent = `${order.customer_name || invoice?.customerName || "-"} - ${employeeName(order.employeeId)}`;
  $("#carrierInvoiceModalBody").innerHTML = modonOrderTimelineHtml(order, invoice);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function modonOrderTimelineHtml(order, invoice) {
  const events = modonOrderTimelineEvents(order, invoice);
  return `
    <div class="audit-meta">
      ${auditMetaItem("رقم Modon", order.external_order_id || "-")}
      ${auditMetaItem("الحالة", `${statusMap[order.status]?.label || order.status} ${stripTags(modonAccountingBadge(order))}`)}
      ${auditMetaItem("المنتج", order.product_name || invoice?.productName || "-")}
      ${auditMetaItem("صافي التاجر", money(order.merchant_price))}
      ${auditMetaItem("المخزون", order.returned_received_stock ? "تم استلام الراجع" : order.status === "returned" ? "راجع غير مستلم" : "خرج مع الطلب")}
      ${auditMetaItem("القاصة", order.deliver_confirmed_fin ? "تم قبضه" : "لم يدخل القاصة")}
    </div>
    <div class="modon-timeline">
      ${events.map((event) => `
        <div class="timeline-item ${escapeAttr(event.kind || "")}">
          <div class="timeline-dot"></div>
          <div class="timeline-body">
            <strong>${escapeHtml(event.title)}</strong>
            <p>${escapeHtml(event.description || "")}</p>
            <small>${event.date ? formatDate(event.date) : "-"} - ${escapeHtml(event.actor || "")}</small>
          </div>
        </div>
      `).join("") || `<div class="empty">لا توجد أحداث محفوظة لهذا الطلب.</div>`}
    </div>
  `;
}

function modonOrderTimelineEvents(order, invoice) {
  const events = [];
  const push = (title, description, date, kind = "", actor = "") => {
    events.push({ title, description, date, kind, actor });
  };
  push("إنشاء الطلب داخليًا", `${order.internal_order_no || invoice?.number || "-"} - ${order.product_name || invoice?.productName || ""}`, order.created_at || invoice?.createdAt, "created", employeeName(order.employeeId));
  push("إرسال الطلب إلى Modon", `رقم Modon: ${order.external_order_id || "-"} / QR: ${order.qr_id || "-"}`, order.created_at, "modon", employeeName(order.employeeId));
  if (order.modon_status_text) push("آخر حالة من Modon", order.modon_status_text, order.updated_at || order.modon_updated_at, "status", "Modon");
  if (order.issue_notes) push("ملاحظة مشكلة", order.issue_notes, order.updated_at, "issue", "Modon");
  repo.state.webhookLogs
    .filter((log) => clean(log.external_order_id) === clean(order.external_order_id))
    .forEach((log) => push("Webhook من Modon", clean(log.payload?.status || log.event_type || "تحديث حالة"), log.created_at, "status", "Modon"));
  repo.state.deliveryInvoices
    .filter((deliveryInvoice) => (deliveryInvoice.order_ids || []).includes(order.id))
    .forEach((deliveryInvoice) => {
      const isReturn = deliveryInvoice.type === "returned";
      push(isReturn ? "دخل في كشف راجع Modon" : "دخل في فاتورة واصل Modon", `${deliveryInvoice.external_invoice_id} - ${deliveryInvoice.status}`, deliveryInvoice.modon_created_at || deliveryInvoice.created_at, isReturn ? "return" : "invoice", "Modon");
      if (!isReturn && deliveryInvoice.status === "تم تأكيد القبض") push("تأكيد قبض فاتورة Modon", money(deliveryInvoice.merchant_price), deliveryInvoice.received_at || deliveryInvoice.updated_at || deliveryInvoice.created_at, "cash", employeeName(deliveryInvoice.received_by || order.employeeId));
      if (isReturn && order.returned_received_stock) push("استلام الراجع في المخزون", `${order.product_name} - كمية ${number(order.quantity || invoice?.quantity || 0)}`, order.returned_received_at || deliveryInvoice.updated_at, "stock", employeeName(order.returned_received_by || order.employeeId));
    });
  repo.state.stockMovements
    .filter((movement) => movement.meta?.orderId === order.id || movement.meta?.externalOrderId === order.external_order_id)
    .forEach((movement) => push("حركة مخزون", `${movement.reason}: ${movement.quantity}`, movement.createdAt, "stock", employeeName(movement.employeeId)));
  repo.state.cashTransactions
    .filter((cash) => cash.reference === order.external_order_id || (invoice && cash.reference === invoice.number))
    .forEach((cash) => push("حركة قاصة", `${cash.reason}: ${money(cash.amount)}`, cash.createdAt, "cash", employeeName(cash.employeeId)));
  repo.state.auditLogs
    .filter((audit) => {
      const text = [audit.entityId, audit.ref, audit.details].map(clean).join(" ");
      return text.includes(order.id) || text.includes(order.external_order_id) || (invoice && text.includes(invoice.number));
    })
    .forEach((audit) => push(audit.action, audit.details || audit.ref || "", audit.createdAt, "audit", employeeName(audit.employeeId || audit.userId)));
  return events
    .filter((event) => event.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function startModonAutoSync() {
  if (modonAutoSyncTimer) return;
  const snapshot = repo.state.modonExternalStats;
  const isStale = !snapshot?.fetchedAt || Date.now() - new Date(snapshot.fetchedAt).getTime() > 60000;
  if (isStale) syncModonLiveOrders({ silent: true });
  modonAutoSyncTimer = setInterval(() => {
    if ($(".view.active")?.id === "modonFollow") syncModonLiveOrders({ silent: true });
  }, MODON_AUTO_SYNC_MS);
}

function stopModonAutoSync() {
  if (!modonAutoSyncTimer) return;
  clearInterval(modonAutoSyncTimer);
  modonAutoSyncTimer = null;
}

function setFullModonMatchStep(stepId, state, text) {
  const step = $(`[data-full-match-step="${stepId}"]`);
  if (!step) return;
  step.classList.remove("running", "done", "failed");
  if (state) step.classList.add(state);
  const status = step.querySelector("small");
  if (status) status.textContent = text;
}

function setModonMatchProgress(percent, status, detail = "") {
  setModonCenterProgress(percent, status, detail);
}

function resetFullModonMatchProgress() {
  ["orders", "invoices", "returns"].forEach((stepId) => setFullModonMatchStep(stepId, "", "بانتظار البدء"));
  const resultBox = $("#modonFullMatchResult");
  if (resultBox) {
    resultBox.classList.add("hidden");
    resultBox.classList.remove("failed");
    resultBox.innerHTML = "";
  }
  setModonMatchProgress(0, "جاري تجهيز المطابقة...", "سيظهر هنا الحساب والمرحلة الجاري فحصها.");
}

function setModonCenterProgress(percent, status, detail = "") {
  const value = Math.max(0, Math.min(100, Math.round(number(percent))));
  const panel = $("#modonCenterProgress");
  panel?.classList.remove("hidden", "failed", "complete");
  if (value === 100) panel?.classList.add("complete");
  const percentNode = $("#modonCenterProgressPercent");
  const statusNode = $("#modonCenterProgressStatus");
  const detailNode = $("#modonCenterProgressDetail");
  const bar = $("#modonCenterProgressBar");
  const track = $("#modonCenterProgress .modon-center-progress-track");
  if (percentNode) percentNode.textContent = `${value}%`;
  if (statusNode) statusNode.textContent = status;
  if (detailNode) detailNode.textContent = detail;
  if (bar) bar.style.width = `${value}%`;
  if (track) track.setAttribute("aria-valuenow", String(value));
}

function deliveryOrderIdentitySnapshot(orders = []) {
  return {
    count: orders.length,
    ids: orders.map((order) => clean(order?.id)).sort(),
  };
}

function assertDeliveryOrderIdentity(expected, orders = []) {
  const actual = deliveryOrderIdentitySnapshot(orders);
  const expectedIds = new Set(expected.ids);
  const actualIds = new Set(actual.ids);
  // A refresh must never LOSE an order that existed before it started.
  const missing = expected.ids.filter((id) => !actualIds.has(id));
  // Additions are allowed ONLY when they are deterministic heal rebuilds of a
  // previously-lost order (id `rebuilt-<invoiceId>`), which the live sync adds
  // on purpose when it re-links an orphan. Any other new id is a real bug.
  const unexpectedAdded = actual.ids.filter((id) => !expectedIds.has(id) && !String(id).startsWith("rebuilt-"));
  if (missing.length || unexpectedAdded.length) {
    throw new Error(`أوقف النظام التحديث لأن هوية سجل الطلبات تغيرت (${expected.count} قبل التحديث، ${actual.count} بعده).`);
  }
  return true;
}

function createModonRefreshSnapshot() {
  return {
    deliveryOrderIdentity: deliveryOrderIdentitySnapshot(repo.state.deliveryOrders),
    deliveryOrders: structuredClone(repo.state.deliveryOrders),
    deliveryInvoices: structuredClone(repo.state.deliveryInvoices),
    modonExternalStats: structuredClone(repo.state.modonExternalStats || null),
    invoices: structuredClone(repo.state.invoices),
    auditLogs: structuredClone(repo.state.auditLogs || []),
    stockMovements: structuredClone(repo.state.stockMovements || []),
    cashTransactions: structuredClone(repo.state.cashTransactions || []),
  };
}

function restoreModonRefreshSnapshot(refreshSnapshot) {
  repo.state.deliveryOrders = structuredClone(refreshSnapshot.deliveryOrders);
  repo.state.deliveryInvoices = structuredClone(refreshSnapshot.deliveryInvoices);
  repo.state.modonExternalStats = structuredClone(refreshSnapshot.modonExternalStats);
  repo.state.invoices = structuredClone(refreshSnapshot.invoices);
  repo.state.auditLogs = structuredClone(refreshSnapshot.auditLogs);
  repo.state.stockMovements = structuredClone(refreshSnapshot.stockMovements);
  repo.state.cashTransactions = structuredClone(refreshSnapshot.cashTransactions);
  assertDeliveryOrderIdentity(refreshSnapshot.deliveryOrderIdentity, repo.state.deliveryOrders);
  return true;
}

async function refreshModonOperationsCenter() {
  if (modonCenterRefreshInFlight || modonAutoSyncInFlight || fullModonReconciliationInFlight) return;
  if (!hasPermission("delivery.modon.follow")) {
    alert("تحديث مركز Modon يحتاج صلاحية متابعة الطلبات.");
    return;
  }
  modonCenterRefreshInFlight = true;
  modonHealsThisRun = 0;
  const button = $("#refreshModonCenter");
  const refreshSnapshot = createModonRefreshSnapshot();
  const range = modonSystemRange();
  if (button) {
    button.disabled = true;
    button.classList.add("loading");
    const label = button.querySelector("span") || button;
    label.textContent = "جاري التحديث...";
  }
  setModonCenterProgress(1, "حماية سجل الطلبات", `${refreshSnapshot.deliveryOrderIdentity.count} طلبًا محفوظًا دون إنشاء أو حذف`);
  try {
    const refreshWarnings = [];
    const ordersResult = await syncModonLiveOrders({
      silent: true, deferRender: true, deferSave: true, deferCacheSave: true, throwOnError: true, force: true, range,
      onProgress: ({ stage, current, total, employee, count, detail }) => setModonCenterProgress(
        5 + (current / total) * 40,
        stage === "verify" ? "التحقق من معرّفات الطلبات المحفوظة" : "تحديث الطلبات والحالات",
        `${employee.name}: ${detail || `${count} طلب ضمن فترة النظام`}`,
      ),
    });
    if (!ordersResult?.success) throw new Error("تعذر تحديث طلبات Modon.");
    refreshWarnings.push(...(ordersResult.failedAccounts || []).map((item) => `${item.employeeName}: الطلبات`));

    if (hasPermission("delivery.modon.invoices")) {
      const invoiceResult = await syncCarrierInvoicesFromModon({
        silent: true, deferRender: true, deferSave: true, throwOnError: true, range,
        onProgress: ({ current, total, employee, count, detail }) => setModonCenterProgress(45 + (current / total) * 27, "تحديث فواتير الواصل", `${employee.name}: ${detail || `${count} فاتورة ضمن الفترة`}`),
      });
      refreshWarnings.push(...(invoiceResult?.failedAccounts || []).map((item) => `${item.employeeName}: الفواتير`));
    } else {
      setModonCenterProgress(72, "تم تجاوز فواتير الواصل", "الحساب الحالي لا يملك صلاحية جلب الفواتير.");
    }

    if (hasPermission("delivery.modon.receiveReturns")) {
      const returnResult = await syncReturnCarrierInvoicesFromModon({
        silent: true, deferRender: true, deferSave: true, throwOnError: true, range,
        onProgress: ({ current, total, employee, count }) => setModonCenterProgress(72 + (current / total) * 20, "تحديث الراجع", `${employee.name}: ${count} طلب راجع`),
      });
      refreshWarnings.push(...(returnResult?.failedAccounts || []).map((item) => `${item.employeeName}: الراجع`));
    } else {
      setModonCenterProgress(92, "تم تجاوز الراجع", "الحساب الحالي لا يملك صلاحية جلب الراجع.");
    }

    setModonCenterProgress(96, "تدقيق هوية السجل", "مطابقة عدد ومعرّفات الطلبات مع اللقطة المحمية قبل التحديث");
    assertDeliveryOrderIdentity(refreshSnapshot.deliveryOrderIdentity, repo.state.deliveryOrders);
    // One summary audit for the whole batch instead of one per rebuilt order.
    if (modonHealsThisRun > 0) {
      addAudit("ترميم طلبات Modon مفقودة", "modonOrder", "heal-batch", "", `أُعيد ربط ${modonHealsThisRun} طلبًا فُقد سجلها وأعيد بناؤه من فاتورته.`, null, null);
    }
    await saveAfterExternalChange(null, "جاري تثبيت لقطة Modon الجديدة...");
    await repo.saveModonCache();
    renderAll();
    const periodOrders = repo.state.deliveryOrders
      .filter((order) => activeEmployeeId() === "all" || order.employeeId === activeEmployeeId())
      .filter((order) => dateMatchesRange(modonReconciliationItemDate(order), range));
    const warningText = refreshWarnings.length ? ` · تعذر تحديث ${refreshWarnings.join("، ")} وبقيت آخر لقطة ناجحة` : "";
    setModonCenterProgress(100, refreshWarnings.length ? "اكتمل التحديث مع تنبيه" : "اكتمل تحديث مركز Modon", `السجل المحمي: ${refreshSnapshot.deliveryOrderIdentity.count} · ضمن فترة التشغيل: ${periodOrders.length} · لم يُنشأ أو يُحذف أي طلب داخلي${warningText}`);
    if (!refreshWarnings.length) setTimeout(() => $("#modonCenterProgress")?.classList.add("hidden"), 4500);
  } catch (error) {
    restoreModonRefreshSnapshot(refreshSnapshot);
    modonOrdersSyncCache.clear();
    if (refreshSnapshot.modonExternalStats) await repo.saveModonCache(refreshSnapshot.modonExternalStats).catch(() => {});
    await saveAfterExternalChange(null, "جاري استعادة اللقطة السابقة كاملة...").catch(() => { repo.save(); });
    renderAll();
    const panel = $("#modonCenterProgress");
    panel?.classList.remove("hidden");
    panel?.classList.add("failed");
    if ($("#modonCenterProgressStatus")) $("#modonCenterProgressStatus").textContent = "لم يكتمل التحديث";
    if ($("#modonCenterProgressDetail")) $("#modonCenterProgressDetail").textContent = `${error.message} لم يُحذف أي طلب داخلي.`;
  } finally {
    modonCenterRefreshInFlight = false;
    if (button) {
      button.disabled = false;
      button.classList.remove("loading");
      const label = button.querySelector("span") || button;
      label.textContent = "تحديث مركز Modon";
    }
  }
}

async function runFullModonReconciliation() {
  if (fullModonReconciliationInFlight) return;
  const missingPermissions = [
    ["delivery.modon.follow", "متابعة الطلبات"],
    ["delivery.modon.invoices", "جلب فواتير الواصل"],
    ["delivery.modon.receiveReturns", "جلب الراجع"],
  ].filter(([permission]) => !hasPermission(permission)).map(([, label]) => label);
  if (missingPermissions.length) {
    alert(`المطابقة الشاملة تحتاج الصلاحيات التالية: ${missingPermissions.join("، ")}.`);
    return;
  }
  if (modonAutoSyncInFlight) {
    alert("يجري الآن تحديث تلقائي من Modon. انتظر اكتماله ثم ابدأ المطابقة الشاملة.");
    return;
  }

  fullModonReconciliationInFlight = true;
  const button = $("#runFullModonReconciliation");
  const previousText = button?.textContent || "بدء المطابقة الشاملة";
  if (button) {
    button.disabled = true;
    button.textContent = "جاري فحص الطلبات...";
  }
  resetFullModonMatchProgress();
  showModonFollowTab("reconciliation");
  const range = selectedModonReconciliationRange();
  let activeStep = "orders";
  try {
    setModonMatchProgress(2, "التحقق من الفترة", `${range.from} إلى ${range.to}`);
    setFullModonMatchStep("orders", "running", "جاري جلب الحساب الحقيقي...");
    const ordersResult = await syncModonLiveOrders({
      silent: true, deferRender: true, throwOnError: true, range,
      onProgress: ({ current, total, employee, count }) => setModonMatchProgress(5 + (current / total) * 40, "جلب الطلبات والحالات", `${employee.name}: تم فحص ${count} طلب ضمن الفترة`),
    });
    if (!ordersResult?.success) throw new Error("لم يكتمل جلب طلبات Modon.");
    setFullModonMatchStep("orders", "done", `${ordersResult.orders} طلب من ${ordersResult.accounts} حساب`);

    activeStep = "invoices";
    if (button) button.textContent = "جاري مطابقة الأموال...";
    setFullModonMatchStep("invoices", "running", "جاري جلب فواتير الواصل...");
    const invoicesResult = await syncCarrierInvoicesFromModon({
      silent: true, deferRender: true, throwOnError: true, range,
      onProgress: ({ current, total, employee, count }) => setModonMatchProgress(45 + (current / total) * 25, "مطابقة فواتير الواصل", `${employee.name}: تمت مراجعة ${count} فاتورة`),
    });
    if (!invoicesResult?.success) throw new Error("لم يكتمل جلب فواتير الواصل.");
    setFullModonMatchStep("invoices", "done", `${invoicesResult.synced} فاتورة · ${invoicesResult.matchedOrders} طلب مطابق`);

    activeStep = "returns";
    if (button) button.textContent = "جاري مطابقة الراجع...";
    setFullModonMatchStep("returns", "running", "جاري جلب كشوف الراجع...");
    const returnsResult = await syncReturnCarrierInvoicesFromModon({
      silent: true, deferRender: true, throwOnError: true, range,
      onProgress: ({ current, total, employee, count }) => setModonMatchProgress(70 + (current / total) * 22, "مطابقة الراجع", `${employee.name}: تم فحص ${count} طلب راجع`),
    });
    if (!returnsResult?.success) throw new Error("لم يكتمل جلب الراجع.");
    setFullModonMatchStep("returns", "done", `${returnsResult.matched} طلب راجع مطابق`);

    setModonMatchProgress(95, "بناء نتيجة المقارنة", "مقارنة طلبات نظام جوري مع بيانات Modon ضمن الفترة المحددة");
    renderAll();
    showModonFollowTab("reconciliation");
    const reconciliation = buildModonReconciliation(activeEmployeeId(), range);
    setModonMatchProgress(100, "اكتملت المطابقة بنجاح", `${range.from} إلى ${range.to}`);
    const resultBox = $("#modonFullMatchResult");
    if (resultBox) {
      resultBox.classList.remove("hidden", "failed");
      resultBox.innerHTML = `
        <h4>اكتملت المطابقة الشاملة بنجاح</h4>
        <p>تم تحديث الطلبات والأموال والراجع في ${formatDate(now())}. البنود المفتوحة أدناه تحتاج إجراءً فقط، أما البقية فمتطابقة.</p>
        <div class="modon-full-match-result-grid">
          <div><span>طلبات حساب Modon ضمن الفترة</span><strong>${ordersResult.orders}</strong></div>
          <div><span>فواتير واصل</span><strong>${invoicesResult.synced}</strong></div>
          <div><span>واصل ينتظر القبض</span><strong>${reconciliation.deliveredUnpaid.length}</strong></div>
          <div><span>راجع ينتظر المخزون</span><strong>${reconciliation.returnedPending.length}</strong></div>
          <div><span>طلبات مفقودة</span><strong>${reconciliation.missing.length}</strong></div>
          <div><span>مشاكل مفتوحة</span><strong>${reconciliation.issues.length}</strong></div>
          <div><span>خارج النظام</span><strong>${reconciliation.externalOnly}</strong></div>
          <div><span>تم قبضها</span><strong>${reconciliation.collected.length}</strong></div>
        </div>
      `;
    }
  } catch (error) {
    const currentPercent = number($("#modonCenterProgressPercent")?.textContent);
    setModonMatchProgress(currentPercent || 1, "توقفت المطابقة", error.message);
    setFullModonMatchStep(activeStep, "failed", "تعذر إكمال هذه المرحلة");
    renderModonReconciliation();
    renderModonActionQueue();
    renderModonWorkspaceChrome();
    const resultBox = $("#modonFullMatchResult");
    if (resultBox) {
      resultBox.classList.remove("hidden");
      resultBox.classList.add("failed");
      resultBox.innerHTML = `<h4>لم تكتمل المطابقة الشاملة</h4><p>${escapeHtml(error.message)} لم يتم تأكيد قبض أي مبلغ أو إدخال راجع إلى المخزون تلقائيًا.</p>`;
    }
  } finally {
    fullModonReconciliationInFlight = false;
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function syncModonLiveOrders(options = {}) {
  const silent = Boolean(options.silent);
  if (!requirePermission("delivery.modon.follow", "ليست لديك صلاحية متابعة Modon.")) return { success: false, reason: "permission" };
  if (modonAutoSyncInFlight) return { success: false, reason: "busy" };
  modonAutoSyncInFlight = true;
  const button = $("#syncModonLiveOrders");
  const previousText = button?.textContent || "";
  if (button && !silent) {
    button.disabled = true;
    button.textContent = "جاري التحديث...";
  }
  try {
    const activeId = activeEmployeeId();
    const employees = repo.state.employees
      .filter((employee) => employee.active)
      .filter((employee) => activeId === "all" || employee.id === activeId)
      .filter((employee) => employee.modonUsername);
    if (!employees.length) {
      const error = new Error("لا يوجد حساب موظف يحتوي بيانات Modon ضمن النطاق الحالي.");
      if (options.throwOnError) throw error;
      if (!silent) alert(error.message);
      return { success: false, reason: "no-account" };
    }
    const accounts = [];
    let remoteOrdersCount = 0;
    let processedAccounts = 0;
    const failedAccounts = [];
    const previousAccounts = new Map((repo.state.modonExternalStats?.accounts || []).map((account) => [account.employeeId, structuredClone(account)]));
    const verificationBudget = { remaining: Math.max(0, 58 - employees.length) };
    for (const [employeeIndex, employee] of employees.entries()) {
      const employeeSnapshot = createModonRefreshSnapshot();
      try {
      const remoteResult = await getModonOrdersForSync(employee, { force: options.force });
      if (remoteResult.source === "stale") {
        throw remoteResult.error || new Error(`تعذر الحصول على تحديث حديث لحساب Modon: ${employee.name}`);
      }
      const orders = await supplementModonOrdersFromLocalIds(employee, remoteResult.orders, {
        requestBudget: verificationBudget,
        onProgress: ({ current, total, requested, found }) => options.onProgress?.({
          stage: "verify",
          current: employeeIndex + (current / total),
          total: employees.length,
          employee,
          count: found,
          detail: `فحص ${requested} معرّفًا محليًا · ظهر ${found}`,
        }),
      });
      modonOrdersSyncCache.set(employee.id, { orders, source: remoteResult.source, fetchedAt: remoteResult.fetchedAt });
      const ordersInRange = options.range
        ? orders.filter((order) => modonRemoteOrderMatchesRange(order, employee.id, options.range))
        : orders;
      ordersInRange.forEach((remoteOrder) => {
        // Heal here too: a lost order re-links (and reappears in "Current orders")
        // as soon as Modon returns it live, without waiting for a carrier invoice.
        const localOrder = findLocalOrderByRemote(remoteOrder, employee.id)
          || healOrphanFromRemote(remoteOrder, employee.id);
        if (!localOrder) return;
        updateLocalOrderFromModon(localOrder, remoteOrder);
        localOrder.updated_at = now();
        const invoice = getInvoice(localOrder.local_order_id);
        if (!invoice) return;
        invoice.deliveryStatus = statusMap[localOrder.status]?.label || localOrder.modon_status_text || localOrder.status;
        if (localOrder.status === "delivered" && !localOrder.deliver_confirmed_fin) invoice.paymentStatus = "واصل للزبون - بانتظار قبض Modon";
        if (localOrder.status === "returned") invoice.paymentStatus = localOrder.returned_received_stock
          ? "راجع - تم استلام الراجع وإرجاعه للمخزون"
          : "راجع من Modon - بانتظار استلام الراجع";
      });
      accounts.push(summarizeModonLiveOrders(employee, ordersInRange));
      remoteOrdersCount += ordersInRange.length;
      processedAccounts += 1;
      options.onProgress?.({ stage: "orders", current: employeeIndex + 1, total: employees.length, employee, count: ordersInRange.length });
      } catch (error) {
        restoreModonRefreshSnapshot(employeeSnapshot);
        failedAccounts.push({ employeeId: employee.id, employeeName: employee.name, message: error.message });
        const previousAccount = previousAccounts.get(employee.id);
        if (previousAccount) accounts.push(previousAccount);
        options.onProgress?.({ stage: "orders", current: employeeIndex + 1, total: employees.length, employee, count: 0, failed: true, detail: `تعذر التحديث، بقيت آخر لقطة ناجحة: ${error.message}` });
      }
    }
    if (!processedAccounts && failedAccounts.length) {
      const error = new Error(`تعذر تحديث جميع حسابات Modon: ${failedAccounts.map((item) => item.employeeName).join("، ")}`);
      error.failedAccounts = failedAccounts;
      throw error;
    }
    repo.state.modonExternalStats = {
      fetchedAt: now(),
      scope: activeId || "all",
      accounts,
    };
    if (!options.deferCacheSave) {
      try {
        await repo.saveModonCache();
      } catch {
        repo.modonCacheReady = false;
      }
    }
    if (!options.deferSave) repo.save();
    if (!options.deferRender) {
      renderModonLiveStats();
      renderModonExternalOrders();
      renderModonReconciliation();
      renderModonActionQueue();
      renderModonWorkspaceChrome();
    }
    return { success: true, accounts: accounts.length, processedAccounts, orders: remoteOrdersCount, failedAccounts };
  } catch (error) {
    if (options.throwOnError) throw error;
    if (!silent) notifyOperationError(error, "تعذر تحديث طلبات Modon");
    return { success: false, error };
  } finally {
    modonAutoSyncInFlight = false;
    if (button && !silent) {
      button.disabled = false;
      button.textContent = previousText || "تحديث من Modon";
    }
  }
}

function summarizeModonLiveOrders(employee, orders) {
  const statusCounts = {};
  const categoryCounts = { delivered: 0, returned: 0, cancelled: 0, issues: 0 };
  const compactOrders = orders.map((order) => normalizeModonExternalOrder(employee, order));
  compactOrders.forEach((order) => {
    const label = order.statusLabel || "غير معروف";
    statusCounts[label] = (statusCounts[label] || 0) + 1;
    const category = order.statusCategory;
    if (categoryCounts[category] !== undefined) categoryCounts[category] += 1;
  });
  return {
    employeeId: employee.id,
    employeeName: employee.name,
    modonUsername: employee.modonUsername,
    total: orders.length,
    delivered: categoryCounts.delivered,
    returned: categoryCounts.returned,
    cancelled: categoryCounts.cancelled,
    issues: categoryCounts.issues,
    statusCounts,
    orders: compactOrders,
  };
}

function normalizeModonExternalOrder(employee, order) {
  const statusLabel = modonLiveStatusLabel(order);
  const externalOrderIds = remoteOrderIds(order);
  const externalOrderId = externalOrderIds[0] || "-";
  const city = clean(order.city_name || order.city || order.governorate || order.province || "");
  const region = clean(order.region_name || order.region || order.area_name || order.area || "");
  const localOrder = findLocalOrderByRemote(order, employee.id);
  return {
    employeeId: employee.id,
    employeeName: employee.name,
    modonUsername: employee.modonUsername,
    externalOrderId: String(externalOrderId || "-"),
    externalOrderIds,
    customerName: clean(order.customer_name || order.client_name || order.receiver_name || order.name || order.client || "-"),
    customerPhone: clean(order.customer_phone || order.client_mobile || order.phone || order.mobile || order.receiver_phone || ""),
    statusLabel,
    statusCategory: modonLiveStatusCategory(order),
    price: number(order.price || order.total_price || order.order_price || order.total || order.amount),
    deliveryPrice: number(order.delivery_price || order.company_price || order.shipping_price || order.deliveryPrice),
    merchantPrice: number(order.merchant_price || order.merchantPrice || order.net_price || order.netPrice),
    city,
    region,
    createdAt: clean(order.created_at || order.createdAt || order.created_date || order.date || localOrder?.created_at || localOrder?.createdAt || ""),
  };
}

function renderModonLiveStats() {
  if (!$("#modonLiveMetrics")) return;
  const snapshot = repo.state.modonExternalStats;
  const visibleEmployeeId = canViewAllModonAccounts() ? null : currentEmployee()?.id;
  const accounts = (snapshot?.accounts || []).filter((account) => !visibleEmployeeId || account.employeeId === visibleEmployeeId);
  const total = accounts.reduce((sum, account) => sum + number(account.total), 0);
  const delivered = accounts.reduce((sum, account) => sum + number(account.delivered), 0);
  const returned = accounts.reduce((sum, account) => sum + number(account.returned), 0);
  const cancelled = accounts.reduce((sum, account) => sum + number(account.cancelled), 0);
  const issues = accounts.reduce((sum, account) => sum + number(account.issues), 0);
  renderMetrics("#modonLiveMetrics", [
    ["إجمالي حساب Modon", total, snapshot ? `آخر تحديث ${formatDate(snapshot.fetchedAt)}` : "اضغط تحديث من Modon"],
    ["واصل", delivered, "حسب موقع Modon"],
    ["راجع", returned, "حسب موقع Modon"],
    ["ملغي", cancelled, "حسب موقع Modon"],
    ["مشاكل", issues, "حسب موقع Modon"],
  ]);
  $("#modonLiveStatusList").innerHTML = accounts.map((account) => {
    const statuses = Object.entries(account.statusCounts || {})
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => `<div class="modon-status-item"><span>${escapeHtml(label)}</span><strong>${count}</strong></div>`)
      .join("");
    return `<div class="modon-account-card">
      <div class="modon-account-head">
        <div>
          <strong>${escapeHtml(account.employeeName)}</strong>
          <span>${escapeHtml(account.modonUsername || "")}</span>
        </div>
        <div class="modon-account-total">
          <span>إجمالي Modon</span>
          <strong>${account.total}</strong>
        </div>
      </div>
      <div class="modon-account-kpis">
        <div><span>واصل</span><strong>${account.delivered}</strong></div>
        <div><span>راجع</span><strong>${account.returned}</strong></div>
        <div><span>مشاكل</span><strong>${account.issues}</strong></div>
      </div>
      <div class="modon-status-grid">${statuses || `<div class="empty">لا توجد حالات مفصلة.</div>`}</div>
    </div>`;
  }).join("") || `<div class="empty">لا توجد إحصائيات مباشرة بعد. اضغط تحديث من Modon لجلب أرقام الحساب الحقيقي.</div>`;
}

function renderModonExternalOrders() {
  const target = $("#modonExternalOrdersTable");
  if (!target) return;
  const visibleEmployeeId = canViewAllModonAccounts() ? null : currentEmployee()?.id;
  const accounts = (repo.state.modonExternalStats?.accounts || [])
    .filter((account) => !visibleEmployeeId || account.employeeId === visibleEmployeeId);
  fillModonExternalAccountFilter(accounts);
  const search = normalizeSearch($("#modonExternalSearch")?.value || "");
  const statusFilter = $("#modonExternalStatusFilter")?.value || "all";
  const sourceFilter = $("#modonExternalSourceFilter")?.value || "all";
  const accountFilter = $("#modonExternalAccountFilter")?.value || "all";
  const filteredRows = accounts
    .flatMap((account) => account.orders || [])
    .filter((order) => dateMatchesRange(order.createdAt || order.created_at || order.date, "modonExternal"))
    .filter((order) => {
      const isInternal = externalOrderMatchesLocal(order, order.employeeId);
      const source = isInternal ? "internal" : "external";
      const matchesSearch = !search || remoteOrderIds(order).some((id) => normalizeSearch(id).includes(search));
      const matchesStatus = statusFilter === "all" || order.statusCategory === statusFilter;
      const matchesSource = sourceFilter === "all" || source === sourceFilter;
      const matchesAccount = accountFilter === "all" || order.employeeId === accountFilter;
      return matchesSearch && matchesStatus && matchesSource && matchesAccount;
    });
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / MODON_EXTERNAL_PAGE_SIZE));
  modonExternalPage = Math.min(Math.max(1, modonExternalPage), totalPages);
  const start = (modonExternalPage - 1) * MODON_EXTERNAL_PAGE_SIZE;
  const visibleRows = filteredRows.slice(start, start + MODON_EXTERNAL_PAGE_SIZE);
  target.innerHTML = visibleRows.map((order) => {
    const isInternal = externalOrderMatchesLocal(order, order.employeeId);
    const sourceBadge = isInternal
      ? `<span class="badge ok">داخل النظام</span>`
      : `<span class="badge external">خارج النظام</span>`;
    const statusClass = order.statusCategory === "delivered" ? "ok" : ["returned", "cancelled"].includes(order.statusCategory) ? "danger" : order.statusCategory === "issues" ? "issue" : "";
    const address = [order.city, order.region].filter(Boolean).join(" - ") || "-";
    return `
      <tr>
        <td data-label="الحساب">${escapeHtml(order.employeeName || "-")}<br><small>${escapeHtml(order.modonUsername || "")}</small></td>
        <td data-label="رقم Modon">${escapeHtml(order.externalOrderId || "-")}${remoteOrderIds(order).length > 1 ? `<br><small>معرفات مرتبطة: ${escapeHtml(remoteOrderIds(order).slice(1).join("، "))}</small>` : ""}</td>
        <td data-label="الزبون">${escapeHtml(order.customerName || "-")}<br><small>${escapeHtml(order.customerPhone || "")}</small></td>
        <td data-label="الحالة"><span class="badge ${statusClass}">${escapeHtml(order.statusLabel || "غير معروف")}</span></td>
        <td data-label="المصدر">${sourceBadge}<br><small>${isInternal ? "دخل في المحاسبة" : "قراءة فقط"}</small></td>
        <td data-label="السعر">${money(order.price)}</td>
        <td data-label="التوصيل">${money(order.deliveryPrice)}</td>
        <td data-label="صافي التاجر">${money(order.merchantPrice)}</td>
        <td data-label="العنوان والتاريخ">${escapeHtml(address)}<br><small>${escapeHtml(order.createdAt || "")}</small></td>
      </tr>
    `;
  }).join("") || emptyRow(9, accounts.length ? "لا توجد طلبات مطابقة للبحث أو الفلاتر." : "اضغط تحديث من Modon لعرض طلبات الحساب الحقيقي للقراءة فقط.");
  renderModonExternalPagination(filteredRows.length, start, visibleRows.length, totalPages);
}

function fillModonExternalAccountFilter(accounts) {
  const select = $("#modonExternalAccountFilter");
  if (!select) return;
  const selected = select.value || "all";
  const options = accounts.map((account) => `<option value="${account.employeeId}">${escapeHtml(account.employeeName)} - ${escapeHtml(account.modonUsername || "")}</option>`).join("");
  select.innerHTML = `${canViewAllModonAccounts() ? `<option value="all">كل الحسابات</option>` : ""}${options}`;
  const fallback = canViewAllModonAccounts() ? "all" : accounts[0]?.employeeId || "all";
  select.value = accounts.some((account) => account.employeeId === selected) || (canViewAllModonAccounts() && selected === "all") ? selected : fallback;
  select.disabled = !canViewAllModonAccounts();
}

function renderModonExternalPagination(total, start, visibleCount, totalPages) {
  const target = $("#modonExternalPagination");
  if (!target) return;
  const from = total ? start + 1 : 0;
  const to = total ? start + visibleCount : 0;
  target.innerHTML = `
    <div class="pagination-summary">يعرض ${from}-${to} من ${total} طلب</div>
    <div class="pagination-actions">
      <button class="ghost" type="button" ${modonExternalPage <= 1 ? "disabled" : ""} onclick="changeModonExternalPage(-1)">السابق</button>
      <span>صفحة ${modonExternalPage} من ${totalPages}</span>
      <button class="ghost" type="button" ${modonExternalPage >= totalPages ? "disabled" : ""} onclick="changeModonExternalPage(1)">التالي</button>
    </div>
  `;
}

function changeModonExternalPage(delta) {
  modonExternalPage += delta;
  renderModonExternalOrders();
}

function modonLiveStatusLabel(order) {
  const statusObject = order?.status && typeof order.status === "object" ? order.status : null;
  return clean(
    order?.current_status_name
    || order?.current_status
    || order?.latest_status_name
    || order?.latest_status
    || order?.last_status_name
    || order?.last_status
    || order?.status_name
    || order?.order_status_name
    || order?.order_status
    || order?.status_text
    || statusObject?.name
    || statusObject?.label
    || statusObject?.status_name
    || statusObject?.status
    || (typeof order?.status === "string" ? order.status : "")
    || order?.status_id
    || "غير معروف"
  );
}

function isModonLiveStatus(order, keywords) {
  const haystack = normalizeSearch(modonStatusTexts(order).join(" "));
  return keywords.some((keyword) => haystack.includes(normalizeSearch(keyword)));
}

function modonStatusTexts(order) {
  const statusObject = order?.status && typeof order.status === "object" ? order.status : null;
  const directTexts = Array.from(new Set([
    order?.current_status_name,
    order?.current_status,
    order?.latest_status_name,
    order?.latest_status,
    order?.last_status_name,
    order?.last_status,
    order?.status_name,
    order?.order_status_name,
    order?.order_status,
    order?.status_text,
    statusObject?.name,
    statusObject?.label,
    statusObject?.status_name,
    statusObject?.status,
    typeof order?.status === "string" ? order.status : "",
  ].map(clean).filter(Boolean)));
  const directSearch = normalizeSearch(directTexts.join(" "));
  const directIsRecognized = Object.values(modonStatusKeywords)
    .flat()
    .some((keyword) => directSearch.includes(normalizeSearch(keyword)));
  if (directIsRecognized) return directTexts;
  const latestEvent = modonLatestStatusEvent(order);
  return Array.from(new Set([...directTexts, latestEvent?.text].map(clean).filter(Boolean)));
}

function modonStatusEvents(order) {
  const arrays = [
    order?.status_history,
    order?.statusHistory,
    order?.statuses,
    order?.history,
    order?.order_history,
    order?.timeline,
    order?.events,
    order?.tracking,
    order?.tracking_history,
  ].filter(Array.isArray);
  const events = arrays.flat().map((event, index) => {
    if (!event || typeof event !== "object") return null;
    const text = clean(
      event.current_status_name
      || event.status_name
      || event.status
      || event.order_status_name
      || event.order_status
      || event.title
      || event.name
      || event.description
      || event.event
      || event.action
      || event.note
      || ""
    );
    const date = clean(
      event.status_updated_at
      || event.updated_at
      || event.updatedAt
      || event.created_at
      || event.createdAt
      || event.datetime
      || event.date
      || event.timestamp
      || event.time
      || ""
    );
    return text ? { text, date, index } : null;
  }).filter(Boolean);
  return events.sort((left, right) => {
    const leftTime = left.date ? new Date(left.date).getTime() : Number.NaN;
    const rightTime = right.date ? new Date(right.date).getTime() : Number.NaN;
    if (Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime !== rightTime) return leftTime - rightTime;
    if (Number.isFinite(leftTime) && !Number.isFinite(rightTime)) return 1;
    if (Number.isFinite(rightTime) && !Number.isFinite(leftTime)) return -1;
    return left.index - right.index;
  });
}

function modonLatestStatusEvent(order) {
  return modonStatusEvents(order).at(-1) || null;
}

function hasModonStatusKeyword(text, keywords) {
  const haystack = normalizeSearch(text || "");
  return keywords.some((keyword) => haystack.includes(normalizeSearch(keyword)));
}

function hasModonReturnReceiptSequence(order) {
  const events = modonStatusEvents(order);
  if (events.length < 2) return false;
  const latest = events.at(-1);
  const previous = events.at(-2);
  return hasModonStatusKeyword(latest.text, modonStatusKeywords.delivered)
    && hasModonStatusKeyword(previous.text, modonStatusKeywords.returned);
}

// A Modon order can carry a "received" status yet actually be a return: the
// merchant received the piece back and Modon left a problem reason (sizing,
// customer refusal, exchange...). Detect a clear return reason on the order's
// problem/notes fields so such orders are auto-classified as returns.
function hasModonReturnReason(order) {
  const reasonKeywords = [
    "قياس", "مقاس", "الحجم", "حجم", "اللون", "لم يعجب", "ما عجب", "لم يعجبه", "لم تعجب",
    "رفض", "لم يستلم", "لم يرد", "استبدال", "تبديل", "ارجاع", "إرجاع", "راجع", "رجع",
    "غير مطابق", "لا يناسب", "ما ناسب", "مو مناسب", "ما يريد", "لا يريد",
  ];
  const text = normalizeSearch([
    order?.issue_notes, order?.issueNotes, order?.problem, order?.problem_note, order?.problemNote,
    order?.problem_reason, order?.problemReason, order?.return_reason, order?.returnReason, order?.reason, order?.note,
  ].filter(Boolean).join(" "));
  if (!text) return false;
  return reasonKeywords.some((keyword) => text.includes(normalizeSearch(keyword)));
}

// Modon status_id 17 ("received by the client" = received by the merchant/Modon's
// client) is the merchant receiving the order back = a RETURN — distinct from
// status_id 4 ("delivered to the customer") which is delivery to the end customer.
// Confirmed against real Jouri data (owner, July 2026). Use the definitive numeric
// id first; fall back to the exact Modon status wording.
function isModonMerchantReceivedReturnStatus(order) {
  const statusId = String(order?.status_id ?? order?.modon_status_id ?? "").trim();
  if (statusId === "17") return true;
  const text = normalizeSearch([order?.modon_status_text, order?.status_name, order?.status].filter(Boolean).join(" "));
  return text.includes(normalizeSearch("استلامه من قبل العميل"));
}

function modonLiveStatusCategory(order) {
  if (isModonLiveStatus(order, modonStatusKeywords.cancelled)) return "cancelled";
  // Merchant received the order back (status_id 17) → definitively a return.
  if (isModonMerchantReceivedReturnStatus(order)) return "returned";
  if (hasModonReturnReceiptSequence(order)) return "returned";
  if (isModonLiveStatus(order, modonStatusKeywords.returned)) return "returned";
  if (isModonLiveStatus(order, modonStatusKeywords.delivered)) {
    // Delivered wording + a clear return reason (e.g. sizing) => a return that
    // Modon labelled ambiguously.
    if (hasModonReturnReason(order)) return "returned";
    return "delivered";
  }
  if (isModonLiveStatus(order, modonStatusKeywords.withCourier)) return "with_courier";
  if (isModonLiveStatus(order, modonStatusKeywords.issues)) return "issues";
  return "other";
}

function isModonReplacementOrder(order) {
  return ["1", "true", "yes"].includes(String(order?.replacement ?? order?.is_replacement ?? order?.replacement_order ?? "0").toLowerCase());
}

function isModonReturnCandidate(order) {
  const category = modonLiveStatusCategory(order);
  if (category === "returned") return true;
  const explicitReturn = ["1", "true", "yes"].includes(String(order?.is_return ?? order?.returned ?? order?.return_order ?? "0").toLowerCase());
  return explicitReturn && !["delivered", "cancelled"].includes(category);
}

function renderModonOpsMetrics() {
  if (!$("#modonOpsMetrics")) return;
  const orders = accounting.scopedOrders();
  const delivered = orders.filter((order) => order.status === "delivered").length;
  const returned = orders.filter((order) => order.status === "returned").length;
  const issues = orders.filter((order) => order.status === "issue").length;
  const pending = orders.filter((order) => ["new", "with_courier"].includes(order.status)).length;
  const missing = orders.filter((order) => order.reconciliation_status === "missing").length;
  renderMetrics("#modonOpsMetrics", [
    ["كل الطلبات الداخلية", orders.length, "من داخل البرنامج"],
    ["واصل", delivered, "تم التسليم"],
    ["راجع", returned, "مرتجع من التوصيل"],
    ["مشاكل", issues, "بحاجة متابعة"],
    ["معلق", pending, "لم يحسم بعد"],
    ["مفقود من الكشف", missing, "طالب Modon به"],
  ]);
}

// An order whose live Modon status says it is being returned (in transit back) but
// hasn't been finalized/received as a return yet.
function isModonOrderReturningLive(order) {
  const live = normalizeSearch([order?.modon_status_text, order?.status_name].filter(Boolean).join(" "));
  return modonStatusKeywords.returned.some((keyword) => live.includes(normalizeSearch(keyword)));
}

// Show the orders/invoices behind a "Now" stat card in a popup (no navigation).
function showModonNowBucket(bucket) {
  const range = modonSystemRange();
  const employeeId = activeEmployeeId();
  const scoped = accounting.scopedOrders()
    .filter((order) => dateMatchesRange(modonReconciliationItemDate(order), range) && !isCancelledModonOrder(order));
  const titleEl = $("#modonBucketTitle");
  const subEl = $("#modonBucketSubtitle");
  const bodyEl = $("#modonBucketBody");
  if (!bodyEl) return;
  if (bucket === "collection") {
    const invoices = dedupeModonDeliveredInvoices(repo.state.deliveryInvoices
      .filter((inv) => inv.type !== "returned" && (employeeId === "all" || inv.employeeId === employeeId) && deliveryInvoiceBelongsToSystemRange(inv, range)));
    if (titleEl) titleEl.textContent = "فواتير التحصيل";
    if (subEl) subEl.textContent = `${invoices.length} فاتورة`;
    bodyEl.innerHTML = `<div class="table-wrap"><table><thead><tr><th>رقم الفاتورة</th><th>الحساب</th><th>الطلبات</th><th>الصافي المقبوض/المتوقع</th><th>الحالة</th></tr></thead><tbody>${
      invoices.map((inv) => `<tr><td>${escapeHtml(inv.external_invoice_id || "-")}</td><td>${escapeHtml(employeeName(inv.employeeId))}</td><td>${number(inv.matched_orders_count || (inv.order_ids ? inv.order_ids.length : 0))}</td><td>${money(inv.collected_amount ?? carrierInvoiceCollectableAmount(inv))}</td><td>${escapeHtml(inv.status || "-")}</td></tr>`).join("")
      || emptyRow(5, "لا توجد فواتير ضمن النطاق.")}</tbody></table></div>`;
  } else {
    const titles = { delivered: "الطلبات المُسلّمة", in_delivery: "قيد التوصيل", return_pending: "راجع بانتظار الاستلام", return_received: "الرواجع المستلمة" };
    let orders = [];
    if (bucket === "delivered") orders = scoped.filter((order) => modonOrderWorkStatus(order) === "delivered");
    else if (bucket === "in_delivery") orders = scoped.filter((order) => ["new", "with_courier"].includes(order.status));
    else if (bucket === "return_pending") orders = buildModonReconciliation(employeeId, range).returnedPending;
    else if (bucket === "return_received") orders = scoped.filter((order) => order.returned_received_stock);
    if (titleEl) titleEl.textContent = titles[bucket] || "القائمة";
    if (subEl) subEl.textContent = `${orders.length} طلب`;
    bodyEl.innerHTML = `<div class="table-wrap"><table><thead><tr><th>رقم Modon</th><th>الزبون</th><th>المنتج</th><th>الكمية</th><th>الحالة</th></tr></thead><tbody>${
      orders.map((order) => `<tr><td>${escapeHtml(order.external_order_id || order.internal_order_no || "-")}</td><td>${escapeHtml(order.customer_name || "-")}</td><td>${escapeHtml(order.product_name || "-")}</td><td>${number(order.quantity || order.items_count || 1)}</td><td>${escapeHtml(modonOrderStatusLabel(order))}</td></tr>`).join("")
      || emptyRow(5, "لا توجد طلبات في هذه الفئة ضمن النطاق.")}</tbody></table></div>`;
  }
  const modal = $("#modonBucketModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModonBucketModal() {
  const modal = $("#modonBucketModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

// Jump to the Modon orders tab with a specific status filter applied.
function jumpToModonOrders(filter = "all") {
  showModonHubTab("orders");
  const statusEl = $("#orderStatusFilter");
  if (statusEl) statusEl.value = filter;
  $$("#orderChips [data-order-chip]").forEach((chip) => chip.classList.toggle("active", chip.dataset.orderChip === filter));
  resetListPage("internalOrders");
  renderInternalOrders();
}

function modonOrderWorkStatus(order) {
  if (isCancelledModonOrder(order)) return "cancelled";
  if (order.deliver_confirmed_fin || order.status === "delivered") return "delivered";
  if (order.returned_received_stock || order.status === "returned") return "returned";
  if (order.status === "issue") return "issue";
  return "pending";
}

function isCancelledModonOrder(order) {
  if (!order) return false;
  const haystack = normalizeSearch([
    order.status,
    order.status_id,
    order.modon_status_text,
    order.status_name,
    order.cancelled_reason,
  ].filter(Boolean).join(" "));
  return Boolean(order.cancelled)
    || modonStatusKeywords.cancelled.some((keyword) => haystack.includes(normalizeSearch(keyword)));
}

function applyCancelledModonOrderState(order, reason = "ملغي في Modon", options = {}) {
  if (!order) return false;
  const invoice = getInvoice(order.local_order_id);
  const changed = !order.cancelled || Boolean(invoice && !invoice.cancelled);
  const stamp = now();
  const actor = options.actor || repo.state.currentUserId || currentEmployee()?.id || "modon";
  const cleanReason = clean(reason) || "ملغي في Modon";
  order.status = "cancelled";
  order.status_id = "cancelled";
  order.cancelled = true;
  order.cancelled_at ||= stamp;
  order.cancelled_by ||= actor;
  order.cancelled_reason = cleanReason;
  order.updated_at = stamp;
  if (!clean(order.issue_notes).includes(cleanReason)) {
    order.issue_notes = [order.issue_notes, cleanReason].filter(Boolean).join(" - ");
  }
  if (invoice) {
    invoice.cancelled = true;
    invoice.cancelledAt ||= stamp;
    invoice.cancelledBy ||= actor;
    invoice.paymentStatus = "ملغاة";
    invoice.deliveryStatus = cleanReason.includes("العميل") ? "ملغي من قبل العميل في Modon" : "ملغي في Modon قبل التسليم";
    repo.state.stockMovements = repo.state.stockMovements.filter((movement) => movement.invoiceId !== invoice.id);
  }
  return changed;
}

function isModonOrderBeforeDelivery(order) {
  return ["pending", "issue"].includes(modonOrderWorkStatus(order)) && !order.has_merchant_fin_record && !order.merchant_invoice_id;
}

function scopedTodayModonOrders() {
  return scopedModonOrdersByRange({ from: today(), to: today() });
}

function selectedModonOrdersRange() {
  const range = selectedDateRange("modonOrdersPrint");
  return {
    from: range.from || today(),
    to: range.to || range.from || today(),
  };
}

function scopedModonOrdersByRange(range = selectedModonOrdersRange()) {
  return accounting.scopedOrders()
    .filter((order) => dateMatchesRange(order.created_at || order.createdAt, range))
    .sort((a, b) => new Date(b.created_at || b.createdAt || 0) - new Date(a.created_at || a.createdAt || 0));
}

function renderModonDailyPanel() {
  if (!$("#modonDailyMetrics")) return;
  const range = selectedModonOrdersRange();
  const rangeOrders = scopedModonOrdersByRange(range);
  const beforeDelivery = rangeOrders.filter(isModonOrderBeforeDelivery);
  const unprinted = beforeDelivery.filter((order) => !order.printed_at);
  const delivered = rangeOrders.filter((order) => modonOrderWorkStatus(order) === "delivered");
  const returned = rangeOrders.filter((order) => modonOrderWorkStatus(order) === "returned");
  const cancelled = rangeOrders.filter((order) => modonOrderWorkStatus(order) === "cancelled");
  renderMetrics("#modonDailyMetrics", [
    ["طلبات الفترة", rangeOrders.length, reportRangeLabel(range)],
    ["قيد التجهيز", beforeDelivery.length, `${unprinted.length} بلا وصل مطبوع`],
    ["واصل", delivered.length, "تم التسليم"],
    ["راجع / ملغي", returned.length + cancelled.length, `${returned.length} راجع · ${cancelled.length} ملغي`],
  ]);
  const sortedOrders = [...rangeOrders].sort((a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt));
  const pageInfo = paginateCollection(sortedOrders, "modonDaily");
  $("#modonDailyOrders").innerHTML = pageInfo.rows.length ? pageInfo.rows.map((order) => {
    const invoice = getInvoice(order.local_order_id);
    return `<div class="modon-work-card">
      <div class="modon-work-main">
        <strong>${escapeHtml(order.external_order_id || order.internal_order_no || "-")}</strong>
        <span>${escapeHtml(order.customer_name || invoice?.customerName || "-")} - ${escapeHtml(order.customer_phone || invoice?.customerPhone || "")}</span>
        <small>${escapeHtml(order.product_name || invoice?.productName || "-")} × ${order.quantity || order.items_count || 1} - ${escapeHtml([order.city_name, order.area_name, order.address].filter(Boolean).join(" / "))}</small>
      </div>
      <div class="modon-work-money">
        <strong>${money(order.price)}</strong>
        <small>صافي التاجر ${money(order.merchant_price)}</small>
      </div>
      <div class="modon-work-status">
        ${statusBadge(order.status)}
        <span class="${order.printed_at ? "badge ok" : "badge issue"}">${order.printed_at ? `مطبوع ${formatDate(order.printed_at)}` : "غير مطبوع"}</span>
      </div>
      <div class="modon-work-actions">
        <button class="primary" type="button" onclick="printModonOrder('${order.id}')">طباعة</button>
        ${canEditModonOrder(order) ? `<button class="ghost" type="button" onclick="editModonOrderLocal('${order.id}')">تعديل</button>` : ""}
        ${isModonOrderBeforeDelivery(order) ? `<button class="danger-button" type="button" onclick="cancelModonOrderLocal('${order.id}')">إلغاء</button>` : ""}
      </div>
    </div>`;
  }).join("") : `<div class="empty">لا توجد طلبات Modon ضمن الفترة المحددة.</div>`;
  renderListPagination("#modonDailyPagination", "modonDaily", pageInfo);
}

function renderModonReconciliation() {
  const details = $("#modonReconciliationDetails");
  if (!details) return;
  const range = selectedModonReconciliationRange();
  const result = buildModonReconciliation(activeEmployeeId(), range);
  // Legacy 8-tile grid is no longer shown; keep the container empty in case
  // other code still references it.
  if ($("#modonReconciliationMetrics")) $("#modonReconciliationMetrics").innerHTML = "";

  const matched = result.matched.length;
  const missing = result.internalOnly.length;
  const external = result.externalOnlyOrders.length;

  const summary = `
    <div class="modon-match-summary">
      <div class="mm-tile g"><small>مطابق</small><b class="num">${matched}</b><span>موجود في نظامك ومدن</span></div>
      <div class="mm-tile r"><small>لم يظهر في مدن</small><b class="num">${missing}</b><span>قد تكون مدن حذفته</span></div>
      <div class="mm-tile b"><small>خارج نظامك</small><b class="num">${external}</b><span>في مدن فقط · للقراءة</span></div>
    </div>`;

  const freshness = result.hasExternalSnapshot
    ? `<p class="modon-match-fresh">قُورن سجلك بآخر لقطة من مدن: ${escapeHtml(formatDate(repo.state.modonExternalStats.fetchedAt))}</p>`
    : `<div class="modon-match-info amber"><span class="i" aria-hidden="true">⏳</span><span>لم تُجلب لقطة من مدن بعد ضمن هذه الفترة. اضغط <b>«تحديث»</b> بالأسفل ليقارن النظام طلباتك بمدن.</span></div>`;

  const missingGroup = `
    <div class="modon-match-group red">في نظامك ولم يظهر في مدن</div>
    <div class="modon-match-info red"><span class="i" aria-hidden="true">⚠</span><span>هذه الطلبات في نظامك لكنها اختفت من مدن — غالبًا حُذفت من حسابهم. اضغط <b>«تحقّق من مدن»</b> ليؤكّد الحذف مباشرة.</span></div>
    ${modonAuditRows(result.internalOnly, "local", true)}`;

  // External-only orders (in Modon but not in your system) are hidden — the user
  // only wants to see what's inside the system. They are financially isolated
  // anyway (never counted in any collection). Their count stays in the summary tile.
  details.innerHTML = summary + freshness + missingGroup;
}

function showModonAuditCategory(category) {
  const allowed = new Set(["internal", "remote", "matched", "internalOnly", "externalOnly", "statusDifferences", "deliveredUnpaid", "returnedPending"]);
  modonAuditSelectedCategory = allowed.has(category) ? category : "internalOnly";
  renderModonReconciliation();
}

function modonLocalStatusCategory(order) {
  if (isCancelledModonOrder(order) || order.modon_cancelled) return "cancelled";
  if (order.status === "returned") return "returned";
  if (order.status === "delivered" || order.deliver_confirmed_fin) return "delivered";
  if (order.status === "issue") return "issues";
  if (["new", "with_courier"].includes(order.status)) return "with_courier";
  return "other";
}

function modonAuditRows(items, type = "local", showVerify = false) {
  if (!items.length) return `<div class="empty">لا توجد طلبات في هذا القسم ضمن الفترة المحددة.</div>`;
  return `<div class="modon-audit-breakdown-list">${items.map((item) => {
    const localOrder = type === "matched" || type === "difference" ? item.localOrder : type === "remote" ? null : item;
    const remoteOrder = type === "matched" || type === "difference" ? item.remoteOrder : type === "remote" ? item : null;
    const reference = localOrder?.external_order_id || remoteOrder?.externalOrderId || localOrder?.internal_order_no || "-";
    const customer = localOrder?.customer_name || remoteOrder?.customerName || "-";
    const product = localOrder?.product_name || "";
    const localLabel = localOrder ? (statusMap[localOrder.status]?.label || localOrder.modon_status_text || localOrder.status || "-") : "-";
    const remoteLabel = remoteOrder?.statusLabel || "-";
    const verifiedDeleted = localOrder?.modon_verified_missing;
    const remoteLine = verifiedDeleted
      ? `تأكّد من مدن: الطلب محذوف من حسابهم`
      : remoteOrder ? `Modon: ${escapeHtml(remoteLabel)}` : "غير ظاهر في آخر لقطة Modon";
    return `<div class="modon-audit-breakdown-row${verifiedDeleted ? " is-deleted" : ""}">
      <div><strong>${escapeHtml(reference)}</strong><small>${escapeHtml(customer)}${product ? ` · ${escapeHtml(product)}` : ""}</small></div>
      <div><span>${localOrder ? `جوري: ${escapeHtml(localLabel)}` : "خارج جوري"}</span><small>${remoteLine}</small></div>
      <div class="modon-audit-row-actions">
        ${showVerify && localOrder && !verifiedDeleted ? `<button type="button" class="primary" onclick="verifyModonOrderInModon('${localOrder.id}')">تحقّق من مدن</button>` : ""}
        ${localOrder ? `<button type="button" class="ghost" onclick="openModonOrderDrawer('${localOrder.id}')">فتح الملف</button>` : `<span class="badge">للمراجعة فقط</span>`}
      </div>
    </div>`;
  }).join("")}</div>`;
}

// Ask Modon directly whether a Jory order still exists there. Used for orders
// that disappeared from the merchant list — confirms a real deletion vs a row
// that merely fell out of the last snapshot. Read-only: never touches cash/stock.
async function verifyModonOrderInModon(localOrderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === localOrderId);
  if (!order) return;
  const ids = localModonOrderIds(order);
  const primaryId = clean(order.external_order_id || order.qr_id || order.modon_order_id || order.remote_order_id || ids[0]);
  if (!primaryId) { alert("لا يوجد رقم Modon مسجّل لهذا الطلب حتى نتحقق منه."); return; }
  const employee = getEmployee(order.employeeId) || { id: order.employeeId, name: employeeName(order.employeeId) };
  const buttons = $$(`button[onclick="verifyModonOrderInModon('${localOrderId}')"]`);
  buttons.forEach((button) => { button.disabled = true; button.textContent = "جاري التحقق..."; });
  try {
    const rows = await provider.getOrdersByIds(employee, [primaryId]);
    const idSet = new Set(ids);
    const found = rows.some((row) => remoteOrderIds(row).some((id) => idSet.has(id) || id === primaryId));
    if (found) {
      alert(`الطلب ${primaryId} ما زال موجوداً في مدن — لم يُحذف. غالبًا خرج من آخر لقطة فقط، وسيظهر عند التحديث القادم.`);
    } else {
      const before = snapshot(order);
      order.modon_verified_missing = true;
      order.modon_verified_missing_at = now();
      const note = `تحقق مباشر من مدن: الطلب ${primaryId} غير موجود في حساب مدن (محذوف من نظامهم).`;
      if (!clean(order.issue_notes).includes(note)) order.issue_notes = [order.issue_notes, note].filter(Boolean).join(" - ");
      order.updated_at = now();
      addAudit("تأكيد حذف طلب من مدن", "modonOrder", order.id, primaryId, note, before, order);
      await saveAfterExternalChange(null, "جاري حفظ نتيجة التحقق...");
      renderAll();
      alert(`تأكيد: الطلب ${primaryId} غير موجود في مدن — تم حذفه من حسابهم.\nحُفظت الملاحظة في ملف الطلب، ولم يتغيّر شيء في القاصة أو المخزون.`);
    }
  } catch (error) {
    notifyOperationError(error, "تعذر التحقق من الطلب في مدن");
  } finally {
    buttons.forEach((button) => { button.disabled = false; button.textContent = "تحقّق من مدن"; });
  }
}

function renderModonAuditBreakdown(result) {
  const sections = {
    internal: ["طلبات جوري المحفوظة", result.internalOrders, "local"],
    remote: ["طلبات Modon في آخر لقطة", result.remoteOrders, "remote"],
    matched: ["الطلبات المطابقة", result.matched, "matched"],
    internalOnly: ["موجودة في جوري فقط", result.internalOnly, "local"],
    externalOnly: ["موجودة في Modon فقط", result.externalOnlyOrders, "remote"],
    statusDifferences: ["اختلافات الحالة", result.statusDifferences, "difference"],
    deliveredUnpaid: ["واصل غير مقبوض", result.deliveredUnpaid, "local"],
    returnedPending: ["راجع ينتظر الاستلام", result.returnedPending, "local"],
  };
  const [title, items, type] = sections[modonAuditSelectedCategory] || sections.internalOnly;
  const showVerify = modonAuditSelectedCategory === "internalOnly";
  const hint = showVerify
    ? "هذه الطلبات في نظامك ولم تظهر في مدن. اضغط «تحقّق من مدن» ليؤكّد إن كانت مدن قد حذفتها."
    : "كل رقم أعلاه يفتح القائمة التي كوّنته.";
  return `<section class="modon-audit-breakdown">
    <div class="modon-audit-breakdown-head"><div><strong>${title}</strong><small>${hint}</small></div><span class="badge">${items.length}</span></div>
    ${modonAuditRows(items, type, showVerify)}
  </section>`;
}

function buildModonReconciliation(employeeId = activeEmployeeId(), range = null) {
  const orders = accounting.scopedOrders(employeeId)
    .filter((order) => !isCancelledModonOrder(order))
    .filter((order) => !range || dateMatchesRange(modonReconciliationItemDate(order), range));
  const accounts = (repo.state.modonExternalStats?.accounts || [])
    .filter((account) => {
      if (employeeId !== "all") return account.employeeId === employeeId;
      return canViewAllModonAccounts() || account.employeeId === currentEmployee()?.id;
    });
  const externalOrders = accounts
    .flatMap((account) => account.orders || [])
    .filter((order) => !range || dateMatchesRange(modonReconciliationItemDate(order), range));
  const scopedAlias = (ownerId, alias) => `${clean(ownerId)}:${clean(alias)}`;
  const externalIds = new Set(externalOrders.flatMap((order) => remoteOrderIds(order).map((id) => scopedAlias(order.employeeId, id))));
  const internalIds = new Set(orders.flatMap((order) => localModonOrderIds(order).map((id) => scopedAlias(order.employeeId, id))));
  const remoteByAlias = new Map();
  externalOrders.forEach((order) => remoteOrderIds(order).forEach((id) => remoteByAlias.set(scopedAlias(order.employeeId, id), order)));
  const invoiceIds = new Set();
  const scopedOrderIds = new Set(orders.map((order) => order.id));
  const scopedInvoices = repo.state.deliveryInvoices.filter((invoice) => {
    if (employeeId !== "all" && invoice.employeeId !== employeeId) return false;
    const linkedToScopedOrder = (invoice.order_ids || []).some((id) => scopedOrderIds.has(id));
    return linkedToScopedOrder || !range || dateMatchesRange(modonReconciliationItemDate(invoice), range);
  });
  scopedInvoices.forEach((invoice) => {
    (invoice.raw_response?.orders || []).forEach((order) => remoteOrderIds(order).forEach((id) => invoiceIds.add(id)));
    (invoice.order_ids || []).forEach((orderId) => {
      const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
      if (order) localModonOrderIds(order).forEach((id) => invoiceIds.add(id));
    });
  });
  const result = {
    internalTotal: orders.length,
    remoteTotal: externalOrders.length,
    internalOrders: orders,
    remoteOrders: externalOrders,
    range,
    hasExternalSnapshot: Boolean(repo.state.modonExternalStats?.fetchedAt),
    invoiceCount: scopedInvoices.length,
    externalOnlyOrders: externalOrders.filter((order) => !remoteOrderIds(order).some((id) => internalIds.has(scopedAlias(order.employeeId, id)))),
    matched: [],
    internalOnly: [],
    statusDifferences: [],
    collected: [],
    deliveredUnpaid: [],
    returnedReceived: [],
    returnedPending: [],
    pendingAtModon: [],
    issues: [],
    missing: [],
  };
  orders.forEach((order) => {
    const ids = localModonOrderIds(order);
    const visibleInModon = ids.some((id) => externalIds.has(scopedAlias(order.employeeId, id)));
    const remoteOrder = ids.map((id) => remoteByAlias.get(scopedAlias(order.employeeId, id))).find(Boolean) || null;
    const visibleInInvoice = ids.some((id) => invoiceIds.has(id));
    if (remoteOrder) {
      const pair = { localOrder: order, remoteOrder };
      result.matched.push(pair);
      const localCategory = order.modon_cancelled ? "cancelled"
        : order.status === "returned" ? "returned"
          : (order.status === "delivered" || order.deliver_confirmed_fin) ? "delivered"
            : order.status === "issue" ? "issues"
              : ["new", "with_courier"].includes(order.status) ? "with_courier"
                : "other";
      const remoteCategory = remoteOrder.statusCategory || "other";
      if (localCategory !== "other" && remoteCategory !== "other" && localCategory !== remoteCategory) {
        result.statusDifferences.push({ ...pair, localCategory, remoteCategory });
      }
    } else if (result.hasExternalSnapshot) {
      result.internalOnly.push(order);
    }
    if (order.status === "returned" && order.returned_received_stock) result.returnedReceived.push(order);
    else if (order.status === "returned") result.returnedPending.push(order);
    else if (order.deliver_confirmed_fin) result.collected.push(order);
    else if (order.status === "delivered" || order.has_merchant_fin_record || visibleInInvoice) result.deliveredUnpaid.push(order);
    else if (order.status === "issue") result.issues.push(order);
    else if (visibleInModon) result.pendingAtModon.push(order);
    else if (result.hasExternalSnapshot) result.missing.push(order);
    else result.pendingAtModon.push(order);
  });
  result.externalOnly = result.externalOnlyOrders.length;
  return result;
}

function reconciliationList(title, orders) {
  return `<div class="reconciliation-list">
    <div class="section-title">${title}</div>
    ${orders.slice(0, 8).map((order) => `<div class="ledger-row"><span>${escapeHtml(order.external_order_id || order.internal_order_no || "-")}<br><small>${escapeHtml(order.customer_name || "")} - ${escapeHtml(order.product_name || "")}</small></span><strong>${money(order.merchant_price || order.price)}</strong></div>`).join("")}
    ${orders.length > 8 ? `<div class="hint">و ${orders.length - 8} طلبات أخرى...</div>` : ""}
  </div>`;
}

function renderEmployees() {
  $("#employeeAdminPanel")?.classList.toggle("hidden", !hasPermission("employees.manage"));
  const employees = hasPermission("employees.manage")
    ? repo.state.employees
    : repo.state.employees.filter((employee) => employee.id === currentEmployee()?.id);
  $("#employeeCards").innerHTML = employees.map((employee) => {
    const t = accounting.totals(employee.id);
    const permissionLabels = (employee.permissions || []).map(permissionLabel).slice(0, 4).join("، ");
    const modonState = employee.modonUsername ? `<span class="badge ok">Modon جاهز</span>` : `<span class="badge issue">Modon غير مكتمل</span>`;
    return `<div class="card-line">
      <div><strong>${employee.name}</strong><div class="hint">مستخدم البرنامج: ${escapeHtml(employee.username || "-")} - ${roleLabels[employee.role] || employee.role}</div><div class="hint">${permissionLabels || "لا توجد صلاحيات"}${(employee.permissions || []).length > 4 ? "..." : ""}</div></div>
      <div>${modonState}</div>
      <div>${employee.active ? `<span class="badge ok">نشط</span>` : `<span class="badge danger">موقوف</span>`}</div>
      <div>طلبات اليوم: <strong>${t.orderCount}</strong></div>
      <div>مسلمة: <strong>${t.delivered}</strong></div>
      <div>مشاكل: <strong>${t.issues}</strong></div>
      <div>صافي Modon: <strong>${money(t.merchantNet)}</strong></div>
      ${hasPermission("employees.manage") ? `<button class="ghost" type="button" onclick="editEmployee('${employee.id}')">تعديل</button>` : ""}
    </div>`;
  }).join("");
}

function buildInventoryIndexes() {
  const balances = new Map();
  const openingBalances = new Map();
  repo.state.products.forEach((product) => {
    const opening = number(product.openingQty);
    balances.set(product.id, opening);
    openingBalances.set(product.id, opening);
  });
  repo.state.stockMovements.forEach((movement) => {
    const quantity = number(movement.quantity);
    balances.set(movement.productId, (balances.get(movement.productId) || 0) + quantity);
    if (movement.meta?.source === "openingStock") {
      openingBalances.set(movement.productId, (openingBalances.get(movement.productId) || 0) + quantity);
    }
  });
  return { balances, openingBalances };
}

function setProductStockFilter(filter) {
  const select = $("#productStockFilter");
  if (!select) return;
  select.value = filter;
  resetListPage("products");
  renderProducts();
}

function setInventoryStockFilter(filter) {
  const select = $("#inventoryStockFilter");
  if (!select) return;
  select.value = filter;
  showInventorySection("inventoryBalanceSection");
  resetListPage("inventory");
  renderInventory();
}

function renderProducts() {
  if (!$("#productList")) return;
  const query = normalizeSearch($("#productCatalogSearch")?.value || "");
  const categoryFilter = clean($("#productCategoryFilter")?.value || "all");
  const stockFilter = clean($("#productStockFilter")?.value || "all");
  const { balances } = buildInventoryIndexes();
  const categories = Array.from(new Set(repo.state.products.map((product) => clean(product.category)).filter(Boolean))).sort((a, b) => a.localeCompare(b, "ar"));
  const activeCategoryFilter = categories.includes(categoryFilter) ? categoryFilter : "all";
  const categorySelect = $("#productCategoryFilter");
  if (categorySelect) {
    categorySelect.innerHTML = `<option value="all">كل التصنيفات</option>` + categories.map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`).join("");
    categorySelect.value = activeCategoryFilter;
  }
  const products = repo.state.products.filter((product) => {
    const qty = balances.get(product.id) || 0;
    const text = normalizeSearch([product.name, product.category, supplierName(product.supplierId)].join(" "));
    if (query && !text.includes(query)) return false;
    if (activeCategoryFilter !== "all" && clean(product.category) !== activeCategoryFilter) return false;
    if (stockFilter === "available") return qty > 1;
    if (stockFilter === "attention") return qty <= 1;
    if (stockFilter === "low") return qty > 0 && qty <= 1;
    if (stockFilter === "out") return qty <= 0;
    return true;
  });
  if (!repo.state.selectedProductId && products[0]) repo.state.selectedProductId = products[0].id;
  const allRows = repo.state.products.map((product) => ({ product, qty: balances.get(product.id) || 0 }));
  const inventoryValue = allRows.reduce((sum, row) => sum + row.qty * number(row.product.cost), 0);
  const availableCount = allRows.filter((row) => row.qty > 1).length;
  const attentionCount = allRows.filter((row) => row.qty <= 1).length;
  const summary = $("#productCatalogSummary");
  if (summary) {
    summary.innerHTML = `
      <button type="button" data-product-stock-filter="all"><span>المنتجات</span><strong>${repo.state.products.length}</strong><small>عرض الكل</small></button>
      <button type="button" data-product-stock-filter="available"><span>المتوفر</span><strong>${availableCount}</strong><small>جاهز للبيع</small></button>
      <button type="button" data-product-stock-filter="attention" class="${attentionCount ? "needs-attention" : ""}"><span>تحتاج متابعة</span><strong>${attentionCount}</strong><small>منخفض أو نافد</small></button>
      <button type="button" data-view-jump="inventory"><span>قيمة المخزون</span><strong>${money(inventoryValue)}</strong><small>فتح الأرصدة</small></button>
    `;
  }
  if ($("#productResultCount")) $("#productResultCount").textContent = `${products.length} منتج`;
  const pageInfo = paginateCollection(products, "products");
  $("#productList").innerHTML = pageInfo.rows.map((product) => {
    const qty = balances.get(product.id) || 0;
    const stockKind = qty <= 0 ? "out" : qty <= 1 ? "low" : "available";
    const stockLabel = qty <= 0 ? "نافد" : qty <= 1 ? "منخفض" : "متوفر";
    return `<article class="product-directory-card ${repo.state.selectedProductId === product.id ? "selected" : ""}">
      <button type="button" class="product-card-select" onclick="selectProduct('${product.id}')">
        <span class="product-card-avatar">${escapeHtml((product.name || "م").trim().charAt(0) || "م")}</span>
        <span class="product-card-copy">
          <strong>${escapeHtml(product.name)}</strong>
          <small>${escapeHtml(product.category || "غير مصنف")} · ${escapeHtml(supplierName(product.supplierId) || "بدون مورد")}</small>
        </span>
        <span class="product-stock-badge ${stockKind}">${stockLabel} · ${qty}</span>
      </button>
      <div class="product-card-prices">
        <div><span>المفرد</span><strong>${money(product.retailPrice ?? product.price)}</strong></div>
        <div><span>الجملة</span><strong>${money(product.wholesalePrice ?? product.retailPrice ?? product.price)}</strong></div>
      </div>
    </article>`;
  }).join("") || `<div class="empty product-empty-state"><strong>${repo.state.products.length ? "لا توجد نتائج مطابقة" : "ابدأ بإضافة أول منتج"}</strong><span>${repo.state.products.length ? "غيّر البحث أو الفلاتر لعرض منتجات أخرى." : "سجّل اسم المنتج وأسعاره، ثم أضف رصيده من فاتورة شراء أو المخزون الافتتاحي."}</span>${hasPermission("inventory.manage") ? `<button class="primary" type="button" data-new-product>إضافة منتج</button>` : ""}</div>`;
  renderListPagination("#productCatalogPagination", "products", pageInfo);
  renderProductDetails();
}

function renderProductDetails() {
  const product = getProduct(repo.state.selectedProductId) || repo.state.products[0];
  const box = $("#productDetails");
  if (!box) return;
  if (!product) {
    box.className = "product-profile-empty";
    box.innerHTML = `<span class="product-profile-empty-icon">+</span><strong>لا يوجد منتج محدد</strong><p>${repo.state.products.length ? "اختر منتجًا من القائمة لفتح ملفه وأسعاره وحركاته." : "أضف منتجًا جديدًا لبدء إدارة الأسعار والمخزون."}</p>${hasPermission("inventory.manage") ? `<button class="primary" type="button" data-new-product>منتج جديد</button>` : ""}`;
    return;
  }
  const movements = repo.state.stockMovements
    .filter((item) => item.productId === product.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const movementPage = paginateCollection(movements, "productMovements");
  const opening = openingStockOf(product.id);
  const qty = stockOf(product.id);
  const stockKind = qty <= 0 ? "out" : qty <= 1 ? "low" : "available";
  const stockLabel = qty <= 0 ? "نافد من المخزون" : qty <= 1 ? "رصيد منخفض" : "متوفر";
  const retailPrice = number(product.retailPrice ?? product.price);
  const wholesalePrice = number(product.wholesalePrice ?? product.retailPrice ?? product.price);
  box.className = "";
  box.innerHTML = `
    <header class="product-profile-header">
      <div>
        <span class="eyebrow">${escapeHtml(product.category || "غير مصنف")}</span>
        <h2>${escapeHtml(product.name)}</h2>
        <p>${escapeHtml(supplierName(product.supplierId) || "بدون مورد محدد")}</p>
      </div>
      <div class="product-profile-status ${stockKind}"><span>${stockLabel}</span><strong>${qty}</strong><small>قطعة حاليًا</small></div>
    </header>
    <div class="product-profile-actions">
      <button class="primary" type="button" data-view-jump="inventory">عرض في المخزون</button>
      ${hasPermission("inventory.manage") ? `<button class="ghost" type="button" onclick="openProductEdit('${product.id}')">تعديل المنتج</button><button class="ghost" type="button" onclick="openStockAdjustment('${product.id}')">تسوية الرصيد</button><button class="danger-button" type="button" onclick="deleteInventoryProduct('${product.id}')">حذف المنتج</button>` : ""}
    </div>
    <div class="product-profile-metrics">
      <div><span>الرصيد الافتتاحي</span><strong>${opening}</strong></div>
      <div><span>الرصيد الحالي</span><strong>${qty}</strong></div>
      <div><span>قيمة الرصيد</span><strong>${money(qty * product.cost)}</strong></div>
    </div>
    <section class="product-pricing-section">
      <div class="product-section-title"><span>الأسعار والربحية</span></div>
      <div class="product-pricing-grid">
        <div><span>كلفة الوحدة</span><strong>${money(product.cost)}</strong></div>
        <div><span>سعر المفرد</span><strong>${money(retailPrice)}</strong><small>هامش ${money(retailPrice - number(product.cost))}</small></div>
        <div><span>سعر الجملة</span><strong>${money(wholesalePrice)}</strong><small>هامش ${money(wholesalePrice - number(product.cost))}</small></div>
      </div>
    </section>
    <div class="product-section-title"><span>آخر حركات المنتج</span><strong>${movements.length} حركة</strong></div>
    <div class="table-wrap product-movements-table">
      <table>
        <thead><tr><th>التاريخ</th><th>الحركة</th><th>الكمية</th><th>القيمة</th><th>المرجع</th></tr></thead>
        <tbody>${movementPage.rows.map((item) => {
          const unitCost = item.meta?.unitCost ?? product.cost;
          return `<tr><td data-label="التاريخ">${formatDate(item.createdAt)}</td><td data-label="الحركة">${escapeHtml(item.reason)}</td><td data-label="الكمية"><span class="movement-quantity ${number(item.quantity) < 0 ? "out" : "in"}">${number(item.quantity) > 0 ? "+" : ""}${item.quantity}</span></td><td data-label="القيمة">${money(Math.abs(item.quantity) * unitCost)}</td><td data-label="المرجع">${escapeHtml(item.invoiceId || item.meta?.notes || "-")}</td></tr>`;
        }).join("") || emptyRow(5, "لا توجد حركة لهذا المنتج.")}</tbody>
      </table>
    </div>
    <div class="pagination-bar" id="productMovementsPagination"></div>
  `;
  renderListPagination("#productMovementsPagination", "productMovements", movementPage);
}

function renderInventory() {
  const canManageInventory = hasPermission("inventory.manage");
  $$("#inventory [data-new-product]").forEach((button) => button.classList.toggle("hidden", !canManageInventory));
  const { balances, openingBalances } = buildInventoryIndexes();
  const rows = repo.state.products.map((product) => {
    const opening = openingBalances.get(product.id) || 0;
    const qty = balances.get(product.id) || 0;
    const value = qty * number(product.cost);
    return { product, opening, qty, value };
  });
  const totalQty = rows.reduce((sum, row) => sum + row.qty, 0);
  const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
  const lowCount = rows.filter((row) => row.qty > 0 && row.qty <= 1).length;
  const outCount = rows.filter((row) => row.qty <= 0).length;
  $("#inventorySummary").innerHTML = [
    ["عدد المنتجات", rows.length, "", "all", "عرض كل الأرصدة"],
    ["إجمالي القطع", totalQty, "", "all", "الكمية الحالية"],
    ["قيمة المخزون", money(totalValue), "", "all", "حسب كلفة الشراء"],
    ["رصيد منخفض", lowCount, lowCount ? "attention" : "", "low", "يحتاج شراء"],
    ["نافد", outCount, outCount ? "danger" : "", "out", "غير متوفر"],
  ].map(([label, value, kind, filter, hint]) => `<button type="button" data-inventory-stock-filter="${filter}" class="${kind}"><span>${label}</span><strong>${value}</strong><small>${hint}</small></button>`).join("");
  const query = normalizeSearch($("#inventorySearch")?.value || "");
  const stockFilter = clean($("#inventoryStockFilter")?.value || "all");
  const filteredRows = rows.filter(({ product, qty }) => {
    const text = normalizeSearch([product.name, product.category, supplierName(product.supplierId)].join(" "));
    if (query && !text.includes(query)) return false;
    if (stockFilter === "available") return qty > 1;
    if (stockFilter === "low") return qty > 0 && qty <= 1;
    if (stockFilter === "out") return qty <= 0;
    return true;
  });
  const pageInfo = paginateCollection(filteredRows, "inventory");
  $("#inventoryTable").innerHTML = pageInfo.rows.map(({ product, opening, qty }) => {
    const actions = canManageInventory
      ? `<button class="ghost" type="button" onclick="openStockAdjustment('${product.id}')">تسوية الرصيد</button>`
      : "";
    const stockKind = qty <= 0 ? "out" : qty <= 1 ? "low" : "available";
    const stockLabel = qty <= 0 ? "نافد" : qty <= 1 ? "منخفض" : "متوفر";
    return `<tr class="inventory-row ${stockKind}">
      <td data-label="المنتج"><strong>${escapeHtml(product.name)}</strong></td>
      <td data-label="التصنيف والمورد"><span>${escapeHtml(product.category || "غير مصنف")}</span><small class="table-secondary">${escapeHtml(supplierName(product.supplierId) || "بدون مورد")}</small></td>
      <td data-label="الافتتاحي">${opening}</td>
      <td data-label="الرصيد"><span class="inventory-stock-state ${stockKind}"><strong>${qty}</strong><small>${stockLabel}</small></span></td>
      <td data-label="الكلفة">${money(product.cost)}</td>
      <td data-label="سعر المفرد">${money(product.retailPrice ?? product.price)}</td>
      <td data-label="سعر الجملة">${money(product.wholesalePrice ?? product.retailPrice ?? product.price)}</td>
      <td data-label="قيمة الرصيد"><strong>${money(qty * product.cost)}</strong></td>
      <td data-label="الإجراءات"><div class="inventory-row-actions"><button class="primary" type="button" onclick="selectProduct('${product.id}')">ملف المنتج</button>${actions}</div></td>
    </tr>`;
  }).join("") || emptyRow(9, "لا توجد منتجات مطابقة.");
  renderListPagination("#inventoryPagination", "inventory", pageInfo);

  const movementQuery = normalizeSearch($("#stockMovementSearch")?.value || "");
  const filteredMovements = repo.state.stockMovements
    .filter((item) => dateMatchesRange(item.createdAt, "stockMovements"))
    .filter((item) => {
      const text = normalizeSearch([
        productName(item.productId),
        item.reason,
        item.invoiceId,
        item.meta?.notes,
        supplierName(item.supplierId),
        employeeName(item.employeeId),
      ].join(" "));
      return !movementQuery || text.includes(movementQuery);
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const movementPage = paginateCollection(filteredMovements, "stockMovements");
  $("#stockMovements").innerHTML = movementPage.rows.map((item) => {
    const unitCost = item.meta?.unitCost ?? getProduct(item.productId)?.cost ?? 0;
    const quantity = number(item.quantity);
    return `<article class="inventory-movement-card ${quantity < 0 ? "out" : "in"}">
      <span class="inventory-movement-icon">${quantity < 0 ? "−" : "+"}</span>
      <div class="inventory-movement-copy">
        <strong>${escapeHtml(productName(item.productId))}</strong>
        <span>${escapeHtml(item.reason)}</span>
        <small>${formatDate(item.createdAt)} · ${escapeHtml(employeeName(item.employeeId))}${item.supplierId ? ` · ${escapeHtml(supplierName(item.supplierId))}` : ""}</small>
      </div>
      <div class="inventory-movement-value"><strong>${quantity > 0 ? "+" : ""}${quantity}</strong><span>${money(Math.abs(quantity) * unitCost)}</span><small>${escapeHtml(item.invoiceId || item.meta?.notes || "بدون مرجع")}</small></div>
    </article>`;
  }).join("") || `<div class="empty">لا توجد حركة مخزون.</div>`;
  renderListPagination("#stockMovementsPagination", "stockMovements", movementPage);
}

function openProductEdit(productId) {
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية تعديل المنتجات.")) return;
  const product = productId ? getProduct(productId) : null;
  if (productId && !product) return alert("المنتج غير موجود.");
  const isNew = !product;
  const form = $("#productEditForm");
  form.reset();
  form.productId.value = product?.id || "";
  form.name.value = product?.name || "";
  form.category.value = product?.category || "";
  form.cost.value = number(product?.cost);
  form.retailPrice.value = number(product?.retailPrice ?? product?.price);
  form.wholesalePrice.value = number(product?.wholesalePrice ?? product?.retailPrice ?? product?.price);
  form.supplierId.innerHTML = `<option value="">بدون مورد محدد</option>` + repo.state.suppliers.map((supplier) => `<option value="${escapeAttr(supplier.id)}">${escapeHtml(supplier.name)}</option>`).join("");
  form.supplierId.value = product?.supplierId || "";
  $("#productEditTitle").textContent = isNew ? "إضافة منتج جديد" : "تعديل بيانات المنتج";
  $("#productEditTitle").nextElementSibling.textContent = isNew ? "المنتج يبدأ برصيد صفر؛ أضف الرصيد من الشراء أو المخزون الافتتاحي." : "تعديل الأسعار والكلفة لا يغير رصيد المخزون.";
  $("#productEditSubmit").textContent = isNew ? "حفظ المنتج" : "حفظ التعديل";
  const modal = $("#productEditModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => form.name.focus(), 30);
}

function closeProductEdit() {
  const modal = $("#productEditModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  $("#productEditForm")?.reset();
}

async function saveProductEdit(event) {
  event.preventDefault();
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية تعديل المنتجات.")) return;
  const values = new FormData(event.target);
  const productId = clean(values.get("productId"));
  const product = productId ? getProduct(productId) : null;
  if (productId && !product) return alert("المنتج غير موجود.");
  const isNew = !product;
  const name = clean(values.get("name"));
  const category = clean(values.get("category"));
  const supplierId = clean(values.get("supplierId"));
  const cost = number(values.get("cost"));
  const retailPrice = number(values.get("retailPrice"));
  const wholesalePrice = number(values.get("wholesalePrice"));
  if (!name) return alert("اكتب اسم المنتج.");
  if ([cost, retailPrice, wholesalePrice].some((value) => value < 0)) return alert("الأسعار لا يمكن أن تكون سالبة.");
  const duplicate = repo.state.products.find((item) => item.id !== product?.id && clean(item.name).toLowerCase() === name.toLowerCase());
  if (duplicate) return alert("يوجد منتج آخر بالاسم نفسه. اختر اسمًا مختلفًا.");
  const before = product ? snapshot(product) : null;
  const submitter = event.submitter || event.target.querySelector('button[type="submit"]');
  try {
    let savedProduct = product;
    await withBusy(submitter, isNew ? "جاري إضافة المنتج..." : "جاري حفظ التعديل...", async () => {
      await commitConfirmedMutation(async () => {
        if (isNew) {
          savedProduct = { id: crypto.randomUUID(), supplierId, name, category: category || "غير مصنف", cost, retailPrice, wholesalePrice, price: retailPrice, openingQty: 0, createdAt: now(), updatedAt: now() };
          repo.state.products.push(savedProduct);
          repo.state.selectedProductId = savedProduct.id;
          addAudit("إضافة منتج", "product", savedProduct.id, savedProduct.name, "إضافة منتج جديد إلى الكتالوج", null, snapshot(savedProduct));
        } else {
          Object.assign(savedProduct, { supplierId, name, category: category || "غير مصنف", cost, retailPrice, wholesalePrice, price: retailPrice, updatedAt: now() });
          addAudit("تعديل منتج", "product", savedProduct.id, savedProduct.name, "تعديل بيانات المنتج وأسعاره", before, snapshot(savedProduct));
        }
      });
    });
    closeProductEdit();
    renderAll();
    alert(isNew ? `تمت إضافة ${savedProduct.name} إلى المنتجات.` : `تم تحديث بيانات ${savedProduct.name}.`);
  } catch (error) {
    notifyOperationError(error, isNew ? "تعذر إضافة المنتج" : "تعذر تعديل المنتج");
  }
}

function openStockAdjustment(productId) {
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية تعديل المخزون.")) return;
  const product = getProduct(productId);
  if (!product) return alert("المنتج غير موجود.");
  const currentQuantity = stockOf(product.id);
  const form = $("#stockAdjustmentForm");
  form.productId.value = product.id;
  form.actualQuantity.value = currentQuantity;
  form.reason.value = "";
  $("#stockAdjustmentProduct").textContent = product.name;
  $("#stockAdjustmentCurrent").textContent = currentQuantity;
  const modal = $("#stockAdjustmentModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => form.actualQuantity.focus(), 30);
}

function closeStockAdjustment() {
  const modal = $("#stockAdjustmentModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  $("#stockAdjustmentForm")?.reset();
}

async function saveStockAdjustment(event) {
  event.preventDefault();
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية تعديل المخزون.")) return;
  const form = new FormData(event.target);
  const product = getProduct(clean(form.get("productId")));
  if (!product) return alert("المنتج غير موجود.");
  const actualQuantity = number(form.get("actualQuantity"));
  const reason = clean(form.get("reason"));
  if (!Number.isInteger(actualQuantity) || actualQuantity < 0) return alert("أدخل كمية صحيحة تساوي صفرًا أو أكثر.");
  if (!reason) return alert("اكتب سبب تسوية المخزون.");
  const currentQuantity = stockOf(product.id);
  const difference = actualQuantity - currentQuantity;
  if (!difference) return alert("الرصيد المدخل مطابق للرصيد الحالي ولا يحتاج تسوية.");
  const submitter = event.submitter || event.target.querySelector('button[type="submit"]');
  try {
    await withBusy(submitter, "جاري حفظ التسوية...", async () => {
      await commitConfirmedMutation(async () => {
        const reference = `ADJ-${Date.now()}`;
        addStockMovement(product.id, reference, difference, `تسوية مخزون: ${reason}`, operationEmployeeId(), product.supplierId, {
          source: "inventoryAdjustment",
          reason,
          beforeQuantity: currentQuantity,
          afterQuantity: actualQuantity,
          unitCost: number(product.cost),
        });
        addAudit("تسوية رصيد مخزون", "product", product.id, product.name, `${currentQuantity} ← ${actualQuantity} - ${reason}`, { quantity: currentQuantity }, { quantity: actualQuantity });
      });
    });
    closeStockAdjustment();
    renderAll();
    alert(`تم تعديل رصيد ${product.name} من ${currentQuantity} إلى ${actualQuantity}.`);
  } catch (error) {
    notifyOperationError(error, "تعذر حفظ تسوية المخزون");
  }
}

async function deleteInventoryProduct(productId) {
  if (!requirePermission("inventory.manage", "ليست لديك صلاحية حذف المنتجات.")) return;
  const product = getProduct(productId);
  if (!product) return alert("المنتج غير موجود.");
  const usedInSales = repo.state.invoices.some((invoice) => invoice.productId === product.id || (invoice.lines || []).some((line) => line.productId === product.id));
  const usedInPurchases = repo.state.purchaseInvoices.some((invoice) => (invoice.lines || []).some((line) => line.productId === product.id));
  const usedInModon = repo.state.deliveryOrders.some((order) => order.product_id === product.id);
  const hasOperationalMovements = repo.state.stockMovements.some((movement) => movement.productId === product.id
    && movement.meta?.source !== "openingStock"
    && movement.meta?.source !== "inventoryAdjustment"
    && movement.reason !== "مخزون افتتاحي"
    && !String(movement.reason || "").startsWith("تسوية مخزون:"));
  if (usedInSales || usedInPurchases || usedInModon || hasOperationalMovements) {
    return alert("لا يمكن حذف هذا المنتج لأن له فواتير أو حركات بيع/شراء/Modon. صحح رصيده عبر زر تسوية الرصيد حتى يبقى السجل المحاسبي سليمًا.");
  }
  const currentQuantity = stockOf(product.id);
  if (!confirm(`حذف المنتج "${product.name}" نهائيًا؟ سيتم حذف رصيده الافتتاحي وتسوياته (${currentQuantity} قطعة).`)) return;
  const before = snapshot(product);
  repo.state.products = repo.state.products.filter((item) => item.id !== product.id);
  repo.state.stockMovements = repo.state.stockMovements.filter((movement) => movement.productId !== product.id);
  if (repo.state.selectedProductId === product.id) repo.state.selectedProductId = repo.state.products[0]?.id || null;
  addAudit("حذف منتج خاطئ", "product", product.id, product.name, `حذف منتج بلا فواتير - الرصيد ${currentQuantity}`, before, null);
  try {
    await repo.saveNow();
    fillProductSelect();
    fillCategoryOptions();
    renderAll();
    alert("تم حذف المنتج ورصيده بنجاح.");
  } catch (error) {
    notifyOperationError(error, "تعذر حذف المنتج");
  }
}

function renderOpeningStock() {
  const query = normalizeSearch($("#openingStockSearch")?.value || "");
  const rows = repo.state.stockMovements
    .filter((item) => item.meta?.source === "openingStock")
    .filter((item) => {
      const product = getProduct(item.productId);
      const text = normalizeSearch([product?.name, product?.category, item.meta?.notes, item.meta?.date].join(" "));
      return !query || text.includes(query);
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const pageInfo = paginateCollection(rows, "openingStock");
  $("#openingStockList").innerHTML = pageInfo.rows.map((item) => `<div class="card-line">
    <div><strong>${productName(item.productId)}</strong><div class="hint">${escapeHtml(getProduct(item.productId)?.category || "غير مصنف")} - ${item.meta?.date || formatDate(item.createdAt)} - ${escapeHtml(item.meta?.notes || "")}</div></div>
    <div>الكمية: <strong>${item.quantity}</strong></div>
    <div>الكلفة: <strong>${money(item.meta?.unitCost || getProduct(item.productId)?.cost || 0)}</strong></div>
  </div>`).join("") || `<div class="empty">لا توجد قيود مخزون افتتاحي.</div>`;
  renderListPagination("#openingStockPagination", "openingStock", pageInfo);
}

function renderPurchaseInvoices() {
  const canCancelPurchase = hasPermission("inventory.purchase.cancel");
  const query = normalizeSearch($("#purchaseInvoiceSearch")?.value || "");
  const supplierFilter = clean($("#purchaseInvoiceSupplierFilter")?.value || "all");
  const statusFilter = clean($("#purchaseInvoiceStatusFilter")?.value || "all");
  const filteredInvoices = repo.state.purchaseInvoices
    .filter((invoice) => supplierFilter === "all" || invoice.supplierId === supplierFilter)
    .filter((invoice) => dateMatchesRange(invoice.createdAt || invoice.date, "supplierInvoices"))
    .filter((invoice) => {
      const lineText = (invoice.lines || []).map((line) => `${line.name} ${line.category}`).join(" ");
      const text = normalizeSearch([invoice.number, invoice.supplierInvoiceNo, supplierName(invoice.supplierId), lineText, invoice.date].join(" "));
      return !query || text.includes(query);
    })
    .filter((invoice) => {
      const balance = number(invoice.balance);
      if (statusFilter === "active") return !invoice.cancelled;
      if (statusFilter === "cancelled") return invoice.cancelled;
      if (statusFilter === "paid") return !invoice.cancelled && balance <= 0;
      if (statusFilter === "open") return !invoice.cancelled && balance > 0;
      return true;
    })
    .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
  const activeInvoices = filteredInvoices.filter((invoice) => !invoice.cancelled);
  const purchaseTotal = activeInvoices.reduce(sumBy("total"), 0);
  const paidTotal = activeInvoices.reduce(sumBy("paidAmount"), 0);
  const balanceTotal = activeInvoices.reduce(sumBy("balance"), 0);
  const purchaseOverview = $("#purchaseArchiveOverview");
  if (purchaseOverview) {
    purchaseOverview.innerHTML = `
      <div><span>نتائج العرض</span><strong>${filteredInvoices.length}</strong><small>فاتورة شراء</small></div>
      <div><span>إجمالي المشتريات</span><strong>${money(purchaseTotal)}</strong><small>للفواتير الفعالة</small></div>
      <div><span>المدفوع للموردين</span><strong>${money(paidTotal)}</strong><small>عند تسجيل الفواتير</small></div>
      <div class="${balanceTotal > 0 ? "has-balance" : ""}"><span>المتبقي للموردين</span><strong>${money(balanceTotal)}</strong><small>ذمم شراء مفتوحة</small></div>
    `;
  }
  const pageInfo = paginateCollection(filteredInvoices, "purchaseInvoices");
  $("#purchaseInvoiceList").innerHTML = pageInfo.rows.map((invoice) => `<div class="purchase-invoice-card ${repo.state.selectedPurchaseInvoiceId === invoice.id ? "selected" : ""}">
      <div class="purchase-invoice-main"><span class="eyebrow">${escapeHtml(invoice.supplierInvoiceNo || "بدون رقم مورد")}</span><strong>${invoice.number}</strong><div class="hint">${supplierName(invoice.supplierId)} · ${invoice.date} · ${invoice.lines.length} بنود</div></div>
      <div class="purchase-invoice-amount"><span>صافي الفاتورة</span><strong>${money(invoice.total)}</strong></div>
      <div class="purchase-invoice-amount ${invoice.balance > 0 ? "outstanding" : ""}"><span>المتبقي</span><strong>${money(invoice.balance || 0)}</strong></div>
      <div>${invoice.cancelled ? `<span class="badge danger">ملغاة</span>` : invoice.balance > 0 ? `<span class="badge issue">متبقي للمورد</span>` : `<span class="badge ok">مسددة</span>`}</div>
      <div class="purchase-invoice-actions"><button class="ghost" onclick="selectPurchaseInvoice('${invoice.id}')">عرض</button><button class="primary" onclick="printPurchaseInvoice('${invoice.id}')">طباعة</button>${canCancelPurchase && !invoice.cancelled ? `<button class="danger-button" onclick="cancelPurchaseInvoice('${invoice.id}')">إلغاء</button>` : ""}</div>
    </div>`).join("") || `<div class="empty">لا توجد فواتير شراء مطابقة للفلاتر.</div>`;
  renderListPagination("#purchaseInvoicePagination", "purchaseInvoices", pageInfo);
  renderPurchaseInvoiceDetails();
}

function renderSuppliers() {
  if (!repo.state.selectedSupplierId && repo.state.suppliers[0]) repo.state.selectedSupplierId = repo.state.suppliers[0].id;
  const selectedSupplier = getSupplier(repo.state.selectedSupplierId);
  const totalPayable = repo.state.suppliers.reduce((sum, supplier) => sum + supplierBalance(supplier.id).payable, 0);
  const totalReceivable = repo.state.suppliers.reduce((sum, supplier) => sum + supplierBalance(supplier.id).receivable, 0);
  const supplierOverview = $("#supplierOverview");
  if (supplierOverview) {
    const selectedBalance = selectedSupplier ? supplierBalance(selectedSupplier.id) : { payable: 0, receivable: 0 };
    supplierOverview.innerHTML = `
      <div class="supplier-overview-copy"><span class="eyebrow">حسابات الموردين</span><h2>${selectedSupplier ? escapeHtml(selectedSupplier.name) : "الموردون"}</h2><p>${selectedSupplier ? escapeHtml(selectedSupplier.phone || selectedSupplier.address || "بدون بيانات اتصال") : "لا يوجد مورد محدد"}</p></div>
      <div class="supplier-overview-metrics">
        <div><span>عدد الموردين</span><strong>${repo.state.suppliers.length}</strong></div>
        <div><span>إجمالي المستحق للموردين</span><strong>${money(totalPayable)}</strong></div>
        <div><span>إجمالي المستحق لنا</span><strong>${money(totalReceivable)}</strong></div>
        <div class="${selectedBalance.payable > 0 ? "selected-payable" : ""}"><span>رصيد المورد المحدد</span><strong>${selectedBalance.payable > 0 ? money(selectedBalance.payable) : selectedBalance.receivable > 0 ? `لنا ${money(selectedBalance.receivable)}` : money(0)}</strong></div>
      </div>
    `;
  }
  $("#supplierList").innerHTML = repo.state.suppliers.map((supplier) => {
    const products = repo.state.products.filter((product) => product.supplierId === supplier.id);
    const stockValue = products.reduce((sum, product) => sum + stockOf(product.id) * product.cost, 0);
    const balance = supplierBalance(supplier.id);
    const deletion = supplierDeletionStatus(supplier.id);
    return `<article class="supplier-account-card ${repo.state.selectedSupplierId === supplier.id ? "selected" : ""}">
      <header><span class="supplier-avatar">${escapeHtml((supplier.name || "م").trim().charAt(0) || "م")}</span><div><strong>${escapeHtml(supplier.name)}</strong><small>${escapeHtml(supplier.phone || "بدون هاتف")}</small></div></header>
      <div class="supplier-card-balances"><div><span>يطلبنا</span><strong>${money(balance.payable)}</strong></div><div><span>نطلبه</span><strong>${money(balance.receivable)}</strong></div></div>
      <div class="supplier-card-meta"><span>${products.length} منتجات</span><span>مخزون ${money(stockValue)}</span></div>
      <div class="supplier-card-actions">
        <button class="primary" onclick="selectSupplier(${jsArg(supplier.id)})">فتح كشف الحساب</button>
        ${hasPermission("inventory.manage") && deletion.canDelete ? `<button class="danger-button" onclick="deleteSupplier(${jsArg(supplier.id)})">حذف المورد</button>` : ""}
      </div>
    </article>`;
  }).join("") || `<div class="empty">لا يوجد موردون.</div>`;
  renderSupplierLedger();
}

function renderPurchaseInvoiceDetails() {
  const invoice = repo.state.purchaseInvoices.find((item) => item.id === repo.state.selectedPurchaseInvoiceId) || repo.state.purchaseInvoices[0];
  const box = $("#purchaseInvoiceDetails");
  if (!invoice) {
    box.className = "empty";
    box.textContent = "اختر فاتورة شراء لعرض تفاصيلها.";
    return;
  }
  box.className = "";
  const canCancelPurchase = hasPermission("inventory.purchase.cancel");
  box.innerHTML = `
    <header class="purchase-detail-header"><div><span class="eyebrow">${escapeHtml(invoice.supplierInvoiceNo || "فاتورة المورد")}</span><h3>${invoice.number}</h3><p>${supplierName(invoice.supplierId)} · ${invoice.date}</p></div>${invoice.cancelled ? `<span class="badge danger">ملغاة</span>` : invoice.balance > 0 ? `<span class="badge issue">متبقي للمورد</span>` : `<span class="badge ok">مسددة</span>`}</header>
    <div class="purchase-detail-metrics"><div><span>صافي الفاتورة</span><strong>${money(invoice.total)}</strong><small>خصم ${money(invoice.discount || 0)}</small></div><div><span>المدفوع</span><strong>${money(invoice.paidAmount || 0)}</strong><small>من القاصة</small></div><div class="${invoice.balance > 0 ? "outstanding" : ""}"><span>المتبقي</span><strong>${money(invoice.balance || 0)}</strong><small>${invoice.balance > 0 ? "ذمة للمورد" : "مسددة بالكامل"}</small></div></div>
    <div class="actions compact-actions"><button class="primary" onclick="printPurchaseInvoice('${invoice.id}')">طباعة</button>${canCancelPurchase && !invoice.cancelled ? `<button class="danger-button" onclick="cancelPurchaseInvoice('${invoice.id}')">إلغاء الفاتورة</button>` : ""}</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>المنتج</th><th>التصنيف</th><th>الكمية</th><th>الكلفة</th><th>الإجمالي</th></tr></thead>
        <tbody>${invoice.lines.map((line) => `<tr><td>${escapeHtml(line.name)}</td><td>${escapeHtml(line.category || getProduct(line.productId)?.category || "غير مصنف")}</td><td>${line.quantity}</td><td>${money(line.cost)}</td><td>${money(line.total)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderSupplierLedger() {
  const supplierId = repo.state.selectedSupplierId || repo.state.suppliers[0]?.id;
  const rows = supplierLedgerRows(supplierId);
  const canCancelSupplierPayment = hasPermission("cash.cancel");
  const supplier = getSupplier(supplierId);
  const balance = supplier ? supplierBalance(supplierId) : { payable: 0, receivable: 0 };
  const deletion = supplier ? supplierDeletionStatus(supplier.id) : { canDelete: false, blockers: [] };
  const linkedProducts = supplier ? repo.state.products.filter((product) => product.supplierId === supplierId) : [];
  const linkedStockMovements = supplier
    ? repo.state.stockMovements
      .filter((movement) => movement.supplierId === supplierId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];
  const header = $("#supplierLedgerHeader");
  if (header) {
    header.innerHTML = supplier ? `
      <div><span class="eyebrow">كشف حساب المورد</span><h2>${escapeHtml(supplier.name)}</h2><p>${escapeHtml(supplier.phone || "بدون هاتف")} · ${escapeHtml(supplier.address || "بدون عنوان")}</p></div>
      <div class="supplier-ledger-side">
        <div class="supplier-ledger-balances"><div><span>المستحق للمورد</span><strong>${money(balance.payable)}</strong></div><div><span>المستحق لنا</span><strong>${money(balance.receivable)}</strong></div></div>
        <div class="supplier-ledger-actions">
          ${hasPermission("cash.manage") ? `<button class="primary" onclick="openSupplierPaymentModal(${jsArg(supplier.id)})">تسديد المورد</button>` : ""}
          <button class="ghost" data-view-jump="purchaseInvoices">فاتورة شراء</button>
          ${hasPermission("inventory.manage") ? deletion.canDelete
            ? `<button class="danger-button" onclick="deleteSupplier(${jsArg(supplier.id)})">حذف المورد</button>`
            : `<button class="ghost supplier-delete-locked" type="button" disabled title="${escapeAttr(`لا يمكن الحذف: ${deletion.blockers.join("، ")}`)}">الحذف غير متاح</button>` : ""}
        </div>
      </div>
    ` : `<div><h2>كشف حساب المورد</h2><p>اختر موردًا من القائمة.</p></div>`;
  }
  $("#supplierLedger").innerHTML = supplier ? `
    <div class="table-wrap supplier-ledger-table-wrap">
      <table class="supplier-ledger-table">
        <thead><tr><th>التاريخ</th><th>الحركة</th><th>المرجع</th><th>الاتجاه</th><th>المبلغ</th><th></th></tr></thead>
        <tbody>${rows.map((row) => `<tr class="${row.cancelled ? "is-cancelled" : ""}">
          <td data-label="التاريخ">${row.date}</td>
          <td data-label="الحركة"><strong>${escapeHtml(row.label)}</strong></td>
          <td data-label="المرجع">${escapeHtml(row.ref)}</td>
          <td data-label="الاتجاه"><span class="badge ${row.direction === "يطلبنا" ? "issue" : row.direction === "نطلبه" ? "ok" : "danger"}">${escapeHtml(row.direction)}</span></td>
          <td data-label="المبلغ"><strong>${money(row.amount)}</strong></td>
          <td data-label="الإجراءات"><div class="table-actions"><button class="ghost" onclick="printSupplierLedgerItem('${row.id}')">طباعة</button>${canCancelSupplierPayment && row.paymentId && !row.cancelled ? `<button class="danger-button" onclick="cancelSupplierPayment('${row.paymentId}')">إلغاء</button>` : ""}</div></td>
        </tr>`).join("") || emptyRow(6, "لا توجد حركة لهذا المورد.")}</tbody>
      </table>
    </div>
    <section class="supplier-linked-inventory">
      <header class="supplier-linked-inventory-head">
        <div><span class="eyebrow">الارتباط بالمخزون</span><h3>المنتجات وحركات المخزون</h3></div>
        <div class="supplier-linked-inventory-stats">
          <span><strong>${linkedProducts.length}</strong> منتج مرتبط</span>
          <span><strong>${linkedStockMovements.length}</strong> حركة مخزون</span>
        </div>
      </header>
      <p class="supplier-linked-inventory-note">هذه بيانات مخزنية للتتبع فقط، ولا تغيّر رصيد المورد أو القاصة ما لم تكن مرتبطة بفاتورة شراء.</p>
      <div class="supplier-linked-grid">
        <details class="supplier-linked-card" open>
          <summary><span>المنتجات المرتبطة</span><strong>${linkedProducts.length}</strong></summary>
          <div class="table-wrap supplier-linked-table-wrap">
            <table class="supplier-linked-table">
              <thead><tr><th>المنتج</th><th>التصنيف</th><th>الرصيد</th><th>الكلفة</th><th>قيمة المخزون</th></tr></thead>
              <tbody>${linkedProducts.length ? linkedProducts.map((product) => {
                const quantity = stockOf(product.id);
                return `<tr>
                  <td data-label="المنتج"><strong>${escapeHtml(product.name)}</strong></td>
                  <td data-label="التصنيف">${escapeHtml(product.category || "غير مصنف")}</td>
                  <td data-label="الرصيد">${quantity}</td>
                  <td data-label="الكلفة">${money(product.cost || 0)}</td>
                  <td data-label="قيمة المخزون"><strong>${money(quantity * number(product.cost))}</strong></td>
                </tr>`;
              }).join("") : emptyRow(5, "لا توجد منتجات مرتبطة بهذا المورد.")}</tbody>
            </table>
          </div>
        </details>
        <details class="supplier-linked-card" open>
          <summary><span>حركات المخزون المرتبطة</span><strong>${linkedStockMovements.length}</strong></summary>
          <div class="table-wrap supplier-linked-table-wrap">
            <table class="supplier-linked-table supplier-stock-movement-table">
              <thead><tr><th>التاريخ</th><th>المنتج</th><th>الحركة</th><th>الكمية</th><th>القيمة</th><th>المرجع</th></tr></thead>
              <tbody>${linkedStockMovements.length ? linkedStockMovements.map((movement) => {
                const product = getProduct(movement.productId);
                const quantity = number(movement.quantity);
                const unitCost = number(movement.meta?.unitCost ?? product?.cost ?? 0);
                return `<tr>
                  <td data-label="التاريخ">${formatDate(movement.createdAt)}</td>
                  <td data-label="المنتج"><strong>${escapeHtml(product?.name || "منتج محذوف")}</strong></td>
                  <td data-label="الحركة">${escapeHtml(movement.reason || "حركة مخزون")}</td>
                  <td data-label="الكمية"><span class="supplier-stock-quantity ${quantity < 0 ? "out" : "in"}">${quantity > 0 ? "+" : ""}${quantity}</span></td>
                  <td data-label="القيمة">${money(Math.abs(quantity) * unitCost)}</td>
                  <td data-label="المرجع">${escapeHtml(movement.invoiceId || movement.meta?.notes || movement.id)}</td>
                </tr>`;
              }).join("") : emptyRow(6, "لا توجد حركات مخزون مرتبطة بهذا المورد.")}</tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  ` : `<div class="empty">اختر موردًا من القائمة لعرض كشف الحساب.</div>`;
}

function customerPayments(filter = {}) {
  return repo.state.customerDebtPayments.filter((payment) => {
    if (payment.cancelled) return false;
    if (filter.customerPhone && payment.customerPhone !== filter.customerPhone) return false;
    if (filter.invoiceId && payment.invoiceId !== filter.invoiceId) return false;
    if (filter.type && payment.type !== filter.type) return false;
    if (filter.installmentIndex !== undefined && number(payment.installmentIndex) !== number(filter.installmentIndex)) return false;
    return true;
  });
}

function invoicePaidAfterCreation(invoiceId) {
  const invoice = getInvoice(invoiceId);
  const direct = repo.state.customerDebtPayments
    .filter((payment) => !payment.cancelled && payment.invoiceId === invoiceId)
    .reduce(sumBy("amount"), 0);
  if (!invoice) return direct;
  return direct + number(customerGeneralAllocations(invoice.customerPhone).invoiceTotals.get(invoiceId));
}

function customerGeneralAllocations(customerPhone) {
  const invoices = repo.state.invoices
    .filter((invoice) => !invoice.cancelled && invoice.customerPhone === customerPhone && ["customerDebt", "installment"].includes(invoice.saleMode))
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  const invoiceTotals = new Map();
  const personalDebtTotals = new Map();
  const receivables = invoices.map((invoice) => ({
    key: `invoice:${invoice.id}`,
    kind: "invoice",
    id: invoice.id,
    createdAt: invoice.createdAt,
  }));
  customerManualDebts(customerPhone).forEach((debt) => {
    receivables.push({
      key: `personalDebt:${debt.id}`,
      kind: "personalDebt",
      id: debt.id,
      createdAt: debt.createdAt,
    });
  });
  receivables.sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  const capacities = new Map(invoices.map((invoice) => {
    const direct = repo.state.customerDebtPayments
      .filter((payment) => !payment.cancelled && payment.invoiceId === invoice.id)
      .reduce(sumBy("amount"), 0);
    return [`invoice:${invoice.id}`, Math.max(originalInvoiceReceivable(invoice) - direct, 0)];
  }));
  customerManualDebts(customerPhone).forEach((debt) => {
    const direct = repo.state.customerDebtPayments
      .filter((payment) => !payment.cancelled && payment.personalDebtId === debt.id)
      .reduce(sumBy("amount"), 0);
    capacities.set(`personalDebt:${debt.id}`, Math.max(number(debt.amount) - direct, 0));
  });
  const generalPayments = repo.state.customerDebtPayments
    .filter((payment) => !payment.cancelled && payment.customerPhone === customerPhone && !payment.invoiceId && !payment.personalDebtId)
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  generalPayments.forEach((payment) => {
    let remaining = number(payment.amount);
    for (const receivable of receivables) {
      if (remaining <= 0) break;
      const available = number(capacities.get(receivable.key));
      if (available <= 0) continue;
      const allocated = Math.min(available, remaining);
      capacities.set(receivable.key, available - allocated);
      const totals = receivable.kind === "invoice" ? invoiceTotals : personalDebtTotals;
      totals.set(receivable.id, number(totals.get(receivable.id)) + allocated);
      remaining -= allocated;
    }
  });
  return { invoiceTotals, personalDebtTotals };
}

function originalInvoiceReceivable(invoice) {
  if (!invoice) return 0;
  if (invoice.receivableAmount !== undefined) return number(invoice.receivableAmount);
  const debt = repo.state.customerDebts.find((item) => item.invoiceId === invoice.id);
  if (debt) return number(debt.amount);
  return Math.max(number(invoice.total) - number(invoice.paidAmount), 0);
}

function invoiceOpenBalance(invoice) {
  if (!invoice || !["customerDebt", "installment"].includes(invoice.saleMode)) return 0;
  const original = originalInvoiceReceivable(invoice);
  return Math.max(original - invoicePaidAfterCreation(invoice.id), 0);
}

function customerPhoneLabel(value) {
  const phone = clean(value);
  if (!phone.startsWith("customer:")) return phone;
  return clean(repo.state.customers.find((customer) => customer.phone === phone)?.contactPhone);
}

function customerManualDebts(customerPhone) {
  return repo.state.personalDebts
    .filter((debt) => !debt.cancelled && debt.customerPhone === customerPhone)
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
}

function personalDebtPaidAmount(personalDebtId) {
  const debt = repo.state.personalDebts.find((item) => item.id === personalDebtId);
  if (!debt || debt.cancelled) return 0;
  const direct = repo.state.customerDebtPayments
    .filter((payment) => !payment.cancelled && payment.personalDebtId === personalDebtId)
    .reduce(sumBy("amount"), 0);
  const allocated = debt.customerPhone
    ? number(customerGeneralAllocations(debt.customerPhone).personalDebtTotals.get(personalDebtId))
    : 0;
  return Math.min(number(debt.amount), direct + allocated);
}

function personalDebtOpenBalance(debtOrId) {
  const debt = typeof debtOrId === "string"
    ? repo.state.personalDebts.find((item) => item.id === debtOrId)
    : debtOrId;
  if (!debt || debt.cancelled) return 0;
  return Math.max(number(debt.amount) - personalDebtPaidAmount(debt.id), 0);
}

function customerOpenDebt(customerPhone, includeInstallments = true) {
  const invoiceBalance = repo.state.invoices
    .filter((invoice) => invoice.customerPhone === customerPhone && (includeInstallments ? ["customerDebt", "installment"].includes(invoice.saleMode) : invoice.saleMode === "customerDebt"))
    .reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const manualDebtBalance = customerManualDebts(customerPhone).reduce((sum, debt) => sum + personalDebtOpenBalance(debt), 0);
  return Math.max(invoiceBalance + manualDebtBalance, 0);
}

function installmentPaidAmount(invoiceId, index) {
  const invoice = getInvoice(invoiceId);
  const direct = customerPayments({ invoiceId, type: "installment", installmentIndex: index }).reduce(sumBy("amount"), 0);
  if (!invoice) return direct;
  let allocated = number(customerGeneralAllocations(invoice.customerPhone).invoiceTotals.get(invoiceId));
  for (let current = 0; current <= number(index); current += 1) {
    const item = invoice.installmentSchedule?.[current];
    if (!item) break;
    const directForItem = customerPayments({ invoiceId, type: "installment", installmentIndex: current }).reduce(sumBy("amount"), 0);
    const room = Math.max(number(item.amount) - directForItem, 0);
    const portion = Math.min(room, allocated);
    if (current === number(index)) return directForItem + portion;
    allocated -= portion;
  }
  return direct;
}

function installmentOpenBalance(invoice, index) {
  const item = invoice.installmentSchedule?.[index];
  if (!item) return 0;
  return Math.max(number(item.amount) - installmentPaidAmount(invoice.id, index), 0);
}

function prepareCustomerPayment(customerPhone, invoiceId = "", type = "general", installmentIndex = "", personalDebtId = "") {
  if (!requirePermission("debts.manage", "ليست لديك صلاحية قبض ديون الزبائن.")) return;
  const customer = repo.state.customers.find((item) => item.phone === customerPhone);
  const invoice = invoiceId ? getInvoice(invoiceId) : null;
  const personalDebt = personalDebtId ? repo.state.personalDebts.find((item) => item.id === personalDebtId && !item.cancelled) : null;
  $("#debtCustomerPhone").value = customerPhone;
  $("#debtCustomerSearch").value = customer?.name || invoice?.customerName || customerPhone;
  $("#debtInvoiceId").value = invoiceId;
  $("#debtPersonalDebtId").value = personalDebtId;
  $("#debtPaymentType").value = personalDebt ? "personalDebt" : type;
  $("#debtInstallmentIndex").value = installmentIndex;
  let amount = customerOpenDebt(customerPhone);
  let label = "دفعة عامة على الزبون";
  if (personalDebt) {
    amount = personalDebtOpenBalance(personalDebt);
    label = `تسديد دين يدوي ${personalDebt.number || ""}`.trim();
  }
  if (invoice && type === "debt") {
    amount = invoiceOpenBalance(invoice);
    label = `تسديد فاتورة ${invoice.number}`;
  }
  if (invoice && type === "installmentInvoice") {
    amount = invoiceOpenBalance(invoice);
    label = `تسديد أقساط فاتورة ${invoice.number}`;
  }
  if (invoice && type === "installment") {
    amount = installmentOpenBalance(invoice, installmentIndex);
    label = `تسديد قسط ${number(installmentIndex) + 1} من ${invoice.number}`;
  }
  $("#debtPaymentForm").amount.value = amount || "";
  $("#debtPaymentTarget").value = label;
  selectedCustomerPhone = customerPhone;
  showView("customers");
  openCustomerPaymentModal(customerPhone);
}

function openManualDebtForCustomer(customerPhone = "") {
  if (!requirePermission("debts.manage", "ليست لديك صلاحية إضافة دين على زبون.")) return;
  const customer = repo.state.customers.find((item) => item.phone === customerPhone);
  showView("vouchers");
  showVoucherTab("personalCashTab");
  $("#personalDebtCustomerSearch").value = customer?.name || "";
  $("#personalDebtCustomerPhone").value = customer?.phone || "";
  $("#personalDebtCustomerPhoneInput").value = customerPhoneLabel(customer?.phone || "");
  $("#personalDebtFundingSource").value = "cash";
  updatePersonalDebtEffect();
  setTimeout(() => (customer ? $("#personalDebtForm")?.amount : $("#personalDebtCustomerSearch"))?.focus(), 50);
}

function openCustomerPaymentModal(customerPhone = "") {
  if (!requirePermission("debts.manage", "ليست لديك صلاحية قبض ديون الزبائن.")) return;
  if (customerPhone && customerPhone !== $("#debtCustomerPhone")?.value) {
    const customer = repo.state.customers.find((item) => item.phone === customerPhone);
    $("#debtCustomerPhone").value = customerPhone;
    $("#debtCustomerSearch").value = customer?.name || customerPhone;
    $("#debtInvoiceId").value = "";
    $("#debtPersonalDebtId").value = "";
    $("#debtPaymentType").value = "general";
    $("#debtInstallmentIndex").value = "";
    $("#debtPaymentTarget").value = "دفعة عامة على الزبون";
    $("#debtPaymentForm").amount.value = customerOpenDebt(customerPhone) || "";
  }
  updateCustomerPaymentBalance();
  const modal = $("#customerPaymentModal");
  modal?.classList.remove("hidden");
  modal?.setAttribute("aria-hidden", "false");
  setTimeout(() => $("#debtPaymentForm")?.amount?.focus(), 30);
}

function closeCustomerPaymentModal() {
  const modal = $("#customerPaymentModal");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
  $("#debtCustomerSuggestions")?.classList.remove("open");
}

function updateCustomerPaymentBalance() {
  const container = $("#customerPaymentBalance");
  if (!container) return;
  const phone = clean($("#debtCustomerPhone")?.value);
  const invoiceId = clean($("#debtInvoiceId")?.value);
  const personalDebtId = clean($("#debtPersonalDebtId")?.value);
  const type = clean($("#debtPaymentType")?.value) || "general";
  const installmentIndex = clean($("#debtInstallmentIndex")?.value);
  const invoice = invoiceId ? getInvoice(invoiceId) : null;
  const personalDebt = personalDebtId ? repo.state.personalDebts.find((item) => item.id === personalDebtId && !item.cancelled) : null;
  const current = personalDebt
    ? personalDebtOpenBalance(personalDebt)
    : invoice && type === "installment"
      ? installmentOpenBalance(invoice, installmentIndex)
      : invoice
        ? invoiceOpenBalance(invoice)
        : customerOpenDebt(phone);
  const amount = number($("#debtPaymentForm")?.amount?.value);
  container.innerHTML = `
    <div><span>الرصيد الحالي</span><strong>${money(current)}</strong></div>
    <div><span>مبلغ القبض</span><strong>${money(amount)}</strong></div>
    <div class="after-payment"><span>الرصيد بعد القبض</span><strong>${money(Math.max(current - amount, 0))}</strong></div>
  `;
}

function renderPersonalDebts() {
  const scopedPersonalDebts = repo.state.personalDebts.filter((item) => activeEmployeeId() === "all" || item.employeeId === activeEmployeeId());
  $("#personalDebtList").innerHTML = scopedPersonalDebts
    .map((item) => {
      const paid = item.customerPhone ? personalDebtPaidAmount(item.id) : 0;
      const balance = item.cancelled ? 0 : Math.max(number(item.amount) - paid, 0);
      const status = item.cancelled
        ? `<span class="badge danger">ملغى</span>`
        : balance <= 0
          ? `<span class="badge ok">مسدد</span>`
          : `<span class="badge issue">متبقي ${money(balance)}</span>`;
      const cancelButton = !item.cancelled && paid <= 0 && hasPermission("debts.cancel") ? `<button class="danger-button" onclick="cancelPersonalDebt('${item.id}')">إلغاء</button>` : "";
      const paymentButton = !item.cancelled && item.customerPhone && balance > 0 && hasPermission("debts.manage")
        ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(item.customerPhone)},'','personalDebt','',${jsArg(item.id)})">تسديد</button>`
        : "";
      const profileButton = item.customerPhone ? `<button class="ghost" onclick="openCustomerAccount(${jsArg(item.customerPhone)})">ملف الزبون</button>` : "";
      return `<article class="finance-record personal-debt-record ${item.cancelled ? "is-cancelled" : ""}">
        <div class="finance-record-main">
          <div class="finance-record-heading">
            <span class="finance-record-kicker">${escapeHtml(item.number || "دين قديم")}</span>
            ${status}
          </div>
          <strong class="finance-record-title">${escapeHtml(item.customerName || item.person)}</strong>
          <div class="finance-record-meta">
            <span>${escapeHtml(item.reason || "بدون سبب")}</span>
            <span>${item.fundingSource === "external" ? "خارج القاصة" : "من القاصة"}</span>
            ${item.customerPhone ? `<span>${escapeHtml(customerPhoneLabel(item.customerPhone) || "بدون هاتف")}</span>` : `<span>سجل قديم غير مرتبط بزبون</span>`}
            <span>${employeeName(item.employeeId)}</span>
            ${item.cancelledAt ? `<span>ألغي في ${formatDate(item.cancelledAt)}</span>` : ""}
          </div>
        </div>
        <div class="finance-record-amount">
          <span>الدين / المسدد / المتبقي</span>
          <strong>${money(item.amount)} · ${money(paid)} · ${money(balance)}</strong>
        </div>
        ${profileButton || paymentButton || cancelButton ? `<div class="finance-record-actions">${profileButton}${paymentButton}${cancelButton}</div>` : ""}
      </article>`;
    })
    .join("") || `<div class="empty">لا توجد ديون يدوية على الزبائن.</div>`;
}

function renderInstallments() {
  const canManageDebts = hasPermission("debts.manage");
  const invoices = accounting.scopedInvoices().filter((invoice) => invoice.saleMode === "installment");
  $("#installmentList").innerHTML = invoices.map((invoice) => `
    <article class="installment-account">
      <div class="installment-account-head">
        <div class="finance-record-main">
          <span class="finance-record-kicker">${escapeHtml(invoice.number)}</span>
          <strong class="finance-record-title">${escapeHtml(invoice.customerName)}</strong>
          <div class="finance-record-meta">
            <span>${escapeHtml(customerPhoneLabel(invoice.customerPhone) || "بدون هاتف")}</span>
            <span>${(invoice.installmentSchedule || []).length} أقساط</span>
          </div>
        </div>
        <div class="installment-totals">
          <div><span>إجمالي الفاتورة</span><strong>${money(invoice.total)}</strong></div>
          <div class="outstanding"><span>المبلغ المتبقي</span><strong>${money(invoiceOpenBalance(invoice))}</strong></div>
        </div>
        <div class="finance-record-actions">
          <button class="ghost" onclick="selectInvoice('${invoice.id}')">عرض الفاتورة</button>
          <button class="ghost" onclick="printSaleInvoice('${invoice.id}')">طباعة</button>
        </div>
      </div>
      <div class="table-wrap finance-table-wrap">
      <table class="finance-table">
        <thead><tr><th>تاريخ الاستحقاق</th><th>المبلغ</th><th>المدفوع</th><th>المتبقي</th><th>الحالة</th><th></th></tr></thead>
        <tbody>${(invoice.installmentSchedule || []).map((item, index) => {
          const paid = installmentPaidAmount(invoice.id, index);
          const balance = installmentOpenBalance(invoice, index);
          return `<tr>
            <td data-label="تاريخ الاستحقاق">${item.dueDate}</td>
            <td data-label="المبلغ">${money(item.amount)}</td>
            <td data-label="المدفوع">${money(paid)}</td>
            <td data-label="المتبقي"><strong>${money(balance)}</strong></td>
            <td data-label="الحالة"><span class="badge ${balance <= 0 ? "ok" : "issue"}">${balance <= 0 ? "مدفوع" : "غير مدفوع"}</span></td>
            <td data-label="الإجراء">${canManageDebts && balance > 0 ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(invoice.customerPhone)},${jsArg(invoice.id)},'installment','${index}')">تسديد القسط</button>` : ""}</td>
          </tr>`;
        }).join("")}</tbody>
      </table>
      </div>
    </article>
  `).join("") || `<div class="empty">لا توجد فواتير تقسيط.</div>`;
}

function renderVouchers() {
  const list = $("#voucherArchiveList");
  if (!list) return;
  const allowedTypes = voucherAllowedTypes();
  const scopedVouchers = repo.state.vouchers
    .filter((voucher) => allowedTypes.includes(voucher.type))
    .filter((voucher) => activeEmployeeId() === "all" || voucher.employeeId === activeEmployeeId());
  const activeVouchers = scopedVouchers.filter((voucher) => !voucher.cancelled);
  const receiptTotal = activeVouchers.filter((voucher) => voucher.type === "receipt").reduce(sumBy("amount"), 0);
  const paymentTotal = activeVouchers.filter((voucher) => voucher.type === "payment").reduce(sumBy("amount"), 0);
  const expenseTotal = activeVouchers.filter((voucher) => voucher.type === "expense").reduce(sumBy("amount"), 0);
  const summary = $("#voucherCenterSummary");
  if (summary) {
    summary.innerHTML = `
      <div><span>السندات</span><strong>${scopedVouchers.length}</strong></div>
      <div class="receipt"><span>إجمالي القبض</span><strong>${money(receiptTotal)}</strong></div>
      <div class="payment"><span>إجمالي الدفع</span><strong>${money(paymentTotal)}</strong></div>
      <div class="expense"><span>إجمالي الصرف</span><strong>${money(expenseTotal)}</strong></div>
    `;
  }

  const query = normalizeSearch($("#voucherSearch")?.value || "");
  const typeFilter = clean($("#voucherTypeFilter")?.value || "all");
  const activeTypeFilter = typeFilter === "all" || allowedTypes.includes(typeFilter) ? typeFilter : "all";
  if ($("#voucherTypeFilter")) $("#voucherTypeFilter").value = activeTypeFilter;
  const statusFilter = clean($("#voucherStatusFilter")?.value || "all");
  const rows = scopedVouchers
    .filter((voucher) => activeTypeFilter === "all" || voucher.type === activeTypeFilter)
    .filter((voucher) => statusFilter === "all" || (statusFilter === "cancelled" ? voucher.cancelled : !voucher.cancelled))
    .filter((voucher) => dateMatchesRange(voucher.createdAt, "vouchers"))
    .filter((voucher) => {
      const text = normalizeSearch([voucher.number, voucher.party, voucher.reference, voucher.notes, voucherTypeLabel(voucher.type), formatDate(voucher.createdAt)].join(" "));
      return !query || text.includes(query);
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if ($("#voucherResultCount")) $("#voucherResultCount").textContent = `${rows.length} سند`;
  const pageInfo = paginateCollection(rows, "vouchers");
  list.innerHTML = pageInfo.rows.map((voucher) => {
    const isIncoming = voucher.type === "receipt";
    const typeKind = voucher.type === "receipt" ? "receipt" : voucher.type === "payment" ? "payment" : "expense";
    const cancelButton = !voucher.cancelled && hasPermission("cash.cancel") ? `<button class="danger-button" onclick="cancelVoucher('${voucher.id}')">إلغاء</button>` : "";
    return `<tr class="${voucher.cancelled ? "is-cancelled" : ""}">
      <td data-label="السند"><strong>${escapeHtml(voucher.number)}</strong><small class="table-secondary">${escapeHtml(voucher.reference || "بدون مرجع")}</small></td>
      <td data-label="النوع"><span class="voucher-type-badge ${typeKind}">${voucherTypeLabel(voucher.type)}</span></td>
      <td data-label="الطرف"><strong>${escapeHtml(voucher.party || "بدون طرف")}</strong>${voucher.notes ? `<small class="table-secondary">${escapeHtml(voucher.notes)}</small>` : ""}</td>
      <td data-label="التاريخ">${formatDate(voucher.createdAt)}</td>
      <td data-label="الاتجاه"><span class="voucher-direction ${isIncoming ? "in" : "out"}">${isIncoming ? "داخل القاصة" : "خارج القاصة"}</span></td>
      <td data-label="المبلغ"><strong class="voucher-amount ${isIncoming ? "in" : "out"}">${isIncoming ? "+" : "−"} ${money(voucher.amount)}</strong></td>
      <td data-label="الحالة">${voucher.cancelled ? `<span class="badge danger">ملغى</span>` : `<span class="badge ok">فعال</span>`}</td>
      <td data-label="الإجراءات"><div class="voucher-row-actions"><button class="primary" onclick="printVoucher('${voucher.id}')">طباعة</button>${cancelButton}</div></td>
    </tr>`;
  }).join("") || emptyRow(8, "لا توجد سندات مطابقة.");
  renderListPagination("#voucherPagination", "vouchers", pageInfo);

  $$("#voucherTypeFilter option").forEach((option) => {
    if (option.value === "all") return;
    option.hidden = !allowedTypes.includes(option.value);
  });
  $$("#voucherTypeSelector [data-create-voucher]").forEach((button) => {
    button.classList.toggle("hidden", !allowedTypes.includes(button.dataset.createVoucher));
  });
  $('[data-voucher-tab="personalCashTab"]')?.classList.toggle("hidden", !hasPermission("debts.manage"));
  const currentType = clean($("#voucherCreateForm")?.dataset.voucherType);
  setVoucherCreateType(allowedTypes.includes(currentType) ? currentType : allowedTypes[0]);
  fillVoucherAccountOptions();
}

function voucherAllowedTypes() {
  return ["receipt", "payment", "expense"].filter((type) => hasPermission(voucherPermission(type)));
}

function setVoucherCreateType(type) {
  const allowedTypes = voucherAllowedTypes();
  if (!allowedTypes.length) return;
  const selectedType = allowedTypes.includes(type) ? type : allowedTypes[0];
  const form = $("#voucherCreateForm");
  if (!form) return;
  form.dataset.voucherType = selectedType;
  form.querySelector('[name="type"]').value = selectedType;
  $$("#voucherTypeSelector [data-create-voucher]").forEach((button) => button.classList.toggle("active", button.dataset.createVoucher === selectedType));
  const labels = {
    receipt: { title: "سند قبض", effect: "مبلغ داخل إلى القاصة.", party: "استلمنا من", submit: "حفظ سند القبض" },
    payment: { title: "سند دفع", effect: "مبلغ خارج من القاصة دون تسجيله كمصروف إداري.", party: "دفعنا إلى", submit: "حفظ سند الدفع" },
    expense: { title: "سند صرف", effect: "مصروف إداري يخصم من القاصة ويؤثر في المصروفات.", party: "جهة الصرف", submit: "حفظ سند الصرف" },
  };
  const content = labels[selectedType];
  $("#voucherCreateTitle").textContent = content.title;
  $("#voucherCreateEffect").textContent = content.effect;
  $("#voucherPartyLabel").textContent = content.party;
  $("#voucherSubmitButton").textContent = content.submit;
  const receiptAccountLink = selectedType === "receipt";
  if (!receiptAccountLink && clean(form.elements.accountKind.value) !== "general") setVoucherPartyKind("general");
  $("#voucherAccountLink")?.classList.toggle("hidden", !receiptAccountLink);
  updateVoucherEffectPreview();
}

function setVoucherPartyKind(kind = "general") {
  const form = $("#voucherCreateForm");
  if (!form) return;
  const selectedKind = ["general", "customer", "supplier"].includes(kind) ? kind : "general";
  form.elements.accountKind.value = selectedKind;
  form.elements.accountId.value = "";
  form.elements.settlementType.value = "";
  form.elements.settlementInvoiceId.value = "";
  form.elements.settlementInstallmentIndex.value = "";
  $$("#voucherPartyKindSelector [data-voucher-party-kind]").forEach((button) => {
    button.classList.toggle("active", button.dataset.voucherPartyKind === selectedKind);
  });
  $("#voucherAccountPicker")?.classList.toggle("hidden", selectedKind === "general");
  $("#voucherAccountDetails")?.classList.add("hidden");
  if ($("#voucherAccountSearch")) $("#voucherAccountSearch").value = "";
  $("#voucherAccountSuggestions")?.classList.remove("active");
  if (selectedKind !== "general") fillVoucherAccountOptions();
  else {
    if ($("#voucherAccountSelect")) $("#voucherAccountSelect").innerHTML = `<option value="">اختر من القائمة</option>`;
    form.party.value = "";
  }
  updateVoucherEffectPreview();
}

function fillVoucherAccountOptions() {
  const form = $("#voucherCreateForm");
  const select = $("#voucherAccountSelect");
  if (!form || !select) return;
  const kind = clean(form.elements.accountKind.value) || "general";
  const current = clean(form.elements.accountId.value);
  if (kind === "customer") {
    $("#voucherAccountSelectLabel").textContent = "اختيار أو بحث عن زبون";
    $("#voucherAccountSearch").placeholder = "اكتب اسم الزبون أو رقم الهاتف";
    const customers = [...repo.state.customers].sort((left, right) => left.name.localeCompare(right.name, "ar"));
    select.innerHTML = `<option value="">اختر الزبون</option>${customers.map((customer) => `<option value="${escapeAttr(customer.phone)}">${escapeHtml(customer.name)} · ${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")} · ${money(customerOpenDebt(customer.phone))}</option>`).join("")}`;
  } else if (kind === "supplier") {
    $("#voucherAccountSelectLabel").textContent = "اختيار أو بحث عن مورد";
    $("#voucherAccountSearch").placeholder = "اكتب اسم المورد أو رقم الهاتف";
    const suppliers = [...repo.state.suppliers].sort((left, right) => left.name.localeCompare(right.name, "ar"));
    select.innerHTML = `<option value="">اختر المورد</option>${suppliers.map((supplier) => {
      const balance = supplierBalance(supplier.id);
      const label = balance.payable > 0 ? `له ${money(balance.payable)}` : balance.receivable > 0 ? `لنا ${money(balance.receivable)}` : "مسدد";
      return `<option value="${supplier.id}">${escapeHtml(supplier.name)} · ${label}</option>`;
    }).join("")}`;
  } else {
    select.innerHTML = `<option value="">اختر من القائمة</option>`;
    if ($("#voucherAccountSearch")) $("#voucherAccountSearch").value = "";
    $("#voucherAccountSuggestions")?.classList.remove("active");
    return;
  }
  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
    if ($("#voucherAccountSearch")) $("#voucherAccountSearch").value = voucherAccountDisplayName(kind, current);
  }
}

function voucherAccountDisplayName(kind, accountId) {
  if (kind === "customer") return repo.state.customers.find((customer) => customer.phone === accountId)?.name || "";
  if (kind === "supplier") return getSupplier(accountId)?.name || "";
  return "";
}

function handleVoucherAccountSearch() {
  const form = $("#voucherCreateForm");
  if (!form) return;
  form.elements.accountId.value = "";
  form.elements.settlementType.value = "";
  form.elements.settlementInvoiceId.value = "";
  form.elements.settlementInstallmentIndex.value = "";
  if ($("#voucherAccountSelect")) $("#voucherAccountSelect").value = "";
  $("#voucherAccountDetails")?.classList.add("hidden");
  renderVoucherAccountSuggestions();
}

function renderVoucherAccountSuggestions(showAll = false) {
  const form = $("#voucherCreateForm");
  const input = $("#voucherAccountSearch");
  const box = $("#voucherAccountSuggestions");
  if (!form || !input || !box || clean(form.dataset.voucherType) !== "receipt") return;
  const kind = clean(form.elements.accountKind.value);
  const query = showAll ? "" : normalizeSearch(input.value);
  let rows = [];
  if (kind === "customer") {
    rows = repo.state.customers
      .filter((customer) => {
        const text = normalizeSearch([customer.name, customerPhoneLabel(customer.phone)].join(" "));
        return !query || text.includes(query);
      })
      .sort((left, right) => left.name.localeCompare(right.name, "ar"))
      .slice(0, 12)
      .map((customer) => ({
        id: customer.phone,
        name: customer.name,
        meta: `${customerPhoneLabel(customer.phone) || "بدون هاتف"} · المتبقي ${money(customerOpenDebt(customer.phone))}`,
      }));
  }
  if (kind === "supplier") {
    rows = repo.state.suppliers
      .filter((supplier) => {
        const text = normalizeSearch([supplier.name, supplier.phone].join(" "));
        return !query || text.includes(query);
      })
      .sort((left, right) => left.name.localeCompare(right.name, "ar"))
      .slice(0, 12)
      .map((supplier) => {
        const balance = supplierBalance(supplier.id);
        return {
          id: supplier.id,
          name: supplier.name,
          meta: `${supplier.phone || "بدون هاتف"} · مستحق لنا ${money(balance.receivable)}`,
        };
      });
  }
  box.innerHTML = rows.map((row) => `<button class="product-suggestion voucher-account-suggestion" type="button" data-voucher-account-id="${escapeAttr(row.id)}"><span><strong>${escapeHtml(row.name)}</strong><small>${escapeHtml(row.meta)}</small></span><b>اختيار</b></button>`).join("")
    || `<div class="voucher-account-no-results">لا توجد حسابات مطابقة للبحث.</div>`;
  box.classList.add("active");
}

function selectVoucherAccount() {
  const form = $("#voucherCreateForm");
  if (!form) return;
  const kind = clean(form.elements.accountKind.value);
  const accountId = clean($("#voucherAccountSelect")?.value);
  form.elements.accountId.value = accountId;
  form.elements.settlementType.value = "";
  form.elements.settlementInvoiceId.value = "";
  form.elements.settlementInstallmentIndex.value = "";
  if (!accountId) {
    $("#voucherAccountDetails")?.classList.add("hidden");
    return;
  }
  if (kind === "customer") {
    const customer = repo.state.customers.find((item) => item.phone === accountId);
    form.party.value = customer?.name || "";
    setVoucherCreateType("receipt");
  }
  if (kind === "supplier") {
    const supplier = getSupplier(accountId);
    form.party.value = supplier?.name || "";
    setVoucherCreateType("receipt");
  }
  renderVoucherAccountDetails();
}

function selectVoucherSettlement(kind, accountId, settlementType, invoiceId = "", installmentIndex = "") {
  const form = $("#voucherCreateForm");
  if (!form) return;
  form.elements.accountKind.value = kind;
  form.elements.accountId.value = accountId;
  form.elements.settlementType.value = settlementType;
  form.elements.settlementInvoiceId.value = invoiceId;
  form.elements.settlementInstallmentIndex.value = installmentIndex;
  let amount = 0;
  if (kind === "customer") {
    const invoice = invoiceId ? getInvoice(invoiceId) : null;
    amount = settlementType === "installment" && invoice
      ? installmentOpenBalance(invoice, installmentIndex)
      : invoice ? invoiceOpenBalance(invoice) : customerOpenDebt(accountId);
    form.reference.value = invoice?.number || "تسديد حساب زبون";
    form.notes.value = settlementType === "installment" && invoice
      ? `تسديد القسط ${number(installmentIndex) + 1} من الفاتورة ${invoice.number}`
      : invoice ? `تسديد الفاتورة ${invoice.number}` : "تسديد على حساب الزبون";
    setVoucherCreateType("receipt");
  }
  if (kind === "supplier") {
    const supplier = getSupplier(accountId);
    const balance = supplierBalance(accountId);
    if (settlementType !== "supplierReceive") return;
    amount = balance.receivable;
    form.reference.value = "تسديد حساب مورد";
    form.notes.value = `قبض مستحق من ${supplier?.name || "المورد"}`;
    setVoucherCreateType("receipt");
  }
  form.amount.value = amount || "";
  updateVoucherEffectPreview();
  renderVoucherAccountDetails();
}

function renderVoucherAccountDetails() {
  const form = $("#voucherCreateForm");
  const box = $("#voucherAccountDetails");
  if (!form || !box) return;
  const kind = clean(form.elements.accountKind.value);
  const accountId = clean(form.elements.accountId.value);
  const selectedType = clean(form.elements.settlementType.value);
  const selectedInvoiceId = clean(form.elements.settlementInvoiceId.value);
  const selectedInstallmentIndex = clean(form.elements.settlementInstallmentIndex.value);
  if (!accountId || kind === "general") {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  box.classList.remove("hidden");
  if (kind === "customer") {
    const customer = repo.state.customers.find((item) => item.phone === accountId);
    if (!customer) return;
    const invoices = repo.state.invoices
      .filter((invoice) => !invoice.cancelled && invoice.customerPhone === accountId && ["customerDebt", "installment"].includes(invoice.saleMode))
      .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
    const debtBalance = invoices.filter((invoice) => invoice.saleMode === "customerDebt").reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
    const installmentBalance = invoices.filter((invoice) => invoice.saleMode === "installment").reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
    const installmentRows = invoices
      .filter((invoice) => invoice.saleMode === "installment")
      .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({ invoice, item, index, balance: installmentOpenBalance(invoice, index) })))
      .filter((row) => row.balance > 0);
    const overdue = installmentRows.filter((row) => row.item.dueDate && row.item.dueDate < today());
    const debtRows = invoices.filter((invoice) => invoice.saleMode === "customerDebt" && invoiceOpenBalance(invoice) > 0);
    box.innerHTML = `
      <div class="voucher-account-identity">
        <div><span class="voucher-account-avatar">${escapeHtml((customer.name || "ز").charAt(0))}</span><span><strong>${escapeHtml(customer.name)}</strong><small>${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")}</small></span></div>
        <span class="badge ${customerOpenDebt(accountId) > 0 ? "issue" : "ok"}">${customerOpenDebt(accountId) > 0 ? "حساب مفتوح" : "مسدد"}</span>
      </div>
      <div class="voucher-account-summary">
        <div><span>إجمالي المطلوب</span><strong>${money(customerOpenDebt(accountId))}</strong></div>
        <div><span>ديون مباشرة</span><strong>${money(debtBalance)}</strong></div>
        <div><span>أقساط متبقية</span><strong>${money(installmentBalance)}</strong></div>
        <div class="${overdue.length ? "danger" : ""}"><span>أقساط متأخرة</span><strong>${overdue.length}</strong></div>
      </div>
      ${customerOpenDebt(accountId) > 0 ? `<button class="voucher-settlement-row ${selectedType === "general" ? "selected" : ""}" type="button" onclick="selectVoucherSettlement('customer',${jsArg(accountId)},'general')"><span><strong>دفعة عامة على الحساب</strong><small>توزع على أقدم الذمم المفتوحة</small></span><b>${money(customerOpenDebt(accountId))}</b></button>` : ""}
      <div class="voucher-obligation-list">
        ${debtRows.map((invoice) => `<button class="voucher-settlement-row ${selectedType === "debt" && selectedInvoiceId === invoice.id ? "selected" : ""}" type="button" onclick="selectVoucherSettlement('customer',${jsArg(accountId)},'debt',${jsArg(invoice.id)})"><span><strong>فاتورة دين ${escapeHtml(invoice.number)}</strong><small>${formatDate(invoice.createdAt)} · ${escapeHtml(invoice.customerName || customer.name)}</small></span><b>${money(invoiceOpenBalance(invoice))}</b></button>`).join("")}
        ${installmentRows.map(({ invoice, item, index, balance }) => `<button class="voucher-settlement-row ${selectedType === "installment" && selectedInvoiceId === invoice.id && selectedInstallmentIndex === String(index) ? "selected" : ""}" type="button" onclick="selectVoucherSettlement('customer',${jsArg(accountId)},'installment',${jsArg(invoice.id)},'${index}')"><span><strong>القسط ${index + 1} · ${escapeHtml(invoice.number)}</strong><small>الاستحقاق ${escapeHtml(item.dueDate || "-")} ${item.dueDate && item.dueDate < today() ? "· متأخر" : ""}</small></span><b>${money(balance)}</b></button>`).join("")}
      </div>
      ${!debtRows.length && !installmentRows.length ? `<div class="voucher-account-clear"><strong>الحساب مسدد بالكامل</strong><span>لا توجد ديون أو أقساط مفتوحة.</span></div>` : ""}
    `;
    return;
  }
  const supplier = getSupplier(accountId);
  if (!supplier) return;
  const balance = supplierBalance(accountId);
  const invoices = repo.state.purchaseInvoices
    .filter((invoice) => !invoice.cancelled && invoice.supplierId === accountId)
    .sort((left, right) => new Date(right.createdAt || right.date) - new Date(left.createdAt || left.date));
  const actionType = balance.receivable > 0 ? "supplierReceive" : "";
  box.innerHTML = `
    <div class="voucher-account-identity">
      <div><span class="voucher-account-avatar supplier">${escapeHtml((supplier.name || "م").charAt(0))}</span><span><strong>${escapeHtml(supplier.name)}</strong><small>${escapeHtml(supplier.phone || "بدون هاتف")}</small></span></div>
      <span class="badge ${actionType ? "issue" : "ok"}">${actionType ? "حساب مفتوح" : "مسدد"}</span>
    </div>
    <div class="voucher-account-summary">
      <div><span>مستحق للمورد</span><strong>${money(balance.payable)}</strong></div>
      <div><span>مستحق لنا</span><strong>${money(balance.receivable)}</strong></div>
      <div><span>فواتير الشراء</span><strong>${invoices.length}</strong></div>
      <div><span>إجمالي المشتريات</span><strong>${money(invoices.reduce(sumBy("total"), 0))}</strong></div>
    </div>
    ${actionType ? `<button class="voucher-settlement-row supplier-action ${selectedType === actionType ? "selected" : ""}" type="button" onclick="selectVoucherSettlement('supplier','${supplier.id}','supplierReceive')"><span><strong>قبض المستحق من المورد</strong><small>سيُسجل كسند قبض مرتبط بحساب المورد</small></span><b>${money(balance.receivable)}</b></button>` : `<div class="voucher-account-clear"><strong>لا يوجد مبلغ مستحق لنا من هذا المورد</strong><span>${balance.payable > 0 ? `الموجود حاليًا مستحق للمورد بقيمة ${money(balance.payable)} ويُدفع من مسار تسديد المورد.` : "حساب المورد مسدد بالكامل."}</span></div>`}
    <div class="voucher-supplier-invoices">
      ${invoices.slice(0, 8).map((invoice) => `<div><span><strong>${escapeHtml(invoice.number)}</strong><small>${escapeHtml(invoice.date || formatDate(invoice.createdAt))}</small></span><span><strong>${money(invoice.total)}</strong><small>مدفوع عند الشراء ${money(invoice.paidAmount || 0)}</small></span></div>`).join("") || `<div class="voucher-account-clear"><strong>لا توجد فواتير شراء</strong></div>`}
    </div>
  `;
}

function updateVoucherEffectPreview() {
  const form = $("#voucherCreateForm");
  const box = $("#voucherEffectPreview");
  if (!form || !box) return;
  const type = clean(form.dataset.voucherType);
  const amount = number(form.amount.value);
  const currentBalance = accounting.totals().cashBalance;
  const afterBalance = currentBalance + (type === "receipt" ? amount : -amount);
  box.innerHTML = `
    <div><span>رصيد القاصة الحالي</span><strong>${money(currentBalance)}</strong></div>
    <div class="${type === "receipt" ? "incoming" : "outgoing"}"><span>أثر السند</span><strong>${type === "receipt" ? "+" : "−"} ${money(amount)}</strong></div>
    <div><span>الرصيد بعد الحفظ</span><strong>${money(afterBalance)}</strong></div>
  `;
}

function showVoucherTab(tabId) {
  if (tabId === "personalCashTab" && !hasPermission("debts.manage")) tabId = "voucherArchiveTab";
  $$("#voucherCenterTabs .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.voucherTab === tabId));
  $$("#vouchers .voucher-tab").forEach((tab) => tab.classList.toggle("active", tab.id === tabId));
  if (tabId === "personalCashTab") renderPersonalDebts();
  if (tabId === "voucherArchiveTab") renderVouchers();
  if (tabId === "voucherCreateTab") {
    fillVoucherAccountOptions();
    renderVoucherAccountDetails();
    updateVoucherEffectPreview();
  }
}
function renderAccounts() {
  const t = accounting.totals();
  renderMetrics("#deliveryMetrics", [
    ["طلبات Modon", t.orderCount, "حسب الحساب المحدد"],
    ["صافي مستحق للتاجر", money(t.merchantNet), "merchant_price"],
    ["طلبات مسلمة غير مفوترة", t.deliveredNotInvoiced, "تحتاج فاتورة Modon"],
    ["مفوترة غير مقبوضة", t.invoicedNotReceived, "لا تدخل القاصة بعد"],
    ["مفقودة من كشف Modon", t.missingInStatement, "تحتاج مطالبة الشركة"],
  ]);
  $("#accountingEntries").innerHTML = accounting.entries().map(([debit, credit, amount, ref]) => `<div class="ledger-row"><span>${escapeHtml(debit)}<br><small>${escapeHtml(credit)} - ${escapeHtml(ref)}</small></span><strong>${money(amount)}</strong></div>`).join("") || `<div class="empty">لا توجد قيود.</div>`;
}

function renderCarrierInvoices() {
  const canConfirmCash = hasPermission("delivery.modon.confirmCash");
  const canReceiveReturns = hasPermission("delivery.modon.receiveReturns");
  renderCarrierInvoiceSummary();
  const range = modonSystemRange();
  const scopedInvoices = repo.state.deliveryInvoices
    .filter((invoice) => activeEmployeeId() === "all" || invoice.employeeId === activeEmployeeId())
    .filter((invoice) => invoice.type === "returned"
      ? returnStatementBelongsToSystemRange(invoice, range)
      : deliveryInvoiceBelongsToSystemRange(invoice, range))
    .sort((a, b) => new Date(b.modon_created_at || b.created_at) - new Date(a.modon_created_at || a.created_at));
  const deliveredInvoices = dedupeModonDeliveredInvoices(scopedInvoices.filter((invoice) => invoice.type !== "returned"));
  const returnInvoices = scopedInvoices.filter((invoice) => invoice.type === "returned");
  const deliveredList = $("#carrierInvoiceList");
  if (deliveredList) {
    const groups = {
      ready: deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "ready"),
      confirmed: deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "confirmed"),
      external: deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "external"),
      all: deliveredInvoices,
    };
    const activeFilter = groups[carrierInvoiceFilter] ? carrierInvoiceFilter : "ready";
    carrierInvoiceFilter = activeFilter;
    const query = normalizeSearch($("#carrierInvoiceSearch")?.value || "");
    const filteredInvoices = groups[activeFilter].filter((invoice) => {
      if (!query) return true;
      return normalizeSearch([
        invoice.external_invoice_id,
        employeeName(invoice.employeeId),
        invoice.status,
        invoice.merchant_price,
      ].join(" ")).includes(query);
    });
    const filterContent = {
      ready: ["جاهز للتحصيل", "فواتير مرتبطة بطلبات نظامك. أكد فقط بعد استلام المبلغ فعليًا من Modon."],
      confirmed: ["تم قبضها", "فواتير أُدخل صافي مستحقها إلى القاصة وأُغلقت ذمم طلباتها المطابقة."],
      external: ["فواتير خارج النظام", "فواتير Modon غير المرتبطة بطلبات منشأة في البرنامج؛ للقراءة والمراجعة فقط."],
      all: ["جميع فواتير Modon", "عرض موحد للفواتير الجاهزة والمقبوضة والخارجية."],
    };
    if ($("#carrierInvoiceListTitle")) $("#carrierInvoiceListTitle").textContent = filterContent[activeFilter][0];
    if ($("#carrierInvoiceListHint")) $("#carrierInvoiceListHint").textContent = filterContent[activeFilter][1];
    const counts = {
      ready: groups.ready.length,
      confirmed: groups.confirmed.length,
      external: groups.external.length,
      all: groups.all.length,
    };
    [["#carrierReadyCount", "ready"], ["#carrierConfirmedCount", "confirmed"], ["#carrierExternalCount", "external"], ["#carrierAllCount", "all"]]
      .forEach(([selector, key]) => {
        if ($(selector)) $(selector).textContent = counts[key];
      });
    $$("#carrierInvoiceFilters [data-carrier-invoice-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.carrierInvoiceFilter === activeFilter);
    });
    const deliveredPage = paginateCollection(filteredInvoices, "deliveredCarrierInvoices");
    deliveredList.innerHTML = deliveredPage.rows
      .map((invoice) => renderDeliveredCarrierInvoice(invoice, canConfirmCash))
      .join("") || carrierInvoiceEmptyState(activeFilter, query);
    renderListPagination("#carrierInvoicePagination", "deliveredCarrierInvoices", deliveredPage);
  }
  const returnList = $("#returnInvoiceList");
  if (returnList) {
    const returnSearchQuery = normalizeSearch($("#returnSearch")?.value || "");
    const returnPage = paginateCollection(returnInvoices, "returnCarrierInvoices");
    returnList.innerHTML = returnPage.rows
      .map((invoice) => renderReturnCarrierInvoice(invoice, canReceiveReturns))
      .join("") || `<div class="empty">${returnSearchQuery ? "لا نتائج مطابقة للبحث." : "لا توجد كشوف راجع من Modon."}</div>`;
    renderListPagination("#returnInvoicePagination", "returnCarrierInvoices", returnPage);
  }
}

function carrierInvoiceMatchedCount(invoice) {
  return Math.max(number(invoice?.matched_orders_count), number(invoice?.order_ids?.length));
}

function carrierInvoiceRemoteOrderCount(invoice) {
  return Math.max(
    number(invoice?.delivered_orders_count),
    number(invoice?.raw_response?.orders?.length),
    number(invoice?.remote_order_refs?.length),
    carrierInvoiceMatchedCount(invoice),
  );
}

function carrierInvoiceRemoteOrdersSource(invoice) {
  if (Array.isArray(invoice?.raw_response?.orders)) return invoice.raw_response.orders;
  if (Array.isArray(invoice?.remote_order_refs)) return invoice.remote_order_refs;
  return [];
}

// Amount that actually enters the cash box when this invoice is collected. For a
// fully matched invoice it is the whole merchant net; for a partially matched one
// it is the net of ONLY the orders linked to local orders — never the external
// orders, which are not ours to collect. Falls back to a proportional share when
// per-order prices are unavailable.
// A returned order inside a delivery invoice is never collected: the customer sent
// it back, so Modon does not pay for it and the piece returns to stock through the
// returns flow. Only delivered (non-returned) matched orders enter the cash box.
function isReturnedDeliveryOrder(order) {
  return Boolean(order) && (order.status === "returned" || order.returned_received_stock);
}

function carrierInvoiceCollectableAmount(invoice) {
  const invoiceNet = number(invoice?.merchant_price);
  const matchedLocal = (invoice?.order_ids || [])
    .map((id) => repo.state.deliveryOrders.find((order) => order.id === id))
    .filter(Boolean);
  const deliveredMatched = matchedLocal.filter((order) => !isReturnedDeliveryOrder(order));
  const returnedNet = matchedLocal.filter(isReturnedDeliveryOrder).reduce((sum, order) => sum + modonMerchantNetPrice(order), 0);
  // Fully matched with no returned orders → the whole invoice net (unchanged).
  if (isCarrierInvoiceFullyMatched(invoice) && matchedLocal.length === deliveredMatched.length) return invoiceNet;
  const deliveredIds = new Set(deliveredMatched.map((order) => order.id));
  // 1) Exact: matched DELIVERED remote orders' own merchant net (per-order price).
  const remoteSum = carrierInvoiceRemoteOrdersSource(invoice)
    .filter((remoteOrder) => {
      const local = findLocalOrderByRemote(remoteOrder, invoice.employeeId);
      return local && deliveredIds.has(local.id);
    })
    .reduce((sum, remoteOrder) => sum + modonMerchantNetPrice(remoteOrder), 0);
  if (remoteSum > 0) return remoteSum;
  // 2) Exact: sum the matched DELIVERED local delivery orders' own merchant net.
  const localSum = deliveredMatched.reduce((sum, order) => sum + modonMerchantNetPrice(order), 0);
  if (localSum > 0) return localSum;
  // 3) Estimate: delivered-matched share of the invoice net (minus any returned net
  //    when the invoice is otherwise fully matched).
  if (isCarrierInvoiceFullyMatched(invoice)) return Math.max(invoiceNet - returnedNet, 0);
  const total = carrierInvoiceRemoteOrderCount(invoice);
  return total ? Math.round(invoiceNet * deliveredMatched.length / total) : 0;
}

// True when the collectable amount had to be estimated (no per-order price), so the
// UI can flag it for the user to verify before confirming a cash entry.
function carrierInvoiceCollectableIsEstimate(invoice) {
  if (isCarrierInvoiceFullyMatched(invoice)) return false;
  const orderIds = new Set(invoice?.order_ids || []);
  const remoteSum = carrierInvoiceRemoteOrdersSource(invoice)
    .filter((remoteOrder) => {
      const local = findLocalOrderByRemote(remoteOrder, invoice.employeeId);
      return local && orderIds.has(local.id);
    })
    .reduce((sum, remoteOrder) => sum + modonMerchantNetPrice(remoteOrder), 0);
  if (remoteSum > 0) return false;
  const localSum = (invoice?.order_ids || [])
    .map((id) => repo.state.deliveryOrders.find((order) => order.id === id))
    .filter(Boolean)
    .reduce((sum, order) => sum + modonMerchantNetPrice(order), 0);
  return localSum <= 0;
}

function isCarrierInvoiceFullyMatched(invoice) {
  const matchedCount = carrierInvoiceMatchedCount(invoice);
  const remoteCount = carrierInvoiceRemoteOrderCount(invoice);
  if (!matchedCount || !remoteCount || matchedCount !== remoteCount) return false;
  const uniqueLinkedOrders = new Set((invoice.order_ids || [])
    .filter((orderId) => repo.state.deliveryOrders.some((order) => order.id === orderId)));
  return uniqueLinkedOrders.size === remoteCount;
}

function carrierInvoiceCollectionState(invoice) {
  const matchedCount = carrierInvoiceMatchedCount(invoice);
  if (!matchedCount) return "external";
  if (invoice.status === "تم تأكيد القبض") return "confirmed";
  // Partially matched invoices are collectible too: the merchant can collect the
  // net of the matched orders. Only invoices with zero matched orders stay
  // "external" (read-only). The external portion is simply never collected.
  return "ready";
}

function carrierInvoiceEmptyState(filter, query = "") {
  if (query) return `<div class="collection-empty-state"><strong>لا توجد نتيجة مطابقة</strong><span>غيّر كلمة البحث أو اعرض مجموعة أخرى.</span></div>`;
  const content = {
    ready: ["لا توجد فواتير جاهزة للتحصيل", "إذا كانت هناك طلبات واصلة، راجع قسم «طلبات تحتاج ربطًا بفاتورة» أعلاه."],
    confirmed: ["لم يتم تأكيد قبض أي فاتورة بعد", "ستظهر هنا الفواتير بعد إدخال صافيها إلى القاصة."],
    external: ["لا توجد فواتير خارج النظام", "كل فواتير Modon الحالية مرتبطة بطلبات البرنامج."],
    all: ["لا توجد فواتير واصل", "اضغط «جلب فواتير الواصل من Modon» لتحديث القائمة."],
  }[filter] || ["لا توجد فواتير", ""];
  return `<div class="collection-empty-state"><strong>${content[0]}</strong><span>${content[1]}</span></div>`;
}

function setCarrierInvoiceFilter(filter = "ready") {
  carrierInvoiceFilter = ["ready", "confirmed", "external", "all"].includes(filter) ? filter : "ready";
  resetListPage("deliveredCarrierInvoices");
  renderCarrierInvoices();
}

function renderCarrierInvoiceSummary() {
  const employeeId = activeEmployeeId();
  const range = modonSystemRange();
  const result = buildModonReconciliation(employeeId, range);
  const scopedInvoices = repo.state.deliveryInvoices
    .filter((invoice) => employeeId === "all" || invoice.employeeId === employeeId)
    .filter((invoice) => invoice.type === "returned"
      ? returnStatementBelongsToSystemRange(invoice, range)
      : deliveryInvoiceBelongsToSystemRange(invoice, range));
  const deliveredInvoices = dedupeModonDeliveredInvoices(scopedInvoices.filter((invoice) => invoice.type !== "returned"));
  const returnInvoices = scopedInvoices.filter((invoice) => invoice.type === "returned");
  const readyInvoices = deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "ready");
  const confirmedDelivered = deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "confirmed");
  const externalOnlyInvoices = deliveredInvoices.filter((invoice) => carrierInvoiceCollectionState(invoice) === "external");
  const linkedOrderIds = new Set(deliveredInvoices.flatMap((invoice) => invoice.order_ids || []));
  const deliveredWithoutInvoiceLink = result.deliveredUnpaid.filter((order) => !linkedOrderIds.has(order.id));
  const readyAmount = readyInvoices.reduce((sum, invoice) => sum + carrierInvoiceCollectableAmount(invoice), 0);
  const confirmedAmount = confirmedDelivered.reduce((sum, invoice) => sum + number(invoice.collected_amount ?? invoice.merchant_price), 0);
  if ($("#carrierInvoiceSummary")) {
    $("#carrierInvoiceSummary").innerHTML = `
      <button type="button" class="collection-kpi ready" data-carrier-summary-filter="ready">
        <span>جاهز للتحصيل</span><strong>${readyInvoices.length}</strong><small>${money(readyAmount)} سيدخل القاصة بعد التأكيد</small>
      </button>
      <div class="collection-kpi attention">
        <span>طلبات تحتاج ربطًا بفاتورة</span><strong>${deliveredWithoutInvoiceLink.length}</strong><small>${money(deliveredWithoutInvoiceLink.reduce(sumBy("merchant_price"), 0))} واصل لم يُربط بفاتورة قابلة للقبض</small>
      </div>
      <button type="button" class="collection-kpi settled" data-carrier-summary-filter="confirmed">
        <span>تم قبضها</span><strong>${confirmedDelivered.length}</strong><small>${money(confirmedAmount)} دخل القاصة</small>
      </button>
      <button type="button" class="collection-kpi external" data-carrier-summary-filter="external">
        <span>خارج النظام</span><strong>${externalOnlyInvoices.length}</strong><small>للمراجعة فقط ولا تدخل القاصة</small>
      </button>
    `;
    $$("#carrierInvoiceSummary [data-carrier-summary-filter]").forEach((button) => {
      button.addEventListener("click", () => setCarrierInvoiceFilter(button.dataset.carrierSummaryFilter));
    });
  }
  if ($("#carrierInvoiceAlerts")) {
    $("#carrierInvoiceAlerts").innerHTML = `
      <div class="collection-flow-guide">
        <div><i>1</i><span><strong>جلب الفواتير</strong><small>تحديث فواتير الواصل من Modon</small></span></div>
        <div><i>2</i><span><strong>التحقق من المطابقة</strong><small>يجب أن تحمل الفاتورة طلبًا من نظامك</small></span></div>
        <div><i>3</i><span><strong>تأكيد القبض</strong><small>يدخل صافي التاجر إلى القاصة مرة واحدة</small></span></div>
      </div>
      ${deliveredWithoutInvoiceLink.length ? `
        <details class="collection-review-group">
          <summary><span><strong>طلبات واصلة تحتاج ربطًا بفاتورة</strong><small>لا يمكن إدخالها إلى القاصة حتى تظهر داخل فاتورة Modon مطابقة</small></span><b>${deliveredWithoutInvoiceLink.length}</b></summary>
          ${reconciliationList("طلبات تحتاج مراجعة الربط", deliveredWithoutInvoiceLink)}
        </details>` : ""}
      ${result.missing.length ? `
        <details class="collection-review-group danger">
          <summary><span><strong>طلبات داخلية غير ظاهرة في Modon</strong><small>تحتاج مراجعة الحساب أو المطالبة مع شركة التوصيل</small></span><b>${result.missing.length}</b></summary>
          ${reconciliationList("طلبات مفقودة تحتاج متابعة", result.missing)}
        </details>` : ""}
      ${!deliveredWithoutInvoiceLink.length && !result.missing.length ? `<div class="collection-clear-state"><strong>لا توجد مشاكل ربط مفتوحة</strong><span>كل الطلبات الواصلة مرتبطة أو تمت معالجتها.</span></div>` : ""}
    `;
  }
  if ($("#returnInvoiceSummary")) {
    const returnEntries = uniqueCarrierReturnEntries(returnInvoices);
    const pendingMatchedReturnOrders = returnEntries.filter((entry) => entry.localOrder?.status === "returned" && !entry.localOrder.returned_received_stock).length;
    const receivedReturnOrders = returnEntries.filter((entry) => entry.localOrder?.returned_received_stock).length;
    const unmatchedReturnOrders = returnEntries.filter((entry) => !entry.localOrder || !entry.remoteOrder).length;
    $("#returnInvoiceSummary").innerHTML = `
      <div class="modon-match-summary">
        <div class="mm-tile a"><small>بانتظار الاستلام</small><b class="num">${pendingMatchedReturnOrders}</b><span>مطابق ولم يدخل المخزون بعد</span></div>
        <div class="mm-tile g"><small>تم استلامه للمخزون</small><b class="num">${receivedReturnOrders}</b><span>أُعيد بتأكيد موثّق منك</span></div>
        <div class="mm-tile b"><small>غير مطابق</small><b class="num">${unmatchedReturnOrders}</b><span>للمراجعة · لا يغيّر المخزون</span></div>
      </div>`;
  }
  if ($("#returnInvoiceAlerts")) {
    const returnEntries = uniqueCarrierReturnEntries(returnInvoices);
    const modonOnlyEntries = returnEntries.filter((entry) => entry.remoteOrder && !entry.localOrder);
    const systemOnlyEntries = returnEntries.filter((entry) => !entry.remoteOrder && entry.localOrder);
    const financiallyCollectedReturns = Array.from(new Map(returnEntries
      .filter((entry) => entry.localOrder?.deliver_confirmed_fin)
      .map((entry) => [entry.localOrder.id, entry.localOrder])).values());
    $("#returnInvoiceAlerts").innerHTML = `
      ${financiallyCollectedReturns.length ? `
        <div class="return-review-banner finance">
          <div><span class="eyebrow">مراجعة مالية</span><strong>${financiallyCollectedReturns.length} طلب راجع سبق قبضه</strong><small>استلام القطع يعيدها إلى المخزون فقط؛ راجع التسوية المالية لأن مبلغ الطلب سبق دخوله إلى القاصة.</small></div>
          <button type="button" class="ghost" data-modon-hub-tab="audit">فتح التدقيق</button>
        </div>` : ""}
      ${modonOnlyEntries.length || systemOnlyEntries.length ? `
        <div class="return-review-banner">
          <div><span class="eyebrow">مراجعة المطابقة</span><strong>${modonOnlyEntries.length + systemOnlyEntries.length} طلب يحتاج تدقيقًا</strong><small>هذه الطلبات ظاهرة في جهة واحدة فقط، لذلك لن تدخل المخزون تلقائيًا.</small></div>
          <div class="return-review-counts"><span>في Modon فقط <b>${modonOnlyEntries.length}</b></span><span>في النظام فقط <b>${systemOnlyEntries.length}</b></span></div>
        </div>` : `
        <div class="return-clear-banner"><span>✓</span><div><strong>المطابقة واضحة</strong><small>كل راجع Modon الحالي مرتبط بطلب داخلي.</small></div></div>`}
    `;
  }
}

function renderDeliveredCarrierInvoice(invoice, canConfirmCash) {
  const matchedCount = carrierInvoiceMatchedCount(invoice);
  const totalCount = carrierInvoiceRemoteOrderCount(invoice);
  const isExternalOnly = !matchedCount;
  const isPartiallyMatched = matchedCount > 0 && matchedCount < totalCount;
  // Only fully-external invoices are blocked from collection now. Partial ones are
  // collectible for their matched portion.
  const isUnsafeForCollection = isExternalOnly;
  const isConfirmed = invoice.status === "تم تأكيد القبض";
  const collectableAmount = isConfirmed ? number(invoice.collected_amount ?? invoice.merchant_price) : carrierInvoiceCollectableAmount(invoice);
  const dateText = invoice.modon_created_at ? formatDate(invoice.modon_created_at) : formatDate(invoice.created_at);
  const sourceBadge = isExternalOnly
    ? `<span class="badge external">غير مرتبطة بطلبات داخلية</span>`
    : isPartiallyMatched
      ? `<span class="badge issue">مطابقة جزئية ${matchedCount} من ${totalCount}</span>`
      : `<span class="badge ok">${matchedCount} طلب مطابق بالكامل</span>`;
  const statusClass = isConfirmed ? "settled" : isUnsafeForCollection ? "external" : "pending";
  const statusTitle = isConfirmed ? "دخلت القاصة" : isExternalOnly ? "خارج النظام" : isPartiallyMatched ? "جاهزة للتحصيل (جزئي)" : "جاهزة للتحصيل";
  const action = canConfirmCash && !isConfirmed && !isUnsafeForCollection
    ? `<button class="primary carrier-invoice-primary" onclick="openCarrierCashConfirmation('${invoice.id}')">تأكيد القبض وإدخال القاصة</button>`
    : "";
  return `<article class="carrier-invoice-card ${statusClass}">
    <div class="carrier-invoice-status">
      <span class="carrier-status-dot"></span>
      <div><small>حالة التحصيل</small><strong>${statusTitle}</strong></div>
    </div>
    <div class="carrier-invoice-identity">
      <span class="eyebrow">فاتورة واصل</span>
      <h3>${escapeHtml(invoice.external_invoice_id)}</h3>
      <div class="carrier-invoice-meta"><span>${dateText}</span><span>${totalCount} طلب</span>${sourceBadge}</div>
    </div>
    <div class="carrier-invoice-amount">
      <small>${isPartiallyMatched && !isConfirmed ? "صافي الطلبات المطابقة" : "المبلغ المستحق للتاجر"}</small>
      <strong>${money(collectableAmount)}</strong>
      <span>${isConfirmed ? "تم إدخاله إلى القاصة" : isPartiallyMatched ? `صافي ${matchedCount} طلباً مطابقاً سيدخل القاصة؛ الطلبات الخارجية لا تدخل` : isExternalOnly ? "لا يمكن إدخاله دون طلبات مطابقة" : "هذا هو المبلغ الذي سيدخل القاصة بعد التأكيد"}</span>
    </div>
    <div class="carrier-invoice-actions">
      <button class="ghost" onclick="showCarrierInvoiceDetails('${invoice.id}')">عرض التفاصيل</button>
      ${action}
    </div>
  </article>`;
}

function uniqueCarrierReturnEntries(invoices = []) {
  const entries = new Map();
  invoices.forEach((invoice) => {
    carrierReturnEntries(invoice).forEach((entry, index) => {
      const remoteIds = remoteOrderIds(entry.remoteOrder || entry.localOrder);
      const key = [
        invoice.employeeId || entry.localOrder?.employeeId || "",
        remoteIds[0] || entry.localOrder?.id || `row-${invoice.id}-${index}`,
      ].join("|");
      const previous = entries.get(key);
      if (!previous || (!previous.remoteOrder && entry.remoteOrder) || (!previous.localOrder && entry.localOrder)) {
        entries.set(key, { ...entry, invoice });
      }
    });
  });
  return Array.from(entries.values());
}

function carrierReturnEntries(invoice) {
  const localOrders = (invoice.order_ids || [])
    .map((orderId) => repo.state.deliveryOrders.find((order) => order.id === orderId))
    .filter(Boolean);
  const remoteOrdersSource = Array.isArray(invoice.remote_return_orders)
    ? invoice.remote_return_orders
    : Array.isArray(invoice.raw_response?.orders)
      ? invoice.raw_response.orders
      : Array.isArray(invoice.remote_order_refs)
        ? invoice.remote_order_refs
        : [];
  const remoteOrders = dedupeModonOrdersByAliases(remoteOrdersSource);
  if (!remoteOrders.length) return localOrders.map((localOrder) => ({ localOrder, remoteOrder: null }));
  const seen = new Set();
  const rows = remoteOrders.reduce((result, remoteOrder, index) => {
    const remoteIds = remoteOrderIds(remoteOrder);
    const key = remoteIds.join("|") || `remote-row-${index}`;
    if (seen.has(key)) return result;
    seen.add(key);
    result.push({ remoteOrder, localOrder: findLocalOrderByRemote(remoteOrder, invoice.employeeId) || null });
    return result;
  }, []);
  const matchedLocalIds = new Set(rows.filter((entry) => entry.localOrder).map((entry) => entry.localOrder.id));
  localOrders.forEach((localOrder) => {
    if (!matchedLocalIds.has(localOrder.id)) rows.push({ remoteOrder: null, localOrder });
  });
  return rows;
}

function carrierReturnMatchReason(remoteOrder, localOrder, employeeId) {
  if (localOrder && !remoteOrder) return { label: "غير ظاهر في Modon الآن", detail: "سبق تسجيله راجعًا في البرنامج، لكن قائمة Modon الحالية لم تعرضه. بقي محفوظًا للمراجعة ولم يُحذف.", kind: "issue" };
  if (localOrder) return { label: "مطابق", detail: "ظهر في Modon وارتبط بفاتورة وطلب داخلي", kind: "ok" };
  if (!remoteOrder) return { label: "غير معروف", detail: "لا تتوفر بيانات كافية لتحديد مصدر الراجع", kind: "issue" };
  const remoteIds = remoteOrderIds(remoteOrder);
  if (!remoteIds.length) return { label: "غير مطابق", detail: "Modon لم يرجع معرف طلب واضحًا", kind: "issue" };
  const remoteIdSet = new Set(remoteIds);
  const otherAccountOrder = repo.state.deliveryOrders.find((order) => order.employeeId !== employeeId && localModonOrderIds(order).some((id) => remoteIdSet.has(id)));
  if (otherAccountOrder) return { label: "حساب آخر", detail: `موجود داخل النظام تحت حساب ${employeeName(otherAccountOrder.employeeId)}`, kind: "issue" };
  return { label: "خارج النظام", detail: "لا يوجد طلب داخلي يحمل معرف Modon هذا", kind: "external" };
}

function carrierReturnProductName(remoteOrder, localOrder) {
  const saleInvoice = localOrder ? getInvoice(localOrder.local_order_id) : null;
  return clean(
    remoteOrder?.product_name
    || remoteOrder?.type_name
    || remoteOrder?.goods_type
    || remoteOrder?.item_name
    || remoteOrder?.product?.name
    || localOrder?.product_name
    || saleInvoice?.productName
    || "-"
  );
}

function carrierReturnQuantity(remoteOrder, localOrder) {
  const saleInvoice = localOrder ? getInvoice(localOrder.local_order_id) : null;
  const remoteQuantity = number(
    remoteOrder?.quantity
    || remoteOrder?.items_number
    || remoteOrder?.items_count
    || remoteOrder?.pieces_count
    || remoteOrder?.qty
  );
  return remoteQuantity > 0 ? remoteQuantity : number(localOrder?.quantity || saleInvoice?.quantity || 1);
}

function carrierReturnOperationType(remoteOrder, localOrder) {
  const isReplacement = isModonReplacementOrder(remoteOrder) || Boolean(localOrder?.is_exchange);
  return isReplacement
    ? { label: "استبدال", kind: "exchange", detail: "راجع مقابل إرسال بديل للزبون" }
    : { label: "راجع", kind: "return", detail: "إرجاع اعتيادي" };
}

function renderReturnCarrierInvoice(invoice, canReceiveReturns) {
  const allEntries = carrierReturnEntries(invoice);
  const query = normalizeSearch($("#returnSearch")?.value || "");
  const matchFilter = $("#returnFilterChips .active")?.dataset.returnFilter || "all";
  const entries = allEntries.filter(({ remoteOrder, localOrder }) => {
    const received = Boolean(localOrder?.returned_received_stock);
    if (matchFilter === "pending" && !(localOrder && !received)) return false;
    if (matchFilter === "received" && !received) return false;
    if (matchFilter === "external" && localOrder) return false;
    if (!query) return true;
    const remoteId = remoteOrderIds(remoteOrder || localOrder)[0] || localOrder?.external_order_id || "";
    const customerName = remoteOrder?.customer_name || remoteOrder?.client_name || remoteOrder?.receiver_name || localOrder?.customer_name || "";
    const product = carrierReturnProductName(remoteOrder, localOrder);
    const aliasIds = [...remoteOrderIds(remoteOrder || {}), ...(localOrder ? localModonOrderIds(localOrder) : []), localOrder?.internal_order_no].filter(Boolean).join(" ");
    return normalizeSearch([remoteId, customerName, product, aliasIds].join(" ")).includes(query);
  });
  // When searching or filtering, hide statements that have no matching returns.
  if ((query || matchFilter !== "all") && !entries.length) return "";
  const matchedOrders = Array.from(new Map(entries.filter((entry) => entry.localOrder).map((entry) => [entry.localOrder.id, entry.localOrder])).values());
  const remoteEntries = entries.filter((entry) => entry.remoteOrder);
  const remoteMatchedEntries = entries.filter((entry) => entry.remoteOrder && entry.localOrder);
  const externalEntries = entries.filter((entry) => entry.remoteOrder && !entry.localOrder);
  const internalOnlyEntries = entries.filter((entry) => !entry.remoteOrder && entry.localOrder);
  // External-only returns (in Modon, not in your system) are read-only and can't
  // be received. Hide them from the visible list unless the user deliberately
  // picks the "external" chip. Counts above stay accurate (computed from entries).
  const rowEntries = matchFilter === "external" ? entries : entries.filter((entry) => entry.localOrder);
  // Nothing inside the system to show for this statement → don't render an empty card.
  if (!rowEntries.length) return "";
  const rows = rowEntries.map(({ remoteOrder, localOrder }) => {
    const received = Boolean(localOrder?.returned_received_stock);
    const match = carrierReturnMatchReason(remoteOrder, localOrder, invoice.employeeId);
    const operationType = carrierReturnOperationType(remoteOrder, localOrder);
    const remoteId = remoteOrderIds(remoteOrder || localOrder)[0] || localOrder?.external_order_id || "-";
    const customerName = clean(remoteOrder?.customer_name || remoteOrder?.client_name || remoteOrder?.receiver_name || localOrder?.customer_name || "-");
    const qty = carrierReturnQuantity(remoteOrder, localOrder);
    const product = carrierReturnProductName(remoteOrder, localOrder);
    const isExchange = operationType.kind === "exchange";
    const canReceive = canReceiveReturns && localOrder && !received && localOrder.status === "returned";
    const pill = !localOrder
      ? `<span class="mo-st st-issue">للمراجعة فقط</span>`
      : received ? `<span class="mo-st st-delivered">دخل المخزون</span>` : `<span class="mo-st st-returned">بانتظار الاستلام</span>`;
    return `<article class="mo-card ret-card">
      <div class="mo-main">
        <div class="mo-who">${escapeHtml(customerName)} <span class="mo-ref">#${escapeHtml(remoteId)}</span></div>
        <div class="mo-meta"><span>${escapeHtml(product)}</span><span>${qty} قطعة</span>${isExchange ? `<span class="ret-exchange">استبدال</span>` : ""}<span class="ret-reason">${escapeHtml(match.label)}</span></div>
        ${localOrder?.deliver_confirmed_fin ? `<div class="ret-fin">سبق قبضه ماليًا — الاستلام يعيد القطع للمخزون فقط</div>` : ""}
      </div>
      <div class="mo-side">
        ${pill}
        ${canReceive ? `<button class="mo-prep ret-recv" type="button" onclick="confirmReturnedOrder('${localOrder.id}').then(function(ok){ if (ok) renderAll(); })">استلام ✓</button>` : ""}
      </div>
    </article>`;
  }).join("");
  const receivedCount = matchedOrders.filter((order) => order.returned_received_stock).length;
  const pendingMatchedCount = matchedOrders.filter((order) => order.status === "returned" && !order.returned_received_stock).length;
  const totalPieces = remoteEntries.reduce((sum, entry) => sum + carrierReturnQuantity(entry.remoteOrder, entry.localOrder), 0);
  const replacementCount = remoteEntries.filter((entry) => carrierReturnOperationType(entry.remoteOrder, entry.localOrder).kind === "exchange").length;
  return `<div class="carrier-return-card">
    <div class="carrier-return-head">
      <div class="carrier-return-identity"><span class="eyebrow">كشف راجع Modon</span><h3>${escapeHtml(employeeName(invoice.employeeId))}</h3><p>${formatDate(invoice.updated_at || invoice.created_at)} · ${escapeHtml(invoice.status)}</p><code>${escapeHtml(invoice.external_invoice_id)}</code></div>
      <div class="carrier-return-progress"><span>المطابق المستلم</span><strong>${receivedCount} <small>من ${matchedOrders.length}</small></strong><div class="carrier-return-progress-bar"><i style="width:${matchedOrders.length ? Math.round((receivedCount / matchedOrders.length) * 100) : 0}%"></i></div></div>
      <div class="carrier-return-actions">
        <button class="ghost" onclick="showCarrierInvoiceDetails('${invoice.id}')">عرض التفاصيل</button>
        ${canReceiveReturns && pendingMatchedCount ? `<button class="primary" onclick="receiveReturnCarrierInvoice('${invoice.id}','all')">استلام المطابق للمخزون</button><button class="ghost" onclick="receiveReturnCarrierInvoice('${invoice.id}','selected')">استلام المحدد</button>` : ""}
      </div>
      <div class="carrier-return-scope"><span>طلبات Modon <strong>${remoteEntries.length}</strong><small>${totalPieces} قطعة</small></span><span>استبدال <strong>${replacementCount}</strong></span><span>مطابق <strong>${remoteMatchedEntries.length}</strong></span><span>Modon فقط <strong>${externalEntries.length}</strong></span><span>النظام فقط <strong>${internalOnlyEntries.length}</strong></span></div>
    </div>
    <div class="ret-card-list">${rows || `<div class="empty">لا توجد طلبات راجعة في هذا الكشف.</div>`}</div>
  </div>`;
}

function showCarrierInvoiceDetails(id) {
  const invoice = repo.state.deliveryInvoices.find((item) => item.id === id);
  if (!invoice) return;
  const modal = $("#carrierInvoiceModal");
  $("#carrierInvoiceModalTitle").textContent = `${invoice.type === "returned" ? "فاتورة راجع" : "فاتورة واصل"} ${invoice.external_invoice_id}`;
  $("#carrierInvoiceModalSubtitle").textContent = `${employeeName(invoice.employeeId)} - ${invoice.modon_created_at ? formatDate(invoice.modon_created_at) : formatDate(invoice.created_at)}`;
  $("#carrierInvoiceModalBody").innerHTML = invoice.type === "returned"
    ? carrierReturnInvoiceDetailsHtml(invoice)
    : carrierDeliveredInvoiceDetailsHtml(invoice);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeCarrierInvoiceDetails() {
  const modal = $("#carrierInvoiceModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function carrierDeliveredInvoiceDetailsHtml(invoice) {
  const remoteOrders = invoice.raw_response?.orders || [];
  const localOrders = (invoice.order_ids || []).map((orderId) => repo.state.deliveryOrders.find((order) => order.id === orderId)).filter(Boolean);
  const rows = remoteOrders.length ? remoteOrders.map((remoteOrder) => {
    const local = findLocalOrderByRemote(remoteOrder, invoice.employeeId);
    return carrierRemoteOrderRow(remoteOrder, local);
  }) : localOrders.map((order) => carrierLocalOrderRow(order));
  const matchedNet = carrierInvoiceCollectableAmount(invoice);
  const returnedMatched = localOrders.filter(isReturnedDeliveryOrder);
  const returnedNet = returnedMatched.reduce((sum, order) => sum + modonMerchantNetPrice(order), 0);
  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:10px;">
      <button class="primary" type="button" onclick="printCarrierInvoiceDetail('${invoice.id}')">🖨 طباعة الفاتورة</button>
    </div>
    <div class="audit-meta">
      ${auditMetaItem("الحالة", invoice.status)}
      ${auditMetaItem("عدد طلبات Modon", invoice.delivered_orders_count)}
      ${auditMetaItem("مطابق داخل النظام", invoice.matched_orders_count || invoice.order_ids?.length || 0)}
      ${auditMetaItem("صافي القائمة الكلي", money(invoice.merchant_price))}
      ${auditMetaItem("صافي المطابق (يدخل القاصة)", money(matchedNet))}
    </div>
    ${returnedMatched.length ? `
    <div style="margin:10px 0;padding:12px 14px;border-radius:10px;background:#fff4e5;border:1px solid #f0b429;border-right:4px solid #f0b429;">
      <strong style="display:block;color:#8a5300;margin-bottom:4px;">↩ يوجد ${returnedMatched.length} طلب راجع في هذه الفاتورة — بقيمة ${money(returnedNet)}</strong>
      <span style="color:#5c4300;">هذه الطلبات الراجعة <b>لا تدخل القاصة</b>؛ ترجع إلى المخزون عبر قسم «الرواجع». لذلك «صافي المطابق» أعلاه لا يشملها.</span>
    </div>` : ""}
    <div class="table-wrap">
      <table>
        <thead><tr><th>طلب Modon</th><th>الزبون</th><th>الحالة</th><th>المبلغ</th><th>صافي التاجر</th><th>المصدر</th></tr></thead>
        <tbody>${rows.join("") || emptyRow(6, "لا توجد تفاصيل طلبات محفوظة لهذه الفاتورة.")}</tbody>
      </table>
    </div>
  `;
}

function carrierReturnInvoiceDetailsHtml(invoice) {
  const entries = carrierReturnEntries(invoice);
  const matchedOrders = Array.from(new Map(entries.filter((entry) => entry.localOrder).map((entry) => [entry.localOrder.id, entry.localOrder])).values());
  const remoteEntries = entries.filter((entry) => entry.remoteOrder);
  const remoteMatchedEntries = entries.filter((entry) => entry.remoteOrder && entry.localOrder);
  const externalEntries = entries.filter((entry) => entry.remoteOrder && !entry.localOrder);
  const internalOnlyEntries = entries.filter((entry) => !entry.remoteOrder && entry.localOrder);
  const rows = entries.map(({ remoteOrder, localOrder }) => {
    const match = carrierReturnMatchReason(remoteOrder, localOrder, invoice.employeeId);
    const operationType = carrierReturnOperationType(remoteOrder, localOrder);
    const remoteId = remoteOrderIds(remoteOrder || localOrder)[0] || localOrder?.external_order_id || "-";
    const customerName = clean(remoteOrder?.customer_name || remoteOrder?.client_name || remoteOrder?.receiver_name || localOrder?.customer_name || "-");
    return `<tr>
      <td>${escapeHtml(remoteId)}</td>
      <td>${escapeHtml(customerName)}</td>
      <td>${escapeHtml(carrierReturnProductName(remoteOrder, localOrder))}</td>
      <td>${carrierReturnQuantity(remoteOrder, localOrder)}</td>
      <td><span class="return-operation-type ${operationType.kind}">${escapeHtml(operationType.label)}</span><small class="return-match-reason">${escapeHtml(operationType.detail)}</small></td>
      <td><span class="badge ${match.kind}">${escapeHtml(match.label)}</span><small class="return-match-reason">${escapeHtml(match.detail)}</small></td>
      <td>${!localOrder ? `<span class="badge external">للمراجعة فقط</span>` : localOrder.returned_received_stock ? `<span class="badge ok">مستلم</span>` : `<span class="badge issue">معلق</span>`}</td>
    </tr>`;
  }).join("");
  return `
    <div class="audit-meta">
      ${auditMetaItem("الحالة", invoice.status)}
      ${auditMetaItem("كل راجع Modon", remoteEntries.length)}
      ${auditMetaItem("مطابق داخل النظام", remoteMatchedEntries.length)}
      ${auditMetaItem("في Modon فقط", externalEntries.length)}
      ${auditMetaItem("في النظام فقط", internalOnlyEntries.length)}
      ${auditMetaItem("تم استلامه", matchedOrders.filter((order) => order.returned_received_stock).length)}
      ${auditMetaItem("المصدر", invoice.source === "modon_orders_api" ? "مجلوب من Modon" : "داخلي")}
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>طلب Modon</th><th>الزبون</th><th>المنتج</th><th>الكمية</th><th>نوع العملية</th><th>المصدر والسبب</th><th>حالة الاستلام</th></tr></thead>
        <tbody>${rows || emptyRow(7, "لا توجد طلبات راجعة في هذا الكشف.")}</tbody>
      </table>
    </div>
  `;
}

function carrierRemoteOrderRow(remoteOrder, localOrder) {
  const statusLabel = modonLiveStatusLabel(remoteOrder);
  const source = localOrder ? `<span class="badge ok">داخل النظام</span>` : `<span class="badge external">خارج النظام</span>`;
  return `<tr>
    <td>${escapeHtml(remoteOrderIds(remoteOrder)[0] || "-")}</td>
    <td>${escapeHtml(remoteOrder.customer_name || remoteOrder.client_name || remoteOrder.name || "-")}</td>
    <td>${escapeHtml(statusLabel)}</td>
    <td>${money(remoteOrder.price || remoteOrder.total_price || remoteOrder.amount)}</td>
    <td>${money(remoteOrder.merchant_price)}</td>
    <td>${source}</td>
  </tr>`;
}

function carrierLocalOrderRow(order) {
  return `<tr>
    <td>${escapeHtml(order.external_order_id || "-")}</td>
    <td>${escapeHtml(order.customer_name || "-")}</td>
    <td>${statusBadge(order.status)}</td>
    <td>${money(order.price)}</td>
    <td>${money(order.merchant_price)}</td>
    <td><span class="badge ok">داخل النظام</span></td>
  </tr>`;
}

function customerAccountMovements(customerPhone) {
  const invoiceMovements = repo.state.invoices
    .filter((invoice) => !invoice.cancelled && invoice.customerPhone === customerPhone && ["customerDebt", "installment"].includes(invoice.saleMode))
    .map((invoice) => ({
      id: invoice.id,
      createdAt: invoice.createdAt,
      type: invoice.saleMode === "installment" ? "فاتورة أقساط" : "فاتورة دين",
      typeCode: invoice.saleMode === "installment" ? "installment" : "debt",
      reference: invoice.number,
      debit: originalInvoiceReceivable(invoice),
      credit: 0,
    }));
  const manualDebtMovements = customerManualDebts(customerPhone)
    .map((debt) => ({
      id: debt.id,
      createdAt: debt.createdAt,
      type: debt.fundingSource === "external" ? "دين يدوي خارج القاصة" : "دين يدوي من القاصة",
      typeCode: "manualDebt",
      reference: debt.number || debt.reason || "دين يدوي",
      debit: number(debt.amount),
      credit: 0,
    }));
  const paymentMovements = repo.state.customerDebtPayments
    .filter((payment) => !payment.cancelled && payment.customerPhone === customerPhone)
    .map((payment) => ({
      id: payment.id,
      createdAt: payment.createdAt,
      type: payment.type === "installment" ? "تسديد قسط" : payment.type === "personalDebt" ? "تسديد دين يدوي" : "قبض من الزبون",
      typeCode: "payment",
      reference: payment.number || payment.invoiceId || "دفعة عامة",
      debit: 0,
      credit: number(payment.amount),
    }));
  let balance = 0;
  return [...invoiceMovements, ...manualDebtMovements, ...paymentMovements]
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt))
    .map((movement) => {
      balance += number(movement.debit) - number(movement.credit);
      return { ...movement, balance: Math.max(balance, 0) };
    })
    .reverse();
}

function filteredCustomerAccountMovements(customerPhone) {
  return customerAccountMovements(customerPhone).filter((movement) => {
    const movementDate = dateOnly(movement.createdAt);
    if (customerLedgerFrom && movementDate < customerLedgerFrom) return false;
    if (customerLedgerTo && movementDate > customerLedgerTo) return false;
    if (customerLedgerType !== "all" && movement.typeCode !== customerLedgerType) return false;
    return true;
  });
}

function setCustomerLedgerFilter(filter, value) {
  if (filter === "from") customerLedgerFrom = clean(value);
  if (filter === "to") customerLedgerTo = clean(value);
  if (filter === "type") customerLedgerType = clean(value) || "all";
  renderCustomerHistory();
}

function clearCustomerLedgerFilters() {
  customerLedgerFrom = "";
  customerLedgerTo = "";
  customerLedgerType = "all";
  renderCustomerHistory();
}

function selectCustomerAccount(customerPhone) {
  selectedCustomerPhone = customerPhone;
  renderCustomerHistory();
}

function openCustomerAccount(customerPhone) {
  selectedCustomerPhone = customerPhone;
  customerDirectoryFilter = "all";
  if ($("#customerSearch")) $("#customerSearch").value = "";
  showView("customers");
  renderCustomerHistory();
}

function customerDirectoryProfile(customer, scopedInvoices) {
  const invoices = scopedInvoices.filter((invoice) => !invoice.cancelled && invoice.customerPhone === customer.phone);
  const invoiceDebtBalance = invoices
    .filter((invoice) => invoice.saleMode === "customerDebt")
    .reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const manualDebts = customerManualDebts(customer.phone);
  const manualDebtBalance = manualDebts.reduce((sum, debt) => sum + personalDebtOpenBalance(debt), 0);
  const directDebtBalance = invoiceDebtBalance + manualDebtBalance;
  const installmentInvoices = invoices.filter((invoice) => invoice.saleMode === "installment");
  const installmentBalance = installmentInvoices.reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const overdueInstallments = installmentInvoices
    .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({
      dueDate: item.dueDate,
      balance: installmentOpenBalance(invoice, index),
    })))
    .filter((item) => item.balance > 0 && item.dueDate && item.dueDate < today()).length;
  return {
    customer,
    invoiceCount: invoices.length,
    manualDebtCount: manualDebts.length,
    manualDebtBalance,
    directDebtBalance,
    installmentBalance,
    overdueInstallments,
    balance: Math.max(directDebtBalance + installmentBalance, 0),
  };
}

function customerMatchesDirectoryFilter(profile, filter = customerDirectoryFilter) {
  if (filter === "owes") return profile.balance > 0;
  if (filter === "debt") return profile.directDebtBalance > 0;
  if (filter === "installment") return profile.installmentBalance > 0;
  if (filter === "overdue") return profile.overdueInstallments > 0;
  if (filter === "settled") return profile.balance <= 0;
  return true;
}

function customerDirectoryStatus(profile) {
  if (profile.overdueInstallments > 0) return { label: "قسط متأخر", kind: "overdue" };
  if (profile.installmentBalance > 0) return { label: "أقساط", kind: "installment" };
  if (profile.directDebtBalance > 0) return { label: "نطلبه", kind: "debt" };
  return { label: "مسدد", kind: "settled" };
}

function setCustomerDirectoryFilter(filter = "all") {
  customerDirectoryFilter = ["all", "owes", "debt", "installment", "overdue", "settled"].includes(filter) ? filter : "all";
  renderCustomerHistory();
}

function renderCustomerHistory() {
  const query = clean($("#customerSearch")?.value).toLowerCase();
  const scopedInvoices = repo.state.invoices.filter((invoice) => activeEmployeeId() === "all" || invoice.employeeId === activeEmployeeId());
  const customerMap = new Map(repo.state.customers.map((customer) => [customer.phone, customer]));
  scopedInvoices.forEach((invoice) => {
    if (!invoice.customerPhone || customerMap.has(invoice.customerPhone)) return;
    customerMap.set(invoice.customerPhone, { name: invoice.customerName || invoice.customerPhone, phone: invoice.customerPhone });
  });
  const allCustomers = [...customerMap.values()].sort((left, right) => clean(left.name).localeCompare(clean(right.name), "ar"));
  const customerProfiles = allCustomers.map((customer) => customerDirectoryProfile(customer, scopedInvoices));
  const filterCounts = {
    all: customerProfiles.length,
    owes: customerProfiles.filter((profile) => customerMatchesDirectoryFilter(profile, "owes")).length,
    debt: customerProfiles.filter((profile) => customerMatchesDirectoryFilter(profile, "debt")).length,
    installment: customerProfiles.filter((profile) => customerMatchesDirectoryFilter(profile, "installment")).length,
    overdue: customerProfiles.filter((profile) => customerMatchesDirectoryFilter(profile, "overdue")).length,
    settled: customerProfiles.filter((profile) => customerMatchesDirectoryFilter(profile, "settled")).length,
  };
  const filteredProfiles = customerProfiles.filter((profile) => {
    const matchesSearch = !query || `${profile.customer.name} ${profile.customer.phone}`.toLowerCase().includes(query);
    return matchesSearch && customerMatchesDirectoryFilter(profile);
  });
  const customers = filteredProfiles.map((profile) => profile.customer);
  const openAccounts = allCustomers.filter((customer) => customerOpenDebt(customer.phone) > 0);
  const totalDebt = allCustomers.reduce((sum, customer) => sum + customerOpenDebt(customer.phone, false), 0);
  const totalInstallments = allCustomers.reduce((sum, customer) => sum + repo.state.invoices
    .filter((invoice) => invoice.customerPhone === customer.phone && invoice.saleMode === "installment")
    .reduce((invoiceSum, invoice) => invoiceSum + invoiceOpenBalance(invoice), 0), 0);
  $("#customerAccountsOverview").innerHTML = `
    <div class="customer-overview-copy">
      <span class="finance-kicker">مركز حسابات الزبائن</span>
      <h2>كل حساب في مكان واحد</h2>
      <p>اختر الزبون لمراجعة حركته وتسديداته واستحقاقاته دون التنقل بين صفحات متعددة.</p>
    </div>
    <div class="customer-overview-metrics">
      <div><span>ديون الزبائن</span><strong>${money(totalDebt)}</strong></div>
      <div><span>أقساط متبقية</span><strong>${money(totalInstallments)}</strong></div>
      <div><span>حسابات مفتوحة</span><strong>${openAccounts.length}</strong></div>
    </div>
  `;
  [
    ["#customerFilterAllCount", "all"],
    ["#customerFilterOwesCount", "owes"],
    ["#customerFilterDebtCount", "debt"],
    ["#customerFilterInstallmentCount", "installment"],
    ["#customerFilterOverdueCount", "overdue"],
    ["#customerFilterSettledCount", "settled"],
  ].forEach(([selector, key]) => {
    if ($(selector)) $(selector).textContent = filterCounts[key];
  });
  $$("#customerDirectoryFilters [data-customer-directory-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.customerDirectoryFilter === customerDirectoryFilter);
  });

  if (!customers.some((customer) => customer.phone === selectedCustomerPhone)) {
    selectedCustomerPhone = customers[0]?.phone || "";
  }
  $("#customerDirectoryList").innerHTML = customers.map((customer) => {
    const profile = filteredProfiles.find((item) => item.customer.phone === customer.phone) || customerDirectoryProfile(customer, scopedInvoices);
    const status = customerDirectoryStatus(profile);
    return `<button type="button" class="customer-directory-item ${customer.phone === selectedCustomerPhone ? "active" : ""}" onclick="selectCustomerAccount(${jsArg(customer.phone)})">
      <span class="customer-directory-avatar">${escapeHtml((customer.name || "ز").trim().charAt(0) || "ز")}</span>
      <span class="customer-directory-copy">
        <strong>${escapeHtml(customer.name || "زبون")}</strong>
        <small>${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")} · ${profile.invoiceCount} فواتير · ${profile.manualDebtCount} ديون يدوية</small>
      </span>
      <span class="customer-directory-balance ${status.kind}"><small>${status.label}</small><strong>${profile.balance > 0 ? money(profile.balance) : "0 د.ع"}</strong></span>
    </button>`;
  }).join("") || `<div class="customer-directory-empty"><strong>لا توجد حسابات بهذه الحالة</strong><span>${query ? "غيّر كلمة البحث أو اختر فلترًا آخر." : "اختر فلترًا آخر لعرض بقية الزبائن."}</span></div>`;

  const customer = customers.find((item) => item.phone === selectedCustomerPhone);
  if (!customer) {
    $("#customerHistory").innerHTML = `<div class="customer-detail-empty"><strong>لا يوجد زبون محدد</strong><span>غيّر البحث أو أضف فاتورة لزبون جديد.</span></div>`;
    return;
  }
  const invoices = scopedInvoices
    .filter((invoice) => invoice.customerPhone === customer.phone)
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const payments = repo.state.customerDebtPayments
    .filter((payment) => payment.customerPhone === customer.phone)
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const manualDebts = customerManualDebts(customer.phone).sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const purchasedItems = invoices.flatMap((invoice) => (invoice.lines || []).map((line) => ({
    invoice,
    productName: line.productName || line.name || getProduct(line.productId)?.name || "منتج",
    quantity: number(line.quantity),
    price: number(line.price),
    total: number(line.total) || number(line.quantity) * number(line.price),
  })));
  const movements = filteredCustomerAccountMovements(customer.phone);
  const activePayments = customerPayments({ customerPhone: customer.phone });
  const debtBalance = customerOpenDebt(customer.phone, false);
  const installmentBalance = invoices.filter((invoice) => invoice.saleMode === "installment").reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const openInvoices = invoices.filter((invoice) => ["customerDebt", "installment"].includes(invoice.saleMode) && invoiceOpenBalance(invoice) > 0);
  const overdueInstallments = invoices
    .filter((invoice) => invoice.saleMode === "installment")
    .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({ invoice, item, index, balance: installmentOpenBalance(invoice, index) })))
    .filter(({ item, balance }) => balance > 0 && item.dueDate && item.dueDate < today());
  const canManageDebts = hasPermission("debts.manage");
  const canCancelDebts = hasPermission("debts.cancel");
  $("#customerHistory").innerHTML = `<article class="customer-account-card">
      <header class="customer-account-head">
        <div class="customer-identity">
          <span class="customer-avatar">${escapeHtml((customer.name || "ز").trim().charAt(0) || "ز")}</span>
          <div>
            <span class="finance-record-kicker">حساب زبون</span>
            <h3>${escapeHtml(customer.name)}</h3>
            <div class="finance-record-meta">
              <span>${escapeHtml(customerPhoneLabel(customer.phone) || "بدون هاتف")}</span>
              <span>${invoices.length} فواتير</span>
              <span>${manualDebts.length} ديون يدوية</span>
              <span>${activePayments.length} دفعات فعالة</span>
            </div>
          </div>
        </div>
        <div class="customer-balance-grid">
          <div><span>ديون مفتوحة</span><strong>${money(debtBalance)}</strong></div>
          <div><span>أقساط متبقية</span><strong>${money(installmentBalance)}</strong></div>
          <div class="${overdueInstallments.length ? "overdue-balance" : ""}"><span>أقساط متأخرة</span><strong>${overdueInstallments.length}</strong></div>
        </div>
        <div class="finance-record-actions customer-account-actions">
          <button class="ghost" onclick="printCustomerStatement(${jsArg(customer.phone)})">طباعة كشف</button>
          <button class="ghost whatsapp-action" onclick="sendCustomerStatementWhatsApp(${jsArg(customer.phone)})">إرسال واتساب</button>
          ${canManageDebts ? `<button class="ghost" onclick="openManualDebtForCustomer(${jsArg(customer.phone)})">إضافة دين</button>` : ""}
          ${canManageDebts ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(customer.phone)})">تسجيل قبض</button>` : ""}
        </div>
      </header>
      <section class="customer-account-section customer-ledger-section">
        <div class="customer-section-head">
          <div><span class="finance-kicker">كشف الحساب</span><h4>تسلسل الحركة المالية</h4></div>
          <span class="hint">${movements.length} حركات مالية</span>
        </div>
        <div class="customer-ledger-filters">
          <label>من تاريخ<input type="date" value="${escapeAttr(customerLedgerFrom)}" onchange="setCustomerLedgerFilter('from', this.value)" /></label>
          <label>إلى تاريخ<input type="date" value="${escapeAttr(customerLedgerTo)}" onchange="setCustomerLedgerFilter('to', this.value)" /></label>
          <label>نوع الحركة
            <select onchange="setCustomerLedgerFilter('type', this.value)">
              <option value="all" ${customerLedgerType === "all" ? "selected" : ""}>كل الحركات</option>
              <option value="debt" ${customerLedgerType === "debt" ? "selected" : ""}>فواتير الدين</option>
              <option value="manualDebt" ${customerLedgerType === "manualDebt" ? "selected" : ""}>الديون اليدوية</option>
              <option value="installment" ${customerLedgerType === "installment" ? "selected" : ""}>فواتير الأقساط</option>
              <option value="payment" ${customerLedgerType === "payment" ? "selected" : ""}>الدفعات</option>
            </select>
          </label>
          <button class="ghost" type="button" onclick="clearCustomerLedgerFilters()">مسح الفلاتر</button>
        </div>
        <div class="table-wrap finance-table-wrap">
          <table class="finance-table customer-ledger-table">
            <thead><tr><th>التاريخ</th><th>الحركة</th><th>المرجع</th><th>مدين</th><th>دائن</th><th>الرصيد</th></tr></thead>
            <tbody>${movements.map((movement) => `<tr>
              <td data-label="التاريخ">${formatDate(movement.createdAt)}</td>
              <td data-label="الحركة"><strong>${escapeHtml(movement.type)}</strong></td>
              <td data-label="المرجع">${escapeHtml(movement.reference)}</td>
              <td data-label="مدين">${movement.debit ? money(movement.debit) : "—"}</td>
              <td data-label="دائن">${movement.credit ? money(movement.credit) : "—"}</td>
              <td data-label="الرصيد"><strong>${money(movement.balance)}</strong></td>
            </tr>`).join("") || emptyRow(6, "لا توجد حركات دين أو أقساط لهذا الزبون.")}</tbody>
          </table>
        </div>
      </section>
      ${manualDebts.length ? `<section class="customer-account-section manual-customer-debts-section">
        <div class="customer-section-head">
          <div><span class="finance-kicker">ديون مضافة يدويًا</span><h4>الديون الشخصية على الزبون</h4></div>
          <span class="hint">${manualDebts.length} سجل</span>
        </div>
        <div class="table-wrap finance-table-wrap">
          <table class="finance-table">
            <thead><tr><th>السند</th><th>السبب</th><th>المصدر</th><th>الدين</th><th>المسدّد</th><th>المتبقي</th><th></th></tr></thead>
            <tbody>${manualDebts.map((debt) => {
              const paid = personalDebtPaidAmount(debt.id);
              const balance = personalDebtOpenBalance(debt);
              return `<tr>
                <td data-label="السند"><strong>${escapeHtml(debt.number || "دين يدوي")}</strong><small class="table-secondary">${formatDate(debt.createdAt)}</small></td>
                <td data-label="السبب">${escapeHtml(debt.reason || "بدون بيان")}</td>
                <td data-label="المصدر"><span class="badge ${debt.fundingSource === "external" ? "external" : "issue"}">${debt.fundingSource === "external" ? "خارج القاصة" : "من القاصة"}</span></td>
                <td data-label="الدين">${money(debt.amount)}</td>
                <td data-label="المسدّد">${money(paid)}</td>
                <td data-label="المتبقي"><strong>${money(balance)}</strong></td>
                <td data-label="الإجراء"><div class="table-actions">${canManageDebts && balance > 0 ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(customer.phone)},'','personalDebt','',${jsArg(debt.id)})">تسديد</button>` : `<span class="badge ok">مسدد</span>`}${canCancelDebts && paid <= 0 ? `<button class="danger-button" onclick="cancelPersonalDebt('${debt.id}')">إلغاء</button>` : ""}</div></td>
              </tr>`;
            }).join("")}</tbody>
          </table>
        </div>
      </section>` : ""}
      <section class="customer-account-section">
        <div class="customer-section-head">
          <div><span class="finance-kicker">سجل المبيعات</span><h4>الفواتير</h4></div>
          <span class="hint">${invoices.length} فاتورة محفوظة</span>
        </div>
        <div class="table-wrap finance-table-wrap">
        <table class="finance-table">
          <thead><tr><th>الفاتورة</th><th>النوع</th><th>الإجمالي</th><th>المدفوع</th><th>المتبقي</th><th>الحالة</th><th></th></tr></thead>
          <tbody>${invoices.map((invoice) => {
            const balance = invoiceOpenBalance(invoice);
            return `<tr>
              <td data-label="الفاتورة"><strong>${invoice.number}</strong></td>
              <td data-label="النوع">${saleModeLabel(invoice.saleMode)}</td>
              <td data-label="الإجمالي">${money(invoice.total)}</td>
              <td data-label="المدفوع">${money(number(invoice.paidAmount) + invoicePaidAfterCreation(invoice.id))}</td>
              <td data-label="المتبقي"><strong>${money(balance)}</strong></td>
              <td data-label="الحالة">${escapeHtml(invoice.paymentStatus)}</td>
              <td data-label="الإجراءات"><div class="table-actions"><button class="ghost" onclick="selectInvoice('${invoice.id}')">عرض</button>${canManageDebts && balance > 0 && invoice.saleMode === "customerDebt" ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(customer.phone)},${jsArg(invoice.id)},'debt')">تسديد</button>` : ""}</div></td>
            </tr>`;
          }).join("") || emptyRow(7, "لا توجد فواتير.")}</tbody>
        </table>
        </div>
      </section>
      <section class="customer-account-section customer-products-section">
        <div class="customer-section-head">
          <div><span class="finance-kicker">سجل المنتجات</span><h4>المنتجات التي اشتراها الزبون</h4></div>
          <span class="hint">${purchasedItems.length} بند مبيع</span>
        </div>
        <div class="table-wrap finance-table-wrap">
          <table class="finance-table">
            <thead><tr><th>التاريخ</th><th>المنتج</th><th>الفاتورة</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead>
            <tbody>${purchasedItems.map((item) => `<tr>
              <td data-label="التاريخ">${formatDate(item.invoice.createdAt)}</td>
              <td data-label="المنتج"><strong>${escapeHtml(item.productName)}</strong></td>
              <td data-label="الفاتورة"><button class="text-action" onclick="selectInvoice('${item.invoice.id}')">${escapeHtml(item.invoice.number)}</button></td>
              <td data-label="الكمية">${item.quantity}</td>
              <td data-label="السعر">${money(item.price)}</td>
              <td data-label="الإجمالي">${money(item.total)}</td>
            </tr>`).join("") || emptyRow(6, "لا توجد منتجات مشتراة لهذا الزبون.")}</tbody>
          </table>
        </div>
      </section>
      ${openInvoices.some((invoice) => invoice.saleMode === "installment") ? `<section class="customer-account-section"><div class="customer-section-head"><div><span class="finance-kicker">استحقاقات مفتوحة</span><h4>تفاصيل الأقساط</h4></div></div><div class="table-wrap finance-table-wrap"><table class="finance-table"><thead><tr><th>الفاتورة</th><th>القسط</th><th>التاريخ</th><th>المبلغ</th><th>المدفوع</th><th>المتبقي</th><th></th></tr></thead><tbody>${openInvoices.filter((invoice) => invoice.saleMode === "installment").flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => {
        const balance = installmentOpenBalance(invoice, index);
        const overdue = balance > 0 && item.dueDate && item.dueDate < today();
        return balance > 0 ? `<tr class="${overdue ? "overdue-installment-row" : ""}">
          <td data-label="الفاتورة">${invoice.number}</td>
          <td data-label="القسط">${index + 1}</td>
          <td data-label="التاريخ">${item.dueDate}</td>
          <td data-label="المبلغ">${money(item.amount)}</td>
          <td data-label="المدفوع">${money(installmentPaidAmount(invoice.id, index))}</td>
          <td data-label="المتبقي"><strong>${money(balance)}</strong></td>
          <td data-label="الإجراء"><div class="installment-row-action">${overdue ? `<span class="badge danger">متأخر</span>` : `<span class="badge issue">قادم</span>`}${canManageDebts ? `<button class="primary" onclick="prepareCustomerPayment(${jsArg(customer.phone)},${jsArg(invoice.id)},'installment','${index}')">تسديد</button>` : ""}</div></td>
        </tr>` : "";
      })).join("")}</tbody></table></div></section>` : ""}
      <section class="customer-account-section payments-section">
        <div class="customer-section-head">
          <div><span class="finance-kicker">الحركات الأخيرة</span><h4>آخر الدفعات</h4></div>
        </div>
        <div class="payment-record-list">${payments.slice(0, 6).map((payment) => `<div class="payment-record ${payment.cancelled ? "is-cancelled" : ""}">
          <div>
            <strong>${payment.cancelled ? "قبض ملغى" : "قبض زبون"}</strong>
            <div class="finance-record-meta"><span>${formatDate(payment.cancelledAt || payment.createdAt)}</span><span>${escapeHtml(payment.number || payment.invoiceId || "دفعة عامة")}</span></div>
          </div>
          <strong class="payment-record-amount">${payment.cancelled ? "ملغاة" : money(payment.amount)}</strong>
          ${canCancelDebts && !payment.cancelled ? `<button class="danger-button" onclick="cancelCustomerPayment('${payment.id}')">إلغاء</button>` : ""}
        </div>`).join("") || `<div class="empty">لا توجد دفعات.</div>`}</div>
      </section>
    </article>`;
}

function dateRangeRoot(key) {
  return $(`[data-date-range="${key}"]`);
}

function selectedDateRange(key) {
  const root = dateRangeRoot(key);
  return {
    from: clean(root?.querySelector("[data-date-from]")?.value),
    to: clean(root?.querySelector("[data-date-to]")?.value),
  };
}

function setDateRange(key, from = "", to = "", preset = "") {
  const root = dateRangeRoot(key);
  if (!root) return;
  const fromInput = root.querySelector("[data-date-from]");
  const toInput = root.querySelector("[data-date-to]");
  if (fromInput) fromInput.value = from;
  if (toInput) toInput.value = to;
  root.classList.toggle("custom-range", Boolean((from || to) && !preset));
  root.querySelectorAll("[data-date-preset]").forEach((button) => {
    button.classList.toggle("active", button.dataset.datePreset === preset);
  });
}

function presetDateRange(preset) {
  const end = new Date();
  const start = new Date(end);
  if (preset === "all") return { from: "", to: "" };
  if (preset === "month") start.setDate(1);
  if (preset === "last30") start.setDate(start.getDate() - 29);
  if (preset === "year") {
    start.setMonth(0);
    start.setDate(1);
  }
  const to = dateOnly(end);
  return { from: dateOnly(start), to };
}

function modonReconciliationStartDate() {
  const start = MODON_OPERATIONAL_START_DATE;
  repo.state.settings ||= {};
  if (repo.state.settings.modonReconciliationStartDate !== start) {
    repo.state.settings.modonReconciliationStartDate = start;
    repo.save();
  }
  return start;
}

function selectedModonReconciliationRange() {
  const minimum = modonReconciliationStartDate();
  const selected = selectedDateRange("modonReconciliation");
  let from = selected.from || clean(repo.state.settings?.modonReconciliationFrom) || minimum;
  let to = selected.to || clean(repo.state.settings?.modonReconciliationTo) || today();
  if (from < minimum) from = minimum;
  if (to < minimum) to = minimum;
  if (to > today()) to = today();
  if (from > to) from = to;
  return { from, to };
}

function modonReconciliationItemDate(item) {
  return item?.created_at || item?.createdAt || item?.created_date || item?.date || item?.updated_at || item?.updatedAt || "";
}

function modonReturnEventDate(item) {
  const latestStatusEvent = modonLatestStatusEvent(item);
  return item?.return_event_at
    || item?.returned_at
    || item?.returnedAt
    || item?.return_date
    || item?.returnDate
    || item?.status_updated_at
    || item?.statusUpdatedAt
    || item?.last_status_at
    || item?.lastStatusAt
    || latestStatusEvent?.date
    || item?.updated_at
    || item?.updatedAt
    || modonReconciliationItemDate(item);
}

function dateMatchesRange(value, keyOrRange) {
  const valueDate = dateOnly(value);
  if (!valueDate) return false;
  const range = typeof keyOrRange === "string" ? selectedDateRange(keyOrRange) : (keyOrRange || {});
  return (!range.from || valueDate >= range.from) && (!range.to || valueDate <= range.to);
}

function runDateRangeFilter(key) {
  if (key === "allInvoices") {
    resetListPage("allInvoices");
    renderUnifiedInvoices();
  } else if (key === "customerInvoices") {
    resetListPage("invoiceArchive");
    renderSalesRecentInvoices();
  } else if (key === "supplierInvoices") {
    resetListPage("purchaseInvoices");
    renderPurchaseInvoices();
  } else if (key === "vouchers") {
    resetListPage("vouchers");
    renderVouchers();
  } else if (key === "stockMovements") {
    resetListPage("stockMovements");
    renderInventory();
  } else if (key === "modonExternal") {
    modonExternalPage = 1;
    renderModonExternalOrders();
  } else if (key === "modonOrdersPrint") {
    resetListPage("modonDaily");
    renderModonDailyPanel();
  } else if (key === "modonReconciliation") {
    const range = selectedModonReconciliationRange();
    setDateRange(key, range.from, range.to, "");
    repo.state.settings ||= {};
    repo.state.settings.modonReconciliationFrom = range.from;
    repo.state.settings.modonReconciliationTo = range.to;
    repo.save();
    renderModonReconciliation();
  } else if (key === "modonHubOrders") {
    resetListPage("internalOrders");
    renderInternalOrders();
  } else if (key === "reports") {
    const range = selectedDateRange("reports");
    repo.state.reportDate = range.to || today();
    repo.state.reportDateFrom = range.from || repo.state.reportDate;
    repo.state.reportDateTo = range.to || repo.state.reportDate;
    repo.save();
    renderReports();
  }
}

function bindProfessionalDateFilters() {
  $$("[data-date-range]").forEach((root) => {
    const key = root.dataset.dateRange;
    const initialDate = key === "reports" || key === "modonOrdersPrint" ? clean(repo.state.reportDate || today()) : "";
    if (key === "modonReconciliation") {
      const minimum = modonReconciliationStartDate();
      const initialFrom = clean(repo.state.settings?.modonReconciliationFrom || minimum);
      const initialTo = clean(repo.state.settings?.modonReconciliationTo || today());
      root.querySelectorAll("[data-date-from], [data-date-to]").forEach((input) => {
        input.min = minimum;
        input.max = today();
      });
      const label = $("#modonReconciliationStartLabel");
      if (label) label.textContent = minimum;
      let safeFrom = initialFrom < minimum ? minimum : initialFrom;
      let safeTo = initialTo < minimum ? minimum : (initialTo > today() ? today() : initialTo);
      if (safeFrom > safeTo) safeFrom = safeTo;
      setDateRange(key, safeFrom, safeTo, safeFrom === minimum && safeTo === today() ? "systemStart" : "");
    }
    else if (key === "modonHubOrders") {
      const minimum = modonReconciliationStartDate();
      root.querySelectorAll("[data-date-from], [data-date-to]").forEach((input) => {
        input.min = minimum;
        input.max = today();
      });
      setDateRange(key, "", "", "all");
    }
    else if (key === "reports") {
      const initialFrom = clean(repo.state.reportDateFrom || initialDate);
      const initialTo = clean(repo.state.reportDateTo || initialDate);
      setDateRange(key, initialFrom, initialTo, initialFrom === today() && initialTo === today() ? "today" : "");
    }
    else if (key === "modonOrdersPrint") setDateRange(key, today(), today(), "today");
    else setDateRange(key, "", "", "all");

    root.querySelectorAll("[data-date-preset]").forEach((button) => {
      button.addEventListener("click", () => {
        const preset = button.dataset.datePreset;
        let range = preset === "systemStart"
          ? { from: modonReconciliationStartDate(), to: today() }
          : presetDateRange(preset);
        if (["modonReconciliation", "modonHubOrders"].includes(key) && preset !== "all") {
          const minimum = modonReconciliationStartDate();
          range = { from: range.from && range.from > minimum ? range.from : minimum, to: range.to || today() };
        }
        setDateRange(key, range.from, range.to, preset);
        runDateRangeFilter(key);
      });
    });

    root.querySelectorAll("[data-date-from], [data-date-to]").forEach((input) => {
      input.addEventListener("change", () => {
        let range = selectedDateRange(key);
        if (["modonReconciliation", "modonHubOrders"].includes(key)) {
          const minimum = modonReconciliationStartDate();
          if (!range.from || range.from < minimum) root.querySelector("[data-date-from]").value = minimum;
          if (!range.to || range.to > today()) root.querySelector("[data-date-to]").value = today();
          range = selectedDateRange(key);
        }
        if (range.from && range.to && range.from > range.to) {
          if (input.matches("[data-date-from]")) root.querySelector("[data-date-to]").value = range.from;
          else root.querySelector("[data-date-from]").value = range.to;
        }
        root.classList.add("custom-range");
        root.querySelectorAll("[data-date-preset]").forEach((button) => button.classList.remove("active"));
        runDateRangeFilter(key);
      });
    });
  });
}

function selectedReportRange() {
  const range = selectedDateRange("reports");
  const fallback = clean(repo.state.reportDate || today());
  return {
    from: range.from || clean(repo.state.reportDateFrom || fallback),
    to: range.to || range.from || clean(repo.state.reportDateTo || fallback),
  };
}

function selectedReportDate() {
  return selectedReportRange().to;
}

function reportRangeLabel(range = selectedReportRange()) {
  return range.from === range.to ? range.to : `${range.from} إلى ${range.to}`;
}

function selectedReportEmployeeId() {
  const selected = clean($("#reportEmployeeScope")?.value || repo.state.reportEmployeeId || "all");
  if (canUseAllAccounts()) return selected || "all";
  return currentEmployee()?.id || selected || "";
}

function selectedReportOperationScope() {
  return clean($("#reportOperationScope")?.value || repo.state.reportOperationScope || "all");
}

function selectedReportSaleModeScope() {
  return clean($("#reportSaleModeScope")?.value || repo.state.reportSaleModeScope || "all");
}

function dateOnly(value) {
  if (!value) return "";
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isReportDate(value, date = selectedReportRange()) {
  if (typeof date === "string") return dateOnly(value) === date;
  return dateMatchesRange(value, date);
}

function reportTotals(date = selectedReportRange(), employeeId = activeEmployeeId(), filters = {}) {
  const operationScope = filters.operationScope || selectedReportOperationScope();
  const saleModeScope = filters.saleModeScope || selectedReportSaleModeScope();
  const byEmployee = (item) => employeeId === "all" || item.employeeId === employeeId;
  const includeSales = operationScope === "all" || operationScope === "sales";
  const includeModon = operationScope === "all" || operationScope === "modon";
  const includeCash = operationScope === "all" || operationScope === "cash";
  const saleCandidates = includeSales ? repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && (saleModeScope === "all" || invoice.saleMode === saleModeScope)) : [];
  const orders = includeModon ? repo.state.deliveryOrders.filter((order) => !isCancelledModonOrder(order) && byEmployee(order) && isReportDate(order.created_at || order.createdAt, date)) : [];
  // Cash basis: Modon orders "enter accounting" only when collected, dated by the
  // collection date. Used for the internal-net metrics in the Modon report.
  const collectedOrders = includeModon ? repo.state.deliveryOrders.filter((order) => !isCancelledModonOrder(order) && byEmployee(order) && order.deliver_confirmed_fin && isReportDate(order.deliver_confirmed_fin_at || order.updated_at || order.created_at || order.createdAt, date)) : [];
  const cashTransactions = includeCash ? repo.state.cashTransactions.filter((item) => byEmployee(item) && isReportDate(item.createdAt, date)) : [];
  const personalDebts = repo.state.personalDebts.filter((item) => !item.cancelled && byEmployee(item) && isReportDate(item.createdAt, date));
  const vouchers = repo.state.vouchers.filter((item) => !item.cancelled && byEmployee(item) && isReportDate(item.createdAt, date));
  // Cash basis: split RECOGNIZED (collected-in-range) sales by mode, not sale-date totals.
  const allocCache = new Map();
  let cashSales = 0, customerDebtSales = 0, installmentSales = 0, modonSales = 0, recognizedInvoiceCount = 0;
  saleCandidates.forEach((invoice) => {
    const recognized = invoiceRecognizedInRange(invoice, date, allocCache).recognizedSales;
    if (recognized <= 0) return;
    recognizedInvoiceCount += 1;
    if (invoice.saleMode === "customerDebt") customerDebtSales += recognized;
    else if (invoice.saleMode === "installment") installmentSales += recognized;
    else if (invoice.saleMode === "modon") modonSales += recognized;
    else cashSales += recognized;
  });
  return {
    invoiceCount: recognizedInvoiceCount,
    totalSales: cashSales + customerDebtSales + installmentSales + modonSales,
    cashSales,
    customerDebtSales,
    installmentSales,
    modonSales,
    cashMovement: cashTransactions.reduce((sum, item) => sum + item.amount, 0),
    personalDebtTotal: personalDebts.reduce((sum, debt) => sum + personalDebtOpenBalance(debt), 0),
    profitExpenses: vouchers.filter((item) => item.type === "expense").reduce(sumBy("amount"), 0),
    orderCount: collectedOrders.length,
    merchantNet: collectedOrders.reduce(sumBy("merchant_price"), 0),
    receivableModon: orders.filter((item) => item.status === "delivered" && !item.deliver_confirmed_fin).reduce(sumBy("merchant_price"), 0),
    returned: orders.filter((item) => item.status === "returned").length,
    issues: orders.filter((item) => item.status === "issue").length,
  };
}

function financialTotals(date = selectedReportRange(), employeeId = activeEmployeeId(), filters = {}) {
  const operationScope = filters.operationScope || selectedReportOperationScope();
  const saleModeScope = filters.saleModeScope || selectedReportSaleModeScope();
  const byEmployee = (item) => employeeId === "all" || item.employeeId === employeeId;
  const includeSales = operationScope === "all" || operationScope === "sales";
  const includeCash = operationScope === "all" || operationScope === "cash";
  const saleCandidates = includeSales ? repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && (saleModeScope === "all" || invoice.saleMode === saleModeScope)) : [];
  const allInvoices = includeSales ? repo.state.invoices.filter((invoice) => !invoice.cancelled && (employeeId === "all" || invoice.employeeId === employeeId) && (saleModeScope === "all" || invoice.saleMode === saleModeScope)) : [];
  const vouchers = repo.state.vouchers.filter((item) => !item.cancelled && byEmployee(item) && isReportDate(item.createdAt, date));
  const cashTransactions = includeCash ? repo.state.cashTransactions.filter((item) => byEmployee(item) && isReportDate(item.createdAt, date)) : [];
  // Cash basis: recognize each invoice's revenue and proportional cost only for the
  // portion actually collected within this date range (never the whole sale on its
  // creation date). Uncollected balances stay as receivables, not sales.
  const allocCache = new Map();
  const invoices = [];
  let sales = 0;
  let costOfGoods = 0;
  saleCandidates.forEach((invoice) => {
    const recognized = invoiceRecognizedInRange(invoice, date, allocCache);
    if (recognized.recognizedSales <= 0) return;
    sales += recognized.recognizedSales;
    costOfGoods += recognized.recognizedCost;
    invoices.push(invoice);
  });
  const grossProfit = sales - costOfGoods;
  const profitExpenses = vouchers.filter((item) => item.type === "expense").reduce(sumBy("amount"), 0);
  const cashIn = cashTransactions.filter((item) => item.amount > 0).reduce(sumBy("amount"), 0);
  const cashOut = Math.abs(cashTransactions.filter((item) => item.amount < 0).reduce(sumBy("amount"), 0));
  const supplierTotals = repo.state.suppliers.reduce((totals, supplier) => {
    const balance = supplierBalance(supplier.id);
    totals.payable += balance.payable;
    totals.receivable += balance.receivable;
    return totals;
  }, { payable: 0, receivable: 0 });
  return {
    sales,
    costOfGoods,
    grossProfit,
    profitExpenses,
    netProfit: grossProfit - profitExpenses,
    cashIn,
    cashOut,
    cashMovement: cashTransactions.reduce((sum, item) => sum + item.amount, 0),
    cashBalance: repo.state.cashTransactions.filter((item) => employeeId === "all" || item.employeeId === employeeId).reduce((sum, item) => sum + item.amount, 0),
    customerReceivables: Array.from(new Set(repo.state.customers.map((customer) => customer.phone))).reduce((sum, phone) => sum + customerOpenDebt(phone, true), 0),
    modonReceivable: repo.state.deliveryOrders.filter((order) => !isCancelledModonOrder(order) && (employeeId === "all" || order.employeeId === employeeId) && order.status === "delivered" && !order.deliver_confirmed_fin).reduce(sumBy("merchant_price"), 0),
    supplierPayable: supplierTotals.payable,
    supplierReceivable: supplierTotals.receivable,
    stockValue: repo.state.products.reduce((sum, product) => sum + stockOf(product.id) * number(product.cost), 0),
    invoiceCount: allInvoices.length,
  };
}

function invoiceCostOfGoods(invoice) {
  return (invoice.lines || []).reduce((sum, line) => {
    const unitCost = line.cost !== undefined ? number(line.cost) : number(getProduct(line.productId)?.cost);
    return sum + unitCost * number(line.quantity);
  }, 0);
}

function invoiceCollectedRevenue(invoice) {
  if (!invoice || invoice.cancelled) return 0;
  const total = Math.max(number(invoice.total), 0);
  if (invoice.saleMode === "cash") return total;
  if (["customerDebt", "installment"].includes(invoice.saleMode)) {
    return Math.min(total, number(invoice.paidAmount) + invoicePaidAfterCreation(invoice.id));
  }
  if (invoice.saleMode === "modon") {
    const order = getOrderByInvoice(invoice.id);
    return order?.deliver_confirmed_fin ? total : 0;
  }
  return Math.min(total, number(invoice.paidAmount));
}

// ---- Cash-basis revenue recognition ---------------------------------------
// The owner keeps the books on a cash basis: revenue and its proportional profit
// are recognized on the date money is ACTUALLY collected, never the sale date.
// Each invoice yields collection events {date, amount}; a report recognizes the
// events whose date falls inside its range. Uncollected balances (e.g. a Modon
// order still "receivable from Modon", or an unpaid debt) are simply not recognized yet.

// FIFO general-payment allocation (mirrors customerGeneralAllocations) but keeps
// the funding payment's date, so each allocated chunk becomes a dated event.
function customerGeneralAllocationEventsDated(customerPhone) {
  const invoices = repo.state.invoices
    .filter((invoice) => !invoice.cancelled && invoice.customerPhone === customerPhone && ["customerDebt", "installment"].includes(invoice.saleMode))
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  const receivables = invoices.map((invoice) => ({ key: `invoice:${invoice.id}`, kind: "invoice", id: invoice.id, createdAt: invoice.createdAt }));
  customerManualDebts(customerPhone).forEach((debt) => receivables.push({ key: `personalDebt:${debt.id}`, kind: "personalDebt", id: debt.id, createdAt: debt.createdAt }));
  receivables.sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  const capacities = new Map(invoices.map((invoice) => {
    const direct = repo.state.customerDebtPayments.filter((p) => !p.cancelled && p.invoiceId === invoice.id).reduce(sumBy("amount"), 0);
    return [`invoice:${invoice.id}`, Math.max(originalInvoiceReceivable(invoice) - direct, 0)];
  }));
  customerManualDebts(customerPhone).forEach((debt) => {
    const direct = repo.state.customerDebtPayments.filter((p) => !p.cancelled && p.personalDebtId === debt.id).reduce(sumBy("amount"), 0);
    capacities.set(`personalDebt:${debt.id}`, Math.max(number(debt.amount) - direct, 0));
  });
  const generalPayments = repo.state.customerDebtPayments
    .filter((p) => !p.cancelled && p.customerPhone === customerPhone && !p.invoiceId && !p.personalDebtId)
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));
  const invoiceEvents = new Map();
  generalPayments.forEach((payment) => {
    let remaining = number(payment.amount);
    for (const receivable of receivables) {
      if (remaining <= 0) break;
      const available = number(capacities.get(receivable.key));
      if (available <= 0) continue;
      const allocated = Math.min(available, remaining);
      capacities.set(receivable.key, available - allocated);
      if (receivable.kind === "invoice") {
        if (!invoiceEvents.has(receivable.id)) invoiceEvents.set(receivable.id, []);
        invoiceEvents.get(receivable.id).push({ date: payment.createdAt, amount: allocated });
      }
      remaining -= allocated;
    }
  });
  return invoiceEvents;
}

function invoiceCollectionEvents(invoice, allocCache) {
  if (!invoice || invoice.cancelled) return [];
  const total = Math.max(number(invoice.total), 0);
  if (total <= 0) return [];
  const mode = invoice.saleMode;
  if (mode === "cash") return [{ date: invoice.createdAt, amount: total }];
  if (mode === "modon") {
    const order = getOrderByInvoice(invoice.id);
    if (!order?.deliver_confirmed_fin) return [];
    const date = order.deliver_confirmed_fin_at || invoice.collectedAt || order.updated_at || invoice.createdAt;
    return [{ date, amount: total }];
  }
  if (["customerDebt", "installment"].includes(mode)) {
    const events = [];
    const upfront = Math.min(total, Math.max(number(invoice.paidAmount), 0));
    if (upfront > 0) events.push({ date: invoice.createdAt, amount: upfront });
    repo.state.customerDebtPayments
      .filter((p) => !p.cancelled && p.invoiceId === invoice.id)
      .forEach((p) => { if (number(p.amount) > 0) events.push({ date: p.createdAt, amount: number(p.amount) }); });
    if (invoice.customerPhone) {
      let cache = allocCache && allocCache.get(invoice.customerPhone);
      if (!cache) {
        cache = customerGeneralAllocationEventsDated(invoice.customerPhone);
        if (allocCache) allocCache.set(invoice.customerPhone, cache);
      }
      (cache.get(invoice.id) || []).forEach((event) => events.push(event));
    }
    return events;
  }
  const paid = Math.min(total, Math.max(number(invoice.paidAmount), 0));
  return paid > 0 ? [{ date: invoice.createdAt, amount: paid }] : [];
}

// Revenue (and its proportional cost/profit) that this invoice recognizes inside
// the given report date range, on a cash basis.
function invoiceRecognizedInRange(invoice, date, allocCache) {
  const total = Math.max(number(invoice.total), 0);
  const cost = invoiceCostOfGoods(invoice);
  const totalProfit = total - cost;
  const events = invoiceCollectionEvents(invoice, allocCache);
  const recognizedSales = events
    .filter((event) => !date || isReportDate(event.date, date))
    .reduce((sum, event) => sum + Math.max(number(event.amount), 0), 0);
  const cappedSales = Math.min(recognizedSales, total);
  const ratio = total > 0 ? Math.min(Math.max(cappedSales / total, 0), 1) : 0;
  return {
    recognizedSales: cappedSales,
    recognizedCost: cost * ratio,
    recognizedProfit: totalProfit * ratio,
    totalCollected: events.reduce((sum, event) => sum + Math.max(number(event.amount), 0), 0),
  };
}

function profitOverview({ date = "", employeeId = activeEmployeeId() } = {}) {
  const allocCache = new Map();
  const candidates = repo.state.invoices
    .filter((invoice) => !invoice.cancelled)
    .filter((invoice) => employeeId === "all" || invoice.employeeId === employeeId);
  const rows = [];
  candidates.forEach((invoice) => {
    const total = number(invoice.total);
    const cost = invoiceCostOfGoods(invoice);
    const totalProfit = total - cost;
    const recognized = invoiceRecognizedInRange(invoice, date, allocCache);
    // Cash basis: only invoices that actually collected money within the range
    // contribute to the report. "Collected profit" is what was recognized here.
    if (recognized.recognizedSales <= 0) return;
    rows.push({
      invoice,
      sales: recognized.recognizedSales,
      cost: recognized.recognizedCost,
      totalProfit: recognized.recognizedProfit,
      collectedRevenue: recognized.recognizedSales,
      collectedProfit: recognized.recognizedProfit,
      uncollectedProfit: 0,
      collectionRatio: total > 0 ? recognized.recognizedSales / total : 0,
    });
  });
  const totalProfit = rows.reduce(sumBy("totalProfit"), 0);
  const collectedProfit = totalProfit;
  return {
    rows,
    sales: rows.reduce(sumBy("sales"), 0),
    cost: rows.reduce(sumBy("cost"), 0),
    totalProfit,
    collectedProfit,
    uncollectedProfit: 0,
    collectedRate: 100,
    openInvoiceCount: rows.length,
  };
}

function setProfitDetailFilter(filter = "total") {
  profitDetailFilter = ["total", "collected", "uncollected"].includes(filter) ? filter : "total";
  renderProfitDetails(profitOverview({ date: selectedReportRange(), employeeId: selectedReportEmployeeId() }));
}

function renderProfitDetails(profit) {
  if (!$("#profitDetailsBody")) return;
  const labels = {
    total: "الفواتير المكوِّنة لإجمالي الربح",
    collected: "الفواتير المكوِّنة للربح المقبوض",
    uncollected: "الفواتير التي تحتوي ربحًا غير مقبوض",
  };
  $("#profitDetailTitle").textContent = labels[profitDetailFilter];
  $$("#profitDetailFilters [data-profit-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.profitFilter === profitDetailFilter);
  });
  const visibleRows = profit.rows
    .filter((row) => profitDetailFilter === "total"
      || (profitDetailFilter === "collected" && Math.abs(row.collectedProfit) > 0.001)
      || (profitDetailFilter === "uncollected" && Math.abs(row.uncollectedProfit) > 0.001))
    .sort((left, right) => new Date(right.invoice.createdAt) - new Date(left.invoice.createdAt));
  const visibleProfit = visibleRows.reduce((sum, row) => {
    if (profitDetailFilter === "collected") return sum + row.collectedProfit;
    if (profitDetailFilter === "uncollected") return sum + row.uncollectedProfit;
    return sum + row.totalProfit;
  }, 0);
  $("#profitDetailSummary").innerHTML = `
    <div><span>عدد الفواتير</span><strong>${visibleRows.length}</strong></div>
    <div><span>قيمة البيع</span><strong>${money(visibleRows.reduce(sumBy("sales"), 0))}</strong></div>
    <div><span>كلفة المنتجات</span><strong>${money(visibleRows.reduce(sumBy("cost"), 0))}</strong></div>
    <div class="featured"><span>قيمة القسم</span><strong>${money(visibleProfit)}</strong></div>
  `;
  $("#profitDetailsBody").innerHTML = visibleRows.map((row) => `
    <tr>
      <td data-label="الفاتورة"><button class="text-button" type="button" onclick="selectInvoice('${row.invoice.id}')">${escapeHtml(row.invoice.number)}</button><small>${formatDate(row.invoice.createdAt)}</small></td>
      <td data-label="الزبون">${escapeHtml(row.invoice.customerName || "بيع مباشر")}</td>
      <td data-label="البيع">${money(row.sales)}</td>
      <td data-label="الكلفة">${money(row.cost)}</td>
      <td data-label="إجمالي الربح"><strong>${money(row.totalProfit)}</strong></td>
      <td data-label="المقبوض"><strong class="profit-collected-value">${money(row.collectedProfit)}</strong><small>${Math.round(row.collectionRatio * 100)}% محصل</small></td>
      <td data-label="غير المقبوض"><strong class="${Math.abs(row.uncollectedProfit) > 0.001 ? "profit-open-value" : ""}">${money(row.uncollectedProfit)}</strong></td>
    </tr>
  `).join("") || emptyRow(7, "لا توجد فواتير ضمن هذا القسم.");
}

function renderReports() {
  const date = selectedReportRange();
  const dateLabel = reportRangeLabel(date);
  const reportEmployeeId = selectedReportEmployeeId();
  const operationScope = selectedReportOperationScope();
  const saleModeScope = selectedReportSaleModeScope();
  const showProfit = canViewProfitReports();
  repo.state.reportDate = date.to;
  repo.state.reportDateFrom = date.from;
  repo.state.reportDateTo = date.to;
  repo.state.reportEmployeeId = reportEmployeeId;
  repo.state.reportOperationScope = operationScope;
  repo.state.reportSaleModeScope = saleModeScope;
  if ($("#reportOperationScope")) $("#reportOperationScope").value = operationScope;
  if ($("#reportSaleModeScope")) $("#reportSaleModeScope").value = saleModeScope;
  const reportFilters = { operationScope, saleModeScope };
  const t = reportTotals(date, reportEmployeeId, reportFilters);
  const overall = accounting.totals(reportEmployeeId);
  const financial = financialTotals(date, reportEmployeeId, reportFilters);
  const profit = profitOverview({ date, employeeId: reportEmployeeId });
  const modonReconciliation = buildModonReconciliation(reportEmployeeId);
  const dailyMetrics = [
    ["إجمالي المبيعات", money(t.totalSales), `${t.invoiceCount} فاتورة`, "sales", { saleMode: saleModeScope }],
    ["نقد مباشر", money(t.cashSales), "تحصيل فوري", "sales", { saleMode: "cash" }],
    ["ديون الزبائن", money(t.customerDebtSales), "فواتير دين", "customerDebt"],
    ["التقسيط", money(t.installmentSales), "فواتير أقساط", "installments"],
    ["Modon", money(t.modonSales), `${t.orderCount} طلب`, "modon"],
    ["حركة القاصة", money(t.cashMovement), "حسب التاريخ", "cash"],
  ];
  renderLinkedMetrics("#dailyReportMetrics", dailyMetrics, { date: date.to, dateFrom: date.from, dateTo: date.to, employeeId: reportEmployeeId });
  const dailyRows = [
    ["نطاق التقرير", dateLabel],
    ["نطاق التقرير", reportEmployeeId === "all" ? "كل الشركة" : employeeName(reportEmployeeId)],
    ["نوع العملية", reportOperationLabel(operationScope)],
    ["طريقة البيع", reportSaleModeLabel(saleModeScope)],
    ["عدد الفواتير", t.invoiceCount],
    ["إجمالي المبيعات", money(t.totalSales)],
    ["نقد مباشر", money(t.cashSales)],
    ["ديون زبائن جديدة", money(t.customerDebtSales)],
    ["مبيعات تقسيط", money(t.installmentSales)],
    ["مبيعات Modon", money(t.modonSales)],
    ["حركة القاصة في التاريخ", money(t.cashMovement)],
    ["رصيد القاصة الحالي", money(overall.cashBalance)],
    ["ديون زبائن يدوية", money(t.personalDebtTotal)],
    ["طلبات Modon", t.orderCount],
    ["طلبات Modon خارج النظام", `${modonReconciliation.externalOnly} قراءة فقط`],
    ["طلبات راجعة / مشاكل", `${t.returned} / ${t.issues}`],
  ];
  $("#dailyReport").innerHTML = dailyRows.map(reportRow).join("");
  const reportEmployees = repo.state.employees
    .filter((employee) => employee.active)
    .filter((employee) => reportEmployeeId === "all" || employee.id === reportEmployeeId);
  const companyCard = reportEmployeeId === "all" ? `
    <div class="card-line featured-line">
      <div><strong>مجموع الشركة</strong><div class="hint">${dateLabel}</div></div>
      <div>فواتير: <strong>${t.invoiceCount}</strong></div>
      <div>طلبات: <strong>${t.orderCount}</strong></div>
      <div>مبيعات: <strong>${money(t.totalSales)}</strong></div>
      <div>مستحق Modon: <strong>${money(t.receivableModon)}</strong></div>
    </div>
  ` : "";
  $("#employeeReport").innerHTML = companyCard + (reportEmployees.map((employee) => {
    const et = reportTotals(date, employee.id, reportFilters);
    return `<div class="card-line"><div><strong>${employee.name}</strong><div class="hint">${employee.modonUsername || "بدون حساب Modon"} - ${dateLabel}</div></div><div>فواتير: <strong>${et.invoiceCount}</strong></div><div>مبيعات: <strong>${money(et.totalSales)}</strong></div><div>طلبات: <strong>${et.orderCount}</strong></div><div>صافي Modon: <strong>${money(et.merchantNet)}</strong></div><div>مستحق: <strong>${money(et.receivableModon)}</strong></div></div>`;
  }).join("") || `<div class="empty">لا يوجد موظفون ضمن هذا النطاق.</div>`);
  renderModonReport(date, reportEmployeeId, reportFilters);
  renderFinancialReport(financial, showProfit, profit);
  if (showProfit) renderProfitDetails(profit);
  renderCashReport(date, reportEmployeeId);
  renderStockReport(reportEmployeeId);
  renderDebtReport(date, reportEmployeeId);
  renderAuditLog();
}

function renderModonReport(date, employeeId, filters) {
  if (!$("#modonReportMetrics")) return;
  const employees = repo.state.employees
    .filter((employee) => employee.active)
    .filter((employee) => employeeId === "all" || employee.id === employeeId);
  const rows = employees.map((employee) => {
    const totals = reportTotals(date, employee.id, { ...filters, operationScope: "modon" });
    const reconciliation = buildModonReconciliationForEmployee(employee.id);
    return { employee, totals, reconciliation };
  });
  const summary = rows.reduce((sum, row) => {
    sum.internal += row.totals.orderCount;
    sum.merchant += row.totals.merchantNet;
    sum.receivable += row.totals.receivableModon;
    sum.external += row.reconciliation.externalOnly;
    sum.missing += row.reconciliation.missing.length;
    sum.returnPending += row.reconciliation.returnedPending.length;
    sum.returnReceived += row.reconciliation.returnedReceived.length;
    sum.collected += row.reconciliation.collected.length;
    sum.deliveredUnpaid += row.reconciliation.deliveredUnpaid.length;
    return sum;
  }, { internal: 0, merchant: 0, receivable: 0, external: 0, missing: 0, returnPending: 0, returnReceived: 0, collected: 0, deliveredUnpaid: 0 });
  renderLinkedMetrics("#modonReportMetrics", [
    ["طلبات داخل النظام", summary.internal, "تدخل في المحاسبة", "modon"],
    ["صافي Modon الداخلي", money(summary.merchant), "صافي التاجر", "modon"],
    ["مقبوضة", summary.collected, "دخلت القاصة", "modon"],
    ["واصل غير مقبوض", summary.deliveredUnpaid, "ينتظر فاتورة/قبض", "modonReceivable"],
    ["مستحق غير مقبوض", money(summary.receivable), "لا يدخل القاصة", "modonReceivable"],
    ["خارج النظام", summary.external, "قراءة فقط", "modon"],
    ["راجع معلق", summary.returnPending, "ينتظر الاستلام", "modon"],
    ["راجع مستلم", summary.returnReceived, "رجع للمخزون", "modon"],
    ["مفقود", summary.missing, "يحتاج مطالبة", "modon"],
  ], { date: date.to, dateFrom: date.from, dateTo: date.to, employeeId });
  $("#modonReport").innerHTML = rows.map(({ employee, totals, reconciliation }) => `
    <div class="card-line">
      <div><strong>${escapeHtml(employee.name)}</strong><div class="hint">${escapeHtml(employee.modonUsername || "بدون حساب Modon")}</div></div>
      <div>داخلي: <strong>${totals.orderCount}</strong></div>
      <div>مقبوض: <strong>${reconciliation.collected.length}</strong></div>
      <div>واصل غير مقبوض: <strong>${reconciliation.deliveredUnpaid.length}</strong></div>
      <div>راجع معلق: <strong>${reconciliation.returnedPending.length}</strong></div>
      <div>راجع مستلم: <strong>${reconciliation.returnedReceived.length}</strong></div>
      <div>مفقود: <strong>${reconciliation.missing.length}</strong></div>
      <div>خارج النظام: <strong>${reconciliation.externalOnly}</strong></div>
    </div>
  `).join("") || `<div class="empty">لا توجد حسابات Modon ضمن هذا النطاق.</div>`;
}

function buildModonReconciliationForEmployee(employeeId) {
  return buildModonReconciliation(employeeId);
}

function renderFinancialReport(financial, showProfit = canViewProfitReports(), profit = profitOverview({ date: selectedReportRange(), employeeId: selectedReportEmployeeId() })) {
  if (!$("#financialMetrics")) return;
  $$(".profit-only").forEach((node) => node.classList.toggle("hidden", !showProfit));
  if (!showProfit) {
    $("#financialMetrics").innerHTML = "";
    $("#financialReport").innerHTML = "";
    return;
  }
  $("#financialMetrics").innerHTML = [
    ["total", "إجمالي الربح", profit.totalProfit, `${profit.rows.length} فاتورة · قبل المصاريف`],
    ["collected", "الربح المقبوض", profit.collectedProfit, `${profit.collectedRate}% من إجمالي الربح`],
    ["uncollected", "الربح غير المقبوض", profit.uncollectedProfit, `${profit.openInvoiceCount} فاتورة غير مكتملة التحصيل`],
  ].map(([filter, label, value, note]) => `
    <button class="metric report-linked-metric profit-metric ${filter}" type="button" data-profit-filter="${filter}">
      <span>${label}</span>
      <strong>${money(value)}</strong>
      <small>${note}</small>
      <i aria-hidden="true">عرض التفاصيل ←</i>
    </button>
  `).join("");
  $("#financialReport").innerHTML = [
    ["إجمالي المبيعات في التاريخ", money(financial.sales)],
    ["كلفة البضاعة المباعة", money(financial.costOfGoods)],
    ["مجمل الربح", money(financial.grossProfit)],
    ["مصاريف تخصم من الربح", money(financial.profitExpenses)],
    ["صافي الربح التقريبي", money(financial.netProfit)],
    ["المقبوض نقدًا في التاريخ", money(financial.cashIn)],
    ["المدفوع من القاصة في التاريخ", money(financial.cashOut)],
    ["صافي حركة القاصة في التاريخ", money(financial.cashMovement)],
    ["رصيد القاصة الحالي", money(financial.cashBalance)],
    ["مستحقات Modon غير المقبوضة", money(financial.modonReceivable)],
    ["ذمم الزبائن المفتوحة", money(financial.customerReceivables)],
    ["مستحق لنا على الموردين", money(financial.supplierReceivable)],
    ["متبقي علينا للموردين", money(financial.supplierPayable)],
    ["قيمة المخزون بالكلفة", money(financial.stockValue)],
  ].map(reportRow).join("");
}

function renderCashReport(date, employeeId) {
  if (!$("#cashReportMetrics")) return;
  const byEmployee = (item) => employeeId === "all" || item.employeeId === employeeId;
  const cashTransactions = repo.state.cashTransactions.filter((item) => byEmployee(item) && isReportDate(item.createdAt, date));
  const vouchers = repo.state.vouchers.filter((item) => !item.cancelled && byEmployee(item) && isReportDate(item.createdAt, date));
  const cashIn = cashTransactions.filter((item) => item.amount > 0).reduce(sumBy("amount"), 0);
  const cashOut = Math.abs(cashTransactions.filter((item) => item.amount < 0).reduce(sumBy("amount"), 0));
  const balance = repo.state.cashTransactions.filter(byEmployee).reduce((sum, item) => sum + item.amount, 0);
  const receiptTotal = vouchers.filter((item) => item.type === "receipt").reduce(sumBy("amount"), 0);
  const paymentTotal = vouchers.filter((item) => item.type === "payment").reduce(sumBy("amount"), 0);
  const expenseTotal = vouchers.filter((item) => item.type === "expense").reduce(sumBy("amount"), 0);
  const dateLabel = reportRangeLabel(date);
  renderLinkedMetrics("#cashReportMetrics", [
    ["داخل القاصة", money(cashIn), "قبض وفواتير مؤكدة", "cash"],
    ["خارج القاصة", money(cashOut), "صرف ودفع", "cash"],
    ["صافي الفترة", money(cashIn - cashOut), dateLabel, "cash"],
    ["الرصيد الحالي", money(balance), employeeId === "all" ? "كل الشركة" : employeeName(employeeId), "cash"],
  ], { date: date.to, dateFrom: date.from, dateTo: date.to, employeeId });
  $("#cashReport").innerHTML = `
    <div class="report-source-summary">
      ${[["سند قبض", money(receiptTotal)], ["سند دفع", money(paymentTotal)], ["سند صرف", money(expenseTotal)], ["عدد الحركات", cashTransactions.length]].map(reportRow).join("")}
    </div>
    <div class="report-source-list">
      ${cashTransactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item) => `<div class="report-source-row">
        <div><strong>${escapeHtml(item.reason)}</strong><small>${escapeHtml(item.reference || "-")} · ${formatDate(item.createdAt)}</small></div>
        <strong class="${number(item.amount) < 0 ? "out" : "in"}">${number(item.amount) > 0 ? "+" : ""}${money(item.amount)}</strong>
      </div>`).join("") || `<div class="empty">لا توجد حركات قاصة ضمن الفترة المحددة.</div>`}
    </div>
  `;
}

function renderStockReport(employeeId) {
  if (!$("#stockReportMetrics")) return;
  const products = repo.state.products;
  const stockValue = products.reduce((sum, product) => sum + stockOf(product.id) * number(product.cost), 0);
  const lowStock = products.filter((product) => stockOf(product.id) <= number(product.minStock || 0)).length;
  const reconciliation = buildModonReconciliation(employeeId);
  const returnedPendingQty = reconciliation.returnedPending.reduce((sum, order) => sum + number(order.quantity || 1), 0);
  const returnedReceivedQty = reconciliation.returnedReceived.reduce((sum, order) => sum + number(order.quantity || 1), 0);
  renderLinkedMetrics("#stockReportMetrics", [
    ["عدد المنتجات", products.length, "كتالوج", "stock"],
    ["قيمة المخزون", money(stockValue), "بالكلفة", "stock"],
    ["منخفضة الرصيد", lowStock, "بحاجة متابعة", "lowStock"],
    ["راجع بانتظار الدخول", returnedPendingQty, "قطع", "modon"],
    ["راجع دخل المخزون", returnedReceivedQty, "قطع", "modon"],
  ], { employeeId });
  $("#stockReport").innerHTML = [
    ["إجمالي الكميات", products.reduce((sum, product) => sum + stockOf(product.id), 0)],
    ["طلبات راجعة غير مستلمة", reconciliation.returnedPending.length],
    ["طلبات راجعة مستلمة", reconciliation.returnedReceived.length],
    ["طلبات عليها مشاكل", reconciliation.issues.length],
    ["طلبات مفقودة من كشف Modon", reconciliation.missing.length],
  ].map(reportRow).join("");
}

function renderDebtReport(date, employeeId) {
  if (!$("#debtReportMetrics")) return;
  const byEmployee = (item) => employeeId === "all" || item.employeeId === employeeId;
  const customerReceivables = Array.from(new Set(repo.state.customers.map((customer) => customer.phone))).reduce((sum, phone) => sum + customerOpenDebt(phone, true), 0);
  const todayDebtSales = repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && invoice.saleMode === "customerDebt" && isReportDate(invoice.createdAt, date)).reduce(sumBy("total"), 0);
  const todayInstallments = repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && invoice.saleMode === "installment" && isReportDate(invoice.createdAt, date)).reduce(sumBy("total"), 0);
  const debtPayments = repo.state.customerDebtPayments.filter((payment) => !payment.cancelled && byEmployee(payment) && isReportDate(payment.createdAt, date)).reduce(sumBy("amount"), 0);
  const personalDebts = repo.state.personalDebts.filter((item) => !item.cancelled && byEmployee(item));
  const personalDebtToday = personalDebts.filter((item) => isReportDate(item.createdAt, date)).reduce(sumBy("amount"), 0);
  const personalDebtOpen = personalDebts.reduce((sum, debt) => sum + personalDebtOpenBalance(debt), 0);
  const dateLabel = reportRangeLabel(date);
  renderLinkedMetrics("#debtReportMetrics", [
    ["ذمم الزبائن المفتوحة", money(customerReceivables), "ديون وأقساط", "customers"],
    ["ديون زبائن الفترة", money(todayDebtSales), dateLabel, "customerDebt"],
    ["تقسيط الفترة", money(todayInstallments), dateLabel, "installments"],
    ["قبض زبائن الفترة", money(debtPayments), "تسديدات", "customers"],
    ["ديون يدوية أضيفت", money(personalDebtToday), "من القاصة أو خارجها", "vouchers"],
  ], { date: date.to, dateFrom: date.from, dateTo: date.to, employeeId });
  $("#debtReport").innerHTML = [
    ["عدد فواتير الدين في الفترة", repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && invoice.saleMode === "customerDebt" && isReportDate(invoice.createdAt, date)).length],
    ["عدد فواتير التقسيط في الفترة", repo.state.invoices.filter((invoice) => !invoice.cancelled && byEmployee(invoice) && invoice.saleMode === "installment" && isReportDate(invoice.createdAt, date)).length],
    ["عدد دفعات الزبائن في الفترة", repo.state.customerDebtPayments.filter((payment) => !payment.cancelled && byEmployee(payment) && isReportDate(payment.createdAt, date)).length],
    ["إجمالي الديون اليدوية المفتوحة", money(personalDebtOpen)],
  ].map(reportRow).join("");
}

function reportOperationLabel(value) {
  return {
    all: "كل العمليات",
    sales: "المبيعات فقط",
    modon: "طلبات Modon فقط",
    cash: "حركة القاصة فقط",
  }[value] || "كل العمليات";
}

function reportSaleModeLabel(value) {
  return {
    all: "كل طرق البيع",
    cash: "نقد مباشر",
    customerDebt: "دين زبون",
    installment: "تقسيط",
    modon: "Modon",
  }[value] || "كل طرق البيع";
}

function reportCustomerProfiles(employeeId = selectedReportEmployeeId()) {
  const scopedInvoices = repo.state.invoices.filter((invoice) => employeeId === "all" || invoice.employeeId === employeeId);
  const customerMap = new Map(repo.state.customers.map((customer) => [customer.phone, customer]));
  scopedInvoices.forEach((invoice) => {
    if (!invoice.customerPhone || customerMap.has(invoice.customerPhone)) return;
    customerMap.set(invoice.customerPhone, { name: invoice.customerName || invoice.customerPhone, phone: invoice.customerPhone });
  });
  return [...customerMap.values()]
    .map((customer) => customerDirectoryProfile(customer, scopedInvoices))
    .sort((left, right) => right.balance - left.balance);
}

function professionalReportData(tabId) {
  const date = selectedReportRange();
  const employeeId = selectedReportEmployeeId();
  const operationScope = selectedReportOperationScope();
  const saleModeScope = selectedReportSaleModeScope();
  const filters = { operationScope, saleModeScope };
  const byEmployee = (item) => employeeId === "all" || item.employeeId === employeeId;
  const invoices = repo.state.invoices
    .filter((invoice) => !invoice.cancelled && byEmployee(invoice) && isReportDate(invoice.createdAt, date))
    .filter((invoice) => saleModeScope === "all" || invoice.saleMode === saleModeScope)
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const orders = repo.state.deliveryOrders
    .filter((order) => !isCancelledModonOrder(order) && byEmployee(order) && isReportDate(order.created_at || order.createdAt, date))
    .sort((left, right) => new Date(right.created_at || right.createdAt) - new Date(left.created_at || left.createdAt));
  const cashTransactions = repo.state.cashTransactions
    .filter((item) => byEmployee(item) && isReportDate(item.createdAt, date))
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const totals = reportTotals(date, employeeId, filters);
  const financial = financialTotals(date, employeeId, filters);
  const common = {
    period: reportRangeLabel(date),
    scope: employeeId === "all" ? "كل الشركة" : employeeName(employeeId),
    meta: [
      ["نوع العملية", reportOperationLabel(operationScope)],
      ["طريقة البيع", reportSaleModeLabel(saleModeScope)],
    ],
  };

  if (tabId === "reportProfitsTab") {
    const profit = profitOverview({ date, employeeId });
    const rows = profit.rows
      .filter((row) => saleModeScope === "all" || row.invoice.saleMode === saleModeScope)
      .sort((left, right) => new Date(right.invoice.createdAt) - new Date(left.invoice.createdAt));
    const totalProfit = rows.reduce(sumBy("totalProfit"), 0);
    const collectedProfit = rows.reduce(sumBy("collectedProfit"), 0);
    const uncollectedProfit = rows.reduce(sumBy("uncollectedProfit"), 0);
    return {
      ...common,
      title: "تقرير الأرباح",
      subtitle: "تحليل الربح الإجمالي والمقبوض وغير المقبوض على مستوى كل فاتورة",
      metrics: [
        ["إجمالي المبيعات", money(rows.reduce(sumBy("sales"), 0)), `${rows.length} فاتورة`],
        ["كلفة المنتجات", money(rows.reduce(sumBy("cost"), 0)), "كلفة البضاعة"],
        ["إجمالي الربح", money(totalProfit), "قبل المصروفات"],
        ["الربح المقبوض", money(collectedProfit), "حسب التحصيل"],
        ["الربح غير المقبوض", money(uncollectedProfit), "ضمن الذمم"],
        ["مصاريف الفترة", money(financial.profitExpenses), "سندات الصرف"],
        ["صافي الربح", money(totalProfit - financial.profitExpenses), "بعد المصروفات"],
      ],
      sections: [{
        title: "تفاصيل ربح الفواتير",
        columns: ["التاريخ", "الفاتورة", "الزبون", "نوع البيع", "المبيعات", "الكلفة", "الربح", "المقبوض", "غير المقبوض"],
        rows: rows.map((row) => [
          dateOnly(row.invoice.createdAt),
          row.invoice.number,
          row.invoice.customerName || "بيع مباشر",
          saleModeLabel(row.invoice.saleMode),
          money(row.sales),
          money(row.cost),
          money(row.totalProfit),
          money(row.collectedProfit),
          money(row.uncollectedProfit),
        ]),
      }],
    };
  }

  if (tabId === "reportEmployeesTab") {
    const employees = repo.state.employees
      .filter((employee) => employee.active)
      .filter((employee) => employeeId === "all" || employee.id === employeeId);
    const rows = employees.map((employee) => {
      const employeeTotals = reportTotals(date, employee.id, filters);
      return [
        employee.name,
        employee.modonUsername || "-",
        employeeTotals.invoiceCount,
        money(employeeTotals.totalSales),
        employeeTotals.orderCount,
        money(employeeTotals.merchantNet),
        money(employeeTotals.receivableModon),
        money(employeeTotals.cashMovement),
      ];
    });
    return {
      ...common,
      title: "تقرير الموظفين",
      subtitle: "مقارنة أداء المبيعات وطلبات Modon وحركة القاصة حسب الموظف",
      metrics: [
        ["عدد الموظفين", employees.length, "ضمن النطاق"],
        ["إجمالي الفواتير", totals.invoiceCount, "فاتورة"],
        ["إجمالي المبيعات", money(totals.totalSales), "كل الموظفين"],
        ["طلبات Modon", totals.orderCount, "طلب"],
        ["صافي Modon", money(totals.merchantNet), "صافي التاجر"],
      ],
      sections: [{
        title: "أداء الموظفين",
        columns: ["الموظف", "حساب Modon", "الفواتير", "المبيعات", "الطلبات", "صافي Modon", "مستحق Modon", "حركة القاصة"],
        rows,
      }],
    };
  }

  if (tabId === "reportModonTab") {
    const collected = orders.filter((order) => order.deliver_confirmed_fin).length;
    const deliveredUnpaid = orders.filter((order) => modonOrderWorkStatus(order) === "delivered" && !order.deliver_confirmed_fin);
    return {
      ...common,
      title: "تقرير Modon والمطابقة",
      subtitle: "طلبات الفترة وحالاتها المالية والتشغيلية",
      metrics: [
        ["إجمالي الطلبات", orders.length, "طلب داخلي"],
        ["صافي التاجر", money(orders.reduce(sumBy("merchant_price"), 0)), "ضمن الفترة"],
        ["مقبوضة", collected, "دخلت القاصة"],
        ["واصل غير مقبوض", deliveredUnpaid.length, money(deliveredUnpaid.reduce(sumBy("merchant_price"), 0))],
        ["راجع", orders.filter((order) => modonOrderWorkStatus(order) === "returned").length, "طلب"],
        ["مشاكل", orders.filter((order) => modonOrderWorkStatus(order) === "issue").length, "تحتاج متابعة"],
      ],
      sections: [{
        title: "تفاصيل طلبات Modon",
        columns: ["التاريخ", "الطلب", "الزبون", "الموظف", "الحالة", "المبلغ", "التوصيل", "صافي التاجر", "القبض"],
        rows: orders.map((order) => [
          dateOnly(order.created_at || order.createdAt),
          order.external_order_id || order.internal_order_no || "-",
          order.customer_name || "-",
          employeeName(order.employeeId),
          modonOrderStatusLabel(order),
          money(order.price),
          money(order.delivery_price),
          money(order.merchant_price),
          order.deliver_confirmed_fin ? "مقبوض" : "غير مقبوض",
        ]),
      }],
    };
  }

  if (tabId === "reportCashTab") {
    const cashIn = cashTransactions.filter((item) => number(item.amount) > 0).reduce(sumBy("amount"), 0);
    const cashOut = Math.abs(cashTransactions.filter((item) => number(item.amount) < 0).reduce(sumBy("amount"), 0));
    return {
      ...common,
      title: "تقرير القاصة والسندات",
      subtitle: "حركة النقد الداخلة والخارجة مع المراجع ومصدر كل حركة",
      metrics: [
        ["داخل القاصة", money(cashIn), "الفترة المحددة"],
        ["خارج القاصة", money(cashOut), "الفترة المحددة"],
        ["صافي الفترة", money(cashIn - cashOut), `${cashTransactions.length} حركة`],
        ["الرصيد الحالي", money(financial.cashBalance), common.scope],
      ],
      sections: [{
        title: "تفاصيل حركات القاصة",
        columns: ["التاريخ", "الحركة", "المرجع", "الموظف", "داخل", "خارج"],
        rows: cashTransactions.map((item) => [
          formatDate(item.createdAt),
          item.reason || "-",
          item.reference || "-",
          employeeName(item.employeeId),
          number(item.amount) > 0 ? money(item.amount) : "-",
          number(item.amount) < 0 ? money(Math.abs(item.amount)) : "-",
        ]),
      }],
    };
  }

  if (tabId === "reportStockTab") {
    const products = [...repo.state.products].sort((left, right) => clean(left.name).localeCompare(clean(right.name), "ar"));
    const stockValue = products.reduce((sum, product) => sum + stockOf(product.id) * number(product.cost), 0);
    const reconciliation = buildModonReconciliation(employeeId);
    return {
      ...common,
      title: "تقرير المخزون والراجع",
      subtitle: "أرصدة المنتجات الحالية وقيمتها بالكلفة وحالة راجع Modon",
      metrics: [
        ["عدد المنتجات", products.length, "منتج"],
        ["إجمالي الكميات", products.reduce((sum, product) => sum + stockOf(product.id), 0), "قطعة"],
        ["قيمة المخزون", money(stockValue), "بالكلفة"],
        ["منخفض أو نافد", products.filter((product) => stockOf(product.id) <= number(product.minStock || 0)).length, "منتج"],
        ["راجع معلق", reconciliation.returnedPending.length, "طلب"],
        ["راجع مستلم", reconciliation.returnedReceived.length, "طلب"],
      ],
      sections: [{
        title: "أرصدة المنتجات",
        columns: ["المنتج", "التصنيف", "المورد", "الرصيد", "الكلفة", "سعر المفرد", "سعر الجملة", "قيمة الرصيد"],
        rows: products.map((product) => [
          product.name,
          product.category || "غير مصنف",
          supplierName(product.supplierId),
          stockOf(product.id),
          money(product.cost),
          money(product.retailPrice ?? product.price),
          money(product.wholesalePrice ?? product.retailPrice ?? product.price),
          money(stockOf(product.id) * number(product.cost)),
        ]),
      }],
    };
  }

  if (tabId === "reportDebtTab") {
    const profiles = reportCustomerProfiles(employeeId);
    const openProfiles = profiles.filter((profile) => profile.balance > 0);
    const payments = repo.state.customerDebtPayments.filter((payment) => !payment.cancelled && byEmployee(payment) && isReportDate(payment.createdAt, date));
    return {
      ...common,
      title: "تقرير ديون الزبائن والأقساط",
      subtitle: "الرصيد المفتوح لكل زبون مع فصل الدين المباشر والأقساط والديون اليدوية",
      metrics: [
        ["ذمم مفتوحة", money(openProfiles.reduce(sumBy("balance"), 0)), `${openProfiles.length} زبون`],
        ["ديون مباشرة", money(openProfiles.reduce(sumBy("directDebtBalance"), 0)), "تشمل اليدوية"],
        ["أقساط متبقية", money(openProfiles.reduce(sumBy("installmentBalance"), 0)), "أقساط مفتوحة"],
        ["أقساط متأخرة", openProfiles.reduce((sum, profile) => sum + profile.overdueInstallments, 0), "استحقاق"],
        ["قبض الفترة", money(payments.reduce(sumBy("amount"), 0)), `${payments.length} دفعة`],
      ],
      sections: [{
        title: "أرصدة الزبائن المفتوحة",
        columns: ["الزبون", "الهاتف", "الفواتير", "الديون اليدوية", "الدين المباشر", "الأقساط", "المتأخر", "الإجمالي"],
        rows: openProfiles.map((profile) => [
          profile.customer.name,
          customerPhoneLabel(profile.customer.phone),
          profile.invoiceCount,
          profile.manualDebtCount,
          money(profile.directDebtBalance),
          money(profile.installmentBalance),
          profile.overdueInstallments,
          money(profile.balance),
        ]),
      }],
    };
  }

  if (tabId === "reportAuditTab") {
    const rows = auditLogRows()
      .filter((row) => byEmployee(row) && isReportDate(row.createdAt, date))
      .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
    return {
      ...common,
      title: "تقرير سجل المراجعة",
      subtitle: "الحركات الحساسة والعمليات المسجلة مع المستخدم والتوقيت والمرجع",
      metrics: [
        ["عدد الحركات", rows.length, "ضمن الفترة"],
        ["المستخدمون", new Set(rows.map((row) => row.employeeId)).size, "حساب"],
      ],
      sections: [{
        title: "سجل العمليات",
        columns: ["التاريخ", "العملية", "المرجع", "المستخدم", "التفاصيل"],
        rows: rows.map((row) => [
          formatDate(row.createdAt),
          row.action,
          row.ref || "-",
          employeeName(row.employeeId),
          row.details || "-",
        ]),
      }],
    };
  }

  const summarySections = [{
    title: "المؤشرات المالية",
    columns: ["المؤشر", "القيمة"],
    rows: [
      ["إجمالي المبيعات", money(totals.totalSales)],
      ["نقد مباشر", money(totals.cashSales)],
      ["ديون زبائن", money(totals.customerDebtSales)],
      ["مبيعات تقسيط", money(totals.installmentSales)],
      ["مبيعات Modon", money(totals.modonSales)],
      ["حركة القاصة", money(totals.cashMovement)],
      ["رصيد القاصة الحالي", money(financial.cashBalance)],
      ["ذمم الزبائن المفتوحة", money(financial.customerReceivables)],
      ["مستحقات Modon", money(financial.modonReceivable)],
      ["مستحقات الموردين", money(financial.supplierPayable)],
      ["قيمة المخزون", money(financial.stockValue)],
    ],
  }];
  if (operationScope === "all" || operationScope === "sales") {
    summarySections.push({
      title: "فواتير المبيعات في الفترة",
      columns: ["التاريخ", "الفاتورة", "الزبون", "الموظف", "طريقة البيع", "الإجمالي"],
      rows: invoices.map((invoice) => [
        dateOnly(invoice.createdAt),
        invoice.number,
        invoice.customerName || "بيع مباشر",
        employeeName(invoice.employeeId),
        saleModeLabel(invoice.saleMode),
        money(invoice.total),
      ]),
    });
  }
  if (operationScope === "all" || operationScope === "modon") {
    summarySections.push({
      title: "طلبات Modon في الفترة",
      columns: ["التاريخ", "الطلب", "الزبون", "الحالة", "المبلغ", "الصافي"],
      rows: orders.map((order) => [
        dateOnly(order.created_at || order.createdAt),
        order.external_order_id || order.internal_order_no || "-",
        order.customer_name || "-",
        modonOrderStatusLabel(order),
        money(order.price),
        money(order.merchant_price),
      ]),
    });
  }
  if (operationScope === "all" || operationScope === "cash") {
    summarySections.push({
      title: "حركة القاصة في الفترة",
      columns: ["التاريخ", "الحركة", "المرجع", "المبلغ"],
      rows: cashTransactions.map((item) => [formatDate(item.createdAt), item.reason || "-", item.reference || "-", money(item.amount)]),
    });
  }
  return {
    ...common,
    title: "ملخص الشركة",
    subtitle: "ملخص مالي وتشغيلي مستقل مبني على الفلاتر المحددة",
    metrics: [
      ["إجمالي المبيعات", money(totals.totalSales), `${totals.invoiceCount} فاتورة`],
      ["حركة القاصة", money(totals.cashMovement), "ضمن الفترة"],
      ["رصيد القاصة", money(financial.cashBalance), "الرصيد الحالي"],
      ["ذمم الزبائن", money(financial.customerReceivables), "ديون وأقساط"],
      ["طلبات Modon", totals.orderCount, money(totals.merchantNet)],
      ["قيمة المخزون", money(financial.stockValue), "بالكلفة"],
    ],
    sections: summarySections,
  };
}

function printProfessionalReport() {
  const activeTabId = $(".report-tab-panel.active")?.id || "reportSummaryTab";
  const data = professionalReportData(activeTabId);
  openProfessionalPrint(buildProfessionalReportHtml(data));
}

function renderAuditLog() {
  const node = $("#auditLog");
  if (!node) return;
  const date = selectedReportRange();
  const visibleRows = auditLogRows()
    .filter((row) => (activeEmployeeId() === "all" || row.employeeId === activeEmployeeId()) && isReportDate(row.createdAt, date))
    .slice(0, 25);
  node.innerHTML = visibleRows.map((row) => `
    <div class="ledger-row">
      <span>${escapeHtml(row.action)}<br><small>${escapeHtml(row.ref)} - ${employeeName(row.employeeId)} - ${formatDate(row.createdAt)}</small></span>
      <strong>${escapeHtml(row.details)}</strong>
      ${row.auditId ? `<button class="ghost" type="button" onclick="showAuditDetails('${row.auditId}')">تفاصيل</button>` : ""}
    </div>
  `).join("") || `<div class="empty">لا توجد حركات مراجعة.</div>`;
}

function auditLogRows() {
  const rows = [];
  const loggedEntities = new Set();
  repo.state.auditLogs.forEach((item) => {
    loggedEntities.add(`${item.entityType}:${item.entityId}`);
    rows.push({
      action: item.action,
      ref: item.ref || "-",
      details: item.details || "",
      employeeId: item.employeeId || item.userId || "admin",
      auditId: item.id,
      before: item.before,
      after: item.after,
      createdAt: item.createdAt,
    });
  });
  const hasAudit = (type, id) => loggedEntities.has(`${type}:${id}`);
  repo.state.invoiceAudits.forEach((item) => {
    if (hasAudit("invoice", item.invoiceId)) return;
    const invoice = getInvoice(item.invoiceId);
    rows.push({ action: item.action, ref: invoice?.number || item.invoiceId, details: item.details || "فاتورة", employeeId: item.employeeId || invoice?.employeeId || "admin", createdAt: item.createdAt });
  });
  repo.state.purchaseInvoices.forEach((invoice) => {
    if (!hasAudit("purchaseInvoice", invoice.id)) rows.push({ action: "إنشاء فاتورة شراء", ref: invoice.number, details: supplierName(invoice.supplierId), employeeId: invoice.employeeId || "admin", createdAt: invoice.createdAt });
    if (invoice.cancelled && !hasAudit("purchaseInvoice", invoice.id)) rows.push({ action: "إلغاء فاتورة شراء", ref: invoice.number, details: money(invoice.total), employeeId: invoice.cancelledBy || "admin", createdAt: invoice.cancelledAt || invoice.createdAt });
  });
  repo.state.supplierPayments.forEach((payment) => {
    if (!hasAudit("supplierPayment", payment.id)) rows.push({ action: payment.type === "pay" ? "دفع لمورد" : "قبض من مورد", ref: payment.number, details: `${supplierName(payment.supplierId)} - ${money(payment.amount)}`, employeeId: payment.employeeId || "admin", createdAt: payment.createdAt });
    if (payment.cancelled && !hasAudit("supplierPayment", payment.id)) rows.push({ action: "إلغاء سند مورد", ref: payment.number, details: supplierName(payment.supplierId), employeeId: payment.cancelledBy || "admin", createdAt: payment.cancelledAt || payment.createdAt });
  });
  repo.state.customerDebtPayments.forEach((payment) => {
    if (!hasAudit("customerPayment", payment.id)) rows.push({ action: payment.type === "installment" ? "قبض قسط زبون" : "قبض دين زبون", ref: payment.number, details: `${payment.customerName || payment.customerPhone} - ${money(payment.amount)}`, employeeId: payment.employeeId || "admin", createdAt: payment.createdAt });
    if (payment.cancelled && !hasAudit("customerPayment", payment.id)) rows.push({ action: "إلغاء قبض زبون", ref: payment.number, details: payment.customerName || payment.customerPhone, employeeId: payment.cancelledBy || "admin", createdAt: payment.cancelledAt || payment.createdAt });
  });
  repo.state.personalDebts.forEach((debt) => {
    if (!hasAudit("personalDebt", debt.id)) rows.push({ action: debt.fundingSource === "external" ? "دين زبون خارج القاصة" : "دين زبون من القاصة", ref: debt.number || debt.person, details: `${debt.customerName || debt.person} - ${money(debt.amount)}`, employeeId: debt.employeeId || "admin", createdAt: debt.createdAt });
    if (debt.cancelled && !hasAudit("personalDebt", debt.id)) rows.push({ action: "إلغاء دين زبون", ref: debt.number || debt.person, details: debt.customerName || debt.person, employeeId: debt.cancelledBy || "admin", createdAt: debt.cancelledAt || debt.createdAt });
  });
  repo.state.vouchers.forEach((voucher) => {
    if (!hasAudit("voucher", voucher.id)) rows.push({ action: voucherTypeLabel(voucher.type), ref: voucher.number, details: `${voucher.party || "بدون طرف"} - ${money(voucher.amount)}`, employeeId: voucher.employeeId || "admin", createdAt: voucher.createdAt });
    if (voucher.cancelled && !hasAudit("voucher", voucher.id)) rows.push({ action: "إلغاء سند", ref: voucher.number, details: voucherTypeLabel(voucher.type), employeeId: voucher.cancelledBy || "admin", createdAt: voucher.cancelledAt || voucher.createdAt });
  });
  return rows.filter((row) => row.createdAt).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function showAuditDetails(id) {
  const item = repo.state.auditLogs.find((entry) => entry.id === id);
  if (!item) return;
  $("#auditModalTitle").textContent = item.action || "تفاصيل الحركة";
  $("#auditModalSubtitle").textContent = `${item.ref || "-"} - ${employeeName(item.employeeId || item.userId)} - ${formatDate(item.createdAt)}`;
  $("#auditModalBody").innerHTML = `
    <div class="audit-meta">
      <div><span>العملية</span><strong>${escapeHtml(item.action)}</strong></div>
      <div><span>المرجع</span><strong>${escapeHtml(item.ref || "-")}</strong></div>
      <div><span>المستخدم</span><strong>${employeeName(item.employeeId || item.userId)}</strong></div>
      <div><span>التاريخ</span><strong>${formatDate(item.createdAt)}</strong></div>
    </div>
    ${auditChangeHtml(item.before, item.after)}
  `;
  $("#auditModal").classList.remove("hidden");
  $("#auditModal").setAttribute("aria-hidden", "false");
}

function closeAuditDetails() {
  $("#auditModal")?.classList.add("hidden");
  $("#auditModal")?.setAttribute("aria-hidden", "true");
}

function auditChangeHtml(before, after) {
  const rows = auditComparisonRows(before, after);
  if (!rows.length) return `<div class="audit-empty-state">لا توجد تفاصيل إضافية محفوظة لهذه الحركة.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>الحقل</th><th>قبل</th><th>بعد</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr>
            <td>${escapeHtml(row.label)}</td>
            <td>${escapeHtml(row.before)}</td>
            <td>${escapeHtml(row.after)}</td>
          </tr>
        `).join("")}</tbody>
      </table>
    </div>
  `;
}

function auditComparisonRows(before, after) {
  const beforeMap = auditSummary(before);
  const afterMap = auditSummary(after);
  const keys = [...new Set([...Object.keys(beforeMap), ...Object.keys(afterMap)])];
  return keys
    .map((key) => ({ label: key, before: beforeMap[key] || "-", after: afterMap[key] || "-" }))
    .filter((row) => row.before !== row.after || row.before === "-" || row.after === "-");
}

function auditSummary(value) {
  if (!value || typeof value !== "object") return {};
  const labels = {
    number: "رقم المستند",
    receiptNo: "رقم الوصل",
    customerName: "الزبون",
    customerPhone: "هاتف الزبون",
    supplierInvoiceNo: "رقم فاتورة المورد",
    supplierId: "المورد",
    employeeId: "الموظف",
    total: "الإجمالي",
    subtotal: "قبل الخصم",
    invoiceDiscount: "خصم الفاتورة",
    paidAmount: "المدفوع",
    remaining: "المتبقي",
    receivableAmount: "المستحق",
    saleMode: "نوع البيع",
    paymentStatus: "حالة التحصيل",
    status: "الحالة",
    cancelled: "ملغي",
    cancelledAt: "تاريخ الإلغاء",
    type: "النوع",
    amount: "المبلغ",
    party: "الطرف",
    person: "الشخص",
    name: "الاسم",
    phone: "الهاتف",
    username: "اسم المستخدم",
    role: "الدور",
    active: "نشط",
    modonUsername: "حساب Modon",
    category: "التصنيف",
    cost: "الكلفة",
    price: "سعر البيع",
  };
  const result = {};
  Object.entries(labels).forEach(([key, label]) => {
    if (value[key] !== undefined && value[key] !== null && value[key] !== "") result[label] = auditReadableValue(key, value[key]);
  });
  if (Array.isArray(value.lines)) result["عدد البنود"] = String(value.lines.length);
  if (Array.isArray(value.permissions)) result["عدد الصلاحيات"] = String(value.permissions.length);
  if (Array.isArray(value.installmentSchedule)) result["عدد الأقساط"] = String(value.installmentSchedule.length);
  return result;
}

function auditReadableValue(key, value) {
  if (["total", "subtotal", "invoiceDiscount", "paidAmount", "remaining", "receivableAmount", "amount", "cost", "price"].includes(key)) return money(value);
  if (key === "supplierId") return supplierName(value);
  if (key === "employeeId") return employeeName(value);
  if (key === "saleMode") return saleModeLabel(value);
  if (key === "status") return statusMap[value]?.label || String(value);
  if (key === "role") return roleLabels[value] || String(value);
  if (key === "cancelled" || key === "active") return value ? "نعم" : "لا";
  if (key === "cancelledAt") return value ? formatDate(value) : "-";
  return String(value);
}
function renderMetrics(selector, rows) {
  const target = $(selector);
  const template = $("#metricTemplate");
  target.innerHTML = "";
  rows.forEach(([label, value, note]) => {
    const node = template.content.cloneNode(true);
    node.querySelector("span").textContent = label;
    node.querySelector("strong").textContent = value;
    node.querySelector("small").textContent = note;
    target.append(node);
  });
}

function renderLinkedMetrics(selector, rows, context = {}) {
  const target = $(selector);
  if (!target) return;
  target.innerHTML = rows.map(([label, value, note, drilldown, options = {}]) => {
    const date = clean(options.date || context.date);
    const dateFrom = clean(options.dateFrom || context.dateFrom);
    const dateTo = clean(options.dateTo || context.dateTo);
    const employeeId = clean(options.employeeId || context.employeeId);
    const saleMode = clean(options.saleMode);
    const stockFilter = clean(options.stockFilter);
    const voucherType = clean(options.voucherType);
    return `<button class="metric report-linked-metric" type="button" data-drilldown="${escapeAttr(drilldown || "profit")}"${date ? ` data-drilldown-date="${escapeAttr(date)}"` : ""}${dateFrom ? ` data-drilldown-date-from="${escapeAttr(dateFrom)}"` : ""}${dateTo ? ` data-drilldown-date-to="${escapeAttr(dateTo)}"` : ""}${employeeId ? ` data-drilldown-employee="${escapeAttr(employeeId)}"` : ""}${saleMode ? ` data-drilldown-sale-mode="${escapeAttr(saleMode)}"` : ""}${stockFilter ? ` data-drilldown-stock="${escapeAttr(stockFilter)}"` : ""}${voucherType ? ` data-drilldown-voucher="${escapeAttr(voucherType)}"` : ""}>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(note || "")}</small>
      <i aria-hidden="true">←</i>
    </button>`;
  }).join("");
}

function addStockMovement(productId, invoiceId, quantity, reason, employeeId, supplierId = "", meta = {}) {
  const id = meta.idempotencyKey ? `stock:${meta.idempotencyKey}` : crypto.randomUUID();
  repo.state.stockMovements = repo.state.stockMovements.filter((item) => item.id !== id);
  repo.state.stockMovements.unshift({ id, productId, invoiceId, quantity, reason, employeeId, supplierId, meta, createdAt: now() });
}

function addCash(amount, reason, reference, employeeId, meta = {}) {
  const id = meta.idempotencyKey ? `cash:${meta.idempotencyKey}` : crypto.randomUUID();
  repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.id !== id);
  repo.state.cashTransactions.unshift({ id, amount, reason, reference, employeeId, meta, createdAt: now() });
}

function addAudit(action, entityType, entityId, ref, details = "", before = null, after = null) {
  repo.state.auditLogs.unshift({
    id: crypto.randomUUID(),
    action,
    entityType,
    entityId,
    ref,
    details,
    userId: repo.state.currentUserId || "system",
    employeeId: auditActorId(),
    before: before ? snapshot(before) : null,
    after: after ? snapshot(after) : null,
    createdAt: now(),
  });
}

function auditActorId() {
  if (repo.state.currentUserId === "admin") return "admin";
  const employee = currentEmployee();
  return employee?.id || repo.state.currentUserId || "system";
}

function addInvoiceAudit(invoiceId, action, employeeId, details = "") {
  repo.state.invoiceAudits.unshift({ id: crypto.randomUUID(), invoiceId, action, employeeId, details, createdAt: now() });
}

function stockOf(productId) {
  const product = getProduct(productId);
  return (product?.openingQty || 0) + repo.state.stockMovements.filter((item) => item.productId === productId).reduce(sumBy("quantity"), 0);
}

function openingStockOf(productId) {
  const product = getProduct(productId);
  const legacyOpening = number(product?.openingQty);
  const openingMovements = repo.state.stockMovements
    .filter((item) => item.productId === productId && item.meta?.source === "openingStock")
    .reduce(sumBy("quantity"), 0);
  return legacyOpening + openingMovements;
}

function selectInvoice(id) {
  repo.state.lastSelectedInvoiceId = id;
  repo.save();
  showView("invoiceArchive");
  showInvoiceArchiveTab("customerInvoicesTab");
}

function selectSupplier(id) {
  repo.state.selectedSupplierId = id;
  repo.save();
  fillSupplierControls();
  renderSuppliers();
  showSupplierTab("supplierLedgerTab");
}

function selectPurchaseInvoice(id) {
  repo.state.selectedPurchaseInvoiceId = id;
  repo.save();
  showView("invoiceArchive");
  showInvoiceArchiveTab("supplierInvoicesTab");
}

async function cancelPurchaseInvoice(id) {
  if (!requirePermission("inventory.purchase.cancel", "ليست لديك صلاحية إلغاء فواتير الشراء.")) return;
  const invoice = repo.state.purchaseInvoices.find((item) => item.id === id);
  if (!invoice || invoice.cancelled) return;
  const shortage = (invoice.lines || []).find((line) => stockOf(line.productId) < line.quantity);
  if (shortage) return alert(`لا يمكن إلغاء فاتورة الشراء لأن كمية "${shortage.name}" لم تعد موجودة بالكامل في المخزون.`);
  if (!confirm(`تأكيد إلغاء فاتورة الشراء ${invoice.number}؟ سيتم عكس المخزون والقاصة وذمة المورد.`)) return;
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  await performConfirmedAction(button, "جاري إلغاء فاتورة الشراء...", async () => {
    const before = snapshot(invoice);
    repo.state.stockMovements = repo.state.stockMovements.filter((item) => item.invoiceId !== invoice.id);
    repo.state.cashTransactions = repo.state.cashTransactions.filter((item) => item.reference !== invoice.number);
    repo.state.supplierDebts = repo.state.supplierDebts.filter((item) => item.purchaseInvoiceId !== invoice.id);
    invoice.cancelled = true;
    invoice.cancelledAt = now();
    invoice.cancelledBy = activeEmployeeId() === "all" ? "admin" : activeEmployeeId();
    invoice.balance = 0;
    invoice.paidAmount = 0;
    repo.state.selectedPurchaseInvoiceId = invoice.id;
    addAudit("إلغاء فاتورة شراء", "purchaseInvoice", invoice.id, invoice.number, money(before.total), before, invoice);
  }, "تعذر إلغاء فاتورة الشراء");
}

function selectProduct(id) {
  repo.state.selectedProductId = id;
  resetListPage("productMovements");
  repo.save();
  if ($(".view.active")?.id !== "products") showView("products");
  else {
    renderProducts();
    if (window.matchMedia("(max-width: 820px)").matches) {
      setTimeout(() => $(".product-profile-panel")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
    }
  }
}

function showSupplierTab(tabId) {
  $$("#supplierTabs .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.supplierTab === tabId));
  $$(".supplier-tab").forEach((tab) => tab.classList.toggle("active", tab.id === tabId));
  renderSupplierLedger();
}

function showInventorySection(sectionId) {
  $$("#inventorySectionTabs .tab-button").forEach((button) => button.classList.toggle("active", button.dataset.inventorySection === sectionId));
  $$("#inventory .inventory-section").forEach((section) => section.classList.toggle("active", section.id === sectionId));
  if (sectionId === "inventoryMovementsSection") renderInventory();
}

function openSupplierPaymentModal(supplierId = repo.state.selectedSupplierId) {
  if (!requirePermission("cash.manage", "ليست لديك صلاحية تسجيل سندات الموردين من القاصة.")) return;
  const supplier = getSupplier(supplierId);
  if (!supplier) return alert("اختر موردًا أولًا.");
  repo.state.selectedSupplierId = supplier.id;
  fillSupplierControls();
  $("#paymentSupplier").value = supplier.id;
  $("#supplierPaymentType").value = "pay";
  const balance = supplierBalance(supplier.id);
  $("#supplierPaymentForm").amount.value = balance.payable || "";
  $("#supplierPaymentModalTitle").textContent = `تسديد ${supplier.name}`;
  updateSupplierPaymentBalance();
  const modal = $("#supplierPaymentModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => $("#supplierPaymentForm").amount.focus(), 30);
}

function closeSupplierPaymentModal() {
  const modal = $("#supplierPaymentModal");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
}

function updateSupplierPaymentBalance() {
  const box = $("#supplierPaymentBalance");
  const form = $("#supplierPaymentForm");
  if (!box || !form) return;
  const supplierId = clean(form.supplierId.value);
  const supplier = getSupplier(supplierId);
  const balance = supplier ? supplierBalance(supplierId) : { payable: 0, receivable: 0 };
  const amount = number(form.amount.value);
  const type = clean(form.type.value);
  const maximumAmount = type === "pay" ? balance.payable : balance.receivable;
  form.amount.max = maximumAmount > 0 ? String(maximumAmount) : "";
  if (supplier) {
    $("#supplierPaymentModalTitle").textContent = type === "pay" ? `تسديد ${supplier.name}` : `قبض من ${supplier.name}`;
  }
  const currentNet = balance.payable - balance.receivable;
  const afterNet = type === "pay" ? currentNet - amount : currentNet + amount;
  box.innerHTML = `
    <div><span>المستحق للمورد</span><strong>${money(balance.payable)}</strong></div>
    <div><span>المستحق لنا</span><strong>${money(balance.receivable)}</strong></div>
    <div><span>الحد الأعلى للحركة</span><strong>${money(maximumAmount)}</strong></div>
    <div class="after-movement"><span>الرصيد بعد الحركة</span><strong>${afterNet > 0 ? `له ${money(afterNet)}` : afterNet < 0 ? `لنا ${money(Math.abs(afterNet))}` : "مسدد"}</strong></div>
  `;
}

function supplierLedgerRows(supplierId) {
  const supplier = getSupplier(supplierId);
  if (!supplier) return [];
  const rows = [];
  if (supplier.openingPayable) rows.push({ id: `opening-payable-${supplier.id}`, supplierId, date: "افتتاحي", label: "رصيد افتتاحي علينا", ref: supplier.name, direction: "يطلبنا", amount: supplier.openingPayable });
  if (supplier.openingReceivable) rows.push({ id: `opening-receivable-${supplier.id}`, supplierId, date: "افتتاحي", label: "رصيد افتتاحي لنا", ref: supplier.name, direction: "نطلبه", amount: supplier.openingReceivable });
  repo.state.purchaseInvoices.filter((invoice) => invoice.supplierId === supplierId).forEach((invoice) => {
    if (invoice.cancelled) {
      rows.push({ id: `purchase-cancelled-${invoice.id}`, supplierId, purchaseInvoiceId: invoice.id, date: invoice.date, label: "فاتورة شراء ملغاة", ref: invoice.number, direction: "ملغاة", amount: 0 });
      return;
    }
    rows.push({ id: `purchase-${invoice.id}`, supplierId, purchaseInvoiceId: invoice.id, date: invoice.date, label: "فاتورة شراء", ref: invoice.number, direction: "يطلبنا", amount: invoice.total });
    if (invoice.paidAmount) rows.push({ id: `purchase-paid-${invoice.id}`, supplierId, purchaseInvoiceId: invoice.id, date: invoice.date, label: "مدفوع من الفاتورة", ref: invoice.number, direction: "نطلبه", amount: invoice.paidAmount });
  });
  repo.state.supplierPayments.filter((payment) => payment.supplierId === supplierId).forEach((payment) => {
    if (payment.cancelled) {
      rows.push({
        id: `supplier-payment-${payment.id}`,
        supplierId,
        paymentId: payment.id,
        date: formatDate(payment.cancelledAt || payment.createdAt),
        label: payment.type === "pay" ? "دفع للمورد ملغى" : "قبض من المورد ملغى",
        ref: payment.number || payment.reference || supplier.name,
        direction: "ملغاة",
        amount: 0,
        cancelled: true,
      });
      return;
    }
    rows.push({
      id: `supplier-payment-${payment.id}`,
      supplierId,
      paymentId: payment.id,
      date: formatDate(payment.createdAt),
      label: payment.type === "pay" ? "دفع للمورد" : "قبض من المورد",
      ref: payment.number || payment.reference || supplier.name,
      direction: payment.type === "pay" ? "نطلبه" : "يطلبنا",
      amount: payment.amount,
    });
  });
  return rows.sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function supplierBalance(supplierId) {
  let payable = 0;
  let receivable = 0;
  supplierLedgerRows(supplierId).forEach((row) => {
    if (row.direction === "يطلبنا") payable += row.amount;
    if (row.direction === "نطلبه") receivable += row.amount;
  });
  const net = payable - receivable;
  return {
    payable: net > 0 ? net : 0,
    receivable: net < 0 ? Math.abs(net) : 0,
  };
}

function printSaleInvoice(invoiceId) {
  const invoice = getInvoice(invoiceId);
  if (!invoice) return;
  const order = getOrderByInvoice(invoice.id);
  const lines = invoice.lines || [{ productName: invoice.productName, quantity: invoice.quantity, price: invoice.unitPrice, discount: 0, total: invoice.total }];
  const rows = lines.map((line) => [line.productName, line.quantity, money(line.price), money(line.discount || 0), money(line.total)]);
  const currentRemaining = invoiceOpenBalance(invoice) || 0;
  const paidNow = number(invoice.paidAmount) + invoicePaidAfterCreation(invoice.id);
  const previousDebt = Math.max((customerOpenDebt(invoice.customerPhone) || 0) - currentRemaining, 0);
  // Keep the print short: only the installment schedule survives as an extra
  // section; the previous debt now lives in the concise totals block below.
  const installmentHtml = invoice.installmentSchedule ? `
    <section class="print-extra">
      <h2>تفاصيل الأقساط</h2>
      <table class="print-table">
        <thead><tr><th>رقم القسط</th><th>تاريخ الاستحقاق</th><th>المبلغ</th><th>المدفوع</th><th>المتبقي</th><th>الحالة</th></tr></thead>
        <tbody>${invoice.installmentSchedule.map((item, index) => `<tr><td>${index + 1}</td><td>${item.dueDate}</td><td>${money(item.amount)}</td><td>${money(installmentPaidAmount(invoice.id, index))}</td><td>${money(installmentOpenBalance(invoice, index))}</td><td>${installmentOpenBalance(invoice, index) <= 0 ? "مدفوع" : "غير مدفوع"}</td></tr>`).join("")}</tbody>
      </table>
    </section>
  ` : "";
  printDocument({
    title: invoice.saleMode === "modon" ? "طلب Modon" : "فاتورة بيع",
    number: invoice.number,
    partyLabel: "الزبون",
    partyName: invoice.customerName,
    status: invoice.cancelled ? "ملغاة" : invoice.paymentStatus,
    notes: invoice.notes || order?.issue_notes || "",
    meta: [
      ["الهاتف", customerPhoneLabel(invoice.customerPhone) || "-"],
      ["رقم الوصل", invoice.receiptNo || invoice.number],
      ["الموظف", employeeName(invoice.employeeId)],
      ["نوع التسعير", invoice.priceType === "wholesale" ? "سعر الجملة" : "سعر المفرد"],
      ["طريقة البيع", saleModeLabel(invoice.saleMode)],
      ...(order ? [["رقم Modon", order.external_order_id], ["حالة التوصيل", statusMap[order.status]?.label || order.status], ["صافي التاجر", money(order.merchant_price)]] : []),
    ],
    columns: ["المنتج", "الكمية", "السعر", "خصم البند", "الإجمالي"],
    rows,
    totals: [
      ["المدفوع الآن", money(paidNow)],
      ["المتبقي الآن", money(currentRemaining)],
      ["المتبقي سابقاً", money(previousDebt)],
      ["الإجمالي لهذه الفاتورة", money(invoice.total)],
      ["الإجمالي المتبقي على الزبون", money(previousDebt + currentRemaining)],
    ],
    extraHtml: installmentHtml,
  });
}

function printCustomerStatement(customerPhone) {
  const customer = repo.state.customers.find((item) => item.phone === customerPhone);
  if (!customer) return;
  const movements = customerAccountMovements(customerPhone).reverse();
  const overdue = repo.state.invoices
    .filter((invoice) => invoice.customerPhone === customerPhone && invoice.saleMode === "installment")
    .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({
      invoice,
      item,
      index,
      balance: installmentOpenBalance(invoice, index),
    })))
    .filter(({ item, balance }) => balance > 0 && item.dueDate && item.dueDate < today());
  const overdueHtml = overdue.length ? `
    <section class="print-extra customer-statement-overdue">
      <h2>الأقساط المتأخرة</h2>
      <table class="print-table">
        <thead><tr><th>الفاتورة</th><th>القسط</th><th>تاريخ الاستحقاق</th><th>المتبقي</th></tr></thead>
        <tbody>${overdue.map(({ invoice, item, index, balance }) => `<tr><td>${escapeHtml(invoice.number)}</td><td>${index + 1}</td><td>${escapeHtml(item.dueDate)}</td><td>${money(balance)}</td></tr>`).join("")}</tbody>
      </table>
    </section>
  ` : "";
  printDocument({
    title: "كشف حساب تفصيلي",
    number: `CUST-${customerPhoneLabel(customer.phone) || customer.id}`,
    partyLabel: "الزبون",
    partyName: customer.name,
    meta: [
      ["الهاتف", customerPhoneLabel(customer.phone) || "-"],
      ["إجمالي الدين", money(customerOpenDebt(customer.phone, false))],
      ["إجمالي الأقساط", money(repo.state.invoices.filter((invoice) => invoice.customerPhone === customer.phone && invoice.saleMode === "installment").reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0))],
      ["الأقساط المتأخرة", String(overdue.length)],
    ],
    columns: ["التاريخ", "الحركة", "المرجع", "مدين", "دائن", "الرصيد"],
    tableClass: "customer-statement-table",
    columnWidths: [16, 14, 28, 14, 14, 14],
    rows: movements.map((movement) => [
      formatDate(movement.createdAt),
      movement.type,
      movement.reference,
      movement.debit ? money(movement.debit) : "—",
      movement.credit ? money(movement.credit) : "—",
      money(movement.balance),
    ]),
    totals: [
      ["الرصيد المفتوح", money(customerOpenDebt(customer.phone, true))],
      ["عدد الحركات", String(movements.length)],
    ],
    extraHtml: overdueHtml,
  });
}

function sendCustomerStatementWhatsApp(customerPhone) {
  const customer = repo.state.customers.find((item) => item.phone === customerPhone);
  if (!customer) return;
  const localPhone = customerPhoneLabel(customer.phone);
  if (!isValidIraqiMobile(localPhone)) return alert("لا يحتوي حساب الزبون رقم هاتف عراقي صالحًا للإرسال عبر واتساب.");
  const whatsappPhone = normalizeModonPhone(localPhone).replace(/^\+/, "");
  const debt = customerOpenDebt(customerPhone, false);
  const installments = repo.state.invoices
    .filter((invoice) => invoice.customerPhone === customerPhone && invoice.saleMode === "installment")
    .reduce((sum, invoice) => sum + invoiceOpenBalance(invoice), 0);
  const overdue = repo.state.invoices
    .filter((invoice) => invoice.customerPhone === customerPhone && invoice.saleMode === "installment")
    .flatMap((invoice) => (invoice.installmentSchedule || []).map((item, index) => ({ item, balance: installmentOpenBalance(invoice, index) })))
    .filter(({ item, balance }) => balance > 0 && item.dueDate && item.dueDate < today());
  const recentMovements = customerAccountMovements(customerPhone).slice(0, 8);
  const message = [
    companySettings().name,
    `كشف حساب الزبون: ${customer.name}`,
    `التاريخ: ${dateOnly(new Date())}`,
    "",
    `ديون مفتوحة: ${number(debt).toLocaleString("en-US")} د.ع`,
    `أقساط متبقية: ${number(installments).toLocaleString("en-US")} د.ع`,
    `الرصيد الإجمالي: ${number(debt + installments).toLocaleString("en-US")} د.ع`,
    `الأقساط المتأخرة: ${overdue.length}`,
    "",
    ...(recentMovements.length ? ["آخر الحركات:", ...recentMovements.map((movement) =>
      `- ${dateOnly(movement.createdAt)} | ${movement.type} | ${number(movement.debit || movement.credit).toLocaleString("en-US")} د.ع | الرصيد ${number(movement.balance).toLocaleString("en-US")} د.ع`
    )] : ["لا توجد حركات مالية مسجلة."]),
    "",
    companySettings().footer || "",
  ].join("\n");
  window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function printModonOrder(orderId) {
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return;
  if (printOfficialModonReceipt(order)) return;
  alert("لا يوجد رابط وصل Modon رسمي لهذا الطلب. لا يمكن طباعة QR مطابق لمدن بدون qr_link من Modon.");
}

function sendSaleInvoiceWhatsApp(invoiceId) {
  const invoice = getInvoice(invoiceId);
  if (!invoice || invoice.saleMode === "modon") return alert("إرسال واتساب متاح لفواتير المبيعات المباشرة فقط.");
  const localPhone = customerPhoneLabel(invoice.customerPhone);
  if (!isValidIraqiMobile(localPhone)) return alert("لا تحتوي الفاتورة رقم هاتف عراقي صالحًا لإرسالها عبر واتساب.");
  const whatsappPhone = normalizeModonPhone(localPhone).replace(/^\+/, "");
  const lines = (invoice.lines || []).map((line) => `- ${line.productName}: ${line.quantity} × ${number(line.price).toLocaleString("en-US")} = ${number(line.total).toLocaleString("en-US")} د.ع`);
  const message = [
    companySettings().name,
    `فاتورة بيع ${invoice.number}`,
    `رقم الوصل: ${invoice.receiptNo || invoice.number}`,
    `الزبون: ${invoice.customerName}`,
    "",
    ...lines,
    "",
    `الإجمالي: ${number(invoice.total).toLocaleString("en-US")} د.ع`,
    `المدفوع: ${(number(invoice.paidAmount) + invoicePaidAfterCreation(invoice.id)).toLocaleString("en-US")} د.ع`,
    `المتبقي: ${number(invoiceOpenBalance(invoice)).toLocaleString("en-US")} د.ع`,
    companySettings().footer || "",
  ].filter((line) => line !== "").join("\n");
  window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function printOfficialModonReceipt(order) {
  const officialLink = clean(order.qr_link);
  if (!officialLink) return false;
  window.open(officialLink, "_blank", "noopener");
  markModonOrdersPrinted([order]);
  return true;
}

function printModonOrdersBatch(orders) {
  if (!orders.length) return alert("لا توجد طلبات غير مطبوعة ضمن الفترة المحددة.");
  const officialOrders = orders.filter((order) => clean(order.qr_link));
  const missingOfficial = orders.filter((order) => !clean(order.qr_link));
  if (officialOrders.length) {
    officialOrders.forEach((order, index) => {
      setTimeout(() => window.open(order.qr_link, "_blank", "noopener"), index * 250);
    });
    markModonOrdersPrinted(officialOrders);
    if (missingOfficial.length) {
      alert(`تم فتح ${officialOrders.length} وصل رسمي من Modon. يوجد ${missingOfficial.length} طلب بلا qr_link رسمي لذلك لم تتم طباعته حتى لا نطبع QR غير مطابق.`);
    }
    return;
  }
  alert("لا توجد روابط وصول Modon رسمية qr_link لهذه الطلبات. لا يمكن طباعة QR مطابق لمدن بدون الرابط الرسمي.");
}

function printUnprintedModonOrders() {
  const orders = scopedModonOrdersByRange().filter((order) => isModonOrderBeforeDelivery(order) && !order.printed_at);
  printModonOrdersBatch(orders);
}

function modonOrderStatusLabel(order) {
  return {
    pending: "قيد التوصيل",
    delivered: "واصل",
    returned: "راجع",
    issue: "مشكلة",
    cancelled: "ملغي",
  }[modonOrderWorkStatus(order)] || clean(order.status) || "غير محدد";
}

function openModonOrdersPrintDialog() {
  const modal = $("#modonOrdersPrintModal");
  if (!modal) return;
  setModonPrintPreset("month");
  if ($("#modonPrintStatus")) $("#modonPrintStatus").value = "all";
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModonOrdersPrintDialog() {
  const modal = $("#modonOrdersPrintModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function setModonPrintPreset(preset) {
  const fromEl = $("#modonPrintFrom");
  const toEl = $("#modonPrintTo");
  if (!fromEl || !toEl) return;
  const to = today();
  let from = to;
  if (preset === "month") {
    const d = new Date(to);
    d.setMonth(d.getMonth() - 1);
    from = d.toISOString().slice(0, 10);
  } else if (preset === "all") {
    from = "2020-01-01";
  }
  fromEl.value = from;
  toEl.value = to;
}

function confirmModonOrdersPrint() {
  const status = $("#modonPrintStatus")?.value || "all";
  const from = $("#modonPrintFrom")?.value || "2020-01-01";
  const to = $("#modonPrintTo")?.value || today();
  closeModonOrdersPrintDialog();
  printModonOrdersReport({ from, to }, status);
}

function modonOrderMatchesStatusFilter(order, filter) {
  if (!filter || filter === "all") return true;
  if (filter === "unprinted") return isModonOrderBeforeDelivery(order) && !order.printed_at;
  if (filter === "pending") return ["new", "with_courier"].includes(order.status);
  return order.status === filter;
}

function printModonOrdersReport(rangeArg = null, statusFilter = "all") {
  const range = rangeArg || selectedModonOrdersRange();
  const statusLabels = { all: "كل الحالات", unprinted: "غير المطبوع", pending: "مع المندوب", issue: "المشاكل", delivered: "المُسلّم", returned: "الراجع" };
  const orders = scopedModonOrdersByRange(range).filter((order) => modonOrderMatchesStatusFilter(order, statusFilter));
  const pending = orders.filter((order) => modonOrderWorkStatus(order) === "pending").length;
  const delivered = orders.filter((order) => modonOrderWorkStatus(order) === "delivered").length;
  const returned = orders.filter((order) => modonOrderWorkStatus(order) === "returned").length;
  const issues = orders.filter((order) => modonOrderWorkStatus(order) === "issue").length;
  const cancelled = orders.filter((order) => modonOrderWorkStatus(order) === "cancelled").length;
  const rows = orders.map((order) => {
    const invoice = getInvoice(order.local_order_id);
    return [
      dateOnly(order.created_at || order.createdAt),
      order.external_order_id || order.internal_order_no || invoice?.number || "-",
      order.customer_name || invoice?.customerName || "-",
      order.customer_phone || invoice?.customerPhone || "-",
      [order.city_name, order.area_name, order.address].filter(Boolean).join(" / ") || "-",
      `${order.product_name || invoice?.productName || "-"} × ${number(order.quantity || order.items_count || 1)}`,
      money(order.price),
      money(order.merchant_price),
      modonOrderStatusLabel(order),
    ];
  });
  openProfessionalPrint(buildProfessionalReportHtml({
    title: "كشف طلبات Modon",
    subtitle: `الحالة: ${statusLabels[statusFilter] || "كل الحالات"} · سجل الطلبات حسب الفترة المحددة`,
    period: reportRangeLabel(range),
    scope: activeEmployeeId() === "all" ? "كل حسابات الشركة" : employeeName(activeEmployeeId()),
    metrics: [
      ["إجمالي الطلبات", orders.length, "طلب"],
      ["قيد التوصيل", pending, "طلب"],
      ["واصل", delivered, "طلب"],
      ["راجع", returned, "طلب"],
      ["مشاكل", issues, "طلب"],
      ["ملغي", cancelled, "طلب"],
      ["إجمالي المطلوب", money(orders.reduce(sumBy("price"), 0)), "من الزبائن"],
      ["صافي التاجر", money(orders.reduce(sumBy("merchant_price"), 0)), "قبل المطابقة المالية"],
    ],
    sections: [{
      title: "تفاصيل الطلبات",
      columns: ["التاريخ", "رقم الطلب", "الزبون", "الهاتف", "العنوان", "المنتج", "المبلغ", "الصافي", "الحالة"],
      rows,
    }],
    notes: "هذه طباعة كشف إداري لطلبات Modon. وصل الشحن الرسمي وQR يُطبع من رابط Modon الرسمي لكل طلب.",
  }));
}

function printCollectedCarrierInvoices() {
  const employeeId = activeEmployeeId();
  const range = modonSystemRange();
  const scoped = repo.state.deliveryInvoices
    .filter((inv) => inv.type !== "returned" && inv.status === "تم تأكيد القبض")
    .filter((inv) => employeeId === "all" || inv.employeeId === employeeId)
    .filter((inv) => deliveryInvoiceBelongsToSystemRange(inv, range))
    .sort((left, right) => new Date(right.collectedAt || right.updated_at || right.created_at) - new Date(left.collectedAt || left.updated_at || left.created_at));
  if (!scoped.length) return alert("لا توجد فواتير واصل مقبوضة ضمن النطاق المحدد لطباعتها.");
  const rows = scoped.map((inv) => [
    dateOnly(inv.collectedAt || inv.updated_at || inv.created_at),
    inv.external_invoice_id || "-",
    employeeName(inv.employeeId),
    `${number(inv.matched_orders_count || (inv.order_ids ? inv.order_ids.length : 0))}${inv.collected_partial ? " (جزئي)" : ""}`,
    money(inv.collected_amount ?? inv.merchant_price),
  ]);
  const totalCollected = scoped.reduce((sum, inv) => sum + number(inv.collected_amount ?? inv.merchant_price), 0);
  openProfessionalPrint(buildProfessionalReportHtml({
    title: "كشف فواتير الواصل المقبوضة",
    subtitle: "فواتير Modon التي تم تأكيد قبضها وإدخال صافيها إلى القاصة",
    period: reportRangeLabel(range),
    scope: employeeId === "all" ? "كل حسابات الشركة" : employeeName(employeeId),
    metrics: [
      ["عدد الفواتير", scoped.length, "فاتورة"],
      ["إجمالي المقبوض", money(totalCollected), "دخل القاصة"],
    ],
    sections: [{
      title: "الفواتير المقبوضة",
      columns: ["تاريخ القبض", "رقم فاتورة Modon", "الحساب", "الطلبات المطابقة", "الصافي المقبوض"],
      rows,
    }],
    notes: "المبالغ هي صافي الطلبات المطابقة التي دخلت القاصة فعليًا. وصل الشحن الرسمي وQR يُطبع من رابط Modon الرسمي.",
  }));
}

function printCarrierInvoiceDetail(invoiceId) {
  const invoice = repo.state.deliveryInvoices.find((item) => item.id === invoiceId);
  if (!invoice) return;
  // Close the details modal first — its fixed full-screen overlay would otherwise
  // cover the clean print sheet, making the output look like a screenshot.
  closeCarrierInvoiceDetails();
  const localOrders = (invoice.order_ids || [])
    .map((id) => repo.state.deliveryOrders.find((order) => order.id === id))
    .filter(Boolean);
  const returnedMatched = localOrders.filter(isReturnedDeliveryOrder);
  const rows = localOrders.map((order) => [
    order.external_order_id || order.internal_order_no || "-",
    order.customer_name || "-",
    isReturnedDeliveryOrder(order) ? "راجع (يرجع للمخزون)" : modonOrderStatusLabel(order),
    money(order.price),
    money(modonMerchantNetPrice(order)),
  ]);
  openProfessionalPrint(buildProfessionalReportHtml({
    title: `فاتورة واصل Modon ${invoice.external_invoice_id || ""}`,
    subtitle: "تفاصيل فاتورة الواصل والطلبات المطابقة",
    period: dateOnly(invoice.modon_created_at || invoice.created_at),
    scope: employeeName(invoice.employeeId),
    metrics: [
      ["عدد طلبات Modon", number(invoice.delivered_orders_count), "طلب"],
      ["المطابق داخل النظام", localOrders.length, "طلب"],
      ["صافي القائمة الكلي", money(invoice.merchant_price), ""],
      ["صافي المطابق (يدخل القاصة)", money(carrierInvoiceCollectableAmount(invoice)), ""],
      ...(returnedMatched.length ? [["طلبات راجعة", returnedMatched.length, "لا تدخل القاصة"]] : []),
    ],
    sections: [{
      title: "الطلبات المطابقة",
      columns: ["رقم Modon", "الزبون", "الحالة", "المبلغ", "صافي التاجر"],
      rows,
    }],
    notes: returnedMatched.length
      ? "الطلبات الراجعة لا تدخل القاصة؛ ترجع إلى المخزون عبر قسم الرواجع."
      : "صافي المطابق هو ما يدخل القاصة بعد تأكيد القبض.",
  }));
}

function markModonOrdersPrinted(orders) {
  const stampedAt = now();
  orders.forEach((order) => {
    if (!order.printed_at) {
      order.printed_at = stampedAt;
      order.printed_by = repo.state.currentUserId || currentEmployee()?.id || "system";
    }
    order.updated_at = stampedAt;
  });
  repo.save();
  renderModonDailyPanel();
}

async function cancelModonOrderLocal(orderId) {
  if (!hasPermission("delivery.modon.create")) return alert("ليست لديك صلاحية إلغاء طلبات Modon.");
  const order = repo.state.deliveryOrders.find((item) => item.id === orderId);
  if (!order) return;
  const before = snapshot(order);
  const employee = getEmployee(order.employeeId);
  if (!employee) return alert("تعذر العثور على حساب Modon المرتبط بالطلب.");
  const button = document.activeElement?.tagName === "BUTTON" ? document.activeElement : null;
  let remoteOrder;
  try {
    remoteOrder = await withBusy(button, "جاري التحقق من Modon...", () => refreshSingleModonOrderStatus(order, { silent: true, throwOnError: true, fullListFallback: true }));
  } catch (error) {
    return notifyOperationError(error, "تعذر التحقق من حالة الطلب في Modon، ولم يُرسل أمر الإلغاء");
  }
  if (!remoteOrder) {
    const confirmed = confirm("لم يعد هذا الطلب ظاهرًا في واجهة API الخاصة بـ Modon، وهذا يحدث أحيانًا بعد أن يعطله العميل. إذا كنت ترى في تطبيق Modon أن حالته «تم تعطيل الطلب من قبل العميل» فاضغط موافق لمطابقته كملغي داخل النظام وإرجاع مخزونه. اضغط إلغاء إذا لم تتحقق من تطبيق Modon.");
    if (!confirmed) return;
    applyCancelledModonOrderState(order, "تم تعطيل الطلب من قبل العميل في Modon - تأكيد يدوي بعد اختفائه من API", { actor: repo.state.currentUserId || currentEmployee()?.id || "system" });
    addAudit("مطابقة إلغاء طلب Modon", "modonOrder", order.id, order.external_order_id || order.internal_order_no, "أكد المستخدم أن تطبيق Modon يعرض: تم تعطيل الطلب من قبل العميل، بعد أن لم ترجعه واجهة API", before, order);
    try {
      await saveAfterExternalChange(button, "جاري حفظ مطابقة الإلغاء...");
    } catch (error) {
      return notifyOperationError(error, "تم تجهيز المطابقة، لكن تعذر حفظها أونلاين. لا تغلق الصفحة");
    }
    renderAll();
    return alert("تمت مطابقة الطلب كملغي من قبل العميل، وإرجاع كميته للمخزون مرة واحدة، وتسجيل العملية في سجل التدقيق.");
  }
  if (isCancelledModonOrder(order)) {
    try {
      await saveAfterExternalChange(button, "جاري مطابقة الإلغاء المحلي...");
    } catch (error) {
      return notifyOperationError(error, "الطلب ملغى في Modon، لكن تعذر حفظ المطابقة داخل النظام");
    }
    renderAll();
    return alert(`الطلب ملغى مسبقًا في Modon (${order.modon_status_text || "ملغي"}). تمت مطابقته داخل النظام وإرجاع كميته للمخزون دون إرسال إلغاء جديد.`);
  }
  if (!isModonOrderBeforeDelivery(order)) return alert("لا يمكن إلغاء طلب تم تسليمه أو ربطه بفاتورة Modon أو رجع للمخزون.");
  const statusId = clean(order.status_id || "1").toLowerCase();
  if (order.status !== "new" || !["", "1", "new"].includes(statusId)) return alert("Modon يسمح بإلغاء الطلب فقط عندما تكون حالته طلبًا جديدًا وما زال عند التاجر.");
  if (!confirm("سيتم حذف الطلب من Modon أولًا، وبعد نجاح الحذف فقط سيُلغى داخل النظام وتعود الكمية للمخزون. هل تريد المتابعة؟")) return;
  try {
    await withBusy(button, "جاري الإلغاء من Modon...", () => provider.deleteOrder(employee, order.external_order_id || order.qr_id));
  } catch (error) {
    try {
      await refreshSingleModonOrderStatus(order, { silent: true, throwOnError: true });
    } catch { /* The original Modon rejection remains the authoritative error. */ }
    if (isCancelledModonOrder(order)) {
      try {
        await saveAfterExternalChange(button, "جاري مطابقة الإلغاء المحلي...");
      } catch (saveError) {
        return alert(`الطلب أصبح ملغى في Modon، لكن تعذر حفظ المطابقة داخل النظام: ${saveError.message}`);
      }
      renderAll();
      return alert("أصبح الطلب ملغى في Modon أثناء العملية. تمت مطابقته داخل النظام وإرجاع كميته للمخزون دون تكرار الإلغاء.");
    }
    return notifyOperationError(error, "لم يُلغَ الطلب لأن Modon رفض العملية");
  }
  applyCancelledModonOrderState(order, "ألغي من Modon ومن النظام قبل التسليم");
  addAudit("إلغاء طلب Modon", "modonOrder", order.id, order.external_order_id || order.internal_order_no, "تم حذفه من Modon ثم إرجاع الكمية للمخزون", before, order);
  await saveAfterExternalChange(button, "جاري حفظ الإلغاء داخل النظام...");
  renderAll();
}

function printPurchaseInvoice(invoiceId) {
  const invoice = repo.state.purchaseInvoices.find((item) => item.id === invoiceId);
  if (!invoice) return;
  const currentBalance = number(invoice.balance || 0);
  const previousSupplierDebt = Math.max((supplierBalance(invoice.supplierId).payable || 0) - currentBalance, 0);
  printDocument({
    title: "فاتورة شراء",
    number: invoice.number,
    partyLabel: "المورد",
    partyName: supplierName(invoice.supplierId),
    status: invoice.cancelled ? "ملغاة" : invoice.balance > 0 ? "متبقي للمورد" : "مسددة",
    notes: invoice.notes || "",
    meta: [
      ["رقم فاتورة المورد", invoice.supplierInvoiceNo || "-"],
      ["التاريخ", invoice.date],
    ],
    columns: ["المنتج", "التصنيف", "الكمية", "الكلفة", "الإجمالي"],
    rows: invoice.lines.map((line) => [line.name, line.category || getProduct(line.productId)?.category || "غير مصنف", line.quantity, money(line.cost), money(line.total)]),
    totals: [
      ["الإجمالي", money(invoice.total)],
      ["المدفوع الآن", money(invoice.paidAmount || 0)],
      ["المتبقي الآن", money(currentBalance)],
      ["المتبقي السابق للمورد", money(previousSupplierDebt)],
      ["إجمالي المستحق للمورد", money(previousSupplierDebt + currentBalance)],
    ],
  });
}

function printSupplierLedgerItem(rowId) {
  const supplierId = repo.state.selectedSupplierId || repo.state.suppliers[0]?.id;
  const row = supplierLedgerRows(supplierId).find((item) => item.id === rowId);
  if (!row) return;
  if (row.purchaseInvoiceId && row.id.startsWith("purchase-")) {
    printPurchaseInvoice(row.purchaseInvoiceId);
    return;
  }
  printDocument({
    title: row.label,
    number: row.ref,
    partyLabel: "المورد",
    partyName: supplierName(row.supplierId),
    meta: [["التاريخ", row.date], ["الاتجاه", row.direction]],
    columns: ["البيان", "المبلغ"],
    rows: [[row.label, money(row.amount)]],
    totals: [[row.direction, money(row.amount)]],
  });
}

function printVoucher(voucherId) {
  const voucher = repo.state.vouchers.find((item) => item.id === voucherId);
  if (!voucher) return;
  printDocument({
    title: voucherTypeLabel(voucher.type),
    number: voucher.number,
    partyLabel: "الطرف",
    partyName: voucher.party || "بدون طرف",
    meta: [
      ["التاريخ", formatDate(voucher.createdAt)],
      ["المرجع", voucher.reference || "-"],
      ["الحالة", voucher.cancelled ? "ملغى" : "فعال"],
      ["نوع الأثر", voucher.type === "expense" ? "مصروف إداري" : "حركة قاصة"],
    ],
    columns: ["البيان", "المبلغ"],
    rows: [[voucher.notes || voucherTypeLabel(voucher.type), money(voucher.amount)]],
    totals: [[voucher.cancelled ? "المبلغ الملغى" : "المبلغ", money(voucher.amount)]],
  });
}

function voucherTypeLabel(type) {
  if (type === "payment") return "سند دفع";
  if (type === "expense") return "سند صرف";
  if (type === "receipt") return "سند قبض";
  return type;
}

function voucherPermission(type) {
  if (type === "payment") return "cash.payment";
  if (type === "expense") return "cash.expense";
  if (type === "receipt") return "cash.receipt";
  return "";
}

function printA4TestPage() {
  const company = companySettings();
  const printedAt = new Intl.DateTimeFormat("ar-IQ", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());
  const printLayer = $("#printLayer");
  const printTarget = $("#printDocument");
  if (!printLayer || !printTarget) return;
  printTarget.innerHTML = `
    <article class="printer-test-sheet">
      <header class="printer-test-sheet-header">
        <div class="printer-test-brand">
          ${company.logoDataUrl ? `<img class="print-logo" src="${escapeAttr(company.logoDataUrl)}" alt="شعار الشركة" />` : `<span>ج</span>`}
          <div><h1>${escapeHtml(company.name || "مفروشات جوري")}</h1><p>ورقة اختبار ومعايرة الطابعة</p></div>
        </div>
        <div class="printer-test-a4-mark"><strong>A4</strong><span>210 × 297 mm</span></div>
      </header>

      <section class="printer-test-info">
        <div><span>وقت الاختبار</span><strong>${escapeHtml(printedAt)}</strong></div>
        <div><span>الاتجاه</span><strong>عمودي — Portrait</strong></div>
        <div><span>المقياس</span><strong>100% — Actual size</strong></div>
      </section>

      <section class="printer-test-block">
        <div class="printer-test-block-title"><strong>1. فحص النص العربي والمحاذاة</strong><span>يجب أن تكون الحروف واضحة وغير متقطعة</span></div>
        <div class="printer-test-type-samples">
          <p class="test-type-large">مفروشات جوري — اختبار وضوح الطباعة العربية ١٢٣٤٥٦٧٨٩٠</p>
          <p class="test-type-medium">فاتورة بيع · كشف حساب · سند قبض · المخزون والموردون</p>
          <p class="test-type-small">هذا نص صغير لاختبار التفاصيل الدقيقة: بغداد، العراق — هاتف 0770 000 0000 — 12,500 د.ع</p>
        </div>
      </section>

      <section class="printer-test-block">
        <div class="printer-test-block-title"><strong>2. فحص الألوان والتدرج الرمادي</strong><span>يجب تمييز كل مربع عن الآخر</span></div>
        <div class="printer-test-color-bars">
          <i class="cyan"></i><i class="magenta"></i><i class="yellow"></i><i class="black"></i>
          <i class="brand-green"></i><i class="brand-blue"></i>
        </div>
        <div class="printer-test-gray-bars">
          ${[100, 85, 70, 55, 40, 25, 10, 0].map((shade) => `<i style="background:rgb(${Math.round(255 * (1 - shade / 100))},${Math.round(255 * (1 - shade / 100))},${Math.round(255 * (1 - shade / 100))})"><span>${shade}%</span></i>`).join("")}
        </div>
      </section>

      <section class="printer-test-measurements">
        <div class="printer-test-ruler-wrap">
          <div class="printer-test-block-title"><strong>3. قياس أفقي مرجعي</strong><span>يجب أن يساوي الخط 100 ملم</span></div>
          <div class="printer-test-ruler"><span>0</span><span>50 mm</span><span>100 mm</span></div>
        </div>
        <div class="printer-test-square-wrap">
          <strong>مربع 50 × 50 ملم</strong>
          <div class="printer-test-square"><span>50 mm</span></div>
        </div>
      </section>

      <section class="printer-test-checklist">
        <strong>نتيجة الفحص</strong>
        <div><span>□</span> ظهرت الحدود الأربع كاملة ولم تُقص الحواف.</div>
        <div><span>□</span> النص العربي واضح ومحاذاته صحيحة.</div>
        <div><span>□</span> التدرج الرمادي والألوان يمكن تمييزها.</div>
        <div><span>□</span> قياس 100 ملم والمربع 50 ملم مطابقان بالمسطرة.</div>
      </section>

      <footer class="printer-test-sheet-footer">
        <span>إذا كانت القياسات غير مطابقة، اختر في نافذة الطباعة: حجم A4 والمقياس 100% أو Actual size.</span>
        <strong>PRINT TEST · A4</strong>
      </footer>
    </article>
  `;
  printLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("printing", "printer-test-printing");
  const cleanup = () => {
    document.body.classList.remove("printing", "printer-test-printing");
    printLayer.setAttribute("aria-hidden", "true");
  };
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
  setTimeout(cleanup, 1200);
}

function buildProfessionalReportHtml({
  title,
  subtitle = "",
  period = "",
  scope = "",
  meta = [],
  metrics = [],
  sections = [],
  notes = "",
}) {
  const company = companySettings();
  const printNumber = `RPT-${now().replace(/\D/g, "").slice(0, 14)}`;
  const reportMeta = [
    ["فترة التقرير", period || "-"],
    ["نطاق الحساب", scope || "-"],
    ...meta,
    ["أُعد بواسطة", currentUserName()],
  ];
  return `
    <article class="professional-report-sheet">
      <header class="print-header professional-report-header">
        <div class="print-brand">
          ${company.logoDataUrl
            ? `<img class="print-logo" src="${escapeAttr(company.logoDataUrl)}" alt="شعار الشركة" />`
            : `<span class="print-logo-placeholder">${escapeHtml(clean(company.name).charAt(0) || "ج")}</span>`}
          <div>
            <h1>${escapeHtml(company.name)}</h1>
            <p>${[company.phone, company.address, company.taxNo ? `رقم تعريفي: ${company.taxNo}` : ""].filter(Boolean).map(escapeHtml).join(" - ")}</p>
          </div>
        </div>
        <div class="print-title">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(printNumber)}</span>
          <small>تقرير إداري</small>
        </div>
      </header>
      <section class="professional-report-intro">
        <div><span>التقرير</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p></div>
        <div class="professional-report-generated"><span>تاريخ الطباعة</span><strong>${formatDate(now())}</strong></div>
      </section>
      <section class="print-meta professional-report-meta">
        ${reportMeta.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
      </section>
      <section class="professional-report-metrics">
        ${metrics.map(([label, value, note = ""]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>${note ? `<small>${escapeHtml(note)}</small>` : ""}</div>`).join("")}
      </section>
      <div class="professional-report-sections">
        ${sections.map((section) => `
          <section class="professional-report-section">
            <div class="professional-report-section-head">
              <h3>${escapeHtml(section.title)}</h3>
              <span>${section.rows.length} سجل</span>
            </div>
            <table class="print-table professional-report-table ${section.columns.length >= 8 ? "wide-table" : ""}">
              <thead><tr>${section.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead>
              <tbody>${section.rows.length
                ? section.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")
                : `<tr><td colspan="${Math.max(section.columns.length, 1)}" class="professional-report-empty">لا توجد بيانات ضمن الفترة والفلاتر المحددة.</td></tr>`}</tbody>
            </table>
          </section>
        `).join("")}
      </div>
      ${notes ? `<section class="print-notes professional-report-notes"><strong>ملاحظة التقرير</strong><p>${escapeHtml(notes)}</p></section>` : ""}
      <footer class="professional-report-footer">
        <span>${escapeHtml(company.footer || "مفروشات جوري")}</span>
        <strong>${escapeHtml(printNumber)}</strong>
      </footer>
    </article>
  `;
}

function openProfessionalPrint(html) {
  const printTarget = $("#printDocument");
  const printLayer = $("#printLayer");
  if (!printTarget || !printLayer) return;
  printTarget.innerHTML = html;
  printLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("printing", "report-printing");
  const cleanup = () => {
    document.body.classList.remove("printing", "report-printing");
    printLayer.setAttribute("aria-hidden", "true");
  };
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
  setTimeout(cleanup, 1500);
}

function buildPrintDocumentHtml({
  title,
  number,
  partyLabel,
  partyName,
  meta = [],
  columns = [],
  rows = [],
  totals = [],
  extraHtml = "",
  status = "",
  notes = "",
  tableClass = "",
  columnWidths = [],
}) {
  const company = companySettings();
  const normalizedMeta = [
    ["تاريخ المستند", formatDate(now())],
    ...meta,
  ];
  return `
    <header class="print-header">
      <div class="print-brand">
        ${company.logoDataUrl
          ? `<img class="print-logo" src="${escapeAttr(company.logoDataUrl)}" alt="شعار الشركة" />`
          : `<span class="print-logo-placeholder" aria-label="مكان شعار الشركة">${escapeHtml(clean(company.name).charAt(0) || "ج")}</span>`}
        <div>
          <h1>${escapeHtml(company.name)}</h1>
          <p>${[company.phone, company.address, company.taxNo ? `رقم تعريفي: ${company.taxNo}` : ""].filter(Boolean).map(escapeHtml).join(" - ")}</p>
        </div>
      </div>
      <div class="print-title">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(number)}</span>
        ${status ? `<small>${escapeHtml(status)}</small>` : ""}
      </div>
    </header>
    <section class="print-party">
      <strong>${escapeHtml(partyLabel)}: ${escapeHtml(partyName)}</strong>
      <span>تاريخ الطباعة: ${formatDate(now())}</span>
    </section>
    <section class="print-meta">
      ${normalizedMeta.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </section>
    <table class="print-table ${escapeAttr(tableClass)}">
      ${columnWidths.length === columns.length ? `<colgroup>${columnWidths.map((width) => `<col style="width:${Number(width) || 0}%">`).join("")}</colgroup>` : ""}
      <thead><tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead>
      <tbody>${rows.length ? rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="${columns.length}">لا توجد بنود.</td></tr>`}</tbody>
    </table>
    <section class="print-totals">
      ${totals.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </section>
    ${notes ? `<section class="print-notes"><strong>ملاحظات</strong><p>${escapeHtml(notes)}</p></section>` : ""}
    ${extraHtml}
    <section class="print-signatures">
      <div><span>توقيع المحاسب</span></div>
      <div><span>توقيع المستلم</span></div>
    </section>
    <footer class="print-footer">${escapeHtml(company.footer || "شكراً لتعاملكم معنا")}</footer>
  `;
}

function printTemplateTestData(type = "sale") {
  const sampleNote = "نموذج طباعة تجريبي فقط؛ لا يُحفظ ولا يؤثر على الحسابات أو المخزون.";
  const templates = {
    sale: {
      title: "فاتورة بيع",
      number: "TEST-SALE-001",
      partyLabel: "الزبون",
      partyName: "أحمد محمد (تجريبي)",
      status: "نسخة تجريبية · مسددة",
      meta: [
        ["هاتف الزبون", "0770 000 0000"],
        ["نوع السعر", "مفرد"],
        ["طريقة الدفع", "نقدي"],
        ["الموظف", "موظف تجريبي"],
      ],
      columns: ["المنتج", "الكمية", "السعر", "الخصم", "الإجمالي"],
      rows: [
        ["غرفة نوم مودرن", "1", money(850000), money(25000), money(825000)],
        ["مرتبة طبية", "1", money(180000), money(0), money(180000)],
        ["طاولة جانبية", "2", money(65000), money(0), money(130000)],
      ],
      totals: [
        ["الإجمالي", money(1160000)],
        ["الخصم", money(25000)],
        ["الصافي", money(1135000)],
        ["المدفوع", money(1135000)],
        ["المتبقي", money(0)],
      ],
      notes: sampleNote,
    },
    installment: {
      title: "فاتورة بيع بالتقسيط",
      number: "TEST-INST-001",
      partyLabel: "الزبون",
      partyName: "سارة علي (تجريبي)",
      status: "نسخة تجريبية · تقسيط",
      meta: [
        ["هاتف الزبون", "0780 000 0000"],
        ["نوع التقسيط", "شهري"],
        ["عدد الأقساط", "4 أقساط"],
        ["أول استحقاق", "2026/08/01"],
      ],
      columns: ["المنتج", "الكمية", "السعر", "الخصم", "الإجمالي"],
      rows: [
        ["صالون كامل", "1", money(1200000), money(50000), money(1150000)],
        ["منضدة وسط", "1", money(250000), money(0), money(250000)],
      ],
      totals: [
        ["الصافي", money(1400000)],
        ["الدفعة الأولى", money(400000)],
        ["المتبقي", money(1000000)],
        ["قيمة القسط", money(250000)],
      ],
      extraHtml: `
        <section class="print-extra">
          <h2>جدول الأقساط</h2>
          <table class="print-table">
            <thead><tr><th>القسط</th><th>تاريخ الاستحقاق</th><th>المبلغ</th><th>الحالة</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>2026/08/01</td><td>${money(250000)}</td><td>قادم</td></tr>
              <tr><td>2</td><td>2026/09/01</td><td>${money(250000)}</td><td>قادم</td></tr>
              <tr><td>3</td><td>2026/10/01</td><td>${money(250000)}</td><td>قادم</td></tr>
              <tr><td>4</td><td>2026/11/01</td><td>${money(250000)}</td><td>قادم</td></tr>
            </tbody>
          </table>
        </section>`,
      notes: sampleNote,
    },
    purchase: {
      title: "فاتورة شراء",
      number: "TEST-PUR-001",
      partyLabel: "المورد",
      partyName: "شركة النخبة للأثاث (تجريبي)",
      status: "نسخة تجريبية · متبقي للمورد",
      meta: [
        ["رقم فاتورة المورد", "SUP-4582"],
        ["تاريخ فاتورة المورد", "2026/07/18"],
        ["طريقة الدفع", "دفعة جزئية"],
        ["الموظف", "موظف تجريبي"],
      ],
      columns: ["المنتج", "التصنيف", "الكمية", "كلفة الوحدة", "الإجمالي"],
      rows: [
        ["كرسي سفرة", "غرف طعام", "6", money(95000), money(570000)],
        ["خزانة ملابس", "غرف نوم", "2", money(420000), money(840000)],
      ],
      totals: [
        ["الإجمالي", money(1410000)],
        ["خصم المورد", money(10000)],
        ["الصافي", money(1400000)],
        ["المدفوع", money(900000)],
        ["المتبقي", money(500000)],
      ],
      notes: sampleNote,
    },
    receipt: {
      title: "سند قبض",
      number: "TEST-RCV-001",
      partyLabel: "المقبوض من",
      partyName: "أحمد محمد · زبون تجريبي",
      status: "نسخة تجريبية · مقبوض",
      meta: [
        ["نوع السند", "قبض من زبون"],
        ["مرجع العملية", "القسط رقم 2"],
        ["طريقة القبض", "نقدي"],
        ["الموظف", "موظف تجريبي"],
      ],
      columns: ["البيان", "المرجع", "المبلغ"],
      rows: [["تسديد قسط مستحق", "TEST-INST-001 / قسط 2", money(250000)]],
      totals: [["المبلغ المقبوض", money(250000)]],
      notes: sampleNote,
    },
    payment: {
      title: "سند دفع",
      number: "TEST-PAY-001",
      partyLabel: "المدفوع إلى",
      partyName: "شركة النخبة للأثاث · مورد تجريبي",
      status: "نسخة تجريبية · مدفوع",
      meta: [
        ["نوع السند", "دفع إلى مورد"],
        ["مرجع العملية", "فاتورة SUP-4582"],
        ["طريقة الدفع", "نقدي"],
        ["الموظف", "موظف تجريبي"],
      ],
      columns: ["البيان", "المرجع", "المبلغ"],
      rows: [["دفعة على حساب المورد", "TEST-PUR-001", money(500000)]],
      totals: [["المبلغ المدفوع", money(500000)]],
      notes: sampleNote,
    },
    customerStatement: {
      title: "كشف حساب زبون",
      number: "TEST-CUS-001",
      partyLabel: "الزبون",
      partyName: "سارة علي (تجريبي)",
      status: "نسخة تجريبية · كشف حساب",
      meta: [
        ["الفترة", "2026/07/01 - 2026/07/31"],
        ["هاتف الزبون", "0780 000 0000"],
        ["عدد الحركات", "3"],
      ],
    columns: ["التاريخ", "الحركة", "المرجع", "مدين", "دائن", "الرصيد"],
    tableClass: "customer-statement-table",
    columnWidths: [16, 14, 28, 14, 14, 14],
      rows: [
        ["2026/07/02", "فاتورة تقسيط", "TEST-INST-001", money(1400000), money(0), money(1400000)],
        ["2026/07/02", "دفعة أولى", "TEST-RCV-000", money(0), money(400000), money(1000000)],
        ["2026/07/18", "تسديد قسط", "TEST-RCV-001", money(0), money(250000), money(750000)],
      ],
      totals: [
        ["إجمالي المديونية", money(1400000)],
        ["إجمالي المقبوض", money(650000)],
        ["الرصيد الحالي", money(750000)],
      ],
      notes: sampleNote,
    },
    supplierStatement: {
      title: "كشف حساب مورد",
      number: "TEST-SUP-001",
      partyLabel: "المورد",
      partyName: "شركة النخبة للأثاث (تجريبي)",
      status: "نسخة تجريبية · كشف حساب",
      meta: [
        ["الفترة", "2026/07/01 - 2026/07/31"],
        ["هاتف المورد", "0750 000 0000"],
        ["عدد الحركات", "3"],
      ],
      columns: ["التاريخ", "الحركة", "المرجع", "علينا", "له", "الرصيد"],
      rows: [
        ["2026/07/05", "فاتورة شراء", "TEST-PUR-001", money(1400000), money(0), money(1400000)],
        ["2026/07/05", "دفعة أولى", "TEST-PAY-000", money(0), money(900000), money(500000)],
        ["2026/07/18", "سند دفع", "TEST-PAY-001", money(0), money(500000), money(0)],
      ],
      totals: [
        ["إجمالي المشتريات", money(1400000)],
        ["إجمالي المدفوع", money(1400000)],
        ["الرصيد الحالي", money(0)],
      ],
      notes: sampleNote,
    },
    modon: {
      title: "طلب Modon",
      number: "TEST-MODON-001",
      partyLabel: "الزبون",
      partyName: "علي حسين (تجريبي)",
      status: "نسخة تجريبية · جاهز للتوصيل",
      meta: [
        ["الهاتف", "0771 000 0000"],
        ["المحافظة", "بغداد"],
        ["العنوان", "المنصور - شارع 14 رمضان"],
        ["شركة التوصيل", "Modon"],
      ],
      columns: ["المنتج", "الكمية", "سعر البيع", "التوصيل", "الصافي"],
      rows: [["طقم كنب ثلاثي", "1", money(950000), money(5000), money(945000)]],
      totals: [
        ["المبلغ المطلوب من الزبون", money(950000)],
        ["أجرة التوصيل", money(5000)],
        ["صافي التاجر", money(945000)],
      ],
      notes: sampleNote,
    },
  };
  return templates[type] || templates.sale;
}

function renderPrintTemplateTestPreview() {
  const target = $("#printTemplateTestPreview");
  if (!target) return;
  const type = clean($("#printTemplateTestType")?.value) || "sale";
  target.innerHTML = buildPrintDocumentHtml(printTemplateTestData(type));
}

function printSelectedTemplateTest() {
  const type = clean($("#printTemplateTestType")?.value) || "sale";
  printDocument(printTemplateTestData(type));
}

function printDocument(documentData) {
  $("#printDocument").innerHTML = buildPrintDocumentHtml(documentData);
  $("#printLayer")?.setAttribute("aria-hidden", "false");
  document.body.classList.add("printing");
  const cleanup = () => {
    document.body.classList.remove("printing");
    $("#printLayer")?.setAttribute("aria-hidden", "true");
  };
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
  setTimeout(cleanup, 1200);
}

function defaultCompanySettings() {
  return {
    name: "مفروشات جوري",
    phone: "",
    address: "",
    taxNo: "",
    footer: "شكراً لتعاملكم معنا",
    logoDataUrl: "",
  };
}

function defaultModonSettings() {
  return {
    priceMarkup: 1000,
    deliveryPrice: 4000,
  };
}

function companySettings() {
  return { ...defaultCompanySettings(), ...(repo.state.settings?.company || {}) };
}

function isCorruptedText(value) {
  const text = clean(value);
  return Boolean(text) && /^[?\s]+$/.test(text);
}

function repairCorruptedCompanySettings(company) {
  if (!company) return;
  const defaults = defaultCompanySettings();
  if (isCorruptedText(company.name)) company.name = defaults.name;
  if (isCorruptedText(company.footer)) company.footer = defaults.footer;
  if (isCorruptedText(company.address)) company.address = "";
  if (isCorruptedText(company.phone)) company.phone = "";
  if (isCorruptedText(company.taxNo)) company.taxNo = "";
  company.logoDataUrl ||= "";
}

function repairCorruptedAuditLogs(logs) {
  (logs || []).forEach((log) => {
    if (isCorruptedText(log.action)) log.action = "تسجيل دخول";
    if (isCorruptedText(log.details)) log.details = "الإدارة";
    if (isCorruptedText(log.ref)) log.ref = log.userId || log.employeeId || "admin";
  });
}

function modonSettings() {
  return { ...defaultModonSettings(), ...(repo.state.settings?.modon || {}) };
}

function getInvoice(id) { return repo.state.invoices.find((item) => item.id === id); }
function getOrderByInvoice(invoiceId) { return repo.state.deliveryOrders.find((order) => order.local_order_id === invoiceId); }
function getEmployee(id) { return repo.state.employees.find((item) => item.id === id); }
function getProduct(id) { return repo.state.products.find((item) => item.id === id); }
function getSupplier(id) { return repo.state.suppliers.find((item) => item.id === id); }
function employeeName(id) { return id === "admin" ? "الإدارة" : getEmployee(id)?.name || "غير محدد"; }
function productName(id) { return getProduct(id)?.name || "منتج محذوف"; }
function supplierName(id) { return getSupplier(id)?.name || "بدون مورد"; }
function permissionLabel(key) { return permissionCatalog.find(([value]) => value === key)?.[1] || key; }
function currentEmployee() { return getEmployee(repo.state.currentUserId); }
function isAdminUser() { return repo.state.currentUserId === "admin" || currentEmployee()?.role === "manager"; }
function currentUserName() { return repo.state.currentUserId === "admin" ? "الإدارة" : currentEmployee()?.name || "غير مسجل"; }
function canUseAllAccounts() { return isAdminUser(); }
function canViewAllModonAccounts() { return isAdminUser(); }
function canManageEmployee(employeeId) { return isAdminUser() || employeeId === currentEmployee()?.id; }
function canViewProfitReports() { return isAdminUser(); }
function activeEmployeeId() {
  if (!repo.state.currentUserId) return "";
  if (!canUseAllAccounts()) return currentEmployee()?.id || "";
  return repo.state.activeEmployeeId || "all";
}
function operationEmployeeId() {
  const activeId = activeEmployeeId();
  if (activeId && activeId !== "all") return activeId;
  if (repo.state.currentUserId && repo.state.currentUserId !== "admin") return repo.state.currentUserId;
  return "admin";
}
function hasPermission(key, employeeId = repo.state.currentUserId) {
  if (isAdminUser()) return true;
  const employee = getEmployee(employeeId);
  const permissions = employee?.permissions || [];
  const aliases = permissionAliases[key] || [];
  return Boolean(employee?.active && (permissions.includes(key) || aliases.some((alias) => permissions.includes(alias))));
}
function suggestedUsername(name, fallback) {
  const base = normalizeSearch(name).replace(/[^\w]+/g, "_").replace(/^_+|_+$/g, "");
  return base || fallback || "user";
}
async function loginUser(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const username = clean(form.get("username"));
  const password = clean(form.get("password"));
  const rememberLogin = form.get("rememberLogin") === "1";
  const submitter = event.submitter || event.target.querySelector('button[type="submit"]');
  let response;
  try {
    response = await withBusy(submitter, "جاري تسجيل الدخول...", () => apiPost("/api/auth/login", { username, password, rememberLogin }, { skipAuth: true, retry: true, operation: "auth-login" }));
  } catch (error) {
    return notifyOperationError(error, "تعذر تسجيل الدخول");
  }
  const userId = response.userId || response.data?.userId;
  const token = response.token || response.data?.token;
  if (!userId || !token) return alert("لم يرجع الخادم جلسة دخول صالحة.");
  try {
    const preferredStorage = rememberLogin ? localStorage : sessionStorage;
    const alternateStorage = rememberLogin ? sessionStorage : localStorage;
    alternateStorage.removeItem(API_SESSION_TOKEN_KEY);
    alternateStorage.removeItem(LOCAL_SESSION_KEY);
    preferredStorage.setItem(API_SESSION_TOKEN_KEY, token);
    preferredStorage.setItem(LOCAL_SESSION_KEY, userId);
  } catch {}
  const dataReady = await repo.loadRemote();
  if (!dataReady) {
    await logoutUser({ silent: true, keepMessage: "تعذر الاتصال ببيانات النظام. لم يتم فتح الحساب." });
    const error = Object.assign(new Error("خادم البيانات لم يؤكد الاتصال، لذلك لم يُفتح الحساب."), {
      code: "NETWORK_ERROR",
      apiFailure: true,
      connectivityFailure: true,
    });
    return notifyOperationError(error, "تعذر تسجيل الدخول");
  }
  repo.state.currentUserId = userId;
  const employee = userId === "admin" ? null : getEmployee(userId);
  repo.state.activeEmployeeId = userId === "admin" || employee?.role === "manager" ? "all" : userId;
  const modonReady = await fillCatalogs({ silent: true });
  if (employeeRequiresModonOnline(employee) && !modonReady) {
    await logoutUser({ silent: true, keepMessage: "Modon غير متصل. لا يمكن فتح حساب موظف Modon قبل عودة الاتصال بـ Modon." });
    const error = Object.assign(new Error("خدمة البيانات متصلة، لكن حساب Modon لم يؤكد الاتصال."), {
      code: "NETWORK_ERROR",
      apiFailure: true,
      connectivityFailure: true,
    });
    return notifyOperationError(error, "لم يُفتح حساب موظف Modon");
  }
  addAudit("تسجيل دخول", "auth", repo.state.currentUserId, username, currentUserName());
  repo.save();
  event.target.reset();
  renderAll();
  renderAuthState();
}

async function verifyPassword(account, plainPassword, passwordHash) {
  if (account.passwordHash && account.passwordHash === passwordHash) {
    delete account.password;
    return true;
  }
  if (account.password && account.password === plainPassword) {
    account.passwordHash = passwordHash;
    delete account.password;
    return true;
  }
  return false;
}

async function hashText(value) {
  const data = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function logoutUser(options = {}) {
  repo.state.currentUserId = null;
  repo.state.activeEmployeeId = "";
  try {
    sessionStorage.removeItem(API_SESSION_TOKEN_KEY);
    sessionStorage.removeItem(LOCAL_SESSION_KEY);
    localStorage.removeItem(API_SESSION_TOKEN_KEY);
    localStorage.removeItem(LOCAL_SESSION_KEY);
  } catch {}
  const storageConnected = repo.state.settings?.storageConnected !== false;
  repo.state = repo.defaultState();
  repo.state.settings.storageConnected = storageConnected;
  repo.state.settings.storageMessage = options.keepMessage || "تم تسجيل الخروج بأمان";
  repo.migrate();
  renderAuthState();
  renderAll();
}
function saleModeLabel(mode) { return mode === "cash" ? "نقد مباشر" : mode === "customerDebt" ? "دين زبون" : mode === "installment" ? "تقسيط" : "Modon"; }

function statusBadge(status) {
  const meta = statusMap[status] || { label: status, kind: "" };
  const cls = meta.kind === "ok" ? "ok" : meta.kind === "issue" ? "issue" : meta.kind === "danger" ? "danger" : "";
  return `<span class="badge ${cls}">${meta.label}</span>`;
}

function modonAccountingBadge(order) {
  if (order.status === "delivered") {
    return order.deliver_confirmed_fin
      ? `<span class="badge ok">تم قبض المبلغ</span>`
      : `<span class="badge issue">واصل - بانتظار القبض</span>`;
  }
  if (order.status === "returned") {
    return order.returned_received_stock
      ? `<span class="badge ok">تم استلام الراجع</span>`
      : `<span class="badge issue">بانتظار استلام الراجع</span>`;
  }
  return "";
}

function reconciliationBadge(status) {
  if (status === "matched") return `<span class="badge ok">مطابق للكشف</span>`;
  if (status === "missing") return `<span class="badge danger">مفقود من الكشف</span>`;
  return `<span class="badge">غير مطابق بعد</span>`;
}

function reportRow([label, value]) { return `<div class="report-row"><span>${label}</span><strong>${value}</strong></div>`; }
function auditMetaItem(label, value) { return `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`; }

async function initializeOnlineStorage() {
  if (!confirm("سيتم إنشاء قالب البداية في التخزين الأونلاين. تابع فقط إذا كان التخزين جديدًا وفارغًا.")) return;
  const button = $("#initStorage");
  button.disabled = true;
  button.textContent = "جاري التهيئة...";
  try {
    const response = await apiPost("/api/store/init", {}, { attempts: 1, operation: "store-init" });
    alert(response.msg || "تمت تهيئة التخزين الأونلاين.");
    location.reload();
  } catch (error) {
    notifyOperationError(error, "تعذر تهيئة التخزين الأونلاين");
    button.disabled = false;
    button.textContent = "تهيئة التخزين الأونلاين";
  }
}

async function refreshDataHealth() {
  const button = $("#checkDataHealth");
  if (button) {
    button.disabled = true;
    button.textContent = "جاري الفحص...";
  }
  try {
    const status = await apiGet("/api/store/status", { timeoutMs: API_HEALTH_TIMEOUT_MS, operation: "manual-store-status" });
    if (status.status) repo.markStorageOnline(status.msg || "التخزين الأونلاين متصل");
    else repo.markStorageProblem(new Error(status.msg || "التخزين غير جاهز"), "التخزين غير جاهز");
    if (status.updatedAt) repo.state.dataUpdatedAt = status.updatedAt;
    renderConnection();
    renderDataHealth();
    alert(repo.state.settings.storageMessage);
  } catch (error) {
    repo.markStorageProblem(error, "تعذر فحص الاتصال");
    renderConnection();
    renderDataHealth();
    notifyOperationError(error, "تعذر فحص اتصال البيانات");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "فحص الاتصال";
    }
  }
}

async function downloadOnlineBackup() {
  const button = $("#downloadBackup");
  if (button) {
    button.disabled = true;
    button.textContent = "جاري التنزيل...";
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);
    const response = await fetch("/api/store/backup", {
      cache: "no-store",
      signal: controller.signal,
      headers: apiRequestHeaders({ Accept: "application/json" }),
    });
    clearTimeout(timeoutId);
    const blob = await response.blob();
    if (!response.ok) {
      const text = await blob.text();
      let message = "تعذر تنزيل النسخة الاحتياطية";
      try {
        message = JSON.parse(text).msg || message;
      } catch {}
      throw new Error(message);
    }
    const disposition = response.headers.get("Content-Disposition") || "";
    const filename = disposition.match(/filename="([^"]+)"/)?.[1] || `jouri-accounting-backup-v${repo.state.dataRevision || 1}.json`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (error) {
    if (error?.name === "AbortError") {
      // DOMException.code is a read-only getter — build a fresh error instead.
      const timeoutError = new Error("انتهت مهلة الاتصال");
      timeoutError.code = "REQUEST_TIMEOUT";
      timeoutError.apiFailure = true;
      timeoutError.connectivityFailure = true;
      error = timeoutError;
    }
    notifyOperationError(error, "تعذر تنزيل النسخة الاحتياطية");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "تنزيل نسخة احتياطية";
    }
  }
}

function apiSessionToken() {
  try {
    return sessionStorage.getItem(API_SESSION_TOKEN_KEY) || localStorage.getItem(API_SESSION_TOKEN_KEY) || "";
  } catch {
    return "";
  }
}

function apiRequestHeaders(extra = {}, skipAuth = false) {
  const headers = { "X-Client-Build": APP_BUILD_VERSION, ...extra };
  const token = skipAuth ? "" : apiSessionToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

// When a new build is deployed the server starts returning a newer X-App-Version
// header than the APP_BUILD_VERSION baked into this cached app.js. That mismatch
// means the user is still running an old bundle (the exact situation that let the
// REVISION_CONFLICT storm keep going after a fix shipped) — so we surface a
// blocking banner asking them to refresh onto the fresh build.
let appUpdateNoticeShown = false;

function noteServerAppVersion(serverVersion) {
  const remote = String(serverVersion || "").trim();
  if (!remote || appUpdateNoticeShown) return;
  if (remote === APP_BUILD_VERSION) return;
  appUpdateNoticeShown = true;
  try {
    showAppUpdateBanner(remote);
  } catch {}
}

function reloadForAppUpdate() {
  try {
    const url = new URL(window.location.href);
    // Cache-bust the document itself so the browser must refetch index.html and,
    // through it, the new app.js?v=... — a plain reload can serve stale HTML.
    url.searchParams.set("_appv", String(Date.now()));
    window.location.replace(url.href);
  } catch {
    window.location.reload();
  }
}

function showAppUpdateBanner(remoteVersion) {
  if (document.getElementById("appUpdateBanner")) return;
  const banner = document.createElement("div");
  banner.id = "appUpdateBanner";
  banner.setAttribute("dir", "rtl");
  banner.setAttribute("role", "alert");
  banner.style.cssText = [
    "position:fixed", "top:0", "left:0", "right:0", "z-index:2147483647",
    "display:flex", "flex-wrap:wrap", "align-items:center", "justify-content:center",
    "gap:12px", "padding:12px 16px", "background:#0f766e", "color:#fff",
    "font-family:inherit", "font-size:15px", "font-weight:600",
    "box-shadow:0 2px 10px rgba(0,0,0,0.25)", "text-align:center",
  ].join(";");

  const message = document.createElement("span");
  message.textContent = "تم تحديث النظام إلى نسخة أحدث. حدّث الصفحة لمواصلة الاستخدام.";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "تحديث الصفحة";
  button.style.cssText = [
    "cursor:pointer", "border:0", "border-radius:8px", "padding:8px 18px",
    "background:#fff", "color:#0f766e", "font-weight:700", "font-size:15px",
    "font-family:inherit",
  ].join(";");
  button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "جارٍ التحديث...";
    reloadForAppUpdate();
  });

  banner.append(message, button);
  document.body.appendChild(banner);
}

async function apiGet(url, options = {}) {
  return apiRequest(url, { method: "GET" }, options);
}

async function apiPost(url, payload, options = {}) {
  return apiRequest(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }, options);
}

async function apiRequest(url, init = {}, options = {}) {
  const method = String(init.method || "GET").toUpperCase();
  const safeRetry = method === "GET" || options.retry === true;
  const attempts = Math.max(1, number(options.attempts || (safeRetry ? 3 : 1)));
  const timeoutMs = Math.max(1000, number(options.timeoutMs || API_TIMEOUT_MS));
  const operation = options.operation || `${method} ${url}`;
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const startedAt = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      if (String(operation).startsWith("modon-")) await acquireModonApiRequestSlot();
      const response = await fetch(url, {
        ...init,
        cache: "no-store",
        signal: controller.signal,
        headers: apiRequestHeaders({ Accept: "application/json", ...(init.headers || {}) }, options.skipAuth),
      });
      clearTimeout(timeoutId);
      diagnostics.lastApiOperation = operation;
      diagnostics.lastApiUrl = url;
      diagnostics.lastApiStatus = String(response.status);
      diagnostics.lastApiDurationMs = Date.now() - startedAt;
      noteServerAppVersion(response.headers.get("X-App-Version"));
      const data = await readApiJson(response);
      if (!response.ok) {
        const apiMessage = normalizeText(data.msg || data.message || "");
        const error = new Error(apiMessage || "تعذر تنفيذ العملية");
        error.code = data.code || `HTTP_${response.status}`;
        error.details = data;
        error.retryable = response.status >= 500 || [408, 429].includes(response.status);
        error.apiFailure = true;
        // Server rejected this build as stale — force the refresh banner and do not retry.
        if (error.code === "CLIENT_OUTDATED") {
          error.retryable = false;
          appUpdateNoticeShown = false;
          try { noteServerAppVersion(data.serverVersion || response.headers.get("X-App-Version")); } catch {}
        }
        throw error;
      }
      diagnostics.lastApiOkAt = now();
      diagnostics.lastApiError = "";
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error?.name === "AbortError") {
        // A fetch abort throws a DOMException whose `code` is a read-only getter;
        // assigning to it crashes ("Cannot set property code ... only a getter").
        // Replace it with a plain Error that carries our timeout metadata.
        const timeoutError = new Error("انتهت مهلة الاتصال");
        timeoutError.code = "REQUEST_TIMEOUT";
        timeoutError.retryable = true;
        error = timeoutError;
      }
      lastError = error;
      diagnostics.lastApiErrorAt = now();
      diagnostics.lastApiOperation = operation;
      diagnostics.lastApiUrl = url;
      diagnostics.lastApiStatus = error.code || "";
      diagnostics.lastApiDurationMs = Date.now() - startedAt;
      diagnostics.lastApiError = error.message || String(error);
      // Never blindly retry conflicts or business-rule rejections: retrying the
      // same stale payload just re-conflicts and storms the save RPC. These are
      // handled explicitly (reload + merge) by the caller.
      const noBlindRetry = ["AUTH_REQUIRED", "SECURITY_NOT_CONFIGURED", "REVISION_CONFLICT", "INSUFFICIENT_STOCK", "PRODUCT_IN_USE", "STORE_NOT_INITIALIZED"];
      const retryable = safeRetry && error.retryable !== false && !noBlindRetry.includes(error.code);
      if (!retryable || attempt === attempts - 1) break;
      await wait(API_RETRY_DELAY_MS * (attempt + 1));
    }
  }
  if (["AUTH_REQUIRED", "SECURITY_NOT_CONFIGURED"].includes(lastError?.code)) throw lastError;
  if (lastError?.retryable === false || String(lastError?.code || "").startsWith("MODON_")) throw lastError;
  const finalCode = lastError?.code || "NETWORK_ERROR";
  const gatewayFailure = ["HTTP_502", "HTTP_503", "HTTP_504", "HTTP_520", "HTTP_522", "HTTP_523", "HTTP_524"].includes(finalCode);
  const error = new Error(finalCode === "REQUEST_TIMEOUT"
    ? "انتهت مهلة الاتصال."
    : gatewayFailure || finalCode === "NETWORK_ERROR"
      ? "تعذر الاتصال بالبيانات الآن بسبب مشكلة الشبكة أو Cloudflare أو السيرفر."
      : lastError?.message || "فشل تنفيذ العملية بنجاح.");
  error.code = finalCode;
  error.details = lastError?.details;
  error.apiFailure = true;
  error.connectivityFailure = finalCode === "REQUEST_TIMEOUT" || finalCode === "NETWORK_ERROR" || gatewayFailure || ["EMPTY_API_RESPONSE", "INVALID_API_RESPONSE"].includes(finalCode);
  throw error;
}
async function readApiJson(response) {
  const text = await response.text();
  const source = normalizeText(text.trim() ? text : "");
  if (!source) {
    const error = new Error(normalizeText("لا يوجد استجابة API"));
    error.code = "EMPTY_API_RESPONSE";
    error.retryable = true;
    throw error;
  }
  try {
    return JSON.parse(source);
  } catch {
    const normalized = normalizeText(text);
    if (normalized && normalized.trim() && normalized !== text) {
      try {
        return JSON.parse(normalized);
      } catch {}
    }
    const error = new Error(normalizeText("استجابة API غير صالحة"));
    error.code = "INVALID_API_RESPONSE";
    error.retryable = true;
    throw error;
  }
}

function normalizeText(value) {
  if (typeof value !== "string") return value;
  if (!value) return value;
  if (!/[à-ÿ]/.test(value)) return value;
  try {
    const fixed = decodeURIComponent(escape(value));
    return /[ء-ي]/.test(fixed) ? fixed : value;
  } catch {
    return value;
  }
}
function employeeCredentials(employee) {
  const token = employee.modonToken || "";
  return {
    username: employee.modonUsername || "",
    password: employee.modonPassword || "",
    token,
  };
}

function exportCsv() {
  const date = selectedReportRange();
  const reportEmployeeId = selectedReportEmployeeId();
  const operationScope = selectedReportOperationScope();
  const saleModeScope = selectedReportSaleModeScope();
  const showProfit = canViewProfitReports();
  const financial = financialTotals(date, reportEmployeeId, { operationScope, saleModeScope });
  const rows = [
    ["summary", "value"],
    ["scope", reportEmployeeId === "all" ? "company" : employeeName(reportEmployeeId)],
    ["operation", operationScope],
    ["sale_mode", saleModeScope],
    ["sales", financial.sales],
    ["cash_balance", financial.cashBalance],
    ["customer_receivables", financial.customerReceivables],
    ["modon_receivable", financial.modonReceivable],
    ["supplier_payable", financial.supplierPayable],
    [],
    ["date", "employee", "invoice", "customer", "mode", "modon_order", "status", "total", "merchant_price"],
  ];
  if (showProfit) {
    rows.splice(5, 0,
      ["cost_of_goods", financial.costOfGoods],
      ["gross_profit", financial.grossProfit],
      ["profit_expenses", financial.profitExpenses],
      ["net_profit", financial.netProfit],
    );
  }
  (operationScope === "all" || operationScope === "sales" ? accounting.scopedInvoices(reportEmployeeId) : [])
    .filter((invoice) => !invoice.cancelled && (saleModeScope === "all" || invoice.saleMode === saleModeScope) && isReportDate(invoice.createdAt, date))
    .forEach((invoice) => {
      const order = getOrderByInvoice(invoice.id);
      rows.push([dateOnly(invoice.createdAt), employeeName(invoice.employeeId), invoice.number, invoice.customerName, saleModeLabel(invoice.saleMode), order?.external_order_id || "", order?.status || "", invoice.total, order?.merchant_price || ""]);
    });
  const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = `jouri-accounting-report-${date.from}-${date.to}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}
function emptyRow(colspan, text) { return `<tr><td colspan="${colspan}" class="empty">${text}</td></tr>`; }
function sumBy(key) { return (sum, item) => sum + number(item[key]); }
function money(value) { return `${Number(value || 0).toLocaleString("en-US")} د.ع`; }
function number(value) { return Number(value || 0); }
function clean(value) { return String(value || "").trim(); }
// Return the first candidate that is an array (used to unwrap Modon responses
// whose list can arrive under several container keys). Empty array if none.
function firstArray(...candidates) {
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
  }
  return [];
}
function isValidIraqiMobile(value) {
  const phone = clean(value).replace(/[\s-]/g, "");
  return /^07[5789]\d{8}$/.test(phone) || /^\+9647[5789]\d{8}$/.test(phone);
}
function normalizeModonPhone(value) {
  const phone = clean(value).replace(/[\s-]/g, "");
  if (/^07[5789]\d{8}$/.test(phone)) return `+964${phone.slice(1)}`;
  return phone;
}
function stripTags(value) { return clean(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(); }
function snapshot(value) {
  return redactSecrets(JSON.parse(JSON.stringify(value)));
}

function redactSecrets(value) {
  if (Array.isArray(value)) return value.map(redactSecrets);
  if (!value || typeof value !== "object") return value;
  ["password", "passwordHash", "modonPassword", "modonToken", "token"].forEach((key) => {
    if (key in value) value[key] = "[محجوب]";
  });
  Object.keys(value).forEach((key) => {
    if (value[key] && typeof value[key] === "object") value[key] = redactSecrets(value[key]);
  });
  return value;
}
function normalizeSearch(value) {
  return clean(value)
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/\s+/g, " ")
    .toLowerCase();
}
function normalizeEnglishDigits(value) {
  return String(value ?? "").replace(/[٠-٩۰-۹]/g, (digit) => {
    const arabic = "٠١٢٣٤٥٦٧٨٩";
    const persian = "۰۱۲۳۴۵۶۷۸۹";
    const index = arabic.indexOf(digit);
    return String(index >= 0 ? index : persian.indexOf(digit));
  }).replace(/[٫،]/g, ".");
}
function normalizeEnglishDigitsInField(event) {
  const field = event.target;
  if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
  if (field.type === "file" || field.type === "password") return;
  const before = field.value;
  const after = normalizeEnglishDigits(before);
  if (before === after) return;
  const start = field.selectionStart;
  const end = field.selectionEnd;
  field.value = after;
  if (typeof start === "number" && typeof end === "number") {
    const delta = after.length - before.length;
    field.setSelectionRange(Math.max(0, start + delta), Math.max(0, end + delta));
  }
  field.dispatchEvent(new Event("change", { bubbles: true }));
}
function now() { return new Date().toISOString(); }
function uniqueDocumentNumber(prefix) {
  const timestamp = now().replace(/\D/g, "").slice(0, 17);
  const nonce = crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase();
  return `${clean(prefix)}-${timestamp}-${nonce}`;
}
function today() { return dateOnly(new Date()); }
function formatDate(value) { return new Intl.DateTimeFormat("en-GB", { dateStyle: "short", timeStyle: "short", numberingSystem: "latn" }).format(new Date(value)); }
function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function findById(items, id) { return items.find((item) => item.id === id) || items[0] || { name: "" }; }
function escapeHtml(value) {
  return clean(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function jsArg(value) {
  return escapeAttr(JSON.stringify(String(value ?? ""))
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029"));
}

function escapeAttr(value) {
  return escapeHtml(value);
}

window.selectInvoice = selectInvoice;
window.openUnifiedInvoice = openUnifiedInvoice;
window.selectCustomerAccount = selectCustomerAccount;
window.openCustomerAccount = openCustomerAccount;
window.setCustomerLedgerFilter = setCustomerLedgerFilter;
window.clearCustomerLedgerFilters = clearCustomerLedgerFilters;
window.prepareCustomerPayment = prepareCustomerPayment;
window.openManualDebtForCustomer = openManualDebtForCustomer;
window.cancelCustomerPayment = cancelCustomerPayment;
window.cancelPersonalDebt = cancelPersonalDebt;
window.editInvoice = editInvoice;
window.cancelInvoice = cancelInvoice;
window.openSalesReturnModal = openSalesReturnModal;
window.confirmCarrierInvoice = confirmCarrierInvoice;
window.openCarrierCashConfirmation = openCarrierCashConfirmation;
window.openProductEdit = openProductEdit;
window.openStockAdjustment = openStockAdjustment;
window.deleteInventoryProduct = deleteInventoryProduct;
window.receiveReturnCarrierInvoice = receiveReturnCarrierInvoice;
window.showCarrierInvoiceDetails = showCarrierInvoiceDetails;
window.confirmReturnedOrder = confirmReturnedOrder;
window.selectSupplier = selectSupplier;
window.openSupplierPaymentModal = openSupplierPaymentModal;
window.deleteSupplier = deleteSupplier;
window.selectPurchaseInvoice = selectPurchaseInvoice;
window.cancelPurchaseInvoice = cancelPurchaseInvoice;
window.selectProduct = selectProduct;
window.cancelSupplierPayment = cancelSupplierPayment;
window.printSaleInvoice = printSaleInvoice;
window.sendSaleInvoiceWhatsApp = sendSaleInvoiceWhatsApp;
window.sendCustomerStatementWhatsApp = sendCustomerStatementWhatsApp;
window.printCustomerStatement = printCustomerStatement;
window.printModonOrder = printModonOrder;
window.printCarrierInvoiceDetail = printCarrierInvoiceDetail;
window.jumpToModonOrders = jumpToModonOrders;
window.showModonNowBucket = showModonNowBucket;
window.closeModonBucketModal = closeModonBucketModal;
window.showModonHubTab = showModonHubTab;
window.setModonPrintPreset = setModonPrintPreset;
window.confirmModonOrdersPrint = confirmModonOrdersPrint;
window.closeModonOrdersPrintDialog = closeModonOrdersPrintDialog;
window.printUnprintedModonOrders = printUnprintedModonOrders;
window.editModonOrderLocal = editModonOrderLocal;
window.cancelModonOrderLocal = cancelModonOrderLocal;
window.showModonOrderTimeline = showModonOrderTimeline;
window.printPurchaseInvoice = printPurchaseInvoice;
window.printSupplierLedgerItem = printSupplierLedgerItem;
window.printVoucher = printVoucher;
window.cancelVoucher = cancelVoucher;
window.selectVoucherSettlement = selectVoucherSettlement;
window.showAuditDetails = showAuditDetails;
window.editEmployee = editEmployee;
window.confirmScannedReturnedOrder = confirmScannedReturnedOrder;
































