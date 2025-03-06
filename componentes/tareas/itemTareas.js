export function itemTarea(tarea, index) {
    let divTarea = document.createElement('label');
    divTarea.className = "Item";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.id = `task-${index}`;

    let texto = document.createElement('span');
    texto.className = "task-text";
    texto.innerText = tarea.nombre;

    divTarea.appendChild(checkbox);
    divTarea.appendChild(texto);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            texto.style.textDecoration = "underline";
            texto.style.color = "green";
        } else {
            texto.style.textDecoration = "none";
            texto.style.color = "#444";
        }
    });

    return divTarea;
}
