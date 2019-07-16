//删除文件
const fs =require('fs'); 
fs.unlink('./文件.txt', (err) => {
    if (err) throw err;
    console.log('文件已删除');
  });