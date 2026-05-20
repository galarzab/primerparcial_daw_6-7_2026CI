console.log("Funciona");

//query selector --> retornar ninguno o hasta un elemento que concuerde con el selector 

const footer = document.querySelector(".footer");
console.log(footer);

footer.textContent = "Nuevo pie de página";
footer.classList.add("nueva-clase");

//querySelectorAll -> retorna desde ninguno o todos los elementos que concuerden con el selector
const lenguajes = document.querySelectorAll(".lenguaje");
console.log(lenguajes);
console.log(lenguajes[0]);

const enlaces = document.querySelectorAll(".navegacion-principal  a");
console.log(enlaces);
console.log(enlaces[0]); 
enlaces[0].textContent = "Angular";
enlaces[0].href = "https://angular.dev/";
enlaces[0].classList.add("nueva-clase");
enlaces[0].classList.add("nueva-clase2");
console.log(enlaces[0]);
enlaces[0].classList.remove("nueva-clase");

//getElementByID
const title = document.getElementById("title");
console.log(title);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");//se recomienda entre mayúscula la etiqueta a crear
//Mayuscula la etiqueta a crear
//Agregar el href
nuevoEnlace.href = "https://es.react.dev/";
//Agregar el texto
nuevoEnlace.textContent = "React";
//Agregar la clase
nuevoEnlace.classList.add("navegacion-principal");
//Agregamos al documento
const navegacion = document.querySelector(".navegacion-principal");
navegacion.appendChild(nuevoEnlace); //appendChild es "agregar hijo" 

//Eventos
//Window es global, document esta dentro de window
console.log(1);
window.addEventListener("load", function(){
    console.log(2);
});
//Añado un Listener y cuando el Listener se ejecuta se realiza la funcion
//Load -> Espera a que JavaScript y los archivos que dependen del html estén listos
document.addEventListener("DOMContentLoaded", imprimir);
//DOMContentLoaded -> Espera a que se descargue el html -> Se utiliza mas este

function imprimir() {
    console.log(6);
}

window.onscroll = function(){
console.log("Scrolling");
};

//Seleccionar el/los elementos y asociarlos a un Evento
const btnContactar = document.querySelector(".boton-contactar");
btnContactar.addEventListener("click", function (evento) {
    console.log(evento);
});
/*
//Seleccionar el/los elementos y asociarlos a un Evento
const btnFormulario = document.querySelector(".boton-formulario");
btnFormulario.addEventListener("click", function (evento) {
    console.log(evento);
    evento.preventDefault(); //Para quitar el comportamiento por defecto de este elemento

    console.log("Enviando Formulario");
});
*/
//Eventos de los Input y los Textare
const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const mensaje = document.querySelector(".mensaje");
const telefono = document.querySelector(".telefono");

//Detecta cambios en el elemento
nombre.addEventListener("change", function(){
    //Change se activa cuando dejo de escribir y salgo del input
    console.log("escribiendo..");
});

nombre.addEventListener("input", function(e){
    //Input se activa con cada tecla
    console.log("escribiendo en tiempo real..")
    console.log(e.data); //Muestra en consola lo que escribe el usario LETRA POR LETRA (imprime el caracter que se escribe)
    console.log(e.target.value); //Muestra en consola TODO lo que esta escribiendo el usuario (imprime el valor completo) 
});

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
const datos = {
    nombre: "",
    email: "",
    mensaje: "",
    telefono: "",
};

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    //Validar el formulario
    const {nombre, email, mensaje, telefono} = datos; //Destructuring
    console.log(telefono);
    if(nombre === "" || email === "" || mensaje === "" || telefono === ""){ //Poner 3 "===" significa que no solo compara el valor, si no también que sean del mismo tipo
        console.log("Todos los campos son obligatorios");
        mostrarError("Todos los campos son obligatorios");
        return; //Return corta la comunicación del código
    }
    //Enviar el formulario
    console.log("Enviando formulario");
    mostrarOK("Formulario enviado correctamente");
});

function mostrarError(mensaje){
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mostrarOK(mensaje){
    const correcto = document.createElement("P");
    correcto.textContent = mensaje;
    correcto.classList.add("correcto");
    formulario.appendChild(correcto);

    setTimeout(() => {
        correcto.remove();
    }, 5000);
}
