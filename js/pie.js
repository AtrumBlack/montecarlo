// pie.js
document.addEventListener("DOMContentLoaded", function() {
    // Ruta de la imagen
    var logoImagePath = "../img/logos/Logo-blanco.png";
    var logoImagenPie=src="../img/logos/atrumblack01.png" 

// Contenido HTML del footer
var footerContent = `
   <div class="footer_top p-2">

    <div class="container">

        <div class="row justify-content-center align-items-center">

           
            
            <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0 border-0">

                <div class="card  bg-black  h-100 border-0 mb-3" style="width:  100%; color: white;">

                    <div class="card-header text-start ">Contacto
                        <!-- Línea separadora -->
                        <hr class="footer-divider-gruesa">
                    </div>
                    <div class="card-body text-secondary">

                        <h5 class="card-title text-start">Información de contacto</h5>
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
                        <!-- <p class="card-text">Algunos texto de ejemplo rápido para construir sobre el título de la tarjeta y completar el contenido principal de la tarjeta.</p> -->
                    </div>

                </div>

            </div>

            <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0 border-0">
                <h4>Menú</h4>
                <ul class="list-unstyled">
                    <li><a href="#" data-opcion="inicio">Inicio</a></li>
                    <li><a href="#" data-opcion="galeria">Galería</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" href="#" id="drop_cases" data-bs-toggle="dropdown" aria-expanded="false">
                            Habitaciones
                            </a>
                            <ul class="dropdown-menu" id="myDropdown">
                                <li><a href="#" class="dropdown-item" data-opcion="dobleclasica">Habitaciones Doble Clásica</a></li>
                                <li><a href="#" class="dropdown-item" data-opcion="doblesuperior">Habitaciones Doble Superior</a></li>
                                <li><a href="#" class="dropdown-item" data-opcion="suite">Habitaciones Suite</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a href="#" class="dropdown-item" data-opcion="triple">Habitación Triple</a></li>
                                <li><a href="#" class="dropdown-item" data-opcion="familiar">Habitación Familiar</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a href="#" class="dropdown-item" data-opcion="apart">Apart</a></li>
                                <li><a href="#" class="dropdown-item" data-opcion="apartsuperior">Apart Superior</a></li>
                            </ul>
                        </li>
                    <li><a href="#" data-opcion="contacto">Contacto</a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center ">

            <div class="card  bg-black h-100 border-0">
                <img src="${logoImagePath}" class="card-img-logo-montecarlo" alt="logo1">
                <!-- Agregar las tres estrellas -->
                <div class="mt-3 text-sepia">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <!-- Iconos de redes sociales -->
                <div class="mt-3">
                    <!-- Redes sociales a la derecha -->
                    <a href="https://www.facebook.com/montecarlohotelmdp" target="_blank" class="mx-2"><i class="fab fa-facebook-f fa-2x text-primary"></i></a>
                    <a href="https://www.instagram.com/montecarlohotel_mdp" target="_blank" class="mx-2"><i class="fab fa-instagram fa-2x text-danger"></i></a>
                    <a href="https://wa.me/5492234462153" target="_blank" class="mx-2"><i class="fab fa-whatsapp fa-2x text-success"></i></a>
                </div>
            </div>
        </div>
            <!-- <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0"></div> -->
        </div>
    </div>

</div>
</footer>

<!-- Línea separadora -->
<hr class="footer-divider">

<div id="footer-credits">

    <div class="container_pie">
        <div class="row row-cols-1 row-cols-md-2 g-4">

            <div class="col  mb-md-0 text-start">
                <div>Copyright &copy; Montecarlo - Hotel & Apart - Todos los derechos reservados.</div>
            </div>

            <div class="col mb-md-0 text-end">
                <div text-right>Desarrollado por <img src="${logoImagenPie}" class="card-img-logo-atrumblack" alt="logo1"
                        style="background-color: black; width: 60px; height: 30px;">
                </div>
            </div>
        </div>
    </div>
</div>
`;

// Obtener el elemento del footer
var footer = document.getElementById("pieContainer");

// Insertar el contenido dentro del footer
footer.innerHTML = footerContent;

// document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));
});
