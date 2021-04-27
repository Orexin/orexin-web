import './../css/components/mini-contact.css';

const logoWhite = require('./../img/logos/logo-white.png');

class MiniContact extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<div class="mini-contact">
			<form>
				<div class="form-group">
					<label for="jmeno">Vaše jméno a příjmení</label>
					<div class="input-icon-wrap">
						<input id="jmeno" type="text" tabindex="1" placeholder="Jan Novák" />
						<span class="typcn typcn-user-outline"></span>
					</div>
				</div>
				<div class="form-group">
					<label for="email">Váš e-mail</label>
					<div class="input-icon-wrap">
						<input id="email" type="text" tabindex="2" placeholder="jnovak@orexin.cz" />
						<span class="typcn typcn-mail"></span>
					</div>
				</div>
				<div class="form-group">
					<label for="select-boxes">Služby</label>
					<div id="select-boxes">
						<div class="select-box">
							<input id="web" type="checkbox" />
							<label for="web" tabindex="5">Webová prezentace</label>
						</div>
						<div class="select-box">
							<input id="shop" type="checkbox" checked />
							<label for="shop" tabindex="6">E-commerence</label>
						</div>
						<div class="select-box">
							<input id="mark" type="checkbox" />
							<label for="mark" tabindex="7">Webová aplikace</label>
						</div>
					</div>
				</div>
				<div class="send-button form-group flex-center">
					<input class="btn btn-violet" type="button" tabindex="8" value="Odeslat" />
				</div>
				<p class="gdpr-notice">Odesláním souhlasíte se <a href="/privacy.html" tabindex="9">zpracováním osobních údajů</a>.</p>
			</form>
		</div>
		`;
	}
}

customElements.define('mini-contact', MiniContact);
