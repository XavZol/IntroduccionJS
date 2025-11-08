// Objetos 
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}
// Forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
/*
console.log(precioProducto);
console.log(nombreProducto); */  

//Destrcturing
const {precio, disponible} = producto;
const { nombreProducto } = producto;

console.log(nombreProducto);
console.log(precio, disponible);