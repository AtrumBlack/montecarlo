// script.js
document.addEventListener('DOMContentLoaded', function () {
    const inicioContainer = document.getElementById('contenidoInicio');
    const habitacionesContainer = document.getElementById('habitacionesContainer');

    // Cargar el archivo JSON con la información de las habitaciones
    fetch('../json/habitaciones.json')
        .then(response => response.json())
        .then(data => {
            const habitaciones = data.habitaciones;

            function cargarContenido(opcion) {
                fetch(opcion)
                    .then(response => response.text())
                    .then(data => inicioContainer.innerHTML = data);
            }

            function cargarHabitacion(tipoHabitacion) {
                const habitacion = habitaciones[tipoHabitacion];

                if (habitacion) {
                    const html = `
                    <div class="container-fluid bg-black p-5 rounded">
                        <h2 class="text-warning-emphasis mb-4">${habitacion.nombre}</h2>
                        <hr class="footer-divider-gruesa">
                        <div class="row row-cols-1 row-cols-md-3 g-4">

                            <div class="col">
                                <div class="d-flex justify-content-start" style="max-width: 500px;">

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
                                </div>
                            </div>

                            

                            <div class="col">
                            <div class="card h-100 border-black mb-3" style="width:  100%; background-color:black; color: white;">
                                <div class="card-header text-start" style="width:  100%; background-color: black;">
                                    Comodidades
                                    <hr class="footer-divider-gruesa">
                                </div>
                                <ul class="list-group list-group-flush " style="background-color:black;">
                                    ${habitacion.comodidades.map(comodidad => `
                                    <li class="list-group-item menu-item text-start text-secondary" style="background-color:black;">
                                    ${comodidad.cantidad
                            ? Array.from({ length: comodidad.cantidad }, (_, index) => `<i class="fa-solid ${comodidad.icono}"></i>`).join('')
                            : `<i class="fa-solid ${comodidad.icono}"></i>`
                        } ${comodidad.texto}
                                </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>

                            <div class="col">
                                <div class="card h-100 border-black mb-3" style="width:  100%; color: white;">
                                    <div class="card-body text-secondary fs-4" style="background-color:black;">
                                        <p class="card-text">${habitacion.detalles}</p>
                                    </div>
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
                            //  alert('inicio');
                            cargarContenido('../carga_inicial/video_inicio.html');
                            break;
                        case 'galeria':
                            alert('ubicGaleriaacuin');
                            //cargarContenido('video_inicio.html');
                            break;
                        case 'dobleclasica':
                            // alert('doblesclasica');
                            cargarHabitacion('doble_clasica');
                            break;

                        case 'doblesuperior':
                            // alert('doblesuperior');
                            cargarHabitacion('doble_superior');
                            break;
                        case 'suite':
                            // alert('doblesuperior');
                            cargarHabitacion('doble_suite');
                            break;
                        case 'triple':
                            // alert('doblesuperior');
                            cargarHabitacion('triple');
                            break;
                        case 'familiar':
                            // alert('doblesuperior');
                            cargarHabitacion('familiar');
                            break;
                        case 'apart':
                            // alert('doblesuperior');
                            cargarHabitacion('apart');
                            break;
                        case 'apartsuperior':
                            // alert('doblesuperior');
                            cargarHabitacion('apart_superior');
                            break;
                        case 'contacto':
                            cargarContenido('../contactos/contacto.html');
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
