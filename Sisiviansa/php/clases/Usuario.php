<?php

require_once("Conexion.php");
class Usuario extends Conexion {
    public $ci;
    public $clave;
    public $email;
    public $id;

    public function __construct($id,$ci,$email,$clave) {
        $this -> id = $id;
        $this -> ci = $ci;
        $this -> email = $email;
        $this -> clave = $clave;
    }

    public function getCi(){
        return $this -> ci;
    }
    public function setCi($ci){
        $this -> ci = $ci;
    }
    public function getEmail(){
        return $this -> email;
    }
    public function setEmail($email){
        $this -> email = $email;
    }
    public function getClave(){
        return $this -> clave;
    }
    public function setClave($clave){
        $this -> clave = $clave;
    }
    public function getId(){
        return $this -> id;
    }
    public function setId(){
        $this -> id = $id;
    }
    public function ingresarUsuario(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"SELECT ID_CLIENTE,AUTORIZADO FROM cliente WHERE EMAIL=? AND CLAVE=?");
        $pre -> bind_param("ss",$this->email,$this->clave);
        $pre -> execute();
        $res = $pre -> get_result();
        $existe_cli = $res -> num_rows;
        $row = $res->fetch_assoc();
        if($existe_cli == "1"){
            $cliente = [
                "id" => $row['ID_CLIENTE'],
                "autorizado" => $row['AUTORIZADO'],
                "rol" => "cliente",
                "existe" => "true",
            ];
            echo json_encode($cliente); 
        }else{
            $preDos = mysqli_prepare($this->con,"SELECT CI_USUARIO,ROL FROM usuario WHERE EMAIL=? AND CONTRASENIA=?");
            $preDos -> bind_param("is",$this->email,$this->clave);
            $preDos -> execute();
            $res = $preDos -> get_result();
            $existe_us = $res-> num_rows;
            $row = $res->fetch_assoc();
            if($existe_us == "1"){
                $usaurio = [
                "ci" => $row['CI_USUARIO'],
                "rol" => $row['ROL'],
                "existe" => "true",
                ];
                echo json_encode($usaurio);
            }else {
                echo json_encode(false);
            }
        } 
    }
    }
   
?>


