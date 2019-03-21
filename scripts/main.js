/*

------Pruebas-------

var miVariable = [1,'bob','steve',10,'Pagina Principal']

var miTitulo = document.querySelector('h1'); //obtiene una referencia al título, esto es un objeto
miTitulo.innerHTML = 'Hello World!'; //imprimi el innerHTML en la pagina el valor.
miTitulo.innerHTML = miVariable[4]

var funcion = multiplica(4,7); puedo agregar una funcion a una variable

//alert(multiplica(4,7));
alert(funcion);

var valor = 3;

var respuest = valor === 3;
alert('esto es una prueba y son iguales ' + (valor === 3))

if (respuest) {
	alert('esto es una prueba y son iguales');
}else{
	alert('esto es una prueba y no son iguales'); // el "===" triple igual, Comprueba si dos valores son iguales entre sí, y devuelve un valor de true/false (booleano).
}


function multiplica(num1,num2) {
	var resultado = num2 * num1;
	return resultado
}

*/

document.querySelector('h1').onclick = function(){
	alert('Ouch! Deja de pincharme!');
}
/*

Nota que

document.querySelector('html').onclick = function(){};
es equivalente a

var miHTML = document.querySelector('html');
miHTML.onclick = function(){};

*/
/*

Como lo sugiere en la pagina para cambiar la imagen a otra imagen y regresarlo

var miImage = document.querySelector('img');

miImage.onclick = function() {
	var miSrc = miImage.getAttribute('src');
	if (miSrc === 'images/moxilla-emoji.png') {
		miImage.setAttribute('src','images/android-emoji.png');
	} else {
		miImage.setAttribute('src','images/moxilla-emoji.png')
	}
}
*/
//mi funcion para las imagenes aleatorias
var miImage = document.querySelector('img');
miImage.onclick = function(){
	var imagenesDisponibles = [
	'images/android-emoji.png',
	'images/moxilla-emoji.png',
	'images/google-emoji.png',
	'images/apple-emoji.png',
	'images/lala-emoji.png',
	'images/sabritas-emoji.png',
	'images/bimbo-emoji.png'];
	var numImag= aleatorio(0,6);
	var miSrc = miImage.getAttribute('src');
	while(miSrc === imagenesDisponibles[numImag]){
		numImag= aleatorio(0,3);
	}
	miImage.setAttribute('src',imagenesDisponibles[numImag]);

}

//Sirve para sacar un numero aleatorio dentro de un rango de numeros
function aleatorio(numMin,numMax) {
	return Math.round(Math.random()*(numMax-numMin)+parseInt(numMin));
}


var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
	var miNombre = prompt('Por favor, ingresa tu nombre.'); 
	/*que crea un cuadro de diálogo como lo hace alert(); 
	la diferencia es que prompt() pide al usuario un dato, 
	y almacena este dato en una variable cuando el botón OK*/
	localStorage.setItem('nombre',miNombre); 
	//localStorage es un API, permite almacenar datos en el navegador y recuperarlos luego.

	/*la función setItem() de localStorage, que crea y almacena un dato en el elemento llamado
	'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario ingresó*/
	//miTitulo.textContent = 'Su nombre es ' + miNombre; //cambia el valor el textContent
	if (!localStorage.getItem('nombre')) {
		nuevaFuncion();
		//estableceNombreUsuario     cualquiera de las dos es correcta, para volverse a llamar la funcion a si misma
	}
	else {
		var nombreAlmacenado = localStorage.getItem('nombre');
		miTitulo.textContent = 'Su nombre es ' + nombreAlmacenado; //textContent es igual que innerHTML
	}
}

miBoton.onclick = function nuevaFuncion(){ // se da nombre a una funcion "nueva funcion" cuando se declara
	estableceNombreUsuario()
}




