// 인자 전달 시 객체 형태로 전달하는 방법

// 1. 객체 형태로 인자를 받을 때 기본 값을 설정할 수 있음
function addContact1({ name, phone, email = '이메일 없음', age = 0 }) {
  console.log(name, phone, email, age);
}
// addContact1({ name: '이몽룡', phone: '010-3434-8989' });

// 2. 객체를 전달받고 속성 유무 확인
function addContact2(contact) {
  if (!contact.email) contact.email = '이메일없음';
  if (!contact.age) contact.age = 0;
  let { name, phone, email, age } = contact;
  console.log(name, phone, email, age);
}
// addContact2({ name: '이몽룡', phone: '010-3434-8989' });

// 3. 객체 형태가 아닌 매개변수를 지정해주는 경우
function addContact3(name, phone, email = '이메일 없음', age = 0) {
  console.log(name, phone, email, age);
}
addContact3('이몽룡', '010-3434-8989');
