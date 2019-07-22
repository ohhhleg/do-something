//重命名
const fs =require('fs'); 
fs.rename('./yibu.txt', './news.txt', (err) => {
    if (err) throw err;
    console.log('重命名完成');
  });