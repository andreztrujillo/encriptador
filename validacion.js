const textoEncriptar = document.querySelector("#texto_encriptar");
const textoSalida = document.querySelector("#texto_encriptado");

function btnEncriptar(){
  const textoEncriptado = encriptar(textoEncriptar.value);
  textoSalida.value = textoEncriptado
}

function encriptar(stringEncriptado){
  //reemplazar las vocales del texto introducido
  //la i se agrega para que afecte mayusculas y minusculas.
  //la m se agrega para que afecte a varias lineas o parrafos.
  //la g se agrega identifique las letras a cambiar en toda la oracion.
  let codigoEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i <codigoEncriptado.length; i++){
    if (stringEncriptado.includes(codigoEncriptado[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(codigoEncriptado[i][0], codigoEncriptado[i][1])
    }

  }
  return stringEncriptado
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textoEncriptar.value);
  textoSalida.value = textoEncriptado
}

function desencriptar(stringDesencriptado){
  let codigoEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i <codigoEncriptado.length; i++){
    if (stringDesencriptado.includes(codigoEncriptado[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(codigoEncriptado[i][1], codigoEncriptado[i][0])
    }

  }
  return stringDesencriptado
}

// funcion de copiar en el portapapeles capturando el elemento por el id
function copiar() {
  let textoAcopiar = document.getElementById("texto_encriptado").value;
  if (textoAcopiar !== "") {

  }
  navigator.clipboard.writeText(textoAcopiar).then(
      () => {
        /* clipboard successfully set */
      },() => {
          /* clipboard write failed */
        },
      );
}
var boton3 = document.querySelector("#boton_copiar"); boton3.onclick = copiar;


