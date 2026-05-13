const producto = {
    nombreProducto: "Monitor",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitores"
};

/*
//Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombre;
const disponibilidadProducto = producto.disponibilidad;
const categoriaProducto = producto.categoria;
console.log(precioProducto)
*/

//Forma nueva -> Destructuring
const {nombreProducto, precio, disponibilidad, categoria} = producto;
//Debe de tener el mismo nombre que la propiedad
console.log(disponibilidad);
console.log(precio);