// Objetos 

const nombreProducto = 'Monitor 20 pulgadas';
const precio = 30;
const disponible = true;

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}

console.log(producto);
/*
// Acceder a los valores de un objeto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombreProducto']);
*/
//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto);