import './../css/contact.css';

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
