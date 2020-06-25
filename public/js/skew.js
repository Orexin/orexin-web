//přidat na začátek první section class="skew-js"
var skewed = document.querySelector('.skew-js');
        window.addEventListener('scroll', function(){
            var value = -3 + window.scrollY/60;
            skewed.style.transform = "skewY("+ value +"deg)"
        })