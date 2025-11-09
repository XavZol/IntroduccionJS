//resolve, reject .then .catch

const usuarioAutenticado = new Promise( (resolve, reject) => { //resolve y reject 
    const auth = true;

    if(auth) {
        resolve('Usuario autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});

console.log(usuarioAutenticado);

// 3 valores posibles...
// pending: No se ha cumplido pero tampoco se ha rechazado
// fulfilled: Ya se cumplio
// rejected: Se ha rechazado o no se pudo cumplir

usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )

//