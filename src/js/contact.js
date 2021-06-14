import '@css/contact.css';

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

// ask if you really wanna close the page, when form is filled
window.addEventListener('beforeunload', function (e) {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let msg = document.getElementById('msg').value;

	if (name != '' || email != '' || phone != '' || msg != '') {
		e.preventDefault();
		e.returnValue = '';
	}
});

// phone mask
/*document.getElementById('phone').addEventListener('input', (e) => {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
	e.target.value = !x[2] ? x[1] : '+420' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
});*/

// honeyPot
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault()
	if(document.getElementById('username').value !== "") {
		alert('jsi hnusný bot!')
		e.preventDefault()
	}
})