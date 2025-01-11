// @ts-nocheck
export function mostrarError( elemento, mensaje ) {
  elemento.textContent = mensaje;
  elemento.classList.add("error");
  elemento.classList.remove("highlight");
}

export function mostrarMensajeExito(elemento, mensaje) {
  elemento.textContent = mensaje;
  elemento.classList.remove("error");
  elemento.classList.add("highlight");
}

export function obtenerValorInput( elementoId ) {
  const campo = document.getElementById( elementoId );
  if ( !campo ) {
    campo.value = ""
  }
  return campo.value.trim()
}
