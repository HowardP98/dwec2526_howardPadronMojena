const personajes = ["Goku", "Vegeta", "Gohan"];

const push = document.getElementById('push');
const pop = document.getElementById('pop');
const unshift = document.getElementById('unshift');
const shift = document.getElementById('shift');
const sort = document.getElementById('sort');

push.addEventListener('click', anadirFinal);
pop.addEventListener('click', eliminarFinal);
unshift.addEventListener('click', anadirInicio);
shift.addEventListener('click', eliminarInicio);
sort.addEventListener('click', ordenarLista);

function actualizar() {
    let cajaResultado = document.getElementById('resultado');
    
    // convierte el array en un texto string y separa los elemntos con - y lo metemops dentro del html.
    cajaResultado.innerHTML = "Personajes: " + personajes.join(" - ");
       
    // buscar el input y borramos lo que tenga escrito (.value = "") con esto queda limpio despues de add
    document.getElementById('inputPersonaje').value = "";
}

function anadirFinal() {
    let nombre = document.getElementById('inputPersonaje').value;
    
    // comprobamos si es null para no add espacios en blanco 
    if(nombre == "") {
        alert("Escribe un nombre"); // Si es nullo, avisa
    } else {
        // push() añade el nombre al final del array
        personajes.push(nombre); 
        
        // llamamos a actualizar() para refrescar la pantalla y ver el cambio
        actualizar(); 
    }
}

function eliminarFinal() {
    // pop() elimina automáticamente el ÚLTIMO elemento del array
    personajes.pop(); 
    actualizar();
}

function anadirInicio() {
    // cogemos el valor del input nuevamente
    let nombre = document.getElementById('inputPersonaje').value;
    
    if(nombre == "") {
        alert("Escribe un nombre primero");
    } else {
        // unshift() mete el nombre en la pos 0  y empuja al resto
        personajes.unshift(nombre); 
        actualizar();
    }
}

function eliminarInicio() {
    // shift() elimina el primer elemento 
    personajes.shift(); 
    actualizar();
}

function ordenarLista() {
    // sort() ordena el array alfabeticamente
    personajes.sort(); 
    actualizar();
}