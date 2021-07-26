import storage from './storage.js';
import reload from './reload.js';


const input = document.querySelector('.input-task');

export default function add() {
  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      storage.addElement(input.value);
      input.value = '';
      reload();
    }
  });
}