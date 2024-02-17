<!-- enviar.php -->

<?php
// Configurar el encabezado para indicar que se espera recibir datos JSON
header('Content-Type: application/json');

// Reemplaza 'info@montecarlohotelmdp.com' con tu dirección de correo
$destinatario = 'walterbasanta2015@gmail.com';

// Leer los datos del cuerpo de la solicitud JSON
$data = json_decode(file_get_contents('php://input'), true);

// Obtén los datos del formulario
$nombre = isset($data['nombre']) ? $data['nombre'] : '';
$email = isset($data['email']) ? $data['email'] : '';
$telefono = isset($data['telefono']) ? $data['telefono'] : '';
$mensaje = isset($data['mensaje']) ? $data['mensaje'] : '';

// Crear el cuerpo del mensaje
$cuerpo = "Nombre: $nombre\nEmail: $email\Telefono: $telefono\nMensaje:\n$mensaje";

// Crear el encabezado del correo
$header = "From: formulario@montecarlohotelmdp.com";

// Intentar enviar el correo electrónico
$exito = mail($destinatario, "Asunto: Mensaje desde el formulario de contacto", $cuerpo, $header);

// Crear un arreglo de respuesta
$response = array(
    'success' => $exito,
    'message' => $exito ? 'Correo electrónico enviado correctamente' : 'Error al enviar el correo electrónico',
    'data' => array(
        'nombre' => $nombre,
        'email' => $email,
        'telefono' => $telefono,
        'mensaje' => $mensaje
    )
);

// Devolver la respuesta como JSON
echo json_encode($response);
?>

