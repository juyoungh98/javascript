// 반복문 (for statement)
// for (시작조건; 종료조건; 변화조건) {
//
// }

// JavaScript로 html 삽입
const ulEl = document.querySelector("ul");

console.log(ulEl);

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
