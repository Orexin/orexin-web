import * as firebase from 'firebase/app';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import 'material-icons';
import 'typicons.font/src/font/typicons.css';
import './../css/style.css';

// JS
import './import-jquery';
import 'popper.js';
import 'bootstrap';
import aos from 'aos';
import 'snapsvg';
//import StlViewer from './viewstl/stl_viewer.min';
import './contact-form';
//import './autocomplete';
import './parallax';
import './nav';
import * as randomColors from './random-colors';

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvDyE4xoEntTjo6G1f6M5qvmhqDPYUNKk",
  authDomain: "orexin-econtech.firebaseapp.com",
  databaseURL: "https://orexin-econtech.firebaseio.com",
  projectId: "orexin-econtech",
  storageBucket: "orexin-econtech.appspot.com",
  messagingSenderId: "113840999370",
  appId: "1:113840999370:web:f10a067e737a65d0629d33",
  measurementId: "G-C12T2406JR"
};

// aos inicializace
aos.init();

// random colors
$(document).ready(function() {
	if ($('body').hasClass('index')) {
		randomColors.colorsIndex(randomColors.sessionColor);
	}
	else if ($('body').hasClass('p404')) {
		randomColors.colors404(randomColors.sessionColor);
	}
});

// stl viewer
/*var stl_viewer=new StlViewer
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
	});*/

firebase.initializeApp(firebaseConfig);