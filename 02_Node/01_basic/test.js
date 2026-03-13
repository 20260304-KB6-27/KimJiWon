const fs = require('fs');
const path = require('path');

filepath = path.join(__dirname, 'example.txt');

fs.readFile(filepath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// // pwd에서 찾기 때문에 에러 발생
// // -> example.txt 있는 디렉토리로 이동한 후 실행해야 (code runner X)
// fs.readFile('./example.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// directory 읽기
// 1. './' : process 의 working directory
// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(files);
// });

// 2. __dirname : 현재 파일의 directory
// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(files);
// });
