// // Intercept all fetch requests
// self.addEventListener('fetch', (event) => {
//   console.log('[sw] intercepting fetch...', event);

//   async function getItem() {
//     try {
//       const response = await fetch(event.request);
//       return response;
//       // event.request.url, response.clone()
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   event.respondWith(getItem);
// });

// Bump these version numbers each time code for a cache is updated
const STATIC_VERSION = 'v8';
const DYNAMIC_VERSION = 'v7';

self.addEventListener('install', (event) => {
  console.log('[sw] Installing Service Worker...', event);

  event.waitUntil(
    caches.open(`static-${STATIC_VERSION}`).then((cache) => {
      console.log('[sw] Precaching App Shell');

      // Cache App Shell
      cache.addAll([
        // HTML
        '/',
        '/index.html',
        // JS
        '/src/js/app.js',
        '/src/js/feed.js',
        '/src/js/material.min.js',
        // CSS
        '/src/css/app.css',
        '/src/css/feed.css',
        // Images
        '/src/images/main-image.jpg',
        // External
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[sw] Activating Service Worker...', event);

  // Delete outdated caches
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (
            key !== `static-${STATIC_VERSION}` &&
            key !== `dynamic-${DYNAMIC_VERSION}`
          ) {
            console.log('[sw] Removing Old Cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

// Intercept all fetch requests (this will get triggered not just for fetch API calls from JS but also all images, CSS, JS, etc loaded from HTML)
self.addEventListener('fetch', (event) => {
  console.log('[sw] Fetching Something...', event);

  event.respondWith(
    caches.match(event.request).then((response) => {
      // If resource exists in cache return cached version
      if (response) {
        return response;
      }
      // Otherwise fetch it from the network as usual
      else {
        return fetch(event.request)
          .then((response) => {
            return caches.open(`dynamic-${DYNAMIC_VERSION}`).then((cache) => {
              // After fetching, store in cache
              // .put() unlike .add() doesn't make a new request, it simply adds what you already fetched to the cache
              // Must use .clone() here because response is empty since it can only be used once, so you must return a cloned copy
              cache.put(event.request.url, response.clone());
              return response;
            });
          })
          .catch((err) => console.error(err));
      }
    })
  );
});
