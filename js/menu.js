// menu.js
document.addEventListener("DOMContentLoaded", function () {
  console.log('menu',window.location.href);
  var logoImagePath = "./img/logos/logo-menu.png";
  var menuContent = `
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand me-auto" href="#">
            <img src="${logoImagePath}"  alt="Logo del hotel" class="d-inline-block align-top"> 
          </a>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarScroll" aria-labelledby="navbarScrollLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="navbarScrollLabel">Menú</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 ">
                    <li class="nav-item">
                        <a class="nav-link  mx-lg-2 active" data-opcion="inicio" aria-current="page" href="#"
                        data-bs-dismiss="offcanvas">Inicio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  mx-lg-2" data-opcion="galeria" href="#" data-bs-dismiss="offcanvas">Galería</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  mx-lg-2" data-opcion="habitaciones" href="#" data-bs-dismiss="offcanvas">Habitaciones</a>
                    </li>
                    <li class="nav-item  mx-lg-2">
                      <a class="nav-link" data-opcion="contacto" href="#" data-bs-dismiss="offcanvas">Contacto</a>
                    </li>
                </ul>
            </div>
          </div>
          <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="d-none d-lg-flex justify-content-end mt-3 redes-sociales">
          <!-- Redes sociales a la derecha -->
          <a href="https://www.facebook.com/montecarlohotelmdp" target="_blank" class="mx-2"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/montecarlohotel_mdp" target="_blank" class="mx-2"><i class="fab fa-instagram"></i></a>
          <a href="https://wa.me/5492234462153" target="_blank" class="mx-2"><i class="fab fa-whatsapp"></i></a>
        </div>
    </nav>
    `;
  var menues = document.getElementById("menuContainer");
  menues.innerHTML = menuContent;
});
