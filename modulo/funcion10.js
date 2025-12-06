// ---------------------------------------------------------------
//                          FUNCION 10
// ---------------------------------------------------------------
// Fusiona dos listas de usuarios y elimina duplicados por documento.
// Si un usuario aparece en ambas listas, conserva el que tenga mayor información.

export function fusionarUsuarios(listaA, listaB) {

    const fusionada = [...listaA, ...listaB];
    const usuariosPorDocumento = {};

    fusionada.forEach(usuario => {
        const doc = usuario.documento;

        if (!usuariosPorDocumento[doc]) {
            usuariosPorDocumento[doc] = usuario;
        } else {
            const actual = usuariosPorDocumento[doc];
            const nuevo = usuario;

            const propsActual = Object.keys(actual).length;
            const propsNuevo = Object.keys(nuevo).length;

            if (propsNuevo > propsActual) {
                usuariosPorDocumento[doc] = nuevo;
            }
        }
    });

    return Object.values(usuariosPorDocumento);
}
