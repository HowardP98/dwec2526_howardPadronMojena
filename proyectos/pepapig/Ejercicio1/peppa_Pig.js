function edad(){
    let edad = prompt("Cuantos años tienes");
    console.log(edad)

    if (edad>=18){
        console.log("Ya eres mayor de edad");
    }else if(edad>=12) {
        console.log("Eres adolescente");
    }else {
        console.log("Eres un niño");
    }
}