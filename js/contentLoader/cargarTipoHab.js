export default function cargarTipoHab(tipoHabitacion, inicioContainer) {
    fetch('../../json/habitaciones.json')
    
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        
        .then(data => {

            const habitacion = data.habitaciones[tipoHabitacion];

            if (habitacion) {
                const html = `
                    <div class="container-Hab">
                        <div class="swiper mySwiper5">
                            <h1 class="text-titulo-card p-4">${habitacion.nombre}</h1>
                            <div class="swiper-wrapper">
                                ${habitacion.imagenes.map((imagen, index) => `
                                    <div class="swiper-slide">
                                        <div class="image-content">
                                            <span class="overlay"></span>
                                            <div class="card-image">
                                                <div class="swiper-zoom-container">
                                                    <img src="${imagen}" alt="Foto ${index + 1}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                        <div class="row">
                            <div class="card-content">
                                <p class="description">${habitacion.detalles}</p>
                            </div>
                            ${habitacion.comodidades.map(comodidad => `
                                <div class="col-md-6 mb-2">
                                    <div class="card h-100 border-0 text-sepia">
                                        <div class="card-body d-flex align-items-center">
                                            <i class="fa-solid ${comodidad.icono} me-2" style="font-size: 24px;"></i>
                                            <span style="font-size: 18px;">${comodidad.texto}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

                inicioContainer.innerHTML = html;

                // Inicializar Swiper después de insertar el contenido
                var swiper = new Swiper('.mySwiper5', {
                    loop: true,
                    zoom: true,
                    spaceBetween: 30,
                    watchSlidesProgress: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            } else {
                inicioContainer.innerHTML = "<p>Habitación no disponible</p>";
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON de habitaciones:', error);
        });
}
