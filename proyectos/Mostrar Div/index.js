const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("click", mostrar);

function mostrar(e){
   console.log(e);
   console.log(e.clientX);
   console.log(e.clientY);
    
   console.log("Haz hecho click en "+e.clientX+","+e.clientY);
}
