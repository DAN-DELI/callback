// ---------------------------------------------------------------
//                          EJERCICIO 11 
// ---------------------------------------------------------------

import { generarResumen } from "../modulo/index.js";

console.log("===== EJERCICIO 11 =====");

const resultado = generarResumen();

console.log(`Remitente: ${resultado.remitente}`);
console.log(`Contenido breve: ${resultado.contenidoBreve}`);
console.log(`Fecha: ${resultado.fecha}`);

alert(
  `Resumen del mensaje:\n` +
  `Remitente: ${resultado.remitente}\n` +
  `Contenido breve: ${resultado.contenidoBreve}\n` +
  `Fecha: ${resultado.fecha}`
);
  