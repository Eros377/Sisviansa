<?php

require_once("Usuario.php");

class Cliente extends Usuario{
    public $calle;
    public $telefono;
    public $puerta;
    public $esquina;
    public $barrio;
    public $autorizar;
    
    public function __construct($id,$autorizar) {
        $this -> id = $id;
        $this -> autorizar = $autorizar;
    }

    public function getTelefono(){
        return $this -> telefono;
    }
    public function setTelefono($telefono){
        $this -> telefono = $telefono;
    }
    public function getCalle(){
        return $this -> calle;
    }
    public function setCalle($calle){
        $this -> calle = strtolower($calle);
    }
    public function getPuerta(){
        return $this -> puerta;
    }
    public function setPuerta($puerta){
        $this -> puerta = $puerta;
    }
    public function getEsquina(){
        return $this -> esquina;
    }
    public function setEsquina($esquina){
        $this -> esquina = strtolower($esquina);
    }
    public function getBarrio(){
        return $this -> barrio;
    }
    public function setBarrio($barrio){
        $this -> barrio = strtolower($barrio);
    }
    public function getAutorizar(){
        return $this -> autorizar;
    }
    public function setAutorizar(){
        $this -> autorizar = $autorizar;
    }
    public static function datosWeb(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con, "SELECT cliente.ID_CLIENTE, cliente.EMAIL, cliente_web.CEDULA_IDENTIDAD_CLIENTE FROM cliente INNER JOIN cliente_web ON cliente.ID_CLIENTE = cliente_web.ID_CLIENTE WHERE cliente.AUTORIZADO='false'");
        if (!$pre) {
            // Manejar el error de preparación de la consulta.
            die("Error de preparación de consulta: " . mysqli_error($conexion->con));
        }
        $pre->execute();
        $res = $pre->get_result();
        $clientes = [];
    
        while ($row = $res->fetch_assoc()){
            $cliente = [
                'id' => $row['ID_CLIENTE'],
                'email' => $row['EMAIL'],
                'ci_rut' => $row['CEDULA_IDENTIDAD_CLIENTE'],
            ];
            array_push($clientes, $cliente);
        }
        return $clientes;
    }
    public static function datosEmpresa(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con, "SELECT cliente.ID_CLIENTE, cliente.EMAIL, cliente_empresa.RUT FROM cliente INNER JOIN cliente_empresa ON cliente.ID_CLIENTE = cliente_empresa.ID_CLIENTE WHERE cliente.AUTORIZADO='false'");
        if (!$pre) {
            // Manejar el error de preparación de la consulta.
            die("Error de preparación de consulta: " . mysqli_error($conexion->con));
        }
        $pre->execute();
        $res = $pre->get_result();
        $clientes = [];
        while ($row = $res->fetch_assoc()){
            $cliente = [
                'id' => $row['ID_CLIENTE'],
                'email' => $row['EMAIL'],
                'ci_rut' => $row['RUT'],
            ];
            array_push($clientes, $cliente);
        }
        return $clientes;
    }
    public function autorizar(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"UPDATE cliente SET AUTORIZADO=? WHERE ID_CLIENTE=?");
        $pre -> bind_param("si",$this->autorizar,$this->id);
        $pre->execute();
    }
    public static function cantCliente(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT * FROM cliente");
        $pre -> execute();
        $res = $pre->get_result();
        $cantUsuarios = $res -> num_rows;
        return $cantUsuarios;
    }
    public function datosPerfil(){
        $this -> conectar();
        //extrae datos de tabla cliente
        $pre = mysqli_prepare($this->con,"SELECT * FROM cliente WHERE ID_CLIENTE=?");
        $pre -> bind_param("i",$this->id);
        $pre -> execute();
        $res = $pre->get_result();
        $row = $res->fetch_assoc();
        //extrae datos de tabla telefono
        $preTel = mysqli_prepare($this->con,"SELECT * FROM cliente_telefono WHERE ID_CLIENTE=?");
        $preTel -> bind_param("i",$this->id);
        $preTel -> execute();
        $resTel = $preTel -> get_result();
        $rowTel = $resTel -> fetch_assoc();
        //extrae datos de tabla cliente_web
        $preWeb = mysqli_prepare($this->con,"SELECT * FROM cliente_web WHERE ID_CLIENTE=?");
        $preWeb -> bind_param("i",$this->id);
        $preWeb -> execute();
        $resWeb = $preWeb -> get_result();
        $rowWeb = $resWeb -> fetch_assoc();
        //ectrae datos de tabla cliente_empresa
        $preEmp = mysqli_prepare($this->con,"SELECT * FROM cliente_empresa WHERE ID_CLIENTE=?");
        $preEmp -> bind_param("i",$this->id);
        $preEmp -> execute();
        $resEmp = $preEmp -> get_result();
        $rowEmp = $resEmp -> fetch_assoc(); 
        if($resWeb -> num_rows > 0){
            $datoWeb = [
                'email' => $row['EMAIL'],
                'calle' => $row['CALLE'],
                'puerta' => $row['N_PUERTA'],
                'esquina' => $row['ESQUINA'],
                'barrio' => $row['BARRIO'],
                'ci' => $rowWeb['CEDULA_IDENTIDAD_CLIENTE'],
                'nombre' => $rowWeb['PRIMER_NOMBRE'],
                'apellido' => $rowWeb['PRIMER_APELLIDO'],
                'telefono' => $rowTel['TELEFONO'],
                'cliente' => "web",
            ];
            echo json_encode($datoWeb);
        }else if ($resEmp -> num_rows > 0){
            $datoEmp = [   
                'email' => $row['EMAIL'],
                'calle' => $row['CALLE'],
                'puerta' => $row['N_PUERTA'],
                'esquina' => $row['ESQUINA'],
                'barrio' => $row['BARRIO'],
                'rut' => $rowEmp['RUT'],
                'telefono' => $rowTel['TELEFONO'],
                'cliente' => "empresa",
            ];
            echo json_encode($datoEmp);
        }       
        
        
    }

}
?>