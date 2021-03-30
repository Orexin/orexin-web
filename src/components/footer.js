const logoWhite = require('../img/Emblem_white.svg');

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
	<div class="footer-content">
		<div class="top-banner">
			<h2>Připraveni?</h2>
			<p>Sejdeme se, promluvíme si o tom a dohodneme se. </br> <strong>Kafe je na nás.</strong></p>
			<a href="#">Jdeme na to</a>
		</div>
		<div class="upper">
			<img src=${logoWhite} alt="Orexin White Logo" </div>
			<h3>Orexin Solutions 2021</h3>
			<div class="socials">
				<a href="https://www.facebook.com/OrexinEcontech" target="_blank"><span
						class="typcn typcn-social-facebook-circular"></span></a>
				<a href="https://www.instagram.com/orexin_econtech" target="_blank"><span
						class="typcn typcn-social-instagram-circular"></span></a>
				<a href="https://twitter.com/EcontechOrexin" target="_blank"><span
						class="typcn typcn-social-twitter-circular"></span></a>
				<a href="https://github.com/Orexin" target="_blank"><span class="typcn typcn-social-github-circular"></span></a>
			</div>
		</div>
	</div>
	<div class="nobody-cares">
		<a href="#">Nejčastější dotazy</a>
		<a href="#">Ochrana osobních údajů</a>
		<a href="#">Předání práv webu</a>
		<a href="#">Obchodní podmínky</a>
	</div>
		`;
	}
}

customElements.define('footer-wrapper', Footer);
