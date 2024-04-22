<?php

require_once("clases/Cliente.php");
$id = $_POST["id"];
$autorizar = $_POST["autorizar"];
$autorizo = new Cliente($id,$autorizar);
$autorizo->autorizar(); 
?>