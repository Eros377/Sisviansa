<?php

require_once("Menu.php");

class Pedido extends Menu {
    public $fecha_compra;
    public $autorizado;
    public $id_pedido;
    public $id_usaurio;

    public function __construct($id_usuario,$id_menu,$id_pedido,$precio,$autorizado,$fecha_compra,$stock_real){
        $this -> id_usuario = $id_usuario;
        $this -> id_menu = $id_menu;
        $this -> id_pedido = $id_pedido;
        $this -> precio = $precio;
        $this -> autorizado = $autorizado;
        $this -> fecha_compra = $fecha_compra;
        $this -> stock_real = $stock_real;
    }
    public function getFechaCompra(){
        return $this -> fecha_compra;
    }
    public function setFechaCompra(){
        $this -> fecha_compra = $fecha_compra;
    }
    public function getAutorizado(){
        return $this -> autorizado;
    }
    public function setAutorizado(){
        $this -> autorizado = $autorizado;
    }
    public function getId_pedido(){
        return $this -> id_pedido;
    }
    public function setId_pedido(){
        $this -> id_pedido = $id_pedido;
    }
    public function getId_usaurio(){
        return $this -> id_usuario;
    }
    public function serId_usaurio(){
        $this -> id_usuario = $id_usaurio;
    }
    public static function cantPedido(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT * FROM pedido");
        $pre -> execute();
        $res = $pre -> get_result();
        $cantPedidos = $res -> num_rows;
        return $cantPedidos;
    }
    public function enviarPedido(){
        $this -> conectar();
        //enviar datos a tabla pedido
        $prePe = mysqli_prepare($this->con,"INSERT INTO pedido (ID_PEDIDO,AUTORIZADO) VALUE (?,?)");
        $prePe -> bind_param("is",$this->id_pedido,$this->autorizado);
        $prePe -> execute();
        //enviar datos a tabla realiza
        $preRea = mysqli_prepare($this->con,"INSERT INTO realiza (ID_PEDIDO,ID_CLIENTE,ID_MENU,FECHA,VALOR) VALUE (?,?,?,?,?)");
        $preRea -> bind_param("iiisi",$this->id_pedido,$this->id_usuario,$this->id_menu,$this->fecha_compra,$this->precio);
        $preRea -> execute();
        //dsiminuir stock
        $preSt = mysqli_prepare($this->con,"UPDATE menu SET STOCK_REAL=? WHERE ID_MENU=?");
        $preSt -> bind_param("ii",$this->stock_real,$this->id_menu);
        $preSt -> execute();
    }
    public static function datosPedido(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT * FROM realiza JOIN pedido ON realiza.ID_PEDIDO = pedido.ID_PEDIDO WHERE pedido.AUTORIZADO='false'");
        $pre -> execute();
        $res = $pre -> get_result();
        $pedios = [];
        while ($row = $res->fetch_assoc()){
            $pedido = [
                "id_pedido" => $row['ID_PEDIDO'],
                "id_cliente" => $row['ID_CLIENTE'],
                "id_menu" => $row['ID_MENU'],
                "fecha" => $row['FECHA'],
                "precio" => $row['VALOR'],
            ];
            array_push($pedios,$pedido);
        }
        return $pedios;
    }
    public function autorizarPedido(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"UPDATE pedido SET AUTORIZADO=? WHERE ID_PEDIDO=?");
        $pre -> bind_param("si",$this->autorizado,$this->id_pedido);
        $pre -> execute();
    }
}

?>