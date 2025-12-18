let miCaja = document.getElementById("caja");

miCaja.addEventListener("click", function() {
    miCaja.style.backgroundColor = "red";
    miCaja.innerText = "Color cambiado";
});

document.addEventListener("keydown", function(evento) {
    miCaja.innerText = "Tecla: " + evento.key;
    
    if (evento.key === "") {
        miCaja.style.backgroundColor = "lightblue";
    }
});