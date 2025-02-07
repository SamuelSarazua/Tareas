export function formulario() {
    // Crear contenedor del formulario
    const form = document.createElement("div");
    form.className = "formulario";
  
    // Crear input para ingresar tareas
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";
  
    // Crear botón para agregar tareas
    const button = document.createElement("button");
    button.textContent = "Add";
  
    // Agregar elementos al contenedor
    form.appendChild(input);
    form.appendChild(button);
  
    return form;
  }