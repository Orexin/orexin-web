// CSS
import './../css/style.css';
import 'typicons.font/src/font/typicons.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';
import '@splidejs/splide/dist/css/splide.min.css';

// COMPONENTS
import '../components/navbar';
import '../components/footer';

//JS
import AOS from 'aos';
import Splide from '@splidejs/splide';
import * as underline from './shifting-underline';

document.addEventListener('DOMContentLoaded', function (event) {
	AOS.init({ once: true });
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';
	//document.getElementById('preloader').style.display = 'none';
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

underline.shiftingUnderline();

// Testing, idk hazelo to error
/* module.exports = {
	testFunct: function () {
		return true;
	},
}; */
