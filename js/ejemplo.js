// módulo para manejar el contenido dinámico
const ContentHandler = {
    cargarContenido: function (url, containerId, templateFunction) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = templateFunction(data);
                }
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    }
};

// módulo para manejar Swiper
const SwiperHandler = {
    initSwiper: function (swiperSelector, options) {
        new Swiper(swiperSelector, options);
    }
};

// módulo para manejar eventos de scroll
const ScrollHandler = {
    detectarBajadaPagina: function () {
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelector('.navbar-nav .nav-link');
            if (navbar && navLinks) {
                if (window.scrollY > 80) {
                    navbar.classList.add('navbar-scroll');
                    navLinks.classList.add('navbar-scroll');
                } else {
                    navbar.classList.remove('navbar-scroll');
                    navLinks.classList.remove('navbar-scroll');
                }
            }
        });
    }
};

// módulo para manejar el envío de correo electrónico
const EmailHandler = {
    enviarEmail: async function (data) {
        try {
            const response = await fetch("/montecarlo/contactos/enviar.php", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const respuestaServidor = await response.json();
                return respuestaServidor;
            } else {
                throw new Error("Error al enviar el correo electrónico");
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: error.message };
        }
    },

    initFormulario: function () {
        const formulario = document.querySelector("#miformulario");
        if (formulario) {
            formulario.addEventListener("submit", async (e) => {
                e.preventDefault();
                const nombre = document.querySelector("#nombre").value;
                const email = document.querySelector("#email").value;
                const telefono = document.querySelector("#telefono").value;
                const mensaje = document.querySelector("#mensaje").value;
                const data = { nombre, email, telefono, mensaje };
                const respuestaServidor = await this.enviarEmail(data);
                this.mostrarMensaje(respuestaServidor);
            });
        }
    },

    mostrarMensaje: function (respuesta) {
        const mensajeRespuesta = document.querySelector('#mensaje-respuesta');
        if (mensajeRespuesta) {
            mensajeRespuesta.textContent = respuesta.success ? "Correo electrónico enviado correctamente" : respuesta.message;
            mensajeRespuesta.classList.toggle('exito', respuesta.success);
            mensajeRespuesta.classList.toggle('error', !respuesta.success);
        }
    }
};

// Utilidades
const Utils = {
    ajustarMargenCarousel: function () {
        const navbarHeight = 60; // ajuste de altura de la barra de navegación
        const carouselMontecarlo = document.getElementById('carouselMontecarlo');
        if (carouselMontecarlo) {
            carouselMontecarlo.style.marginTop = `${navbarHeight}px`;
        }
    }
};

// Ejemplos de uso

// Cargar contenido dinámico
ContentHandler.cargarContenido("/json/habitaciones.json", "roomCards", data => {
    return data.habitaciones.map(habitacion => `
        <div class="swiper-slide">
            <!-- Contenido de la tarjeta de habitación -->
        </div>
    `).join('');
});

// Inicializar Swiper
SwiperHandler.initSwiper(".slide-content", {
    // opciones de Swiper
});

// Detectar el scroll de la página
ScrollHandler.detectarBajadaPagina();

// Inicializar formulario de contacto
EmailHandler.initFormulario();

// Ajustar margen del carousel
Utils.ajustarMargenCarousel();
