<?php

require_once("Pedido.php");

class Estado_pedido extends Pedido{
    public $id_estado_pedido;
    public $fecha_inicio;
    public $fecha_final;

    public function getId_estado_pedido(){
        return $this -> id_estado_pedido;
    }
    public function setId_estado_pedido(){
        $this -> id_estado_pedido = $id_estado_pedido;
    }

    public function getFecha_inicio(){
        return $this -> fecha_inicio;
    }
    public function setFecha_inicio(){
        $this -> fecha_inicio = $fecha_inicio;
    }

    public function getFecha_final(){
        return $this -> fecha_final;
    }
    public function setFecha_final(){
        $this -> fecha_final = $fecha_final;
    }
    
}
?>