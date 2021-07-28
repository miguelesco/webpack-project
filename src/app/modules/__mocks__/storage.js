import LocalStorage from './LocalStorage.js';

const localStorage = new LocalStorage();

const storage = {
  addElement(description = '') {
    const oldStorage = localStorage.getItem();

    const newElement = {
      description,
      completed: false,
      index: oldStorage.length,
    };

    oldStorage.push(newElement);

    localStorage.setItem(oldStorage);
  },
  get() {
    return localStorage.getItem();
  }
};

export default storage;