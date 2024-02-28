export default function cargarHabitaciones (carpetaPrueba,habitaciones) {
    // Implementación para cargar el contenido de las habitaciones
    const roomCardsContainer = document.getElementById("roomCards");

    // Realizar la solicitud para obtener el archivo JSON
    fetch(`${carpetaPrueba}/json/habitaciones.json`)
        .then(response => response.json())
        .then(data => {

            // console.log(data);
            // console.log(habitaciones);

            habitaciones = data.habitaciones;
            
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
            // console.log("dentro de cargarHabitacionesCarouselBIS",this.habitaciones);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
};