'use strict';
if (sessionStorage.getItem('highScore') == null) {
  sessionStorage.setItem('highScore', 0);
} else {
  document.querySelector('.highscore').textContent =
    sessionStorage.getItem('highScore');
}

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayMessage('😈 Please Enter a Number!');
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      let hScore = sessionStorage.getItem('highScore');
      if (score > hScore) {
        sessionStorage.setItem('highScore', score);
        document.querySelector('.highscore').textContent =
          sessionStorage.getItem('highScore');
      }
      document.querySelector('.guess').disabled = true;
    } else if (guess !== secretNumber) {
      displayMessage(guess < secretNumber ? '😏 too low' : '🤔 too High');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('"😴 You lost the game."');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
