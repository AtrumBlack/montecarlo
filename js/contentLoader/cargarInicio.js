// cargarInicio.js

// Importar la función cargarContenido del módulo contentHandler.js ubicado en la carpeta utils
import cargarContenido from '../utils/contentHandler.js';

// Función para cargar el contenido relacionado con la página de inicio
export default function cargarInicio(inicioContainer) {
    // URL del archivo JSON que contiene los datos del carrusel de imágenes
    const url = `./json/imgcarousel.json`;

    // Función para validar la estructura del archivo JSON
    function validarEstructura(data) {
        if (!data || !Array.isArray(data) || data.length === 0 || !data.every(item => item.ruta && item.texto)) {
            throw new Error('El formato del archivo JSON de imágenes del carrusel no es válido.');
        }
    }
    const templateFunction = function (data) {

        // Validar la estructura del archivo JSON
        validarEstructura(data);

        let carouselItems = data.map(imagen => `
            <div class="swiper-slide">
                <div class="image-content">
                    <div class="card-image">
                        <div class="swiper-zoom-container">
                            <img src="${imagen.ruta}" alt="${imagen.texto}">
                        </div>
                        <div class="card-content">
                            <p class="description">${imagen.texto}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        const carouselHTML = `
            <div class="contenedor-bienvenida" id="carouselMontecarlo">
                <div class="mySwiper6" id="mySwiper6">
                    <h1 class="text-titulo-bienvenido">Bienvenido</h1>
                    <div class="swiper-wrapper">
                        ${carouselItems}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        `;
        return carouselHTML;
    };
    // Cargar el contenido utilizando la función cargarContenido del módulo contentHandler.js
    cargarContenido(url, inicioContainer.id, templateFunction)
        .then(() => {
            // Inicializar el carrusel después de cargar el contenido
            inicializarSwiper();
            // Ajustar el margen del carrusel para evitar solapamientos con la barra de navegación
            ajustarMargenCarousel();
        })
        .catch(error => console.error('Error al cargar el contenido de inicio:', error));
}
// Función para inicializar el carrusel utilizando Swiper
function inicializarSwiper() {
    new Swiper('.mySwiper6', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        grabCursor: true,
        zoom: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
// Función para ajustar el margen del carrusel para evitar solapamientos con la barra de navegación
function ajustarMargenCarousel() {
    let navbarHeight = 60; // Suponiendo que siempre sea 60px
    document.getElementById('carouselMontecarlo').style.marginTop = `${navbarHeight}px`;
}
