'use strict';
let score = 20;
let highScore = 0;
let randomNum = Math.floor(Math.random() * 19) + 1;
console.log(randomNum);
console.log(`You fucking cheater close the console and play fairly`);
// let message = document.querySelector('.message').textContent;
// let scoreText = document.querySelector('.label-score').textContent;
// let highScoreText = document.querySelector('.label-highscore').textContent;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a valid number';
  } else if (guess != randomNum && score === 1) {
    document.querySelector('.message').textContent = 'Congrats,You Lost 🦍';
    score--;
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  } else if (guess > randomNum) {
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  } else if (guess < randomNum) {
    document.querySelector('.message').textContent = '📉 Too low';
    score--;
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  } else {
    document.querySelector('.message').textContent = 'YOU GOT IT WOHOOOOO!';
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${score}`;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  randomNum = Math.floor(Math.random() * 19) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.guess').value = '';
  console.log(randomNum);
});
