function addContact(
  name,
  phone,
  home = '없음',
  address = '없음',
  email = '없음',
) {
  let result =
    `name=${name}, phone=${phone}, home=${home}, ` +
    `address=${address}, email=${email}`;
  console.log(result);
}

addContact('홍길동', '010-1234-1234');
addContact('이몽룡', '010-5678-5678', '02-9090-9090', '서울시');
