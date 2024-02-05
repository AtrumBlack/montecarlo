document.addEventListener('DOMContentLoaded', function () {
    // Define la variable de la carpeta de prueba
    const carpetaPrueba = '';

    // Cargar contenido de menu.html
    const menuContainer = document.getElementById('menuContainer');
    fetch(`${carpetaPrueba}/carga_inicial/menu.html`)
        .then(response => response.text())
        .then(data => menuContainer.innerHTML = data);

        // cargarInicioJS();
    // // Cargar contenido de habitaciones_card.html
    // const habitacionesContainer = document.getElementById('habitacionesContainer');
    // fetch(`${carpetaPrueba}/carga_inicial/habitaciones_card.html`)
    //     .then(response => response.text())
    //     .then(data => habitacionesContainer.innerHTML = data);

    // // Cargar contenido de video_inicio.html
    // const videoContainer = document.getElementById('contenidoInicio');
    // fetch(`${carpetaPrueba}/carga_inicial/video_inicio.html`)
    // fetch(`${carpetaPrueba}/carga_inicial/inicio.html`)
    //     .then(response => response.text())
    //     .then(data => videoContainer.innerHTML = data);




    // Cargar contenido de pie.html
    const pieContainer = document.getElementById('pieContainer');
    fetch(`${carpetaPrueba}/carga_inicial/pie.html`)
        .then(response => response.text())
        .then(data => pieContainer.innerHTML = data);

    // // Función para cargar inicio.js
    // function cargarInicioJS() {
    //     const scriptInicio = document.createElement('script');
    //     scriptInicio.src = `${carpetaPrueba}/inicio.js`;
    //     document.body.appendChild(scriptInicio);
    // }
});
