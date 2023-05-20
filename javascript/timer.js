// 타이머 함수
// setTimeout(함수, 시간); 일정 시간 후 함수 실행
// setInterval(함수, 시간); 일정 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

let i = 2;
const twoSeconds = setInterval(() => {
  console.log(i);
  i += 2;
}, 2000);

const buttonDiv = document.querySelector(".button");

console.log(buttonDiv);

buttonDiv.textContent = "button";
buttonDiv.addEventListener("click", () => {
  clearInterval(twoSeconds);
  console.log("clearInterval");
});
