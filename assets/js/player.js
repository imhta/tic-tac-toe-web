import state from "./state.js";

const Player  = (() => {
    return {
        init () {
            state.set('player1', {name:'player 1', score: 0, role: 'X'});
            state.set('player2', {name:'player 2', score: 0, role: 'O'});
            state.set('player', {name:'player 1', role: 'X'});
        },

        change () {
            const currentPlayer = state.current.player;
            const player1Name = state.current.player1.name;
            const player2Name = state.current.player2.name;
            currentPlayer.name = currentPlayer.name === player1Name ? player2Name : player1Name;
            currentPlayer.role = currentPlayer.role === 'X' ? 'O' : 'X';
            state.set('player', currentPlayer);
        },

        changeRole () {
            const player1 = state.current.player1;
            const player2 = state.current.player2;
            player1.role = player1.role === 'X' ? 'O' : 'X';
            player2.role = player2.role === 'X' ? 'O' : 'X';
            state.set('player', player1);
            state.set('player1', player1);
            state.set('player2', player2);
        }
    };
})();