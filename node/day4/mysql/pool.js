var mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'student'
});

pool.query('SELECT * FROM student',function(error,results,fields){
    if(error) throw error;
    console.log('The solution is:',results);
});