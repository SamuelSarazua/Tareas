import { consultarTareas } from "../tareas/tareas.js";

export function formulario() {
    const form = document.createElement("div");
    form.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";

    const button = document.createElement("button");
    button.textContent = "Add";

    button.addEventListener("click", () => {
        const nombre_tarea = input.value.trim();  // Elimina espacios en blanco

        if (!nombre_tarea) {  // Si el campo está vacío, no hacer nada
            return;
        }

        const usuario_id = localStorage.getItem('usuario_id');  // Obtener el usuario_id desde el localStorage

        if (!usuario_id) {
            alert("Por favor, inicie sesión primero.");
            return;
        }

        const nuevaTarea = {
            nombre: nombre_tarea,  // Asegúrate de que la propiedad se llama "nombre"
            estado: "falso",  // Estado inicial
            usuario_id: usuario_id  // Enviar el usuario_id
        };

        fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaTarea)  // Envía la tarea como JSON
        })
        .then(response => response.json())
        .then(data => {
            input.value = "";  // Limpiar el input
            consultarTareas();  // Refrescar la lista de tareas desde la base de datos
        })
        .catch(error => console.error('Error al agregar tarea:', error));
    });

    form.appendChild(input);
    form.appendChild(button);

    return form;
}
