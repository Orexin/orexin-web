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

const preloader = document.getElementById('preloader')

window.onload = function () {
	// AOS
	AOS.init({ once: true });
	// ✨ aestetic title ✨
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';
	// yeet out preloader
	preloader.style.display = 'none';
	preloader.classList.remove('loading')

	// sub-pages-paralax
	window.addEventListener('scroll', function () {
		let container = document.getElementsByClassName('uvod-subpages-container');
		let title = document.getElementsByClassName('uvod-subpages-title');
		var value = window.scrollY;
		for (var i = 0; i < container.length; i++) {
			container[i].style.marginTop = `-${value + 0.5}px`;
			title[i].style.marginTop = `+${value + 0.15}px`;
		}
	});

	// scroll to top btn
	window.onscroll = function() {scrollFunction()};
	var scrollupBtn = document.getElementById('scrollup-btn');

	function scrollFunction() {
		if (window.scrollY > 20) {
			scrollupBtn.style.display = "block";
		} else {
			scrollupBtn.style.display = "none";
		}
	}

	scrollupBtn.addEventListener('click', () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	})
};