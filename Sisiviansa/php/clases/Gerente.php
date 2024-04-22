<?php

require_once("Usuario.php");

class Gerente extends Usuario {
    public $rol;
    
    public function __construct($ci,$email,$clave,$rol) {
        $this -> ci = $ci;
        $this -> email = $email;
        $this -> clave = $clave;
        $this -> rol = $rol;
    }
    public function getRol(){
        return $this -> rol;

    }
    public function setRol(){
        $this -> rol = $rol;
    }
     public static function cantMenu(){
        $conexion = new Conexion();
        $conexion -> conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT * FROM menu");
        $pre -> execute();
        $res = $pre -> get_result();
        $cantMenu = $res -> num_rows;
        return $cantMenu;
    }
    public function ingresarUser(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"INSERT INTO usuario (CI_USUARIO,EMAIL,CONTRASENIA,ROL) VALUE (?,?,?,?)");
        $pre -> bind_param("isss",$this->ci,$this->email,$this->clave,$this->rol);
        $pre -> execute();
    }
    
    
}

?>