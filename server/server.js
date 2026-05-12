const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const path = require('path')

// cors 오류 해결 
const cors = require('cors')
app.use(cors())
app.use(express.json())

// post 방식 데이터를 주고받을 때 필요한 미들웨어 
app.use(express.urlencoded({extended : true}))


// npm run build 를 통해 React 프로젝트를
// 하나의 index.html 로 만들었음
//  => 그 파일을 키기 위해 정적인 파일을 담당하는 코드 
app.use(express.static(path.join('../client/dist')))

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 대기 중...`)
})