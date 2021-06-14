import '@css/about.css';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
import svgAssembly from '@img/about/assembly.svg';
import svgBrain from '@img/about/brain.svg';
import svgTechstack from '@img/about/technologies.svg';
import svgEducation from '@img/about/education.svg';
import svgKdoJsme from '@img/about/kdo-jsme.svg';
import svgNaseSluzby from '@img/about/nase-sluzby.svg';
import svgKamSmerujeme from '@img/about/kam-smerujeme.svg';

// inject SVGs
document.getElementById('svg-assembly').innerHTML = svgAssembly;
document.getElementById('svg-brain').innerHTML = svgBrain;
document.getElementById('svg-techstack').innerHTML = svgTechstack;
document.getElementById('svg-education').innerHTML = svgEducation;
document.getElementById('svg-kdo-jsme').innerHTML = svgKdoJsme;
document.getElementById('svg-nase-sluzby').innerHTML = svgNaseSluzby;
document.getElementById('svg-kam-smerujeme').innerHTML = svgKamSmerujeme

// Waypoints
var brain = new Waypoint({
	element: document.getElementById('brain'),
	offset: '70%',
	handler: function () {
		document.getElementById('svg-brain').style.transform = 'translateY(0)';
		document.getElementById('svg-brain').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

var education = new Waypoint({
	element: document.getElementById('education'),
	offset: '70%',
	handler: function () {
		document.getElementById('svg-education').style.transform = 'translateY(0)';
		document.getElementById('svg-education').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});

// redirect to pages
document.getElementById('svg-techstack-html').addEventListener('click', (event) => {
	window.open('https://www.w3schools.com/html/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-python').addEventListener('click', (event) => {
	window.open('https://www.python.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-css').addEventListener('click', (event) => {
	window.open('https://www.w3schools.com/css/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-typescript').addEventListener('click', (event) => {
	window.open('https://www.typescriptlang.org', '_blank', 'noopener');
});

document.getElementById('svg-techstack-javascript').addEventListener('click', (event) => {
	window.open('https://www.javascript.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-webpack').addEventListener('click', (event) => {
	window.open('https://webpack.js.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-jwt').addEventListener('click', (event) => {
	window.open('https://jwt.io/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-express').addEventListener('click', (event) => {
	window.open('https://expressjs.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-nodejs').addEventListener('click', (event) => {
	window.open('https://nodejs.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-firebase').addEventListener('click', (event) => {
	window.open('https://firebase.google.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-linux').addEventListener('click', (event) => {
	window.open('https://www.linux.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-mongodb').addEventListener('click', (event) => {
	window.open('https://www.mongodb.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-graphql').addEventListener('click', (event) => {
	window.open('https://graphql.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-docker').addEventListener('click', (event) => {
	window.open('https://www.docker.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-git').addEventListener('click', (event) => {
	window.open('https://git-scm.com/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-svg').addEventListener('click', (event) => {
	window.open('https://cs.wikipedia.org/wiki/Scalable_Vector_Graphics', '_blank', 'noopener');
});

document.getElementById('svg-techstack-react').addEventListener('click', (event) => {
	window.open('https://reactjs.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-vuejs').addEventListener('click', (event) => {
	window.open('https://vuejs.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-illustrator').addEventListener('click', (event) => {
	window.open('https://www.adobe.com/products/illustrator.html', '_blank', 'noopener');
});

document.getElementById('svg-techstack-inkscape').addEventListener('click', (event) => {
	window.open('https://inkscape.org/', '_blank', 'noopener');
});

document.getElementById('svg-techstack-figma').addEventListener('click', (event) => {
	window.open('https://www.figma.com/', '_blank', 'noopener');
});