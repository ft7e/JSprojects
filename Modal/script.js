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
