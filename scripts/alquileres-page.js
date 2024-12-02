function alquilerApartamentoKref() {
    // Solicitar edad y sueldo
    const edad = parseInt(prompt("¿Cuántos años tienes?"));
    let sueldo = parseFloat(prompt("Ingresa tu sueldo mensual en dolares"));

    // Verificar si la edad es válida y si el sueldo es suficiente
    if (isNaN(edad) || edad < 18) {
        alert("Lo siento, debes ser mayor de 18 años para alquilar un apartamento.");
        return;
    }

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Por favor, ingresa un sueldo válido.");
        return;
    }

    // Definir el costo mensual del alquiler
    const costoAlquiler = 450; 
    let descuento = 0; // Descuento por años de alquiler
    let añosAlquilando = 0;

    while (true) {
        añosAlquilando = parseInt(prompt("¿Cuántos años quieres alquilar el apartamento? Cuanto mas años alquiles mas descuento obtendras!."));
        if (isNaN(añosAlquilando) || añosAlquilando < 0) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }
        // Aplicar descuentos según los años de alquiler
        if (añosAlquilando >= 1 && añosAlquilando <= 3) {
            descuento = 0.003;
        } else if (añosAlquilando > 3 && añosAlquilando <= 5) {
            descuento = 0.006;
        } else if (añosAlquilando > 5) {
            descuento = 0.010;
        } else {
            descuento = 0; // No aplica descuento
        }

        let costoFinal = costoAlquiler - (costoAlquiler * descuento);

        if (sueldo >= costoFinal) {
            alert("Alquiler aprobado. El costo mensual es de: $" + costoFinal.toFixed(2));
            break;
        } else {
            alert("Tu sueldo no es suficiente.");
            break;
        }
    }
}
//*__________________________________________________________________________________________________________
function alquilerApartamentoHzKief() {
    // Solicitar edad y sueldo
    const edad = parseInt(prompt("¿Cuántos años tienes?"));
    let sueldo = parseFloat(prompt("Ingresa tu sueldo mensual en dolares"));

    // Verificar si la edad es válida y si el sueldo es suficiente
    if (isNaN(edad) || edad < 18) {
        alert("Lo siento, debes ser mayor de 18 años para alquilar un apartamento.");
        return;
    }

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Por favor, ingresa un sueldo válido.");
        return;
    }

    // Definir el costo mensual del alquiler
    const costoAlquiler = 650; 
    let descuento = 0; // Descuento por años de alquiler
    let añosAlquilando = 0;

    while (true) {
        añosAlquilando = parseInt(prompt("¿Cuántos años quieres alquilar el apartamento? Cuanto mas años alquiles mas descuento obtendras!."));
        if (isNaN(añosAlquilando) || añosAlquilando < 0) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }
        // Aplicar descuentos según los años de alquiler
        if (añosAlquilando >= 1 && añosAlquilando <= 3) {
            descuento = 0.001;
        } else if (añosAlquilando > 3 && añosAlquilando <= 5) {
            descuento = 0.005;
        } else if (añosAlquilando > 5) {
            descuento = 0.009;
        } else {
            descuento = 0; // No aplica descuento
        }

        let costoFinal = costoAlquiler - (costoAlquiler * descuento);

        if (sueldo >= costoFinal) {
            alert("Alquiler aprobado. El costo mensual es de: $" + costoFinal.toFixed(2));
            break;
        } else {
            alert("Tu sueldo no es suficiente.");
            break;
        }
    }
}