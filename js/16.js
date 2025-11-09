// el Hoisting
// Primer etapa de registro y segunda etapa de ejecución

// Declaracion de una funcion 
function sumar() {
    console.log(10 * 10);
}
sumar()

// Expresion de la funcion  
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

//IIFE   para proteger que no se mezclen variables y funciones de otros archivos
(function() {
    console.log('Esto es una funcion');
})();