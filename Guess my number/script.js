'use strict';

let choice = '';
let secNum = 0;
let highscore = 0;
let score = 0;
document.querySelector('.ten').addEventListener('click', function () {
  secNum = Math.trunc(Math.random() * 10) + 1;
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.between').textContent = 'between 1 and 10';
  highscore = 0;
  choice = 'ten';
});

document.querySelector('.hundred').addEventListener('click', function () {
  secNum = Math.trunc(Math.random() * 100) + 1;
  score = 50;
  document.querySelector('.score').textContent = score;
  document.querySelector('.between').textContent = 'between 1 and 100';
  highscore = 0;
  choice = 'hundred';
});

const displayMessage = function (mess) {
  document.querySelector('.message').textContent = mess;
};

document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);
  // for no input
  if (!num) {
    displayMessage('enter number !!');
  }

  // when the player wins
  else if (num === secNum) {
    displayMessage('correct number !!');

    document.querySelector('.number').textContent = secNum;
    document.querySelector('.number').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    // document.querySelector('.again').click();
  }

  // unifying the conditions of > and <
  else if (num !== secNum) {
    if (score > 1) {
      displayMessage(num > secNum ? 'too high!' : 'two low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`YOU LOST THE GAME !!`);
      document.querySelector('.number').textContent = secNum;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('start guessing...');
  const num = Number(document.querySelector('.guess').value);
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.width = '15rem';
  if (choice === 'ten') {
    secNum = Math.trunc(Math.random() * 10) + 1;
    score = 10;
    document.querySelector('.score').textContent = score;
    document.querySelector('.between').textContent = 'between 1 and 10';
  } else {
    secNum = Math.trunc(Math.random() * 100) + 1;
    score = 50;
    document.querySelector('.score').textContent = score;
    document.querySelector('.between').textContent = 'between 1 and 100';
  }
});
