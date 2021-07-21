import checkLabels from './utilities.js';
import storage from './storage.js';

const listWrapper = document.querySelector('.list');
const input = document.querySelector('.input-task');

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
        <i class="fas fa-ellipsis-v icon" aria-hidden="true"></i>
      </li>
    `;
    listWrapper.innerHTML += newLi;
  });
}

const listRender = () => {
  render();
  checkLabels();
};

input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    storage.addElement(input.value);
    input.value = '';
    listRender();
  }
});

export default listRender;