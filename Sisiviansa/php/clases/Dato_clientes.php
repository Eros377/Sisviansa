<?php

require_once("Conexion.php");

class Dato_clientes extends Conexion {
    public $id;
    public $email;

    public function __construct($id,$email){
        $this -> id = $id;
        $this -> email = $email;
    }
    public function getId(){
        return $this -> id;
    }
    public function setId(){
        $this -> id = $id;
    }
    public function getEmail(){
        return $this -> email;
    }
    public function setEmail(){
        $this -> email = $email;
    }
    public static function tomarDatos(){
        $conexion = new Conexion();
        $conexion -> conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT ID_CLIENTE, EMAIL FROM cliente");
        $pre -> execute();
        $res = $pre -> get_result();
        $clientes = [];
        while($row = $res->fetch_assoc()){
            $cliente = new Dato_clientes($row['ID_CLIENTE'],$row['EMAIL']);
            array_push($clientes, $cliente);
        }
        return $clientes;
    }
    public function altaCliente(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"UPDATE cliente AUTORIZADO=? WHERE ID_CLIENTE='true'");
        $pre -> bind_param("i",$this->id);
        $pre -> execute();
    }
}

?>