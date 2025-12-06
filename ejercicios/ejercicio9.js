// EJERCICIO 9

import { procesarPagos, aprobarPorMonto, aprobarPorMetodo, aprobarPorFecha } from "../modulo/index.js";

console.log("===== EJERCICIO 9 =====");

// Cantidad de pagos
let cantidad = parseInt(prompt("¿Cuántos pagos desea registrar?"));

let pagos = [];

// Registro de cada pago
for (let i = 1; i <= cantidad; i++) {

    let id = i;
    let monto = parseFloat(prompt(`Monto del pago #${i}:`));
    let metodo = prompt(`Método del pago #${i} (ej: tarjeta / efectivo / transferencia):`).trim().toLowerCase();
    let fechaPago = parseInt(prompt(`Fecha de pago (formato numérico en orden de año, mes y dia. ej: 20250120):`));
    let fechaLimite = parseInt(prompt(`Fecha límite (formato numérico en orden de año, mes y dia. ej: 20250120):`));

    pagos.push({ id, monto, metodo, fechaPago, fechaLimite });
}

// Elegir regla de validación
let opcion = prompt(
    "Seleccione criterio de aprobación:\n" +
    "1. Aprobar por monto mínimo (>= 50000)\n" +
    "2. Aprobar solo pagos con tarjeta\n" +
    "3. Aprobar si fue pagado antes o en la fecha límite"
);

let callbackSeleccionado;

switch (opcion) {
    case "1":
        callbackSeleccionado = aprobarPorMonto;
        break;
    case "2":
        callbackSeleccionado = aprobarPorMetodo;
        break;
    case "3":
        callbackSeleccionado = aprobarPorFecha;
        break;
    default:
        alert("Opción inválida");
        throw new Error("Criterio de validación no válido.");
}

// Procesar pagos aplicando el callback elegido
const resultado = procesarPagos(pagos, callbackSeleccionado);

console.log("Resultados finales:", resultado);

// Crear listados por separado
const aprobados = resultado.filter(p => p.aprobado);
const rechazados = resultado.filter(p => !p.aprobado);

// Mostrar ambos listados
alert(
    "PAGOS APROBADOS:\n" +
    (aprobados.length > 0 ?
        aprobados.map(p => `ID ${p.id} - $${p.monto} - ${p.metodo}`).join("\n") :
        "Ninguno"
    ) +
    "\n\nPAGOS RECHAZADOS:\n" +
    (rechazados.length > 0 ?
        rechazados.map(p => `ID ${p.id} - $${p.monto} - ${p.metodo}`).join("\n") :
        "Ninguno"
    )
);
