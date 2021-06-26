import '@css/services.css';
import '@components/mini-contact';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
import svgWeb from '@img/svg-services/svg-web-pres.svg';
import svgPres from '@img/svg-services/svg-reprezentace.svg';
import svgFast from '@img/svg-services/svg-rychla-vyroba.svg';

// inject SVGs
document.getElementById('svg-web').innerHTML = svgWeb;
document.getElementById('svg-pres').innerHTML = svgPres;
document.getElementById('svg-fast').innerHTML = svgFast;

// realtime clock
const regeneratorRuntime = require('regenerator-runtime');

const refreshTime = async () => {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	if (hours.toString().length == 1) hours = '0' + hours;
	if (minutes.toString().length == 1) minutes = '0' + minutes;
	document.getElementById('svg-sluzby-clock-1').textContent = hours;
	document.getElementById('svg-sluzby-clock-2').textContent = minutes;
};
setInterval(refreshTime, 1000);

// waypoints
var webPres = new Waypoint({
	element: document.getElementById('web-pres'),
	offset: '90%',
	handler: function () {
		document.getElementById('svg-sluzby-web-pres-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-web-pres-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var reprezentace = new Waypoint({
	element: document.getElementById('reprezentace'),
	offset: '60%',
	handler: function () {
		document.getElementById('svg-sluzby-reprezentace-banner').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-reprezentace-banner').style.opacity = 1;
		document.getElementById('svg-sluzby-reprezentace-sun').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-reprezentace-sun').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rychlaVyroba = new Waypoint({
	element: document.getElementById('fast'),
	offset: '70%',
	handler: function () {
		document.getElementById('svg-sluzby-fast-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-fast-content').style.opacity = 1;
		document.getElementById('svg-sluzby-fast-calendar').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-fast-calendar').style.opacity = 1;
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
		// nav
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-nav').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// left column
		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card top left
		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-card-top-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card top right
		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-card-top-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card bottom left
		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-card-bottom-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card bottom right
		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-web-pres-card-bottom-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	}
});
