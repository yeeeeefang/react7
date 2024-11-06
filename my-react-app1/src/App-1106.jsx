//導入外部CSS檔案
import "./App.css";


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
    //建立變數
    const strName = "dubi";
    return (
        <div>
            {/* JSX中使用js變數，前後加大括號{變數名稱} */}
            <h1 style={{
                color: 'red',
                backgroundColor: 'yellow',
                width: '300px',
            }}>{strName.toLocaleUpperCase()}午安</h1>
            {/* 屬性中使用變數 */}
            {/* label套用CSS(unLineColor) */}
            <label className="unLineColor" htmlFor="userName">請輸入姓名: </label>
            {/* placehoder=>提示字 */}
            <input type="text" id="userName" placeholder={strName} />
            {/* <MyComponent />  */}
        </div>
    )
}
//要被別的地方做使用 要打這句
export default App
