// 객체 구조분해 할당

const user = {
  name: 'Alice',
  age: 25,
  job: 'developer',
  info: {
    address: 'Seoul',
    hobbies: ['reading', 'coding'],
  },
};

// 1. 객체 속성명을 다르게 사용하고 싶다면 별칭을 지정할 수 있음
const { age: ageNum, name: userName, ...rest } = user;
// console.log(ageNum);
// console.log(userName);

// 2. 중첩된 객체 구조분해
const {
  name,
  age,
  info: {
    address,
    hobbies: [ firstHobby, secondHobby ],
  }, // 객체 내 배열도 구조분해 할당 가능
} = user;

console.log(address);
console.log(firstHobby);
console.log(secondHobby);
