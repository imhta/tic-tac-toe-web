import route from "./route.js";

const menuBtn = document.getElementById('menu');
const startBtn = document.getElementById('start-btn');
const boardWrapperElement = document.getElementById('board-wrapper');
const homeWrapperElement = document.getElementById('home-wrapper');



menuBtn.addEventListener('click', (e) => {
    route.from(boardWrapperElement).to(homeWrapperElement);
    e.preventDefault();
});
startBtn.addEventListener('click', (e) => {
    route.from(homeWrapperElement).to(boardWrapperElement);
    e.preventDefault();
});
