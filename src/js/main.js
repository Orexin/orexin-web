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
// import * as underline from './shifting-underline';

window.onload = function () {
	// AOS
	AOS.init({ once: true });
	// ✨ aestetic title ✨
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';
	// yeet out preloader
	document.getElementById('preloader').style.display = 'none';
};

// underline.shiftingUnderline();

// sub-pages-paralax
window.addEventListener('scroll', function(){
	let container = document.getElementsByClassName('uvod-subpages-container');
	let title = document.getElementsByClassName('uvod-subpages-title');
	var value = window.scrollY;
	for (var i = 0; i < container.length; i++) {
		container[i].style.marginTop = `-${value + 0.5}px`;
		title[i].style.marginTop = `+${value + 0.15}px`;
	}
})
