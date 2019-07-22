
    // var http=require('http');
    // console.log(http);

// 第一个最简单的服务器
    var {
        createServer
    }=require('http');
    createServer((req,res)=>{
        //拿到前端参数name
        console.log(req.url);
        console.log(req.url.split('=')[1]);
        //控制响应头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('name', 'zz');
        //控制响应体
        res.write(`<p style="color:blue;font-size:20px">45648916</p>`)
        res.end();//访问服务器显示
    }).listen(12345);//端口号一般选择大于4000，最大不要超过65536
    console.log('启动服务器');