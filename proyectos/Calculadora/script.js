let VERDE_HEINEKEN = "#007A33"; 

function calcular() {

    // 1. Capturamos los elementos del HTML por su ID
    let num1Input = document.getElementById('num1');
    let num2Input = document.getElementById('num2');
    let operacionSelect = document.getElementById('operacion');
    
    let resultadoParrafo = document.getElementById('resultado'); 
    
    // Capturamos el DIV del historial
    let historialDiv = document.getElementById('historial'); 
    
    // 2. Obtenemos el valor de los inputs
    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);
    let operacion = operacionSelect.value;

    // Para guardar los resultados y los estilos
    let resultado;
    let simbolo;
    let colorHistorial; 

    // 3. Hacemos el calculo (switch)
    switch (operacion) {
        case "sumar":
            resultado = n1 + n2;
            simbolo = "+";
            colorHistorial = "green"; 
            break;
        case "restar":
            resultado = n1 - n2;
            simbolo = "-";
            colorHistorial = "red"; 
            break;
        case "multiplicar":
            resultado = n1 * n2;
            simbolo = "*";
            colorHistorial = "blue"; 
            break;
        case "dividir":
            if (n2 === 0) {
                alert("No se puede dividir por cero.");
                return; 
            }
            resultado = n1 / n2;
            simbolo = "/";
            colorHistorial = "purple"; 
            break;
    }

    // 4. Mostramos el resultado usando .innerHTML
    resultadoParrafo.innerHTML = "Resultado: " + resultado;

    // 5. Color negro al resultado principal 
    resultadoParrafo.style.color = "black";

    // 6. Construcción e inserción del historial
    // AQUI: He añadido el <br> al final para que haga salto de linea en el historial
    let entradaHistorialHTML = 
        '<span style="color:' + colorHistorial + ';">' + 
        n1 + ' ' + simbolo + ' ' + n2 + ' = ' + resultado + 
        '</span><br>'; 

    // Insertamos la cadena HTML al contenido existente del DIV.
    historialDiv.innerHTML += entradaHistorialHTML;

    // 7. Cambiar fondo del BODY 
    if (resultado % 2 === 0) {
        // Par: Color aleatorio
        document.body.style.backgroundColor = generarColorAleatorio();
    } else {
        // Impar: Verde Heineken
        document.body.style.backgroundColor = VERDE_HEINEKEN;
    }
}

function limpiarHistorial() {
    // Capturamos el DIV para limpiarlo.
    document.getElementById('historial').innerHTML = ""; 
    
    document.getElementById('resultado').innerHTML = "";
    document.body.style.backgroundColor = "white"; 
}

// Funcion para el color aleatorio 
function generarColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}