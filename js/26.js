//This

// window
window.nombre = 'Un Nombre';

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Garcia',
    total: 10000,
    pagado: false,
    informacion2: function() {
        console.log(`El cliente ${reservacion2.nombre} reservó y su cantidad a pagar es de ${reservacion2.total}`);
    }
}

reservacion2.informacion2();
reservacion.informacion();