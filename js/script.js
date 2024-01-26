// script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menuContainer');
    const inicioContainer = document.getElementById('contenidoInicio');
    // const carouselContainer = document.getElementById('carouselContainer');
    const habitacionesContainer = document.getElementById('habitacionesContainer');
    const videoContainer = document.getElementById('contenidoInicio');
    const pieContainer = document.getElementById('pieContainer');

    // // Función genérica para cargar contenido desde un archivo HTML
    // function cargarContenido(container, filename) {
    //     fetch(filename)
    //         .then(response => response.text())
    //         .then(data => container.innerHTML = data);
    // }

    // Función para cargar el contenido de la sección 'inicio' utilizando AJAX
    function cargarContenido(opcion) {
        fetch(opcion)
            .then(response => response.text())
            .then(data => inicioContainer.innerHTML = data);
    }


    // Evento de clic en el menú para cambiar el contenido de la sección 'inicio'
    menuContainer.addEventListener('click', function (event) {
        if (event.target.hasAttribute('data-opcion')) {
            const opcion = event.target.getAttribute('data-opcion');

            // Cambia el contenido de la sección 'inicio' según la opción seleccionada
            switch (opcion) {
                case 'inicio':
                    //  alert('inicio');
                    cargarContenido('/carga_inicial/video_inicio.html');
                    break;
                case 'galeria':
                    alert('ubicGaleriaacuin');
                    //cargarContenido('video_inicio.html');
                    break;
                //    case 'habitaciones':
                //     alert('habitaciones');
                //    //cargarContenido('video_inicio.html');
                //    break;
                case 'dobleclasica':
                    // alert('doblesclasica');
                    cargarContenido('/habitaciones/doble_clasica.html');
                    break;
                case 'doblesuperior':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/doble_superior.html');
                    break;
                case 'suite':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/doble_suite.html');
                    break;
                case 'triple':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/triple.html');
                    break;
                case 'familiar':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/familiar.html');
                    break;
                case 'apart':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/apart.html');
                    break;
                case 'apartsuperior':
                    // alert('doblesuperior');
                    cargarContenido('/habitaciones/apart_superior.html');
                    break;
                    case 'contacto':
                        // alert('doblesuperior');
                        cargarContenido('/contactos/contacto.html');
                        break;
                // Agrega más casos según tus necesidades
                default:
                // cargarContenido('video_inicio');
            }
        }
    });

    // ... (otros scripts adicionales si es necesario) ...
});
