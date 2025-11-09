//Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {          
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {          
            resolve('Los Pedidos fueron descargados');
        }, 3000);
    });
}

async function app() {

    try{/*
        const resultado = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log('Este codigo no se bloquea');
        console.log(resultado); */
    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    
    }catch(error) {
        console.log(error);
    }
}

app();
