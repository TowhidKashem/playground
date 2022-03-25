

// Intercept all fetch requests (this will get triggered not just for fetch API calls from JS but also all images, CSS, JS, etc loaded from HTML)
self.addEventListener('fetch', event => {
  console.log('[SW] Fetching Something...', event);

  // event.respondWith(


  //     // Otherwise fetch it from the network as usual

  //        fetch(event.request)
  //         .then(response => {
  //           return caches.open(`dynamic-${DYNAMIC_VERSION}`).then(cache => {
  //             // After fetching, store in cache
  //             // .put() unlike .add() doesn't make a new request, it simply adds what you already fetched to the cache
  //             // Must use .clone() here because response is empty since it can only be used once, so you must return a cloned copy
  //             cache.put(event.request.url, response.clone());
  //             return response;
  //           });
  //         })
  //         .catch(err => console.error(err));


  // );




});










