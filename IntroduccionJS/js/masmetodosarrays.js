//Arreglo plano 
const meses = new Array("Enero", "Febrero", "Marzo"); 

//Arreglos de objetos
const carrito = [
    {nombre: "Monitor", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Mouse", precio: 500},
];

//Foreach para recorrer 
meses.forEach(function(mes){
    console.log(mes);
});

//Foreach para buscar elementos
meses.forEach(function(mes){
    if  (mes == "Abril") {
        console.log("Si existe Febrero");
    }
});

//includes para buscar en arreglos planos
let resultado = meses.includes("Marzo");
console.log(resultado);

//PENDIENTE REVISAR CODIGO SI ESTA CORRECTO
//Some ideal para buscar en arreglos de objetos
resultado = carrito.some(function (producto){
    return producto.nombre === "Mouse";
});
console.log(producto);
