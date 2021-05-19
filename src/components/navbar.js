import './../css/components/navbar.css';

//const logoWhite = require('./../img/logos/logo-white-sm.png');
//const logoGrad = require('./../img/logos/logo-gradient-sm.png');
const svgLogoWhite = require('./../img/logos/logo-white-sm.svg');
const svgLogoGrad = require('./../img/logos/logo-gradient-sm.svg');


class Navbar extends HTMLElement {
	constructor() {
		super();

		// ...Event listeners etc..
	}

	// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
	// https://youtu.be/otCpCn0l4Wo?t=17

	// connectedCallback: Invoked each time the custom element is
	// appended into a document-connected element.
	//This will happen each time the node is moved,
	//and may happen before the element's contents have been fully parsed.

	connectedCallback() {
		this.innerHTML = `
<div class="logo">
	<a href="index.html">
		<div id="nav-logo"></div>
	</a>
</div>
<div class="nav-set">
	<div class="nav-links">
		<ul>
			<li class="nav-li">
				<a href="/index.html">Úvod</a>
			</li>
			<li class="nav-li">
				<a href="/about.html">O&nbsp;nás</a>
			</li>
			<li class="nav-li">
				<a href="/services.html">Služby</a>
			</li>
			<li class="nav-li">
				<a href="/blog.html">Blog</a>
			</li>
			<li class="nav-li">
				<a href="/partnership.html">Partnerství</a>
			</li>
		</ul>
	</div>
</div>
<div class="nav-actions">
	<a href="#" class="nav-login-btn">Login</a>
	<a href="/contact.html" id="fancy-nav-btn" class="fancy-btn-trans">Kontakt</a>
</div>
		`;

		// Hide on scroll anim
		const nav = document.querySelector('navbar-wrapper');
		const navLogo = document.querySelector('#nav-logo');
		const kontaktBtn = document.querySelector('#fancy-nav-btn');
		const navLi = document.getElementsByClassName('nav-li');

		var prevScrollpos = window.pageYOffset;
		var currentScrollPos = 0;

		document.getElementById('nav-logo').innerHTML = svgLogoWhite;

		document.onscroll = function () {
			// Hide navbar
			currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				nav.style.top = '0';
			} else {
				nav.style.top = '-120px'; //default -80px
			}
			prevScrollpos = currentScrollPos;

			//White nav out
			if (document.documentElement.scrollTop >= 150) {
				nav.classList.add('whited');
				navLogo.innerHTML = svgLogoGrad;
				//navLogo.style.content = `url(${logoGrad})`
				kontaktBtn.classList.add('fancy-btn-trans-whited')
				console.log('kokoti')
				for (var i = 0; i < navLi.length; i++) {
					navLi[i].classList.remove('nav-li-white-hover')
					navLi[i].classList.add('nav-li-violet-hover')
				}
			} else {
				nav.classList.remove('whited');
				navLogo.innerHTML = svgLogoWhite;
				//navLogo.style.content = `url(${logoWhite})`
				kontaktBtn.classList.remove('fancy-btn-trans-whited')
				for (var i = 0; i < navLi.length; i++) {
					navLi[i].classList.add('nav-li-white-hover')
					navLi[i].classList.remove('nav-li-violet-hover')
				}
			}
		};
/* 		var degrees1 = 0, degrees2 = 0;
		const navPath1 = document.querySelector('#nav-emblem-path-1');
		const navPath2 = document.querySelector('#nav-emblem-path-2');

		navLogo.addEventListener('mouseover', () => {
			for(var i = 0; i < 361; i++) {
				navPath1.style.transform = `rotateZ(${i}deg)`;
				degrees1 = i;
				if  (i >= 360) {
					i = 0;
				}
			}
			for(var i = 360; i > 0; i--) {
				navPath2.style.transform = `rotateZ(${i}deg)`;
				degrees2 = i;
				if  (i >= 360) {
					i = 0;
				}
			}
		});

		// spin that fella back
		navLogo.addEventListener('mouseout', () => {

		}); */
/* 		window.addEventListener('scroll', function () {
			const navPath1 = document.querySelector('#nav-emblem-path-1');
			const navPath2 = document.querySelector('#nav-emblem-path-2');
			navPath1.style.animationPlayState = "running"
			navPath2.style.animationPlayState = "running"
		}) */
	}
}

customElements.define('navbar-wrapper', Navbar);