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
let map;
let marker;

let palabrasRestantes = document.getElementById("palabrasRestantes");
let maxPalabras = 100;

// Rellenar puntos y guion de rut automaticamente
rut.addEventListener('input', (event) => {
    let rut2 = event.target.value.replace(/[^0-9kK]/g, '');
    rut2 = rut2.slice(0, 9);    // Limitar a 9 caracteres 
    rut2 = rut2.slice(0, -1) + '-' + rut2.slice(-1);
    rut2 = rut2.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    event.target.value = rut2;
});

function validarRut(rut) {
    rut = rut.replace(/[^0-9kK]/g, ''); // Eliminar todos los caracteres excepto números y la letra 'k' en caso de ser verificador

    if (rut.length < 2) {
        return false;
    }

    var dv = rut.charAt(rut.length - 1); // Último dígito o letra verificadora
    var rutNumerico = parseInt(rut.slice(0, -1)); // Convertir a número el RUT sin el dígito verificador

    if (isNaN(rutNumerico)) {
        return false;
    }

    var suma = 0;
    var factor = 2;

    // Calcular la suma ponderada de los dígitos del RUT
    for (var i = rutNumerico.toString().length - 1; i >= 0; i--) {
        suma += parseInt(rutNumerico.toString().charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
    }

    var dvEsperado = 11 - (suma % 11); // Calcular el dígito verificador esperado
    dvEsperado = dvEsperado === 11 ? 0 : dvEsperado === 10 ? 'K' : dvEsperado.toString(); // Si el dígito verificador esperado es 11, se convierte a 0, si es 10, se convierte a 'K'

    return dv.toString().toUpperCase() === dvEsperado; // Comparar el dígito verificador ingresado con el esperado (ignorar mayúsculas/minúsculas)
}

function verPassword() {
    const icon = document.getElementById("pswIcon");
    if (contraseña.type === 'password') {
        contraseña.type = 'text';
        icon.classList = 'bi bi-eye-slash';
    } else {
        contraseña.type = 'password';
        icon.classList = 'bi bi-eye';
    }
}
function verPassword2() {
    const icon2 = document.getElementById("pswIcon2");
    if (contraseña2.type === 'password') {
        contraseña2.type = 'text';
        icon2.classList = 'bi bi-eye-slash';
    } else {
        contraseña2.type = 'password';
        icon2.classList = 'bi bi-eye';
    }
}



boton.addEventListener("click", validarFormulario);


function validarFormulario(e) {
    e.preventDefault();

    let hayErrores = false;

    if (!validarRut(rut.value)) {
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
        palabrasRestantes.style.color = "";
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

contraseña2.addEventListener("input", function () {
    $("#error12").css("display", "none");
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
    // Mostrar la alerta de éxito utilizando el modal
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



function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayMap)
    }
    function displayMap(position) {
        macc = { lat: position.coords.latitude, lng: position.coords.longitude }
        map = new google.maps.Map(document.getElementById("map"), { zoom: 17, center: macc });
        marker = new google.maps.Marker({ position: macc, map: map });
    }

}

initMap()


