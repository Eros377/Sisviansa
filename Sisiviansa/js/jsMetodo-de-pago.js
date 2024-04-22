$("#btnComprar").click(TomarDatos);
$("#fondo").css("z-index", "-1");
$("#fondo").css("background", "transparent");
$("#modal").css("display", "none");
function TomarDatos(){
    let titular = $("#titular").val();
    let tarjeta = $("#tarjeta").val();
    let fechaVencimineto = $("#fechaVencimiento").val();
    let cvc = $("#cvc").val();
   validarDatos(titular,tarjeta,fechaVencimineto,cvc);
}
function validarDatos(titular,tarjeta,fechaVencimineto,cvc){
    let fecha = new Date().toISOString().slice(0, 10);
    if(titular == "" || tarjeta == "" || fechaVencimineto == "" || cvc == ""){
        $("#mensajeCompra").html("Complete los campos vacios");
    }else if (/[0-9]/.test(titular)){
        $("#mensajeCompra").html("El campo del titualr no debe ser numerico");
    }else if (!/[0-9]/.test(tarjeta) || !/\d{8}$/.test(tarjeta)){
        $("#mensajeCompra").html("Numero de tarjeta invalido");
    }else if (fecha > fechaVencimineto){
        $("#mensajeCompra").html("Esta tarjeta esta vencida");
    }else if (!/[0-9]/.test(cvc) || !/\d{3}$/.test(cvc)){
        $("#mensajeCompra").html("Codijo invalido")        
    }else {
        enviarPedido()
    }
    
}
function enviarPedido(){
    let pedido = sessionStorage.getItem('carrito');
    pedido = JSON.parse(pedido)
    datos = {
        id_usuario: pedido.id_usuario,
        id_menu: pedido.id_menu,
        precio: pedido.precio,
        stock: pedido.stock,
    }
    $.post("php/pedido.php",datos,function(res){
        console.log(res)
        sessionStorage.removeItem('carrito');
        $("#fondo").css("z-index", "10");
        $("#fondo").css("background", "rgba(0, 0, 0, 0.8)");
        $("#modal").css("display", "block");
    })
    
}




