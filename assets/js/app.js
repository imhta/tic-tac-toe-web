const menuBtn = document.getElementById('menu');
const startBtn = document.getElementById('start-btn');
const boardWrapperElement = document.getElementById('board-wrapper');
const homeWrapperElement = document.getElementById('home-wrapper');


function navFrom(fromElement) {
    fromElement.style.display = 'none';
    return {to (toElement) {
        toElement.style.display = 'block';
    }}
}
menuBtn.addEventListener('click', (e) => {
    navFrom(boardWrapperElement).to(homeWrapperElement);
    e.preventDefault();
});
startBtn.addEventListener('click', (e) => {
    navFrom(homeWrapperElement).to(boardWrapperElement);
    e.preventDefault();
});
