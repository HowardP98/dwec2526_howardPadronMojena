let numero = 5;
let tiempo; 

setTimeout(() => {

    console.log("3 segundos pasados. Boton activado.");

    document.getElementById('btn-iniciar').addEventListener('click', () => {

        // Para repetir una funcion indefinidamente cada cierto tiempo (1000ms = 1s)
        tiempo = setInterval(() => {
            
            numero = numero - 1;

            document.getElementById('pantalla-cuenta').innerHTML = numero;

            // Comprobamos si el # ha llegado a 0
            // Si es true usamos clearInterval(tiempo) para detener el bucle
            if (numero == 0) {
                clearInterval(tiempo); 
                document.getElementById('pantalla-cuenta').innerHTML = "FIN";
            }

        }, 1000); 

    });

}, 3000);