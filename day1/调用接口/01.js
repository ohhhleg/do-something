const fs =require('fs');
//追加数据，(1,2,3)1文件地址 2追加数据 3回调
fs.appendFile('../yibu.txt', 'lalalalalala', (err) => {
    if (err) throw err;
    console.log('数据已追加到文件');
  });