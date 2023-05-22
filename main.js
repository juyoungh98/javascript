// JavaScript Class: prototype vs class.constructor

// function User(first, last) {
// this.firstName = first;
// this.lastName = last;
// }
// User.prototype.getFullName = function () {
// return `${this.firstName} ${this.lastName}`;
// };

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const juyoung = new User("juyoung", "heo");

console.log(juyoung.getFullName());
