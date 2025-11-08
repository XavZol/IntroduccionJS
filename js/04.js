//String o Cadenas de Texto

const tweet = "\"Monitor de 20 Pulgadas\"";
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor 50 Pulgadas');
const email = 'javier@outlook.com';

//Length es para la extension
console.log(tweet.length);
console.log(producto2);
console.log(typeof prodcuto3) //con typeof podemos saber de que tipo es una variable

// Indexof retorna posicion 
console.log(tweet.indexOf('Pulgadas'));
console.log(email.indexOf('@'));
console.log(producto2.indexOf('de'));

// Includes (retorna true o false)
console.log(tweet.includes('Pulgadas'));
console.log(tweet.includes('Tablet'));
