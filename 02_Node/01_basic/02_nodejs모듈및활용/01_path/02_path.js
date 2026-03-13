// import path from 'path'; // esm 방식
// esm 방식에서는 __filename 사용불가
// import { fileURLToPath } from 'url';

// const dir = fileURLToPath(import.meta.url);
// console.log(dir);

// const fullPath = path.join('some', 'work', 'ex.txt');
// console.log(fullPath);

const path = require('path'); // commonJS 방식
console.log(`파일 절대 경로 : ${__filename}`);

/*
    - 절대경로 : 루트 디렉토리부터 시작하는 경로
    - 상대경로 : 현재 작업 디렉토리 기준 경로
*/

const dir = path.dirname(__filename);
console.log(`폴더까지만 : ${dir}`);

// 현재 작업 디렉토리
console.log(process.cwd());
