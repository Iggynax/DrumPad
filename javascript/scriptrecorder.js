"use strict";
// Obtén los elementos del DOM que necesitaremos
const recordButton = document.getElementById("rec");
const stopButton = document.getElementById("stop");
const audioElement = document.getElementById("drum-sound");
const recordedChunks = [];
let mediaRecorder;
// Agrega un controlador de eventos al botón de grabación
recordButton.addEventListener("click", () => {
  navigator.mediaDevices // Solicita acceso al micrófono al usuario
    .getUserMedia({ audio: true })
    .then((stream) => {
      // Crea un objeto MediaRecorder para grabar audio
      mediaRecorder = new MediaRecorder(stream);
      // Cuando hay datos disponibles, guárdalos en el array recordedChunks
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
      // Cuando se detiene la grabación, crea un enlace de audio y reprodúcelo
      mediaRecorder.onstop = () => {
        // Crea un Blob con los datos grabados
        const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
        // Crea una URL para el audio
        const audioUrl = URL.createObjectURL(audioBlob);

        // Reproduce la grabación
        audioElement.src = audioUrl;
        audioElement.controls = true;
        audioElement.play();
      };
      // Inicia la grabación
      mediaRecorder.start();
      recordButton.disabled = true; // Desactiva el botón de grabación
      stopButton.disabled = false; // Activa el botón de detener
    })
    .catch((error) => {
      console.error("Error al acceder al micrófono:", error);
    });
});
// Agrega un controlador de eventos al botón de detener
stopButton.addEventListener("click", () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.stop(); // Detiene la grabación si está en curso
  }
  recordButton.disabled = false; // Activa el botón de grabación
  stopButton.disabled = true; // Desactiva el botón de detener
});
