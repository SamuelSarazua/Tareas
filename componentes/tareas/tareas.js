import { completarTarea } from "./completarTarea.js";
import { tareas } from "./data.js";

export function tarea() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  const titulo = document.createElement("h2");
  titulo.textContent = "Personal"; 
  contenedor.appendChild(titulo); 

  const lista = document.createElement("div");
  lista.className = "lista";

  tareas.forEach((item, index) => {
    const Item = document.createElement("label"); // Creamos un <label> para cada tarea
    Item.className = "Item";

    const checkbox = document.createElement("input"); // Creamos un checkbox para marcar la tarea como completada
    checkbox.type = "checkbox"; // Tipo checkbox para la casilla de verificación
    checkbox.className = "task-checkbox";
    checkbox.id = `task-${index}`; // Asignamos un ID único para cada checkbox, usando el índice de la tarea
    
    const taskText = document.createElement("span");
    taskText.className = "task-text"; 
    taskText.textContent = item; // El texto será el nombre de la tarea (tomado del array tareas)

    Item.appendChild(checkbox);
    Item.appendChild(taskText);
    
    lista.appendChild(Item);
  });

  contenedor.appendChild(lista);

  return contenedor;
}