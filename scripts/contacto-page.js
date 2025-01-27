document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Obtiene los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Validación básica
        if (name && email && phone) {
            const contactData = { name, email, phone, message };
            localStorage.setItem("contactData", JSON.stringify(contactData));

            // Muestra una alerta de éxito al usuario con SweetAlert2
            Swal.fire({
                title: '¡Formulario enviado!',
                text: 'Te contactaremos a la brevedad.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            // Limpia el formulario
            document.getElementById("contactForm").reset();
        } else {
            // Muestra una alerta de error con SweetAlert2
            Swal.fire({
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos requeridos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });

// Recuperar datos del LocalStorage al cargar la página
window.addEventListener("load", function () {
    const savedData = localStorage.getItem("contactData");
    if (savedData) {
        const { name, email, phone, message } = JSON.parse(savedData);
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("phone").value = phone;
        document.getElementById("message").value = message;
    }
});
//!________________________________________DONE