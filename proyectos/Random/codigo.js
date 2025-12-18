function generarAleatorios() {
    let input = document.getElementById("entradaCantidad");
    let caja = document.getElementById("cajaResultados");

    let cantidad = parseInt(input.value);

    caja.innerHTML = ""; 
    console.clear(); 
    console.log("--- Nueva Tirada ---");

    for (let i = 0; i < cantidad; i++) {
        let aleatorio = Math.floor(Math.random() * 101);

        console.log(aleatorio);
        caja.innerHTML += '<div class="numero-item">' + aleatorio + '</div>';
    }
}