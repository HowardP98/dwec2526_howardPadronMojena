const audioQ = new Audio('a-estudiar.mp3');
const audioW = new Audio('chavales-que-es-viernes.mp3');
const audioE = new Audio('dry-fart.mp3');
const audioA = new Audio('pew_pew-dknight556-1379997159.mp3');
const audioS = new Audio('punch-gaming-sound-effect-hd_RzlG1GE.mp3');
const audioD = new Audio('anime-wow-sound-effect.mp3');

const colorQ = "cyan";
const colorW = "yellow";
const colorE = "orange";
const colorA = "red";
const colorS = "green";
const colorD = "blue";

document.addEventListener("keydown", presionar);
document.addEventListener("keyup", soltar);
document.addEventListener("mousemove", moverRaton);

function presionar(e) {

    let letra = e.key.toLowerCase(); 
    let pad = document.getElementById(letra); 

    let audioSeleccionado;
    let colorSeleccionado;

    switch(letra) {
        case 'q':
            audioSeleccionado = audioQ;
            colorSeleccionado = colorQ;
            break;
        case 'w':
            audioSeleccionado = audioW;
            colorSeleccionado = colorW;
            break;
        case 'e':
            audioSeleccionado = audioE;
            colorSeleccionado = colorE;
            break;
        case 'a':
            audioSeleccionado = audioA;
            colorSeleccionado = colorA;
            break;
        case 's':
            audioSeleccionado = audioS;
            colorSeleccionado = colorS;
            break;
        case 'd':
            audioSeleccionado = audioD;
            colorSeleccionado = colorD;
            break;
    }

    if (pad) {
        pad.style.backgroundColor = colorSeleccionado;

        if (audioSeleccionado) {
            audioSeleccionado.currentTime = 0; 
            audioSeleccionado.play();
        }
    }
}

function soltar(e) {
    let letra = e.key.toLowerCase();
    let pad = document.getElementById(letra);

    if (pad) {
        pad.style.backgroundColor = ""; 
    }
}

function moverRaton(e) {
    let div = document.getElementById("coords");
    div.innerHTML = "X: " + e.clientX + "<br>Y: " + e.clientY;
}