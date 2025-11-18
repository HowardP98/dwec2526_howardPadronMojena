let div1 = document.getElementById("uno");

function moverDiv() {
  let aleatorio1x = Math.floor(Math.random() * 1320);
  let aleatorio1y = Math.floor(Math.random() * 580);
  div1.style.left = aleatorio1x + "px"; //horizontal
  div1.style.top = aleatorio1y + "px"; //vertical
}

function moverBolasAleatorioX() {
  let aleatorio1x = Math.floor(Math.random() * 1320);
  div1.style.left = aleatorio1x + "px";
}

function moverBolasAleatorioY() {
  let aleatorio1y = Math.floor(Math.random() * 550);
  div1.style.top = aleatorio1y + "px";
}

function moverAPosicion() {
  let izquierda = document.getElementById("izq").value;
  let arriba = document.getElementById("arriba").value;

  div1.style.left = izquierda + "px";
  div1.style.top = arriba + "px";
}