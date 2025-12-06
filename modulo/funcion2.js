// ---------------------------------------------------------------
//                          FUNCION 2 
// ---------------------------------------------------------------


// Funcion encargada de resibir los movimientos realizados y calcular el estado del inventario
export function calcularInventario() {
    let inicial, vendida, recibida;
    let confInicial, confVendida, confRecibida;

    while (true) {

        if (confInicial == undefined) {
            inicial = parseInt(prompt("Ingrese la cantidad inicial:"));
            if (isNaN(inicial)) {
                alert("Error: La cantidad inicial debe ser un número.");
                continue;
            } else {
                confInicial = inicial;
            }
        }

        if (confVendida == undefined) {
            vendida = parseInt(prompt("Ingrese la cantidad vendida:"));
            if (isNaN(vendida)) {
                alert("Error: La cantidad vendida debe ser un número.");
                continue;
            } else {
                confVendida = vendida;
            }
        }

        if (confRecibida == undefined) {
            recibida = parseInt(prompt("Ingrese la cantidad recibida:"));
            if (isNaN(recibida)) {
                alert("Error: La cantidad recibida debe ser un número.");
                continue;
            } else {
                confRecibida = recibida;
            }
        }

        break; // cuando ya todo está validado
    }

    const inventarioFinal = inicial - vendida + recibida;

    // Texto indicando el estado del inventario
    const estado = inventarioFinal < 5 ? "Inventario crítico" : "Inventario estable";

    // Retornamos la cantidad del inventario final junto al estado de este
    return { inventarioFinal, estado };
}

