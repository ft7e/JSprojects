'use strict';
// functions and vars needed :

//Random Num gen function :
const randomNumGen = function () {
  return Math.floor(Math.random() * 19) + 1;
};
//-------------------------------------------------------------------------

// Again button fun
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('.label-score', `💯 Score: ${score}`);
  randomNum = randomNumGen();
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.number', '?');
  displayMessage('.message', 'Start guessing ...');
  document.querySelector('.guess').value = '';
  console.log(randomNum);
});
//--------------------------------------------------------------------------

//Text content change fun
const displayMessage = function (target, message) {
  document.querySelector(target).textContent = message;
};
//--------------------------------------------------------------------------

//Useful vars
let score = 20;
let highScore = 0;
let randomNum = randomNumGen();

//--------------------------------------------------------------------------

//for cheating purposes
console.log(randomNum);
console.log(`You fucking cheater close the console and play fairly`);

// -------------------------------------------------------------------------

// Check Answer Event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', 'Please enter a valid number');
  } else if (guess != randomNum) {
    displayMessage(
      '.message',
      score <= 1
        ? 'Congrats,You Lost 🦍'
        : guess > randomNum
        ? '📈 Too high'
        : `📉 Too low`
    );
    score--;
    displayMessage('.label-score', `💯 Score: ${score}`);
  } else {
    displayMessage('.message', 'YOU GOT IT WOHOOOOO!');
    displayMessage('.number', randomNum);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      displayMessage('.label-highscore', `🥇 Highscore: ${score}`);
    }
  }
});
//--------------------------------------------------------------------------
