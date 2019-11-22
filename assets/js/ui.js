const Ui = (() => {
  return {
    updatebyId(id, innerHtml) {
      document.getElementById(id).innerHTML = innerHtml;
    }
  };
})();

export default Ui;
