import { useState } from "react"
import axios from 'axios'

function App() {

  const [data, setData] = useState('')
  const [obj, setObj] = useState({})

  const sendToServer = ()=>{
    console.log('sendToServer', data)

    // front 데이터를 server로 전송 
    axios.post('http://localhost:3000/getData', {
      data : data
    }).then(res => {
      console.log('res', res.data)
      setObj(res.data)
    })
  }
  return (
    <>
      <h1>
        <p>Client에서 Server로 데이터 전송하기</p>
        <input type="text" onChange={(e)=>{setData(e.target.value)}}></input>
        <button onClick={sendToServer}>전송</button>
        <hr/>
        <p>Server에서 Client로 넘어온 데이터</p>
        {obj.status == 200 &&
         <p>{obj.nick} 님 환영합니다.</p>
        }
      </h1>
    </>
  )
}

export default App
