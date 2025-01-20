const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const mensajeInput = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviarForm');
const btnLimpiar = document.getElementById('resetForm');
//! Función para manejar el envío del formulario
function enviarFormulario() {
    const datosFormulario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        mensaje: mensajeInput.value,
    };
    // Validar que todos los campos estén llenos
    if (
        !datosFormulario.nombre ||
        !datosFormulario.apellido ||
        !datosFormulario.email ||
        !datosFormulario.telefono ||
        !datosFormulario.mensaje
    ) {
        alert('Por favor, completa todos los datos del formulario.');
        return;
    }
    alert('¡Formulario enviado con éxito!');
    localStorage.setItem('formulario', JSON.stringify(datosFormulario));
}
//! Función para limpiar el formulario
function limpiarFormulario() {
    nombreInput.value = '';
    apellidoInput.value = '';
    emailInput.value = '';
    telefonoInput.value = '';
    mensajeInput.value = '';

    // Eliminar los datos del localStorage
    localStorage.removeItem('formulario');
    alert('Haz limpiado el formulario correctamente.');
}

enviarForm.addEventListener('click', enviarFormulario);
resetForm.addEventListener('click', limpiarFormulario);