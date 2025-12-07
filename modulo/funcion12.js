// ---------------------------------------------------------------
//                          FUNCION 12 
// ---------------------------------------------------------------

// Función encargada de registrar pacientes y seleccionar al de mayor prioridad.
// Si hay empate en prioridad, se elige al de mayor edad.
export function seleccionarPaciente() {
  // Mostrar estructura de cómo debe ser un objeto paciente
  alert(
    "Estructura de un paciente:\n" +
    "{ nombre: 'Texto', edad: Número, prioridad: Número }\n\n" +
    "Ejemplo:\n{ nombre: 'Ana', edad: 30, prioridad: 2 }"
  );

  // Solicitar cantidad de pacientes a registrar
  let cantidad = parseInt(prompt("¿Cuántos pacientes desea registrar?"));

  // Arreglo para almacenar pacientes
  let pacientes = [];

  // Capturar datos de cada paciente
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Ingrese el nombre del paciente ${i + 1}:`).trim();
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
    let prioridad = parseInt(prompt(`Ingrese la prioridad de ${nombre} (1-5):`));

    pacientes.push({ nombre, edad, prioridad });
  }

  // Mostrar cantidad y lista en desorden
  console.log(`Cantidad de pacientes: ${pacientes.length}`);
  console.log("Lista de pacientes (desordenada):");
  pacientes.forEach(p => {
    console.log(`Nombre: ${p.nombre}, Edad: ${p.edad}, Prioridad: ${p.prioridad}`);
  });

  // Buscar paciente con mayor prioridad (y resolver empates por edad)
  let seleccionado = pacientes.reduce((prev, curr) => {
    if (curr.prioridad > prev.prioridad) {
      return curr;
    } else if (curr.prioridad === prev.prioridad) {
      return curr.edad > prev.edad ? curr : prev;
    } else {
      return prev;
    }
  });

  // Retornar paciente seleccionado
  return seleccionado;
}
