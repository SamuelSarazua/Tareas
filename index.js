import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { consultarTareas } from "./componentes/tareas/tareas.js";

// Verifica si el usuario está autenticado
const usuario_id = localStorage.getItem("usuario_id");

if (!usuario_id) {
    window.location.href = "/componentes/login/login.html";
} else {
    function cargarDOM() {
        let DOM = document.getElementById("root");

        let html = document.createElement('div');
        html.className = "contenedor-prin";

        DOM.appendChild(html);
        html.appendChild(header());

        // Contenedor de tareas
        let contenedorTareas = document.createElement('div');
        contenedorTareas.id = "lista-tareas";  // Es importante que el id coincida con el usado en 'consultarTareas.js'
        html.appendChild(contenedorTareas);

        // Agregar formulario para crear tareas
        html.appendChild(formulario());

        // Llamar a consultarTareas para cargar las tareas al iniciar
        consultarTareas();  // 🚀 Cargar tareas al iniciar la app
    }

    cargarDOM();
}
