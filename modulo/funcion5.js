// ---------------------------------------------------------------
//                          FUNCION 5 
// ---------------------------------------------------------------


// Funcion encargada de validar la informacion del usuario junto a sus permisos
export function validarUsuario() {

    // Solicitar los datos básicos del usuario
    let nombre = prompt("Ingrese su nombre:").trim();

    let estado = prompt("Indique su estado (activo / inactivo):").toLowerCase().trim();

    let rol = prompt("Ingrese su rol (admin / editor / lector):").toLowerCase().trim();

    // Validación del estado del usuario
    if (estado !== "activo") {
        return {
            nombre,
            acceso: "denegado",
            permisos: "Ninguno. El usuario está inactivo."
        };
    }

    // Variable donde guardaremos los permisos
    let permisos;

    // Validación del rol usando condicionales
    if (rol === "admin") {
        permisos = "Acceso total al sistema.";
    } else if (rol === "editor") {
        permisos = "Puede modificar y crear contenido.";
    } else if (rol === "lector") {
        permisos = "Puede visualizar contenido.";
    } else {
        // Rol inválido
        return {
            nombre,
            acceso: "denegado",
            permisos: "Rol no reconocido."
        };
    }

    // Si todo es correcto, acceso permitido
    return {
        nombre,
        acceso: "permitido",
        permisos
    };
}
