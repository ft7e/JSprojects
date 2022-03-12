'use strict';
// Useful vars

let playerOneScore = 0;
let playerTwoScore = 0;
let PlayerOneFinalScore = 0;
let PlayerTwoFinalScore = 0;
const diceImg = document.querySelector('.dice');
const finalScore = document.querySelectorAll('.score');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const playerOneActive = document.querySelector('.player--0');
const playerTwoActive = document.querySelector('.player--1');
const Player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');
let turn = 1;
let randomNum;

//----------------------------------------------------------------------------

//Generate random dice and show dice image fun
const genRandomDice = function () {
  let rando = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${rando}.png`;
  diceImg.classList.remove('hide');
  return rando;
};
//----------------------------------------------------------------------------

//Rolling the Dice fun
const rollTheDice = function () {
  randomNum = genRandomDice();
  if (turn === 1) {
    if (randomNum !== 1) {
      playerOneScore += randomNum;
      currentScore1.textContent = playerOneScore;
    } else {
      switchFromPlayer(1);
    }
  } else {
    if (randomNum !== 1) {
      playerTwoScore += randomNum;
      currentScore2.textContent = playerTwoScore;
    } else {
      switchFromPlayer(2);
    }
  }
};
//----------------------------------------------------------------------------

//Switching Players fun
const switchFromPlayer = function (num) {
  if (num == 1) {
    playerOneScore = 0;
    currentScore1.textContent = playerOneScore;
    playerOneActive.classList.remove('player--active');
    playerTwoActive.classList.add('player--active');
    turn = 2;
  } else {
    playerTwoScore = 0;
    currentScore2.textContent = playerTwoScore;
    playerOneActive.classList.add('player--active');
    playerTwoActive.classList.remove('player--active');
    turn = 1;
  }
};
//----------------------------------------------------------------------------

//Hold Button Event Listener;
btnHold.addEventListener('click', function () {
  if (turn === 1) {
    PlayerOneFinalScore += playerOneScore;
    finalScore[0].textContent = PlayerOneFinalScore;
    playerOneScore = 0;
    currentScore1.textContent = playerOneScore;
    checkWinner();
    switchFromPlayer(1);
  } else {
    PlayerTwoFinalScore += playerTwoScore;
    finalScore[1].textContent = PlayerTwoFinalScore;
    playerTwoScore = 0;
    currentScore1.textContent = playerTwoScore;
    checkWinner();
    switchFromPlayer(2);
  }
});
//----------------------------------------------------------------------------

//Check Winner fun
const checkWinner = function () {
  if (PlayerOneFinalScore >= 100) {
    Player1Name.textContent = 'WINNER!';
    playerOneActive.classList.add('player--winner');
  } else if (PlayerTwoFinalScore >= 100) {
    player2Name.textContent = 'WINNER!';
    playerTwoActive.classList.add('player--winner');
  }
};
//----------------------------------------------------------------------------

//Roll dice Event listener
btnRollDice.addEventListener('click', rollTheDice);

//----------------------------------------------------------------------------

//New game Button Event Listerner
btnNewGame.addEventListener('click', function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  PlayerOneFinalScore = 0;
  PlayerTwoFinalScore = 0;
  currentScore1.textContent = playerOneScore;
  currentScore2.textContent = playerTwoScore;
  player2Name.textContent = 'PLAYER 2';
  Player1Name.textContent = 'PLAYER 1';
  finalScore[1].textContent = PlayerOneFinalScore;
  finalScore[0].textContent = PlayerTwoFinalScore;
  playerOneActive.classList.add('player--active');
  playerOneActive.classList.remove('player--winner');
  playerTwoActive.classList.remove('player--active', 'player--winner');
  diceImg.classList.add('hide');
});
