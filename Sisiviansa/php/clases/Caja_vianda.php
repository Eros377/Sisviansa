<?php

require_once("Vianda.php");

class Caja_vianda extends Vianda {
    public $num_caja;
    public $fecha_envasado;
    public $fecha_vencimiento;

    public function getNum_caja(){
        return $this -> num_caja;
    }
    public function setNum_caja(){
        $this -> num_caja = $num_caja;
    }
    public function getFecha_envasado(){
        return $this -> fecha_envasado;
    }
    public function setFecha_envasado(){
        $this -> fecha_envasado = $fecha_envasado;
    }
    public function getFecha_vencimiento(){
        return $this -> fecha_vencimineto;
    }
    public function setFecha_vencimiento(){
        $this -> fecha_vencimiento = $fecha_vencimiento;
    }
}


?>