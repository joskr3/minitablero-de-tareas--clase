// backend.js
// IMPORTAR PocketBase real
// @ts-ignore
import pocketbase from "https://cdn.jsdelivr.net/npm/pocketbase@0.25.0/+esm";
const pb = new pocketbase("http://127.0.0.1:8090");

// 1) doLogin => auth con email y pass
export async function iniciarSesion(email, pass) {
  try {
    await pb.collection("users").authWithPassword(email, pass);
    // Si todo ok, no lanza error
  } catch (e) {
    throw new Error("Login fallido: " + e.message);
  }
}

// 2) checkLogin => verificar si hay un user logueado
export async function verificarInicioSesion() {
  // Si hay un token y un user en authStore => logueado
  // Sino => false
  return pb.authStore.isValid;
}

// 3) getCurrentUserEmail => user email
export function obtenerEmailUsuarioActual() {
  const user = pb.authStore.model;
  return user ? user.email : "";
}
