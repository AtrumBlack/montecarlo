export default function cargarHabMenu  (inicioContainer) {
    const imagenHabitaciones = './img/habitaciones/fotosHab.png'; // Ruta de la imagen que deseas mostrar
    inicioContainer.innerHTML = `
        <div class="hab_inicial" >
            <img src="${imagenHabitaciones}" class="img-hab-inicial" alt="Habitaciones">
        </div>
    `;
};