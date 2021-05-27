// import './../components/mini-contact';
import '../css/services.css';
import './../components/mini-contact';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
import svgApp from './../img/svg-services/svg-web-app.svg';
import svgEasy from './../img/svg-services/svg-inteligentni-a-jednoducha.svg';
import svgReaktivita from './../img/svg-services/svg-reaktivita.svg';

// inject SVGs
document.getElementById('svg-app').innerHTML = svgApp;
document.getElementById('svg-easy').innerHTML = svgEasy;
document.getElementById('svg-reaktivita').innerHTML = svgReaktivita;

// Waypoints
var webApp = new Waypoint({
	element: document.getElementById('web-app'),
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-web-app-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-web-app-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var easy = new Waypoint({
	element: document.getElementById('easy'),
	offset: '70%',
	handler: function () {
		document.getElementById('svg-sluzby-easy-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-content').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-top-left-left').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-top-left-left').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-top-left').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-top-left').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-top-right').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-top-right').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-top-right-right').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-top-right-right').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-bottom-left-left').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-bottom-left-left').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-bottom-left').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-bottom-left').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-bottom-right').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-bottom-right').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-card-bottom-right-right').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-card-bottom-right-right').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-computer').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-computer').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-graph-bg').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-graph-bg').style.opacity = 1;
		document.getElementById('svg-sluzby-easy-graph').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-easy-graph').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var reaktivita = new Waypoint({
	element: document.getElementById('reaktivita'),
	offset: '70%',
	handler: function () {
		document.getElementById('svg-sluzby-reaktivita-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-reaktivita-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

// onscroll elements 20 degrees translate
window.addEventListener('scroll', function () {
	// if there is already transform attr in <g> tag create another group inside it, put everything there and then move the transform attr to the lower group
	// defaults
	var scroll = window.scrollY;
	var length = scroll/3;
	var translateRatioX = 0,
		translateRatioY = 0,
		degrees = 20;

	if (scroll <= 500) {
		// graph top
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-app-graph-top').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// left column
		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-app-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// values
		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-app-values').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// graph right top
		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-app-graph-right-top').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// graph right bottom
		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-app-graph-right-bottom').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	}
});
