const hasBrowserSupport = 'serviceWorker' in navigator;

async function registerServiceWorker() {
  if (!hasBrowserSupport)
    return console.log("[sw] browser doesn't support service workers");
  try {
    const registration = await navigator.serviceWorker.register(
      '/service-worker.js',
      {
        scope: '/'
      }
    );
    console.log('[sw] registered under scope: ', registration.scope);
  } catch (err) {
    console.log('[sw] registration failed', err);
  }
}

async function showRegisteredWorkers(unregisterAll = false) {
  const registeredWorkers = await navigator.serviceWorker.getRegistrations();
  console.log('registeredWorkers:', registeredWorkers);
  if (unregisterAll) {
    for (let worker of registeredWorkers) {
      worker.unregister();
    }
  }
}

(async function init() {
  await registerServiceWorker();
  await showRegisteredWorkers();
})();

// Demo code...
document.querySelector('#fetch-request').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => console.log(posts));
});
