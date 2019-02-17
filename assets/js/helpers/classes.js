export class User {
  constructor(name = 'Paul', img = false) {
    this.name = name
    if (img) {
      this.img = img
    }
  }
}
