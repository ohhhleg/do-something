var mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'student'
});

pool.getConnection(function(err,connection){
    if (err) throw err;

    connection.query('SELECT * FROM student', function (error, results, fields) {
        console.log(results);
        // When done with the connection, release it.
        connection.release();//释放，不是中断
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
    });
});