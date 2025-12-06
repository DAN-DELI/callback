// ---------------------------------------------------------------
//                          EJERCICIO 2 
// ---------------------------------------------------------------

import { calcularInventario } from '../modulo/index.js';

console.log("===== EJERCICIO 2 =====");

const resultado = calcularInventario();

console.log(`Inventario final: ${resultado.inventarioFinal} \nEstado: ${resultado.estado}`);
alert(`Inventario final: ${resultado.inventarioFinal} \nEstado: ${resultado.estado}`);
