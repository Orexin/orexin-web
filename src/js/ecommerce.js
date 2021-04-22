import './../css/contact.css';

// SVGs
import svgEcommerce from './../img/svg-services/svg-ecommerce.svg';
import svgSeo from './../img/svg-services/svg-seo.svg';
import svgPlatby from './../img/svg-services/svg-moznosti-platby.svg';
import svgObjednavky from './../img/svg-services/svg-dokonceni-objednavky.svg';

// inject SVGs
document.getElementById('svg-ecommerce').innerHTML = svgEcommerce;
document.getElementById('svg-seo').innerHTML = svgSeo;
document.getElementById('svg-platby').innerHTML = svgPlatby;
document.getElementById('svg-objednavky').innerHTML = svgObjednavky;

var ecommerce = new Waypoint({
	element: document.getElementById('ecommerce'),
	offset: '80%',
	handler: function () {
		document.getElementById('svg-sluzby-ecommerce-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-ecommerce-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var seo = new Waypoint({
	element: document.getElementById('seo'),
	offset: '60%',
	handler: function () {
		document.getElementById('svg-sluzby-seo-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-seo-content').style.opacity = 1;
		document.getElementById('svg-sluzby-seo-human').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-seo-human').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var platby = new Waypoint({
	element: document.getElementById('platby'),
	offset: '60%',
	handler: function () {
		document.getElementById('svg-sluzby-platby-content').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-platby-content').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var objednavky = new Waypoint({
	element: document.getElementById('objednavky'),
	offset: '60%',
	handler: function () {
		document.getElementById('svg-sluzby-objednavky-content-1').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-objednavky-content-1').style.opacity = 1;
		document.getElementById('svg-sluzby-objednavky-content-2').style.transform = 'translateY(0)';
		document.getElementById('svg-sluzby-objednavky-content-2').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});