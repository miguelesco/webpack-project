const { localStorage } = window;

const storage = {
  get() {
    return JSON.parse(localStorage.getItem('elements'));
  },

  set(key, val) {
    localStorage.setItem(key, val);
  },

  updateElement(index, newText) {
    const elements = this.get();
    const elementToBeUpdate = elements[index];
    elementToBeUpdate.description = newText;
    elements[index] = elementToBeUpdate;
    this.set('elements', JSON.stringify(elements));
  },

  addElement(description = '') {
    const oldElements = this.get();

    const newElement = {
      description,
      completed: false,
      index: oldElements.length,
    };
    oldElements.push(newElement);

    localStorage.setItem('elements', JSON.stringify(oldElements));
  },
  /* eslint-disable */
  remove(index) {
    const elements = this.get();
    const filterElements = elements.filter((_, i) => i !== index);
    filterElements.map((elements, i) => elements.index = i);
    this.set('elements', JSON.stringify(filterElements));
  },

  removeCompleted() {
    const oldElements = this.get();
    const filterElements = oldElements.filter((element) => !element.completed);
    this.set('elements', JSON.stringify(filterElements));
  },

  removeAll() {
    this.set('elements', '[]');
  },
};

export default storage;