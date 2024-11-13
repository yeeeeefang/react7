import './App.css';
import ShowContent from './ShowContent.jsx';
import ShowContent2 from './ShowContent2.jsx';


function App() {
  //特色區資料
  const feature = [
    { id: 1, fName: "教學影音", fText: "教學影音教學影音教學影音教學影音教學影音教學影音教學影音教學影音教學影音教學影音教學影音教學影音" },
    { id: 2, fName: "良性互動", fText: "vsevue;hsvskhvieh;ieoijwew" },
    { id: 3, fName: "趨勢分享", fText: "fwevuluhe;voshdhvuhevub;svowh;hwqe" },
  ]


  return (
    <>
      <div className="wrap">
        {/* banner */}
        <header>
          <img src="../images/banner.jpg" alt="banner"
            width={"100%"} />
        </header>

        {/* 特色區 */}
        <div id='main'>
          <div className='featureArea'>
            <ShowContent arrData={feature} />
            {/* 資料沒放在一起就要傳參數 */}
          </div>

        </div>

        {/* 主標 */}
        <div className='sologan'>
          <h2>讓學習成為一種習慣</h2>
        </div>
        {/* 推薦課程 */}
        <div className='main2'>
          <h3>推薦課程</h3>
          <div className='bigBox'>
            <ShowContent2  />
          </div>
        </div>
        {/* 頁尾 */}
        <footer>
          <p>@yifang 2024.11</p>
        </footer>
      </div >
    </>
  )
}
//要被別的地方做使用 要打這句
export default App

