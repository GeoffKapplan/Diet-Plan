// Minimal service worker -- just enough to make the app installable as a PWA.
// The app already saves its data via localStorage, so there's no offline data to manage here.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
