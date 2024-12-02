//*_____________________________Ventura-Soho___________________________________________
function compraVenturaSoho() {
    // Solicitar la edad del cliente
    var edad = prompt("¿Cuántos años tienes?");
    edad = parseInt(Number(edad)); // Convertir a número
    // Solicitar el presupuesto del cliente
    var presupuesto = prompt("¿Cuánto dinero tienes disponible para la compra?");
    presupuesto = parseInt(presupuesto);
    // Verificación de edad y saldo
    if (isNaN(edad) || isNaN(presupuesto) || edad < 0 || presupuesto < 0) {
        alert("Por favor, ingresa datos válidos para la edad y el presupuesto.");
    } else if (edad < Number(18)) {
        alert("Lo siento, debes ser mayor de edad para realizar la compra.");
    } else if (presupuesto < Number(195000)) {
        alert("Lo siento, no tienes suficiente dinero para realizar la compra.");
    } else {
        alert("Felicidades! puedes comprar Ventura Soho y disfrutar ese espacio que tanto deseaste!.");
    }
}
//*____________________________________________________________________________________
//*_____________________________Ventura-Genaro___________________________________________
function compraVenturaGenaro() {
    // Solicitar la edad del cliente
    var edad = prompt("¿Cuántos años tienes?");
    edad = parseInt(Number(edad)); // Convertir a número
    // Solicitar el presupuesto del cliente
    var presupuesto = prompt("¿Cuánto dinero tienes disponible para la compra?");
    presupuesto = parseInt(presupuesto);
debugger
    // Verificación de edad y saldo
    if (isNaN(edad) || isNaN(presupuesto) || edad < 0 || presupuesto < 0) {
        alert("Por favor, ingresa datos válidos para la edad y el presupuesto.");
    } else if (edad < Number(18)) {
        alert("Lo siento, debes ser mayor de edad para realizar la compra.");
    } else if (presupuesto < Number(125500)) {
        alert("Lo siento, no tienes suficiente dinero para realizar la compra.");
    } else {
        alert("Felicidades! Ventura Genarò ya es tuyo!.");
    }
}