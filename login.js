// @ts-nocheck
import { doLogin } from "./backend.js";
import { showError, showSuccess } from "./frontend.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const loginResult = document.getElementById("loginResult");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      let formData = new FormData(loginForm);
      let formObject = Object.fromEntries(formData.entries());

      console.log(formObject); // Para depuración

      if (loginResult) {
        loginResult.textContent = "";
      }

      const email = formObject.email;
      const pass = formObject.password;

      try {
        await doLogin(email, pass);
        showSuccess(loginResult, "¡Login exitoso! Redirigiendo...");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } catch (error) {
        showError(loginResult, error.message);
      }
    });
  }
});
