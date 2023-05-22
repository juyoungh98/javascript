// 객체 데이터의 구조
// Member -> Property, Method
// firstName, lastName -> Property
// function(getFullName) -> Method

const heropy = {
  firstName: "Heropy",
  lastName: "Park",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getLastName() {
    return `${this.lastName}`;
  }, // ': function' 축약 가능
};

console.log(heropy);
console.log(heropy.getFullName());

const amy = {
  firstName: "Amy",
  lastName: "Clarke",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(amy);

const neo = {
  firstName: "Neo",
  lastName: "Smith",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(neo);

// 생성자 함수
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// heropy1, amy1, neo1 -> 인스턴스(Instance)
const heropy1 = new User("heropy", "park");
const amy1 = new User("amy", "clarke");
const neo1 = new User("neo", "smith");
console.log(heropy1.getFullName()); // heropy park
console.log(amy1); // user {firstName: 'heropy', lastName: 'park'}
console.log(neo1);
