// CSS
import './../css/style.css';
import 'typicons.font/src/font/typicons.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';

//JS
import AOS from 'aos';
import * as skew from './onscroll-skew';
import * as underline from './shifting-underline';

document.addEventListener('DOMContentLoaded', function (event) {
	document.getElementById('preloader').style.display = 'none';
	AOS.init({ once: true });
});
<<<<<<< HEAD

underline.shiftingUnderline();
=======
//underline.shiftingUnderline();
>>>>>>> 074df9191f9f8ffcb4d6b039aa11a29e9dbb1536
//skew.onscrollSkew();
