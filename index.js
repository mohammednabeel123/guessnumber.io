"use strict";

const secretnumber = Math.trunc(Math.random() * 20 + 1); // Change this to a random number generator like Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;

function playWinSound() {
  const audio = document.getElementById("audio");
  if (audio) {
    audio
      .play()
      .then(() => console.log("Audio played successfully"))
      .catch((error) => console.error("Error playing audio:", error));
  } else {
    console.error("Audio element not found or not loaded.");
  }
}

function checkguess() {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🫤 No number!";
    document.querySelector(".message").style.color = "#1E90FF";
  }
  // When player wins
  else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".guessedNumber").textContent =
      "🧜🏻‍♂️🧜🏻‍♀️AWESOME GUESS!!";
    document.querySelector("body").style.backgroundColor = "#1E90FF";
    document.body.classList.add("blinking");
    playWinSound();
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;
    highscore = Math.max(highscore, score);
    document.querySelector(".highscore").textContent = highscore;
  }
  // When guess is too high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      document.querySelector(".message").style.color = "#f50000";
      score--;
      document.querySelector(".Score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".Score").textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      document.querySelector(".message").style.color = "#d4d006";
      score--;
      document.querySelector(".Score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".Score").textContent = 0;
    }
  }
}

function againReset() {
  score = 20;
  document.querySelector(".guessedNumber").textContent = "Guess My Number!";
  document.querySelector(".Score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  highscore = 0;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").placeholder = "NUM";
  document.querySelector("body").style.backgroundColor = "#222";
  document.body.classList.remove("blinking");
}
