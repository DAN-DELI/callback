// ---------------------------------------------------------------
//                          EJERCICIO 1 
// ---------------------------------------------------------------

import { agregaEstudiantesCurso, validaAprendizInscrito } from "../modulo/funcion1.js";

console.log("===== EJERCICIO 1 =====");

const cantidad = parseInt(prompt("¿Cuantos estudiantes desea registrar?"));
const lista = agregaEstudiantesCurso(cantidad);

validaAprendizInscrito(lista);
