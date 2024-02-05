document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('contenidoInicio');
    alert('inio.js se ejecutó correctamente');
    // Array con información de cada imagen
    const imagenes = [
        { ruta: "/img/inicio/fotos12.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos01Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos11bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos15Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos05Bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." },
        { ruta: "/img/inicio/fotos13bis.png", texto: "En el sur de la ciudad de Mar del Plata, es posible disfrutar de la serenidad más exquisita. Montecarlo Hotel y Apart, se encuentra ubicado a 200mtrs de la playa, muy cerca del bosque en una exclusiva zona residencial, donde el aire puro es nuestra mejor compañía." }
    ];

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

    // Construye el contenido del carousel utilizando innerHTML
    carouselContainer.innerHTML = `
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
// });
