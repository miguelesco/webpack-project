import checkLabels from './utilities.js';
// import dragHanddler from './dragItems.js';
import storage from './storage.js';

const listWrapper = document.querySelector('.list');
const input = document.querySelector('.input-task');
let list = [];


function render () {
  if (!storage.get()) {
    storage.set('elements', '[]');
    storage.addElement('Make Dinner');
    storage.addElement('Wash bath');
    storage.addElement('Call dad');
  }
  listWrapper.innerHTML = "";
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
  console.log(storage.get())
  dragHanddler();
};


function dragHanddler () {
  Array.from(listWrapper.children).forEach((element, i) => {
  
    const dragabbleBtn = element.children[2];
    dragabbleBtn.addEventListener('mousedown', () => {
      element.setAttribute("draggable", true);
    });

    element.addEventListener("dragstart", (event) => {
      console.log(event.dataTransfer)
      event.dataTransfer.setData('index', i);
    });

    element.addEventListener('drop', (event) => {
      const draggedIndex = event.dataTransfer.getData("index"); 
      const dropIndex = i; 
      
      swap(draggedIndex, dropIndex);
    });

    element.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  });
}

function swap(draggedIndex, dropIndex) {
  // We get the current items
  list = storage.get();
  list.forEach(element => {
    const dragged = element[draggedIndex];
    const drop = element[dropIndex];

    // We swap their positions
    element[draggedIndex] = drop;
    element[dropIndex] = dragged;
    
    // Update their indexes to reflect their new positions
    element.index = dropIndex;
    element.index = draggedIndex;
  })

  storage.set('elements', JSON.stringify(list));

  // Then finally update the display
  listRender();
}

input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if(event.keyCode === 13) {
    storage.addElement(input.value);
    input.value = '';
    listRender();
  }
});

export default listRender;