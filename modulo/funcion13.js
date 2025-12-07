// ---------------------------------------------------------------
//                          FUNCION 13 
// ---------------------------------------------------------------

// Función encargada de analizar los gastos de una persona.
// Calcula el total gastado, la categoría más costosa y si alguna supera el 40% del número base ingresado.
export function analizarGastos() {
  // Solicitar número base para calcular el 40%
  let numeroBase = parseFloat(prompt("Ingrese el número base sobre el cual se calculará el 40%:"));

  // Informar al usuario
  alert(
    "Importante:\n" +
    "El análisis financiero se hará tomando como referencia el número que usted ingresó.\n" +
    `Número base considerado: $${numeroBase}\n` +
    `Umbral (40%): $${numeroBase * 0.4}`
  );

  // Solicitar cantidad de gastos
  let cantidad = parseInt(prompt("¿Cuántos gastos desea registrar?"));

  // Arreglo para almacenar los gastos
  let gastos = [];
 
  // Capturar datos de cada gasto
  for (let i = 0; i < cantidad; i++) {
    let categoria = prompt(`Ingrese la categoría del gasto ${i + 1}:`).trim();
    let monto = parseFloat(prompt(`Ingrese el monto del gasto en ${categoria}:`));

    gastos.push({ categoria, monto });
  }

  // Mostrar lista de gastos en consola
  console.log("Lista de gastos registrados:");
  gastos.forEach(g => {
    console.log(`Categoría: ${g.categoria}, Monto: ${g.monto}`);
  });

  // Calcular total gastado
  let total = gastos.reduce((acc, g) => acc + g.monto, 0);

  // Encontrar categoría más costosa
  let categoriaMasCostosa = gastos.reduce((prev, curr) => {
    return curr.monto > prev.monto ? curr : prev;
  });

  // Calcular umbral del 40% del número base ingresado
  let umbral = numeroBase * 0.4;

  // Verificar si alguna categoría supera ese umbral
  let alertas = gastos.filter(g => g.monto > umbral);

  // Retornar reporte financiero
  return {
    total,
    categoriaMasCostosa: categoriaMasCostosa.categoria,
    alertas,
    numeroBase,
    umbral
  };
}
