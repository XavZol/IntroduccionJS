

const metodoPago = ('cheque');

switch(metodoPago) {
    case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    case 'cheque':
        console.log("Pagaste con cheque");
        break;
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
        
    default:
        console.log('Aun no has pagado');
}
