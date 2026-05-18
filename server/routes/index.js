const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/database')

// 메인 페이지
router.get('/', (req,res)=>{
    console.log('서버 접근!')
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// 데이터 받아올 부분 
router.post('/getData', (req,res)=>{
    console.log('getData Router', req.body)

    // 한 줄 추가해서 받을 이름 넣기
    const clientName = req.body.data;

    // nick 데이터를 DB에 넣어보자! 
    let sql =  "INSERT INTO DATA_TABLE VALUES (?)"
    
    conn.query(sql, [req.body.data], (err,rows)=>{
        console.log('rows', rows)
        if (rows) {
            // 요청에 대한 응답을 프론트로 
            // 기모넹 지우고 클라이언트네임 넣기
            res.json({status : 200, nick : clientName})
        } else {
            res.json({status : 500})
        }
    })



})

module.exports = router;