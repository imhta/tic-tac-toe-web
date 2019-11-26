import Player from './player.js';
import Board from './board.js';
import UI from './ui.js';
import state from './state.js';

const Game = (() => {
  const checkVertical = (board) => {
     for(let i=0; i<board.length; i++){
        const currentVertical = (board[i][i] === board[i+1][i]) && (board[i+1][i] === board[i+2][i]);
        if(currentVertical)
          return true;
     }
    return false;
  };

  const checkHorizontal = (board) => {
    board.forEach((row) => {
      let rowSet = new Set(row);
      return rowSet.size === 1;
    });
  };

  const checkDiagonal = (board) => {
    let d1 = board[0][0] === board[1][1] && board[1][1] === board[2][2];
    let d2 = board[0][2] === board[1][1] && board[1][1] === board[2][0];
    return d1 || d2;
  };

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
      if(checkVertical(board) || checkHorizontal(board) || checkDiagonal(board)) return true;
      return false;
    },
  };
})();

export default Game;
