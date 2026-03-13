const fs = require('fs');

const path = require('path');
const filepath = path.join(__dirname, 'example.txt');

// encoding 설정 
const data = fs.readFileSync(filepath, 'utf-8');
console.log(data);
