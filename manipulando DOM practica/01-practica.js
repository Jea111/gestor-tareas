const textoOriginal = document.getElementById("parrafo").textContent; //obtengo texto original del parrafo

//funcion para resaltar palabra
function resaltarPalabra() {
  const input = document.getElementById("busqueda").value.trim(); //obtengo texto ingresado en el input sin espacios en blanco
  const parrafo = document.getElementById("parrafo"); //obtengo el elemento del parrafo

  //si el input está vacío, se muestra el texto original
  //si el input no está vacío, se resalta la palabra
  if (input === "") {
    parrafo.innerHTML = textoOriginal;
    return;
  }

  const regex = new RegExp(`(${input})`, "gi"); // sin escape de caracteres especiales
  const textoResaltado = textoOriginal.replace(regex, `<mark>$1</mark>`); //resalta la palabra en el texto original
  parrafo.innerHTML = textoResaltado; //actualiza el contenido del parrafo con el texto resaltado
}
