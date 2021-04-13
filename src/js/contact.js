import './../css/contact.css';

// selecting služby

const checkLabels = document.querySelectorAll('.selectBox > label');
Array.from(checkLabels).forEach((item) => {
	item.addEventListener('click', (event) => {
		const checkbox = item.previousElementSibling;
		console.log(checkbox);
		if (checkbox.checked) {
			checkbox.checked = true;
		} else {
			checkbox.checked = false;
		}
		console.log(checkbox.checked);
	});
});

// phone mask
document.getElementById('phone').addEventListener('input', (e) => {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
	e.target.value = !x[2] ? x[1] : '+420' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
});
