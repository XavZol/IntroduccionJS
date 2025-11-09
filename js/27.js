//POO

/* Object Literal*/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;

}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} y con apellido: $ ${this.apellido}`;
}

const producto2 = new Producto('Monitor Curvo', 800);
const producto3 = new Producto('Monitor ', 400);

const cliente = new Cliente('Juan', 'Garcia');

console.log(cliente);

function formatearProducto(producto){
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

