import '@css/components/navbar-mobile.css';

//const logoWhite = require('./../img/logos/logo-white-sm.png');
//const logoGrad = require('./../img/logos/logo-gradient-sm.png');
const svgLogoWhite = require('@img/logos/logo-white-sm.svg');

class NavbarMobile extends HTMLElement {
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
			<div class="nav-link"></div>
			<a href="/index.html" class="nav-link">
				<span>Úvod</span>
			</a>
			<a href="/about.html" class="nav-link">
				<span>O nás</span>
			</a>
			<a href="/services.html" class="nav-link">
				<span>Služby</span>
			</a>
			<a href="/partnership.html" class="nav-link">
				<span>Partnerství</span>
			</a>
			<a href="/contact.html" class="nav-link">
				<span>Kontakt</span>
			</a>
			<div class="nav-link"></div>
			<div class="nav-link">
				<a href="/console.html" class="fancy-btn-trans">
					Console
				</a>
				<a href="https://www.console.orexin.cz/login" class="fancy-btn-trans">
					Login
				</a>
			</div>
			<div class="nav-link"></div>
			<div class="row">
				<div class="mobile-logo flex-center">
					<a href="/index.html" class="row">
						<div id="nav-mobile-logo" class="flex-center"></div>
						<span class=" flex-center">Orexin</span>
					</a>
				</div>
				<div id="menu" class="not-active">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		`;
		document.querySelector('#nav-mobile-logo').innerHTML = svgLogoWhite;
		this.id='navbar-mobile-wrapper'
		const menu = document.getElementById('menu')

		menu.addEventListener('click', () => {
			const links = document.getElementsByClassName("nav-link");
			const container = document.getElementById('navbar-mobile-wrapper')

			if(menu.className == "not-active")
				menu.className = "active"
			else
				menu.className = "not-active"

			for(var i = 0; i < links.length; i++ ) {
				if (links[i].style.display === "flex") {
					links[i].style.display = "none";
					links[i].style.flexDirection = 'unset'
					links[i].style.alignItems = 'unset'
					container.style.height='12.5vh'
				} else {
					links[i].style.display = "flex";
					links[i].style.flexDirection = 'row'
					links[i].style.alignItems = 'center'
					container.style.height='100vh'
				}
			}
		})
	}
}

class NavbarMobileSidebar extends HTMLElement {
	constructor() {
		super();

		// ...Event listeners etc..
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="nav-link">
				<a href="/index.html">
					<span>Úvod</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="/about.html">
					<span>O nás</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="/services.html">
					<span>Služby</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="/partnership.html">
					<span>Partnerství</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="/contact.html">
					<span>Kontakt</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="/console.html">
					<span>Console</span>
				</a>
			</div>
			<div class="nav-link">
				<a href="https://www.console.orexin.cz/login">
					<span>Login</span>
				</a>
			</div>
		`;
	}
}

customElements.define('navbar-mobile-wrapper', NavbarMobile);
customElements.define('navbar-mobile-sidebar', NavbarMobileSidebar);