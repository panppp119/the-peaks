var CACHE_NAME = 'pwa-the-peaks'
var urlsToCache = [
  '/index.html',
  '/static',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

self.addEventListener('activate', (event) => {
  var cacheWhitelist = ['pwa-the-peaks']
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
