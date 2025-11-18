const boton = document.getElementById('miBoton');
const resultadoDiv = document.getElementById('resultado');

boton.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const aficiones = document.getElementById('aficiones').value;
    const tematica = document.getElementById('tematica').value;
    const color = document.getElementById('color').value;

    let mensajeTematica = '';
    let imagen = '';

    switch (tematica) {
        case 'starwars':
            mensajeTematica = '¡Que la Fuerza te acompañe!';
            imagen = 'starwars.jpg';
            break;
        case 'lotr':
            mensajeTematica = 'Un Anillo para gobernarlos a todos.';
            imagen = 'El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-mmed.jpg';
            break;
        case 'harrypotter':
            mensajeTematica = 'Lo que venga, vendrá y nos enfrentaremos a él.';
            imagen = 'harry_potter.jpg';
            break;
        default:
            mensajeTematica = 'No has elegido ninguna saga.';
    }

    resultadoDiv.style.backgroundColor = color;

    resultadoDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p><b>Nombre:</b> ${nombre} ${apellidos}</p>
        <p><b>Edad:</b> ${edad} años</p>
        <p><b>Aficiones:</b> ${aficiones}</p>
        <p><b>Saga:</b> ${mensajeTematica}</p>
        ${imagen ? `<img src="${imagen}" alt="Imagen temática" style="width:200px;margin-top:10px;">` : ''}
    `;
});
