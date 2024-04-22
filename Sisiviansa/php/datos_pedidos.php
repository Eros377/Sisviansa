<?php
require_once("clases/Pedido.php");
$datosPedido = Pedido::datosPedido();
echo json_encode($datosPedido);
?>