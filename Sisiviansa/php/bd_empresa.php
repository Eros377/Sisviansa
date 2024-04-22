<?php
require_once("clases/Cliente_empresa.php");
require_once ("clases/Cliente.php");
 $rut = $_POST["rut"];
 $email = $_POST["email"];
 $telefono = $_POST["telefono"];
 $calle = $_POST["calle"];
 $puerta = $_POST["puerta"];
 $esquina = $_POST["esquina"];
 $barrio = $_POST["barrio"];
 $clave = $_POST["clave"];
 $autorizar = "false";
 $cantUsuario = Cliente::cantCliente();
 $id = $cantUsuario;
 $objCliente_empresa = new Cliente_empresa($id,$rut,$email,$telefono,$clave,$calle,$puerta,$esquina,$barrio,$autorizar);
 $objCliente_empresa -> enviarDatos();
 ?>

    