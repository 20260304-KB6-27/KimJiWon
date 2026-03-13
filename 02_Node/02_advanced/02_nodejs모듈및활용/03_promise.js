// const fs = require('fs').promises;
const fs = require('fs/promises');

// 1. then 사용
// fs.readdir('./')
//   .then((files) => {
//     console.log(files);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// 2. async/await 사용
async function readDir() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

readDir();
