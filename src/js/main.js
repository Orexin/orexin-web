import * as firebase from 'firebase/app';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';

// JS
/*import $ from 'jquery';
window.jQuery = $;
window.$ = $;*/
import 'popper.js';
import 'bootstrap';
import 'aos';
import 'snapsvg';
import './viewstl/stl_viewer.min';
import './contact-form';
import './autocomplete';
import './parallax';
import './type-writer';
import './test';

// aos inicializace
AOS.init();

// stl viewer
var stl_viewer=new StlViewer
(document.getElementById("stl_cont"),
    {
        canvas_width:"100%",
        canvas_height:"75%",
        zoom:1,
        mouse_zoom:false,
        auto_rotate:true,
        models: 
        [ 
            {filename:"assets/orexin.stl",scale:1}
        ] 
	});

firebase.initializeApp(firebaseConfig);