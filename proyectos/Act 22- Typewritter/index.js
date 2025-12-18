const folio = document.getElementById("folio");
const btnBorrar = document.getElementById("btnBorrar");
const btnDissable = document.getElementById("btnDissable");

let habilitado = true;

document.addEventListener("keydown", function(event) {
    if (habilitado) {
        folio.innerHTML = folio.innerHTML + event.key;
    }
});

btnBorrar.addEventListener("click", function() {
    folio.innerHTML = "";
});

// Extra:
btnDissable.addEventListener("click", function() {
    habilitado = !habilitado;
    
    if (habilitado) {
        btnDissable.textContent = "Disable";
    } else {
        btnDissable.textContent = "Enable";
    }
});