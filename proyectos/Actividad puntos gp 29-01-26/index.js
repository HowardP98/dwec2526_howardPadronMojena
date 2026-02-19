/*const compañeros = ["Dani","Lorenzo","Samu"]

function mostrar(){
    for(let i = 0 ; i < compañeros.length ; i++){
        console.log(compañeros[i])
    }
}

function pushear(nombre){
    compañeros.push(nombre)
}

pushear("Luis")
mostrar();*/


const compañeros = ["Dani","Lorenzo","Samu"]
const eliminados = []

pushear("Luis" , compañeros)
mostrar(compañeros)

quitarUltimo(compañeros)
mostrar(eliminados)

mostrarEnString(compañeros)
quitarPrimero(compañeros)

mostrar(eliminados)
unshiftear("Howard" , compañeros)
mostrar(compañeros)

splicear (1,2,compañeros)
mostrar(compañeros)

function quitarUltimo(array) {
    eliminados.push(array.pop())
}

function mostrar(array){
    console.log("Elementos")
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i])
    }
}

function pushear(nombre , array){
    array.push(nombre)
}

function mostrarEnString(array){
    let resultado = array.join("-")
    console.log(resultado)
}

function quitarPrimero(array){
    eliminados.push(array.shift())
}

function unshiftear(nombre , array){
    array.unshift(nombre)
}

function splicear(desde , hasta , array){
    array.splice(desde , hasta)
}