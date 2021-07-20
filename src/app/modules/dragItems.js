const listWrapper = document.querySelector('.list');


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
  const dragged = list[draggedIndex];
  const drop = list[dropIndex];

  // We swap their positions
  list[draggedIndex] = drop;
  list[dropIndex] = dragged;
  
  // Update their indexes to reflect their new positions
  list.index = dropIndex;
  list.index = draggedIndex;

  // Then finally update the display
  render();
}

export default dragHanddler;