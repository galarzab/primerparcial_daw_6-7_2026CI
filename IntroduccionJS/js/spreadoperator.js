const producto = {
    nombreProducto: "Monitor",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitores"
};

const medidas = {
    peso: "1kg",
    medida: "1m"
};

//Creación de un objeto que tenga todas las propiedades de los objetos "producto" y "medidas"
const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);