//Variables
$("#mensaje").css("display", "none");
//Desaparecer las plantillas
$("#FormularioEmpresa").css("display", "none");
$("#FormularioCliente").css("display", "none");
//Modal
$("#fondo").css("z-index", "-1");
$("#fondo").css("background", "transparent");
$("#modal").css("display", "none");

// Click para abrir el formulario cliente
$("#BtnCliente").click(ingresarFormularioCliente);
function ingresarFormularioCliente() {
  $("#FormularioEmpresa").css("display", "none");
  $("#FormularioCliente").css("display", "block");
  $("#FormularioCliente").css({
    animation: "AparecerCliente 0.5s ease-out 0s normal",
  });
  $("#FormularioEmpresa").css({
    animation: "DesaparecerEmpresa 0.5s ease-out 0s normal",
  });
}
// Click para abrir el formulario Empresa
$("#BtnEmpresa").click(ingresarFormularioEmpresa);
function ingresarFormularioEmpresa() {
  $("#FormularioEmpresa").css("display", "block");
  $("#FormularioCliente").css("display", "none");
  $("#FormularioCliente").css({
    animation: "DesaparecerCliente 0.5s ease-out 0s normal",
  });
  $("#FormularioEmpresa").css({
    animation: "AparecerEmpresa 0.5s ease-out 0s normal",
  });
}
//registrarse en web
let Web = () => {
  let ci = Number($("#txtCedula_Web").val());
  let email = $("#txtEmail_Web").val();
  let telefono = Number($("#txtTelefono_Web").val());
  let nombre = $("#txtNombre").val();
  let apellido = $("#txtApellido").val();
  let barrio = $("#txtBarrio_Web").val();
  let calle = $("#txtCalle_Web").val();
  let puerta = Number($("#txtPuerta_Web").val());
  let esquina = $("#txtEsquina_Web").val();
  let clave = $("#txtClave_Web").val();
  let confirmarClave = $("#txtConfirmarClave_Web").val();

  if ( ci == "" || email == "" || telefono == "" || nombre == "" || apellido == "" || barrio == "" || calle == "" || puerta == "" || esquina == "" || clave == "" || confirmarClave == ""
  ) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor complete los campos vacios");
  } else if (!/[0-9]/.test(ci) || !/^\d{8}$/.test(ci)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor Ingrese una cedula valida");
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un email valido");
  } else if (!/[0-9]/.test(telefono) || !/\d{8}$/.test(telefono)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un telefono valido");
  } else if (/[0-9]/.test(nombre)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingresar un nombre valido");
  } else if (/[0-9]/.test(apellido)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un apellido valido");
  } else if (/[0-9]/.test(barrio)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingresar un barrio valido");
  } else if (/[0-9]/.test(calle)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese una calle valida");
  } else if (!/[0-9]/.test(puerta)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un numero de puerta valido");
  } else if (/[0-9]/.test(esquina)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese una esquina valida");
  } else if (clave != confirmarClave) {
    $("##mensaje").css("display", "block");
    $("#mensaje").html("La contraseña no coincide");
  } else if($("#aceptarTerminosCliente").is(":checked")){
    let datoWeb = {
      ci: ci,
      email: email,
      telefono: telefono,
      nombre: nombre,
      apellido: apellido,
      barrio: barrio,
      calle: calle,
      puerta: puerta,
      esquina: esquina,
      clave: clave,
    };
    bd_web(datoWeb);
  }else{
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Acepta nuestras Condiciones y servicios");
  }
};
$("#BtnClienteRegistrar").click(Web);
//registrarse en empresa
let Empresa = () => {
  let email = $("#txtEmail_Empresa").val();
  let telefono = $("#txtTelefono_Empresa").val();
  let rut = $("#txtRut").val();
  let barrio = $("#txtBarrio_Empresa").val();
  let calle = $("#txtCalle_Empresa").val();
  let puerta = $("#txtPuerta_Empresa").val();
  let esquina = $("#txtEsquina_Empresa").val();
  let clave = $("#txtClave_Empresa").val();
  let confirmarClave = $("#txtConfirmarClave_Empresa").val();

  if (email == "" || telefono == "" || rut == "" || barrio == "" || calle == "" || puerta == "" || esquina == "" || clave == "" || confirmarClave == "") {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor complete los campos vacios");
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un email valido");
  } else if (!/[0-9]/.test(telefono) || !/\d{8}$/.test(telefono)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un telefono valido");
  } else if (!/[0-9]/.test(rut)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingresar un rut valido");
  } else if (/[0-9]/.test(barrio)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingresar un barrio valido");
  } else if (/[0-9]/.test(calle)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese una calle valida");
  } else if (!/[0-9]/.test(puerta)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese un numero de puerta valido");
  } else if (/[0-9]/.test(esquina)) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Por favor ingrese una esquina valida");
  } else if (clave != confirmarClave) {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("La contraseña no coincide");
  } else if($("#aceptarTerminosEmpresa").is(":checked")){
    let datoEmpresa = {
      email: email,
      telefono: telefono,
      rut: rut,
      barrio: barrio,
      calle: calle,
      puerta: puerta,
      esquina: esquina,
      clave: clave,
    };
    bd_empresa(datoEmpresa);
  }else {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Acepta nuestras Condiciones y servicios");
  }
};
$("#BtnEmpresaRegistrar").click(Empresa);

let bd_empresa = (datos) => {
  $.post("php/bd_empresa.php", datos, function (respuesta) {
    if (respuesta.trim().toLowerCase() == "listo"){
      $("#FormularioEmpresa").css("display", "none");
      $("#FormularioCliente").css("display", "none");
      $("#mensaje").css("display", "none")
      $("#fondo").css("z-index", "10");
      $("#fondo").css("background", "rgba(0, 0, 0, 0.8)"); 
      $("#modal").css("display", "block");
      $("#mensajeAutorizado").html("Su cuenta a sido registrada, espere hasta que lo autorizemos")
    }else{
      $("#mensaje").css("display", "block");
      $("#mensaje").html(respuesta);
    }
  });
};

let bd_web = (datos) => {
  $.post("php/bd_web.php", datos, function (respuesta) {
    console.log(respuesta)
    if (respuesta.trim().toLowerCase() == "listo"){
      $("#FormularioEmpresa").css("display", "none");
      $("#FormularioCliente").css("display", "none");
      $("#mensaje").css("display", "none")
      $("#fondo").css("z-index", "10");
      $("#fondo").css("background", "rgba(0, 0, 0, 0.8)"); 
      $("#modal").css("display", "block");
      $("#mensajeAutorizado").html("Su cuenta a sido registrada, espere hasta que lo autorizemos")
    }else{
      $("#mensaje").css("display", "block");
      $("#mensaje").html(respuesta);
    }
  });
};


