import '../css/index.css';
import './../components/mini-contact';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
import svgWebPres from './../img/index-web-pres.svg';
import svgWebApp from './../img/index-web-app.svg';
import svgEcommerce from './../img/index-ecommerce.svg';

// inject SVGs
document.getElementById('svg-web-pres').innerHTML = svgWebPres;
document.getElementById('svg-web-app').innerHTML = svgWebApp;
document.getElementById('svg-ecommerce').innerHTML = svgEcommerce;

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js').then(registration => {
		console.log('SW registered: ', registration);
	  }).catch(registrationError => {
		console.log('SW registration failed: ', registrationError);
	  });
	});
  }

// Waypoints
var nabidka = new Waypoint({
	element: document.getElementById('nabidka'),
	offset: '90%',
	handler: function () {
		document.getElementById('card-1').style.transform = 'translateY(0)';
		document.getElementById('card-1').style.opacity = 1;
		document.getElementById('card-2').style.transform = 'translateY(0)';
		document.getElementById('card-2').style.opacity = 1;
		document.getElementById('card-3').style.transform = 'translateY(0)';
		document.getElementById('card-3').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

// Solutions hover effect
const webPresBtn = document.getElementById('solutions-web-pres-btn');
const webAppBtn = document.getElementById('solutions-web-app-btn');
const ecommerceBtn = document.getElementById('solutions-ecommerce-btn');

webPresBtn.addEventListener('mouseover', event => {
	document.getElementById("svg-index-web-pres-bg").style.transform = "translateX(20px)"
	document.getElementById("svg-index-web-pres-nav").style.transform = "translateX(-20px)"
	document.getElementById("svg-index-web-pres-card-top-right").style.transform = "translateX(-25px)"
	document.getElementById("svg-index-web-pres-card-bottom-right").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-web-pres-card-top-left").style.transform = "translateX(-35px)"
	document.getElementById("svg-index-web-pres-card-bottom-left").style.transform = "translateX(-35px)"
	document.getElementById("svg-index-web-pres-left-column").style.transform = "translateX(-40px)"
})

webPresBtn.addEventListener('mouseout', event => {
	document.getElementById("svg-index-web-pres-bg").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-nav").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-card-top-right").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-card-bottom-right").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-card-top-left").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-card-bottom-left").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-pres-left-column").style.transform = "translateX(0)"
})

webAppBtn.addEventListener('mouseover', event => {
	document.getElementById("svg-index-web-app-bg").style.transform = "translateX(-20px)"
	document.getElementById("svg-index-web-app-left-column").style.transform = "translateX(15px)"
	document.getElementById("svg-index-web-app-graph-top").style.transform = "translateX(20px)"
	document.getElementById("svg-index-web-app-values").style.transform = "translateX(25px)"
	document.getElementById("svg-index-web-app-graph-middle").style.transform = "translateX(30px)"
	document.getElementById("svg-index-web-app-graph-bottom").style.transform = "translateX(30px)"

})

webAppBtn.addEventListener('mouseout', event => {
	document.getElementById("svg-index-web-app-bg").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-app-left-column").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-app-graph-top").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-app-values").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-app-graph-middle").style.transform = "translateX(0)"
	document.getElementById("svg-index-web-app-graph-bottom").style.transform = "translateX(0)"
})

ecommerceBtn.addEventListener('mouseover', event => {
	document.getElementById("svg-index-ecommerce-bg").style.transform = "translateX(20px)"
	document.getElementById("svg-index-ecommerce-nav").style.transform = "translateX(-20px)"
	document.getElementById("svg-index-ecommerce-left-column").style.transform = "translateX(-20px)"
	document.getElementById("svg-index-ecommerce-search").style.transform = "translateX(-25px)"
	document.getElementById("svg-index-ecommerce-card-top-left").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-ecommerce-card-bottom-left").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-ecommerce-card-top-middle").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-ecommerce-card-bottom-middle").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-ecommerce-card-top-right").style.transform = "translateX(-30px)"
	document.getElementById("svg-index-ecommerce-card-bottom-right").style.transform = "translateX(-30px)"
})

ecommerceBtn.addEventListener('mouseout', event => {
	document.getElementById("svg-index-ecommerce-bg").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-nav").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-left-column").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-search").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-top-left").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-bottom-left").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-top-middle").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-bottom-middle").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-top-right").style.transform = "translateX(0)"
	document.getElementById("svg-index-ecommerce-card-bottom-right").style.transform = "translateX(0)"
})

// onscroll elements 20 degrees translate
/* window.addEventListener('scroll', function () {
	// if there is already transform attr in <g> tag create another group inside it, put everything there and then move the transform attr to the lower group
	// defaults
	var scroll = window.scrollY;
	var length = scroll;
	var translateRatioX = 0,
		translateRatioY = 0,
		degrees = 20;
		console.log(scroll)
	// web-pres
	if (scroll <= 1000) {
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-card-top-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-card-bottom-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-card-bottom-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-card-top-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-pres-nav').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	}

	// web-app
	if (scroll <= 1500) {
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-app-graph-bottom').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-app-graph-middle').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-app-values').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-app-graph-top').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-web-app-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	}

	// ecommerce
	if (scroll <= 2000) {
		translateRatioX = Math.sin(degrees) * length * 0.05;
		translateRatioY = Math.sqrt(length * 0.05 * (length * 0.05) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-left-column').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.075;
		translateRatioY = Math.sqrt(length * 0.075 * (length * 0.075) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-top-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.1;
		translateRatioY = Math.sqrt(length * 0.1 * (length * 0.1) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-bottom-left').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.125;
		translateRatioY = Math.sqrt(length * 0.125 * (length * 0.125) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-top-middle').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.15;
		translateRatioY = Math.sqrt(length * 0.15 * (length * 0.15) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-bottom-middle').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-top-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;
	
		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-card-bottom-right').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-search').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

		translateRatioX = Math.sin(degrees) * length * 0.175;
		translateRatioY = Math.sqrt(length * 0.175 * (length * 0.175) + translateRatioX * translateRatioX);
		document.getElementById('svg-index-ecommerce-nav').style.transform = `translate(${translateRatioY}px, ${translateRatioX}px)`;

	}
}); */
