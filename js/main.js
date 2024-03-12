// main.js
import cargarInicio from './contentLoader/cargarInicio.js';
import cargarGaleria from './contentLoader/cargarGaleria.js';
import cargarHabitaciones from './contentLoader/cargarHabitaciones.js';
import cargarContacto from './contentLoader/cargarContacto.js';
import cargarHabMenu from './contentLoader/cargarHabMenu.js';
import cargarTipoHab from './contentLoader/cargarTipoHab.js';
import myFooter from './myFooter.js';

function iniciarApp() {
    const miApp = {
        carpetaPrueba: '../montecarlo',
        inicioContainer: document.getElementById('contenidoInicio'),
        habitacionesContainer: document.getElementById('habitacionesContainer'),
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
                } else {
                    document.querySelector('.navbar').classList.remove('navbar-scroll');
                    document.querySelector('.navbar-nav .nav-link').classList.remove('navbar-scroll');
                }
            });
        },
        cargarOpcionMenu: function (opcion) {
            switch (opcion) {
                case 'inicio':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    cargarInicio(miApp.inicioContainer);
                    window.scrollTo(0, 0);
                    break;
                case 'galeria':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    cargarGaleria(miApp.inicioContainer);
                    window.scrollTo(0, 0);
                    break;
                case 'habitaciones':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    cargarHabMenu(miApp.inicioContainer);
                    window.scrollTo(0, 0);
                    break;
                case 'contacto':
                    document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                    cargarContacto();
                    window.scrollTo(0, 0);
                    break;
                default:
                    break;
            }
        },
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
        pieMenuClickHandler: function (event) {
            if (event.target.hasAttribute('data-opcion')) {
                const opcion = event.target.getAttribute('data-opcion');
                miApp.cargarOpcionMenu(opcion);
            }
        },
        habitacionButtonClickHandler: function (event) {
            if (event.target.hasAttribute('data-tipo-habitacion')) {
                document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                const tipoHabitacion = event.target.getAttribute('data-tipo-habitacion');
                cargarTipoHab(tipoHabitacion,miApp.inicioContainer);
            }
        },
        init: function () {
            cargarInicio(miApp.inicioContainer);
            cargarHabitaciones();
            myFooter();
            this.detectarBajadaPagina();
            document.getElementById('menuContainer').addEventListener('click', this.menuClickHandler.bind(this));
            document.getElementById('roomCards').addEventListener('click', this.habitacionButtonClickHandler.bind(this));
            document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));
        }
    };
    document.addEventListener('DOMContentLoaded', function () {
        miApp.init();
    });
}
iniciarApp();
