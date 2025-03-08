import { itemTarea } from "./itemTareas.js";

// Función para obtener las tareas desde el backend
export function consultarTareas() {
    fetch('http://localhost:3000/tareas')  // GET para obtener tareas
        .then(response => response.json())
        .then(data => {
            cargarTareasDesdeDB(data);  // Cargar las tareas en el DOM
        })
        .catch(error => console.error('Error al obtener tareas:', error));
}

// Función que crea los elementos y los mete en el HTML
function cargarTareasDesdeDB(tareas) {
    const contenedorTareas = document.getElementById("tareas-container");
    contenedorTareas.innerHTML = '';  // Limpiar lo que ya había

    tareas.forEach((tareaDB, index) => {
        const tareaFormateada = {
            nombre: tareaDB.nombre_tarea,
            estado: tareaDB.estado === 'falso'  // Convertir "falso" a booleano
        };

        // Crear el elemento visual y añadirlo al contenedor
        const elementoTarea = itemTarea(tareaFormateada, index);
        contenedorTareas.appendChild(elementoTarea);
    });
}

export { cargarTareasDesdeDB };
