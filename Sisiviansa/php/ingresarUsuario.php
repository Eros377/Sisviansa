<?php
require_once("clases/Gerente.php");
$ci = $_POST['ci'];
$email = $_POST['email'];
$clave = $_POST['clave'];
$rol = $_POST['rol'];
$objCliente = new Gerente($ci,$email,$clave,$rol);
$objCliente->ingresarUser();

?>