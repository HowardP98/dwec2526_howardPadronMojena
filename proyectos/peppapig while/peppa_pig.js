function edad() {

    let i = 0;

    while (i < 3) {
        let edadEnTexto = prompt("Vuelta " + (i + 1) + " de 3: ¿Cuántos años tienes?");
        let edadEnNumero = parseInt(edadEnTexto);
        
        if (edadEnNumero >= 18) {
            console.log("Ya eres mayor de edad");
        
        } else if (edadEnNumero >= 12) {
            console.log("Eres adolescente");
        
        } else {
            console.log("Eres un niño");
        }
        i++; 
    }

    console.log("¡El bucle ha terminado!");
}