/*
// Strings: Cadenas de texto
const producto = "Monitor de 20 pulgadas"; //Puedo utilizar comillas simples o comillas dobles 'Monitor de 20 pulgadas'
const producto2 = String("Monitor de 30 pulgadas");
const producto3 = new String("Monitor de 50 pulgadas"); //Cuando uso "new" lo convierto en objeto, una instancia


console.log(producto);
console.log(producto2);
console.log(producto3);

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);
*/

const producto = "Mouse";
const producto2 = "Teclado";

console.log(producto.length); //Obtener el tamaño del string

//Indeof me permite encontra un elemento en un string, el indice comienza en 0
console.log(producto2.indexOf("ado")); //sale -1 porque no econtró la palabra

//Includes (retorna true or false)
console.log(producto.includes("se")); //Existe
console.log(producto.includes("teclado")); //No existe. "teclado" no, "Teclado" si

