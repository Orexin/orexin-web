// CSS
import './../css/style.css';
import 'typicons.font/src/font/typicons.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';
import '@splidejs/splide/dist/css/splide.min.css';
import '../components/navbar';

//JS
import AOS from 'aos';
import Splide from '@splidejs/splide';
import * as skew from './onscroll-skew';
import * as underline from './shifting-underline';

document.addEventListener('DOMContentLoaded', function (event) {
	document.getElementById('preloader').style.display = 'none';
	AOS.init({ once: true });
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';

	var elms = document.getElementsByClassName('splide');
	for (var i = 0, len = elms.length; i < len; i++) {
		new Splide(elms[i]).mount();
	}
});

underline.shiftingUnderline();
//skew.onscrollSkew();
