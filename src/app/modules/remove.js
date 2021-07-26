/* eslint-disable */

import storage from './storage.js';
import reload from './reload.js';

const clearBtn = document.querySelector('.btn-clear');
const refreshIcon = document.querySelector('.refresh-icon');

const clear = {
  completed() {
    clearBtn.addEventListener('click', () => {
      storage.removeCompleted();
      reload();
    });
  },
  all() {
    refreshIcon.addEventListener('click', () => {
      storage.removeAll();
      reload();
    });
  },
  element(index) {
    storage.remove(index);
    reload();
  },
};

export default clear;