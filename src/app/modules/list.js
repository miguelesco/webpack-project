import checkLabels from './utilities.js';
// import dragHanddler from './dragItems.js';
import storage from './storage.js';

const listWrapper = document.querySelector('.list');
const input = document.querySelector('.input-task');
const list = storage.get();


function render () {
  if (!storage.get()) {
    storage.set('elements', '[]');
  }
  listWrapper.innerHTML = "";
  storage.get().forEach((element, i) => {
    const list = `
      <li data-id="${i}" draggable="true" class="item">
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


function dragHanddler () {
  Array.from(listWrapper.children).forEach((element, i) => {
  
    const dragabbleBtn = element.children[2];
    dragabbleBtn.addEventListener('mousedown', () => {
      element.setAttribute("draggable", true);
    });

    element.addEventListener("dragstart", (event) => {
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
  list.map(element => {
    const dragged = element[draggedIndex];
    const drop = element[dropIndex];

    // We swap their positions
    element[draggedIndex] = drop;
    element[dropIndex] = dragged;
    
    // Update their indexes to reflect their new positions
    element.index = dropIndex;
    element.index = draggedIndex;
    return list;
  });

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