document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;
  
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correo, contraseña })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert(data.mensaje);
      localStorage.setItem("usuario_id", data.usuario_id);  // Guardar el ID del usuario en localStorage
      window.location.href = "/index.html"; // Redirige si el login es exitoso
    } else {
      alert("Error: " + data.mensaje);
    }
});

document.getElementById("registerButton").addEventListener("click", () => {
    window.location.href = "../registro/registro.html"; // Redirige al formulario de registro
});
