class LocalStorage {
  constructor() {
    this.data = [];
  }

  setItem(value) {
    this.data = value;
  }

  getItem() {
    return this.data;
  }
}

export default LocalStorage;