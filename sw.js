const CACHE_NAME = 'schoolrider-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// A pass-through fetch handler.
// This is the minimum requirement for browsers to recognize the app as an installable PWA.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('You are offline. Reconnect to sync SchoolRider.');
    })
  );
});