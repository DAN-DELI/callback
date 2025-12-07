// ---------------------------------------------------------------
//                          FUNCION 7 
// ---------------------------------------------------------------

// funcion que registra un listado de productos y elimina duplicados usando Set
export function registrarProductos(...productos) {

    // Normalizamos para evitar duplicados por pequeñas diferencias en el texto
    const normalizados = productos.map(p => p.toLowerCase().trim());

    // Eliminamos duplicados con Set
    const unicos = [...new Set(normalizados)];

    return unicos;
}

 