const Ui = (() => {
  return {
    updateCell(row, col){
      this.updatebyId(`${row}-${col}`, state.current.board[row][col])
    },

    updatebyId(id, innerHtml) {
      document.getElementById(id).innerHTML = innerHtml;
    }
  };
})();

export default Ui;
