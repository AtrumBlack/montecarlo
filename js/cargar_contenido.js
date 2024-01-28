// cargarContenido.js

document.addEventListener('DOMContentLoaded', function () {
    // Cargar contenido de menu.html
    const menuContainer = document.getElementById('menuContainer');
    fetch('/carga_inicial/menu.html')
        .then(response => response.text())
        .then(data => menuContainer.innerHTML = data);


    // Cargar contenido de habitaciones_card.html
    const habitacionesContainer = document.getElementById('habitacionesContainer');
    fetch('/carga_inicial/habitaciones_card.html')
        .then(response => response.text())
        .then(data => habitacionesContainer.innerHTML = data);

    // Cargar contenido de video_presentacion.html
    const videoContainer = document.getElementById('contenidoInicio');
    fetch('/carga_inicial/video_inicio.html')
        .then(response => response.text())
        .then(data => videoContainer.innerHTML = data);

    // Cargar contenido de pie.html
    const pieContainer = document.getElementById('pieContainer');
    fetch('/carga_inicial/pie.html')
        .then(response => response.text())
        .then(data => pieContainer.innerHTML = data);
});
