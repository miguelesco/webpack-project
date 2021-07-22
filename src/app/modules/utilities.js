/* eslint-disable */

import storage from './storage.js';
import clear from './remove.js';

const listWrapper = document.querySelector('.list');

let dobleClick = false;

function labelHanddle(label, i, icon, blur = false) {
  if (!blur) {
    dobleClick = true;
    icon.classList.remove('fa-ellipsis-v');
    icon.classList.remove('scroll');
    icon.classList.add('fa-trash-alt');
    icon.classList.add('remove');
  } else {
    icon.classList.remove('fa-trash-alt');
    icon.classList.remove('remove');
    icon.classList.add('fa-ellipsis-v');
    icon.classList.add('scroll');
    dobleClick = false;
    storage.updateElement(i, label.textContent);
  }
}

function removeElement(i, isRemove) {
  if (dobleClick && isRemove) {
    clear.element(i);
    dobleClick = false;
  }
}

export default function checkLabels() {
  Array.from(listWrapper.children).forEach((item, i) => {
    const label = item.children[1];
    const icon = item.children[2];
    icon.addEventListener('dblclick', () => labelHanddle(label, i, icon, icon.classList.contains('remove')));
    label.onblur = () => labelHanddle(label, i, icon, true);
    icon.addEventListener('click', () => removeElement(i, icon.classList.contains('remove')));
  });
}
