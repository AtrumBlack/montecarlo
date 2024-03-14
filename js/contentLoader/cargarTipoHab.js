//cargarTipoHab.js

// Esta función carga el contenido de una habitación específica
export default function cargarTipoHab(tipoHabitacion, inicioContainer) {

    // Realiza una solicitud para obtener el archivo JSON que contiene la información de las habitaciones
    fetch('./json/habitaciones.json')
        .then(response => {

            // Verifica si la respuesta de la red es satisfactoria
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convierte la respuesta en formato JSON
            return response.json();
        })
        
        .then(data => {
            // Validar la estructura del archivo JSON
            validarEstructura(data);

            // Obtiene los datos de la habitación específica del archivo JSON
            const habitacion = data.habitaciones[tipoHabitacion];
            if (habitacion) {

                // Genera el HTML con la información de la habitación
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

                // Inserta el HTML generado en el contenedor especificado
                inicioContainer.innerHTML = html;

                // Inicializa el swiper para la galería de imágenes
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

                // Si la habitación no está disponible, muestra un mensaje
                inicioContainer.innerHTML = "<p>Habitación no disponible</p>";
            }
        })
        .catch(error => {

            // Si hay algún error, imprímelo en la consola
            console.error('Error al cargar el archivo JSON de habitaciones:', error);
        });
}
// Función para validar la estructura del archivo JSON
function validarEstructura(data) {

    // Verifica si el objeto data no está vacío y contiene la propiedad 'habitaciones'
    if (!data || typeof data !== 'object' || !data.habitaciones) {
  
        // Si la estructura del archivo JSON no es válida, lanza un error
        throw new Error('El formato del archivo JSON no es válido.');
    }
}