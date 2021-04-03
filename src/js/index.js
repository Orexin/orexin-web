import '../css/index.css';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

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
