<?php

require_once("Usuario.php");

class Administrador extends Usuario {
    private $rol;

        public function __construct($ci,$email,$rol,$clave){
            $this -> ci = $ci;
            $this -> email = $email;
            $this -> rol = $rol;
            $this -> clave = $clave;
        }
        public function setRol(){
            $this -> rol = $rol;
        }
        public function getRol(){
            return $this -> rol;
        }
       
}
?>