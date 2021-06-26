import '@css/components/navbar.css';

const svgLogoWhite = require('@img/logos/logo-white-sm.svg');
const svgLogoGrad = require('@img/logos/logo-gradient-sm.svg');

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
		<div id="navbar">
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
		</div>
		<div id="navbar-mobile">
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
		</div>
				`;

		// Nav
		// Hide on scroll anim
		const nav = document.getElementById('navbar');
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
				kontaktBtn.classList.add('fancy-btn-trans-special-whited')
				for (var i = 0; i < navLi.length; i++) {
					navLi[i].classList.remove('nav-li-white-hover')
					navLi[i].classList.add('nav-li-violet-hover')
				}
			} else {
				nav.classList.remove('whited');
				navLogo.innerHTML = svgLogoWhite;
				//navLogo.style.content = `url(${logoWhite})`
				kontaktBtn.classList.remove('fancy-btn-trans-special-whited')
				for (var i = 0; i < navLi.length; i++) {
					navLi[i].classList.add('nav-li-white-hover')
					navLi[i].classList.remove('nav-li-violet-hover')
				}
			}
		};

		// Mobile nav
		document.querySelector('#nav-mobile-logo').innerHTML = svgLogoWhite;
		const menu = document.getElementById('menu')

		menu.addEventListener('click', () => {
			const links = document.getElementsByClassName("nav-link");
			const container = document.getElementById('navbar-mobile')

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
					document.getElementsByTagName('body')[0].style.overflow = "auto"
				} else {
					links[i].style.display = "flex";
					links[i].style.flexDirection = 'row'
					links[i].style.alignItems = 'center'
					container.style.height='100vh'
					document.getElementsByTagName('body')[0].style.overflow = "hidden"
				}
			}
		})
	}
}

customElements.define('navbar-wrapper', Navbar);
