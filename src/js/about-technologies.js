//idk bruh I can do it but right now I'm feeling like my brain is being pulled out
//by some space force and at the same time my notebook screen is pulling off fucking stroboscopic effects
const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const tech = document.getElementById('technologie-desc');
var logos = new Array(),
	logosReversed = new Array();

//asign values to js object
for (let i = 0; i < img.length; i++) {
	logos[i] = {
		id: i,
		x: img[i].x,
		y: img[i].y,
		width: img[i].offsetWidth,
		height: img[i].offsetHeight,
	};
	img[i].style.transform = 'rotateZ(135deg)';
}
//asign values to js object fo reversed movement imgs
for (let i = 0; i < imgReversed.length; i++) {
	logosReversed[i] = {
		id: i,
		x: imgReversed[i].x,
		y: imgReversed[i].y,
		width: imgReversed[i].offsetWidth,
		height: imgReversed[i].offsetHeight,
	};
	imgReversed[i].style.transform = 'rotateZ(135deg)';
}
console.log(logos, logosReversed);

// check if logo is touching outer element
/* function is_colliding($div1, $div2) {
	// Div 1 data
	var d1_offset = $div1.offset();
	var d1_height = $div1.outerHeight(true);
	var d1_width = $div1.outerWidth(true);
	var d1_distance_from_top = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset = $div2.offset();
	var d2_height = $div2.outerHeight(true);
	var d2_width = $div2.outerWidth(true);
	var d2_distance_from_top = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding =
		d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left;

	// Return whether it IS colliding
	return !not_colliding;
} */
//get x and y where id = let i and then add 10 to it => diagonal movement
document.addEventListener('DOMContentLoaded', function (event) {
	//sleep function
	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	const presentationMovement = async () => {
		var iter = 1;
		while (true) {
			for (let i = 0; i < img.length; i++) {
				//check if elements touched the top of client element
				if (!(logos[i].x = 0) || !(logos[i].y = 0)) {
				}
				//move elems diagonaly up
				img[i].style.transform = `translateX(${logos[i].x + 1}px) translateY(${logos[i].y + 1}px)`;
				/* 					if (is_colliding(img[i], outerElm)) {
					img[i].style.transform = `translateX(0vh) translateY(0vh) rotateZ(135deg)`;
				} */
				logos[i].x += 1;
				logos[i].y += 1;
			}
			for (let i = 0; i < imgReversed.length; i++) {
				//check if elements touched the top of client element

				//move elems diagonaly down
				img[i].style.transform = `translateX(${logosReversed[i].x - 1}px) translateY(${logosReversed[i].y - 1}px)`;
				/* 					if (is_colliding(img[i], outerElm)) {
					img[i].style.transform = `translateX(0vh) translateY(0vh) rotateZ(135deg)`;
				} */
				logos[i].x -= 1;
				logos[i].y -= 1;
			}
			await sleep(1000);
			console.log(logos, logosReversed);
			iter++;
		}
	};
	presentationMovement();
});
console.log('interrupted');
