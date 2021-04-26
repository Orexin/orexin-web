import './../components/mini-contact';

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

// Waypoints
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

// onscroll elements 20 degrees translate
window.addEventListener('scroll', function () {
	// if there is already transform attr in <g> tag create another group inside it, put everything there and then move the transform attr to the lower group
	// defaults
	var scroll = window.scrollY;
	var length = scroll;
	var translateRatioX = 0,
		translateRatioY = 0,
		degrees = 20;

	if (scroll <= 500) {
		// nav
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-nav').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// left column
		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// filter search
		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-filter-search').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card top left
		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-top-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card top middle
		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-top-middle').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card top right
		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-top-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card bottom left
		translateRatioX = Math.sin(degrees) * length * 0.2;
		translateRatioY = Math.sqrt(length * 0.2 * (length * 0.2) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-bottom-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card bottom middle
		translateRatioX = Math.sin(degrees) * length * 0.225;
		translateRatioY = Math.sqrt(length * 0.225 * (length * 0.225) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-bottom-middle').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		// card bottom right
		translateRatioX = Math.sin(degrees) * length * 0.25;
		translateRatioY = Math.sqrt(length * 0.25 * (length * 0.25) + translateRatioX * translateRatioX);
		document.getElementById('svg-sluzby-ecommerce-card-bottom-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	}
});
