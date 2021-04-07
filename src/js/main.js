// CSS
import 'normalize.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';
import './../css/main.css';
import './../css/components/keyframes.css';
import 'typicons.font/src/font/typicons.css';

// COMPONENTS
import '../components/navbar';
import '../components/footer';

//JS
import AOS from 'aos';
import * as underline from './shifting-underline';

window.onload = function () {
	// AOS
	AOS.init({ once: true });
	// ✨ aestetic title ✨
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';
	// yeet out preloader
	document.getElementById('preloader').style.display = 'none';
};

underline.shiftingUnderline();
