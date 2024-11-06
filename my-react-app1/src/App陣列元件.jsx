function Component() {
    return <h1>React</h1>
}

function App() {

    //建立陣列{可以是任何形式資料=>元件
    //同一個陣列中，key屬性的值不可重複
    //元件旁邊可建立屬性
    const listItem = [
        <Component key="0" />,
        <Component key="1" />,
        <Component key="2" />,
    ]

    const listBook = [
        { bookName: "HTML", id: "book1" },
        { bookName: "CSS", id: "book2" },
        { bookName: "JavaScript", id: "book3" },
    ]

    //過濾出陣列中，除了CSS的書本
    const filterBooks = listBook.filter((book) => {
        // if(book.bookName !=="CSS"){
        //   return true
        // }

        //三元運算子的判斷式(能用在單層判斷)
        //判斷式 ?條件成立  :條件不成立
        return book.bookName !== 'CSS' ? true : false


    })
    return (
        <>
            {/* 使用陣列方法1 */}
            {listItem}
            <hr />
            {/* 使用陣列方法2=>map()=>此方法可以把一個陣列轉換成另一個陣列 */}
            {
                listBook.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />
            {/* 使用filter()過濾陣列元素 */}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }

        </>
    )
}
//要被別的地方做使用 要打這句
export default App
