`use strict`;
/*const teclaUno;
for teclaUno(function(sonido1){
    return audios/crash.wav
})*/
/*const drumButton = document.querySelectorAll("grid_container button");
myAudioElement.addEventListener ("play",("event"))*/
// Obtener todos los botones en el drumpad
const drumButtons = document.querySelectorAll(".grid_container button");

// Agregar un controlador de eventos clic a cada botón
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Obtener el nombre del archivo de sonido desde el atributo data-sound
    const sound = this.getAttribute("data-sound");

    // Crear un elemento de audio y establecer la fuente
    const audio = new Audio(sound);

    // Reproducir el sonido
    audio.play();
  });
});

// Mapeo de códigos ASCII a sonidos
const sounds = {
  49: "sounds/crash.wav", // Código ASCII del número 1
  50: "sounds/hihat-close.wav", // Código ASCII del número 2
  51: "sounds/hihat-open.wav", // Código ASCII del número 3
  52: "sounds/kick.wav", // Código ASCII del número 4
  53: "sounds/ride.wav", // Código ASCII del número 5
  54: "sounds/snare.wav", // Código ASCII del número 6
  55: "sounds/tom-high.wav", // Código ASCII del número 7
  56: "sounds/tom-low.wav", // Código ASCII del número 8
  57: "sounds/tom-mid.wav", // Código ASCII del número 9
};

// Obtener elementos de audio
const drumSound = new Audio();

// Agregar un controlador de eventos para el evento keydown
document.addEventListener("keydown", (event) => {
  // Obtener el código ASCII de la tecla presionada
  const keyCode = event.keyCode;

  // Verificar si el código ASCII está mapeado a un sonido
  if (sounds[keyCode]) {
    // Obtener la ruta del archivo de sonido correspondiente
    const sound = sounds[keyCode];

    // Establecer la fuente del elemento de audio del drumpad con el sonido
    drumSound.src = sound;

    // Reproducir el sonido del drumpad
    drumSound.play();
  }
});

//MODAL 1

const btnCompartir = document.getElementById("btncompartir");
const closeModalBtn = document.getElementById("btnCerrarModal");
const modal = document.getElementById("myModal");

btnCompartir.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//FACEBOOK
document
  .getElementById("btncompartirFacebook")
  .addEventListener("click", function () {
    var url = "http://127.0.0.1:5500/";
    var compartirURL =
      "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    window.open(compartirURL, "_blank");
  });

//INSTAGRAM --- Instagram no ofrece una api para compartir contenido personalizado
document
  .getElementById("btncompartirInstagram")
  .addEventListener("click", function () {
    var url = "http://127.0.0.1:5500/";
    var texto = "¡Echa un vistazo a esta página!";
    var compartirURL =
      "https://www.instagram.com/" +
      encodeURIComponent(url) +
      "&text=" +
      encodeURIComponent(texto);
    window.open(compartirURL, "_blank");
  });

//Twitter
document
  .getElementById("btncompartirTwitter")
  .addEventListener("click", function () {
    var url = "http://127.0.0.1:5500/";
    var texto = "¡Echa un vistazo a esta página!";
    var compartirURL =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(url) +
      "&text=" +
      encodeURIComponent(texto);

    window.open(compartirURL, "_blank");
  });

//Copiar Enlace
document
  .getElementById("btnCopiarEnlace")
  .addEventListener("click", function () {
    var input = document.getElementById("enlaceParaCopiar");
    input.style.display = "block";

    input.select();

    if (document.queryCommandSupported("copy")) {
      try {
        document.execCommand("copy");
        console.log("¡Enlace copiado!");
      } catch (err) {
        console.error("Error al copiar el enlace:", err);
      }
    }
    input.blur();
    input.style.display = "none";
  });

//Modal 2

var btnTutorial = document.getElementById("btncanciones");
var modal2 = document.getElementById("myModal2");
var btnCerrarModal2 = document.getElementById("btnCerrarModal2");

btnTutorial.addEventListener("click", function () {
  modal2.style.display = "block";
});
btnCerrarModal2.addEventListener("click", function () {
  modal2.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});

("use strict");

// ... Tu código anterior ...

// Agregar un controlador de eventos clic al botón "Rec"
document.getElementById("rec").addEventListener("click", () => {
  isRecording = true;
  recordedMelody.length = 0; // Reinicia la melodía
  recordButton.disabled = true;
  stopButton.disabled = false;
  playButton.disabled = true;
});

// Agregar un controlador de eventos clic al botón "Stop"
document.getElementById("stop").addEventListener("click", () => {
  isRecording = false;
  recordButton.disabled = false;
  stopButton.disabled = true;
  playButton.disabled = false;

  if (mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
});

// Agregar un controlador de eventos clic al botón "Play"
document.getElementById("play").addEventListener("click", () => {
  // Reproduce la melodía
  recordedMelody.forEach((sound, index) => {
    setTimeout(() => {
      const audio = new Audio(sound);
      audio.play();
    }, index * 1000); // Reproduce cada sonido con un intervalo de 1 segundo
  });
});
