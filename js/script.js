// Generar un nuevo par de claves RSA (pública y privada)
var encrypt = new JSEncrypt({ default_key_size: 2048 });
encrypt.getKey();

// Obtener la clave pública y privada
var Kp = encrypt.getPublicKey();
var Ks = encrypt.getPrivateKey();

//Algoritmo AES

var llaveA = "llave";
var resultadoCA = document.getElementById("mensajeProcesadoCA");
var resultadoCR = document.getElementById("mensajeProcesadoCR");
var resultadoDA = document.getElementById("mensajeProcesadoDA");
var resultadoDR = document.getElementById("mensajeProcesadoDR");
var textoCifradoA = null;

// Función para cifrar texto usando AES
function cifrarAES() {
  var textoA = document.getElementById("msj").value;
  const textoCifradoAES = CryptoJS.AES.encrypt(textoA, llaveA).toString();
  resultadoCA.innerHTML = "<b>Mensaje cifrado en AES: </b>" + textoCifradoAES;
  // textoCifradoA = textoCifradoAES;
  return textoCifradoAES;
}

// Función para descifrar texto usando AES
function descifrarAES(textoDR) {
  const textoDescifradoAES = CryptoJS.AES.decrypt(textoDR, llaveA).toString(CryptoJS.enc.Utf8);
  resultadoDA.innerHTML = "<b>Mensaje descifrado en AES: </b>" + textoDescifradoAES;
  return textoDescifradoAES
}

//Algoritmo RSA

var textoCifradoR = null;


// Función para cifrar texto usando RSA
function cifrarRSA(textoA) {
  // var textoR = document.getElementById("msj").value;
  var textoCifradoRSA = encrypt.encrypt(textoA);
  if (textoCifradoRSA) {
    resultadoCR.innerHTML = "<b>Clave AES cifrado en RSA: </b>" + textoCifradoRSA;
    textoCifradoR = textoCifradoRSA
    console.log("Cifrado RSA:", textoCifradoRSA);
    return textoCifradoRSA
  } else {
    console.error("Error al cifrar el texto.");
  }
}

// Función para descifrar texto usando RSA
function descifrarRSA(textoCR) {
  var textoDescifradoRSA = encrypt.decrypt(textoCR);
  if (textoDescifradoRSA) {
    resultadoDR.innerHTML = "<b>Clave AES descifrado en RSA: </b>" + textoDescifradoRSA;
    console.log("Descifrado RSA:", textoDescifradoRSA);
    return textoDescifradoRSA
  } else {
    console.error("Error al descifrar el texto.");
  }
}

function procesar(){
  var ca = cifrarAES()
  var cr = cifrarRSA(ca)
  var dr = descifrarRSA(cr)
  descifrarAES(dr)
}