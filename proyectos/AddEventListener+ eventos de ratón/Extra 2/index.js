const pokemon = document.getElementById('pokemon');
const nombre = document.getElementById('nombre-pokemon');

// Imagnes
const imgCharmander = "charmander-gif-pokemon.gif";
const imgCharmeleon = "charmeleon.gif";
const imgCharizard  = "charizard-flying.gif";

let haEvolucionado = false; // banderilla

// Funcion para cuando pasamos el mouse por encima.
function calentar() {
    // Si haEvolucionado es (false) entonces se cambia la imagen.
    if (haEvolucionado === false) {
        pokemon.style.borderRadius = '50%';       
        pokemon.style.transform = 'scale(1.3)';   
        
        pokemon.src = imgCharmeleon; 
        nombre.textContent = 'Charmeleon';
    } 
}

// Funcion para cuando quitamos el mouse
function enfriar() {
    // Solo volvemos a Charmander si aun no hemos evolucionado.
    if (haEvolucionado === false) {
        pokemon.style.backgroundColor = 'transparent'; 
        pokemon.style.transform = 'scale(1)';          
        
        pokemon.src = imgCharmander;
        nombre.textContent = 'Charmander';
    }
}

// Funcion para el click (Evolucion)
function evolucionar() {
    // Cambiamos a true
    // Ahora, los 'if' de arriba ya no funcionan
    haEvolucionado = true;
    pokemon.src = imgCharizard; 
    pokemon.style.backgroundColor = 'transparent';
    pokemon.style.transform = 'scale(1.5)'; 

    // Cambiamos texto y color
    nombre.textContent = 'Evolucion completada a Charizard';
    nombre.style.color = 'red';
}

// Conectamos las funciones de arriba con el mouse
pokemon.addEventListener('mouseover', calentar); // Pasamos el mouse y llama a la funcion calentar 
pokemon.addEventListener('mouseout', enfriar); // Al sacar el mouse llama a la funcion enfriar
pokemon.addEventListener('click', evolucionar); // Al hacer click llama a la funcion evolucionar


