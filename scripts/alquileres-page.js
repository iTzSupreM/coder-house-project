const apartamentos = {
    1: { alquilado: false, precio: 450, conDescuento: false },
    2: { alquilado: false, precio: 650, conDescuento: false },
};

// Función para manejar el alquiler
function manejarAlquiler(event) {
    const numeroApartamento = event.target.dataset.apartamento;
    const apartamento = apartamentos[numeroApartamento];

    // Verificar si el apartamento ya está alquilado
    if (!apartamento.alquilado) {
        const alquilar = confirm(`¿Desea alquilar el Apartamento ${numeroApartamento} por $${apartamento.precio}/mes?`);
        if (alquilar) {
            apartamento.alquilado = true;
            alert(`¡Has alquilado el Apartamento ${numeroApartamento}!`);
            event.target.textContent = 'Gestionar Alquiler';
        }
    } else {
        // Opciones para apartamentos ya alquilados
        const opcion = prompt(
            `El Apartamento ${numeroApartamento} ya está alquilado. Elige una opción:\n1. Dar de baja\n2. Continuar con el alquiler (descuento del 10%)`
        );
        if (opcion === '1') {
            apartamento.alquilado = false;
            apartamento.conDescuento = false; // Reiniciar descuento al dar de baja
            alert(`El alquiler del Apartamento ${numeroApartamento} ha sido dado de baja.`);
            event.target.textContent = 'Alquilar';
        } else if (opcion === '2') {
            if (apartamento.conDescuento) {
                alert('El descuento ya se aplicó previamente. El precio mensual actual es $' + apartamento.precio.toFixed(2) + '.');
            } else {
                apartamento.precio = apartamento.precio * 0.9; // Aplicar descuento del 10%
                apartamento.conDescuento = true; // Marcar que ya tiene descuento
                alert(`¡Gracias por continuar con el alquiler! El nuevo precio mensual es $${apartamento.precio.toFixed(2)}.`);
            }
        } else {
            alert('Opción no válida. Intenta nuevamente.');
        }
    }
}
// Asignar eventos a los botones
const botonesAlquilar = document.getElementsByClassName('alquilar');
for (let boton of botonesAlquilar) {
    boton.addEventListener('click', manejarAlquiler);
}
