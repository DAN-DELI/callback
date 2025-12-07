// ---------------------------------------------------------------
//                          FUNCION 11 
// ---------------------------------------------------------------

// Función encargada de generar un resumen rápido de un mensaje
// usando destructuración para extraer remitente, contenido y fecha.
export function generarResumen() {
  // Pedir datos al usuario
  let remitente = prompt("Ingrese el remitente:").trim();
  let contenido = prompt("Ingrese el contenido del mensaje:").trim();
  let fecha = prompt("Ingrese la fecha del mensaje (YYYY-MM-DD):").trim();

  // Crear objeto mensaje
  let mensaje = { remitente, contenido, fecha };

  // Usar destructuring para extraer los campos
  const { remitente: r, contenido: c, fecha: f } = mensaje;

  // Construir resumen (contenido breve = primeros 20 caracteres)
  let resumen = {
    remitente: r,
    contenidoBreve: c.substring(0, 20) + (c.length > 20 ? "..." : ""),
    fecha: f
  };

  // Retornar el resumen
  return resumen;
}
