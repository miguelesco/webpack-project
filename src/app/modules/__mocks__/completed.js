import storage from './storage.js';

let list = [];
/* eslint-disable */

function checkCompleted(ul, i) {
  list = [...storage.get()];
  
  list[i].completed = !list[i].completed;

  storage.set(list);
  
  return list;
}

export default checkCompleted;