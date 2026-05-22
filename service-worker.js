const CACHE_NAME = "law-quiz-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./questions.csv",
  "./teacher.png",
  "./correct.png",
  "./wrong.png",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
