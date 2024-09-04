function keyCodeCheck(event) {
  console.log(event)

  // 엔터를 치면, ul에 할 일을 li로 만들것이다?
  if (event.key == "Enter") {
  }
}

document.querySelector("#todoInput").addEventListener("keydown", keyCodeCheck)
