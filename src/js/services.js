import '../css/services.css';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
//import svgRozcestnik from './../img/svg-services/svg-rozcestnik.svg';
import svgRozcestnikWebPres from './../img/svg-services/svg-rozcestnik-web-pres.svg';
import svgRozcestnikWebApp from './../img/svg-services/svg-rozcestnik-web-app.svg';
import svgRozcestnikEcommerce from './../img/svg-services/svg-rozcestnik-ecommerce.svg';
import svgGrafika from './../img/svg-services/svg-grafika-na-miru.svg';
import svgBezpeci from './../img/svg-services/svg-bezpeci.svg';
import svgSprava from './../img/svg-services/svg-sprava.svg';
import svgPodpora from './../img/svg-services/svg-technicka-podpora.svg';
import svgPlneni from './../img/svg-services/svg-plneni-obsahu.svg';
import svgFotky from './../img/svg-services/svg-fotky.svg';
import svgCustoms from './../img/svg-services/svg-tvorba-grafiky.svg';

// inject SVGs
document.getElementById('svg-rozcestnik-web-pres').innerHTML = svgRozcestnikWebPres;
document.getElementById('svg-rozcestnik-web-app').innerHTML = svgRozcestnikWebApp;
document.getElementById('svg-rozcestnik-ecommerce').innerHTML = svgRozcestnikEcommerce;
document.getElementById('svg-grafika').innerHTML = svgGrafika;
document.getElementById('svg-bezpeci').innerHTML = svgBezpeci;
document.getElementById('svg-sprava').innerHTML = svgSprava;
document.getElementById('svg-podpora').innerHTML = svgPodpora;
document.getElementById('svg-plneni').innerHTML = svgPlneni;
document.getElementById('svg-fotky').innerHTML = svgFotky;
document.getElementById('svg-customs').innerHTML = svgCustoms;

// rozcestnik linky
document.getElementById('svg-sluzby-rozcestnik-web-pres').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/services/web-pres.html`;
});

document.getElementById('svg-sluzby-rozcestnik-web-app').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/services/web-app.html`;
});

document.getElementById('svg-sluzby-rozcestnik-ecommerce').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/services/ecommerce.html`;
});

// Waypoints => onscroll events handeling
var grafikaNaMiru = new Waypoint({
	element: document.getElementById('grafika'),
	handler: function () {
		console.log('svg-sluzby-grafika-na-miru-web ');
		document.getElementById('svg-sluzby-grafika-na-miru-blueprint').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-grafika-na-miru-blueprint').style.opacity = 1;
		document.getElementById('svg-sluzby-grafika-na-miru-web').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-grafika-na-miru-web').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-web-pres'),
	handler: function () {
		console.log('svg-sluzby-grafika-na-miru-web ');
		this.element.style.transform = 'translate(0,0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-web-app'),
	handler: function () {
		console.log('svg-sluzby-grafika-na-miru-web ');
		this.element.style.transform = 'translateY(0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-ecommerce'),
	handler: function () {
		console.log('svg-sluzby-grafika-na-miru-web ');
		this.element.style.transform = 'translate(0,0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});
