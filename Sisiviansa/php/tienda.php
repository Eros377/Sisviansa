<?php
require_once("clases/Menu.php");

    $menu = Menu::datoMenu();
    echo json_encode($menu);



?>