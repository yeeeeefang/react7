
//陣列解構
//建立陣列
const arr1 = ['p1', 'p2', 'p3']

//陣列解構 中括號 物件是大括號
const [pNo1, pNo2, pNo3] = arr1;


function App() {
    return (
        <>
            {/* 一般寫法 */}
            <p>陣列值1:{arr1[0]}</p>
            <p>陣列值1:{arr1[1]}</p>
            <p>陣列值1:{arr1[2]}</p>
            <hr />
            {/* 解構寫法 */}
            <p>陣列值1:{pNo1}</p>
            <p>陣列值1:{pNo2}</p>
            <p>陣列值1:{pNo3}</p>
        </>
    )
}
//要被別的地方做使用 要打這句
export default App
