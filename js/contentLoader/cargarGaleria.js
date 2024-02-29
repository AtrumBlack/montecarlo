import cargarContenido from '../utils/contentHandler.js';

export default function cargarGaleria(carpetaPrueba, inicioContainer) {

    let containerId = 'swiper-mostrar';
    // URL del archivo JSON de contenido
    const url = `${carpetaPrueba}/json/contenido.json`;

    // Verificar si inicioContainer es un elemento HTML válido
    if (!(inicioContainer instanceof HTMLElement)) {
        console.error('El segundo argumento debe ser un elemento HTML válido.');
        return;
    }

    // Función de plantilla para generar el HTML de los slides
    const templateFunction = function (data) {

        let swiperSlidesHTML = data.contenidos.map(contenido => `
                        
            <div class="swiper-slide">

                        <div class="swiper-zoom-container">
                            <img src="${contenido.url}" alt="${contenido.titulo}" loading="lazy">
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>

            </div>
            
        `).join('');
        const galeriaHTML = `
        <div class="container-fondo">
            <div class="container-galeria">
                <!-- Swiper principal -->
                <div  class="mySwiper2">
                    <div class="text-galeria">
                        <h1 class="text-galeria-escrito">Galeria de Fotos</h1> 
                    </div>
                    <div class="swiper-wrapper">
                        ${swiperSlidesHTML}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
        `;
        return galeriaHTML;
    };

    // Llamar a la función genérica para cargar el contenido
    cargarContenido(url, inicioContainer.id, templateFunction)
        .then(() => {
            // Inicializar Swiper después de que se haya agregado todo el contenido
            inicializarSwiper();

            // Ajustar el margen superior del carousel
            // ajustarMargenCarousel();
        }).catch(error => console.error('Error al cargar el archivo JSON:', error));
    
}
// Función para inicializar Swiper
function inicializarSwiper() {
    new Swiper(".mySwiper2", {
        loop: true,
        lazy:true,
        slidesPerView: 2,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        zoom: true,

        zoom: {
            toggle: true, // Permitir alternar el zoom al hacer clic en la diapositiva
        },
        // fade: true,
        // spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
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