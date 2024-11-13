/* 特色資料區 */
function ShowContent({ arrData }) {
    return (
        <>
            {
                arrData.map((item) => {
                    return (
                        < div className='f1' key={item.id}>
                            <h3>{item.fName}</h3>
                            <p>{item.fText}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowContent
