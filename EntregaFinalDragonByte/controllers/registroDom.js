import { guardarLocalStorage } from "../helpers/localstorage.js";
import { usuarios } from "../models/homeModels.js";

const formularioRegistro = document.getElementById("registrationForm");

if (formularioRegistro) {
  formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formularioRegistro);
    const datosFormulario = Object.fromEntries(formData);

    if (datosFormulario.regPassword !== datosFormulario.regConfirmPassword) {
      Swal.fire({
        title: "Error de Validación",
        text: "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.",
        icon: "error",
        customClass: {
          popup: 'my-custom-swal-popup',
          title: 'my-custom-swal-title',
          htmlContainer: 'my-custom-swal-html-container',
          confirmButton: 'my-custom-swal-confirm-button'
        }
      });
      return;
    }

    const usuarioExistente = usuarios.find(
      (u) =>
        u.username === datosFormulario.regUsername ||
        u.email === datosFormulario.regEmail
    );

    if (usuarioExistente) {
      Swal.fire({
        title: "Error de Registro",
        text: "El nombre de usuario o el correo electrónico ya están en uso.",
        icon: "warning",
        customClass: {
          popup: 'my-custom-swal-popup',
          title: 'my-custom-swal-title',
          htmlContainer: 'my-custom-swal-html-container',
          confirmButton: 'my-custom-swal-confirm-button'
        }
      });
      return;
    }

    const nuevoUsuario = {
      username: datosFormulario.regUsername,
      password: datosFormulario.regPassword,
      email: datosFormulario.regEmail,
      age: datosFormulario.regAge,
      dob: `${datosFormulario.regDobDay}/${datosFormulario.regDobMonth}/${datosFormulario.regDobYear}`,
    };

    usuarios.push(nuevoUsuario);
    guardarLocalStorage("usuarios", usuarios);

    Swal.fire({
      title: "¡Registro Exitoso!",
      text: "Tu cuenta ha sido creada. Ahora serás redirigido al login.",
      icon: "success",
      customClass: {
        popup: 'my-custom-swal-popup',
        title: 'my-custom-swal-title',
        htmlContainer: 'my-custom-swal-html-container',
        confirmButton: 'my-custom-swal-confirm-button'
      }
    }).then(() => {
      window.location.href = "../views/home.html";
    });
  });
}