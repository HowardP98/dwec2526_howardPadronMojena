const lista = document.getElementById('listaTareas');
const campoNombre = document.getElementById('inputName');
const campoDesc = document.getElementById('inputDesc');
const campoFecha = document.getElementById('inputDate');

function crearTarea() {
    const nombre = campoNombre.value;
    const descripcion = campoDesc.value;
    const fecha = campoFecha.value;

    if (nombre === '') {
        return alert("Falta el nombre de la mision!");
    }

    const tareaNueva = document.createElement('li');
    tareaNueva.classList.add('tarea-item'); 

    const textoTarea = document.createElement('span');
    let mensajeFinal = nombre; 
    
    if (descripcion) {
        mensajeFinal = mensajeFinal + " - " + descripcion;
    }
    
    // Si el usuario eligio fecha, la pegamos al final entre ()
    if (fecha) {
        mensajeFinal = mensajeFinal + " (" + fecha + ")";
    }

    // Finalmente, metemos esa frase dentro del span.
    textoTarea.innerText = mensajeFinal;

    const botonCompletar = document.createElement('button');
    botonCompletar.innerText = '✔'; 
    botonCompletar.classList.add('btn-completar'); 
    
    // Usamos 'toggle' si ya está tachada, la destacha. Si no, la tacha.
    botonCompletar.addEventListener('click', function() {
        tareaNueva.classList.toggle('completed');
    });

    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = 'X';
    botonBorrar.classList.add('btn-eliminar'); 

    botonBorrar.addEventListener('click', function() {
        tareaNueva.remove(); 
    });

    const cajaBotones = document.createElement('div');
    cajaBotones.classList.add('tarea-botones');
    // Metemos los botones dentro de esa cajita.
    cajaBotones.appendChild(botonCompletar);
    cajaBotones.appendChild(botonBorrar);

    // Metemos el texto y el div de botones en la tarea (li).
    tareaNueva.appendChild(textoTarea);
    tareaNueva.appendChild(cajaBotones);

    // Añadimos la tarea ya terminada a la lista principal ul
    lista.appendChild(tareaNueva);

    // Borramos lo que hay en los inputs para dejarlos listos para la siguiente mison
    campoNombre.value = '';
    campoDesc.value = '';
    campoFecha.value = '';
}

function eliminarTodas() {
    // Pedimos confirmación al usuario 
    if (confirm("Esta seguro de borrar todas las misiones?")) {
        lista.innerHTML = '';
    }
}

