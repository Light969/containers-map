export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  addNewError(number, textDescription) {
    this.map.set(number, textDescription);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
