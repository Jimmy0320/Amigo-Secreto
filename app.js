let amigos = [];

/**
 * Agrega un nuevo amigo al array de amigos.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * Muestra la lista de amigos en pantalla.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    let listaHTML = document.createElement("li");
    listaHTML.textContent = amigos[index];
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea un amigo de la lista y muestra el botón de reinicio.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];

    // Mostrar botón de reinicio
    document.getElementById("resetButton").style.display = "inline-block";
  }
}

/**
 * Aqui se reinicia el juego borrando lista, resultado y ocultando el botón.
 */
function reiniciarJuego() {
  amigos = [];
  document.querySelector("#listaAmigos").innerHTML = "";
  document.querySelector("#resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("amigo").focus();
}
