import cargarContenido from '../utils/contentHandler.js';

export default function cargarInicio(inicioContainer) {
    const url = `./json/imgcarousel.json`;
    const templateFunction = function (data) {
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
    cargarContenido(url, inicioContainer.id, templateFunction)
        .then(() => {
            inicializarSwiper();
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
    let navbarHeight = 60; // Suponiendo que siempre sea 60px
    document.getElementById('carouselMontecarlo').style.marginTop = `${navbarHeight}px`;
}
