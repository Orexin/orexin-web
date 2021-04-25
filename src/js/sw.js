// service worker handles file change:
// - installes itself one time and then waiting for next file change
// - activates itself only after browser is closed and opened again
// service worker works only over HTTPS or on localhost
 
// static cache
const staticCacheName = 'site-static-v1';
// dynamic cache
const dynamicCacheName = 'site-dynamic-v1';
// what to add to cache (don't add too much)
const assets = [
   '/',
   '/webpack.dev.js',
   '/webpack.prod.js',
   '/src/index.html',
   '/src/404.html',
   '/src/js/app.js',
   '/src/js/main.js',
   '/src/js/index.js',
   '/src/img/logos/logo-gradient.png',
   '/src/img/logos/logo-white.png',
   '/src/img/logos/logo-gradient-sm.png',
   '/src/img/logos/logo-white-sm.png',
   '/src/css/main.css',
   '/src/css/index.css',
];

// limit cache size
const limitCacheSize = (name, size) => {
    // open the cache we pass in
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            // check if array is over "size", then delete cache starting with the oldest one
            if(keys.length > size)
                cache.delete(keys[0]).then(limitCacheSize(name, size));
        })
    })
};
 
// install service worker event
self.addEventListener('install', evt => {
   console.log('service worker has been installed');
   // Waits for caching to complete
   evt.waitUntil(
       // async task, open cache or create new one
       caches.open(staticCacheName).then(cache => {
           // .add => adds 1 item, .addAll => adds all items
           console.log('caching shell asets');
           cache.addAll(assets);
       })
   );
});
 
// activate service worker event
self.addEventListener('activate', evt => {
   console.log('service worker has been activated');
   evt.waitUntil(
       // get caches keys
       caches.keys().then(keys => {
        console.log(keys)
        // pass in array of promises
        // delete all old caches if their name isn't equal to the new cache name or is they aren't a dymamic cache
        return Promise.all(keys
            .filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
            )
       })
   );
});
 
// fetch event
self.addEventListener('fetch', evt => {
   //console.log('fetch event', evt);
   // fetch assets from cache according to fetch req details
   evt.respondWith(
       caches.match(evt.request).then(cacheRes => {
           // return either cached assets or fetch req details
           return cacheRes || fetch(evt.request).then(fetchRes => {
               // return fetchRes and put in cache
               // fireup dynamic cache on url change
               return caches.open(dynamicCacheName).then(cache => {
                   cache.put(evt.request.url, fetchRes.clone());
                   // limit cache size whenever it starts to put in something new (size < 20 for now)
                   limitCacheSize(dynamicCacheName, 20);
                   return fetchRes;
               })
           });
					 // if user cannot access page in offline mode redirect to fallback page
       }).catch(() => {
           // throw fallback only if page can't load not if anything different can't load
        if(evt.request.url.indexOf('.html') > -1)
            return caches.match('/src/404.html')
       })
   )
});