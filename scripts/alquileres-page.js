// Lista de apartamentos disponibles
const apartamentos = [
    { id: 1, nombre: "Apartamento Kref Centrico", precioMensual: 450, disponible: true },
    { id: 2, nombre: "Apartamento Hz Kief", precioMensual: 650, disponible: true },
];

// Alquiler activo
let alquiler = JSON.parse(localStorage.getItem("alquiler")) || null;

// Renderizar la lista de apartamentos
const renderApartamentos = () => {
    const contenedor = document.getElementById("apartamentos");
    contenedor.innerHTML = "";
    apartamentos.forEach((apto) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${apto.nombre}</h5>
                    <p class="card-text">Precio mensual: $${apto.precioMensual}</p>
                    <button class="btn btn-primary" ${!apto.disponible ? "disabled" : ""} data-id="${apto.id}">
                        ${apto.disponible ? "Alquilar" : "No disponible"}
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(div);
    });

    document.querySelectorAll("button[data-id]").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(boton.dataset.id, 10);
            iniciarAlquiler(id);
        });
    });
};

// Iniciar alquiler
const iniciarAlquiler = (id) => {
    const apartamento = apartamentos.find((apto) => apto.id === id);

    if (!apartamento.disponible) {
        Swal.fire({
            title: "Error",
            text: "El apartamento ya está alquilado.",
            icon: "error",
        });
        return;
    }

    Swal.fire({
        title: "Alquilar apartamento",
        input: "number",
        inputLabel: "¿Por cuántos meses deseas alquilar?",
        inputAttributes: {
            min: 1,
        },
        showCancelButton: true,
        confirmButtonText: "Alquilar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const meses = parseInt(result.value, 10);
            const descuento = meses >= 6 ? 0.15 : meses >= 3 ? 0.1 : 0;
            const precioFinal =
                apartamento.precioMensual * meses * (1 - descuento);

            const fechaInicio = new Date();
            const fechaFin = new Date(
                fechaInicio.setMonth(fechaInicio.getMonth() + meses)
            );

            alquiler = {
                apartamento,
                meses,
                precioFinal,
                fechaInicio: new Date(),
                fechaFin,
            };

            apartamento.disponible = false;
            guardarAlquiler();
            renderApartamentos();
            renderAlquilerActivo();

            Swal.fire({
                title: "¡Alquiler confirmado!",
                text: `Has alquilado el ${apartamento.nombre} por ${meses} meses. Precio total: $${precioFinal.toFixed(
                    2
                )}.`,
                icon: "success",
            });
        }
    });
};

// Renderizar alquiler activo
const renderAlquilerActivo = () => {
    const contenedor = document.getElementById("alquilerActivo");
    contenedor.innerHTML = "";

    if (alquiler) {
        const tiempoRestante =
            (new Date(alquiler.fechaFin) - new Date()) / (1000 * 60 * 60 * 24);

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <strong>${alquiler.apartamento.nombre}</strong> - Precio total: $${alquiler.precioFinal.toFixed(
            2
        )} <br>
            Fecha de inicio: ${new Date(alquiler.fechaInicio).toLocaleString()} <br>
            Fecha de fin: ${new Date(alquiler.fechaFin).toLocaleString()} <br>
            Tiempo restante: ${Math.ceil(tiempoRestante)} días
            <button class="btn btn-danger mt-3" id="finalizarAlquiler">Finalizar alquiler</button>
        `;
        contenedor.appendChild(li);

        document
            .getElementById("finalizarAlquiler")
            .addEventListener("click", finalizarAlquiler);
    }
};

// Finalizar alquiler
const finalizarAlquiler = () => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Cancelaras el contrato y finalizará el contrato.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, finalizar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            apartamentos.find(
                (apto) => apto.id === alquiler.apartamento.id
            ).disponible = true;

            alquiler = null;
            guardarAlquiler();
            renderApartamentos();
            renderAlquilerActivo();

            Swal.fire({
                title: "Alquiler finalizado",
                text: "El apartamento ahora está disponible.",
                icon: "success",
            });
        }
    });
};

// Guardar alquiler en localStorage
const guardarAlquiler = () => {
    localStorage.setItem("alquiler", JSON.stringify(alquiler));
};

// Inicializar
renderApartamentos();
renderAlquilerActivo();
