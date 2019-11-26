import state from './state.js';
import UI from './ui.js';
import Player from './player.js';
import Game from './game.js';

const Board = (() => {
  return {
    init() {
      const { board } = state.current;
      if (!board) {
        state.set('board', [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]);
        state.set('remainingMoves', 9);
        state.set('isGameOver', -1);
      } else {
        let rowIndex = 1;
        board.forEach((row) => {
          let colIndex = 1;
          row.forEach(() => {
            UI.updateCell(rowIndex, colIndex);
            colIndex += 1;
          });
          rowIndex += 1;
        });
      }
    },

    set(element) {
      // eslint-disable-next-line arrow-parens
      const [row, col] = element.id.split('-').map((value) => Number(value));
      if (this.isFree(row - 1, col - 1)) {
        state.current.board[row - 1][col - 1] = state.current.player.role;
        state.set('board', state.current.board);
        state.set('remainingMoves', state.current.remainingMoves -= 1);
        UI.updateCell(row, col);
        if (state.current.remainingMoves < 5) {
          if (Game.isWinner()) {
            return Game.won();
          }
        }
        Player.change();
        if (state.current.remainingMoves === 0 && state.current.isGameOver === -1) {
          state.set('isGameOver', 0);
          UI.updateStatus('This match is a draw match');
        } else {
          UI.updateStatus();
        }
      }
    },

    isFree(row, col) {
      return state.current.board[row][col] === '';
    },
    reset() {
      state.set('board', [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
      state.set('remainingMoves', 9);
      state.set('isGameOver', -1);
      this.init();
      Player.changeRole();
      UI.updateStatus();
    },
  };
})();

export default Board;
