import state from './state.js'

const Board = (() => {
    return {
        init () {
           state.set('board', [['','',''],['','',''],['','','']]);
        },

        set (element) {
           const [row, col] = element.id.split('-').map((value) => Number(value));
           state.current.board[row][col] = state.current.player.role;
           Ui.updateCell(row, col);
        },

        isFree (row, col) {
           return state.current.board[row][col] === '';
        }
    };
})();