const campo = document.getElementById('campo-batalla');

const misPokemones = [
    "chikorita.gif",
    "cute-pokemon.gif",
    "snivy-pokemon.gif",
    "totodile-pokemon.gif",
    "truescorn-dance.gif" 
];

function crearUnPokemon(nombreImagen) {
    const nuevoPokemon = document.createElement('img');
    nuevoPokemon.src = nombreImagen;
    nuevoPokemon.className = 'pokemon-sprite';

    const x = Math.random() * (800 - 150);
    const y = Math.random() * (500 - 150);

    nuevoPokemon.style.left = x + 'px';
    nuevoPokemon.style.top = y + 'px';

    nuevoPokemon.addEventListener('click', function() {
        nuevoPokemon.remove();
    });

    campo.appendChild(nuevoPokemon);
}

function aparecenPokemon() {
    for (const imagen of misPokemones) {
        switch (imagen) {
            case "chikorita.gif":
            case "cute-pokemon.gif":
            case "snivy-pokemon.gif":
            case "totodile-pokemon.gif":
            case "truescorn-dance.gif":
                crearUnPokemon(imagen);
                break;
            
            default:
                console.log("Este no es un Pokémon conocido");
        }
    }
}

function liberarPokemon() {
    campo.innerHTML = '';
}