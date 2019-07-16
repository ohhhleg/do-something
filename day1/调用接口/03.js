// 异步写入数据到指定文件,若纯在会被覆盖
const fs =require('fs');
const data = new Uint8Array(Buffer.from('blblblblblblblblb'));
fs.writeFile('./文件.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});