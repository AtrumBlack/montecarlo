// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Define la variable de la carpeta de prueba
    const carpetaPrueba = '';

    const inicioContainer = document.getElementById('contenidoInicio');
    const habitacionesContainer = document.getElementById('habitacionesContainer');

    // Cargar el archivo JSON con la información de las habitaciones
    fetch(`${carpetaPrueba}/json/habitaciones.json`)
        .then(response => response.json())
        .then(data => {
            const habitaciones = data.habitaciones;

            function cargarContenido(opcion) {
                fetch(`${carpetaPrueba}/${opcion}`)
                    .then(response => response.text())
                    .then(data => inicioContainer.innerHTML = data);
            }

            function cargarHabitacion(tipoHabitacion) {
                const habitacion = habitaciones[tipoHabitacion];

                if (habitacion) {
                    const html = `
                    <div class="container-fluid  p-4 rounded">
                        <h2 class="text-warning-emphasis mb-2">${habitacion.nombre}</h2>
                        <hr class="footer-divider-gruesa">
                        <div class="row row-cols-1 row-cols-md-2 g-4">

                            <div class="col">
                                <div class="d-flex flex-column align-items-start" style="max-width: 500px;">

                                    <!-- Carrusel de imágenes -->
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                            <div class="carousel-indicators">
                                                ${habitacion.imagenes.map((_, index) => `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${index + 1}"></button>`).join('')}
                                            </div>
                                            <div class="carousel-inner">
                                                ${habitacion.imagenes.map((imagen, index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                                                    <img src="${imagen}" class="d-block w-100" alt="Foto ${index + 1}">
                                                </div>`).join('')}
                                            </div>

                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>

                                    </div>

                                    <div class="card-body text-secondary">
                                     <p class="card-text">${habitacion.detalles}</p>
                                     </div>
                                </div>
                            </div>

                            

                            <div class="col ">
                                <div class="card h-100 mb-2  border-0 " style="width:  100%;  color: white;">
                                    <div class="text-start text-warning-emphasis" style="width:  100%;">
                                        Comodidades
  
                                    </div>
                                    <ul class="list-group list-group-flush ">
                                        ${habitacion.comodidades.map(comodidad => `
                                        <li class="list-group-item menu-item text-start text-secondary" >
                                            ${comodidad.cantidad
                            ? Array.from({ length: comodidad.cantidad }, (_, index) => `<i class="fa-solid ${comodidad.icono}"></i>`).join('')
                            : `<i class="fa-solid ${comodidad.icono}"></i>`
                        } ${comodidad.texto}
                                        </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </div>
                    `;

                    inicioContainer.innerHTML = html;
                } else {
                    inicioContainer.innerHTML = "<p>Habitación no disponible</p>";
                }
            }

            // Ahora, también puedes utilizar esta función para cargar habitaciones desde los botones en la sección de habitaciones.
            function cargarHabitacionDesdeBoton(event) {
                if (event.target.hasAttribute('data-tipo-habitacion')) {
                    const tipoHabitacion = event.target.getAttribute('data-tipo-habitacion');
                    cargarHabitacion(tipoHabitacion);
                }
            }

            // Evento de clic en el menú para cambiar el contenido de la sección 'inicio' o 'habitaciones'
            document.getElementById('menuContainer').addEventListener('click', function (event) {
                if (event.target.hasAttribute('data-opcion')) {
                    const opcion = event.target.getAttribute('data-opcion');

                    switch (opcion) {
                        case 'inicio':
                            //   alert('inicio');
                            cargarContenido(`carga_inicial/video_inicio.html`);
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'galeria':
                            alert('ubicGaleriaacuin');
                            //cargarContenido('video_inicio.html');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'dobleclasica':
                            // alert('doblesclasica');
                            cargarHabitacion('doble_clasica');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;

                        case 'doblesuperior':
                            // alert('doblesuperior');
                            cargarHabitacion('doble_superior');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'suite':
                            // alert('doblesuperior');
                            cargarHabitacion('doble_suite');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'triple':
                            // alert('doblesuperior');
                            cargarHabitacion('triple');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'familiar':
                            // alert('doblesuperior');
                            cargarHabitacion('familiar');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        case 'apart':
                            // alert('doblesuperior');
                            cargarHabitacion('apart');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);

                            break;
                        case 'apartsuperior':
                            // alert('doblesuperior');
                            cargarHabitacion('apart_superior');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);

                            break;
                        case 'contacto':
                            cargarContenido('contactos/contacto.html');
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            break;
                        default:
                            //cargarHabitacion(opcion);
                            break;
                    }
                }
            });

            // Evento de clic en los botones "Ver Habitación" en la sección de habitaciones
            document.getElementById('habitacionesContainer').addEventListener('click', cargarHabitacionDesdeBoton);

        })
        .catch(error => console.error('Error al cargar los datos de habitaciones:', error));
});
