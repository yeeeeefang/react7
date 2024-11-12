


function App() {
  //建立物件變數
  const person = {
    name: "王曉明",
    age: 10,
  }
  {/* 物件解構寫法 */}
  const {name,age}=person;
  console.log(name,age);

  return (
    <>
    {/* 一般寫法 */}
    <div>姓名:{person.name}</div>
    <div>年齡:{person.age}</div>
    <hr />
    <div>{`姓名:${person.name}`}</div>
    <div>{`年齡:${person.age}歲`}</div>
    <hr />
    <div>解構後的姓名:{name}</div>
    <div>解構後的年齡:{age}</div>
    </>
  )
}
//要被別的地方做使用 要打這句
export default App
