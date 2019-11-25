import route from './route.js';
import state from './state.js';
import Game from './game.js';
import Board from './board.js';
import UI from './ui.js';

state.init();
Game.init();

const menuBtn = document.getElementById('menu-btn');
const startBtn = document.getElementById('start-btn');
const restBtn = document.getElementById('reset-btn');
const boardWrapperElement = document.getElementById('board-wrapper');
const homeWrapperElement = document.getElementById('home-wrapper');
const boardElement = document.getElementById('board');
const mainForm = document.getElementById('player-name-form');

menuBtn.addEventListener('click', e => {
  route.from(boardWrapperElement).to(homeWrapperElement);
  UI.initForm();
  e.preventDefault();
});
startBtn.addEventListener('click', e => {
  const playerData = new FormData(mainForm);
  Game.updateInfo([...playerData.values()]);
  route.from(homeWrapperElement).to(boardWrapperElement);
  e.preventDefault();
});

boardElement.addEventListener('click', e => {
  Board.set(e.target);
  e.preventDefault();
});

restBtn.addEventListener('click', e => {
  Board.reset();
  e.preventDefault();
});
