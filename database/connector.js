const mysql = require('mysql');

    //connect กับ database
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'MVC_2023',
        port: 3306,
        user: 'root',
        password: 'bew224002544'
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;