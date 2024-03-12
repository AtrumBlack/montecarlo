import cargarContenido from '../utils/contentHandler.js';

export default function cargarGaleria(inicioContainer) {
    const url = `./json/contenido.json`;
    if (!(inicioContainer instanceof HTMLElement)) {
        console.error('El segundo argumento debe ser un elemento HTML válido.');
        return;
    }
    const templateFunction = function (data) {
        data.contenidos.sort((a, b) => b.descripcion.localeCompare(a.descripcion));
        const grupos = {};
        data.contenidos.forEach(contenido => {
            if (!grupos[contenido.descripcion]) {
                grupos[contenido.descripcion] = [];
            }
            grupos[contenido.descripcion].push(contenido);
        });
        let swiperGroupsHTML = '';
        Object.entries(grupos).forEach(([descripcion, imagenes]) => {
            const swiperSlidesHTML = imagenes.map(contenido => `
                    <div class="swiper-slide">
                        <div class="swiper-zoom-container">
                            <img src="${contenido.url}" 
                            alt="${contenido.titulo}"
                            >
                        </div>
                    </div>
            `).join('');
            swiperGroupsHTML += `
                <div class="galeria-grupo" id="gallery--${descripcion.toLowerCase().replace(/\s+/g, '-')}">
                    <h2 class="text-galeria-grupos">${descripcion}</h2>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            ${swiperSlidesHTML}
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            `;
        });
        const galeriaHTML = `
            <div class="gallery-background">
                <div class="container-fondo">
                    <h1 class="text-galeria-escrito">Galeria de Fotos</h1> 
                    ${swiperGroupsHTML}
                </div>
            </div>
        `;
        return galeriaHTML;
    };
    cargarContenido(url, inicioContainer.id, templateFunction)
        .then(() => {
            console.log('Contenido cargado correctamente.');
            inicializarSwipers();
            inicializarZoom();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}
function inicializarSwipers() {
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach(swiperContainer => {
        const swiper = new Swiper(swiperContainer, {
            slidesPerView: 2,
            slidesPerColumn:2,
            grabCursor: true,
            spaceBetween: 5,
            zoom: false,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            breakpoints: {
                620: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },
                680: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                920: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                1240: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
            },
        });
    });
}
function inicializarZoom() {
    let isZoomIn = false;
    const zoomContainers = document.querySelectorAll('.swiper-zoom-container');
    zoomContainers.forEach(container => {
        container.addEventListener('click', function(event) {
            const img = container.querySelector('img');
            const zoomedContainer = document.createElement('div');
            zoomedContainer.classList.add('zoomed');
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', function() {
                zoomedContainer.remove();
            });
            const zoomButtonsContainer = document.createElement('div');
            zoomButtonsContainer.classList.add('zoom-buttons-container');
            const zoomInBtn = document.createElement('button');
            zoomInBtn.innerHTML = '<i class="fas fa-search-plus"></i>';
            zoomInBtn.classList.add('zoom-btn');
            zoomInBtn.addEventListener('click', function() {
                isZoomIn = true; // Indicar que se ha hecho clic en el botón de zoom in
                zoomedImage.style.cursor = 'zoom-in';
            });
            const zoomOutBtn = document.createElement('button');
            zoomOutBtn.innerHTML = '<i class="fas fa-search-minus"></i>';
            zoomOutBtn.classList.add('zoom-btn');
            zoomOutBtn.addEventListener('click', function() {
                isZoomIn = false; // Indicar que se ha hecho clic en el botón de zoom out
                zoomedImage.style.cursor = 'zoom-out';
            });
            zoomedContainer.appendChild(zoomButtonsContainer);
            zoomButtonsContainer.appendChild(zoomInBtn);
            zoomButtonsContainer.appendChild(zoomOutBtn);
            zoomedContainer.appendChild(closeBtn);
            const zoomedImage = img.cloneNode(true);
            zoomedImage.style.transform = 'scale(1)';
            zoomedImage.addEventListener('click', function() {
                console.log(isZoomIn);
                if (isZoomIn) { // Si el estado del zoom es zoom-in, se hace zoom-in
                    const currentScale = parseFloat(zoomedImage.style.transform.match(/scale\(([^)]+)\)/)[1]);
                    zoomedImage.style.transform = `scale(${currentScale + 0.1})`;
                } else { // Si el estado del zoom es zoom-out, se hace zoom-out
                    const currentScale = parseFloat(zoomedImage.style.transform.match(/scale\(([^)]+)\)/)[1]);
                    zoomedImage.style.transform = `scale(${currentScale - 0.1})`;
                }
            });
            zoomedContainer.appendChild(zoomedImage);
            document.body.appendChild(zoomedContainer);
        });
    });
}




