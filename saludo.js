const btn = document.getElementById("boton");

function saludo() {
    event.stopPropagation();
    alert("¡Hola!, Saludos terricola.");
}

btn.addEventListener("click", saludo());
