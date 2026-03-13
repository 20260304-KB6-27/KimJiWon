const fs = require('fs');

const path = require('path');
const filepath = path.join(__dirname, 'example.txt');
const savepath = path.join(__dirname, './text-1.txt');
const data = fs.readFileSync(filepath, 'utf-8');

fs.writeFileSync(savepath, data, 'utf-8');
console.log('작성이 완료되었습니다.');
