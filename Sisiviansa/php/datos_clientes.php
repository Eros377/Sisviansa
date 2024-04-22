<?php

require_once ("clases/Cliente.php");
$clientesEmpresa = Cliente::datosEmpresa();
$clientesWeb = Cliente::datosWeb();
$clientes = (array) array_merge((array)$clientesEmpresa,(array)$clientesWeb);
echo json_encode($clientes);

?>