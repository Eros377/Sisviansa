<?php
require_once("clases/Cliente.php");
$id = $_POST['id'];
$datos = new Cliente($id,"");
$datos-> datosPerfil();

?>