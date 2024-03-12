// cargarHabitaciones.js
import cargarContenido from '../utils/contentHandler.js';

export default function cargarHabitaciones() {
    let containerId='roomCards';
    const url = `./json/habitaciones.json`;
    const templateFunction = function (data) {
        let html = '';
        for (const habitacion in data.habitaciones) {
            const habitacionData = data.habitaciones[habitacion];
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
    cargarContenido(url, containerId, templateFunction)
        .then(() => {
            inicializarSwiper();
        })
        .catch(error => console.error('Error al cargar el contenido de habitaciones:', error));
}
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