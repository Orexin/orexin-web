const regeneratorRuntime = require('regenerator-runtime');
var clock1 = document.getElementById('svg-sluzby-clock-1');
var clock2 = document.getElementById('svg-sluzby-clock-2');
//sleep function
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

const refreshTime = async () => {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	console.log(hours + ',' + minutes + ',' + seconds);
	time.setHours(hours, minutes, seconds + 32);
	if (hours.toString().length == 1) hours = '0' + hours;
	if (minutes.toString().length == 1) minutes = '0' + minutes;
	clock1.textContent = hours;
	clock2.textContent = minutes;
	console.log(hours + ',' + minutes + ',' + seconds);
};
setInterval(refreshTime, 1000);
