// Función para manejar la compra
function comprarApartamento(event) {
    const numeroApartamento = event.target.dataset.apartamento; // Número del apartamento clickeado
    // Preguntar si ya vio el apartamento
    const vioApartamento = confirm(`¿Ya ha visto el Apartamento ${numeroApartamento}?`);
    if (!vioApartamento) {
        alert('Debe ver el apartamento antes de realizar la compra.');
        return;
    }
    // Preguntar si le gustó el apartamento
    const gustoApartamento = confirm(`¿Le gustó el Apartamento ${numeroApartamento}?`);
    if (!gustoApartamento) {
        alert('Lamentamos que no le haya gustado. Puede revisar otras opciones.');
        return;
    }
    // Solicitar datos del comprador
    const nombre = prompt('Ingrese su nombre:');
    const edad = prompt('Ingrese su edad:');
    const contacto = prompt('Ingrese su número de contacto:');
    // Validar que se proporcionaron todos los datos
    if (!nombre || !edad || !contacto) {
        alert('Debe proporcionar todos los datos para continuar con la compra.');
        return;
    }
    // Validar que sea mayor de edad
    if (parseInt(edad, 10) < 18) {
        alert('Debe ser mayor de edad para realizar esta compra.');
        return;
    }
    // Confirmar la compra
    alert(`¡Gracias, ${nombre}! Nos contactaremos al ${contacto} para finalizar la compra del Apartamento ${numeroApartamento}.`);
    // Opcional: Deshabilitar el botón después de la compra
    event.target.disabled = true;
    event.target.textContent = 'Vendido';
}
// Seleccionar los botones con getElementsByClassName y asignar eventos
const botonesComprar = document.getElementsByClassName('comprar');
for (let boton of botonesComprar) {
    boton.addEventListener('click', comprarApartamento);
}