// FUNCION EJERCICIO 2

export function calcularInventario() {
    let inicial, vendida, recibida, confInicial, confVendida, confRecibida;
    confInicial = undefined;
    confVendida = undefined;
    confRecibida = undefined;

    while (true) {

        if (confInicial == undefined){
            inicial = parseInt(prompt("Ingrese la cantidad inicial:"));
            if (isNaN(inicial)) {
                alert("Error: La cantidad inicial debe ser un número.");
                continue; // vuelve a pedir los datos
            } else {
                confInicial = inicial;
            }
        }

        if (confVendida == undefined){
            vendida = parseInt(prompt("Ingrese la cantidad vendida:"));
            if (isNaN(vendida)) {
                alert("Error: La cantidad vendida debe ser un número.");
                continue; // vuelve a pedir los datos
            } else {
                confVendida = vendida;
            }
        }

        if (confRecibida == undefined){
            recibida = parseInt(prompt("Ingrese la cantidad recibida:"));
            if (isNaN(recibida)) {
                alert("Error: La cantidad recibida debe ser un número.");
                continue; // vuelve a pedir los datos
            } else {
                confRecibida = recibida;
            }
        }

        // Si todo está correcto, salir del ciclo
        break;
    }

    const inventarioFinal = inicial - vendida + recibida;
    let estado = inventarioFinal < 5 ? "Inventario insuficiente" : "Inventario suficiente";

    return {
        inventarioFinal,
        estado
    };
}
