import storage from './storage.js';

const listWrapper = document.querySelector('.list');

function render() {
  if (!storage.get()) {
    storage.set('elements', '[]');
    storage.addElement('Make Dinner');
    storage.addElement('Wash bath');
    storage.addElement('Call dad');
  }
  listWrapper.innerHTML = '';
  storage.get().forEach((element, i) => {
    const newLi = `
      <li data-id="${i}" draggable="true" class="item">
        <input type="checkbox" class="checkbox">
        <label class="text-task"  contenteditable="true">${element.description}</label>
        <i class="fas fa-ellipsis-v icon scroll" aria-hidden="true"></i>
      </li>
    `;
    listWrapper.innerHTML += newLi;
  });
}

export default render;