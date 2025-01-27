// Seleccionar elementos del DOM
const formulario = document.getElementById('formularioCompra');
const listadoCompras = document.getElementById('listadoCompras');

// Cargar datos desde Local Storage al iniciar la página
const compras = JSON.parse(localStorage.getItem('compras')) || [];

// Función para guardar datos en Local Storage
const guardarEnLocalStorage = () => {
    localStorage.setItem('compras', JSON.stringify(compras));
};

// Función para renderizar las compras en la página
const renderizarCompras = () => {
    listadoCompras.innerHTML = ''; // Limpiar el listado
    compras.forEach((compra, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Nombre:</strong> ${compra.nombre} ${compra.apellido} <br>
            <strong>Correo:</strong> ${compra.email} <br>
            <strong>Apartamento:</strong> ${compra.apartamento} <br>
            <button class="eliminar btn btn-primary" data-index="${index}">Quitar</button>
        `;
        listadoCompras.appendChild(li);
    });

    // Añadir eventos para los botones de eliminar
    document.querySelectorAll('.eliminar').forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const index = e.target.dataset.index;

            // Confirmar eliminación con SweetAlert2
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta acción eliminará esta compra.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    compras.splice(index, 1); // Eliminar el elemento del array
                    guardarEnLocalStorage(); // Actualizar Local Storage
                    renderizarCompras(); // Actualizar la interfaz

                    // Mostrar alerta de éxito
                    Swal.fire('Eliminado', 'La compra fue eliminada correctamente.', 'success');
                }
            });
        });
    });
};

// Escuchar el evento "submit" del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    // Capturar los datos del formulario
    const nuevaCompra = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        email: formulario.email.value,
        apartamento: formulario.apartamento.value
    };

    // Agregar la nueva compra al array
    compras.push(nuevaCompra);

    // Guardar los datos en Local Storage y actualizar la interfaz
    guardarEnLocalStorage();
    renderizarCompras();

    // Mostrar alerta de éxito con SweetAlert2
    Swal.fire({
        title: '¡Compra registrada!',
        text: 'La compra fue agregada correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar el formulario
    formulario.reset();
});

// Inicializar renderizado de compras
renderizarCompras();
//!__________________________________________DONE