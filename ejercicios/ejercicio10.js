// ---------------------------------------------------------------
//                          EJERCICIO 10 
// ---------------------------------------------------------------

import { fusionarUsuarios } from "../modulo/funcion10.js";

console.log("===== EJERCICIO 10 =====");

// Listas quemadas
const listaA = [
    { documento: "101", nombre: "Ana", correo: "ana@example.com" },
    { documento: "102", nombre: "Luis" }
];

const listaB = [
    { documento: "102", nombre: "Luis Alberto", correo: "luis@example.com", telefono: "3001234567" },
    { documento: "103", nombre: "María" }
];

// Mostrar contenido inicial antes de fusionar
alert(
    "Formulario 1 (Sistema A):\n\n" +
    listaA.map(u => `${u.documento} - ${u.nombre}`).join("\n")
);

alert(
    "Formulario 2 (Sistema B):\n\n" +
    listaB.map(u => `${u.documento} - ${u.nombre}`).join("\n")
);

// Fusionar datos
const resultado = fusionarUsuarios(listaA, listaB);

// Mostrar resultado final
console.log("Lista final fusionada:", resultado);

alert(
    "Usuarios fusionados:\n\n" +
    resultado.map(u => `${u.documento} - ${u.nombre} (${Object.keys(u).length} datos)`).join("\n")
);
