import { cargarTareas } from "./funcionesFormulario.js";

export function formulario() {
    const form = document.createElement("div");
    form.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";

    const button = document.createElement("button");
    button.textContent = "Add";

    button.addEventListener("click", () => {
        cargarTareas(input);
    });

    form.appendChild(input);
    form.appendChild(button);

    return form;
}







