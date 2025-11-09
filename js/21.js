
//Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');

// Arrays Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// ForEach
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;
// Some ideal para arreglo de objetos
resultado2 = carrito.some(producto => producto.nombre === 'Celular Pro');

// Reduce
resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado3);

// Es lo mismo que el ejemplo de arriba 
resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);


//Filter

resultado5 = carrito.filter(producto => producto.precio > 400);

resultado5 = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);
console.log(resultado2);
console.log(resultado4);
console.log(resultado5);