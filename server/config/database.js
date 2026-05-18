const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'project-db-campus.smhrd.com',
    user : 'cloud_study_teacher_KJY',
    password : 'smhrd', 
    port : 3307,
    database : 'cloud_study_teacher_KJY'
})

conn.connect()
module.exports = conn;