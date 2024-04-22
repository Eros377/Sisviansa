window.addEventListener("load", inicio);

function inicio() {
    let url = "php/datos_clientes.php";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                $("#tabla1").append(`
                    <tr id="${data[i].id}">
                        <td class="bordeUsuario py-1">${data[i].id}</td>
                        <td class="bordeUsuario py-1">${data[i].ci_rut}</td>
                        <td class="bordeUsuario py-1">${data[i].email}</td>
                        <td class="bordeUsuario py-1"> <input type="button" class="btnIngresarCliente mx-2 my-1" id="btn${data[i].id}" value="Autorizar"></td>
                    </tr>
                `);
                $(`#btn${data[i].id}`).click(() => autorizarCliente(data[i].id));
            }
            pedido()
        });
}
function pedido(){
    let url = "php/datos_pedidos.php";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++){
            $("#tabla2").append(`
            <tr id="${data[i].id_pedido}">
                <td class="bordePedido">${data[i].id_cliente}</td>
                <td class="bordePedido">${data[i].id_pedido}</td>
                <td class="bordePedido">${data[i].id_menu}</td>
                <td class="bordePedido">${data[i].precio}</td>
                <td class="bordePedido">${data[i].fecha}</td>
                <td class="bordePedido"><input type="button" class="btnIngresarPedido mx-2 my-1" id="btn${data[i].id_pedido}" value="Autorizar"></td>
            </tr>
        `)
        $(`#btn${data[i].id_pedido}`).click(() => autorizarPedido(data[i].id_pedido));
        
        }
    })
}
function autorizarCliente(id) {
    console.log(id);
    let numeral = "#"+id;
    $(numeral).css("display", "none");
    let data = {
        id: id,
        autorizar: "true"
    }
    console.log(data.autorizar)
    $.post("php/autorizar_cliente.php",data, function(res) {
        console.log(res);
    });
    
}
function autorizarPedido(id){
    let numeral = "#"+id;
    $(numeral).css("display","none");
    let datos = {
        id: id,
        autorizar: "true"
    }
    $.post("php/autorizar_pedido.php",datos,function(res){
        console.log(res)
    })
}

//Desaparece las tablas y botones
$("#tablaUsuario").css("display", "none");
$("#tablaPedido").css("display", "none");
//Cambiar a la tabla  Pedido
$("#btnPedido").click (mostrarTablaPedido) ;
function mostrarTablaPedido(){
    $("#tomarId").css("display", "block");
    $("#btnIngresarPedido").css("display", "block");
    $("#btnIngresarCliente").css("display", "none");
    $("#tablaPedido").css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $("#tablaUsuario").css("display", "none");
    $("#tablaPedido").css("display", "block");
   
}
//Cambiar a la tabla  Usuario
$("#btnCliente").click (mostrarTablaCliente);
function mostrarTablaCliente() {
    $("#tomarId").css("display", "block");
    $("#btnIngresarPedido").css("display", "none");
    $("#btnIngresarCliente").css("display", "block");
    $("#tablaUsuario").css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $("#tablaUsuario").css("display", "block");
    $("#tablaPedido").css("display", "none");
    $("#usuario").css("display", "block");
}



