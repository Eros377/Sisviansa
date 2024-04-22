window.addEventListener("load", inicio);
function inicio(){
  if(sessionStorage.getItem('usuario')){
      //ocultar el iniciar sesion
      $("#btnUser").css("display", "none");
      $("#btnPerfil").css("display", "block");
  }else{
    console.log("Usuario invitado")
    $("#btnUser").css("display", "block");
    $("#btnPerfil").css("display", "none");
  }
}
//si hacemos click a carrito.
$("#linkCarrito").click(carrito)
function carrito(){
  if(sessionStorage.getItem('usuario')){
    let datos = sessionStorage.getItem('usuario');
    let usuario = JSON.parse(datos);
    if(usuario.autorizado == "true"){
      window.location.href = "carrito.html"
    }else if (usuario.autorizado == "false"){
        $("#modal").css("display", "block");
        $("#fondoModal").css("background-color", "rgba(0, 0, 0, 0.8)");
        $("#fondoModal").css("z-index", "9");
        $("#mensajeAdvertencia").html("Tu cuenta a un no esta Autorizada para acceder a esta funcionalidad")
    }
  }else {
    $("#modal").css("display", "block");
    $("#fondoModal").css("background-color", "rgba(0, 0, 0, 0.8)");
    $("#fondoModal").css("z-index", "9");
    $("#mensajeAdvertencia").html(`Para acceder a esta funcion debe <a href="login.html">iniciar sesion </a>, si no tienes una cuenta <a href="registro.html">registrese</a>`)
 
  }
}
//si hacemos click a tienda.
$("#linkTienda").click(tienda)
function tienda(){
  if(sessionStorage.getItem('usuario')){
    let datos = sessionStorage.getItem('usuario');
    let usuario = JSON.parse(datos);
    if(usuario.autorizado == "true"){
      window.location.href = "tienda.html";
    }else if (usuario.autorizado == "false"){
      $("#modal").css("display", "block");
      $("#fondoModal").css("background-color", "rgba(0, 0, 0, 0.8)");
      $("#fondoModal").css("z-index", "9");
      $("#mensajeAdvertencia").html("Tu cuenta a un no esta Autorizada para acceder a esta funcionalidad")
    } 
  }else {
    $("#modal").css("display", "block");
    $("#fondoModal").css("background-color", "rgba(0, 0, 0, 0.8)");
    $("#fondoModal").css("z-index", "9");
    $("#mensajeAdvertencia").html(`Para acceder a esta funcion debe <a href="login.html">iniciar sesion </a>, si no tienes una cuenta <a href="registro.html">registrese</a>`)
  }
}
//Para cerrar el modal
$("#cerrarModal").click(function(){
  $("#modal").css("display", "none");
  $("#fondoModal").css("background-color", "transparent");
  $("#fondoModal").css("z-index", "-1");
});
