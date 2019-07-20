const{
    find,
    del,
    updata,
    insert
}=require("./db");
// 增
let result= insert('student',{
    name:'cheung',
    id:8 
});
//查
let result2= find('student',{
    id:4 
});
//删
let result3= del('student',{
    id:8 
});
//改
let result4= updata('student',{
    name:'ohhhleg',
    id:7 
});
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);