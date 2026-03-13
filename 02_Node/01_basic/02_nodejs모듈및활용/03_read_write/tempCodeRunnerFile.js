// 파일 있으면
if (fs.existsSync(savepath)) {
  console.log('파일이 존재합니다.');
} else {
  // 없을 땐 생성
  fs.writeFileSync(savepath, data);
}
