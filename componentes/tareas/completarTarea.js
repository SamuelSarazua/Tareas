export function completarTarea() {
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll(".task-checkbox");

      // Iteramos sobre todos los checkboxes
      checkboxes.forEach(function () {
        // Agregamos un listener para detectar el cambio de estado del checkbox
        this.addEventListener("change", function () {
          const marcTexto = this.nextElementSibling; // Obtenemos el texto de la tarea (el siguiente elemento al checkbox)
          
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