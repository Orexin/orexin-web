import '../css/services.css';
import './../components/mini-contact';
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
	window.location.href = `${window.location.origin}/services/web-pres.html`;
});

document.getElementById('svg-sluzby-rozcestnik-web-app').addEventListener('click', (event) => {
	window.location.href = `${window.location.origin}/services/web-app.html`;
});

document.getElementById('svg-sluzby-rozcestnik-ecommerce').addEventListener('click', (event) => {
	window.location.href = `${window.location.origin}/services/ecommerce.html`;
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

var rozcestnikWebApp = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-web-app'),
	offset: '90%',
	handler: function () {
		this.element.style.transform = 'translateY(0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rozcestnikEcommerce = new Waypoint({
	element: document.getElementById('svg-sluzby-rozcestnik-ecommerce'),
	offset: '90%',
	handler: function () {
		this.element.style.transform = 'translate(0,0)';
		this.element.style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

const grafikaBlueprint = document.getElementById('svg-sluzby-grafika-na-miru-blueprint')
const grafikaContent = document.getElementById('svg-sluzby-grafika-na-miru-web')
const bezpeciContent = document.getElementById('svg-sluzby-bezpeci-content')
const spravaContent = document.getElementById('svg-sluzby-sprava-content')
const trafficContent = document.getElementById('svg-sluzby-traffic-content')
const dynamikaContent = document.getElementById('svg-sluzby-dynamika-content')
const podporaContent = document.getElementById('svg-sluzby-podpora-content')
const podporaCalendar = document.getElementById('svg-sluzby-podpora-calendar')
const podporaClock = document.getElementById('svg-sluzby-podpora-clock')
const plneniContent = document.getElementById('svg-sluzby-plneni-content')
const fotkyContent = document.getElementById('svg-sluzby-fotky-content')
const customsContent = document.getElementById('svg-sluzby-customs-content')

var grafika = new Waypoint({
	element: document.getElementById('grafika'),
	offset: '70%',
	handler: function () {
		grafikaBlueprint.style.transform = 'translateY(0)';
		grafikaBlueprint.style.opacity = 1;
		grafikaContent.style.transform = 'translateY(0)';
		grafikaContent.style.opacity = 1;
		
/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				grafikaBlueprint.classList.add('floatingElmAnimation')
			}, 750)
			setTimeout(() => {
				grafikaContent.classList.add('floatingElmAnimation')
			}, 1000)
		} */
	},
});

var bezpeci = new Waypoint({
	element: document.getElementById('bezpeci'),
	offset: '70%',
	handler: function () {
		bezpeciContent.style.transform = 'translateY(0)';
		bezpeciContent.style.opacity = 1;
		
/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				bezpeciContent.classList.add('floatingElmAnimation')
			}, 750)
			
			grafikaBlueprint.classList.remove('floatingElmAnimation')
			grafikaContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var sprava = new Waypoint({
	element: document.getElementById('sprava'),
	offset: '70%',
	handler: function () {
		spravaContent.style.transform = 'translateY(0)';
		spravaContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				spravaContent.classList.add('floatingElmAnimation')
			}, 750)
			
			bezpeciContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var traffic = new Waypoint({
	element: document.getElementById('traffic'),
	offset: '70%',
	handler: function () {
		trafficContent.style.transform = 'translateY(0)';
		trafficContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				trafficContent.classList.add('floatingElmAnimation')
			}, 750)
	
			spravaContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var dynamika = new Waypoint({
	element: document.getElementById('dynamika'),
	offset: '70%',
	handler: function () {
		dynamikaContent.style.transform = 'translateY(0)';
		dynamikaContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				dynamikaContent.classList.add('floatingElmAnimation')
			}, 750)
			
			trafficContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var podpora = new Waypoint({
	element: document.getElementById('podpora'),
	offset: '70%',
	handler: function () {
		podporaContent.style.transform = 'translateY(0)';
		podporaContent.style.opacity = 1;
		podporaCalendar.style.transform = 'translateY(0)';
		podporaCalendar.style.opacity = 1;
		podporaClock.style.transform = 'translateY(0)';
		podporaClock.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				podporaContent.classList.add('floatingElmAnimation')
			}, 750)
			setTimeout(() => {
				podporaCalendar.classList.add('floatingElmAnimation')
			}, 1000)
			setTimeout(() => {
				podporaClock.classList.add('floatingElmAnimation')
			}, 1250)
	
			dynamikaContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var plneni = new Waypoint({
	element: document.getElementById('plneni'),
	offset: '70%',
	handler: function () {
		plneniContent.style.transform = 'translateY(0)';
		plneniContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				plneniContent.classList.add('floatingElmAnimation')
			}, 750)
	
			podporaContent.classList.remove('floatingElmAnimation')
			podporaCalendar.classList.remove('floatingElmAnimation')
			podporaClock.classList.remove('floatingElmAnimation')
		} */
	},
});

var fotky = new Waypoint({
	element: document.getElementById('fotky'),
	offset: '70%',
	handler: function () {
		fotkyContent.style.transform = 'translateY(0)';
		fotkyContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				fotkyContent.classList.add('floatingElmAnimation')
			}, 750)
	
			plneniContent.classList.remove('floatingElmAnimation')
		} */
	},
});

var customs = new Waypoint({
	element: document.getElementById('customs'),
	offset: '70%',
	handler: function () {
		customsContent.style.transform = 'translateY(0)';
		customsContent.style.opacity = 1;

/* 		if (screen.width>576&&screen.height>576) {
			setTimeout(() => {
				customsContent.classList.add('floatingElmAnimation')
			}, 750)
	
			fotkyContent.classList.remove('floatingElmAnimation')
		} */
	},
});
