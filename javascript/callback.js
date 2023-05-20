// 콜백 함수 (Callback Function)
// 인수로 사용되는 함수; 실행 위치의 보장

function timeout(callback) {
  setTimeout(() => {
    console.log("javascript");
    callback();
  }, 3000);
}

let i = 1;
const oneSec = setInterval(() => {
  console.log(i);
  i += 1;
}, 1000);

timeout(() => {
  console.log("callback function");
});

setTimeout(() => {
  console.log("clearInterval");
  clearInterval(oneSec);
}, 5000);
