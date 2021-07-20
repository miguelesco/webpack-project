import storage from './storage.js';
import listRender from "./list.js";


// const listWrapper = document.querySelector('.list');
// const list = storage.get();

// function dragHanddler () {
//   Array.from(listWrapper.children).forEach((element, i) => {
  
//     const dragabbleBtn = element.children[2];
//     dragabbleBtn.addEventListener('mousedown', () => {
//       element.setAttribute("draggable", true);
//     });

//     element.addEventListener("dragstart", (event) => {
//       event.dataTransfer.setData('index', i);
//     });

//     element.addEventListener('drop', (event) => {
//       const draggedIndex = event.dataTransfer.getData("index"); 
//       const dropIndex = i; 
      
//       swap(draggedIndex, dropIndex);
//     });

//     element.addEventListener("dragover", (event) => {
//       event.preventDefault();
//     });
//   });
// }

// function swap(draggedIndex, dropIndex) {
//   // We get the current items
//   console.log('`')
//   list.map(element => {
//     const dragged = element[draggedIndex];
//     const drop = element[dropIndex];

//     // We swap their positions
//     element[draggedIndex] = drop;
//     element[dropIndex] = dragged;
    
//     // Update their indexes to reflect their new positions
//     element.index = dropIndex;
//     element.index = draggedIndex;
//     return list;
//   });

//   storage.set('elements', JSON.stringify(list));

//   // Then finally update the display
//   listRender();
// }

export default dragHanddler;