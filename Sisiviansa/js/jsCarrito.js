window.addEventListener("load", inicio);
$("#fondoModal").css("z-index", "-1");
$("#fondoModal").css("background", "transparent");
$("#modal").css("display", "none");

function inicio() {
    let menus = JSON.parse(sessionStorage.getItem('carrito'));
    let total = menus.precio;
    $("#mostrarTotal").html("$ "+total);
    console.log(menus)
        $("#tabla1").append(`
            <tr id="`+menus.id+`">
                <td class="bordePedido col-1 col-sm-1 col-md-1 col-lg-1"><input type="button" value="Eliminar" class="btnEliminar my-2" id="btn`+menus.id+`"></td>
                <td class="bordePedido col-4 col-sm-1 col-md-1 col-lg-1">`+menus.nombre+`</td>
                <td class="bordePedido col-4 col-sm-2 col-md-2 col-lg-2">`+menus.tipo+`</td>
                <td class="bordePedido col-2 col-sm-2 col-md-2 col-lg-2">`+menus.precio+`</td>
                <td class="bordePedido col-4 col-sm-3 col-md-3 col-lg-2"><input type="number" placeholder="Stock" min="1" max="`+menus.stock+`" class="col-5" id="btnStock`+menus.id+`" value="1"></td>
            </tr>
        `);
        $(`#btn${menus.id}`).click(() => eliminar(menus.id));
    }
function eliminar(id){
        let numeral = "#"+id;
        sessionStorage.removeItem('carrito');
        $(numeral).css("display", "none");
    }
$("#btnFinalizarCompra").click(metodoDeCompra)
function metodoDeCompra(){
   if(sessionStorage.getItem('carrito')){
    window.location.href = "metodoDePago.html"
   }else{
        $("#fondoModal").css("z-index", "10");
        $("#fondoModal").css("background", "rgba(0, 0, 0, 0.8)");
        $("#modal").css("display", "block");
   }
}
//Para cerrar el modal
$("#cerrarModal").click(function(){
    $("#modal").css("display", "none");
    $("#fondoModal").css("background-color", "transparent");
    $("#fondoModal").css("z-index", "-1");
  });