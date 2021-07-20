import checkLabels from './utilities.js';

const listWrapper = document.querySelector('.list');

const list = [
  {
    description: 'sasas',
    completed: true
  },
  {
    description: 'sasas',
    completed: true
  },
  {
    description: 'sasas',
    completed: true
  }
];

const listRender = () => {
  list.innerHTML = "";
  list.forEach((element, i) => {
    const list = `
      <li draggable="true" data-id="${i}" class="item">
        <input type="checkbox" class="checkbox">
        <label class="text-task"  contenteditable="true">${element.description}</label>
        <i class="fas fa-ellipsis-v icon" aria-hidden="true"></i>
      </li>
    `;
    listWrapper.innerHTML += list;
  });
  checkLabels();
};

export default listRender;