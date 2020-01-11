const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: '6pDXtoGkRl',
    database: '6pDXtoGkRl',
    password: 'UhCv90NFR9'
});

module.exports = pool.promise();