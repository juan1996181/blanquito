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