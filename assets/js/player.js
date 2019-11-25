import state from './state.js';

const Player = (function () {
  return {
    init() {
      const { player } = state.current;
      if (!player) {
        state.set('player1', { name: 'player 1', score: 0, role: 'X' });
        state.set('player2', { name: 'player 2', score: 0, role: 'O' });
        state.set('player', { name: 'player 1', role: 'X' });
      }
    },

    change() {
      const { player, player1, player2 } = state.current;
      const player1Name = player1.name;
      const player2Name = player2.name;
      player.name = player.name === player1Name ? player2Name : player1Name;
      player.role = player.role === 'X' ? 'O' : 'X';
      state.set('player', player);
    },

    changeRole() {
      const { player1, player2 } = state.current;
      player1.role = player1.role === 'X' ? 'O' : 'X';
      player2.role = player2.role === 'X' ? 'O' : 'X';
      state.set('player', player1);
      state.set('player1', player1);
      state.set('player2', player2);
    },
    setPlayerInfo([player1Name, player2Name]) {
      const { player1, player2 } = state.current;
      player1.name = player1Name;
      player2.name = player2Name;
      state.set('player', player1);
      state.set('player1', player1);
      state.set('player2', player2);
    },
  };
})();

export default Player;
