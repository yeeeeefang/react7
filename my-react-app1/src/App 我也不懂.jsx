function App() {
    //建立物件變數
    // const person = {
    //   s1: {
    //     name: "王曉明",
    //     age: 10,
    //   },
    //   s2: {
    //     name: "王曉小",
    //     age: 18,
    //   },
    //   s3: {
    //     name: "陳曉明",
    //     age: 20,
    //   },

    const person = {

        name: "王曉明",
        age: 10,

    }
    {/* 多筆資料的物件解構方法一:一般寫法*/ }
    // const { s1, s2, s3 } = person

    /* 多筆資料的物件解構方法二:解構+展開...(其餘運算子) */
    //解構s1，展開s2,s3
    // const{s1,...other}=person;
    // console.log(s1);
    // console.log(other);

    // function showName(obj){
    //   console.log(obj);
    //   console.log(obj.name);
    //   console.log(obj.age);
    // }


    //將物件屬性直接解構給函式參數
    function showName({ name, age }) {
        console.log(name);
        console.log(age);
    }
    showName(person);



    return (
        <>
            {/* <div>第一位姓名:{s1.name}</div>
      <div>第一位年紀:{s1.age}</div>
      <hr />
      <div>第二位姓名:{s2.name}</div>
      <div>第二位年紀:{s2.age}</div>
      <hr />
      <div>第三位姓名:{s3.name}</div>
      <div>第三位年紀:{s3.age}</div> */}

            {/* 
      <div>{`同學1姓名:${s1.name}`}</div>
      <div>{`同學3姓名:${other.s3.name}`}</div> */}
        </>
    )
}
//要被別的地方做使用 要打這句
export default App

