import state from './state.js';
import UI from './ui.js';
import Player from './player.js';

const Board = (function () {
  return {
    init() {
      const { board } = state.current;
      if (!board) {
        state.set('board', [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]);
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
        UI.updateCell(row, col);
        Player.change();
        UI.updateStatus();
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
      this.init();
      Player.changeRole();
      UI.updateStatus();
    },
  };
})();

export default Board;
