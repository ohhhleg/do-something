// http模块-------------------------------
const http = require('http');
// console.log(http);
const fs =require('fs');

http.get('http://wufazhuce.com/',(res)=>{
    res.setEncoding('utf8');
    let news ='';
    res.on('data',(chunk)=>{
        news += chunk;
    });
    res.on('end',()=>{
        console.log(news);
        fs.writeFile('./http.html',news,(err,data)=>{})
    });
}).on('error',(e)=>{
    console.error(`出现错误:${e.message}`);  
})
