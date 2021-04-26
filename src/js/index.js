import '../css/index.css';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js').then(registration => {
		console.log('SW registered: ', registration);
	  }).catch(registrationError => {
		console.log('SW registration failed: ', registrationError);
	  });
	});
  }

document.addEventListener('DOMContentLoaded', function () {
	var elms = document.getElementsByClassName('splide');
	for (var i = 0, len = elms.length; i < len; i++) {
		new Splide(elms[i], {
			type: 'loop',
			autoplay: true,
			interval: 6000,
			speed: 1500,
		}).mount();
	}
});
