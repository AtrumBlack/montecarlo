export default function cargarContacto() {
    // Implementación para cargar el contenido de la sección de contacto
    var contactos = `
    <div class="container bg-transparente p-3 mt-1 rounded">
        <h2 class="text-contacto">CONTACTENOS</h2>

        <div class="row row-cols-1 row-cols-md-2 g-4 p-2 justify-content-center align-items-center">
        
            <div class="col">

                    <form id="miformulario">
                        <h2><span class="text-contacto-form text-opacity-75">Formulario de Contacto:</span></h2>

                        <div class="mb-1">
                            
                            <label for="nombre" class="form-label text-sepia">Introduzca sus datos</label>
                            <input type="text" class="form-control text-sepia" id="nombre" name="nombre" placeholder="Nombre"
                                aria-label="Apellido-Nombre">
           
                        </div>
        
                        <div class="mb-1">
                            <input type="email" class="form-control border " id="email" name="email" placeholder="Email" >
                        </div>
                        <div class="mb-1">
                            <input type="telefono" class="form-control border " id="telefono" name="telefono" placeholder="Telefono">
                        </div>       
                        <div class="mb-1">
                            <label for="mensaje" class="form-label text-sepia">Comentarios/Consultas:</label>
                            <textarea class="form-control border " id="mensaje" rows="3" name="mensaje" placeholder="Comentarios/Consultas:"></textarea>
                        </div>
        
                        <button type="submit" class="btn btn-outline-sepia">Enviar</button>
        
                    </form>
    
            </div>
    
            <div class="col">

                <div class="card  h-100 border-0" style="width:  100%; color: white;">
    
                    <div class="card-body text-secondary">
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
                    </div>
    
                </div>
            </div>
    
            <div class="col-md-12">
                <div class="card h-100 border-0 mb-2" style="color: white;">
                        <div class="card-body text-secondary">
                            <h8 class="card-title text-start text-sepia">Calabria 1603 esq. Perez Bulnes | Mar del
                            Plata</h8>
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2221.0452209256223!2d-57.551405622218304!3d-38.069629482160806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1706015106915!5m2!1ses-419!2sar"
                            class="img-fluid  w-100"  height="300" frameborder="0"
                            style="border:0; height: 300px;" allowfullscreen="" aria-hidden="false" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" tabindex="0"></iframe>
    
                        </div>
    
                </div>
            </div>
    
        </div>
    
    </div>


  `;

    // Obtener el elemento del footer
    var contacto = document.getElementById("contenidoInicio");

    // Insertar el contenido dentro del footer
    contacto.innerHTML = contactos;
    // Llamar a la función para agregar el script
    agregarScriptEnviarEmail();
};

function agregarScriptEnviarEmail  () {
    // El script que deseas agregar
    //console.log('eahora si o no');

    //alert("que cosa");
    const enviarEmail = async (data) => {
        const response = await fetch("/montecarlo/contactos/enviar.php", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const respuestaServidor = await response.json();
            if (respuestaServidor.success) {
                // Mostrar mensaje de éxito
                mensajeRespuesta.textContent = "Correo electrónico enviado correctamente";
                mensajeRespuesta.classList.remove('error');
                mensajeRespuesta.classList.add('exito');
            } else {
                // Mostrar mensaje de error
                mensajeRespuesta.textContent = respuestaServidor.message;
                mensajeRespuesta.classList.remove('exito');
                mensajeRespuesta.classList.add('error');
            }
        } else {
            // Mostrar mensaje de error
            mensajeRespuesta.textContent = "Error al enviar el correo electrónico";
            mensajeRespuesta.classList.remove('exito');
            mensajeRespuesta.classList.add('error');
        }
    };

    document.querySelector("#miformulario").addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const mensaje = document.querySelector("#mensaje").value;


        const data = {
            nombre,
            email,
            telefono,
            mensaje,
        };
        //console.log(data);
        enviarEmail(data);
    });
};