export function onscrollSkew (){
	var skewed = document.getElementById('nabidka-vyber')
	window.addEventListener('scroll', function () {
		var value = -5 + window.scrollY/60;
		skewed.style.transform = "skewY(" + value + "deg)"
	})
}