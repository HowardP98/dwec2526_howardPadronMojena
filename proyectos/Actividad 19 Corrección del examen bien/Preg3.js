var random;
const resultado = document.getElementById("result");

function generaRandom(){
    random = Math.floor(Math.random()*(9+1));

    resultado.innerHTML= "<h3>"+ random + "<h3>";

}

function multiplicaPorDos() {
    random = random * 2;

    if(random != null){
        resultado.innerHTML= "<h3>" + random + "<h3>";
    }else{
        console.log("error, no se ha generado un numero");
    }
}