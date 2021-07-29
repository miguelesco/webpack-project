import storage from './storage.js';

let list = [];

const Drag = {
  swap(draggedIndex, dropIndex, ul) {
    // We get the current items
    list = storage.get();
    const dragged = list[draggedIndex];
    const drop = list[dropIndex];

    // We swap their positions
    list[draggedIndex] = drop;
    list[dropIndex] = dragged;

    // Update their indexes to reflect their new positions
    list[dropIndex].index = Number(dropIndex);
    list[draggedIndex].index = Number(draggedIndex);

    storage.set(list);

    // Then finally update the display
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

    return storage.get();
  },
};

export default Drag;