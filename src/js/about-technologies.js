//idk bruh I can do it but right now I'm feeling like my brain is being pulled out
//by some space force and at the same time my notebook screen is pulling off fucking stroboscopic effects
const img = document.getElementsByClassName('technologies-img');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const tech = document.getElementById('technologie-desc');
var logos = new Array();
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
console.log(logos, img[0].offsetHeight);

// check if logo is touching outer element
function is_colliding($div1, $div2) {
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
}
//get x and y where id = let i and then add 10 to it => diagonal movement
document.addEventListener('DOMContentLoaded', function (event) {
	while (true) {
		for (let i = 0; i < img.length; i++) {
			function presentationMovement() {
				//check if elements touched the top of client element
				if (!(clientX = 0) || !(clientY = 0)) {
				}

				img[i].style.transform = `translateX(${x}vh) translateY(${y}vh) rotateZ(135deg)`;

				if (is_colliding(img[i], outerElm)) {
					img[i].style.transform = `translateX(0vh) translateY(0vh) rotateZ(135deg)`;
				}
			}
		}
		setTimeout(presentationMovement(), 50);
		console.log('kokot');
	}
});
console.log('kokoti');
