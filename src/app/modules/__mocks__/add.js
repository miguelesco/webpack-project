import storage from './storage.js';

export default function add(inputValue = '', ul) {
  storage.addElement(inputValue);
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
}