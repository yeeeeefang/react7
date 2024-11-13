import { useState } from "react"

function App() {
  //定義變數name與setName方法
  const [name, setName] = useState('Dubi');

  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <h1>設計一個輸入名字的欄位，並且即時顯示出來</h1>
      <hr />
      <h3>目前文字方塊的內容:{name}</h3>
      請輸入姓名:<input type="text" value={name} onChange={(e) => {
        setName(e.target.value);
      }} />
      <br />
      請輸入姓名2:<input type="text" value={name} onChange={changeName} />


      
    </>
  )
}
export default App