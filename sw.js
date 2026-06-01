// Service worker pro "Náš systém"
// Cíl: instalovatelnost (PWA) + offline načtení appky. Data (Firebase) jdou vždy ze sítě.
const CACHE = "nas-system-v1";
const SHELL = ["./", "./index.html", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Externí požadavky (Firebase, fonty) necháme projít na síť beze změny.
  if (url.origin !== self.location.origin) return;

  // Navigace (otevření appky): zkus síť, při výpadku vrať uloženou appku.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }

  // Ostatní vlastní soubory (ikony…): nejdřív cache, pak síť.
  e.respondWith(caches.match(req).then((r) => r || fetch(req)));
});
