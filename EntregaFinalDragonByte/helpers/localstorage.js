export function guardarLocalStorage(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

export function consultarLocalStorage(clave) {
  return JSON.parse(localStorage.getItem(clave)) || null;
}