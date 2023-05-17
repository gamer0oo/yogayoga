const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        $('#superior').removeClass('bg-light');
        $('#superior').addClass('bg-dark');
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        $('#superior').removeClass('bg-dark');
        $('#superior').addClass('bg-light');
    }
});

function mostrarHoraActual() {
    var fecha = new Date();
    var opcionesHora = { hour12: false, hour: '2-digit', minute: '2-digit' };
    var horaActual = fecha.toLocaleTimeString('es-ES', opcionesHora);
    document.getElementById("horaFecha").textContent = horaActual;
}

mostrarHoraActual(); // Mostrar hora inicial al cargar la página

setInterval(mostrarHoraActual, 60000); // Actualizar cada 1 minuto (60000 milisegundos)



