const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo"); 
console.log(meses);

//Añadir un elemento a un arrgelo
//Manera no recomendada pero se puede hacer
numeros[6] = 60; //Agregar elem
numeros[2] = 10; //Modif elem

//No recomendado con push
numeros.push(30); //Agregar al final del arreglo
numeros.push(30,50,15);

//No recomendado con unshift
numeros.unshift(20,10,-2);

//Eliminar elementos del arreglo
numeros.pop(); //Elimina el último elemento del arreglo
numeros.shift(); //Elimina el primer elemento del arreglo
numeros.splice(1, 3);

//Rest operator o Spread Operator
const nuevosNumeros = [1000, ...numeros] //Buena práctica ya que no modifica el arrgelo original
console.table(numeros);
console.table(nuevosNumeros);