// Definimos el color Verde Heineken para usarlo luego
let VERDE_HEINEKEN = "#007A33"; 

function calcular() {

    // 1. Capturamos los elementos del HTML por su ID
    let num1Input = document.getElementById('num1');
    let num2Input = document.getElementById('num2');
    let operacionSelect = document.getElementById('operacion');
    
    let resultadoParrafo = document.getElementById('resultado'); 
    let historialTextarea = document.getElementById('historial');
    
    // 2. Obtenemos el valor de los inputs
    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);
    let operacion = operacionSelect.value;

    // Para guardar los resultados
    let resultado;
    let simbolo;
    let colorResultado;

    // 3. Hacemos el calculo (switch)
    switch (operacion) {
        case "sumar":
            resultado = n1 + n2;
            simbolo = "+";
            colorResultado = "blue"; 
            break;
        case "restar":
            resultado = n1 - n2;
            simbolo = "-";
            colorResultado = "red"; 
            break;
        case "multiplicar":
            resultado = n1 * n2;
            simbolo = "*";
            colorResultado = "green";
            break;
        case "dividir":
            if (n2 === 0) {
                alert("No se puede dividir por cero.");
                return; 
            }
            resultado = n1 / n2;
            simbolo = "/";
            colorResultado = "violet"; 
            break;
    }

    // 4. Mostramos el resultado usando .innerHTML
    resultadoParrafo.innerHTML = "Resultado: " + resultado;

    // 5. Cambiamos el color de todo el parrafo
    resultadoParrafo.style.color = colorResultado;

    // 6. Añadimos al historial 
    let entradaHistorial = n1 + " " + simbolo + " " + n2 + " = " + resultado + "\n";
    historialTextarea.value += entradaHistorial; 

    // 7. Cambiar fondo del BODY 
    if (resultado % 2 === 0) {
        // Par: Color aleatorio
        document.body.style.backgroundColor = generarColorAleatorio();
    } else {
        // Impar: Verde Heineken
        document.body.style.backgroundColor = VERDE_HEINEKEN;
    }
}

//Busca el 'id' "resultado" y borra su contenido (innerHTML = "").
function limpiarHistorial() {
    document.getElementById('historial').value = "";
    document.getElementById('resultado').innerHTML = ""; // Esto limpia el <p>
    document.body.style.backgroundColor = "white"; // Resetea el fondo
}

//Funcion para el color aleatorio 
function generarColorAleatorio() {
  let letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}