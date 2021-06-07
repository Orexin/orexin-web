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
	<a href="/index.html">
		<div id="nav-logo"></div>
	</a>
</div>
<div class="nav-set">
	<div class="nav-links">
		<ul>
			<li class="nav-li nav-li-white-hover">
				<a href="/index.html">
					<span>Úvod</span>
				</a>
			</li>
			<li class="nav-li nav-li-white-hover">
				<a href="/about.html">
					<span>O&nbsp;nás</span>
				</a>
			</li>
			<li class="nav-li nav-li-white-hover">
				<a href="/services.html">
					<span>Služby</span>
				</a>
			</li>
			<li class="nav-li nav-li-white-hover">
				<a href="/partnership.html">
					<span>Partnerství</span>
				</a>
			</li>
			<li class="nav-li nav-li-white-hover">
			<a href="/contact.html">
				<span>Kontakt</span>
			</a>
		</li>
		</ul>
	</div>
</div>
<div class="nav-actions">
	<ul>
		<li class="nav-console-btn nav-li nav-li-white-hover">
			<a href="/console.html">
				<span>Console</span>
			</a>
		</li>
	</ul>
	<a href="https://www.console.orexin.cz/login" id="fancy-nav-btn" class="fancy-btn-trans">Login</a>
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

		// hover logo animation
/* 		var degrees1 = 0, degrees2 = 0;
		const navPath1 = document.querySelector('.nav-emblem-path-1');
		const navPath2 = document.querySelector('.nav-emblem-path-2');
		const regeneratorRuntime = require('regenerator-runtime');

		const sleep = (time) => {
			return new Promise((resolve) => setTimeout(resolve, time));
		};

		navLogo.addEventListener('mouseover', () => {
			const logoHover1 = async () => {
				for(var i = 0; i < 361; i++) {
					navPath1.style.transform = `rotateZ(${i}deg)`;
					degrees1 = i;
					if  (i >= 360) {
						i = 0;
					}
					console.log(i)
					await sleep(150);
				}
			}
			const logoHover2 = async () => {
				for(var i = 360; i > -1; i--) {
					navPath2.style.transform = `rotateZ(${i}deg)`;
					degrees2 = i;
					if  (i <= 0) {
						i = 360;
					}
					console.log(i)
					await sleep(150);
				}
			}
			logoHover1()
			logoHover2()
		}); */

		// spin that fella back
/* 		navLogo.addEventListener('mouseout', () => {
			const logoHover = async () => {
				for(var i = 0; i < 361; i++) {
					navPath2.style.transform = `rotateZ(${i}deg)`;
					degrees2 = i;
					if  (i >= 360) {
						i = 0;
					}
					await sleep(5);
				}
				for(var i = 360; i > 0; i--) {
					navPath1.style.transform = `rotateZ(${i}deg)`;
					degrees1 = i;
					if  (i >= 360) {
						i = 0;
					}
					await sleep(5);
				}
			}
			logoHover()
		}); */
	}
}

customElements.define('navbar-wrapper', Navbar);