export function cargarTareas(input) {
    // Obtiene el texto de la nueva tarea y elimina espacios en blanco al inicio y final
    const nuevaTarea = input.value.trim();

    // Verifica que la tarea no esté vacía
    if (nuevaTarea !== "") {
        // Agrega la tarea al array global `tareas` (asumiendo que `tareas` ya está declarado en otro archivo)
        tareas.push(nuevaTarea);

        // Limpia el campo de entrada
        input.value = "";

        // Obtiene el contenedor donde se mostrarán las tareas
        const contenedorTareas = document.getElementById("tareas-container");

        // Crea el elemento visual de la nueva tarea
        const nuevaTareaElemento = itemTarea(nuevaTarea, tareas.length - 1);

        // Añade la nueva tarea al contenedor en el DOM
        contenedorTareas.appendChild(nuevaTareaElemento);
    }
}