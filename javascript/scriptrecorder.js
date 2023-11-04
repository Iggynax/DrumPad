"use strict";

const recordButton = document.getElementById("rec");
const stopButton = document.getElementById("stop");
const audioElement = document.getElementById("drum-sound");
const recordedChunks = [];
let mediaRecorder;

recordButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Reproduce la grabación
        audioElement.src = audioUrl;
        audioElement.controls = true;
        audioElement.play();
      };

      mediaRecorder.start();
      recordButton.disabled = true;
      stopButton.disabled = false;
    })
    .catch((error) => {
      console.error("Error al acceder al micrófono:", error);
    });
});

stopButton.addEventListener("click", () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
  recordButton.disabled = false;
  stopButton.disabled = true;
});
