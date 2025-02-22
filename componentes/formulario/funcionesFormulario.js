import { tareas } from "../tareas/data.js";
import { itemTarea } from "../tareas/itemTareas.js";

export function cargarTareas(input) {
    const nuevaTarea = input.value.trim();

    if (nuevaTarea !== "") {
        tareas.push(nuevaTarea);

        input.value = "";

        const contenedorTareas = document.getElementById("tareas-container");

        const nuevaTareaElemento = itemTarea(nuevaTarea, tareas.length - 1);
        contenedorTareas.appendChild(nuevaTareaElemento);
    } 
}