/* DREAD 98 service worker
 * - Code (index.html, manifest, version.json): network-first, so a refresh WITH internet always gets the newest code;
 *   offline it falls back to the last cached copy.
 * - Heavy assets (models, sounds, CDN libraries): cache-first, filled on first use, so the game works offline afterwards.
 * To ship an update: push to GitHub Pages and bump "version" in version.json. Players get it on next open / refresh,
 * or via SETUP > CHECK FOR UPDATES. */
const CODE = 'dread98-code-v3';
const ASSETS = 'dread98-assets-v3';
const CORE = ['./', './index.html', './manifest.json', './version.json', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CODE).then((c) => c.addAll(CORE).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CODE && k !== ASSETS).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

async function networkFirst(req) {
  const cache = await caches.open(CODE);
  try {
    const res = await fetch(req, { cache: 'no-cache' });
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (_) {
    return (await cache.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? cache.match('./index.html') : Response.error());
  }
}
async function cacheFirst(req) {
  const cache = await caches.open(ASSETS);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
  return res;
}
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const cdn = /(^|\.)cdnjs\.cloudflare\.com$|(^|\.)cdn\.jsdelivr\.net$/.test(url.hostname);
  if (url.origin === location.origin) {
    if (url.pathname.indexOf('/assets/') >= 0) { e.respondWith(cacheFirst(req)); return; }
    if (url.pathname.endsWith('/sw.js')) return;
    e.respondWith(networkFirst(req)); return;
  }
  if (cdn) e.respondWith(cacheFirst(req));
});
