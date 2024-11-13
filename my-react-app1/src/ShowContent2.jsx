/* 課程介紹 */
function ShowContent2() {
    /* 如果把內容直接貼上來不用另外傳參數 */
    const courseItem = [
        {
            id: 1, imgURL: "images/unity.jpg", title: "Unity5", text: "最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲",
            teacher: "講師:XXX", hour: "影音課程時數:4小時", price: "原價NT$1600", newPrice: "NT$1200", btn: "付款去上課"
        },
        {
            id: 2, imgURL: "images/gamesalad.jpg", title: "GameSalad 2D遊戲製作", text: "最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲",
            teacher: "講師:XXX", hour: "影音課程時數:4小時", price: "原價NT$3200", newPrice: "NT$1600", btn: "付款去上課"
        },
        {
            id: 3, imgURL: "images/gwd.jpg", title: "Google Web Design", text: "最新的Unity公開課程，讓你一步一步做出自己的心中理想遊戲",
            teacher: "講師:XXX", hour: "影音課程時數:4小時", price: "原價NT$3200", newPrice: "NT$1600", btn: "付款去上課"
        },
    ]
    return (
        <>
            {
                courseItem.map((item) => {
                    return (
                        <div className='box1' key={item.id}>
                            <img src={item.imgURL} alt="" />
                            <p id='font'>{item.text}</p>
                            <p>{item.teacher}</p>
                            <p>{item.hour}</p>
                            <h5><span>{item.price}</span>{item.newPrice}</h5>
                            <button className='btn'>{item.btn}</button>
                        </div>
                    )
                })

            }
        </>
    )
}

export default ShowContent2
