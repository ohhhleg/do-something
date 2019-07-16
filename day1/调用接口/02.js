//文件修改时间
const fs =require('fs');

fs.watchFile('./yibu.text', (curr, prev) => {
    console.log(`当前的最近修改时间是: ${curr.mtime}`);
    console.log(`之前的最近修改时间是: ${prev.mtime}`);
  });