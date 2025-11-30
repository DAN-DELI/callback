// FUNCION EJERCICIO 4

export function calcularProductos(numeroProductos) {
    let productos = [];

    for(let i = 1; i <= numeroProductos ; i++){
        let producto = prompt("Ingrese el nombre del producto  " + (i) + ":");
        let valor = parseFloat(prompt("Ingrese el valor del producto " + (i) + ":"));
        productos.push({producto, valor});
    }
    // Ordenamos los productos de mayor a menor valor
    productos.sort((a, b) => b.valor - a.valor);

    // valores extremos
    const mayorValor = productos[0];
    const menorValor = productos[productos.length - 1];


    return {
        mayorValor,
        menorValor,
        productos
    };
}