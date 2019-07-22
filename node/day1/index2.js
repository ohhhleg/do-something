// module.exports=xxx;引出js(模块)-------------------------------
function a(a,b){
    return a*b;
}

function b(a,b){
    return a/b;
}

//导出对象，建议使用导出对象（面向对象编程），也建议写在最后一行------
// 对象---------------------
// module.exports={a,b}

// 函数
// module.exports=a;
// module.exports=b;

//数组----------------------
// module.exports=[a,b];