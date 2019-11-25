/* eslint-disable no-param-reassign */
const route = {
  from(fromElement) {
    fromElement.style.display = 'none';
    return {
      to(toElement) {
        toElement.style.display = 'block';
      },
    };
  },
};

export default route;
