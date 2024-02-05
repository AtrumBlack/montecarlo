// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Define la variable de la carpeta de prueba
    const carpetaPrueba = '';

    const inicioContainer = document.getElementById('contenidoInicio');
    const habitacionesContainer = document.getElementById('habitacionesContainer');

    const imagenes = [
        { ruta: "/img/inicio/fotos12.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos01Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos11bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos15Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos05Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos13bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." }
    ];
    // Cargar el archivo JSON con la información de las habitaciones
    fetch(`${carpetaPrueba}/json/habitaciones.json`)
        .then(response => response.json())
        .then(data => {
            const habitaciones = data.habitaciones;

            function cargarContacto(opcion) {
                fetch(`${carpetaPrueba}/${opcion}`)
                    .then(response => response.text())
                    .then(data => inicioContainer.innerHTML = data);
            };
            function cargarContenido() {
                inicioContainer.innerHTML = `
                <div id="carouselMontecarlo" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${imagenes.map(crearCarouselItem).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselMontecarlo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselMontecarlo" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <div class="carousel-indicators">
                        ${imagenes.map((_, index) => crearIndicatorButton(index)).join('')}
                    </div>
                </div>

                 `;

            }

            // Función para crear elementos del carousel
            const crearCarouselItem = (imagen, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${imagen.ruta}" class="d-block w-100" alt="foto${index + 1}">
                    <div class="carousel-caption d-none d-md-block">
                        <p>${imagen.texto}</p>
                    </div>
                </div>
            `;

            // Función para crear indicadores del carousel
            const crearIndicatorButton = (index) => `
                <button type="button" data-bs-target="#carouselMontecarlo" 
                        data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></button>
            `;


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

            // Función para cargar el contenido de las habitaciones
            function cargarHabitacionesCard() {
                const habitacionesHTML = Object.keys(habitaciones).map(tipoHabitacion => {
                    const habitacion = habitaciones[tipoHabitacion];

                    return `
                                    <div class="col col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center">
                                        <div class="card h-100 border-secondary mb-3">
                                            <img src="${habitacion.imagenes[0]}" class="card-img-top" alt="${tipoHabitacion}">
                                            <div class="card-body">
                                                <h5 class="card-title">${habitacion.nombre}</h5>
                                                <p class="card-text">${habitacion.detalles}</p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#" class="btn btn-primary" data-tipo-habitacion="${tipoHabitacion}">Ver Habitacion</a>
                                            </div>
                                        </div>
                                    </div>
                                `;
                }).join('');

                habitacionesContainer.innerHTML = `
                   <div class="rounded mb-4">
                        <!-- Línea separadora -->
                        <hr class="footer-divider">
                        <h2 class="text-dark p-4">Nuestras Habitaciones</h2>
                        <div class="container">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                ${habitacionesHTML}
                            </div>
                        </div>
                    </div>
                            `;
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

                    // Quita la clase 'active' de todos los elementos del menú
                    const menuItems = document.querySelectorAll('.nav-link[data-opcion]');
                    menuItems.forEach(item => item.classList.remove('active'));

                    // Quita la clase 'active' de todos los elementos del menú
                    const dropItems = document.querySelectorAll('.dropdown-item[data-opcion]');
                    dropItems.forEach(item => item.classList.remove('active'));
                    // Agrega la clase 'active' al elemento clicado
                    event.target.classList.add('active');


                    switch (opcion) {
                        case 'inicio':
                            //   alert('inicio');
                            cargarContenido();
                            // Desplazar la página al principio después de cargar el contenido
                            window.scrollTo(0, 0);
                            // Agregar clases específicas para estilos
                            // document.getElementById('contenidoInicio').classList.add('inicio-styles');
                            // document.getElementById('carouselMontecarlo').classList.add('inicio-styles');

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
                            cargarContacto('contactos/contacto.html');
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
            cargarContenido();
            // Llama a la función para cargar las habitaciones al cargar la página
            cargarHabitacionesCard();



        })
        .catch(error => console.error('Error al cargar los datos de habitaciones:', error));
});
