import '../css/services.css';

// SVGs
import svgRozcestnik from './../img/svg-services/svg-rozcestnik.svg';
import svgGrafika from './../img/svg-services/svg-grafika-na-miru.svg';
import svgBezpeci from './../img/svg-services/svg-bezpeci.svg';
import svgSprava from './../img/svg-services/svg-sprava.svg';
import svgPodpora from './../img/svg-services/svg-technicka-podpora.svg';
import svgPlneni from './../img/svg-services/svg-plneni-obsahu.svg';
import svgFotky from './../img/svg-services/svg-fotky.svg';
import svgCustoms from './../img/svg-services/svg-tvorba-grafiky.svg';

// inject SVGs
document.getElementById('svg-rozcestnik').innerHTML = svgRozcestnik;
document.getElementById('svg-grafika').innerHTML = svgGrafika;
document.getElementById('svg-bezpeci').innerHTML = svgBezpeci;
document.getElementById('svg-sprava').innerHTML = svgSprava;
document.getElementById('svg-podpora').innerHTML = svgPodpora;
document.getElementById('svg-plneni').innerHTML = svgPlneni;
document.getElementById('svg-fotky').innerHTML = svgFotky;
document.getElementById('svg-customs').innerHTML = svgCustoms;

// rozcestnik linky
document.getElementById('svg-sluzby-rozcestnik-web-pres').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/web-pres.html`;
});

document.getElementById('svg-sluzby-rozcestnik-web-app').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/web-app.html`;
});

document.getElementById('svg-sluzby-rozcestnik-ecommerce').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/ecommerce.html`;
});
