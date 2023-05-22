// this
// 일반 함수는 호출 위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// 화살표 함수는 메소드 작성 시 부적합

function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name);
};
User.prototype.arrow = () => {
  console.log(this.name);
};

const heropy = new User("heropy");

heropy.normal(); // heropy
heropy.arrow(); // undefined

const timer = {
  name: "Heropy!!",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};
timer.timeout(); // Heropy!!
