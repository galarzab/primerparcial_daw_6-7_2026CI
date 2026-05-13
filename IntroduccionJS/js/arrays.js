//Arrays o Arreglos

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros); //Buen método para mostrar un Array en consola mediante una tabla

const meses = new Array("Enero", "Febrero", "Marzo"); //Otra forma de un arreglo pero es menos común

const arreglo = [
    "Hola", 
    true, 
    20, 
    {nombre: "Joel", apellido: "Barba"}, 
    [1,2,3],
];
console.table(arreglo);

//Acceder a un valor de un arreglo por su índice
console.log(arreglo[2]);

//Conocer el tamaño del arreglo
console.log(numeros.length);

//Iterar todo el arreglo, recorrer todo el arreglo
numeros.forEach(function (numero){
    console.log(numero);
});