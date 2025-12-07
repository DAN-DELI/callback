// ---------------------------------------------------------------
//                          EJERCICIO 14 
// ---------------------------------------------------------------

import { analizarProyectos } from "../modulo/index.js";

console.log("===== EJERCICIO 14 =====");

// Solicitar cantidad de proyectos
let cantidad = parseInt(prompt("¿Cuántos proyectos desea registrar?"));
let proyectos = [];

// Capturar datos de cada proyecto
for (let i = 0; i < cantidad; i++) {
  let nombre = prompt(`Ingrese el nombre del proyecto ${i + 1}:`).trim();
  let estado = prompt(`Ingrese el estado del proyecto (activo/inactivo):`).toLowerCase().trim();
  let numParticipantes = parseInt(prompt(`¿Cuántos participantes tiene ${nombre}?`));

  let participantes = [];
  for (let j = 0; j < numParticipantes; j++) {
    participantes.push(prompt(`Ingrese el nombre del participante ${j + 1}:`).trim());
  }

  proyectos.push({ nombre, estado, participantes });
}

// Definir callback de evaluación
function reglaEvaluacion(proyecto) {
  if (proyecto.participantes.length < 3) {
    return "Requiere refuerzo";
  } else {
    return "Proyecto estable";
  }
} 

// Ejecutar análisis
const informe = analizarProyectos(proyectos, reglaEvaluacion);

// Mostrar resultados
console.log("Informe de proyectos activos:");
informe.forEach(p => {
  console.log(`Proyecto: ${p.nombre}, Participantes: ${p.participantes}, Estado final: ${p.estadoFinal}`);
});

alert(
  "Informe de proyectos activos:\n" +
  informe.map(p => `Proyecto: ${p.nombre}, Participantes: ${p.participantes}, Estado final: ${p.estadoFinal}`).join("\n")
);
