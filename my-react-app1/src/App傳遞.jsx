//傳遞組件
//把組件放到另外一個組件的內容裡面
//這種寫法在react 中叫做組合(composition)
//此方法在不影響組件功能的基礎上，別再給組件加入額外的功能
function SecondComponent() {
  return <>
    <h1>我是SecondComponent組件</h1>
  </>

}

//子組件
function MyComponent({children}) {
  // return <>
  //   {children}
  // </>
  return <>
    我是MyComponent組件
    {children}
  </>

}

//父組件
function App() {

  return (
    <>
    {/*<MyComponet childre = {<SecondComponent />}/> */}
      <MyComponent>
        {/* 因為children是react內建的屬性，所以傳送組件時，可以不用寫children 屬性 */}
        <SecondComponent />
      </MyComponent>
    </>
  )
}
//要被別的地方做使用 要打這句
export default App
