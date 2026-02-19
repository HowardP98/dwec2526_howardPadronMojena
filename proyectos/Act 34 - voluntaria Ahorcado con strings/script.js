const palabras = ["JAVASCRIPT", "CODIGO", "NAVEGADOR", "INTERNET", "PROGRAMAR"];
const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let secreto = "";
let vidas = 6;
let aciertos = 0;

function iniciarJuego() {
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    secreto = palabras[indiceAleatorio]; 
    
    vidas = 6;
    aciertos = 0;

    document.getElementById("mensaje").innerText = "Vidas: " + vidas;
    document.getElementById("mensaje").style.color = "black";
    
    let guiones = "";
    for (let i = 0; i < secreto.length; i++) {
        guiones = guiones + "_";
    }
    document.getElementById("palabra").innerText = guiones;
    
    const teclado = document.getElementById("teclado");
    teclado.innerHTML = ""; 
    
    abecedario.forEach((letra) => {
        const btn = document.createElement("button");
        btn.innerText = letra;
        
        btn.onclick = function() {
            manejarIntento(letra, btn);
        };
        
        teclado.appendChild(btn);
    });
}

function manejarIntento(letra, btn) {
    btn.disabled = true; 

    if (secreto.includes(letra)) {
        let visual = document.getElementById("palabra").innerText.split("");
        
        for (let i = 0; i < secreto.length; i++) {
            if (secreto[i] === letra) {
                visual[i] = letra;
                aciertos++;
            }
        }
        
        document.getElementById("palabra").innerText = visual.join("");
        
        if (aciertos === secreto.length) {
            finJuego(true);
        }
        
    } else {
        vidas--;
        document.getElementById("mensaje").innerText = "Vidas: " + vidas;
        
        if (vidas === 0) {
            finJuego(false);
        }
    }
}

function finJuego(ganado) {
    const mensaje = document.getElementById("mensaje");
    
    if (ganado === true) {
        mensaje.innerText = "Ganaste!";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "Perdiste. Era: " + secreto;
        mensaje.style.color = "red";
    }

    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
    });
}

iniciarJuego();