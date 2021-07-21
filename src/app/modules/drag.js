import storage from './storage.js';
import checkLabels, { listWrapper } from './utilities.js';
import render from './list.js';

const list = storage.get();

const Drag = {
  handdler() {
    Array.from(listWrapper.children).forEach((element, i) => {
      const dragabbleBtn = element.children[2];
      dragabbleBtn.addEventListener('mousedown', () => {
        element.setAttribute('draggable', true);
      });

      element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('index', i);
      });

      element.addEventListener('drop', (event) => {
        const draggedIndex = event.dataTransfer.getData('index');
        const dropIndex = i;

        this.swap(draggedIndex, dropIndex);
      });

      element.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
    });
  },
  swap(draggedIndex, dropIndex) {
    // We get the current items

    const dragged = list[draggedIndex];
    const drop = list[dropIndex];

    // We swap their positions
    list[draggedIndex] = drop;
    list[dropIndex] = dragged;

    // Update their indexes to reflect their new positions
    list.index = dropIndex;
    list.index = draggedIndex;

    storage.set('elements', JSON.stringify(list));

    // Then finally update the display
    render();
    checkLabels();
    this.handdler();
  },
};

export default Drag;