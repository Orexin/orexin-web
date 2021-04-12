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
