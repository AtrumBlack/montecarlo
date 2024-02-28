import cargarContenido from '../utils/contentHandler.js';

export default function cargarInicio(carpetaPrueba, inicioContainer) {
    // URL del archivo JSON del carousel de imágenes
    const url = `${carpetaPrueba}/json/imgcarousel.json`;

    // Función de plantilla para generar el HTML del carousel de imágenes
    const templateFunction = function (data) {
        // Generar el contenido del carousel utilizando los datos obtenidos
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
        // console.log(carouselItems);
        // Construir la estructura completa del carousel
        const carouselHTML = `
        <div class="contenedor-bienvenida" id="carouselMontecarlo">
            <div class="mySwiper6">
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

    // Llamar a la función genérica para cargar el contenido
    cargarContenido(url, inicioContainer.id, templateFunction)
        .then(() => {
            // Inicializar Swiper después de que se haya agregado todo el contenido
            inicializarSwiper();

            // Ajustar el margen superior del carousel
            ajustarMargenCarousel();
        })
        .catch(error => console.error('Error al cargar el contenido de inicio:', error));
}

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

function ajustarMargenCarousel() {
    // Obtener el alto de la barra de navegación según el tipo de dispositivo
    let navbarHeight = 60; // Suponiendo que siempre sea 60px

    // Ajustar el margen superior del carousel
    document.getElementById('carouselMontecarlo').style.marginTop = `${navbarHeight}px`;
}
