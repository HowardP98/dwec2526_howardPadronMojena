function lanzar() {
    let cantidadDadosElement = document.getElementById("cantidadDados");
    let cantidadDados = parseInt(cantidadDadosElement.value); 

    let caja = document.getElementById("cajaResultados");
    let etiquetaSuma = document.getElementById("textoSuma");

    let contenidoHTML = ""; 
    let suma = 0;

    for (let i = 0; i < cantidadDados; i++) {
        
        let resultado = Math.floor(Math.random() * 6) + 1;
        suma = suma + resultado;
        contenidoHTML = contenidoHTML + '<div class="dado">' + resultado + '</div>';
    }
    caja.innerHTML = contenidoHTML;
    etiquetaSuma.innerHTML = "Suma total: " + suma;
}

function limpiar() {
    document.getElementById("cajaResultados").innerHTML = "";
    document.getElementById("textoSuma").innerHTML = "Suma total: 0";
}