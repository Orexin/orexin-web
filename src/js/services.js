import '../css/services.css';

document.getElementById('svg-sluzby-rozcestnik-web-pres').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/web-pres.html`;
});

document.getElementById('svg-sluzby-rozcestnik-web-app').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/web-app.html`;
});

document.getElementById('svg-sluzby-rozcestnik-ecommerce').addEventListener('click', (event) => {
	window.location.href = `http://localhost:6969/ecommerce.html`;
});
