let horas = new Date().getHours();
let minutos = new Date().getMinutes();

document.addEventListener("DOMContentLoaded", function() {
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();

    function renderHora() {
        let horaSpan = `<span>${horas}:${minutos}</span>`;
        document.getElementById("hora").innerHTML = horaSpan;
    }

    renderHora();
});

 renderHora();