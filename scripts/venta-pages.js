class Apartamento {
    //* Constructor que inicializa las propiedades del apartamento
    constructor(direccion, habitaciones, banos, precio, tamano) {
        this.direccion = direccion;
        this.habitaciones = habitaciones;
        this.banos = banos;
        this.precio = precio;
        this.tamano = tamano; // m2
    }
    mostrarDetalles() {
        console.log(`Apartamento en ${this.direccion}:`);
        console.log(`Habitaciones: ${this.habitaciones}`);
        console.log(`Baños: ${this.banos}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Tamaño: ${this.tamano} m²`);
    }
    //* Calcular el precio por m2
    calcularPrecioPorM2() {
        return this.precio / this.tamano;
    }
    //* Método para aumentar el precio por si se modifica el edificio
    aumentarPrecio(porcentaje) {
        this.precio += this.precio * (porcentaje / 100);
        console.log(`El precio del apartamento ha aumentado en un ${porcentaje}%. Nuevo precio: $${this.precio}`);
    }
}
//*______Ventura-Soho
let apartamento1 = new Apartamento("Ventura Soho 2570", 0, 1, 195500, 120000);
//*_____Ventura-Genaro
let apartamento2 = new Apartamento("Ventura Genaro 750", 2, 1, 125500, 78000);
//* Detalles del apartamento
apartamento1.mostrarDetalles();
apartamento2.mostrarDetalles();

