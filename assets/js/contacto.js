let rut = document.getElementById("rutInput");
let nombre = document.getElementById("nameInput");
let apellido = document.getElementById("apellInput");
let boton = document.getElementById("enviar");
let telefono = document.getElementById("telInput");
let correo = document.getElementById("correoInput");
let direccion = document.getElementById("direccInput");
let contraseña = document.getElementById("pswInput");
let contraseña2 = document.getElementById("psw2Input");
let asunto = document.getElementById("asunInput");
let comentarios = document.getElementById("comentInput");

let palabrasRestantes = document.getElementById("palabrasRestantes");
let maxPalabras = 100;

boton.addEventListener("click", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    let hayErrores = false;

    if (rut.value.length < 8 || rut.value.length > 9) {
        $("#error8").css("display", "block");
        hayErrores = true;
    } else {
        $("#error8").css("display", "none");
    }

    if (contraseña.value == "" || contraseña.value.length <= 7) {
        $("#error6").css("display", "block");
        hayErrores = true;
    } else {
        $("#error6").css("display", "none");
    }

    if (contraseña2.value !== contraseña.value) {
        $("#error7").css("display", "block");
        hayErrores = true;
    } else {
        $("#error7").css("display", "none");
    }

    if (nombre.value == "") {
        $("#error").css("display", "block");
        hayErrores = true;
    } else {
        $("#error").css("display", "none");
    }

    if (apellido.value == "") {
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

    if (direccion.value == "") {
        $("#error5").css("display", "block");
        hayErrores = true;
    } else {
        $("#error5").css("display", "none");
    }

    if (asunto.value == "") {
        $("#error9").css("display", "block");
        hayErrores = true;
    } else {
        $("#error9").css("display", "none");
    }

    if (comentarios.value == "") {
        $("#error10").css("display", "block");
        hayErrores = true;
    } else {
        $("#error10").css("display", "none");
    }

    if (comentarios.value.trim().split(/\s+/).length > maxPalabras) {
        $("#error11").css("display", "block");
        hayErrores = true;
    } else {
        $("#error11").css("display", "none");
    }

    if (hayErrores) {
        return;
    }

    limpiarCampos();
    mostrarAlertaExito();
}

comentarios.addEventListener("input", function () {
    let comentario = comentarios.value.trim();
    let palabras = comentario.split(/\s+/); // Dividir el texto en palabras

    palabrasRestantes.textContent = "Palabras restantes: " + (maxPalabras - palabras.length);

    if (palabras.length > maxPalabras) {
        $("#error11").css("display", "block");
    } else {
        $("#error11").css("display", "none");
    }
    if (palabras.length > maxPalabras || palabras.length < 0) {
        palabrasRestantes.style.color = "red";
    } else {
        palabrasRestantes.style.color = "inherit";
    }
});

rut.addEventListener("input", function () {
    $("#error8").css("display", "none");
});

contraseña.addEventListener("input", function () {
    $("#error6").css("display", "none");
});

contraseña2.addEventListener("input", function () {
    $("#error9").css("display", "none");
});

nombre.addEventListener("input", function () {
    $("#error").css("display", "none");
});

apellido.addEventListener("input", function () {
    $("#error2").css("display", "none");
});

telefono.addEventListener("input", function () {
    $("#error3").css("display", "none");
});

correo.addEventListener("input", function () {
    $("#error4").css("display", "none");
});

direccion.addEventListener("input", function () {
    $("#error5").css("display", "none");
});

asunto.addEventListener("input", function () {
    $("#error9").css("display", "none");
});

contraseña2.addEventListener("input", function () {
    $("#error7").css("display", "none");
});

comentarios.addEventListener("input", function () {
    $("#error10").css("display", "none");
});

comentarios.addEventListener("input", function () {
    $("#error11").css("display", "none");
});

limpiarCampos();

function limpiarCampos() {
    rut.value = "";
    contraseña.value = "";
    contraseña2.value = "";
    nombre.value = "";
    apellido.value = "";
    telefono.value = "";
    correo.value = "";
    direccion.value = "";
    asunto.value = "";
    comentarios.value = "";
}

function mostrarAlertaExito() {
    // Mostrar la alerta de éxito utilizando el modal de Bootstrap
    var modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
}

function password() {
    let input = document.getElementById("password");

    if (input.type == "password") {
        input.type = "text";
        document.getElementById("mostrar_pass").style.display = "none";
        document.getElementById("ocultar_pass").style.display = "inline";
    } else {
        input.type = "password";
        document.getElementById("mostrar_pass").style.display = "inline";
        document.getElementById("ocultar_pass").style.display = "none";
    }
}

let map;
let marker;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayMap)
    }
    function displayMap(position) {
        macc = { lat: position.coords.latitude, lng: position.coords.longitude }
        map = new google.maps.Map(document.getElementById("map"), {zoom: 17, center: macc});
        marker = new google.maps.Marker({position: macc, map: map});
    }
   
}

initMap()


