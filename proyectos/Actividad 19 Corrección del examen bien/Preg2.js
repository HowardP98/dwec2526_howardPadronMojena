const resultado =document.getElementById("resultado");

function piensaEnVerde(){
    resultado.style.backgroundColor="green";
}

function muestraVehiculo(){

    const imagenSeleccionada = document.getElementById("vehiculo_select").value;

    switch(imagenSeleccionada){
        case "coche":
            resultado.style.backgroundImage= "url(coche.jpeg)";
            break;
        case "moto":
            resultado.style.backgroundImage= "url(moto.jpg)";
            break;
        case "camion":
            resultado.style.backgroundImage= "url(camion.jpg)";
            break;

    }
}