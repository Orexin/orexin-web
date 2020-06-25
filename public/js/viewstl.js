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
            {filename:"orexin.stl",scale:1}
        ] 
    });