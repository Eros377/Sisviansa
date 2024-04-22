<?php
    require_once("clases/Usuario.php");
    $email = $_POST["email"];
    $clave = $_POST["clave"];
    $cliente = new Usuario("","",$email,$clave);
    $cliente->ingresarUsuario();
?>