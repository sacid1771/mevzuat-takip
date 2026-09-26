// Uygulamanın "ana ekrana ekle" ile kurulabilmesi için. Önbellek tutmaz, her zaman güncel sürümü açar.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
