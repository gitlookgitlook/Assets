// function keyCodeCheck(event) {
//   console.log(event)

//   // 엔터를 치면, ul에 할 일을 li로 만들것이다?
//   if (event.key == "Enter") {
//   }
// }

// document.querySelector("#todoInput").addEventListener("keydown", keyCodeCheck)

// 다크모드 토글 스위치 이동하는 기능 만들기
let count = 0
document.querySelector(".toggle-switch").addEventListener("click", function () {
  count++
  if (count % 2 != 0) {
    document.querySelector(".toggle-switch").style.transform =
      "translateX(26px)"
  } else {
    document.querySelector(".toggle-switch").style.transform = "translateX(0)"
  }
})

// 다크모드 눌렀을 때의 디자인
document.querySelector(".toggle-switch").addEventListener("click", function () {
  document.querySelector(".section").classList.toggle("type_dark")
  document.querySelector(".toggle-switch").classList.toggle("type_dark-button")
  document.querySelector(".add-btn").classList.toggle("type_dark-button")
})
