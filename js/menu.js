// menu.js
document.addEventListener("DOMContentLoaded", function() {
    // Contenido HTML del Mneu
    var menuContent = `
    <nav class="navbar navbar-expand-lg fixed-top container">

    <div class="container">
  
      <a class="navbar-brand me-auto" href="#">
        <img src="../img/logos/LOGO MONTECARLO.png" alt="Logo del hotel" class="d-inline-block align-top">
      </a>
  
      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarScroll" aria-labelledby="navbarScrollLabel">
  
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="navbarScrollLabel">Menú</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
  
        <div class="offcanvas-body">
  
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 ">
  
            <li class="nav-item">
              <!-- <a class="nav-link active" data-opcion="inicio" aria-current="page" href="#" -->
              <a class="nav-link  mx-lg-2 active" data-opcion="inicio" aria-current="page" href="#"
                data-bs-dismiss="offcanvas">Inicio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link  mx-lg-2" data-opcion="galeria" href="#" data-bs-dismiss="offcanvas">Galería</a>
            </li>
            
            <li class="nav-item dropdown">
  
              <a
              href="#" 
              class="nav-link dropdown-toggle"
              id="drop_cases"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false">
                Habitaciones
              </a>
  
              <ul class="dropdown-menu" id="myDropdown">
                <li>
                  <a class="dropdown-item" data-opcion="dobleclasica" href="#"
                    data-bs-dismiss="offcanvas">Habitaciones
                    Doble Clásica
                  </a>
                </li>
                <li><a class="dropdown-item" data-opcion="doblesuperior" href="#"
                    data-bs-dismiss="offcanvas">Habitaciones
                    Doble Superior</a></li>
                <li><a class="dropdown-item" data-opcion="suite" href="#" data-bs-dismiss="offcanvas">Habitaciones
                    Suite</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" data-opcion="triple" href="#" data-bs-dismiss="offcanvas">Habitación
                    Triple</a></li>
                <li><a class="dropdown-item" data-opcion="familiar" href="#"
                    data-bs-dismiss="offcanvas">Habitación
                    Familiar</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" data-opcion="apart" href="#" data-bs-dismiss="offcanvas">Apart</a>
                </li>
                <li><a class="dropdown-item" data-opcion="apartsuperior" href="#"
                    data-bs-dismiss="offcanvas">Apart
                    Superior</a></li>
              </ul>
  
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
  
    <div class="d-none d-lg-flex justify-content-end mt-3">
    <!-- Redes sociales a la derecha -->
    <a href="https://www.facebook.com/montecarlohotelmdp" target="_blank" class="mx-2"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.instagram.com/montecarlohotel_mdp" target="_blank" class="mx-2"><i class="fab fa-instagram"></i></a>
    <a href="https://wa.me/5492234462153" target="_blank" class="mx-2"><i class="fab fa-whatsapp"></i></a>
</div>
  
  </nav>
  <!-- Hero <section></section> -->
  <section>
    <div class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
      <h1>Responsive Navbar</h1>
      <h2>bootstrap 5</h2>
    </div>
  </section>
`;
    
    // Obtener el elemento del footer
    var menues = document.getElementById("menuContainer");
    
    // Insertar el contenido dentro del footer
    menues.innerHTML = menuContent;

    // document.getElementById('pieContainer').addEventListener('click', this.menuClickHandler.bind(this));
});
