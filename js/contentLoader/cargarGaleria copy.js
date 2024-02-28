export default function cargarGaleria(carpetaPrueba, inicioContainer) {
    // Implementación para cargar el contenido de la galería
    inicioContainer.innerHTML = `
    <div class="container-fondo">
            <div class="container-galeria">
                <!-- Swiper principal -->
                <div  class="swiper mySwiper2">
                    <div class="text-galeria">
                        <h1 class="text-galeria-escrito">Galeria de Fotos</h1> 
                    </div>
                    <div class="swiper-wrapper">
            
                        <!-- Slides del swiper principal -->
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

            </div>
    </div>
`;

// Fetch JSON data
fetch(`${carpetaPrueba}/json/contenido.json`)
    .then(response => response.json())
    .then(data => {

        // Populate swiper with JSON data
        var swiperWrapper = document.querySelector('.mySwiper2 .swiper-wrapper');
        // var thumbsWrapper = document.querySelector('.mySwiper .swiper-wrapper');

        var swiperSlidesHTML = '';
        // var thumbsSlidesHTML = '';

        data.contenidos.forEach(function (contenido) {

            // var slide = document.createElement('div');
            // slide.classList.add('swiper-slide');
            var slideHTML = '';
            if (contenido.tipo === 'imagen') {
                slideHTML = `
            <div class="swiper-slide">
                <div class="swiper-zoom-container">
                    <img src="${contenido.url}" alt="${contenido.titulo}">
                </div>
            </div>
        `;

                // } else if (contenido.tipo === 'video') {

                //     var video = document.createElement('video');
                //     video.src = contenido.url;
                //     video.controls = true;
                //     video.autoplay = false;
                //     video.loop = true;
                //     video.muted = true; // Muted by default, you may change this as needed
                //     slide.appendChild(video);
            }

            swiperSlidesHTML += slideHTML;
            // thumbsSlidesHTML += slideHTML;
        });

        swiperWrapper.innerHTML = swiperSlidesHTML;
        // thumbsWrapper.innerHTML = thumbsSlidesHTML;
        // var swiper = new Swiper(".mySwiper", {
        //     loop: true,
        //     spaceBetween: 10,
        //     slidesPerView: 4,
        //     freeMode: true,
        //     watchSlidesProgress: true,
        // });
        var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
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



    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
};