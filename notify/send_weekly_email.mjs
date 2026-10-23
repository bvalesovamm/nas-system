// ============================================================
// Pondělní e-mail: co nás tento týden čeká
// Čte úkoly a kontroly z Firestore (plan/martin) a pošle souhrn.
// Spouští ho GitHub Actions (viz .github/workflows/tydenni-email.yml).
// ============================================================
import admin from "firebase-admin";
import nodemailer from "nodemailer";

// ---------- Firestore ----------
const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();

const snap = await db.doc("plan/martin").get();
if (!snap.exists) { console.error("Dokument plan/martin neexistuje."); process.exit(1); }
const DB = snap.data().data || {};

// ---------- Datumové pomůcky (vše v Europe/Prague) ----------
const TZ = "Europe/Prague";
const now = new Date();
const todayIso = now.toLocaleDateString("sv-SE", { timeZone: TZ }); // YYYY-MM-DD
const today = new Date(todayIso + "T00:00:00");
const monday = new Date(today);
{ let o = monday.getDay() - 1; if (o < 0) o = 6; monday.setDate(monday.getDate() - o); }
const sunday = new Date(monday); sunday.setDate(sunday.getDate() + 6);
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const DAYS_CZ = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
const fmt = s => { const d = new Date(s + "T00:00:00"); return `${DAYS_CZ[d.getDay()]} ${d.getDate()}. ${d.getMonth() + 1}.`; };

// Opakované úkoly: padne výskyt do tohoto týdne?
function occursInWeek(t) {
  const r = t.repeat; if (!r) return null;
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    if (r.freq === "daily") return iso(d);
    if (r.freq === "weekly" && d.getDay() === (r.weekday ?? 1)) return iso(d);
    if (r.freq === "monthly") {
      const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      if (d.getDate() === Math.min(r.day || 1, lastDay)) return iso(d);
    }
    if (r.freq === "yearly" && d.getMonth() === (r.month ?? 0) && d.getDate() === (r.day || 1)) return iso(d);
  }
  return null;
}

// ---------- Sběr úkolů ----------
const isDone = t => t.done || t.status === "Hotovo" || t.status === "Splněno";
const all = [
  ...(DB.adminTasks || []).map(t => ({ ...t, zdroj: "Úkoly" })),
  ...(DB.tasks || []).map(t => ({ ...t, zdroj: "Martin" }))
].filter(t => !isDone(t));

const overdue = [], thisWeek = [];
for (const t of all) {
  let dIso = null;
  if (t.dueDate && /^\d{4}-\d{2}-\d{2}/.test(t.dueDate)) dIso = t.dueDate.slice(0, 10);
  const occ = occursInWeek(t);
  if (dIso && dIso < todayIso && !t.repeat) { overdue.push({ ...t, kdy: dIso }); continue; }
  const eff = (dIso && dIso >= iso(monday) && dIso <= iso(sunday)) ? dIso : occ;
  if (eff) thisWeek.push({ ...t, kdy: eff });
}
thisWeek.sort((a, b) => a.kdy.localeCompare(b.kdy));
overdue.sort((a, b) => a.kdy.localeCompare(b.kdy));
const wednesday = thisWeek.filter(t => new Date(t.kdy + "T00:00:00").getDay() === 3);

// ---------- Kontroly u lékařů (14 dní dopředu + zmeškané volání) ----------
const in14 = new Date(today); in14.setDate(in14.getDate() + 14);
const appts = (DB.appointments || []).filter(a => a.budouciDate && a.budouciDate >= todayIso && a.budouciDate <= iso(in14))
  .sort((a, b) => a.budouciDate.localeCompare(b.budouciDate));
const calls = (DB.appointments || []).filter(a => a.terminVolaniDate && a.terminVolaniDate <= iso(sunday))
  .sort((a, b) => a.terminVolaniDate.localeCompare(b.terminVolaniDate));

// ---------- Revize a údržba (po termínu + do 21 dní) ----------
const in21 = new Date(today); in21.setDate(in21.getDate() + 21);
const maint = (DB.maintenance || []).filter(m => m.dueDate && m.dueDate <= iso(in21))
  .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

// ---------- E-mail ----------
const esc = s => String(s || "").replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const li = t => { const badge = [t.category, t.zdroj === "Martin" ? "Martin" : ""].filter(Boolean).join(" · "); return `<li><b>${esc(t.title)}</b>${badge ? ` <span style="color:#888">(${esc(badge)})</span>` : ""} — ${fmt(t.kdy)}${t.contact ? `<br><span style="color:#666;font-size:13px">${esc(t.contact).replace(/\n/g, "<br>")}</span>` : ""}</li>`; };
const section = (title, items, color) => items.length
  ? `<h3 style="color:${color};margin:18px 0 6px">${title}</h3><ul style="margin:0;padding-left:20px;line-height:1.6">${items.join("")}</ul>` : "";

const html = `
<div style="font-family:sans-serif;max-width:640px">
  <h2 style="margin-bottom:4px">Náš systém — týden ${monday.getDate()}. ${monday.getMonth() + 1}. až ${sunday.getDate()}. ${sunday.getMonth() + 1}.</h2>
  <p style="color:#666;margin-top:0">Pondělní souhrn, ať se všechno stihne do středeční porady.</p>
  ${section("⚠️ Po termínu", overdue.map(li), "#b33")}
  ${section("📌 Středa — porada", wednesday.map(li), "#8a6d1a")}
  ${section("🗓 Tento týden", thisWeek.filter(t => !wednesday.includes(t)).map(li), "#2c4f6b")}
  ${section("🩺 Kontroly u lékařů (14 dní)", appts.map(a => `<li><b>${esc(a.ambulance)}</b>${a.lekar ? " · " + esc(a.lekar) : ""} — ${fmt(a.budouciDate)}${a.cas ? " v " + esc(a.cas) : ""}${a.kde ? `<br><span style="color:#666;font-size:13px">${esc(a.kde)}</span>` : ""}</li>`), "#2c6b4f")}
  ${section("🔧 Revize a údržba (po termínu + do 3 týdnů)", maint.map(m => `<li><b>${esc(m.name)}</b>${m.kind === "Naše údržba" ? " (naše údržba)" : ""} — ${m.dueDate < todayIso ? "⚠ po termínu, mělo být " : ""}${fmt(m.dueDate)}${m.contact ? ` · ${esc(m.contact)}` : ""}${m.phone ? ` · <a href="tel:${esc(m.phone)}">${esc(m.phone)}</a>` : ""}${m.note ? `<br><span style="color:#666;font-size:13px">${esc(m.note)}</span>` : ""}</li>`), "#2c4f6b")}
  ${section("☎️ Zavolat / objednat", calls.map(a => `<li><b>${esc(a.ambulance)}</b> — volat ${fmt(a.terminVolaniDate)}${a.telefon ? ` · <a href="tel:${esc(a.telefon)}">${esc(a.telefon)}</a>` : ""}</li>`), "#8a6d1a")}
  ${!overdue.length && !thisWeek.length && !appts.length && !calls.length && !maint.length ? "<p>🎉 Tento týden nic nehoří — žádné termíny.</p>" : ""}
  <p style="color:#999;font-size:12px;margin-top:24px">Otevřít appku: https://bvalesovamm.github.io/nas-system/</p>
</div>`;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +(process.env.SMTP_PORT || 465),
  secure: +(process.env.SMTP_PORT || 465) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

const to = (process.env.MAIL_TO || "").split(",").map(s => s.trim()).filter(Boolean);
await transporter.sendMail({
  from: `"Náš systém" <${process.env.SMTP_USER}>`,
  to,
  subject: `📋 Týden ${monday.getDate()}. ${monday.getMonth() + 1}. — ${overdue.length ? overdue.length + " po termínu, " : ""}${thisWeek.length} úkolů, ${appts.length} kontrol`,
  html
});
console.log(`E-mail odeslán na: ${to.join(", ")} (${overdue.length} po termínu, ${thisWeek.length} tento týden, ${appts.length} kontrol)`);
