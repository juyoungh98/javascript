// 산술 연산자 (+,-,*,/,%)
console.log(7 + 2);
console.log(7 - 2);
console.log(7 * 2);
console.log(7 / 2);
console.log(7 % 2);

// 할당 연산자 (=)
let a = 2;
console.log("a =", a);
a += 1;
console.log("a =", a);

// 비교 연산자 (===,==,>,>=,<,<=)
const b = 1;
const c = 1;
console.log(b === c);
console.log(b !== c);

function isEqual(x, y) {
  return x === y;
}
console.log(isEqual(3, 4));

function isNotEqual(x, y) {
  return x !== y;
}
console.log(isNotEqual(5, 6));

//논리 연산자 (&&, ||, !)
let d = true;
let e = false;
console.log("&&: ", d && e);
console.log("||: ", d || e);
console.log("! : ", !d);

// 삼항 연산자 (Ternary)
let f = 1 < 2;

if (f) {
  console.log("참");
} else {
  console.log("거짓");
}
// VS
console.log(f ? "참" : "거짓");
