import storage from './storage.js';

let list = [];
const listWrapper = document.querySelector('.list');

/* eslint-disable */

function checkCompleted() {
  list = [...storage.get()];
  for (let i = 0; i < listWrapper.children.length; i += 1) {
    const checkbox = listWrapper.children[i].children[0];
    const label = listWrapper.children[i].children[1];

    checkbox.addEventListener('change', (e) => {
      list[i].completed = !list[i].completed;

      if (e.target.checked) {
        label.classList.add('completed');
      } else {
        label.classList.remove('completed');
      }

      storage.set('elements', JSON.stringify(list));
    });

    if (list[i].completed) {
      label.classList.add('completed');
      checkbox.checked = true;
    }
  }
}

export default checkCompleted;