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
