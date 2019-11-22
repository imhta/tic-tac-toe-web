const route = {
    from (fromElement) {
      fromElement.style.display = 'none';
      return route;
    },
    to (toElement) {
      toElement.style.display = 'block';
    }
};

export default route;
