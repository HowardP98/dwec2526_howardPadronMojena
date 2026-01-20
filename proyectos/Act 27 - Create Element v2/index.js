/*let padre = document.getElementById("padre");

//Hijo1
let hijo1=document.createElement("p");

hijo1.innerHTML="pacopaco";

padre.appendChild(hijo1);

// Hijo2
let hijo2 = document.createElement("div");
hijo2.className = "circulo";
padre.appendChild(hijo2);

// Hijo22
let hijo22 = document.createElement("div");
hijo22.className = "circuloRojo";
padre.appendChild(hijo22);*/

/*
let padre = document.getElementById("padre");

// Hijo
let hijo1 = document.createElement("ul");
hijo1.innerHTML = "Caballeros del Zodiaco"
padre.appendChild(hijo1);

// Nieto
let nieto1 = document.createElement("li");
nieto1.innerHTML = "Shiryu"
hijo1.appendChild(nieto1);

let nieto2 = document.createElement("li");
nieto2.innerHTML = "Seiya"
nieto1.appendChild(nieto2);

// Hijo new
let hijo2 = document.createElement("div");
hijo2.className="cuadrado";
padre.appendChild(hijo2);*/



let cain = document.createElement("input");
cain.setAttribute("type", "button");
cain.setAttribute("value", "matar a hijo");
cain.setAttribute("id", "maduro");
cain.setAttribute("class", "circulo");

function funcionManejadora() {
    alert("El evento se activo " + cain.value);
    console.log("Click en el elemento " + cain.id);
    cain.remove();
}

cain.addEventListener("click", funcionManejadora);
document.body.appendChild(cain);

let creador = document.createElement("input");
creador.setAttribute("type", "button");
creador.setAttribute("value", "Crear Abel");

creador.addEventListener("click", function() {
    let abel = document.createElement("input");
    abel.setAttribute("type", "button");
    abel.setAttribute("value", "Abel");
    
    document.body.appendChild(abel);
});

document.body.appendChild(creador);