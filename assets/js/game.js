import Player from './player.js';
import Board from './board.js';
import UI from './ui.js';
import state from './state.js';

const Game = (() => {
  const checkVertical = (board) => {
    for (let i = 0; i < board.length; i++) {
      const currentVertical = (board[0][i] === board[1][i] 
      && board[1][i] === board[2][i]);
      if (currentVertical) return true;
    }
    return false;
  };

  const checkHorizontal = (board) => {
    board.forEach((row) => {
      const uniq = new Set(row);
      if (uniq.size === 1) {
        return true;
      }
    });
    return false;
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
      const { board } = state.current;
      if (
        checkVertical(board) ||
        checkHorizontal(board) ||
        checkDiagonal(board)
      ){
        return true;
      }
      return false;
    },
    won() {
      const { player, player1, player2 } = state.current;
      if (player.name === player1.name) {
        player1.score += 1;
        state.set('player1', player1);
      } else {
        player2.score += 1;
        state.set('player2', player2);
      }
      state.set('isGameOver', 1);
      UI.init();
      UI.updateStatus(`${player.name} won the match`);
    },
    draw() {
      state.set('isGameOver', 0);
      UI.init();
      Board.reset();
    },
  };
})();

export default Game;
