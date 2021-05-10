import '../css/index.css';
import './../components/mini-contact';
import 'waypoints/lib/noframework.waypoints.min.js';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

// SVGs
import svgWebPres from './../img/index-web-pres.svg';
import svgWebApp from './../img/index-web-app.svg';
import svgEcommerce from './../img/index-ecommerce.svg';

// inject SVGs
document.getElementById('svg-web-pres').innerHTML = svgWebPres;
document.getElementById('svg-web-app').innerHTML = svgWebApp;
document.getElementById('svg-ecommerce').innerHTML = svgEcommerce;

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js').then(registration => {
		console.log('SW registered: ', registration);
	  }).catch(registrationError => {
		console.log('SW registration failed: ', registrationError);
	  });
	});
  }

// Waypoints
var nabidka = new Waypoint({
	element: document.getElementById('nabidka'),
	offset: '90%',
	handler: function () {
		document.getElementById('card-1').style.transform = 'translateY(0)';
		document.getElementById('card-1').style.opacity = 1;
		document.getElementById('card-2').style.transform = 'translateY(0)';
		document.getElementById('card-2').style.opacity = 1;
		document.getElementById('card-3').style.transform = 'translateY(0)';
		document.getElementById('card-3').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

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
