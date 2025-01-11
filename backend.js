// @ts-nocheck
import pocketbase from "https://cdn.jsdelivr.net/npm/pocketbase@0.25.0/+esm";

const pb = new pocketbase("http://127.0.0.1:8090");

export async function doLogin(email, pass) {
  try {
    await pb.collection("users").authWithPassword(email, pass);
  } catch (error) {
    throw new Error("Login fallido: " + error.message);
  }
}

export async function checkLogin() {
  return pb.authStore.isValid;
}

export function getCurrentEmail() {
  const user = pb.authStore.model;
  return user ? user.email : "";
}
