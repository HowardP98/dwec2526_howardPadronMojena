let div1 = document.getElementById("uno");
let div2 = document.getElementById("dos");
let div3 = document.getElementById("tres");
let div4 = document.getElementById("cuatro");
let div5 = document.getElementById("cinco");

function moverDiv() {
  let aleatorio1x = Math.floor(Math.random() * 1320);
  let aleatorio1y = Math.floor(Math.random() * 580);
  div1.style.left = aleatorio1x + "px"; //horizontal
  div1.style.top = aleatorio1y + "px"; //vertical

  let aleatorio2x = Math.floor(Math.random() * 1320);
  let aleatorio2y = Math.floor(Math.random() * 580);
  div2.style.left = aleatorio2x + "px";
  div2.style.top = aleatorio2y + "px";

  let aleatorio3x = Math.floor(Math.random() * 1320);
  let aleatorio3y = Math.floor(Math.random() * 580);
  div3.style.left = aleatorio3x + "px";
  div3.style.top = aleatorio3y + "px";

  let aleatorio4x = Math.floor(Math.random() * 1320);
  let aleatorio4y = Math.floor(Math.random() * 580);
  div4.style.left = aleatorio4x + "px";
  div4.style.top = aleatorio4y + "px";

  let aleatorio5x = Math.floor(Math.random() * 1320);
  let aleatorio5y = Math.floor(Math.random() * 580);
  div5.style.left = aleatorio5x + "px";
  div5.style.top = aleatorio5y + "px";
}

function moverBolasAleatorioX() {
  let aleatorio1x = Math.floor(Math.random() * 1320);
  div1.style.left = aleatorio1x + "px";

  let aleatorio2x = Math.floor(Math.random() * 1320);
  div2.style.left = aleatorio2x + "px";

  let aleatorio3x = Math.floor(Math.random() * 1320);
  div3.style.left = aleatorio3x + "px";

  let aleatorio4x = Math.floor(Math.random() * 1320);
  div4.style.left = aleatorio4x + "px";

  let aleatorio5x = Math.floor(Math.random() * 1320);
  div5.style.left = aleatorio5x + "px";
}

function moverBolasAleatorioY() {
  let aleatorio1y = Math.floor(Math.random() * 550);
  div1.style.top = aleatorio1y + "px";

  let aleatorio2y = Math.floor(Math.random() * 550);
  div2.style.top = aleatorio2y + "px";

  let aleatorio3y = Math.floor(Math.random() * 550);
  div3.style.top = aleatorio3y + "px";

  let aleatorio4y = Math.floor(Math.random() * 550);
  div4.style.top = aleatorio4y + "px";

  let aleatorio5y = Math.floor(Math.random() * 550);
  div5.style.top = aleatorio5y + "px";
}

function moverAPosicion() {
  let izquierda = document.getElementById("izq").value;
  let arriba = document.getElementById("arriba").value;

  div1.style.left = izquierda + "px";
  div1.style.top = arriba + "px";

  div2.style.left = izquierda + "px";
  div2.style.top = arriba + "px";

  div3.style.left = izquierda + "px";
  div3.style.top = arriba + "px";

  div4.style.left = izquierda + "px";
  div4.style.top = arriba + "px";

  div5.style.left = izquierda + "px";
  div5.style.top = arriba + "px";
}