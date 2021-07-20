const localStorage = window.localStorage;

const storage = {
  get () {
    return JSON.parse(localStorage.getItem('elements'));
  },
  set(key, val) {
    localStorage.setItem(key, val);
  },
  addElement(description = '') {
    const oldElements = this.get();

    const newElement = {
      description,
      completed: false,
      index: oldElements.length 
    };
    oldElements.push(newElement);

    localStorage.setItem('elements', JSON.stringify(oldElements));
  },
  remove() {

  }
};

export default storage;