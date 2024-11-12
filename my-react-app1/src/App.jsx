// import { Component } from "react"
import './App.css';

function App() {

  const feature = {
    s1: { fName: "教學影音", fText: "教學影音教學影音教學影音" },
    s2: { fName: "良性互動", fText: "良性互動良性互動良性互動" },
    s3: { fName: "趨勢分享", fText: "趨勢分享趨勢分享趨勢分享" },
  }
  const { s1, s2, s3 } = feature;

  return (
    <>
      <div className="wrap">
        {/* banner */}
        <header>
          <img src="../images/banner.jpg" alt="banner"
            width={"100%"}  />
        </header>

        {/* 特色區 */}
        <div id='main'>
          <div className='featureArea'>
            <div className='f1'>
              <h3>{s1.fName}</h3>
              <p>{s1.fText}</p>
            </div>
            <div className='f2'>
              <h3>{s2.fName}</h3>
              <p>{s2.fText}</p>
            </div>
            <div className='f2'>
              <h3>{s3.fName}</h3>
              <p>{s3.fText}</p>
            </div>
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
            <div className='box1'>
              <img src="images/unity.jpg" alt="unity" />
              <h4>Unity 5</h4>
              <p id='font'>最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲</p>
              <p>講師:XXX</p>
              <p>影音課程時數:4小時</p>
              <h5><span>原價NT$1600</span>NT$1200</h5>
              <button className='btn'>付款去上課</button>
            </div>
            <div className='box1'>
              <img src="images/gamesalad.jpg" alt="unity" />
              <h4>Unity 5</h4>
              <p id='font'>最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲</p>
              <p>講師:XXX</p>
              <p>影音課程時數:4小時</p>
              <h5><span>原價NT$1600</span>NT$1200</h5>
              <button className='btn'>付款去上課</button>
            </div>
            <div className='box1'>
              <img src="images/gwd.jpg" alt="unity" />
              <h4>Unity 5</h4>
              <p id='font'>最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲</p>
              <p>講師:XXX</p>
              <p>影音課程時數:4小時</p>
              <h5><span>原價NT$1600</span>NT$1200</h5>
              <button className='btn'>付款去上課</button>
            </div>
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

