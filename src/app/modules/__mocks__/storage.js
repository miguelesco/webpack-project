import LocalStorage from './LocalStorage.js';

const localStorage = new LocalStorage();

const storage = {
  addElement(description = '') {
    const oldStorage = localStorage.getItem();

    /* only for testing */

    let newElement;

    if (description === 'Make Candy') {
      newElement = {
        description,
        completed: true,
        index: oldStorage.length,
      };
    } else {
      newElement = {
        description,
        completed: false,
        index: oldStorage.length,
      };
    }

    oldStorage.push(newElement);

    localStorage.setItem(oldStorage);
  },
  get() {
    return localStorage.getItem();
  },
  set(val) {
    localStorage.setItem(val);
  },
  /* eslint-disable */
  remove(index) {
    const elements = this.get();
    const filterElements = elements.filter((_, i) => i !== index);
    filterElements.map((elements, i) => elements.index = i);
    this.set(filterElements);
  },

  removeCompleted() {
    const oldElements = this.get();
    const filterElements = oldElements.filter((element) => !element.completed);
    this.set(filterElements);
  },

  removeAll() {
    this.set([]);
  },
};

export default storage;