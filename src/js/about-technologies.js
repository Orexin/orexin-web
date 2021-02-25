//idk bruh I can do it but right now I'm feeling like my brain is being pulled out
//by some space force and at the same time my notebook screen is pulling off fucking stroboscopic effects
const img = document.getElementsByClassName('technologies-img');
const outerElm = document.getElementsByClassName('technologie-presentation-container');

doucment.addEventListener('DOMContentLoaded', function (event) {
	var x, y;
	var x = item.clientHeight;
	var clientX = item.clientX;
	var clientY = item.clientY;

	while (true) {
		function presentationMovement() {
			//check if elements touched the top of client element
			if (!(clientX = 0) || !(clientY = 0)) {
			}

			x += 0.1;
			y += 0.1;

			l = img.length;

			img.style.transform = `translateX(${x}vh) translateY(${y}vh) rotateZ(135deg)`;

			var is_colliding = function ($div1, $div2) {
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
			};

			if (is_colliding(img, outerElm)) {
				img.style.transform = `translateX(0vh) translateY(0vh) rotateZ(135deg)`;
			}
		}
		setTimeout(presentationMovement(), 50);
		console.log('kokot');
	}
});
