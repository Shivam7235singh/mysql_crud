const mysql = require('mysql2/promise');

const  db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Shivam@041',
    database : "student_db",
})



module.exports = db;