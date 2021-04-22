import './../css/contact.css';
// SVGs
import svgApp from './../img/svg-services/svg-web-app.svg';
import svgEasy from './../img/svg-services/svg-inteligentni-a-jednoducha.svg';
import svgReaktivita from './../img/svg-services/svg-reaktivita.svg';

// inject SVGs
document.getElementById('svg-app').innerHTML = svgApp;
document.getElementById('svg-easy').innerHTML = svgEasy;
document.getElementById('svg-reaktivita').innerHTML = svgReaktivita;

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