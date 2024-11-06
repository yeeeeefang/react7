
//建立新的元件
function MyComponent() {
  /* return 後面一定要加東西 不然就會直接結束 */
  /* 空標籤: Fragment */
  return (
    <>
      <h1>早午餐我是元件2</h1>
      <p>gyfehbudhjfhvbhhuidjdhfbhuidjdfhvuidfvfhbuuhfuih</p>
    </>
  )
}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}
//要被別的地方做使用 要打這句
export default App
