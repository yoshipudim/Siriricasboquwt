const playButton = document.getElementById("playButton");
const message = document.getElementById("message");

playButton.addEventListener("click", () => {
  message.textContent = "A aventura começou! 🌈💚 Em breve, novas áreas para explorar!";
  playButton.textContent = "Você entrou! 🎉";
});
