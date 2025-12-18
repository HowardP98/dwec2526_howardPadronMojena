function girarRuleta() {
    var aguja = document.getElementById("aguja");
    var texto = document.getElementById("resultadoTexto");

    var azarColor = Math.floor(Math.random() * 4); 
    var azarMiembro = Math.floor(Math.random() * 2);
    var azarLado = Math.floor(Math.random() * 2);

    var colorSeleccionado = "";
    var gradosRotacion = 0;

    // Grados (para caer en el medio del color)
    if (azarColor == 0) {
        colorSeleccionado = "Rojo";
        gradosRotacion = 45; 
    } else if (azarColor == 1) {
        colorSeleccionado = "Azul";
        gradosRotacion = 135; 
    } else if (azarColor == 2) {
        colorSeleccionado = "Verde";
        gradosRotacion = 225; 
    } else {
        colorSeleccionado = "Amarillo";
        gradosRotacion = 315; 
    }

    // Girar la aguja
    var rotacionTotal = 1080 + gradosRotacion;

    // Mantenemos el 'translate' para que siga centrada al girar
    aguja.style.transform = "translate(-50%, -100%) rotate(" + rotacionTotal + "deg)";

    // Preparar textos
    var miembro = (azarMiembro == 0) ? "Mano" : "Pie";
    var lado = (azarLado == 0) ? "Izquierda" : "Derecha";
    var mensajeFinal = colorSeleccionado + " - " + miembro + ": " + lado;

    // Mostrar resultado tras 1 segundo
    setTimeout(function(){
        texto.innerHTML = mensajeFinal;
        
        if(colorSeleccionado == "Rojo") {
            texto.style.color = "red";
        } else if(colorSeleccionado == "Azul") {
            texto.style.color = "blue";
        } else if(colorSeleccionado == "Verde") {
            texto.style.color = "green";
        } else {
            texto.style.color = "#DAA520"; 
        }

    }, 1000); //1000 milisegundos = 1s
}