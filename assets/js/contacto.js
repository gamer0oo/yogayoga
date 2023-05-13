let rut = document.getElementById("rutInput")
let nombre = document.getElementById("nameInput");
let apellido = document.getElementById("apellInput");
let boton = document.getElementById("enviar");
let telefono = document.getElementById("telInput");  
let correo = document.getElementById("correoInput")  
let direccion = document.getElementById("direccInput")
let contraseña = document.getElementById("pswInput")
let contraseña2 = document.getElementById("psw2Input")
let asunto = document.getElementById("asunInput")

boton.addEventListener("click", validarFormulario)

function validarFormulario (e){
    e.preventDefault();

    let hayErrores = false;

    if(rut.value.length < 8 || rut.value.length > 9){
        $("#error8").css("display", "block");
        hayErrores = true;

    } else {
        $("#error8").css("display", "none");
    }
    if(contraseña.value == '' || contraseña.value.length < 5){
        $("#error6").css("display", "block");
        hayErrores = true;
        
    } else {
        $("#error6").css("display", "none");
    }
    if(contraseña2.value !== contraseña.value){
        $("#error7").css("display", "block");
        hayErrores = true;
    
    } else {
    $("#error7").css("display", "none");

    }


    if(nombre.value == ''){
        $("#error").css("display", "block");
        hayErrores = true;
    } else {
        $("#error").css("display", "none");
    }

    if (apellido.value == ''){
        $("#error2").css("display", "block");
        hayErrores = true;
    } else {
        $("#error2").css("display", "none");
    }

    if (telefono.value.length != 9) {
        $("#error3").css("display", "block");
        hayErrores = true;
    } else {
        $("#error3").css("display", "none");
    }

    if (!/\S+@\S+\.\S+/.test(correo.value)) {
        $("#error4").css("display", "block");
        hayErrores = true;
    } else {
        $("#error4").css("display", "none");
    }

    if (direccion.value == ''){
        $("#error5").css("display", "block");
        hayErrores = true;
    } else {
        $("#error5").css("display", "none");
    }
    if (asunto.value == ''){
        $("#error9").css("display", "block");
        hayErrores = true;
    } else {
        $("#error9").css("display", "none");
    }

    if (hayErrores) {
        return;
    }

    function limpiarCampos() {
        rut.value="";
        contraseña.value="";
        contraseña2.value="";
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        correo.value = "";
        direccion.value = "";
        asunto.value="";
    }

    alert("Formulario enviado correctamente");
    limpiarCampos();
};
rut.addEventListener("input", function() {
    $("#error8").css("display", "none");
});

contraseña.addEventListener("input", function() {
    $("#error6").css("display", "none");
});
contraseña2.addEventListener("input", function() {
    $("#error9").css("display", "none");
});

nombre.addEventListener("input", function() {
    $("#error").css("display", "none");
});

apellido.addEventListener("input", function() {
    $("#error2").css("display", "none");
});

telefono.addEventListener("input", function() {
    $("#error3").css("display", "none");
});

correo.addEventListener("input", function() {
    $("#error4").css("display", "none");
});


direccion.addEventListener("input", function() {
    $("#error5").css("display", "none");
});

asunto.addEventListener("input",function() {
    $("#error9").css("display", "none");
});

contraseña2.addEventListener("input",function() {
    $("#error7").css("display", "none");
});
