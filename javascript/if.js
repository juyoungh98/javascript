export default function getRandom() {
  return Math.floor(Math.random() * 10);
}

// 조건문 If, Else If, Else

let a = getRandom();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default:
    console.log("rest");
}

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else if (a === 4) {
  console.log("a is 4");
} else {
  console.log("rest");
}
