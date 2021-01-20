//needs fix
export function onscrollSkew() {
	var value;
	var skewed = document.querySelector('#nabidka-vyber');
	var unskewed = document.querySelector('.unskewed');
	if (value != 0) {
		window.addEventListener('scroll', function () {
			value = -5 + window.scrollY / 60;
			var unskewedValue = -5 - window.scrollY / 60;
			skewed.style.transform = 'skewY(' + value + 'deg)';
			unskewed.style.transform = 'skewY(-' + value + 'deg)';
			console.log(value);
		});
	} else {
		skewed.style.transform = 'skewY(0deg)';
	}
}
