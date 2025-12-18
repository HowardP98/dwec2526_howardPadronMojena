/*const asdf = document.getElementById("target");
const texto = document.getElementById("contador");
let contador = 0;

asdf.addEventListener("mouseover", piensaenverde);

function piensaenverde() {
    contador++;

    texto.innerText = `Contador: ${contador}`;
    console.log(contador);
}*/

const caja = document.getElementById("target");
const texto = document.getElementById("contador");

let c = 0;

let colorActual = "rgb(255, 255, 255)"; 

caja.addEventListener("mouseover", () => {
    c++;
    console.log(c);
    
    if (c % 10 === 0) alert(`Llegaste a ${c}`);
    texto.innerText = `Contador: ${c} - Color: ${colorActual}`;
});

caja.addEventListener("mouseout", () => {
    let r = Math.floor(Math.random() * 255), 
        g = Math.floor(Math.random() * 255), 
        b = Math.floor(Math.random() * 255);
    
    colorActual = `rgb(${r},${g},${b})`;
    
    document.body.style.backgroundColor = colorActual; 
    
    texto.innerText = `Contador: ${c} - Color: ${colorActual}`;
});