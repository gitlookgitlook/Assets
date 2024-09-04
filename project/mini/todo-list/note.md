// ul 안에 할 일 목록은 자바스크립트로 추가 시킬 것임
// 1. input 창에 입력 후 엔터를 눌렀을 때
// 2. + 버튼을 클릭했을 때

// ⭐️⭐️ 목적 : 키보드 이벤트가 발생했을 때 해당 이벤트의 세부 정보를 확인하려 만든 함수
// Internet Explorer에서 주로 사용되었고, 모든 브라우저에서 일관되게 동작하지 않아서 현재는 사용하지 않는 방식

// function keyCodeCheck() {
// console.log(window.event)
// }

// 이 코드에서 event 파라미터는 개발자가 정의한 것이 아니라 브라우저가 제공하는 표준 이벤트 객체를 가리킴 -> 이 함수가 호출될 때마다 발생한 이벤트의 전체정보를 콘솔에 출력함
function keyCodeCheck(event) {
console.log(event)

// 엔터를 치면, ul에 할 일을 li로 만들것이다?
if (event.key == "Enter") {
}
}

// 이벤트리스너에 1. 미리 정의된 함수 사용하기 2. 즉석에서 함수 만들기
// 1번은 미리 정의된 함수여서 여러곳에서 재사용이 가능하지만 2번은 즉석 함수여서 해당 이벤트 리스너에서만 사용이 가능하다.
// 그리고 내가 자주 사용한 것이 2번방법 -> function(){}
// ⭐️ 1번방법을 사용할 때는 함수명만 적기
document.querySelector("#todoInput").addEventListener("keydown", keyCodeCheck)
// 엔터키 값을 확인하는 방법 -> 콘솔 로그 확인하기 -> Enter키 누르기 -> 콘솔 확인하기 -> 예전에는 event.keyCode == 13을 가지고 확인 했지만 지금은 ⭐️ event.key == 'Enter'를 사용하는 것을 권장함
// 바뀐 이유: key를 사용하면 코드가 더 읽기 쉽고, 유지보수가 쉬우며, 다양한 환경에서 더 안정적으로 작동하기 때문에 권장됨.
