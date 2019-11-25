import Player from './player.js';
import Board from './board.js';
import UI from './ui.js';

const Game = (function () {
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
    anyoneWon() {
      return false;
    },
  };
})();

export default Game;
