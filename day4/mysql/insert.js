var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
});

pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    // Use the connection
    // INSERT INTO students SET name = '琳姐'
    // 因为字符串拼接


    // connection.query('INSERT INTO student SET ?', [{
    //     name: 'cheung'
    // }],
    connection.query('SELECT *FROM student WHERE ?', [{
        id:4
    }],
    function (error, results, fields) {
        console.log(results);
        // When done with the connection, release it.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
    });
});