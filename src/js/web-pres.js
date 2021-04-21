import './../css/contact.css';
// SVGs
import svgWeb from './../img/svg-services/svg-web-pres.svg';
import svgPres from './../img/svg-services/svg-reprezentace.svg';
import svgFast from './../img/svg-services/svg-rychla-vyroba.svg';

// inject SVGs
document.getElementById('svg-web').innerHTML = svgWeb;
document.getElementById('svg-pres').innerHTML = svgPres;
document.getElementById('svg-fast').innerHTML = svgFast;

const regeneratorRuntime = require('regenerator-runtime');

// realtime clock
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
	offset: '80%',
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
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-fast-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-fast-content').style.opacity = 1;
		document.getElementById('svg-sluzby-fast-calendar').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-fast-calendar').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});