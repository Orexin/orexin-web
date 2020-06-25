window.onscroll = function(){
    progress();
};

function progress(){
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100;
    document.getElementById('scroll_indicator').style.width = scrolled + "%";
}