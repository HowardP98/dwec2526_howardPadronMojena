let info = "nombre: Howard Padron; edad:27; Profesión:estudiante";

// split(';'): Separa el texto donde encuentre un punto y coma
let partes = info.split(';');

// trim(): Elimina los espacios en blanco sobrantes (del principio y final)
let nombreParte = partes[0].trim();
let edadParte = partes[1].trim();
let profesionParte = partes[2].trim();

// slice(): Corta el texto para quitar las etiquetas ("nombre:", "edad:", etc.)
// "nombre: " tiene 7 caracteres, por eso cortamos desde el 7
let nombre = nombreParte.slice(7);

// "edad:" tiene 5 caracteres
let edad = edadParte.slice(5);

// "Profesión:" tiene 10 caracteres
let profesion = profesionParte.slice(10);

// Mostrar resultados en la consola
console.log("Nombre:", nombre);
console.log("Número total de campos:", partes.length);