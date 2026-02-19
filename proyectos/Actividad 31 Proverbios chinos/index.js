// Declarar las variables cogiendo del HTML el boton y el div
let boton = document.getElementById("boton-fortune");
let proverbio = document.getElementById("resultado");

// Declarar cada proverbio en una variable
let proverbio1 = "Cava el pozo antes de tener sed";
let proverbio2 = "Los maestros abren la puerta, pero debes entrar tú solo";
let proverbio3 = "Caer siete veces, levantarse ocho";
let proverbio4 = "La gema no se pule sin fricción, ni el hombre se perfecciona sin pruebas";
let proverbio5 = "Para conocer el camino que tienes delante, pregunta a los que vienen de vuelta";
let proverbio6 = "Si quieres felicidad para toda la vida, ayuda a alguien más";

// Crear un array con cada proverbio
let proverbios = [
    proverbio1, proverbio2, proverbio3, proverbio4, proverbio5, proverbio6
];

// genera un # random y muestra el proverbio
function mostrarProverbio() {
    let indice = Math.floor(Math.random() * proverbios.length);
    proverbio.innerHTML = "<p>" + proverbios[indice] + "</p>";
}

boton.addEventListener("click", mostrarProverbio);




