const fs = require('fs'); // fs 모듈 가져오기

// 1. 동기 방식
// let files = fs.readdirSync('./'); // 현재 위치 기반 조회
// console.log(files);

// 2. 콜백 방식
// let files = fs.readdir('./', (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(files);
// });

// 3. Promise 방식
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
