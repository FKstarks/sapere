/* Sapere : fonctionnement hors ligne. Réseau d'abord pour l'app, cache d'abord pour les images. */
var CACHE = 'sapere-20261009-211303';
self.addEventListener('install', function (e) { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'icon-192.png']).catch(function () {}); })); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  var same = url.origin === self.location.origin, lib = url.hostname === 'www.gstatic.com';
  if (!same && !lib) return;
  if (lib || /\/img\//.test(url.pathname)) {
    e.respondWith(caches.open(CACHE).then(function (c) { return c.match(req).then(function (hit) { return hit || fetch(req).then(function (res) { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }); }); }));
    return;
  }
  e.respondWith(fetch(req).then(function (res) { if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); } return res; }).catch(function () { return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); }); }));
});
