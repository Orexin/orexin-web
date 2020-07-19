document.addEventListener('mousemove',parallax);
	function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer=>{
            var speed = layer.getAttribute('data-speed')

            var x = (window.innerWidth - e.pageX * speed) / 350;
            var y = (window.innerWidth - e.pageX * speed) / 350

            layer.style.transform = `translate(${-x}px) translateY(${-y}px)`
        })
	}
document.addEventListener('mousemove',parallax_2);
    function parallax_2(e) {
        this.querySelectorAll('.layer_2').forEach(layer=>{
            var speed = layer.getAttribute('data-speed')
    
            var x = (window.innerWidth - e.pageX * speed) / 350;
        	var y = (window.innerWidth - e.pageX * speed) / 350
    
            layer.style.transform = `translate(${-x}px) translateY(${y}px)`
        })
    }
