// cargarinicio.js
export default function cargarInicio(carpetaPrueba, inicioContainer) {
    // Implementación para cargar el contenido de la sección de inicio
    fetch(`${carpetaPrueba}/json/imgcarousel.json`)
    .then(response => response.json())
    .then(data => {
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
        
        inicioContainer.innerHTML = `
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

        // Inicializar Swiper
        new Swiper('.mySwiper6', {
            loop: true,
            centeredSlides: true,
            // slidesPerView: "auto",
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            grabCursor: true,
            zoom: true,
            autoplay: {
                delay: 5000, // Intervalo de tiempo en milisegundos entre cada diapositiva
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

        // Ajustar el margen superior del carousel según el tipo de dispositivo
        ajustarMargenCarousel();
    })
    .catch(error => console.error('Error al cargar los datos de las imágenes:', error));
};
 function ajustarMargenCarousel () {
    // Obtener el alto de la barra de navegación según el tipo de dispositivo
    let navbarHeight;
    // if (window.innerWidth < 576) {
        // navbarHeight = document.querySelector('.navbar').offsetHeight;
        navbarHeight = 60;
    // } else {
        // navbarHeight = - document.querySelector('.navbar').offsetHeight; // Si no hay barra de navegación o es grande, no necesitas ajustar el margen
    // }
    // console.log(navbarHeight);
    // Ajustar el margen superior del carousel
    document.getElementById('carouselMontecarlo').style.marginTop = `${navbarHeight}px`;
};
