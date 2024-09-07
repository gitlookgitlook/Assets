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

// 할 일 항목 추가하는 코드 짜기
// input에 입력하고 버튼을 클릭하면, 밑에 li>input>label 추가되어야 하고 label태그에 입력한 값이 가야된다.

const todoInput = document.querySelector("#todo-input")
const addButton = document.querySelector(".add-btn")
const newTaskList = document.querySelector(".add-list")

// 할 일 항목 추가 함수
function addTodoItem() {
  const todoText = todoInput.value.trim()
  if (todoText !== "") {
    // 새로운 li 요소 생성
    const li = document.createElement("li")

    // 새로운 checkbox 생성
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = `task${newTaskList.children.length + 1}` // 새로운 체크 박스의 ID를 동적으로 설정

    // 새로운 label 생성
    const label = document.createElement("label")
    label.htmlFor = checkbox.id // label에 for속성을 설정하고 checkbox의 id랑 동일시 해줌
    label.textContent = todoText

    // li에 checkbox와 label 추가
    li.appendChild(checkbox)
    li.appendChild(label)

    // 할 일 목록에 새 항목 추가
    newTaskList.appendChild(li)
  }
}

addButton.addEventListener("click", addTodoItem)
