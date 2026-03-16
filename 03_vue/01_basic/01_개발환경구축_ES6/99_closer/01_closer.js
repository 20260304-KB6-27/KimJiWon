/*
    클로저
    - 반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여,
    - 자신이 선언되었을 때의 환경 밖에서도 스코프에 접근 할 수 있는 함수

    - 이벤트 발생 시 자주 사용함

    - 상태값을 전역변수로 설정하면 다른 메소드의 영향을 받을 가능성 높음
    - 지역변수로 설정해 지정한 함수로만 접근할 수 있게 만듦
*/

function outer() {
  let count = 0;

  // 이 스코프를 기억 -> 내부 함수를 조작할 수 있다?
  function inner() {
    count++; // outer 함수의 지역변수
    console.log(count);
  }

  return inner; // 함수 자체를 반환 - () 없음
}

// // 모두 1 출력됨
// outer()();
// outer()();
// outer()();

const counter = outer(); // 반환받은 함수 inner() 를 변수에 저장

counter();
counter();
counter();
