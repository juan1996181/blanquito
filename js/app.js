
//
var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSilde: "slide",
	imgSlide: document.querySelectorAll("#slide ul li"),
	imgSlidexd: document.querySelectorAll("#slide ul li img"),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder"),
	velocidadSlide: 3000,
	formatearLoop: false

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

	inicioSlide: function() {

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].addEventListener("click", m.paginacionSlide);
			p.imgSlide[i].style.width = (100/p.paginacion.length) + "%";

		}

		p.avanzar.addEventListener("click", m.avanzar)
		p.retroceder.addEventListener("click", m.retroceder)

		m.intervalo();

		p.cajaSlide.style.width = (p.paginacion.length*100) + "%";

	},

	paginacionSlide: function(item) {

		p.item = item.target.parentNode.getAttribute("item") - 1;

		m.movimientoSlide(p.item);

	},

	avanzar: function() {

		if (p.item == p.imgSlide.length - 1) {

			p.item = 0;

		} else {

			p.item++;

		}

		m.movimientoSlide(p.item);
	},

	retroceder: function() {

		if (p.item == 0) {

			p.item = p.imgSlide.length - 1;

		} else {

			p.item--;

		}

		m.movimientoSlide(p.item);

	},

	movimientoSlide: function(item) {

		p.formatearLoop = true;

		p.cajaSlide.style.left = item * -100 + "%";

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].style.opacity = .5;

		}

		p.paginacion[item].style.opacity = 1;

		if (p.animacionSilde == "slide") {

			p.cajaSlide.style.transition = ".7s left ease-in-out";

		}

		if (p.animacionSilde == "fade") {
			p.imgSlidexd[item].style.perspective = "1000px";
			p.imgSlidexd[item].style.transition = ".2s all ease-in-out";
			p.imgSlidexd[item].style.opacity = .2;
			setTimeout(function() {
				
			
			p.imgSlidexd[item].style.backfaceVisibility = "hidden";
			
			
			
				

			}, 200)

		}

	},

	intervalo: function() {

		setInterval(function() {

			if (p.formatearLoop) {

				p.formatearLoop = false;

			} else {

				m.avanzar();

			}

		}, p.velocidadSlide)

	}

}

m.inicioSlide();
var contador = 1;
var menu = document.getElementById("menu");
var nav = document.getElementById("main")
menu.addEventListener('click', function(e){
	e.preventDefault();
	console.log("me has presionado")
	
/*nav.style.transition ="all ease-in-out 1s";
	if(contador == 1){

		nav.style.clipPath = "circle(150% at top right)";
		contador = 0;
}else{
	nav.style.clipPath = "circle(0% at top left)";
	contador = 1;
	
	
}*/
nav.style.transition ="all ease-in-out .7s";

if(contador == 1){

	nav.style.left = "0%";
	contador = 0;
}else{
	nav.style.left = "-100%";
contador = 1;
}

});
const icono = document.getElementById('cajaxdd');
const servicio = document.getElementById('service');
const subtitulo = document.getElementById('subtitulo');
var valor = 1;
const servicios1 = document.querySelector('.serviccios1');
var tamaño = window.innerWidth;
console.log(tamaño);

icono.addEventListener('mouseover',function(e){
	e.preventDefault();
	if (window.innerWidth>1000) {
		servicio.style.animation = "animacionxd 1s alternate";
	servicio.classList = 'servicios1';
	}
	else{
		servicio.classList = 'servicios';
	}
	
});
icono.addEventListener('mouseleave',function(){
	servicio.style.animationName = "animacionxd";
	servicio.style.animationDuration = "1s";
	
	servicio.classList = ('servicios');
})

