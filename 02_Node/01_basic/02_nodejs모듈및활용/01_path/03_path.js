const path = require('path');

// 파일 확장자
const ext = path.extname(__filename);
console.log(ext);

// 파일 경로 요소 전체
const parsedPath = path.parse(__filename);
console.log(parsedPath);
