import { tareas } from "./data.js";

export function tarea() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  
  const titulo = document.createElement("h2");
  titulo.textContent = "Personal";
  contenedor.appendChild(titulo);
  
  const lista = document.createElement("div");
  lista.className = "lista";

  tareas.forEach((item) => {
    const Item = document.createElement("div");
    Item.className = "Item";

    Item.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${item}</span>
    `;

    lista.appendChild(Item);
  });

  contenedor.appendChild(lista);

  return contenedor;
}
