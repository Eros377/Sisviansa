<?php

require_once("Menu.php");

class Pedido extends Menu {
    public $id_vianda;
    public $nombre;
    

    public function getId_vianda(){
        return $this -> id_vianda;
    }
    public function setId_vianda(){
        $this -> id_vianda = $id_vianda;
    }
    public function getNombre(){
        return $this -> nombre;
    }
    public function setNombre(){
        $this -> nombre = $nombre;
    }
}
?>