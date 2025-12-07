// ---------------------------------------------------------------
//                          EJERCICIO 13 
// ---------------------------------------------------------------

import { analizarGastos } from "../modulo/index.js";

console.log("===== EJERCICIO 13 =====");

const reporte = analizarGastos();

console.log(`Número base considerado: ${reporte.numeroBase}`);
console.log(`Umbral (40% del número base): ${reporte.umbral}`);
console.log(`Total gastado: ${reporte.total}`);
console.log(`Categoría más costosa: ${reporte.categoriaMasCostosa}`);

if (reporte.alertas.length > 0) {
  console.log("Categorías que superan el 40% del número base:");
  reporte.alertas.forEach(a => {
    console.log(`- ${a.categoria}: ${a.monto}`);
  });
}

alert(
  `Reporte financiero:\n` +
  `Número base considerado: $${reporte.numeroBase}\n` +
  `Umbral (40%): $${reporte.umbral}\n` +
  `Total gastado: $${reporte.total}\n` +
  `Categoría más costosa: ${reporte.categoriaMasCostosa}\n` +
  (reporte.alertas.length > 0
    ? `Categorías que superan el 40% del número base:\n${reporte.alertas.map(a => a.categoria).join(", ")}`
    : "No hay categorías críticas.")
);
