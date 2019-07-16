var step = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(6)
            resolve()
        }, 1000)
    })
}

var step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(7)
            resolve()
        }, 2000)
    })
}

var step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(233)
            resolve(55555)
        }, 1000)
    })
}


(async()=>{
    console.log(0);
    // 该异步会被暂停
    await step();
    await step2();
    console.log(4444);
    var num =await step3();
    console.log(79);
    console.log(num);
})()