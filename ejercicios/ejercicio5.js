// ---------------------------------------------------------------
//                          EJERCICIO 5 
// ---------------------------------------------------------------

import { validarUsuario } from "../modulo/index.js";

console.log("===== EJERCICIO 5 =====");

const resultado = validarUsuario();

console.log(`Usuario: ${resultado.nombre}`);
console.log(`Acceso: ${resultado.acceso}`);
console.log(`Permisos: ${resultado.permisos}`);

alert(
    `Usuario: ${resultado.nombre}\n` +
    `Acceso: ${resultado.acceso}\n` +
    `Permisos: ${resultado.permisos}`
);
