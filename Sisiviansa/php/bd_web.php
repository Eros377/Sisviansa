<?php
    require_once("clases/Cliente_web.php");
    require_once ("clases/Cliente.php");
    $ci = $_POST["ci"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $barrio = $_POST["barrio"];
    $calle = $_POST["calle"];
    $puerta = $_POST["puerta"];
    $esquina = $_POST["esquina"];
    $clave = $_POST["clave"];
    $autorizar = "false";
    $cantUsuario = Cliente::cantCliente();
    $id = $cantUsuario; 
    $objCliente_web = new Cliente_web($id,$ci,$nombre,$apellido,$email,$telefono,$clave,$barrio,$esquina,$calle,$puerta,$autorizar);
    $objCliente_web -> enviarDatos();
?>