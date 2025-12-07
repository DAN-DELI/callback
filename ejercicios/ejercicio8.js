// ---------------------------------------------------------------
//                          EJERCICIO 8 
// ---------------------------------------------------------------

import { buscarCursos, filtrarPorCategoria, filtrarPorDuracion, filtrarPorNombre } from "../modulo/index.js";

console.log("===== EJERCICIO 8 =====");

// Cantidad de cursos
let cantidad = parseInt(prompt("¿Cuántos cursos desea registrar?"));

// Crear arreglo del catálogo
let catalogo = [];

for (let i = 1; i <= cantidad; i++) {

    let nombre = prompt(`Nombre del curso #${i}:`).trim();
    let categoria = prompt(`Categoría del curso #${i}:`).trim();
    let duracion = parseInt(prompt(`Duración del curso #${i} (en horas):`));

    catalogo.push({nombre, categoria, duracion });
}

// Elegir criterio de búsqueda
let opcion = prompt(
    "¿Cómo desea buscar?\n" +
    "1. Por categoría\n" +
    "2. Por duración mínima\n" +
    "3. Por coincidencia en el nombre"
);

// Variable donde pondremos el callback a usar 
let callback;

switch (opcion) {

    case "1":
        let cat = prompt("Ingrese la categoría a buscar:");
        callback = filtrarPorCategoria(cat);
        break;

    case "2":
        let min = parseInt(prompt("Ingrese la duración mínima:"));
        callback = filtrarPorDuracion(min);
        break;

    case "3":
        let texto = prompt("Ingrese parte del nombre del curso:");
        callback = filtrarPorNombre(texto);
        break;

    default:
        alert("Opción inválida");
        throw new Error("Opción no válida en la búsqueda");
}

// Aplicar la búsqueda avanzada
const encontrados = buscarCursos(catalogo, callback);

// Mostrar resultados
console.log("Cursos encontrados:", encontrados);
alert(
    "Cursos encontrados:\n" + (encontrados.length > 0 ? encontrados.map(c => `${c.nombre} (${c.categoria}, ${c.duracion}h)`).join("\n") : "Ninguno coincide con la búsqueda.")
);
