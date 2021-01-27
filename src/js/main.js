// CSS
import './../css/style.css';
import 'typicons.font/src/font/typicons.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';

//JS
import AOS from 'aos';
import * as skew from './onscroll-skew';
import * as underline from './shifting-underline';

document.addEventListener('DOMContentLoaded', function (event) {
	document.getElementById('preloader').style.display = 'none';
	AOS.init({ once: true });
});

underline.shiftingUnderline();
//skew.onscrollSkew();
