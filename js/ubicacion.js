var contador = 1;
var menu = document.getElementById("menu");
var nav = document.getElementById("main")
menu.addEventListener('click', function(e){
	e.preventDefault();
	console.log("me has presionado")
nav.style.transition ="all ease-in-out .7s";

if(contador == 1){

	nav.style.left = "0%";
	contador = 0;
}else{
	nav.style.left = "-100%";
contador = 1;
}

});
const lavadora = document.getElementById('lavadora');
const planchado = document.getElementById('planchado');
const ropa = document.getElementById('ropa');
const h2 = document.getElementById('h2');
const pp = document.getElementById('p');
lavadora.addEventListener('mouseover',function(){
	if(window.innerWidth < 800){
	h2.style.animation = "animacionxd .6s alternate";
	pp.style.animation = "animacionxd .6s alternate";
	h2.style.visibility = "visible";
	h2.style.color = "palevioletred";
	h2.style.fontSize = "40px";
	h2.innerText = "Lavado a mano y lavadora";
	pp.style.fontSize = "20px";
	pp.style.visibility = "visible";
	pp.innerText = "Te ofrecemos un lavado express en el cual podrás tener tu ropa lista en menos de 3 horas";
	}else{
		h2.style.animation = "animacionxd .6s alternate";
	pp.style.animation = "animacionxd .6s alternate";
	h2.style.visibility = "visible";
	h2.style.color = "palevioletred";
	h2.innerText = "Lavado a mano y lavadora";
	pp.style.visibility = "visible";
	pp.innerText = "Te ofrecemos un lavado express en el cual podrás tener tu ropa lista en menos de 3 horas";
	}
});
planchado.addEventListener('mouseover',function(){
	if(window.innerWidth < 800){
	h2.style.animation = "animacionxd1 .6s alternate";
	pp.style.animation = "animacionxd1 .6s alternate";
	h2.style.visibility = "visible";
	h2.style.color = "greenyellow";
	h2.style.fontSize = "40px";
	pp.style.fontSize = "20px";
	h2.innerText = "Planchado de ropa y vestidos";
	pp.style.visibility = "visible";
	pp.innerText = "Se ofrece el planchado de prendas solo si se pago por unidad y no por Kg";
	}else{
		h2.style.animation = "animacionxd1 .6s alternate";
	pp.style.animation = "animacionxd1 .6s alternate";
	h2.style.visibility = "visible";
	h2.style.color = "greenyellow";
	h2.innerText = "Planchado de ropa y vestidos";
	pp.style.visibility = "visible";
	pp.innerText = "Se ofrece el planchado de prendas solo si se pago por unidad y no por Kg";
	}
	
});
ropa.addEventListener('mouseover',function(){
	if(window.innerWidth < 800){
	h2.style.animation = "animacionxd2 .6s alternate";
	pp.style.animation = "animacionxd2 .6s alternate";
	h2.style.visibility = "visible";
	h2.style.fontSize = "40px";
	pp.style.fontSize = "20px";
	h2.style.color = "orange"; 
	h2.innerText = "Lavado al seco de ropa";
	pp.style.visibility = "visible";
	pp.innerText = "Lavados de ternos, vestidos y alfombras seco, o para prendas que lo requieran";
	}
	else{
		h2.style.animation = "animacionxd2 .6s alternate";
	pp.style.animation = "animacionxd2 .6s alternate";
	h2.style.visibility = "visible";
	h2.style.color = "orange"; 
	h2.innerText = "Lavado al seco de ropa";
	pp.style.visibility = "visible";
	pp.innerText = "Lavados de ternos, vestidos y alfombras seco, o para prendas que lo requieran";
	}
	
	
});