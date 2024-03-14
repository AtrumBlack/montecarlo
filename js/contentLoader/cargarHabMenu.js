// cargarHabMenu.js

// Función para cargar la imagen de las habitaciones en el menú
export default function cargarHabMenu  (inicioContainer) {

    // Ruta de la imagen de las habitaciones
    const imagenHabitaciones = './img/habitaciones/fotosHab.png'; // Ruta de la imagen que deseas mostrar

    // Insertar la imagen en el contenedor especificado
    inicioContainer.innerHTML = `
        <div class="hab_inicial" >
            <img src="${imagenHabitaciones}" class="img-hab-inicial" alt="Habitaciones">
        </div>
    `;
};