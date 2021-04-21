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
import svgTraffic from './../img/svg-services/svg-platba-podle-navstevnosti.svg';
import svgDynamika from './../img/svg-services/svg-dynamika.svg';
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
document.getElementById('svg-traffic').innerHTML = svgTraffic;
document.getElementById('svg-dynamika').innerHTML = svgDynamika;
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
var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-web-pres'),
	offset: '90%',
	handler: function () {
		this.element.style.transform = 'translate(0,0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-web-app'),
	offset: '90%',
	handler: function () {
		this.element.style.transform = 'translateY(0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikWebPres = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-ecommerce'),
	offset: '90%',
	handler: function () {
		this.element.style.transform = 'translate(0,0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var grafika = new Waypoint({
	element: document.getElementById('grafika'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-grafika-na-miru-blueprint').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-grafika-na-miru-blueprint').style.opacity = 1;
		document.getElementById('svg-sluzby-grafika-na-miru-web').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-grafika-na-miru-web').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var bezpeci = new Waypoint({
	element: document.getElementById('bezpeci'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-bezpeci-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-bezpeci-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var sprava = new Waypoint({
	element: document.getElementById('sprava'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-sprava-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-sprava-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var podpora = new Waypoint({
	element: document.getElementById('podpora'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-podpora-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-podpora-content').style.opacity = 1;
		document.getElementById('svg-sluzby-podpora-calendar').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-podpora-calendar').style.opacity = 1;
		document.getElementById('svg-sluzby-podpora-clock').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-podpora-clock').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var plneni = new Waypoint({
	element: document.getElementById('plneni'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-plneni-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-plneni-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var fotky = new Waypoint({
	element: document.getElementById('fotky'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-fotky-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-fotky-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var customs = new Waypoint({
	element: document.getElementById('customs'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-customs-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-customs-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});
