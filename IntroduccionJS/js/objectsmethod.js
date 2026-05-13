"use strict"; 
//.- JavaScript es un lenguaje "flexible", por lo que si se comete un error generalmente no los muestra
//.- Pero cuando se usa "use strict", como especie de "directiva" que le indica que tiene que utilizar "buenas practicas"
//.- Marca errores lógicos?
//.- Le quita la "flexibilidad" de JavaScript

const producto = {
    nombreProducto: "Monitor",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitores"
};

//Los objetos por defecto si se pueden modificar a pesar de que sea "const"
//Object.freeze(producto); //CONGELA
//.- Con esto el objeto ya no puede ser modificado
//.- Con freeze no se puede agregar, ni eliminar propiedades
//.- Tampoco se puede cambiar valores, se vuelve totalmente en una constante

console.log(Object.isFrozen(producto)); //Para verificar si un objeto esta congelado

Object.seal(producto); //SELLA
//.- Se puede modificar el valor de una propiedad
//.- Pero, no puede eliminar, ni agregar otra propiedad
producto.precio = 400;
console.log(producto.precio);