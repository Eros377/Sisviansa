<?php
    require_once("Conexion.php");

    class Dieta extends Conexion{
        public $id_dieta;
        public $tipo;
    
    public function getId_dieta(){
        return $this -> id_dieta;
    }
    public function setId_dieta(){
        $this -> id_dieta = $id_menu;
    }
    public function getTipo(){
        return $this -> tipo;
    }
    public function setTipo(){
        $this -> tipo = $tipo;
    }
   
    }
     
?>