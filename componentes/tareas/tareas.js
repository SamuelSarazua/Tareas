import { itemTarea } from "./itemTareas.js";  // Importar la función itemTarea

// Obtener el usuario autenticado desde localStorage
const usuario_id = localStorage.getItem("usuario_id");

// Si no hay usuario en sesión, redirige al login
if (!usuario_id) {
    window.location.href = "/componentes/login/login.html";
}

// Función para obtener las tareas del usuario desde el backend
export function consultarTareas() {
    const usuario_id = localStorage.getItem('usuario_id');  // Obtener el usuario_id desde localStorage

    if (!usuario_id) {
        alert("Por favor, inicie sesión primero.");
        return;
    }

    // Realiza una solicitud GET para obtener las tareas del usuario
    fetch(`http://localhost:3000/tareas/${usuario_id}`)
        .then(response => response.json())
        .then(tareas => {
            const listaTareas = document.getElementById("lista-tareas");
            listaTareas.innerHTML = "";  // Limpiar tareas previas

            if (tareas.length === 0) {
                listaTareas.innerHTML = "No tienes tareas aún.";
                return;
            }

            // Mostrar las tareas obtenidas usando la función itemTarea
            tareas.forEach((tarea, index) => {
                const tareaElement = itemTarea(tarea, index);  // Usar la función itemTarea
                listaTareas.appendChild(tareaElement);  // Agregar cada tarea al contenedor
            });
        })
        .catch(error => console.error('Error al obtener tareas:', error));
}
