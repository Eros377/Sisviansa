<?php

require_once("Menu.php");

class Estado_menu extends Menu {
    public $estado;
    public $id_estado_menu;
    public $fecha_inicio;
    public $fecha_final;

    public function getEstado(){
        return $this -> estado;
    }
    public function setEstado($estado){
        $this -> estado = $estado;
    }
    public function getId_estado_menu(){
        return $this -> id_estado_menu;
    }
    public function getId_estado_menu($id_estado_menu){
        $this -> id_estado_menu = $id_estado_menu;
    }
    
    public function getFecha_inicio(){
        return $this -> fecha_inicio;
    }
    public function setFecha_inicio($fecha_inicio){
        $this -> fecha_inicio = $fecha_inicio;
    }
    public function getFecha_final(){
        return $this -> fecha_final;
    }
    public function setFecha_final($fecha_final){
        $this -> fecha_final = $fecha_final;
    }
}
?>