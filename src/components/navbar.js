import './../css/components/navbar.css';

const logoWhite = require('./../img/logos/logo-white-sm.png');
const logoGrad = require('./../img/logos/logo-gradient-sm.png');

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
				<a href="/faq.html">FAQ</a>
			</li>
		</ul>
	</div>
</div>
<div class="nav-actions">
	<a href="#" class="nav-login-btn">Login</a>
	<a href="./contact.html" class="fancy-btn-trans" id="fancy-nav-btn">Kontakt</a>
</div>
		`;

		// Hide on scroll anim
		const nav = document.querySelector('navbar-wrapper');
		const navLogo = document.querySelector('#nav-logo');
		const kontaktBtn = document.querySelector('#fancy-nav-btn');

		var prevScrollpos = window.pageYOffset;
		var currentScrollPos = 0;

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
				navLogo.style.content = `url(${logoGrad})`
				kontaktBtn.classList.add('fancy-btn-trans-whited')
			} else {
				nav.classList.remove('whited');
				navLogo.style.content = `url(${logoWhite})`
				kontaktBtn.classList.remove('fancy-btn-trans-whited')
			}
		};
	}
}

customElements.define('navbar-wrapper', Navbar);
