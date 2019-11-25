import route from './route.js';
import state from './state.js';
import Game from './game.js';
import Board from './board.js';

state.init();
Game.init();

const menuBtn = document.getElementById('menu-btn');
const startBtn = document.getElementById('start-btn');
const restBtn = document.getElementById('reset-btn');
const boardWrapperElement = document.getElementById('board-wrapper');
const homeWrapperElement = document.getElementById('home-wrapper');
const boardElement = document.getElementById('board');


menuBtn.addEventListener('click', (e) => {
    route.from(boardWrapperElement).to(homeWrapperElement);
    e.preventDefault();
});
startBtn.addEventListener('click', (e) => {
    route.from(homeWrapperElement).to(boardWrapperElement);
    e.preventDefault();
});

boardElement.addEventListener('click', (e) => {
    Board.set(e.target);
    e.preventDefault();
});

restBtn.addEventListener('click', (e) => {
    Board.reset();
    e.preventDefault();
});
