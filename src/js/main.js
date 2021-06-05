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

window.onload = function () {
	// ✨ aestetic title ✨
	if (document.title === 'Web-development na míru | Orexin Solutions') document.title = 'Orexin Solutions';

	// if preloader exists yeet out preloader
	if(document.getElementById('preloader')) {
		document.getElementById('preloader').style.display = 'none';
		document.getElementById('preloader').classList.remove('loading');
	}

	// sub-pages-paralax
	window.addEventListener('scroll', function () {
		let container = document.getElementsByClassName('uvod-subpages-container');
		let title = document.getElementsByClassName('uvod-subpages-title');
		var value = window.scrollY/2;
		for (var i = 0; i < container.length; i++) {
			container[i].style.marginTop = `-${value + 0.5}px`;
			title[i].style.marginTop = `+${value + 0.15}px`;
		}
	});

	// scroll to top btn
	if(document.getElementById('scrollup-btn')) {
		var scrollupBtn = document.getElementById('scrollup-btn');

		window.onscroll = function () {
			scrollFunction();
		};
	
		function scrollFunction() {
			if (window.scrollY > 20) {
				scrollupBtn.style.display = 'block';
			} else {
				scrollupBtn.style.display = 'none';
			}
		}
	
		scrollupBtn.addEventListener('click', () => {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		});
	}
};

// offline
window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/src/404/offline.js");
  }
});