// Script.js
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const miApp = {
            carpetaPrueba: '',
            inicioContainer: document.getElementById('contenidoInicio'),
            habitacionesContainer: document.getElementById('habitacionesContainer'),


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

            cargarHabitacionesCarouselBIS: function () {

                // document.addEventListener("DOMContentLoaded", function () {
                // Obtener el elemento contenedor de las tarjetas
                const roomCardsContainer = document.getElementById("roomCards");


                // Realizar la solicitud para obtener el archivo JSON
                fetch("/json/habitaciones.json")
                    .then(response => response.json())
                    .then(data => {
                        this.habitaciones = data.habitaciones;
                        // Recorrer el objeto JSON y construir las tarjetas
                        for (const habitacion in data.habitaciones) {
                            const habitacionData = data.habitaciones[habitacion];
                            const card = document.createElement("div");

                            card.classList.add("swiper-slide");
                            // console.log(card);
                            // Construir la estructura de la tarjeta
                            card.innerHTML = `
                                    <div class="image-content">
                                        <span class="overlay"></span>
                                    
                                        <div class="card-image">
                                        <div class="swiper-zoom-container">
                                            <img src="${habitacionData.imagenes[0]}" alt="${habitacion}" class="card-img" >
                                        </div>
                                        </div>

                                    </div>
                                    <div class="card-content">
                                        
                                            <h4 class="name">${habitacionData.nombre}</h4>
                                        
                                        
                                            <p class="description">${habitacionData.detalles}</p>
                                        
                                        <div class="card-link">
                                        <a href="#" class="btn btn-outline-sepia" data-tipo-habitacion="${habitacion}">Descubrir</a>
                                        </div>
                                    </div>                                   
                                   
                                
                            `;


                            // Agregar la tarjeta al contenedor
                            roomCardsContainer.appendChild(card);
                        }
                        // const swiper = new Swiper(".swiper-container", {
                        // Inicializar Swiper después de que se hayan agregado todas las tarjetas
                        const swiper = new Swiper(".slide-content", {

                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                                // Posiciona las flechas en cada extremo
                                // position: 'both',
                                // margin: 50,
                            },
                            loop: true,
                            centeredSlides: true,
                            slidesPerView: "auto",
                            slidesPerView: 1,
                            spaceBetween: 10,
                            fade: true,
                            grabCursor: true,
                            zoom: true,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                                // margin: 50,
                                dynamicBullets: true,
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
                        // Asignar estilos a las tarjetas
                        //   this.ajustarAlturaTarjetas();
                    })
                    .catch(error => console.error('Error al cargar el archivo JSON:', error));

            },

            cargarGaleriaSwiper: function () {

                this.inicioContainer.innerHTML = `
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
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
        
                        <!-- Swiper para thumbs -->
                        <div thumbsSlider="" class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <!-- Slides para thumbs -->
                            </div>
                        </div>
                    </div>
            </div>
            `;

                // Fetch JSON data
                fetch("/json/contenido.json")
                    .then(response => response.json())
                    .then(data => {

                        // Populate swiper with JSON data
                        var swiperWrapper = document.querySelector('.mySwiper2 .swiper-wrapper');
                        var thumbsWrapper = document.querySelector('.mySwiper .swiper-wrapper');

                        var swiperSlidesHTML = '';
                        var thumbsSlidesHTML = '';

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
                            thumbsSlidesHTML += slideHTML;
                        });

                        swiperWrapper.innerHTML = swiperSlidesHTML;
                        thumbsWrapper.innerHTML = thumbsSlidesHTML;
                        var swiper = new Swiper(".mySwiper", {
                            loop: true,
                            spaceBetween: 10,
                            slidesPerView: 4,
                            freeMode: true,
                            watchSlidesProgress: true,
                        });
                        var swiper2 = new Swiper(".mySwiper2", {
                            loop: true,

                            zoom: true,

                            zoom: {
                                toggle: true, // Permitir alternar el zoom al hacer clic en la diapositiva
                            },
                            // fade: true,
                            spaceBetween: 10,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            },
                            thumbs: {
                                swiper: swiper,
                            },
                        });



                    })
                    .catch(error => console.error('Error al cargar el archivo JSON:', error));
            },


            // Función para ajustar la altura de las tarjetas
            ajustarAlturaTarjetas: function () {
                const cards = document.querySelectorAll(".card");
                let maxHeight = 0;

                for (const card of cards) {
                    const cardHeight = card.offsetHeight;
                    if (cardHeight > maxHeight) {
                        maxHeight = cardHeight;
                    }
                }

                for (const card of cards) {
                    card.style.minHeight = maxHeight + 'px';
                }
            },




            // Función para cargar las imagenes de bienvenida
            caragarBienvenida: function () {
                // Obtener las imágenes desde el archivo JSON
                fetch(`${this.carpetaPrueba}/json/imgcarousel.json`)
                    .then(response => response.json())
                    .then(data => {
                        // Generar el contenido del carousel utilizando los datos obtenidos
                        // console.log(data);
                        this.inicioContainer.innerHTML = `
                            <div id="carouselMontecarlo" class="carousel-fade" data-bs-ride="carousel">

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
                        // Ajustar el margen superior del carousel según el tipo de dispositivo
                        this.ajustarMargenCarousel();
                    })
                    .catch(error => console.error('Error al cargar los datos de las imágenes:', error));
            },

            ajustarMargenCarousel: function () {
                // Obtener el alto de la barra de navegación según el tipo de dispositivo
                let navbarHeight;
                // if (window.innerWidth < 576) {
                // navbarHeight = document.querySelector('.navbar').offsetHeight;
                navbarHeight = 0;
                // } else {
                // navbarHeight = - document.querySelector('.navbar').offsetHeight; // Si no hay barra de navegación o es grande, no necesitas ajustar el margen
                // }
                // console.log(navbarHeight);
                // Ajustar el margen superior del carousel
                document.getElementById('carouselMontecarlo').style.marginTop = `${navbarHeight}px`;
            },

            detectarBajadaPagina: function () {
                window.addEventListener('scroll', function () {
                    if (window.scrollY > 80) {
                        // Cambiar el color del navbar
                        document.querySelector('.navbar').classList.add('navbar-scroll');
                        document.querySelector('.navbar-nav .nav-link').classList.add('navbar-scroll');

                        // console.log('Se bajó la página');
                        // Puedes agregar más lógica aquí si es necesario
                    } else {
                        // Eliminar la clase que cambia el color del navbar si el usuario ha vuelto arriba
                        document.querySelector('.navbar').classList.remove('navbar-scroll');
                        // Eliminar la clase que cambia el color del navbar si el usuario ha vuelto arriba
                        document.querySelector('.navbar-nav .nav-link').classList.remove('navbar-scroll');
                    }
                });
            },

            // Función para cargar la habitacion incial
            caragarHabInicial: function () {
                const imagenHabitaciones = '/img/habitaciones/fotosHab.png'; // Ruta de la imagen que deseas mostrar

                this.inicioContainer.innerHTML = `
                <div class="hab_inicial" >

                    <img src="${imagenHabitaciones}" class="img-hab-inicial" alt="Habitaciones">
                </div>
            `;
            },

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

            // Función para cargar el contenido de las habitaciones
            cargarHabitacionesCard: function () {
                const habitacionesHTML = Object.keys(this.habitaciones).map(tipoHabitacion => {
                    const habitacion = this.habitaciones[tipoHabitacion];

                    return `
                        <div class="col col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card h-100 border-secondary mb-3">
                                <img src="${habitacion.imagenes[0]}" class="card-img-top" alt="${tipoHabitacion}">
                                <div class="card-title-overlay top-0 start-0 p-2 rounded" style="width: 100%;">
                                    <h5 class="card-title text-titulo-card" style=" font-size: 24px;">${habitacion.nombre}</h5>
                                </div>
                                <div class="card-body">
                                    
                                    <p class="card-text text-titulo-card">${habitacion.detalles}</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-outline-sepia" data-tipo-habitacion="${tipoHabitacion}">Descubrir</a>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                this.habitacionesContainer.innerHTML = `
                    <div class="rounded mb-4">
                        <hr class="footer-divider">
                        <h2 class="text-titulo-card p-4">Nuestras Habitaciones</h2>
                        <div class="container">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                ${habitacionesHTML}
                            </div>
                        </div>
                    </div>
                `;
            },

            // Función para cargar las habitaciones desde el JSON
            cargarHabitacionesParaCarousel: function () {
                fetch(`${this.carpetaPrueba}/json/habitaciones.json`)
                    .then(response => response.json())
                    .then(data => {
                        this.habitaciones = data.habitaciones;

                        this.cargarHabitacionesCarousel();
                        // console.log(this.habitacionesContainer);
                    })
                    .catch(error => console.error('Error al cargar los datos de habitaciones:', error));
            },

            cargarHabitacionesCarousel: function () {
                let isFirst = true; // Variable para verificar si es el primer elemento
                const habitacionesHTML = Object.keys(this.habitaciones).map(tipoHabitacion => {
                    const habitacion = this.habitaciones[tipoHabitacion];

                    // Si es el primer elemento, agregar la clase active
                    const activeClass = isFirst ? 'active' : '';
                    isFirst = false; // Cambiar el valor para los siguientes elementos
                    return `
                        <div class="carousel-item ${activeClass}">



                                <div class="card h-100 border-secondary mb-3">
                                    <img src="${habitacion.imagenes[0]}" class="card-img-top" alt="${tipoHabitacion}">
                                    <div class="card-title-overlay top-0 start-0 p-2 rounded" style="width: 100%;">
                                        <h5 class="card-title text-titulo-card" style=" font-size: 24px;">${habitacion.nombre}</h5>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text text-titulo-card">${habitacion.detalles}</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-outline-sepia" data-tipo-habitacion="${tipoHabitacion}">Descubrir</a>
                            
                                    </div>


                                </div>
                        </div>
                    `;
                }).join('');

                this.habitacionesContainer.innerHTML = `
                    <div id="carouselHabitacionesCard" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            ${habitacionesHTML}
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselHabitacionesCard" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselHabitacionesCard" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                `;
            },



            cargarGaleria: function () {
                fetch(`${this.carpetaPrueba}/json/contenido.json`)
                    .then(response => response.json())
                    .then(data => {
                        let contenidoHTML = '';

                        data.contenido.forEach(item => {
                            let colClass;
                            // Define la clase para el video siempre en una columna
                            if (item.tipo === 'video') {
                                colClass = 'col-sm-12 col-lg-12';
                            } else {
                                // Define la clase para las imágenes con dos columnas en tablets y tres en escritorio
                                colClass = 'col-lg-6 col-sm-6'; // Dos columnas en dispositivos medianos y grandes
                            }

                            contenidoHTML += `
                                <div class="${colClass} mb-4 mb-lg-0 text-center">
                                    <div class="card h-100 border-secondary mb-3">
                                        ${item.tipo === 'imagen' ? `<img src="${item.url}" class="card-img-top" alt="${item.titulo}">` : ''}
                                        ${item.tipo === 'video' ? `
                                            <div class="card-img-top embed-responsive embed-responsive-16by9">
                                                <video class="embed-responsive-item" controls>
                                                    <source src="${item.url}" type="video/mp4">
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>` : ''}
                                        <div class="card-body">
                                            <h5 class="card-title">${item.titulo}</h5>
                                            <p class="card-text">${item.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });

                        this.inicioContainer.innerHTML = `
                            <div class="container">
                                <div class="row ">
                                    ${contenidoHTML}
                                </div>
                            </div>
                        `;
                    })
                    .catch(error => console.error('Error al cargar los datos de contenido:', error));
            },



            // Función para cargar la información de una habitación específica
            cargarHabitacion: function (tipoHabitacion) {
                // console.log(tipoHabitacion);
                // console.log(this.habitaciones);
                const habitacion = this.habitaciones[tipoHabitacion];
                console.log(habitacion);
                if (habitacion) {
                    const html = `
                    <div class=" mb-4 rounded">
                    <h2 class="text-titulo-card p-4">${habitacion.nombre}</h2>
            
                    <div id="carouselHabitaciones" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                        ${habitacion.imagenes.map((_, index) => `<button type="button" data-bs-target="#carouselHabitaciones" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${index + 1}"></button>`).join('')}
                        </div>
                        <div class="carousel-inner">
                                    ${habitacion.imagenes.map((imagen, index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${imagen}" class="d-block w-100" alt="Foto ${index + 1}">

                                    <div class="carousel-caption d-none d-md-block ">
                                        <!-- <h5>${habitacion.nombre}</h5> -->
                                            
                                        <p style="color: white;">${habitacion.detalles}</p>
                                        
                                    </div>
                        </div>`).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselHabitaciones" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselHabitaciones" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            
                  <div class="row">
                  ${habitacion.comodidades.map(comodidad => `
                      <div class="col-md-6 mb-2">
                          <div class="card h-100 border-0  text-sepia">
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
                    <h2 class="text-contacto">CONTACTENOS</h2>

                    <div class="row row-cols-1 row-cols-md-2 g-4 p-2 justify-content-center align-items-center">
                    
                        <div class="col">

                                <form id="miformulario">
                                    <h2><span class="text-contacto-form text-opacity-75">Formulario de Contacto:</span></h2>
            
                                    <div class="mb-1">
                                        
                                        <label for="nombre" class="form-label text-sepia">Introduzca sus datos</label>
                                        <input type="text" class="form-control text-sepia" id="nombre" name="nombre" placeholder="Nombre"
                                            aria-label="Apellido-Nombre">
                       
                                    </div>
                    
                                    <div class="mb-1">
                                        <input type="email" class="form-control border " id="email" name="email" placeholder="Email" >
                                    </div>
                                    <div class="mb-1">
                                        <input type="telefono" class="form-control border " id="telefono" name="telefono" placeholder="Telefono">
                                    </div>       
                                    <div class="mb-1">
                                        <label for="mensaje" class="form-label text-sepia">Comentarios/Consultas:</label>
                                        <textarea class="form-control border " id="mensaje" rows="3" name="mensaje" placeholder="Comentarios/Consultas:"></textarea>
                                    </div>
                    
                                    <button type="submit" class="btn btn-outline-sepia">Enviar</button>
                    
                                </form>
                
                        </div>
                
                        <div class="col">

                            <div class="card  h-100 border-0" style="width:  100%; color: white;">
                
                                <div class="card-body text-secondary">
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
                
                        <div class="col-md-12">
                            <div class="card h-100 border-0 mb-2" style="color: white;">
                                    <div class="card-body text-secondary">
                                        <h8 class="card-title text-start text-sepia">Calabria 1603 esq. Perez Bulnes | Mar del
                                        Plata</h8>
                                        <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2221.0452209256223!2d-57.551405622218304!3d-38.069629482160806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1706015106915!5m2!1ses-419!2sar"
                                        class="img-fluid  w-100"  height="300" frameborder="0"
                                        style="border:0; height: 300px;" allowfullscreen="" aria-hidden="false" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade" tabindex="0"></iframe>
                
                                    </div>
                
                            </div>
                        </div>
                
                    </div>
                
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
                        const respuestaServidor = await response.json();
                        if (respuestaServidor.success) {
                            // Mostrar mensaje de éxito
                            mensajeRespuesta.textContent = "Correo electrónico enviado correctamente";
                            mensajeRespuesta.classList.remove('error');
                            mensajeRespuesta.classList.add('exito');
                        } else {
                            // Mostrar mensaje de error
                            mensajeRespuesta.textContent = respuestaServidor.message;
                            mensajeRespuesta.classList.remove('exito');
                            mensajeRespuesta.classList.add('error');
                        }
                    } else {
                        // Mostrar mensaje de error
                        mensajeRespuesta.textContent = "Error al enviar el correo electrónico";
                        mensajeRespuesta.classList.remove('exito');
                        mensajeRespuesta.classList.add('error');
                    }
                };

                document.querySelector("#miformulario").addEventListener("submit", (e) => {
                    e.preventDefault();

                    const nombre = document.querySelector("#nombre").value;
                    const email = document.querySelector("#email").value;
                    const telefono = document.querySelector("#telefono").value;
                    const mensaje = document.querySelector("#mensaje").value;


                    const data = {
                        nombre,
                        email,
                        telefono,
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
                        // alert('probando')
                        document.getElementById('contenidoInicio').style.marginTop = `${0}px`;
                        this.caragarBienvenida();
                        // window.scrollTo(0, 0);
                        window.scrollTo(0, 0);
                        break;
                    case 'galeria':
                        document.getElementById('contenidoInicio').style.marginTop = `${0}px`;
                        this.cargarGaleriaSwiper();
                        //caragarBienvenida('video_inicio.html');
                        // Desplazar la página al principio después de cargar el contenido
                        window.scrollTo(0, 0);
                        break;
                    case 'habitaciones':
                        document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                        // alert('doblesclasica');
                        this.caragarHabInicial();
                        // Desplazar la página al principio después de cargar el contenido
                        window.scrollTo(0, 0);
                        break;

                    case 'contacto':
                        document.getElementById('contenidoInicio').style.marginTop = `${60}px`;

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
                    // window.scrollTo(0, 0);
                    this.cargarOpcionMenu(opcion);




                }
            },

            // Evento de clic en los botones "Ver Habitación" en la sección de habitaciones
            habitacionButtonClickHandler: function (event) {
                if (event.target.hasAttribute('data-tipo-habitacion')) {
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    const tipoHabitacion = event.target.getAttribute('data-tipo-habitacion');
                    // console.log("Tipo de habitación:", tipoHabitacion);
                    this.cargarHabitacion(tipoHabitacion);

                }
            },

            // Método de inicialización de la aplicación
            init: function () {
                this.caragarBienvenida();
                // this.cargarHabitaciones();
                // this.cargarHabitacionesParaCarousel();
                // Invocamos la función para cargar el carrusel
                this.cargarHabitacionesCarouselBIS();
                this.detectarBajadaPagina();
                document.getElementById('menuContainer').addEventListener('click', this.menuClickHandler.bind(this));
                document.getElementById('roomCards').addEventListener('click', this.habitacionButtonClickHandler.bind(this));
                document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));

            }
        };

        miApp.init();
    });
})();


