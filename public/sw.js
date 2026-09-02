// Cache-first for hashed build assets, since GitHub Pages doesn't allow custom Cache-Control headers.
const CACHE_NAME = "mellemrum-static-v1";
const STATIC_ASSET_REGEX =
  /\/assets\/|\.(?:js|css|woff2?|jpe?g|png|webp|svg|gif)$/;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !STATIC_ASSET_REGEX.test(request.url)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) {
        return cached;
      }

      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    }),
  );
});
