import checkLabels from './utilities.js';
import dragHanddler from './dragItems.js';

const listWrapper = document.querySelector('.list');

const list = [
  {
    description: 'hola',
    completed: true,
    index: 0
  },
  {
    description: 'sasas',
    completed: true,
    index: 1
  },
  {
    description: 'nnnnn',
    completed: true,
    index: 2
  }
];
function render () {
  listWrapper.innerHTML = "";
  list.forEach((element, i) => {
    const list = `
      <li data-id="${i}" class="item">
        <input type="checkbox" class="checkbox">
        <label class="text-task"  contenteditable="true">${element.description}</label>
        <i class="fas fa-ellipsis-v icon" aria-hidden="true"></i>
      </li>
    `;
    listWrapper.innerHTML += list;
  });
}



const listRender = () => {
  render();
  checkLabels();
  dragHanddler();
};

export default listRender;