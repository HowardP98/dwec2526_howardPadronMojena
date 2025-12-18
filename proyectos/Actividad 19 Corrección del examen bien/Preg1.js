let mensaje = "";
const log = document.getElementById("log1");


function mostrarAlert(){
    alert("Esto es una alerta"); 

    mensaje += "Has pulsado alert y lo sabes<br>";
    log.innerHTML = mensaje;
}

function mostrarPrompt(){

    const datoIntroducido = prompt("Introduce tu próximo destino");

    mensaje += "El usuario quiere ir a " + datoIntroducido + "<br>";
    log.innerHTML = mensaje;

}

function mostrarConfirm() {
    const confirmacion = confirm("¿Es Atlas un OVNI?");

    if(confirmacion){
        mensaje += "El usuario cree que atlas SI es un ovni<br>";
    } else {
        mensaje += "El usuario cree que atlas NO es un ovni<br>";
    }
    log.innerHTML = mensaje;
}

function borrarLog() {
    mensaje = "";
    log.innerHTML = mensaje;
}