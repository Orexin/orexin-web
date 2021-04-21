import './../css/contact.css';
// SVGs
import svgApp from './../img/svg-services/svg-web-app.svg';
import svgEasy from './../img/svg-services/svg-inteligentni-a-jednoducha.svg';
import svgFast from './../img/svg-services/svg-reaktivita.svg';

// inject SVGs
document.getElementById('svg-app').innerHTML = svgApp;
document.getElementById('svg-easy').innerHTML = svgEasy;
document.getElementById('svg-fast').innerHTML = svgFast;

var webApp = new Waypoint({
	element: document.getElementById('customs'),
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-customs-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-customs-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var reprezentace = new Waypoint({
	element: document.getElementById('customs'),
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-customs-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-customs-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var rychlaVyroba = new Waypoint({
	element: document.getElementById('customs'),
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-customs-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-customs-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});