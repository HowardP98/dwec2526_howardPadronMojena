const tareas = ["sacar perro", "entregar practica"];

document.getElementById("btn1").addEventListener("click", ()=> {
    
    const nuevaTarea = document.getElementById("tarea").value;

        tareas.push(nuevaTarea);
        document.getElementById("tarea").value = "";
    
    console.log(tareas);

    imprimirTareas();
});

function imprimirTareas() {
    const lista = document.getElementById("listaTareas");
    
    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        //lista.innerHTML = lista.innerHTML + "<li>" + tareas[i] + "</li>";

        // Create Element
        const nuevoLi = document.createElement("li");
        lista.appendChild(nuevoLi);
        nuevoLi.textContent = tareas[i];
        
    }
}