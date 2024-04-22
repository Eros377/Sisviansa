<?php
require_once("clases/Pedido.php");
$id = $_POST['id'];
$autorizar = "true";
$autorizarPedido = new Pedido("","",$id,"",$autorizar,"","");
$autorizarPedido->autorizarPedido();
?>