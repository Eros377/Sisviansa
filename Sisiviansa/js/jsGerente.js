$("#tablaCrearMenu").css("display", "none");
$("#tablaCrearUsuario").css("display", "none");
$("#botonMenu").click(menu)
$("#botonUsuario").click(usuario)
function menu(){
    $("#tablaCrearMenu").css("display", "block");
    $("#tablaCrearUsuario").css("display", "none");
}
function usuario(){
    $("#tablaCrearMenu").css("display", "none");
    $("#tablaCrearUsuario").css("display", "block");
}
$("#btnCrearUsuario").click(CrearUsuario);
function CrearUsuario(){
    let ci = $("#txtCI").val()
    let email = $("#txtEmail").val()
    let clave= $("#txtClave").val()
    let rol = $("#asignarRol").val()
    if(ci == "" || email == "" || clave == "" || rol == ""){
        $("#aviso").html("Por favor complete los campos vacios")
    }else if (!/[0-9]/.test(ci) || !/^\d{8}$/.test(ci)){
        $("#aviso").html("Por favor Ingrese una cedula valida")
    }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
        $("#aviso").html("Por favor ingrese un email valido")
    }else {
        let datosUser = {
            ci: ci,
            email: email,
            clave: clave,
            rol: rol
        }
        ingresarUsuario(datosUser)
    }
}
function ingresarUsuario(dato){
 $.post("php/ingresarUsuario.php",dato,function(res){
        console.log(res)
 })
}
$("#btnCrearMenu").click(CrearMenu)
function CrearMenu(){
    let nombre = $("#txtNombre").val()
    let elaboracion = $("#txtElaboracion").val()
    let dieta = $("#asignarDieta").val()
    let stock_min = $("#txtMinimo").val()
    let stock_max = $("#txtMaximo").val()
    let precio = $("#txtPrecio").val()
    if (nombre == "" || elaboracion == "" || dieta == "" || stock_min == "" || stock_max == ""){
        $("#aviso").html("Por favor complete los campos vacios")
    }else if (!/[0-9]/.test(elaboracion)){
        $("#aviso").html("El tiempo de elaboracion debe ser numerico")
    }else if (!/[0-9]/.test(stock_min)){
        $("#aviso").html("El stock minimo debe ser numerico")
    }else if (!/[0-9]/.test(stock_max)){
        $("#aviso").html("El stock maximo debe ser numerico")
    }else if(!/[0-9]/.test(precio)){
        $("#aviso").html("El precio debe ser numerico")
    }else{ 
        let datoMenu = {
            nombre: nombre,
            dieta: dieta,
            precio: precio,
            elaboracion: elaboracion,
            stock_min: stock_min,
            stock_max: stock_max
        }
        ingresarMenu(datoMenu)
    }
}
function ingresarMenu(dato){
    $.post("php/ingresarMenu.php",dato,function(res){
        console.log(res)
    })
}