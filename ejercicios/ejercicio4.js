// ---------------------------------------------------------------
//                          EJERCICIO 4 
// ---------------------------------------------------------------

import { calcularProductos } from "../modulo/funcion4.js";

console.log("===== EJERCICIO 4 =====");

let numeroProductos = parseInt(prompt("Ingrese la cantidad de productos a evaluar:"));

let resultadoProductos = calcularProductos(numeroProductos);

console.log("===== EJERCICIO 4 =====");
console.log("Productos ordenados (mayor a menor):", resultadoProductos.productos);
console.log("Producto con mayor valor:", resultadoProductos.mayorValor);
console.log("Producto con menor valor:", resultadoProductos.menorValor);

alert(
    "Producto más caro: " + resultadoProductos.mayorValor.producto + " ($" + resultadoProductos.mayorValor.valor + ")\n" +
    "Producto más barato: " + resultadoProductos.menorValor.producto + " ($" + resultadoProductos.menorValor.valor + ")"
);
 