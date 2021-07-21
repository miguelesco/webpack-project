
const { localStorage } = window;

const storage = {
  get() {
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
      index: oldElements.length,
    };
    oldElements.push(newElement);

    localStorage.setItem('elements', JSON.stringify(oldElements));
  },
  remove(index) {

  },
  removeCompleted () {
    const oldElements = this.get();
    const filterElements = oldElements.filter((element) => !element.completed);
    this.set('elements', JSON.stringify(filterElements));
  },
  removeAll () {
    this.set('elements', '[]');
  }
};

export default storage;