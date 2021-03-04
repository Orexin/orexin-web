const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const imgContainer = document.getElementsByClassName('technologies-img-container');
const imgReversedContainer = document.getElementsByClassName('technologies-img-reversed-container');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const tech = document.getElementById('technologie-desc');
//default speed 0.15
var imgXLowest = img[0].x,
	speed = 0.5;
var logos = new Array(),
	logosReversed = new Array(),
	imgX = [new Array()],
	imgXNegative = new Array();
console.log(outerElm[0].getBoundingClientRect().top);
console.log(img[10].x);
console.log(img[5].x);
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
	imgX[i] = img[i].x;
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

//Lowest img
//console.log(Math.abs.apply(Math, imgX));
console.log(imgX);
for (let i = 0; i < imgX.length; i++) {
	if (imgX[i] < 0) {
		imgXNegative[i] = imgX[i];
	}
}
console.log(imgXNegative);
/* for (let i = 0; (i = imgXNegative.length); i++) {
	Math.abs.apply(Math, imgXNegative);
}
console.log(imgXNegative); */
//imgXLowest = Math.min(imgX);
//console.log(imgXLowest);

//get x and y where id = let i and then add 10 to it => diagonal movement
document.addEventListener('DOMContentLoaded', function (event) {
	//sleep function
	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	const presentationMovement = async () => {
		var iter = 1;
		let indent = 15;
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
						indent += 15;
						console.log('last collision');
					}
					if (img[i].getBoundingClientRect().right - img[i].getBoundingClientRect().width >= outerElm[o].getBoundingClientRect().right) {
						img[i].style.transform = `translateX(-${outerElm[o].getBoundingClientRect().width - img[i].getBoundingClientRect().width - indent}px) translateY(-${
							outerElm[o].getBoundingClientRect().width - img[i].getBoundingClientRect().width - indet
						}px) rotateZ(135deg)`;

						logos[i].x -= outerElm[o].getBoundingClientRect().width - img[i].getBoundingClientRect().width - indent;
						logos[i].y -= outerElm[o].getBoundingClientRect().width - img[i].getBoundingClientRect().width - indent;
					}
				}
			}
			for (let i = 0; i < imgReversed.length; i++) {
				//check if elements touched the top of client element

				//move elems diagonaly down
				imgReversed[i].style.transform = `translateX(${logosReversed[i].x - speed}px) translateY(${logosReversed[i].y - speed}px) rotateZ(135deg)`;
				logosReversed[i].x -= speed;
				logosReversed[i].y -= speed;
			}
			await sleep(5);
			//console.log(logos, logosReversed);
			iter++;
		}
	};
	presentationMovement();
});
console.log('interrupted');
