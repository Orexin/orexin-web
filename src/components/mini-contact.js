import './../css/components/mini-contact.css';

const logoWhite = require('./../img/logos/logo-white.png');
var checkedState1, checkedState2, checkedState3;

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
					<label for="jmeno">Username</label>
					<div class="input-icon-wrap">
						<input name="username" id="username" type="text" tabindex="1" />
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
							<input id="web" type="checkbox" ${checkedState1}/>
							<label for="web" tabindex="5">Webová prezentace</label>
						</div>
						<div class="select-box">
							<input id="shop" type="checkbox" ${checkedState2}/>
							<label for="shop" tabindex="6">E-commerence</label>
						</div>
						<div class="select-box">
							<input id="mark" type="checkbox" ${checkedState3}/>
							<label for="mark" tabindex="7">Webová aplikace</label>
						</div>
					</div>
				</div>
				<div class="send-button form-group flex-center">
					<input id="submit" class="btn btn-violet" type="button" tabindex="8" value="Odeslat" />
				</div>
				<p class="gdpr-notice">Odesláním souhlasíte se <a href="/privacy.html" tabindex="9">zpracováním osobních údajů</a>.</p>
			</form>
		</div>
		`;
	}
}

if (window.location.pathname == '/services/web-pres.html') checkedState1 = 'checked'
if (window.location.pathname == '/services/web-app.html') checkedState3 = 'checked'
if (window.location.pathname == '/services/ecommerce.html') checkedState2 = 'checked'

console.log(window.location.pathname)

customElements.define('mini-contact', MiniContact);

// honeyPot
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault()
	if(document.getElementById('username').value !== "") {
		alert('jsi hnusný bot!')
		e.preventDefault()
	}
})