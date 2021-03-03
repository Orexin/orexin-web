const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const imgContainer = document.getElementsByClassName('technologies-img-container');
const imgReversedContainer = document.getElementsByClassName('technologies-img-reversed-container');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const tech = document.getElementById('technologie-desc');
//default 0.15
var speed = 0.5;
var logos = new Array(),
	logosReversed = new Array();
console.log(outerElm[0].getBoundingClientRect().top);

//asign values to js object
for (let i = 0; i < img.length; i++) {
	logos[i] = {
		id: i,
		x: 0,
		y: 0,
		width: img[i].offsetWidth,
		height: img[i].offsetHeight,
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
				//move elems diagonaly up
				img[i].style.transform = `translateX(${logos[i].x + speed}px) translateY(${logos[i].y + speed}px) rotateZ(135deg)`;
				logos[i].x += speed;
				logos[i].y += speed;
				// collision detection and move down
				for (let o = 0; o < outerElm.length; o++) {
					if (outerElm[o].getBoundingClientRect().top + imgContainer[i].offsetTop + img[i].height <= outerElm[o].getBoundingClientRect().top) {
						img[i].style.transform = `translateX(${outerElm[o].getBoundingClientRect().bottom - 300}px) translateY(${
							outerElm[o].getBoundingClientRect().bottom + 300
						}px) rotateZ(135deg)`;
						logos[i].x = 0;
						logos[i].y = 0;
					}
					//console.log(img[i].offsetTop);
				}
				//console.log(img[i].y);
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
