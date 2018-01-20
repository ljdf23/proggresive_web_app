//we put the sw.js in root for control all the pages//

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing service worker...', event)
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating service worker...', event)
    return self.clients.claim(); //ensure the sw activate correctly// 
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something...', event)
    event.respondWith(fetch(event.request));
});