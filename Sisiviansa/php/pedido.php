<?php
    require_once("clases/Pedido.php");
    $id_menu = $_POST['id_menu'];
    $id_usuario = $_POST['id_usuario'];
    $precio = $_POST['precio'];
    $stock = $_POST["stock"];
    $newStock = $stock - "1";
    $cantPedidos = Pedido::cantPedido();
    $id_pedido = $cantPedidos + 1;
    $autorizado = "false";
    $fecha = date("Y-m-d");
    $envPedio = new Pedido("$id_usuario","$id_menu",$id_pedido,"$precio",$autorizado,$fecha,$newStock);
    $envPedio -> enviarPedido();
   
?>
