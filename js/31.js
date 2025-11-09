
const boton = document.querySelector('#boton'); //selectores de este tipo

boton.addEventListener('click', () => {
    Notificacion.requestPermission ()
    .then(resultado =>   //vamos a dar el permiso con .then
        console.log(`El resultado es ${resultado}`) )
    })

    if(Notification.permission == 'granted') {
        new Notification('Esta es una notificacion', {
            icon: 'img/ccj.png',  
            body: 'Codigo con Juan, los mejores tutoriales'
        })
    }
