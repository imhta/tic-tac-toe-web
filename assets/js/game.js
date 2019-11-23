import Player from './player.js';
import Board from './board.js';
import UI from './ui.js';

const Game = (() => {
    return {
        init() {
            Board.init();
            Player.init();
            UI.init();
        },
        anyoneWon() {
            return false;
        },

    }
})()

export default Game;