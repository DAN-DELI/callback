// ---------------------------------------------------------------
//                          FUNCION 14 
// ---------------------------------------------------------------

// Módulo para evaluar proyectos colaborativos.
// Incluye funciones independientes: filtrarActivos(), contarParticipantes(), evaluarProyecto(callback).

// Filtrar proyectos activos
export function filtrarActivos(proyectos) {
  return proyectos.filter(p => p.estado === "activo");
}

// Contar participantes de un proyecto
export function contarParticipantes(proyecto) {
  return proyecto.participantes.length;
}

// Evaluar proyecto con un callback
export function evaluarProyecto(proyecto, callback) {
  return callback(proyecto);
}

// Función principal que integra todo
export function analizarProyectos(proyectos, callback) {
  console.log("Lista de proyectos registrados:");
  proyectos.forEach(p => {
    console.log(`Nombre: ${p.nombre}, Estado: ${p.estado}, Participantes: ${p.participantes.length}`);
  });

  // Filtrar activos
  let activos = filtrarActivos(proyectos);

  // Construir informe
  let informe = activos.map(p => {
    let participantes = contarParticipantes(p);
    let evaluacion = evaluarProyecto(p, callback);
    return {
      nombre: p.nombre,
      participantes,
      estadoFinal: evaluacion
    };
  });

  return informe;
} 
