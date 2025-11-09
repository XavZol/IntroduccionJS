//Clases 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}
const producto2 = new Producto('Monitor Curvo', 800);
const producto3 = new Producto('Monitor ', 400);

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearLibro(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    ObtenerPrecio(){
        super.obtenerPrecio();
        console.log('Si hay en existencia');
    }
}

const libro = new Libro('JavaScript la revolucion', 120, '1234567890');
console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto() );
console.log(libro.formatearLibro() ); 