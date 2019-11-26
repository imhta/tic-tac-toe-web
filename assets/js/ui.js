import state from './state.js';

const player1Field = document.getElementById('player1-name-input');
const player2Field = document.getElementById('player2-name-input');

const UI = (() => {
  return {
    init() {
      this.updatebyId('player1-name', state.current.player1.name);
      this.updatebyId('player2-name', state.current.player2.name);
      this.updatebyId('score-1', state.current.player1.score);
      this.updatebyId('score-2', state.current.player2.score);
      this.updateStatus();
    },
    initForm() {
      player1Field.value = state.current.player1.name;
      player2Field.value = state.current.player2.name;
    },
    updateStatus() {
      this.updatebyId(
        'current-status',
        `${state.current.player.name} place your ${state.current.player.role}`,
      );
    },
    updateCell(row, col) {
      this.updatebyId(`${row}-${col}`, state.current.board[row - 1][col - 1]);
    },
    updatebyId(id, innerHtml) {
      document.getElementById(id).innerHTML = innerHtml;
    },
    flipBoardIn(element) {
      element.animate([
        // keyframes
        { transform: 'rotateY(0deg)' }, 
        { transform: 'rotateY(180deg)' }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1
      });
    },
    flipBoardOut(element){
      element.animate([
        // keyframes
        { transform: 'rotateY(0deg)' }, 
        { transform: 'rotateY(-180deg)' }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1
      });
    }
  };
})();

export default UI;
