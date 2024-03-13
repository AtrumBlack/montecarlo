
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$dotenv = Dotenv\Dotenv::createMutable(__DIR__);
$dotenv->load();

// Rutas para requerir PHPMailer
require 'Phpmailer/Exception.php';
require 'Phpmailer/PHPMailer.php';
require 'Phpmailer/SMTP.php';

// Configurar el encabezado para indicar que se espera recibir datos JSON
header('Content-Type: application/json');

$destinatario = $_ENV['ADD_ADDRESS'];

// Leer los datos del cuerpo de la solicitud JSON
$data = json_decode(file_get_contents('php://input'), true);

// Agregar para verificar los datos recibidos
// echo "Datos recibidos:";
// print_r($data);
// Obtener el valor de las variables de entorno
// $smtpHost = $_ENV['SMTP_HOST'];
// $emailUsername = $_ENV['EMAIL_USERNAME'];
// $emailPassword = $_ENV['EMAIL_PASSWORD'];
// $smtpPort = $_ENV['SMTP_PORT'];
// $addAddress = $_ENV['ADD_ADDRESS'];

// // Mostrar las variables de entorno
// echo "SMTP_HOST: $smtpHost\n";
// echo "EMAIL_USERNAME: $emailUsername\n";
// echo "EMAIL_PASSWORD: $emailPassword\n";
// echo "SMTP_PORT: $smtpPort\n";
// echo "ADD_ADDRESS: $addAddress\n";

// Verifica si las variables se cargaron correctamente
// var_dump($smtpHost, $emailUsername, $emailPassword, $smtpPort, $addAddress);
// echo var_dump($_ENV);
// echo $_ENV['SMTP_HOST'];

// Validar datos recibidos
$nombre = isset($data['nombre']) ? htmlspecialchars(trim($data['nombre'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$telefono = isset($data['telefono']) ? htmlspecialchars(trim($data['telefono'])) : '';
$mensaje = isset($data['mensaje']) ? htmlspecialchars(trim($data['mensaje'])) : '';

$response = array();

if (!empty($nombre) && !empty($email) && !empty($mensaje)) {
    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurar el servidor SMTP
        $mail->SMTPDebug = 0;                        //Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];  // Reemplaza con el host SMTP de tu proveedor de alojamiento
        $mail->Port = $_ENV['SMTP_PORT'];  // Puerto SMTP
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['EMAIL_USERNAME']; // Reemplaza con tu dirección de correo
        $mail->Password = $_ENV['EMAIL_PASSWORD']; // Reemplaza con tu contraseña
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

} else {
    $response = array(
        'success' => false,
        'message' => 'Por favor, complete todos los campos requeridos'
    );
    $json = mb_convert_encoding(json_encode($response), 'UTF-8', 'auto');

}   
// Devolver la respuesta como JSON
echo $json;
?>