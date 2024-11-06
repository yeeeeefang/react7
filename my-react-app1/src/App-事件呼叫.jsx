
function App() {

  /* 建立函式方法1 */
  function sayHi() {
    alert('Hello')
  }

  /* 建立函式方法2 */
  const sayHi2=()=>{
    alert('Hello')
  }

  return (
    <div>
      {/* 事件處理1:在HTML標籤上綁定事件*/}
      {/* 匿名函式寫法 */}
      <button onClick={function () { alert('噢嗚我被按了一下') }}>我是按鈕1</button>
      {/* 箭頭函式 */}
      <button onClick={() => { alert('噢嗚我被按了一下') }}>我是按鈕2</button>
      {/* 事件處理2:呼叫函式*/}
      {/* 等待被呼叫的函式，函式名稱後面不可以加上()，因為會直接執行 */}
      <button onClick={sayHi}>按鈕3</button>
      <button onClick={sayHi2}>按鈕4</button>
    </div>
  )
}
//要被別的地方做使用 要打這句
export default App
