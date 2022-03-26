// Intercept all fetch requests
self.addEventListener('fetch', (event) => {
  console.log('[sw] intercepting fetch...', event);

  async function getItem() {
    try {
      const response = await fetch(event.request);
      return response;
      // event.request.url, response.clone()
    } catch (err) {
      console.error(err);
    }
  }

  event.respondWith(getItem);
});
