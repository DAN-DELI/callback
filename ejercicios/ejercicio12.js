// ---------------------------------------------------------------
//                          EJERCICIO 12
// ---------------------------------------------------------------
import { seleccionarPaciente } from "../modulo/index.js";

console.log("===== EJERCICIO 12 =====");

const resultado = seleccionarPaciente();

console.log("Paciente seleccionado:");
console.log(`Nombre: ${resultado.nombre}`);
console.log(`Edad: ${resultado.edad}`);
console.log(`Prioridad: ${resultado.prioridad}`);

alert(
  `Paciente seleccionado:\n` +
  `Nombre: ${resultado.nombre}\n` +
  `Edad: ${resultado.edad}\n` +
  `Prioridad: ${resultado.prioridad}`
);
 