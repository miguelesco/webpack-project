/* eslint-disable */

import storage from './storage.js';

const reload = (ul) => {
  ul.innerHTML = '';
  storage.get().forEach((element, i) => {
    const newLi = `
      <li data-id="${i}" draggable="true" class="item">
        <input type="checkbox" class="checkbox">
        <label class="text-task"  contenteditable="true">${element.description}</label>
        <i class="fas fa-ellipsis-v icon scroll" aria-hidden="true"></i>
      </li>
    `;
    ul.innerHTML += newLi;
  });  
}

const clear = {
  completed(ul) {
    storage.removeCompleted();
    reload(ul);
    return storage.get();
  },
  all(ul) {
    storage.removeAll();
    reload(ul);
    return storage.get();
  },
  element(index, ul) {
    storage.remove(index);
    reload(ul);
    return storage.get();
  },
};

export default clear;