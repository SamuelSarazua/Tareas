export function completarTarea() {
  document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll(".task-checkbox");

      checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener("change", function () {
              const marcTexto = this.nextElementSibling;

              if (this.checked) {
                  marcTexto.style.textDecoration = "underline";
                  marcTexto.style.color = "green";
              } else {
                  marcTexto.style.textDecoration = "none";
                  marcTexto.style.color = "black";
              }
          });
      });
  });
}

export function mostrarTareas(tareas, contenedor) {
  contenedor.innerHTML = "";

  tareas.forEach((tarea, index) => {
      const tareaElemento = itemTarea(tarea, index);
      contenedor.appendChild(tareaElemento);
  });
}