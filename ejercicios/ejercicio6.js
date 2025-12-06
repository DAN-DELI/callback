// ---------------------------------------------------------------
//                          EJERCICIO 6 
// ---------------------------------------------------------------

import { calcularNeto } from "../modulo/index.js";

console.log("===== EJERCICIO 6 =====");

const resultado = calcularNeto();

console.log(`Salario base: ${resultado.salarioBase}`);
console.log(`Deducciones: ${resultado.totalDeducciones}`);
console.log(`Salario neto: ${resultado.salarioNeto}`);

alert(
    `Salario base: ${resultado.salarioBase}\n` +
    `Deducciones: ${resultado.totalDeducciones}\n` +
    `Salario neto: ${resultado.salarioNeto}`
);
