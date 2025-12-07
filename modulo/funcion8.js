// ---------------------------------------------------------------
//                          FUNCION 8
// ---------------------------------------------------------------

// Función principal: filtra el catálogo usando un callback
export function buscarCursos(catalogo, callback) {
    // filter aplica la función callback sobre cada curso
    return catalogo.filter(curso => callback(curso));
}

// Callback: busca por categoría (compara categoría exacta)
export function filtrarPorCategoria(categoriaBuscada) {
    return function(curso) {
        return curso.categoria.toLowerCase() === categoriaBuscada.toLowerCase();
    }
}

// Callback: busca por duración mínima
export function filtrarPorDuracion(minimo) {
    return function(curso) { 
        return curso.duracion >= minimo;
    }
}

// Callback: busca coincidencia en el nombre
export function filtrarPorNombre(texto) {
    return function(curso) {
        return curso.nombre.toLowerCase().includes(texto.toLowerCase());
    }
}
