import './main.css';
import render from './app/modules/list.js';
import checkLabels from './app/modules/utilities.js';
import drag from './app/modules/drag.js';
import add from './app/modules/add.js';
import checkCompleted from './app/modules/completed.js';
import clear from './app/modules/remove.js';

const init = () => {
  render();
  checkLabels();
  drag.handdler();
  add();
  checkCompleted();
  clear.completed();
  clear.all();
};

init();