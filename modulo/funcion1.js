// ---------------------------------------------------------------
//                          FUNCION 1 
// ---------------------------------------------------------------


// 1. Función que crea la lista de aprendices a base de los nombres que se ingresen
export function agregaEstudiantesCurso(cantidadAprendiz) {

    const aprendicesInscritos = [];

    for (let i = 1; i <= cantidadAprendiz; i++) {

        // Pedir nombre al usuario y normalizarlo
        let nombreAprendiz = prompt(`Ingresa el nombre del estudiante número ${i}`).trim().toLowerCase();

        aprendicesInscritos.push(nombreAprendiz);
    }

    return aprendicesInscritos;
}


// 2. Función que permite buscar aprendices repetidamente
export function validaAprendizInscrito(aprendicesInscritos) {

    while (true) {
        // Pedir nombre 
        let buscarChamaco = prompt("Indica el nombre del aprendiz a buscar:").trim().toLowerCase();

        // Verificar si existe en el arreglo
        const existe = aprendicesInscritos.includes(buscarChamaco);

        // Ternario para simplificar el mensaje si se encuentra o no
        const mensaje = existe ? `${buscarChamaco} sí se encuentra inscrito` : `${buscarChamaco} no se encuentra inscrito`;
        console.log(mensaje);
        alert(mensaje)

        // Preguntar si desea continuar
        let continuar = prompt("¿Deseas seguir buscando? (si/no)").trim().toLowerCase();
        if (continuar !== "si") {
        break;
        }
    }
}
