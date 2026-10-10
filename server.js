"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const LOCAL_SECRETS = loadLocalSecrets();
const LOCAL_PREVIEW_TOKEN = "jouri-local-preview";
const LOCAL_PREVIEW_MODE = !isUsableSupabaseKey(process.env.SUPABASE_SERVICE_ROLE_KEY || LOCAL_SECRETS.SUPABASE_SERVICE_ROLE_KEY);
let localPreviewState = LOCAL_PREVIEW_MODE ? loadLocalPreviewState() : null;
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

let workerPromise;

function loadWorker() {
  if (!workerPromise) {
    const source = fs.readFileSync(path.join(ROOT, "_worker.js"), "utf8");
    workerPromise = import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
  }
  return workerPromise;
}

function workerEnv() {
  return {
    SUPABASE_URL: process.env.SUPABASE_URL || LOCAL_SECRETS.SUPABASE_URL || "",
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || LOCAL_SECRETS.SUPABASE_SERVICE_ROLE_KEY || "",
    SUPABASE_TABLE: process.env.SUPABASE_TABLE || "jouri_app_state",
    SUPABASE_ROW_ID: process.env.SUPABASE_ROW_ID || "main",
    APP_SESSION_SECRET: process.env.APP_SESSION_SECRET || LOCAL_SECRETS.APP_SESSION_SECRET || "",
    MODON_CREDENTIALS_KEY: process.env.MODON_CREDENTIALS_KEY || LOCAL_SECRETS.MODON_CREDENTIALS_KEY || "",
  };
}

function loadLocalSecrets() {
  const filePath = path.join(ROOT, "PRIVATE-cloudflare-secrets.txt");
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, "utf8").split(/\r?\n/).reduce((secrets, line) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!match) return secrets;
    const value = match[2].replace(/^(['"])(.*)\1$/, "$2");
    secrets[match[1]] = value;
    return secrets;
  }, {});
}

function isUsableSupabaseKey(value) {
  const key = String(value || "").trim();
  return key.startsWith("eyJ") || key.startsWith("sb_secret_");
}

function loadLocalPreviewState() {
  const candidates = [
    "backup-before-20260709-admin-login-jory2002.json",
    "backup-before-client-handover-clean-20260709-174948.json",
  ];
  for (const filename of candidates) {
    const filePath = path.join(ROOT, filename);
    if (!fs.existsSync(filePath)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
      if (parsed?.data && typeof parsed.data === "object") return sanitizeLocalPreviewState(parsed.data);
    } catch {
    }
  }
  return sanitizeLocalPreviewState({
    invoices: [],
    products: [],
    customers: [],
    employees: [],
    suppliers: [],
    personalDebts: [],
    customerDebtPayments: [],
    purchaseInvoices: [],
    supplierDebts: [],
    supplierPayments: [],
    deliveryOrders: [],
    deliveryInvoices: [],
    invoiceAudits: [],
    auditLogs: [],
    webhookLogs: [],
    stockMovements: [],
    vouchers: [],
    cashTransactions: [],
    settings: {},
    dataRevision: 1,
  });
}

function sanitizeLocalPreviewState(value) {
  const state = structuredClone(value || {});
  state.settings ||= {};
  state.settings.storageConnected = true;
  state.settings.connected = false;
  state.settings.localPreview = true;
  state.settings.storageMessage = "معاينة محلية - لا تؤثر على بيانات الموقع المنشور";
  state.currentUserId = null;
  state.activeEmployeeId = "all";
  state.reportEmployeeId = "all";
  state.dataRevision = Number(state.dataRevision || 1);
  state.dataUpdatedAt ||= new Date().toISOString();
  if (state.adminLogin) delete state.adminLogin.passwordHash;
  for (const employee of state.employees || []) {
    delete employee.password;
    delete employee.passwordHash;
    delete employee.modonPassword;
    delete employee.modonToken;
  }
  return state;
}

http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || `${HOST}:${PORT}`}`);
    if (url.pathname.startsWith("/api/")) {
      if (LOCAL_PREVIEW_MODE && await handleLocalPreviewApi(req, res, url)) return;
      const worker = await loadWorker();
      const body = ["GET", "HEAD"].includes(req.method) ? undefined : await readBody(req);
      const request = new Request(url, { method: req.method, headers: req.headers, body });
      const response = await worker.default.fetch(request, workerEnv(), {});
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
      res.end(Buffer.from(await response.arrayBuffer()));
      return;
    }
    serveStatic(res, url.pathname);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ status: false, msg: error.message || "Server error" }));
  }
}).listen(PORT, HOST, () => {
  console.log(`Jouri accounting app: http://${HOST}:${PORT}`);
  if (LOCAL_PREVIEW_MODE) console.log("Local preview mode: production data is not connected or modified.");
});

async function handleLocalPreviewApi(req, res, url) {
  if (url.pathname === "/api/store/status" && req.method === "GET") {
    return sendJson(res, 200, {
      status: true,
      configured: true,
      preview: true,
      msg: "المعاينة المحلية جاهزة",
      revision: Number(localPreviewState.dataRevision || 1),
      updatedAt: localPreviewState.dataUpdatedAt || null,
    });
  }

  if (url.pathname === "/api/auth/login" && req.method === "POST") {
    const body = await readJsonBody(req);
    if (!String(body.username || "").trim() || !String(body.password || "")) {
      return sendJson(res, 400, { status: false, msg: "اكتب اسم المستخدم وكلمة المرور." });
    }
    return sendJson(res, 200, {
      status: true,
      userId: "admin",
      displayName: "الإدارة - معاينة محلية",
      token: LOCAL_PREVIEW_TOKEN,
      preview: true,
    });
  }

  const authorization = String(req.headers.authorization || "");
  if (authorization !== `Bearer ${LOCAL_PREVIEW_TOKEN}`) {
    return sendJson(res, 401, { status: false, code: "AUTH_REQUIRED", msg: "سجل الدخول للمتابعة." });
  }

  if (url.pathname === "/api/store" && req.method === "GET") {
    return sendJson(res, 200, {
      status: true,
      data: sanitizeLocalPreviewState(localPreviewState),
      updatedAt: localPreviewState.dataUpdatedAt || null,
      meta: { provider: "local-preview", preview: true },
    });
  }

  if (url.pathname === "/api/store" && ["POST", "PUT"].includes(req.method)) {
    const body = await readJsonBody(req);
    if (!body.state || typeof body.state !== "object") {
      return sendJson(res, 400, { status: false, msg: "state is required" });
    }
    localPreviewState = sanitizeLocalPreviewState(body.state);
    bumpLocalPreviewRevision();
    return sendJson(res, 200, {
      status: true,
      revision: localPreviewState.dataRevision,
      updatedAt: localPreviewState.dataUpdatedAt,
      preview: true,
    });
  }

  if (url.pathname === "/api/store/patch" && req.method === "POST") {
    const body = await readJsonBody(req);
    applyLocalPreviewPatch(body.patch);
    bumpLocalPreviewRevision();
    return sendJson(res, 200, {
      status: true,
      revision: localPreviewState.dataRevision,
      updatedAt: localPreviewState.dataUpdatedAt,
      mode: "local-preview",
      preview: true,
    });
  }

  if (url.pathname === "/api/store/backup" && req.method === "GET") {
    return sendJson(res, 200, { status: true, data: sanitizeLocalPreviewState(localPreviewState), preview: true });
  }

  if (["/api/store/init", "/api/store/migrate-modon-cache"].includes(url.pathname) && req.method === "POST") {
    return sendJson(res, 200, { status: true, preview: true });
  }

  if (url.pathname === "/api/modon/cache" && req.method === "GET") {
    return sendJson(res, 200, { status: true, data: null, preview: true });
  }

  if (url.pathname.startsWith("/api/modon/")) {
    return sendJson(res, 503, {
      status: false,
      code: "LOCAL_PREVIEW",
      msg: "Modon غير متاح في المعاينة المحلية. لا يتم إرسال أي طلب خارجي.",
    });
  }

  return sendJson(res, 404, { status: false, msg: "Unknown local preview endpoint" });
}

function applyLocalPreviewPatch(patch) {
  const collections = patch?.collections;
  if (!collections || typeof collections !== "object") return;
  for (const [key, change] of Object.entries(collections)) {
    const current = Array.isArray(localPreviewState[key]) ? localPreviewState[key] : [];
    const rows = new Map(current.map((item) => [String(item.id), item]));
    for (const id of change.deletes || []) rows.delete(String(id));
    for (const item of change.upserts || []) {
      if (item?.id != null) rows.set(String(item.id), structuredClone(item));
    }
    localPreviewState[key] = Array.isArray(change.order)
      ? change.order.map((id) => rows.get(String(id))).filter(Boolean)
      : [...rows.values()];
  }
}

function bumpLocalPreviewRevision() {
  localPreviewState.dataRevision = Number(localPreviewState.dataRevision || 1) + 1;
  localPreviewState.dataUpdatedAt = new Date().toISOString();
}

async function readJsonBody(req) {
  const body = await readBody(req);
  try {
    return JSON.parse(body.toString("utf8") || "{}");
  } catch {
    return {};
  }
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-App-Version": "2026.08.01-form-reset-v61",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Expose-Headers": "X-App-Version",
  });
  res.end(JSON.stringify(payload));
  return true;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function serveStatic(res, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(ROOT, `.${decodeURIComponent(requested)}`);
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, {
    "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  fs.createReadStream(filePath).pipe(res);
}
