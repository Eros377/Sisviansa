<?php
require_once("clases/Menu.php");
$id = $_POST['id'];
$stock = $_POST['stock'];
$objMenu = new Menu($id,"","","","","","",$stock);
$objMenu->agregarStock();

?>