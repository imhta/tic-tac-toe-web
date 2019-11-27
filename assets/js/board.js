import state from './state.js';
import UI from './ui.js';
import Player from './player.js';

const Board = (() => {
  const checkVertical = (board) => {
    for (let i = 0; i < board.length; i += 1) {
      const currentVertical = (board[0][i] === board[1][i]
        && board[1][i] === board[2][i]);
      if (currentVertical) return true;
    }
    return false;
  };

  const checkHorizontal = (board) => {
    for (const row of board) {
      const uniq = new Set(row);
      if (uniq.size === 1 && !uniq.has('')) {
        return true;
      }
    }
    return false;
  };

  const checkDiagonal = (board) => {
    const d1 = board[0][0] === board[1][1] && board[1][1] === board[2][2];
    const d2 = board[0][2] === board[1][1] && board[1][1] === board[2][0];
    return d1 || d2;
  };
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
          if (this.isWinner()) {
            return this.won();
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
    isWinner() {
      const { board } = state.current;
      if (
        checkVertical(board)
        || checkHorizontal(board)
        || checkDiagonal(board)
      ) {
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
