const luzRoja = document.getElementById("rojo");
const luzAmarilla = document.getElementById("amarillo");
const luzVerde = document.getElementById("verde");

const btnPlay = document.getElementById("btnPlay");
const btnReset = document.getElementById("btnReset");

let bucleSemaforo; // Variable para guardar el interval

function cambiarSemaforo() {
    // Empezamos en ROJO
    apagarLuces();
    luzRoja.classList.add("encendido");

    // A los 2 segundos, pasamos a VERDE
    setTimeout(function() {
        apagarLuces();
        luzVerde.classList.add("encendido");
    }, 2000);

    // A los 4 segundos, pasamos a AMARILLO
    setTimeout(function() {
        apagarLuces();
        luzAmarilla.classList.add("encendido");
    }, 4000);
}

function apagarLuces() {
    luzRoja.classList.remove("encendido");
    luzAmarilla.classList.remove("encendido");
    luzVerde.classList.remove("encendido");
}

// PLAY: Inicia el bucle cada 6 segundos
btnPlay.addEventListener("click", function() {
    // Evitamos que se activen varios bucles a la vez
    clearInterval(bucleSemaforo); 
    
    cambiarSemaforo(); 
    
    bucleSemaforo = setInterval(cambiarSemaforo, 6000);
});

// Detiene todo y apaga luces
btnReset.addEventListener("click", function() {
    clearInterval(bucleSemaforo);
    apagarLuces();
});