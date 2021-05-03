// Imports
import './../css/partnership.css';
import 'waypoints/lib/noframework.waypoints.min.js';

// SVGs
import svgAdvertisement from './../img/partnership-advertisement.svg';
import svgComission from './../img/partnership-comission.svg';
import svgDiscount from './../img/partnership-discount.svg';
import svgSupport from './../img/partnership-support.svg';

// inject SVGs
document.getElementById('svg-advertisement').innerHTML = svgAdvertisement;
document.getElementById('svg-comission').innerHTML = svgComission;
document.getElementById('svg-discount').innerHTML = svgDiscount;
document.getElementById('svg-support').innerHTML = svgSupport;

// waypoints
var partnershipProc = new Waypoint({
	element: document.getElementById('partnerstvi-proc'),
	offset: '90%',
	handler: function () {
		document.getElementById('partnerstvi-proc-card-1').style.transform = 'translateY(0)';
		document.getElementById('partnerstvi-proc-card-1').style.opacity = 1;
		document.getElementById('partnerstvi-proc-card-2').style.transform = 'translateY(0)';
		document.getElementById('partnerstvi-proc-card-2').style.opacity = 1;
		document.getElementById('partnerstvi-proc-card-3').style.transform = 'translateY(0)';
		document.getElementById('partnerstvi-proc-card-3').style.opacity = 1;
		document.getElementById('partnerstvi-proc-card-4').style.transform = 'translateY(0)';
		document.getElementById('partnerstvi-proc-card-4').style.opacity = 1;
		// animation happens only once
		this.destroy();
	},
});