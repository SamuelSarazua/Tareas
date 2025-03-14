document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const nombre = document.getElementById("username").value;
        const correo = document.getElementById("email").value;
        const contraseña = document.getElementById("password").value;

        // Enviar datos al backend para registrarlos en MySQL
        const response = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, correo, contraseña })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.mensaje);
            window.location.href = "../login/login.html"; // Redirige al login después del registro
        } else {
            alert("Error: " + data.mensaje);
        }
    });
});
