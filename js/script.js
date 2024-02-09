// Script.js

document.addEventListener('DOMContentLoaded', function () {
    const miApp = {
        carpetaPrueba: '',
        inicioContainer: document.getElementById('contenidoInicio'),
        habitacionesContainer: document.getElementById('habitacionesContainer'),
        // imagenes: [
        //     { ruta: "/img/inicio/fotos1.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        //     { ruta: "/img/inicio/fotos2.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        //     { ruta: "/img/inicio/fotos3.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        //     { ruta: "/img/inicio/fotos4.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        //     { ruta: "/img/inicio/fotos5.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        //     { ruta: "/img/inicio/fotos6.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." }
        // ],

        // // Función para crear elementos del carousel
        // crearCarouselItem: function (imagen, index) {
        //     return `
        //         <div class="carousel-item ${index === 0 ? 'active' : ''}">
        //             <img src="${imagen.ruta}" class="d-block w-100" alt="foto${index + 1}">
        //             <div class="carousel-caption d-none d-md-block">
        //                 <p>${imagen.texto}</p>
        //             </div>
        //         </div>
        //     `;
        // },

        // // Función para crear indicadores del carousel
        // crearIndicatorButton: function (index) {
        //     return `
        //         <button type="button" data-bs-target="#carouselMontecarlo" 
        //                 data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></button>
        //     `;
        // },

        crearCarouselItem: function (imagen, index) {
            return `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${imagen.ruta}" class="d-block w-100" alt="foto${index + 1}">
                    <div class="carousel-caption d-none d-md-block">
                        <p>${imagen.texto}</p>
                    </div>
                </div>
            `;
        },

        crearIndicatorButton: function (index) {
            return `
                <button type="button" data-bs-target="#carouselMontecarlo" 
                        data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></button>
            `;
        },

        // // Función para cargar el contenido de la sección de inicio
        // cargarContenido: function () {
        //     this.inicioContainer.innerHTML = `
        //         <div id="carouselMontecarlo" class="carousel slide" data-bs-ride="carousel">
        //             <div class="carousel-inner">
        //                 ${this.imagenes.map(this.crearCarouselItem).join('')}
        //             </div>
        //             <button class="carousel-control-prev" type="button" data-bs-target="#carouselMontecarlo" data-bs-slide="prev">
        //                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //                 <span class="visually-hidden">Previous</span>
        //             </button>
        //             <button class="carousel-control-next" type="button" data-bs-target="#carouselMontecarlo" data-bs-slide="next">
        //                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //                 <span class="visually-hidden">Next</span>
        //             </button>
        //             <div class="carousel-indicators">
        //                 ${this.imagenes.map((_, index) => this.crearIndicatorButton(index)).join('')}
        //             </div>
        //         </div>
        //     `;
        // },

        // Función para cargar las habitaciones desde el JSON
        cargarHabitaciones: function () {
            fetch(`${this.carpetaPrueba}/json/habitaciones.json`)
                .then(response => response.json())
                .then(data => {
                    this.habitaciones = data.habitaciones;
                    this.cargarHabitacionesCard();
                })
                .catch(error => console.error('Error al cargar los datos de habitaciones:', error));
        },

        // // Función para cargar las fotos desde el JSON
        // cargarFotosCarousel: function () {
        //     fetch(`${this.carpetaPrueba}/json/imgCarousel.json`)
        //         .then(response => response.json())
        //         .then(data => {
        //             this.habitaciones = data.habitaciones;
        //             this.cargarCarousel();
        //         })
        //         .catch(error => console.error('Error al cargar los datos de habitaciones:', error));
        // },

        cargarContenido: function () {
            // Obtener las imágenes desde el archivo JSON
            fetch(`${this.carpetaPrueba}/json/imgcarousel.json`)
                .then(response => response.json())
                .then(data => {
                    // Generar el contenido del carousel utilizando los datos obtenidos
                    console.log(data);
                    this.inicioContainer.innerHTML = `
                        <div id="carouselMontecarlo" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${data.map((imagen, index) => this.crearCarouselItem(imagen, index)).join('')}
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
                                ${data.map((_, index) => this.crearIndicatorButton(index)).join('')}
                            </div>
                        </div>
                    `;
                })
                .catch(error => console.error('Error al cargar los datos de las imágenes:', error));
        },

        // Función para cargar el contenido de las habitaciones
        cargarHabitacionesCard: function () {
            const habitacionesHTML = Object.keys(this.habitaciones).map(tipoHabitacion => {
                const habitacion = this.habitaciones[tipoHabitacion];

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

            this.habitacionesContainer.innerHTML = `
                <div class="rounded mb-4">
                    <hr class="footer-divider">
                    <h2 class="text-dark p-4">Nuestras Habitaciones</h2>
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            ${habitacionesHTML}
                        </div>
                    </div>
                </div>
            `;
        },

        // Función para cargar la información de una habitación específica
        cargarHabitacion: function (tipoHabitacion) {
            const habitacion = this.habitaciones[tipoHabitacion];

            if (habitacion) {
                const html = `
                    <div class="container-fluid  p-4 rounded">
                        <h2 class="text-warning-emphasis mb-2">${habitacion.nombre}</h2>
                        <hr class="footer-divider-gruesa">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="d-flex flex-column align-items-start" style="max-width: 500px;">
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
                                    <div class="text-start text-warning-emphasis" style="width:  100%;">Comodidades</div>
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

                this.inicioContainer.innerHTML = html;
            } else {
                this.inicioContainer.innerHTML = "<p>Habitación no disponible</p>";
            }
        },

        // Función para cargar el contenido de contacto
        cargarContacto: function (opcion) {

            // fetch(`${this.carpetaPrueba}/${opcion}`)
            //     .then(response => response.text())
            //     .then(data => this.inicioContainer.innerHTML = data);
            var contactos = `
            <div class="container bg-transparente p-3 mt-1 rounded">
            <h2 class="text-warning-emphasis">CONTACTENOS</h2>
            <!-- Línea separadora -->
            <!-- <hr class="footer-divider-gruesa"> -->
        
            <!-- <div class="container bg-info p-5"> -->
        
            <div class="row row-cols-1 g-4 p-2 justify-content-center align-items-center">
        
                <div class="col col-sm-6 col-lg-4 ">
        
                    <div class="card h-100 border-0 mb-2" style="width:  100%;color: white;">
        
                        <div class="card-body text-secondary">
        
                            <h8 class="card-title text-start text-warning-emphasis">Calabria 1603 esq. Perez Bulnes | Mar del
                                Plata</h8>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2221.0452209256223!2d-57.551405622218304!3d-38.069629482160806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1706015106915!5m2!1ses-419!2sar"
                                class="img-fluid  w-100" width="400" height="250" frameborder="0"
                                style="border:0; height: 300px;" allowfullscreen="" aria-hidden="false" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" tabindex="0"></iframe>
        
                        </div>
        
                    </div>
        
                </div>
        
                <div class="col col-sm-6 col-lg-4 ">
                    <form id="miformulario">
        
                        <div class="mb-1">
        
                            <!-- <div class="col col-sm-6 col-lg-4 mb-4 "> -->
                            <label for="nombre" class="form-label text-white-50 text-warning-emphasis">Apellido, Nombre</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Apellido, Nombre"
                                aria-label="Apellido-Nombre">
                            <!-- </div> -->
        
                        </div>
        
                        <div class="mb-1">
                            <label for="email" class="form-label text-white-50 text-warning-emphasis">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="nombre@ejemplo.com">
                        </div>
        
                        <div class="mb-1">
                            <label for="mensaje" class="form-label text-white-50 text-warning-emphasis">Mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="3" name="mensaje"></textarea>
                        </div>
        
                        <button type="submit" class="btn btn-primary">Enviar</button>
        
                    </form>
        
                </div>
        
        
                <div class="col col-sm-6 col-lg-4 ">
        
                    <div class="card  h-100 border-0" style="width:  100%; color: white;">
        
                        <div class=" text-start text-warning-emphasis">Información de contacto
                            <!-- Línea separadora -->
                            <!-- <hr class="footer-divider-gruesa"> -->
                        </div>
        
                        <div class="card-body text-secondary">
                            <!-- <h5 class="card-title text-start">Información de contacto</h5> -->
                            <ul class="list-unstyled text-start">
                                <li>
                                    <i class="fas fa-phone-alt"></i> Tel: (0223) 484-2150 / 485-0267
                                </li>
                                <li>
                                    <i class="fab fa-whatsapp"></i> +54 9 223 446-2153
                                </li>
                                <li>
                                    <i class="fas fa-envelope"></i> reservas@montecarlohotelmdp.com
                                </li>
                                <li>
                                    <i class="fas fa-info-circle"></i> info@montecarlohotelmdp.com
                                </li>
                                <li>
                                    <i class="fab fa-instagram"></i> @montecarlohotel_mdp
                                </li>
                                <li>
                                    <i class="fab fa-facebook-f"></i> facebook.com/montecarlohotelmdp
                                </li>
                            </ul>
                        </div>
        
                    </div>
                </div>
        
        
        
            </div>
            <!-- </div> -->
            </div>


          `;
          
            // Obtener el elemento del footer
            var contacto = document.getElementById("contenidoInicio");
          
            // Insertar el contenido dentro del footer
            contacto.innerHTML = contactos;
                            // Llamar a la función para agregar el script
            this.agregarScriptEnviarEmail();
        },

        agregarScriptEnviarEmail: function () {
            // El script que deseas agregar
            //console.log('eahora si o no');
        
            //alert("que cosa");
            const enviarEmail = async (data) => {
                const response = await fetch("/montecarlo/contactos/enviar.php", {
                    method: "POST",
                    body: JSON.stringify(data),
                });
        
            if (response.ok) {
                mensajeRespuesta.textContent = "El correo electrónico se envió correctamente";
                mensajeRespuesta.classList.remove('error');
                mensajeRespuesta.classList.add('exito');
            } else {
                mensajeRespuesta.textContent = "Error al enviar el correo electrónico";
                mensajeRespuesta.classList.remove('exito');
                mensajeRespuesta.classList.add('error');
            }
            };
        
            document.querySelector("#miformulario").addEventListener("submit", (e) => {
                e.preventDefault();
        
                const nombre = document.querySelector("#nombre").value;
                const email = document.querySelector("#email").value;
                const mensaje = document.querySelector("#mensaje").value;
        
                const data = {
                    nombre,
                    email,
                    mensaje,
                };
                //console.log(data);
                enviarEmail(data);
            });
        },
        
        // Función para cargar el contenido según la opción seleccionada en el menú
        cargarOpcionMenu: function (opcion) {
            switch (opcion) {
                case 'inicio':
                    this.cargarContenido();
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
                    this.cargarHabitacion('doble_clasica');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;

                case 'doblesuperior':
                    // alert('doblesuperior');
                    this.cargarHabitacion('doble_superior');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;
                case 'suite':
                    // alert('doblesuperior');
                    this.cargarHabitacion('doble_suite');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;
                case 'triple':
                    // alert('doblesuperior');
                    this.cargarHabitacion('triple');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;
                case 'familiar':
                    // alert('doblesuperior');
                    this.cargarHabitacion('familiar');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;
                case 'apart':
                    // alert('doblesuperior');
                    this.cargarHabitacion('apart');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);

                    break;
                case 'apartsuperior':
                    this.cargarHabitacion('apart_superior');
                    window.scrollTo(0, 0);
                    break;
                case 'contacto':
                    this.cargarContacto();
                    window.scrollTo(0, 0);
                    break;
                default:
                    break;
            }
        },

        // Evento de clic en el menú para cambiar el contenido de la sección 'inicio' o 'habitaciones'
        menuClickHandler: function (event) {
            if (event.target.hasAttribute('data-opcion')) {
                const opcion = event.target.getAttribute('data-opcion');

                const menuItems = document.querySelectorAll('.nav-link[data-opcion]');
                menuItems.forEach(item => item.classList.remove('active'));

                const dropItems = document.querySelectorAll('.dropdown-item[data-opcion]');
                dropItems.forEach(item => item.classList.remove('active'));

                event.target.classList.add('active');

                this.cargarOpcionMenu(opcion);
            }
        },

        // Evento de clic en los botones "Ver Habitación" en la sección de habitaciones
        habitacionButtonClickHandler: function (event) {
            if (event.target.hasAttribute('data-tipo-habitacion')) {
                const tipoHabitacion = event.target.getAttribute('data-tipo-habitacion');
                this.cargarHabitacion(tipoHabitacion);
            }
        },

        // Método de inicialización de la aplicación
        init: function () {
            this.cargarContenido();
            this.cargarHabitaciones();

            document.getElementById('menuContainer').addEventListener('click', this.menuClickHandler.bind(this));
            document.getElementById('habitacionesContainer').addEventListener('click', this.habitacionButtonClickHandler.bind(this));
        }
    };

    miApp.init();
});