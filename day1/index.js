//写好js，交给node运行，文件后缀可以省略----------------
// console.log('soft,try me');


// CTRL+C，暂停你的代码------------------------
// var offset=1;
// setInterval(()=>{
//     console.log(offset++);
// },1000)


// require引入其他js（模块）建议写第一行----------------------
    // 对象--------------------------
    // var obj=require('./index2')
    // console.log(obj);
    // console.log(obj.a(22,33));
    // console.log(obj.b(4,2));

    // 函数---------------------------
    // var a =require('./index2')  
    // console.log(a(6,2));

    // 数组--------------------------
    // var arr =require('./index2') 
    // console.log(arr[0](4,5));
    // console.log(arr[1](9,2));


//fs模块---------------------------------------------------
    // 自己写的模块才需要写路径
    // var lj =require('./index2')

    // 原生模块不需要导出,自带的，引入模块名字即可
    //readFile 读取文件
    var fs=require('fs')
    // console.log(fs);

    // console.log(1);
    // 异步读取文件-----------------------
    fs.readFile('./yibu.txt',{
        encoding:'utf8',
        flag:'r'
    },(err,data)=>{
        console.log(data);//回调
    })

    // 同步读...以Sync结束都是同步方法，反之就是异步方法(async)
    // var data=fs.readFileSync('./yibu.txt',{
    //     encoding:'utf8',
    //     flag:'r'
    // },(err,data)=>{
    //     })
    // console.log(data);
    // console.log(2);


    // 回调地狱（回调嵌套）-----------------    
    // Promise解决
    // async 和 await 的写法


    //write 写入文件-----------------
    //const : 此声明创建一个常量
    // const{
    //     writeFile
    // }=require('fs')
    // writeFile('./yibu.txt','soft,try me',(err,data)=>{
    //     if(err){
    //         console.log('写入失败')
    //     }else{
    //         console.log('写入成功')
    //     }
    // })




