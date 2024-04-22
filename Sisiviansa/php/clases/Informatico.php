<?php

require_once("Usuario.php");

class Informatico extends Usuario {
    public $rol;
    
    public function getRol(){
        return $this -> rol;
    }
    public function setRol(){
        $this -> rol = $rol;
    }
}
?>