// const : 재할당 금지

const p1 = { name: 'john', age: 20 };

// 객체 내부 값은 변경 가능 - 스택에 있는 주소값만 바뀌지 않으면 됨
p1.age = 22;
p1.nick = 'jjun';
console.log(p1);

// 새로운 객체를 할당하는 것은 안됨 - TypeError 발생
// p1 = { name: 'lee', age: 25 };
