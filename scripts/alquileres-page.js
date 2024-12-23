//?_________________________ Alquiler-Apartamento-1_____________________________________________________

class Apartamento {
    constructor(numero, ubicacion, precioMensual) {
        this.numero = numero; // Nombre del apartamento
        this.ubicacion = ubicacion; // Ubicación del apartamento
        this.precioMensual = precioMensual; // Precio mensual del alquiler
        this.inquilino = null; // Inquilino actual
        this.pagado = false; // Estado del alquiler
    }

    // Método para alquilar el apartamento
    alquilar(inquilino) {
        if (this.inquilino) {
            alert(`El apartamento ${this.numero} ya está alquilado a ${this.inquilino}.`);
        } else {
            this.inquilino = inquilino;
            this.pagado = false;
            console.log(`El apartamento ${this.numero} ha sido alquilado por ${inquilino}.`);
        }
    }

    // Método para registrar el pago del alquiler
    pagarAlquiler() {
        if (this.inquilino) {
            this.pagado = true;
            alert(`El alquiler del apartamento ${this.numero} ha sido pagado.`);
        } else {
            alert(`No hay inquilino en el apartamento ${this.numero}.`);
        }
    }

    // Método para desalojar el apartamento
    desalojar() {
        if (this.inquilino) {
            alert(`El inquilino ${this.inquilino} ha desocupado el apartamento ${this.numero}.`);
            this.inquilino = null;
            this.pagado = false;
        } else {
            alert(`El apartamento ${this.numero} ya está desocupado.`);
        }
    }

    // Método para mostrar información del apartamento
    mostrarInformacion() {
        alert(`Apartamento ${this.numero}:
    - Ubicación: ${this.ubicacion}
    - Precio mensual: usd$${this.precioMensual}
    - Inquilino: ${this.inquilino ? this.inquilino : "Ninguno"}
    - Pago realizado: ${this.pagado ? "Sí" : "No"}`);
    }
}

// Ejemplo de uso
const apartamento1 = new Apartamento("Kref", "Centro de la ciudad", 450);


//Alquilar el apartamento
apartamento1.alquilar("Gaston Correa")
/*
Registrar el pago del alquiler (true o false)
apartamento1.pagarAlquiler();

Mostrar información
apartamento1.mostrarInformacion();

Desalojar el apartamento
apartamento1.desalojar(); 

Mostrar información final
apartamento1.mostrarInformacion();
*/


//?________________________________________Alquiler-Apartamento-2_____________________________________________________



// Datos del apartamento
const apartamento = {
    nombreApt: "Hz Kief",
    ubicacion: "Barrio privado",
    precioMensual: 650,
    inquilino: null,
    pagado: false
};

// Función para mostrar el estado actual del apartamento
function mostrarInformacion() {
    alert(`Apartamento ${apartamento.nombreApt}:
    - Ubicación: ${apartamento.ubicacion}
    - Precio mensual: $${apartamento.precioMensual}
    - Inquilino: ${apartamento.inquilino ? apartamento.inquilino : "Ninguno"}
    - Pago realizado: ${apartamento.pagado ? "Sí" : "No"}`);
}

// Función para alquilar el apartamento
function alquilarApartamento() {
    if (apartamento.inquilino) {
        alert(`El apartamento ${apartamento.nombreApt}, ya está alquilado a ${apartamento.inquilino}.`);
    } else {
        const nombreInquilino = prompt("Introduce el nombre del inquilino:");
        if (nombreInquilino) {
            apartamento.inquilino = nombreInquilino;
            apartamento.pagado = false;
            alert(`El apartamento ${apartamento.nombreApt} ha sido alquilado por ${nombreInquilino}.`);
        } else {
            alert("No se ingresó un nombre válido.");
        }
    }
}

// Función para pagar el alquiler
function pagarAlquiler() {
    if (apartamento.inquilino) {
        if (apartamento.pagado) {
            alert(`El alquiler del apartamento ${apartamento.nombreApt} ya está pagado.`);
        } else {
            apartamento.pagado = true;
            alert(`El alquiler del apartamento ${apartamento.nombreApt} ha sido pagado.`);
        }
    } else {
        alert(`No hay inquilino en el apartamento ${apartamento.nombreApt}.`);
    }
}

// Función para desalojar el apartamento
function desalojarApartamento() {
    if (apartamento.inquilino) {
        alert(`El inquilino ${apartamento.inquilino} ha desocupado el apartamento ${apartamento.nombreApt}.`);
        apartamento.inquilino = null;
        apartamento.pagado = false;
    } else {
        alert(`El apartamento ${apartamento.nombreApt} ya está desocupado.`);
    }
}

// Menú para interactuar con el usuario
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(`Gestionar Apartamento ${apartamento.nombreApt}:
    1. Mostrar información
    2. Alquilar apartamento
    3. Pagar alquiler
    4. Desalojar apartamento
    5. Salir
    Elige una opción (1-5):`);

        switch (opcion) {
            case "1":
                mostrarInformacion();
                break;
            case "2":
                alquilarApartamento();
                break;
            case "3":
                pagarAlquiler();
                break;
            case "4":
                desalojarApartamento();
                break;
            case "5":
                alert("Gracias por su visita, esperamos su retorno!.");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
        }
    } while (opcion !== "5");
}
/* Ejecutar el menú
mostrarMenu();
*/

//?____________________________________________Verificacion-De-Edad_____________________________________________________
// Función para verificar la edad
function verificarEdad() {
    while (true) { // Bucle hasta que se verifique la edad o se bloquee
        const edad = parseInt(prompt("Por favor, ingresa tu edad:"));

        if (isNaN(edad) || edad < 0) {
            alert("Por favor, ingresa un valor válido para la edad.");
            continue; // Repite la solicitud si el valor no es válido
        }

        if (edad >= 18) {
            alert("¡Eres mayor de edad! Continue con su visita.");
            break; // Salimos del bucle si es mayor de edad
        } else {
            alert("Lo siento, eres menor de edad y no puedes acceder.");
            continue;
        }
    }
}
/* Ejecutar la verificación de edad
verificarEdad();
*/

//?____________________________________________Agregando-DOM-Sin-Editar-HTML_____________________________________________________