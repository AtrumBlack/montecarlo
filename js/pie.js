// pie.js
document.addEventListener("DOMContentLoaded", function() {
    // Contenido HTML del footer
    var footerContent = `
    <div class="footer_top p-2">

        <div class="container ">

            <div class="row justify-content-center align-items-center">

                <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center ">

                    <div class="card  bg-black h-100 border-0">
                        <img src="../img/logos/Logo-blanco.png" class="card-img" alt="logo1">
                        <!-- Agregar las tres estrellas -->
                        <div class="mt-3">
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

                    <div class="card  bg-black h-100  border-0 mb-3" style="width:  100%;color: white;">

                        <div class="card-header text-start">Nuestra ubicacion
                            <!-- Línea separadora -->
                            <hr class="footer-divider-gruesa">
                        </div>
                        <div class="card-body text-secondary">
                            <h6 class="card-title text-start">En el corazón de Punta Mogotes, muy cerca de las playas
                                del sur. Calabria 1603 esq. Perez Bulnes.</h6>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2221.0452209256223!2d-57.551405622218304!3d-38.069629482160806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1706015106915!5m2!1ses-419!2sar"
                                class="img-fluid  w-100" width="400" height="250" frameborder="0"
                                style="border:0; height: 300px;" allowfullscreen="" aria-hidden="false" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" tabindex="0"></iframe>
                        </div>

                    </div>
                </div>

                <!-- <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0"></div> -->
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
