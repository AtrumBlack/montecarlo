// main.js
// (function () {
import cargarInicio from './contentLoader/cargarInicio.js';
import cargarGaleria from './contentLoader/cargarGaleria.js';
import cargarHabitaciones from './contentLoader/cargarHabitaciones.js';
import cargarContacto from './contentLoader/cargarContacto.js';
import cargarHabMenu from './contentLoader/cargarHabMenu.js';

import myFooter from './myFooter.js';

// document.addEventListener('DOMContentLoaded', function () {

function iniciarApp() {

    const miApp = {

        carpetaPrueba: '',
        inicioContainer: document.getElementById('contenidoInicio'),
        habitacionesContainer: document.getElementById('habitacionesContainer'),

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
        cargarHabitacionBis: function (tipoHabitacion) {
            console.log(this.habitaciones);
            console.log(habitaciones);

            const habitacion = this.habitaciones[tipoHabitacion];
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

                this.inicioContainer.innerHTML = html;

                // Inicializar Swiper después de insertar el contenido
                var swiper = new Swiper('.mySwiper5', {
                    loop: true,
                    zoom: true,
                    spaceBetween: 30,
                    // slidesPerView: 4,
                    // freeMode: true,
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
                this.inicioContainer.innerHTML = "<p>Habitación no disponible</p>";
            }
        },
        // Función para cargar el contenido según la opción seleccionada en el menú
        cargarOpcionMenu: function (opcion) {
            switch (opcion) {
                case 'inicio':
                    // alert('probando')
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    // this.caragarBienvenidaBis();
                    // contentLoader.cargarInicio();
                    cargarInicio(miApp.carpetaPrueba, miApp.inicioContainer);
                    // window.scrollTo(0, 0);
                    window.scrollTo(0, 0);
                    break;
                case 'galeria':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    // this.cargarGaleriaSwiper();
                    // contentLoader.cargarGaleria();
                    cargarGaleria(miApp.carpetaPrueba, miApp.inicioContainer);
                    //caragarBienvenida('video_inicio.html');
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;
                case 'habitaciones':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    // alert('doblesclasica');
                    // this.caragarHabInicial();
                    cargarHabMenu(miApp.inicioContainer);
                    // Desplazar la página al principio después de cargar el contenido
                    window.scrollTo(0, 0);
                    break;

                case 'contacto':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;

                    // this.cargarContacto();
                    // contentLoader.cargarContacto();
                    cargarContacto();
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
                console.log("Tipo de habitación:", tipoHabitacion);
                // console.log("Tipo de habitación:",this.habitaciones);
                // this.cargarHabitacion(tipoHabitacion);
                this.cargarHabitacionBis(tipoHabitacion);



            }
        },

        // Método de inicialización de la aplicación
        init: function () {

            cargarInicio(miApp.carpetaPrueba, miApp.inicioContainer);
            cargarHabitaciones(miApp.carpetaPrueba);
            myFooter(miApp.carpetaPrueba);
            this.detectarBajadaPagina();

            document.getElementById('menuContainer').addEventListener('click', this.menuClickHandler.bind(this));

            document.getElementById('roomCards').addEventListener('click', this.habitacionButtonClickHandler.bind(this));

            // document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));


        }
    };
    // Inicializar la aplicación al cargar el DOM
    document.addEventListener('DOMContentLoaded', function () {
        miApp.init();
    });
}
// }).catch(error => {
//     console.error('Error al importar contentLoader.js:', error);
// });
// })();
// Llamar a la función principal para iniciar la aplicación
iniciarApp();
