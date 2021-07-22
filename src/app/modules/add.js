import render from './list.js';
import drag from './drag.js';
import checkLabels from './utilities.js';
import storage from './storage.js';
import checkCompleted from './completed.js';

const input = document.querySelector('.input-task');

export default function add() {
  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      storage.addElement(input.value);
      input.value = '';
      render();
      checkLabels();
      drag.handdler();
      checkCompleted();
    }
  });
}