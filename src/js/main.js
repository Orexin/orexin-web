import * as firebase from 'firebase/app';

// css
require('bootstrap/dist/css/bootstrap.min.css');
require('animate.css/animate.min.css');
require('aos/dist/aos.css');

// JS
var $ = require('jquery');
require('popper.js');
require('bootstrap');
require('aos');
require('snapsvg');
require('./viewstl/stl_viewer.min');
require('./contact-form');
require('./autocomplete');
require('./parallax');
require('./type-writer');

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