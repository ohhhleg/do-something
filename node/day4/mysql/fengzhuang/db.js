var mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'student'
});

const getConnection=()=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if (err){
                reject(err);
                 throw err;
                }else{
                resolve(connection);
                }
        });
    })
}
const query=(connection,sql,params)=>{
    return new Promise((resolve,reject)=>{
        connection.query(sql,[params ? params:''], function (error, results, fields) {
            console.log(results);
            // When done with the connection, release it.
            connection.release();//释放，不是中断
            // Handle error after the release.
            if (error) {
                reject(error);
                throw error;
            }else{
                resolve(results);
            }
            // Don't use the connection here, it has been returned to the pool.
        });
    })
}   
// const db=async()=>{
//    //得到连接
//    const connection= await getConnection();
//    const results=await query(connection);
// }

// 查 SELECT * FROM student where id=xx
const find=async(table,params)=>{
    const connection =await getConnection();
    if(params){
        return await query(connection, `SELECT * FROM ${table} WHERE ?`, params);
    } else {
        return await query(connection, `SELECT * FROM ${table}`, null);
    }
}
// 删 DELETE FROM student where id=xx
const del=async(table,params)=>{
    const connection =await getConnection();
    if(params){
        return await query(connection, `DELETE FROM ${table} WHERE ?`, params);
    } else {
        return await query(connection, `DELETE FROM ${table}`, null);
    }
}
// 改 UPDATE student SET name = 'xx' WHERE id = 4
const updata=async(table,params)=>{
    const connection =await getConnection();
    // console.log([params.name, params.id]);
    if(params){
        return await query(connection, `UPDATE ${table} SET name='${params.name}' where id=${params.id}`);
    }
    //  else {
    //     return await query(connection, `UPDATE ${table}`, null);
    // }
}
// 增 INSERT INTO student(name, id) VALUES(xx, xx)
const insert=async(table,params)=>{
    const connection =await getConnection();
    if(params){
        return await query(connection, `INSERT INTO ${table}(name,id) VALUES ('${params.name}',${params.id})`);
    } else {
        return await query(connection, `INSERT INTO ${table}`, null);
    }
}
module.exports={
    // db
    find,
    del,
    updata,
    insert
}

