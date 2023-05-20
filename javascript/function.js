// 함수 복습

// params -> 매개변수
// argument -> 인수

function sum(x, y) {
  return x + y;
}
// 함수를 반복적으로 실행하는 것은 비효율적; 변수에 값을 담아서 사용
const a = sum(1, 3);
const b = sum(3, 99);

console.log("sum =", a + b);

// 함수 선언 방식: 함수 선언, 함수 표현, 화살표 함수(ES6+)

// 1 함수 선언 (기명 함수); Hoisting -> 함수 선언했을 때에만 일어남; 로직이 복잡한 함수를 코드 아래 쪽에 배치하여 가독성 향상
function subtract(x, y) {
  return x - y;
}
console.log("difference =", subtract(900, 32));

// 2 함수 표현 (익명 함수)
const multiply = function (x, y) {
  return x * y;
  console.log(123); // 실행안됨; return -> 함수의 종료
};
console.log("multiple =", multiply(55, 29));

// 3 화살표 함수; 일부 생략 가능
const division = (x, y) => {
  return parseFloat((x / y).toFixed(3)); // parseFloat() : string 데이터를 float으로 변환
};
console.log("quotient =", division(2023, 26));
// const arrow = x => x+2 -> 단순 로직
// const arrow = x => 123/'string'/[]/undefined/null ...
// const arrow = x => ({}) -> 객체(괄호에 담아서 사용)

// arguments
function sum2(x, y, z) {
  console.log(arguments);
  const args = [];
  let total = 0;
  for (let i = 0; i < 3; i += 1) {
    console.log(`argument ${[i]}`);
    total += arguments[i];
  }
  return total;
}
console.log(sum2(5, 9, 14));

// IIFE (Immediately-Invoked Function Expression)
const c = 7;
function double() {
  console.log(c * 2);
}
double();

(function () {
  console.log("c * 8 =", c * 8);
})();

(function () {
  console.log("c * 8 =", c * 9);
})();
