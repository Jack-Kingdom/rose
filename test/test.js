const mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit: 25,
    host: 'localhost',
    user: 'root',
    password: 'qiaohong',
    database: 'rose'
});

pool.query('INSERT account VALUE (NULL, \'sdfjlsjfklsdjfl\', \'email@qiaohong.org\', \'qiaohong\', \'Jack\',\'master\',FALSE, NULL, NULL, NULL);', function (error, results, fields) {
    if (error) throw error;

    // console.log('----------');
    // console.log(results);
    // console.log('----------');
    // console.log(results[0].username);
    // console.log('-------');
    console.log(fields);
});