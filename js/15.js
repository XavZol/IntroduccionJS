// Arrays Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

// ForEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
const resultado = meses.includes('Marzo');

// Some ideal para arreglo de objetos
const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular Pro'
});

// Reduce
resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
// Es lo mismo que el ejemplo de arriba 
resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);


//Filter

resultado5 = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado5 = carrito.filter(function(producto){ // !== Se trae todos excepto el celular
    return producto.nombre !== 'Celular'         // === Se trae solo el celular
});

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);


