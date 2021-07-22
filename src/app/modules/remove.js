/* eslint-disable */

import storage from './storage.js';
import checkLabels from './utilities.js';
import render from './list.js';
import drag from './drag.js';
import checkCompleted from './completed.js';

const clearBtn = document.querySelector('.btn-clear');
const refreshIcon = document.querySelector('.refresh-icon');

const updatePage = () => {
  render();
  checkLabels();
  drag.handdler();
  checkCompleted();
};

const clear = {
  completed() {
    clearBtn.addEventListener('click', () => {
      storage.removeCompleted();
      updatePage();
    });
  },
  all() {
    refreshIcon.addEventListener('click', () => {
      storage.removeAll();
      updatePage();
    });
  },
  element(index) {
    storage.remove(index);
    updatePage();
  },
};

export default clear;