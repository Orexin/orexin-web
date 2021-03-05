const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const tech = document.getElementById('technologie-desc');
//default speed 0.15
var speed = 0.5;
var logos = new Array(),
	logosReversed = new Array();
console.log(outerElm[0].getBoundingClientRect().top);
console.log(img[10].getBoundingClientRect().width);
console.log(img[5].getBoundingClientRect().width);
console.log(img.x);

//asign values to js object
for (let i = 0; i < img.length; i++) {
	logos[i] = {
		id: i,
		x: 0,
		y: 0,
		originalX: img[i].x,
		originalY: img[i].y,
	};
}
//asign values to js object for reversed movement imgs
for (let i = 0; i < imgReversed.length; i++) {
	logosReversed[i] = {
		id: i,
		x: 0,
		y: 0,
		width: imgReversed[i].offsetWidth,
		height: imgReversed[i].offsetHeight,
	};
	imgReversed[i].style.transform = 'rotateZ(135deg)';
}
console.log(logos, logosReversed);

//get x and y where id = let i and then add values to it => diagonal movement
document.addEventListener('DOMContentLoaded', function (event) {
	//sleep function
	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	const presentationMovement = async () => {
		let indent = 135;
		while (true) {
			for (let i = 0; i < img.length; i++) {
				//move elems diagonaly up
				img[i].style.transform = `translateX(${logos[i].x + speed}px) translateY(${logos[i].y + speed}px) rotateZ(135deg)`;
				logos[i].x += speed;
				logos[i].y += speed;
				// collision detection and move down
				for (let o = 0; o < outerElm.length; o++) {
					// inkrement indent
					if (img[0].getBoundingClientRect().right - img[0].getBoundingClientRect().width >= outerElm[o].getBoundingClientRect().right) {
						indent += 5;
						console.log('last collision');
					}
					if (img[i].getBoundingClientRect().right - img[i].getBoundingClientRect().height >= outerElm[o].getBoundingClientRect().right) {
						img[i].style.transform = `translateX(-${outerElm[o].getBoundingClientRect().width - indent}px) translateY(-${
							outerElm[o].getBoundingClientRect().width - indent
						}px) rotateZ(135deg)`;

						logos[i].x -= outerElm[o].getBoundingClientRect().width - indent;
						logos[i].y -= outerElm[o].getBoundingClientRect().width - indent;
					}
				}
			}
			for (let i = 0; i < imgReversed.length; i++) {
				//move elems diagonaly down
				imgReversed[i].style.transform = `translateX(${logosReversed[i].x - speed}px) translateY(${logosReversed[i].y - speed}px) rotateZ(135deg)`;
				logosReversed[i].x -= speed;
				logosReversed[i].y -= speed;
				// collision detection and move down
				// inkrement indent
				/* 				if (imgReversed[0].getBoundingClientRect().left - imgReversed[0].getBoundingClientRect().width >= outerElm[1].getBoundingClientRect().left) {
					indent += 5;
					console.log('last collision');
				} */
				if (imgReversed[i].getBoundingClientRect().left - imgReversed[i].getBoundingClientRect().height <= outerElm[1].getBoundingClientRect().left) {
					imgReversed[i].style.transform = `translateX(${outerElm[1].getBoundingClientRect().width - indent}px) translateY(${
						outerElm[1].getBoundingClientRect().width - indent
					}px) rotateZ(135deg)`;

					logosReversed[i].x -= outerElm[1].getBoundingClientRect().width - indent;
					logosReversed[i].y -= outerElm[1].getBoundingClientRect().width - indent;
				}
			}
			//console.log(img[0].getBoundingClientRect().right, img[0].getBoundingClientRect().width);
			await sleep(5);
		}
	};
	presentationMovement();
});
console.log('interrupted');
