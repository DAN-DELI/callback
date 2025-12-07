// ---------------------------------------------------------------
//                          EJERCICIO 3 
// ---------------------------------------------------------------

import { calcularPromedio } from "../modulo/funcion3.js";

console.log("===== EJERCICIO 3 =====");


let numeroNotas = parseInt(prompt("Ingrese la cantidad de notas a promediar:"));

let promedioEncontrado = (calcularPromedio(numeroNotas));

console.log(`Su promedio ha sido de: ${promedioEncontrado.promedio.toFixed(2)}\nSu rendimiento es ${promedioEncontrado.rendimiento}`);
alert(`Su promedio ha sido de: ${promedioEncontrado.promedio.toFixed(2)}\nSu redimiento es ${promedioEncontrado.rendimiento}`); 