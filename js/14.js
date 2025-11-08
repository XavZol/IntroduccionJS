// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

console.table(meses);

const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Skipy', trabajo: 'Programador'}, [1,2,3]];

console.table(arreglo);

//Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[5]);
console.log(numeros[1]);

//Conocer la extension de un arreglo
console.log(meses.length);

meses.forEach(function(mes){
    console.log(mes);
});


numeros.forEach(function(numero){
    console.log(numero);
});