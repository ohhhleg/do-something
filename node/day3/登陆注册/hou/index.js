var express =require('express');
var fs =require('fs');
// 解析请求模块
// var bodyParseer =require('body-parser');
var app =express()
//该app对象调用其他模块来去处理请求和响应
//app.use全局使用
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use((req,res,next)=>{
    res.append('Access-Control-Allow-Origin', '*');
    next();
})
app.get('/login',(req,res)=>{
    res.send('hello world');
})
// list页----------------------------
app.get('/list',async(req,res)=>{
    let data=await new Promise((resolve,reject)=>{
        fs.readFile('./list.json',(err,data)=>{
            err?reject(err):resolve(data);
        })
    })
    res.send(data);
})
// list页----------------------------


app.post('/login',(req,res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    let{
        username,
        password
    }=req.body;
    if(useername==='yao'&&password==='123'){
        res.send('登陆成功');
    }else{
        res.send('登录失败');
    }
})
app.listen(9999);
console.log('启动服务器');