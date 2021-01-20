/* //needs fix
export function onscrollSkew (){
	var value = -5;
	var skewed = document.querySelector('#nabidka-vyber')
	window.addEventListener('scroll', function () {
		if (value < -0.73)
		{
			value = -10 + window.scrollY/60;
			skewed.style.transform = "skewY(" + value + "deg)"
			console.log(value)
		}

		}
		)
	
}
 */