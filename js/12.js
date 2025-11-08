// Objetos 
//"use strict"; // Correr javascript en modo estricto 
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}

Object.seal(producto); // No te permite elminiar ni agregar pero si modificar los existentes
//Object.freeze(producto); //freeze no te permite agregar más propiedades ni modificar

producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));
//console.log(Object.isFrozen(producto));

console.log(producto);