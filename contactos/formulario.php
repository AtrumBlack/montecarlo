<!-- formulario.php -->

<?php

// Reemplaza 'info@montecarlohotelmdp.com' con tu dirección de correo
$destinatario = 'walterbasanta2015@gmail.com';

// Obtén los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Crea el cuerpo del mensaje
$cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

// Envía el correo electrónico
$exito = mail($destinatario, "Asunto: Mensaje desde el formulario de contacto", $cuerpo);

if ($exito) {
  echo "Su mensaje se ha enviado con éxito!";
} else {
  echo "Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo nuevamente.";
}

?>
