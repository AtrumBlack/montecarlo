// cargarHabitaciones.js
import cargarContenido from '../utils/contentHandler.js';

// Función para cargar el contenido de las habitaciones
export default function cargarHabitaciones() {

    // Identificador del contenedor donde se cargarán las habitaciones
    let containerId='roomCards';

    // URL del archivo JSON que contiene los datos de las habitaciones
    const url = `./json/habitaciones.json`;

    // Función para validar la estructura del archivo JSON
    function validarEstructura(data) {
        if (!data || typeof data !== 'object' || !data.habitaciones) {
            throw new Error('El formato del archivo JSON no es válido.');
        }
    }   

    // Función de plantilla para generar el HTML de las habitaciones
    const templateFunction = function (data) {
        // Validar la estructura del archivo JSON
        validarEstructura(data);

        let html = '';

        // Recorremos cada habitación en los datos
        for (const habitacion in data.habitaciones) {
            const habitacionData = data.habitaciones[habitacion];

            // Construimos el HTML para cada habitación
            html += `
                <div class="swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                            <div class="swiper-zoom-container">
                                <img src="${habitacionData.imagenes[0]}" alt="${habitacion}" class="card-img">
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <h4 class="name">${habitacionData.nombre}</h4>
                        <p class="description">${habitacionData.detalles}</p>
                        <div class="card-link">
                            <a href="#" class="btn btn-outline-sepia" data-tipo-habitacion="${habitacion}">Descubrir</a>
                        </div>
                    </div>                                   
                </div>`;
        }
        return html;
    };

    // Cargar el contenido de las habitaciones desde el archivo JSON
    cargarContenido(url, containerId, templateFunction)
        .then(() => {

            // Inicializar el carrusel de las habitaciones después de cargar el contenido
            inicializarSwiper();
        })
        .catch(error => console.error('Error al cargar el contenido de habitaciones:', error));
}

// Función para inicializar el carrusel de las habitaciones
function inicializarSwiper() {
    new Swiper(".slide-content", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        fade: true,
        grabCursor: true,
        zoom: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            620: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1240: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
}