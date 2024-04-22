<?php
require_once("clases/Menu.php");
$nombre = $_POST["nombre"];
$dieta = $_POST['dieta'];
$elaboracion = $_POST["elaboracion"];
$precio = $_POST["precio"];
$stock_min = $_POST["stock_min"];
$stock_max = $_POST['stock_max'];
$cantMenu = Menu::cantMenu();
$id = $cantMenu + 1;
$stock_real = 0;
$objMenu = new Menu($id,$nombre,$elaboracion,$dieta,$precio,$stock_min,$stock_max,$stock_real);
$objMenu->crearMenu(); 

?>