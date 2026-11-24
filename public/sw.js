// Service Worker de nettoyage immédiat pour DRAMA XOXO
// Ce script désactive les anciens caches et garantit que tout appareil charge instantanément la dernière version du code.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((k) => caches.delete(k)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Pas d'interception de cache : requête réseau directe
  return;
});
