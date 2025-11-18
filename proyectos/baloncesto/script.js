class ElementoJuego {
  constructor(id) {
    this.elemento = document.getElementById(id);
  }

  obtenerRectangulo() {
    return this.elemento.getBoundingClientRect();
  }

  actualizarPosicion(x, y) {
    this.elemento.style.left = `${x}px`;
    this.elemento.style.top = `${y}px`;
  }
}

class JuegoBaloncesto {
  constructor() {
    this.balon = new ElementoJuego("balon");
    this.aro = new ElementoJuego("aro");

    this.posicionX = 50;
    this.posicionY = window.innerHeight * 0.8;

    this.iniciarControles();
    this.actualizarBalon();
  }

  iniciarControles() {
    document.addEventListener("keydown", (evento) => this.manejarTecla(evento));
  }

  manejarTecla(evento) {
    switch (evento.key) {
      case "ArrowLeft":
        this.posicionX -= 10;
        break;
      case "ArrowRight":
        this.posicionX += 10;
        break;
      case "ArrowUp":
        this.posicionY -= 10;
        break;
      case "ArrowDown":
        this.posicionY += 10;
        break;
    }

    this.actualizarBalon();
    this.verificarCanasta();
  }

  actualizarBalon() {
    this.balon.actualizarPosicion(this.posicionX, this.posicionY);
  }

  verificarCanasta() {
    const rectBalon = this.balon.obtenerRectangulo();
    const rectAro = this.aro.obtenerRectangulo();

    const colision =
      rectBalon.top < rectAro.bottom &&
      rectBalon.bottom > rectAro.top &&
      rectBalon.left < rectAro.right &&
      rectBalon.right > rectAro.left;

    if (colision) {
      this.mostrarMensajeCanasta();
    }
  }

  mostrarMensajeCanasta() {
    console.log("¡Canasta!");
    alert("¡Canasta!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new JuegoBaloncesto();
});
