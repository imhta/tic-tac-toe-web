import Player from './player.js';
import Board from './board.js';
import UI from './ui.js';
import state from './state.js';

const Game = (() => {
  const checkVertical = () => {

  };

  const checkHorizontal = (board) => {
    board.forEach((row) => {
      let rowSet = new Set(row);
      return rowSet.size === 1;
    });
  };
  
  const checkDiagonal = () => {};

  return {
    init() {
      Board.init();
      Player.init();
      UI.init();
    },
    updateInfo(newPlayers) {
      Player.setPlayerInfo(newPlayers);
      UI.init();
      Board.reset();
    },
    isWinner() {
      const {board} = state.current;

      return false;
    },
  };
})();

export default Game;
