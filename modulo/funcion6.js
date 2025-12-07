// ---------------------------------------------------------------
//                          FUNCION 6 
// ---------------------------------------------------------------


// 1. Funcion para hallar al salario base
export function calcularSalarioBase(valorHora, horasTrabajadas) {
    return valorHora * horasTrabajadas;
}


// 2. Funcion para hallar el valor de la deduccion (del 10%)
export function calcularDeducciones(salarioBase) {

    // Se da valor al porcentaje
    const porcentaje = 0.10;

    return salarioBase * porcentaje;
}


// 3. funcion para hallar el salario neto
export function calcularNeto() { 

    // Solicitar datos al usuario
    let valorHora = parseFloat(prompt("Ingrese el valor por hora:"));
    let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));

    // Calcular módulos
    const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
    const totalDeducciones = calcularDeducciones(salarioBase);
    const salarioNeto = salarioBase - totalDeducciones;

    // Retornar resultado completo
    return {
        salarioBase,
        totalDeducciones,
        salarioNeto
    };
}
