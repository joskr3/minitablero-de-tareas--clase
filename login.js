import { iniciarSesion } from "./backend.js";
import {
  mostrarError,
  mostrarMensajeExito,
  obtenerValorInput,
} from "./frontend.js";

document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btnLogin");
  const loginResult = document.getElementById("loginResult");

  if (btnLogin) {
    btnLogin.addEventListener("click", async () => {
      // Quitar la animación de bounce
      btnLogin.classList.remove("anim-bounce");

      if (loginResult) {
        loginResult.textContent = "";
      }

      const email = obtenerValorInput("email");
      const pass = obtenerValorInput("password");

      try {
        await iniciarSesion(email, pass);
        mostrarMensajeExito(loginResult, "¡Login exitoso! Redirigiendo...");
        // Redirigir al dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } catch (e) {
        mostrarError(loginResult, e.message);
      }
    });
  }
});
