const fs = require('fs');

const path = require('path');
const filepath = path.join(__dirname, 'example.txt');

const data = fs.readFileSync(filepath);
console.log(data);
