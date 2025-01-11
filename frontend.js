// @ts-nocheck
export function showError( el, msg ) {
  el.textContent = msg;
  el.classList.add( "error" );
  el.classList.remove("highlight")
}

export function showSuccess( el, msg ) {
  el.textContent = msg;
  el.classList.remove( "error" );
  el.classList.add("highlight");
}

export function getInputValue( id ) {
  const field = document.getElementById( id );
  if ( !field ) {
    field.value = ""
  }
  return field.value.trim()
}
