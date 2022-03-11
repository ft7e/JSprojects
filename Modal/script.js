'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const triggerHide = function () {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', triggerHide);
}

btnCloseModal.addEventListener('click', triggerHide);

overlay.addEventListener('click', triggerHide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

btnHold.addEventListener('click', function () {
  if (turn === 1) {
    PlayerOneFinalScore += playerOneScore;
    finalScore[0].textContent = PlayerOneFinalScore;
    playerOneScore = 0;
    currentScore1.textContent = playerOneScore;
    if (PlayerOneFinalScore >= 100) {
      playerOneActive.classList.add('player--winner');
      Player1Name.textContent = 'WINNER!';
    } else {
      switchFromPlayer(1);
    }
  } else {
    PlayerTwoFinalScore += playerTwoScore;
    finalScore[1].textContent = PlayerTwoFinalScore;
    playerTwoScore = 0;
    currentScore1.textContent = playerTwoScore;
    if (PlayerTwoFinalScore >= 100) {
      playerTwoActive.classList.add('player--winner');
      player2Name.textContent = 'WINNER!';
    } else {
      switchFromPlayer(2);
    }
  }
});
