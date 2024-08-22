const formulario = document.getElementById("formulario");
const textareas = document.querySelectorAll("#texto_encriptar");
const textoValidar = /^[a-z0-9 ]+$/;

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "texto_encriptar":
      if (textoValidar.test(e.target.value)) {
        document.getElementById("textoEntrada").classList.remove("cuadro__texto-incorrecto");
        document.getElementById("botones").classList.remove("botones-incorrecto");
        document.getElementById("aviso__informativo").classList.remove("aviso__informativo-incorrecto")

      } else {
        document.getElementById("textoEntrada").classList.add("cuadro__texto-incorrecto");
        document.getElementById("botones").classList.add("botones-incorrecto");
        document.getElementById("aviso__informativo").classList.add("aviso__informativo-incorrecto")
      }
    break;
  }
}

textareas.forEach((texto_encriptar) => {
  texto_encriptar.addEventListener('keyup', validarFormulario);
  texto_encriptar.addEventListener('blur', validarFormulario);
}); 