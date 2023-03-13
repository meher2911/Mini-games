'use strict';

const scoreEl0 = document.getElementById('score-0');
const scoreEl1 = document.getElementById('score-1');
const dice = document.querySelector('.dice');
const restart = document.querySelector('.restart');
const roll = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
const cs0 = document.getElementById('current-score-0');
const cs1 = document.getElementById('current-score-1');

const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0; //if 0 then player 1 and if 1 then player 2
let play = true;

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
dice.classList.add('hidden');

function switchPlayer() {
  document.getElementById(`current-score-${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.toggle('player-active');

  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.toggle('player-active');
  currentscore = 0;
}

// rolling the dice
roll.addEventListener('click', function () {
  if (play) {
    const diceno = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${diceno}.png`;
    dice.classList.remove('hidden');

    if (diceno !== 1) {
      currentscore += diceno;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

// hold functionality
hold.addEventListener('click', function () {
  if (play) {
    scores[activePlayer] += currentscore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      play = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove('player-active');

      dice.classList.add('hidden');

      document.querySelector('.result').textContent = `PLAYER ${
        activePlayer + 1
      } WINS!!`;
      document.querySelector('.result').classList.remove('hidden');
    } else {
      switchPlayer();
    }
  }
});

// restarting the game (reset)
// we can make a function init and adding all these lines in it which will replace function() here and we can also use init() at the start of this script
restart.addEventListener('click', function () {
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove('player-winner');

  document.getElementById(`current-score-${activePlayer}`).textContent = 0;

  activePlayer = 0;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.add('player-active');

  document.querySelector('.result').classList.add('hidden');

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentscore = 0;
  play = true;
});

// how to play
const showIns = document.querySelector('.ins');
const closeIns = document.querySelector('.closeIns');
const overlay = document.querySelector('.overlay');
const instructions = document.querySelector('.instructions');

function close() {
  instructions.classList.add('hidden');
  overlay.classList.add('hidden');
}

function open() {
  instructions.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

showIns.addEventListener('click', open);
closeIns.addEventListener('click', close);
overlay.addEventListener('click', close);
