//Visualización/estética de la página
var contAES = document.getElementById("AES");
var contRSA = document.getElementById("RSA");

contAES.style.display = "block";
contRSA.style.display = "none";

function mostrarAES() {
  contAES.style.display = "block";
  contRSA.style.display = "none";
}

function mostrarRSA() {
  contAES.style.display = "none";
  contRSA.style.display = "block";
}

//Algoritmo AES

var llaveA = "llave";
var resultadoA = document.getElementById("mensajeProcesadoA");
var textoCifradoA = null;

// Función para cifrar texto usando AES
function cifrarAES() {
  var textoA = document.getElementById("msjA").value;
  const textoCifradoAES = CryptoJS.AES.encrypt(textoA, llaveA).toString();
  resultadoA.innerHTML = textoCifradoAES;
  textoCifradoA = textoCifradoAES;
}

// Función para descifrar texto usando AES
function descifrarAES() {
  const textoDescifradoAES = CryptoJS.AES.decrypt(textoCifradoA, llaveA).toString(CryptoJS.enc.Utf8);
  resultadoA.innerHTML = textoDescifradoAES;
}

//Algoritmo RSA

var resultadoR = document.getElementById("mensajeProcesadoR");
var textoCifradoR = null;

// Generar un nuevo par de claves RSA (pública y privada)
var encrypt = new JSEncrypt({ default_key_size: 2048 });
encrypt.getKey();

// Obtener la clave pública y privada
var Kp = encrypt.getPublicKey();
var Ks = encrypt.getPrivateKey();

// Función para cifrar texto usando RSA
function cifrarRSA() {
  var textoR = document.getElementById("msjR").value;
  var textoCifradoRSA = encrypt.encrypt(textoR);
  if (textoCifradoRSA) {
    resultadoR.innerHTML = textoCifradoRSA;
    textoCifradoR = textoCifradoRSA
    console.log("Cifrado RSA:", textoCifradoRSA);
  } else {
    console.error("Error al cifrar el texto.");
  }
}

// Función para descifrar texto usando RSA
function descifrarRSA() {
  console.log("cifrado RSA:", textoCifradoR);
  var textoDescifradoRSA = encrypt.decrypt(textoCifradoR);
  if (textoDescifradoRSA) {
    resultadoR.innerHTML = textoDescifradoRSA;
    console.log("Descifrado RSA:", textoDescifradoRSA);
  } else {
    console.error("Error al descifrar el texto.");
  }
}
