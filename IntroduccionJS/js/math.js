//Objeto Math

let resultado;

resultado = Math.PI; //Da el valor de PI
resultado = Math.round(2.5); //round: Redondea normal
resultado = Math.ceil(2.1); //ceil: Redondea hacia arriba
resultado = Math.floor(2.99); //floor: Redondea hacia abajo
resultado = Math.sqrt(144); //Obtener la raiz cuadrada de un numero
resultado = Math.abs(-300); //Para convertir un numero en positivo si este es negativo
resultado = Math.min(3, 5, 2, 1, 10, 20); //Devuelve el valor minimo de un listado
resultado = Math.max(3, 5, 2, 1, 10, 20); //Devuelve el valor maximo de un listado
resultado = Math.random(); //Genera un valor aleatorio entre 0 y 1

//Combinaciones de funciones: Redondear hacia abajo un numero random multiplicado por 30
resultado = Math.floor(Math.random()*30); 

console.log(resultado);