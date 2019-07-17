// 原生模块-----------------------------------
    // http模块------------------
    // |1xx|请求预备阶段，连接不终止
    // |2xx|成功
    // |3xx|重定向，缓存
    // |4xx|客户端出问题
        // 404连接写错，服务器上没有此资源，前端出问题
    // |5xx|服务器出问题，后端出问题

    // createServer方法用于创建服务器，让js变成真正的后端语言（服务器是后端最大的标志）



    // PHP解决跨域
    // header('Access-Control-Allow-Origin:*');
    // node 解决跨域
    // req对应是前端给我的后端
    // res我后端给前端的

        // 控制响应头  给前端带东西
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('name', 'zz');
        // 控制响应体
        // res.end("hello,world");//访问服务器显示

    var {
        createServer
    }=require('http');
    createServer((req,res)=>{
        res.end("hello,world");
    }).listen(12345);//端口号一般选择大于4000，最大不要超过65536
    console.log('启动服务器');