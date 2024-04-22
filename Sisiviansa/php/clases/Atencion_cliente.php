<?php

require_once("Usuario.php");

class Atencion_cliente extends Usuario {
    public $rol;

    public function getRol(){
        return $this -> rol;
    }
    public function setRol(){
        $this -> rol = $rol;
    }
}
?>