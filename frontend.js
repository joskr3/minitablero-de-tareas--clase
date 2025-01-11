// @ts-nocheck
export function showError( el, msg ) {
  el.textContent = msg;
  el.classlist.add( "error" );
  el.classlist.remove("highlight")
}

export function showSuccess( el, msg ) {
  el.textContent = msg;
  el.classlist.remove( "error" );
  el.classlist.add("highlight");
}

export function getInputValue( id ) {
  const field = document.getElementById( id );
  if ( field ) {
    field.value = ""
  }
}
