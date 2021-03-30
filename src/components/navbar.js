const logoWhite = require('../img/Emblem_white.svg');
const logoGrad = require('../img/Emblem_gradient.svg');

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
	<img src=${logoWhite} class="nav-logo"></img>
	</div>
<div class="nav-set">
	<div class="nav-links">
		<ul>
			<li>
				<a href="./index.html">Úvod</a>
			</li>
			<li>
				<a href="./about.html">O&nbsp;nás</a>
			</li>
			<li>
				<a href="./services.html">Služby</a>
			</li>
			<li>
				<a href="./faq.html">FAQ</a>
			</li>
		</ul>
	</div>
	<div class="nav-actions">
		<div class="burger-menu">
			<div class="line" id="line1"></div>
			<div class="line" id="line2"></div>
			<div class="line" id="line3"></div>
		</div>
	</div>
</div>
<div class="slider">
	<div class="nav-links-slider">
		<ul>
			<li>
				<a href="./index.html">Úvod</a>
			</li>
			<li>
				<a href="./about.html">O&nbsp;nás</a>
			</li>
			<li>
				<a href="./services.html">Služby</a>
			</li>
			<li>
				<a href="./faq.html">FAQ</a>
			</li>
		</ul>
	</div>
</div>
		`;

		// Hide on scroll anim
		const nav = document.querySelector('navbar-wrapper');
		const navLogo = document.querySelector('.nav-logo');

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
				navLogo.setAttribute('src', logoGrad);
			} else {
				nav.classList.remove('whited');
				navLogo.setAttribute('src', logoWhite);
			}
		};
	}
}

customElements.define('navbar-wrapper', Navbar);
