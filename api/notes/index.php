<?php
require_once '../../PHP/conexion.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$request = isset($_GET['id']) ? intval($_GET['id']) : null;

function validarLongitudes($titulo, $contenido) {
    if (strlen($titulo) > 50) {
        http_response_code(400);
        echo json_encode(['mensaje' => 'El título no debe superar los 50 caracteres']);
        exit;
    }
    if (strlen($contenido) > 255) {
        http_response_code(400);
        echo json_encode(['mensaje' => 'El contenido no debe superar los 255 caracteres']);
        exit;
    }
}

switch ($method) {
    case 'GET':
        if ($request) {
            $sql = "SELECT * FROM notas WHERE id = $request";
            $res = $conexion->query($sql);
            if ($res->num_rows > 0) {
                echo json_encode($res->fetch_assoc());
            } else {
                http_response_code(404);
                echo json_encode(['mensaje' => 'Nota no encontrada']);
            }
        } else {
            $sql = "SELECT * FROM notas ORDER BY fecha DESC";
            $resultado = $conexion->query($sql);
            $notas = [];
            while ($fila = $resultado->fetch_assoc()) {
                $notas[] = $fila;
            }
            echo json_encode($notas);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if (!isset($data['titulo']) || trim($data['titulo']) === '') {
            http_response_code(400);
            echo json_encode(['mensaje' => 'El título es obligatorio']);
            exit;
        }

        $titulo = $conexion->real_escape_string($data['titulo']);
        $contenido = isset($data['contenido']) ? $conexion->real_escape_string($data['contenido']) : '';
        validarLongitudes($titulo, $contenido);

        $fecha = date('Y-m-d H:i:s');

        $verificar = $conexion->query("SELECT id FROM notas WHERE titulo = '$titulo' LIMIT 1");
        if ($verificar && $verificar->num_rows > 0) {
            http_response_code(409);
            echo json_encode(['mensaje' => 'Ya existe una nota con ese título']);
            exit;
        }

        $sql = "INSERT INTO notas (titulo, contenido, fecha) VALUES ('$titulo', '$contenido', '$fecha')";
        if ($conexion->query($sql) === TRUE) {
            echo json_encode(['mensaje' => 'Nota agregada correctamente']);
        } else {
            http_response_code(500);
            echo json_encode(['mensaje' => 'Error al agregar la nota: ' . $conexion->error]);
        }
        break;

    case 'PUT':
        if (!$request) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'ID no proporcionado']);
            exit;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        if (!isset($data['titulo']) || trim($data['titulo']) === '') {
            http_response_code(400);
            echo json_encode(['mensaje' => 'El título es obligatorio']);
            exit;
        }

        $titulo = $conexion->real_escape_string($data['titulo']);
        $contenido = isset($data['contenido']) ? $conexion->real_escape_string($data['contenido']) : '';
        validarLongitudes($titulo, $contenido);

        $sql = "UPDATE notas SET titulo = '$titulo', contenido = '$contenido' WHERE id = $request";
        if ($conexion->query($sql) === TRUE) {
            echo json_encode(['mensaje' => 'Nota actualizada correctamente']);
        } else {
            http_response_code(500);
            echo json_encode(['mensaje' => 'Error al actualizar la nota: ' . $conexion->error]);
        }
        break;

    case 'DELETE':
        if (!$request) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'ID no proporcionado']);
            exit;
        }

        $sql = "DELETE FROM notas WHERE id = $request";
        if ($conexion->query($sql) === TRUE) {
            echo json_encode(['mensaje' => 'Nota eliminada correctamente']);
        } else {
            http_response_code(500);
            echo json_encode(['mensaje' => 'Error al eliminar la nota: ' . $conexion->error]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['mensaje' => 'Método no permitido']);
        break;
}
?>
