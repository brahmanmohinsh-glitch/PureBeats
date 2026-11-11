// PureBeats Music Player - Progressive Web App Service Worker (Fast Processing & Offline Cache)
const CACHE_NAME = 'purebeats-v13-seo-fast';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './login.html',
  './style.css',
  './script.js',
  './crypto-js.min.js',
  './dhanda_catalog.js',
  './artists_catalog.js',
  './bollywood_catalog.js',
  './haryanvi_catalog.js',
  './punjabi_catalog.js',
  './bhojpuri_catalog.js',
  './rap_catalog.js',
  './neighbour_catalog.js',
  './oldisgold_catalog.js',
  './betterog_catalog.js',
  './manifest.json',
  './robots.txt',
  './sitemap.xml'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        // Fallback to cached index for HTML navigations
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});

