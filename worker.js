self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('eniams').then(function(cache) {
            return cache.addAll([
                'index.html',
                'style.css',
                'main.js',
            ]);
        })
    );
});
this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).catch(function() {
            return fetch(event.request);
        })
    );
});

fetch('index.html').then(function (response) {
   return response.text();
}).then(function (data) {
    console.log(newContent)
    return data.replace(/id="b"/, "");
});

