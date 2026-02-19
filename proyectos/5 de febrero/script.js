const botonImprimir = document.querySelector("#botonImprimir")
botonImprimir.addEventListener("click",imprimirMes)

function imprimirMes() {
    const fechaUsuario = document.querySelector("#fechaUsuario").value
    let fecha = new Date(fechaUsuario)

    console.log(fecha.getMonth()+1)
    console.log(fecha.getDate())

}