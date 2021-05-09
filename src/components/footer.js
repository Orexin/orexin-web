import './../css/components/footer.css';

const logoWhite = require('./../img/logos/logo-white.png');

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
			<a href="/contact.html" class="footer-a">Jdeme na to</a>
		</div>
		<div class="upper">
			<img src=${logoWhite} alt="Orexin White Logo" </div>
			<h3>Orexin Solutions 2021</h3>
			<div class="socials socials-hover">
				<a href="https://www.facebook.com/OrexinEcontech" target="_blank" rel="noopener">
					<span class="typcn typcn-social-facebook-circular"></span>
				</a>
				<a href="https://www.instagram.com/orexin_econtech" target="_blank" rel="noopener">
					<span class="typcn typcn-social-instagram-circular"></span>
				</a>
				<a href="https://twitter.com/EcontechOrexin" target="_blank" rel="noopener">
					<span class="typcn typcn-social-twitter-circular"></span>
				</a>
				<a href="https://www.youtube.com/channel/UCv5YedhtfaqJZhJHBlPr5cg" target="_blank" rel="noopener">
					<span class="typcn typcn-social-youtube-circular"></span>
				</a>
				<a href="https://github.com/Orexin" target="_blank" rel="noopener">
					<span class="typcn typcn-social-github-circular"></span>
				</a>
				<a href="https://linkedin.com/company/orexin-solutions" target="_blank" rel="noopener">
					<span class="typcn typcn-social-linkedin-circular"></span>
				</a>
			</div>
		</div>
	</div>
	<div class="nobody-cares">
		<a href="/faq.html" class="footer-a">Nejčastější dotazy</a>
		<a href="/privacy.html" class="footer-a">Ochrana osobních údajů</a>
		<a href="/terms-and-conditions.html" class="footer-a">Obchodní podmínky</a>
	</div>
		`;
	}
}

customElements.define('footer-wrapper', Footer);
