// FUNCION EJERCICIO 3

export function calcularPromedio(numeroNotas) {
    let notas = [];

    for(let i = 1; i <= numeroNotas ; i++){
        let nota = parseFloat(prompt("Ingrese la nota numero" + (i) + ":"));
        notas.push(nota);
    }
    // Usamos reduce para sumar todas las notas
    const suma = notas.reduce((acc, val) => acc + val, 0);

    const promedio = suma / numeroNotas;
    
    let rendimiento;
        if (promedio >= 4) {
        rendimiento = "Alto";
        } else if (promedio > 2.5 && promedio <= 4) {
        rendimiento = "Medio";
        } else {
         rendimiento = "Bajo";
        }

    return {
        notas,
        promedio,
        rendimiento
    };
}