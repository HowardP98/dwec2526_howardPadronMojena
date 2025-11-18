
function edad() {
    const asdf = document.getElementById("uno");

    if (!asdf) {
        console.error("Error: No se encontró el elemento con id 'uno'.");
        return;
    }
    
    const edad = parseInt(prompt("¿Qué edad tienes?"));
    console.log(edad);

    let imagenUrl;

switch (true) {
    case (edad >= 18):
        imagenUrl = 'url(foto-del-cupe-infiniti-g37-al-aire-libre.jpg)'; 
        break;
    
    case (edad >= 12):
        imagenUrl = 'url(asdf.jpg)';
        break;
        
    default:
        imagenUrl = 'url(peppa_pig.jpg)';
        break;
}

asdf.style.backgroundImage = imagenUrl;

    asdf.style.backgroundImage = imagenUrl;
    asdf.style.backgroundSize = 'cover';
}