// ---------------------------------------------------------------
//                          EJERCICIO 7 
// ---------------------------------------------------------------

import { registrarProductos } from "../modulo/index.js";

console.log("===== EJERCICIO 7 =====");

let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?"));

let productos = [];

// Pedimos cada producto al usuario
for (let i = 1; i <= cantidad; i++) {
    let prod = prompt(`Ingrese el nombre del producto #${i}:`).trim();
    productos.push(prod);
}

// Usamos rest al llamar (...productos)
const listaFinal = registrarProductos(...productos);

console.log("Productos sin duplicados:", listaFinal);
alert("Productos sin duplicados:\n" + listaFinal.join(", "));
