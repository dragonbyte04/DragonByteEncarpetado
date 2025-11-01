import { consultarLocalStorage } from "../helpers/localstorage.js";

const usuariosPorDefecto = [
  {
    username: "juancr",
    password: "hasheado123",
  },
  {
    username: "marial",
    password: "hasheadobcd",
  },
];

export let usuarios = consultarLocalStorage("usuarios") || usuariosPorDefecto;