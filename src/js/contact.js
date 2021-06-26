import './../css/contact.css';

// selecting services
const checkLabels = document.querySelectorAll('.selectBox > label');
Array.from(checkLabels).forEach((item) => {
	item.addEventListener('click', (event) => {
		let checkbox = item.previousElementSibling;
		if (checkbox.checked) {
			checkbox.checked = true;
		} else {
			checkbox.checked = false;
		}
	});
});

// ask if you really wanna close the page, when form is filled
window.addEventListener('beforeunload', (e) => {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let msg = document.getElementById('msg').value;

	if (name != '' || email != '' || phone != '' || msg != '') {
		e.preventDefault();
		e.returnValue = '';
	}
});

// success checkmark
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
	e.preventDefault();

	submit.style.display = 'none';
	document.getElementById('form').style.display = 'none';
	document.getElementById('success').classList.add('animate-success');
});

// phone mask
/*document.getElementById('phone').addEventListener('input', (e) => {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
	e.target.value = !x[2] ? x[1] : '+420' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
});*/
