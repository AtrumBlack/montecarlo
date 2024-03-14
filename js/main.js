// main.js

// Importar funciones para cargar diferentes secciones del sitio
import cargarInicio from './contentLoader/cargarInicio.js';
import cargarGaleria from './contentLoader/cargarGaleria.js';
import cargarHabitaciones from './contentLoader/cargarHabitaciones.js';
import cargarContacto from './contentLoader/cargarContacto.js';
import cargarHabMenu from './contentLoader/cargarHabMenu.js';
import cargarTipoHab from './contentLoader/cargarTipoHab.js';
import myFooter from './myFooter.js';

function iniciarApp() {
    // Objeto miApp que contiene métodos y propiedades relacionadas con la aplicación
    const miApp = {
        // Contenedor para la sección de inicio
        inicioContainer: document.getElementById('contenidoInicio'),
        habitacionesContainer: document.getElementById('habitacionesContainer'),
        // Método para ajustar la altura mínima de las tarjetas de habitación
        ajustarAlturaTarjetas: function () {
            // Obtener todas las tarjetas de habitación
            const cards = document.querySelectorAll(".card");
            let maxHeight = 0;
            // Calcular la altura máxima de las tarjetas
            for (const card of cards) {
                const cardHeight = card.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            }
            // Establecer la altura mínima de todas las tarjetas
            for (const card of cards) {
                card.style.minHeight = maxHeight + 'px';
            }
        },
        // Método para cambiar el color de la barra de navegación al desplazarse
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
        // Método para cargar diferentes secciones del sitio según la opción seleccionada en el menú
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
        // Controlador de eventos para hacer clic en el menú de navegación
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
        // Controlador de eventos para hacer clic en el menú del pie de página
        pieMenuClickHandler: function (event) {
            if (event.target.hasAttribute('data-opcion')) {
                const opcion = event.target.getAttribute('data-opcion');
                miApp.cargarOpcionMenu(opcion);
            }
        },
        // Controlador de eventos para hacer clic en los botones de tipo de habitación
        habitacionButtonClickHandler: function (event) {
            if (event.target.hasAttribute('data-tipo-habitacion')) {
                document.getElementById('contenidoInicio').style.marginTop = `${60}px`;
                const tipoHabitacion = event.target.getAttribute('data-tipo-habitacion');
                cargarTipoHab(tipoHabitacion,miApp.inicioContainer);
            }
        },
        // Método de inicialización de la aplicación
        init: function () {
            // Cargar la sección de inicio, las habitaciones y el pie de página
            cargarInicio(miApp.inicioContainer);
            cargarHabitaciones();
            myFooter();
            // Detectar el desplazamiento de la página
            this.detectarBajadaPagina();
            // Agregar controladores de eventos a los elementos del DOM
            document.getElementById('menuContainer').addEventListener('click', this.menuClickHandler.bind(this));
            document.getElementById('roomCards').addEventListener('click', this.habitacionButtonClickHandler.bind(this));
            document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));
        }
    };
    // Inicializar la aplicación cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function () {
        miApp.init();
    });
}
// Llamar a la función iniciarApp para iniciar la aplicación
iniciarApp();
