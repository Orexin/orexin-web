// CSS
import './style.css';
import 'bulma/css/bulma.min.css';
import 'aos/dist/aos.css';
import * as skew from './js/onscroll-skew';

//JS
import AOS from 'aos';

AOS.init({once: true});
skew.onscrollSkew();