// ---------------------------------------------------------------
//                          FUNCION 9
// ---------------------------------------------------------------

// Procesa pagos aplicando un callback que define si se aprueba o no
export function procesarPagos(pagos, callback) {
    return pagos.map(pago => {
        // Agrega campo aprobado según lo que diga el callback
        pago.aprobado = callback(pago);
        return pago;
    });
}

// Callback: aprueba si el monto es mayor o igual a 50000
export function aprobarPorMonto(pago) {
    return pago.monto >= 50000;
}

// Callback: aprueba solo si el método es "tarjeta"
export function aprobarPorMetodo(pago) {
    return pago.metodo.toLowerCase() === "tarjeta";
}

// Callback: aprueba si el pago fue hecho a tiempo (fecha <= fecha límite)
export function aprobarPorFecha(pago) {
    // fechaPago y fechaLimite deben venir como números o formato comparable
    return pago.fechaPago <= pago.fechaLimite;
}
