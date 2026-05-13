//Objetos
/*
const nombreProducto = "Monitor";
const precio = 300;
const disponible = true;

//Sintaxis de un objeto
//Objeto: producto
const producto = {
    nombreProducto: "Monitor",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitores"
};

//Imprimir el objeto entero
console.log(producto);

//Acceder/Imprimir una propiedad del objeto: precio  // Recomendable
console.log(producto.precio);

console.log(producto["precio"]); //Otra forma de acceder // No recomendable
*/

const producto = {
    nombreProducto: "Monitor",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitores"
};
producto.imagen = "imagen.jpg"; //Añadir una propiedad a un objeto
delete producto.disponibilidad; //Eliminar propiedad de un objeto

console.log(producto);
