import { itemTarea } from "./itemTareas.js";
import { tareas } from "./data.js";

export function cargarTareas() {
    const contenedorTareas = document.getElementById("tareas-container");

    tareas.forEach((tarea, index) => {
        contenedorTareas.appendChild(itemTarea(tarea, index));
    });
}