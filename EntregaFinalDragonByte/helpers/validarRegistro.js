import { guardarLocalStorage } from "../helpers/localstorage.js";
import { usuarios } from "../../models/homeModels.js";

const formularioLogin = document.getElementById("loginForm");

if (formularioLogin) {
  formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formularioLogin);
    const usuarioIngresado = Object.fromEntries(formData);

    const usuarioAutenticado = usuarios.find(
      (u) =>
        u.username === usuarioIngresado.username &&
        u.password === usuarioIngresado.password
    );

    if (usuarioAutenticado) {
      guardarLocalStorage("usuarioLogueado", usuarioAutenticado);

      Swal.fire({
        title: "¡Éxito!",
        text: "Inicio de sesión correcto.",
        icon: "success",
      }).then(() => {
        window.location.href = "../views/selector.html";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario y/o contraseña incorrectos",
        icon: "error",
      });
    }
  });
}