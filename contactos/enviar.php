
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Rutas para requerir PHPMailer
require 'Phpmailer/Exception.php';
require 'Phpmailer/PHPMailer.php';
require 'Phpmailer/SMTP.php';

// Configurar el encabezado para indicar que se espera recibir datos JSON
header('Content-Type: application/json');

// Reemplaza 'info@montecarlohotelmdp.com' con tu dirección de correo
$destinatario = 'walterbasanta2015@gmail.com';

// Leer los datos del cuerpo de la solicitud JSON
$data = json_decode(file_get_contents('php://input'), true);

// Agregar para verificar los datos recibidos
echo "Datos recibidos:";
print_r($data);

// Obtén los datos del formulario
$nombre = isset($data['nombre']) ? $data['nombre'] : '';
$email = isset($data['email']) ? $data['email'] : '';
$telefono = isset($data['telefono']) ? $data['telefono'] : '';
$mensaje = isset($data['mensaje']) ? $data['mensaje'] : '';

// Crear una instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configurar el servidor SMTP
    $mail->SMTPDebug = 2;                        //Enable verbose debug output
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';  // Reemplaza con el host SMTP de tu proveedor de alojamiento
    $mail->Port = 587;  // Puerto SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'formulario@wabnet.com.ar'; // Reemplaza con tu dirección de correo
    $mail->Password = 'Wab66Net!'; // Reemplaza con tu contraseña
    $mail->SMTPSecure = 'tls';

    // Configurar remitente y destinatario
    $mail->setFrom('formulario@wabnet.com.ar', 'Formulario');
    $mail->addAddress($destinatario);

    // Configurar el contenido del correo electrónico
    $mail->isHTML(true);
    $mail->Subject = 'Mensaje desde formulario de contacto';
    $mail->Body = "Nombre: $nombre<br>Email: $email<br>Teléfono: $telefono<br>Mensaje: $mensaje";

    // Enviar el correo electrónico
    $mail->send();

    // Crear un arreglo de respuesta
    $response = array(
        'success' => true,
        'message' => 'Email enviado correctamente'
    );
    // Convertir a JSON con codificación UTF-8
    $json = mb_convert_encoding(json_encode($response), 'UTF-8', 'auto');


} catch (Exception $e) {
    // En caso de error, crear un arreglo de respuesta con el mensaje de error
    $response = array(
        'success' => false,
        'message' => 'Error al enviar el Email: ' . $mail->ErrorInfo
    );
    // Convertir a JSON con codificación UTF-8
    $json = mb_convert_encoding(json_encode($response), 'UTF-8', 'auto');


}
// Devolver la respuesta como JSON
echo $json;
?>