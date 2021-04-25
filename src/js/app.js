// check if browser supports service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/js/sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', res));
}