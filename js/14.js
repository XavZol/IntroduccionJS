// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.table(numeros);
/*
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

console.table(meses); */
/*
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
}); */ 

// Agregar elementos a un arreglo
/*numeros[5] = 60;
numeros[6] = 70;
numeros[7] = 80;
numeros[8] = 90;
numeros[9] = 100; */

numeros.push(60,70,80,90,100); // agrega al final del arreglo

numeros.unshift(-10, -20, -30); //agregar al principio del arreglo

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

meses.pop(); // Elimina el ultimo elemento del arreglo
meses.shift(); // Elimina el primer elemento del arreglo

meses.splice(4, 2); // Elimina el elemento concorde a la posicion 

console.table(meses);

//Rest Operator o Spread Operator
//Agrega al arreglo el elemento que deseas agregar
const nuevoArreglo = [...meses, 'Diciembre']; // Agrega al final
const nuevoArreglo2 = ['Julio', ...meses]; // Agrega al Principio
console.table(nuevoArreglo);
console.table(nuevoArreglo2);

