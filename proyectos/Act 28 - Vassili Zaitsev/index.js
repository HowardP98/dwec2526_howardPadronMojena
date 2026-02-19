<<<<<<< HEAD
let tablero = document.getElementById("tablero");
let textoTiempo = document.getElementById("tiempo");

let puntos = 0;
let tiempo = 0;
let intervalo = null;

// posicion inicial del bloque rojo y direccion en la que ira al principio
let rojoX = 10;
let rojoY = 10;
let rojoDirX = 2;
let rojoDirY = 2;
let rojoElemento = null;

// azul
let azulX = 100;
let azulY = 100;
let azulDirX = -2;
let azulDirY = 3;
let azulElemento = null;

function ciclo() {
    tiempo++;

    // aparecen los cuadrados segun el tiempo
    if (tiempo === 1) {
        rojoElemento = crearCuadrado("rojo");
    }
    
    if (tiempo === 3) {
        azulElemento = crearCuadrado("azul");
    }

    // si ambos han sido eliminados, reiniciamos el tiempo para que vuelvan a salir
    if (rojoElemento === null && azulElemento === null && tiempo > 3) {
        tiempo = 0; 
    }

    moverRojo();
    moverAzul();
}

function crearCuadrado(nombreColor) {
    let nuevoDiv = document.createElement("div");
    
    nuevoDiv.className = "sprite " + nombreColor;  //esto es como hacer <div class = "sprite rojo"> , se pueden declarar varias clases a un elemento>       
    
    nuevoDiv.addEventListener("click", function() {
        tablero.removeChild(nuevoDiv);
        puntos++; 
        textoTiempo.innerText = puntos;
        
        if (nombreColor === "rojo") { rojoElemento = null; }
        if (nombreColor === "azul") { azulElemento = null; }

        // condicion de victoria
        if (puntos > 10) {
            alert("Has ganado! Terminaste el juego.");
            reiniciar();
        }
    });

    tablero.appendChild(nuevoDiv);
    return nuevoDiv;
}

function moverRojo() {
    
    if (rojoElemento === null) return;

    // actualizar posición
    rojoX += rojoDirX;
    rojoY += rojoDirY;

    // rebote en X (Horizontal)
    if (rojoX >= 250) { rojoDirX = -2; } 
    if (rojoX <= 0)   { rojoDirX = 2;  } 

    // rebote en Y (Vertical)
    if (rojoY >= 250) { rojoDirY = -2; } 
    if (rojoY <= 0)   { rojoDirY = 2;  } 

    // aplicar al estilo
    rojoElemento.style.left = rojoX + "px";
    rojoElemento.style.top = rojoY + "px";
}

function moverAzul(){
     // si no hay elemento azul, no hacemos nada
    if (azulElemento === null) return;

    // actualizar posición sumando la dirección actual
    azulX += azulDirX;
    azulY += azulDirY;

    // rebote en el eje X (Horizontal)
    if (azulX >= 250) { azulDirX = -2; } 
    if (azulX <= 0)   { azulDirX = 2;  } 

    // rebote en el eje Y (vertical)
    if (azulY >= 250) { azulDirY = -2; } 
    if (azulY <= 0)   { azulDirY = 2;  } 

    // nuevas coordenadas al CSS
    azulElemento.style.left = azulX + "px";
    azulElemento.style.top = azulY + "px";
}

//Botones Iniciar , Pausar y Reiniciar
function iniciar() {
    if (intervalo === null) {
        intervalo = setInterval(ciclo, 20); 
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    tiempo = 0;
    puntos = 0;
    textoTiempo.innerText = 0;
    tablero.innerHTML = ""; 
    rojoElemento = null;
    azulElemento = null;
}

=======
let tablero = document.getElementById("tablero");
let textoTiempo = document.getElementById("tiempo");

let puntos = 0;
let tiempo = 0;
let intervalo = null;

// posicion inicial del bloque rojo y direccion en la que ira al principio
let rojoX = 10;
let rojoY = 10;
let rojoDirX = 2;
let rojoDirY = 2;
let rojoElemento = null;

// azul
let azulX = 100;
let azulY = 100;
let azulDirX = -2;
let azulDirY = 3;
let azulElemento = null;

function ciclo() {
    tiempo++;

    // aparecen los cuadrados segun el tiempo
    if (tiempo === 1) {
        rojoElemento = crearCuadrado("rojo");
    }
    
    if (tiempo === 3) {
        azulElemento = crearCuadrado("azul");
    }

    // si ambos han sido eliminados, reiniciamos el tiempo para que vuelvan a salir
    if (rojoElemento === null && azulElemento === null && tiempo > 3) {
        tiempo = 0; 
    }

    moverRojo();
    moverAzul();
}

function crearCuadrado(nombreColor) {
    let nuevoDiv = document.createElement("div");
    
    nuevoDiv.className = "sprite " + nombreColor;  //esto es como hacer <div class = "sprite rojo"> , se pueden declarar varias clases a un elemento>       
    
    nuevoDiv.addEventListener("click", function() {
        tablero.removeChild(nuevoDiv);
        puntos++; 
        textoTiempo.innerText = puntos;
        
        if (nombreColor === "rojo") { rojoElemento = null; }
        if (nombreColor === "azul") { azulElemento = null; }

        // condicion de victoria
        if (puntos > 10) {
            alert("Has ganado! Terminaste el juego.");
            reiniciar();
        }
    });

    tablero.appendChild(nuevoDiv);
    return nuevoDiv;
}

function moverRojo() {
    
    if (rojoElemento === null) return;

    // actualizar posición
    rojoX += rojoDirX;
    rojoY += rojoDirY;

    // rebote en X (Horizontal)
    if (rojoX >= 250) { rojoDirX = -2; } 
    if (rojoX <= 0)   { rojoDirX = 2;  } 

    // rebote en Y (Vertical)
    if (rojoY >= 250) { rojoDirY = -2; } 
    if (rojoY <= 0)   { rojoDirY = 2;  } 

    // aplicar al estilo
    rojoElemento.style.left = rojoX + "px";
    rojoElemento.style.top = rojoY + "px";
}

function moverAzul(){
     // si no hay elemento azul, no hacemos nada
    if (azulElemento === null) return;

    // actualizar posición sumando la dirección actual
    azulX += azulDirX;
    azulY += azulDirY;

    // rebote en el eje X (Horizontal)
    if (azulX >= 250) { azulDirX = -2; } 
    if (azulX <= 0)   { azulDirX = 2;  } 

    // rebote en el eje Y (vertical)
    if (azulY >= 250) { azulDirY = -2; } 
    if (azulY <= 0)   { azulDirY = 2;  } 

    // nuevas coordenadas al CSS
    azulElemento.style.left = azulX + "px";
    azulElemento.style.top = azulY + "px";
}

//Botones Iniciar , Pausar y Reiniciar
function iniciar() {
    if (intervalo === null) {
        intervalo = setInterval(ciclo, 20); 
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    tiempo = 0;
    puntos = 0;
    textoTiempo.innerText = 0;
    tablero.innerHTML = ""; 
    rojoElemento = null;
    azulElemento = null;
}

>>>>>>> 02b34197b14dfadb723bf33e2071e9a180a6d62b
