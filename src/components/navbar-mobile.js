import './../css/components/navbar-mobile.css';

//const logoWhite = require('./../img/logos/logo-white-sm.png');
//const logoGrad = require('./../img/logos/logo-gradient-sm.png');
const svgLogoWhite = require('./../img/logos/logo-white-sm.svg');

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
			<div class="row flex-center">
				<div class="logo col">
					<a href="/index.html" class="row">
						<div id="nav-logo" class="col flex-center"></div>
						<span class="col flex-center">Orexin</span>
					</a>
				</div>
				<div id="menu" class="col flex-center">
				<span class="typcn typcn-th-menu"></span>
				</div>
			</div>
		`;
		document.getElementById('nav-logo').innerHTML = svgLogoWhite;
		this.id='navbar-mobile-wrapper'
		
		document.getElementById('menu').addEventListener('click', () => {
			const links = document.getElementsByClassName("nav-link");
			const container = document.getElementById('navbar-mobile-wrapper')
			for(var i = 0; i < links.length; i++ ) {
				if (links[i].style.display === "flex") {
					links[i].style.display = "none";
					links[i].style.flexDirection = 'unset'
					links[i].style.justifyContent = 'unset'
					links[i].style.alignItems = 'unset'
					container.style.height='12.5vh'
				} else {
					links[i].style.display = "flex";
					links[i].style.flexDirection = 'row'
					links[i].style.justifyContent = 'center'
					links[i].style.alignItems = 'center'
					container.style.height='100vh'
				}
			}
		})
	}
}



customElements.define('navbar-mobile-wrapper', NavbarMobile);