const fs = require('fs');

const path = require('path');
const filepath = path.join(__dirname, 'example.txt');
const savepath = path.join(__dirname, './text-3.txt');
// const data = fs.readFileSync(filepath, 'utf-8');

// // 파일 있으면
// if (fs.existsSync(savepath)) {
//   console.log('파일이 존재합니다.');
// } else {
//   // 없을 땐 생성
//   fs.writeFileSync(savepath, data);
// }

fs.readFile(filepath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  fs.writeFile(savepath, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    if (fs.existsSync(savepath)) {
      console.log('파일이 존재합니다.');
    } else {
      // 없을 땐 생성
      fs.writeFileSync(savepath, data);
      console.log('text-3.txt 가 저장되었습니다.');
    }
  });
});
