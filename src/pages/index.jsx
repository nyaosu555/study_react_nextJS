import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
// import { useCallback, useEffect, useState } from 'react'
// import { useCouter } from 'src/hooks/useCouter'
// import { useInputArray } from 'src/hooks/useInputArray'
// import { useBgLightblue } from 'src/hooks/useBgLightblue'

const inter = Inter({ subsets: ['latin'] })

// function handleClick(e, foo) {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// }


export default function Home(props) {
  console.log(props);
  
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // },[])

  // Custom Hooks
  // const useCouter = () => {
  //   const [count, setCount] = useState(1);
  //   const [isShow, setIsShow] = useState(true);

  //   const handleClick = useCallback((e) => {
  //     if(count < 10) {
  //       console.log(count);
  //       setCount(count => count +1);
  //       // setCount(count => count +1);
  //     }
  //   }, [count]);

  //   const handleDisplay = useCallback(() => {
  //     setIsShow(isShow => !isShow);
  //   }, []);

  //   return { count, isShow, handleClick, handleDisplay }
  
  // }

  // const useInputArray = () => {
  //   const [text, setText] = useState("");
  //   const [array, setArray] = useState([]);

  //   const handleChange = useCallback(e => {
  //     if(e.target.value.length > 5) {
  //       alert('5文字以内にしてください。');
  //       return;
  //     }
  //     setText(e.target.value.trim());
  //   }, []);
  
  //   const handleAdd = useCallback(() => {
  //     setArray((prevArray) => {
  //       if(text === '') {
  //         alert('1文字以上の文字を入れてください。')
  //         return prevArray;
  //       }
  //       if(prevArray.some(item => item === text)) {
  //         alert('同じ要素が既に存在しています。');
  //         return prevArray;
  //       }
  //       // const newArray = prevArray;
  //       // newArray.push(1);
  //       // const newArray = [...prevArray, text];
  //       // return newArray;
  //       return [...prevArray, text];
  //     })
  //     setText('');
  //   }, [text]);

  //   return { text, array, handleChange, handleAdd }
  
  // }

  // const useBgLightblue = () => {
  //   useEffect(() => {
  //     // console.log('まうんと時');
  //     // console.log(`マウント時：${count}`);
  //     document.body.style.backgroundColor = "lightblue";
      
  //     return () => {
  //       // console.log('あんまうんと時');
  //       // console.log(`アンマウント時：${count}`);
  //       document.body.style.backgroundColor = "";
  
  //     }
  //   }, []);
  // }

  // useStateを使う
  // const { count, isShow, handleClick, handleDisplay } = useCouter();
  // const { text, array, handleChange, handleAdd } = useInputArray();
  const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

  // useBgLightblue();
  
  // let foo = 1;
  
  // const handleClick = e => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  // }

  // const handleClick = (e) => {
  //   // setFoo(foo+1); 非推奨の書き方
  //   setCount(count => count + 1); //推奨されている書き方（countを受け取ってcountを返す）
  //   // setCount(count => count + 1); //推奨されている書き方（countを受け取ってcountを返す）
  //   // setCount(function(count) {
  //   //   return count + 1;
  //   // });
  //   // setCount = count + 1;
  // }

  // console.log(count);
  // console.log(text)
  // console.log(array);


  return (
    <>
      <Head>
        <title>Index Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <input type="text" value={text}
        // onChange={e => {
        //   if(text.length >= 5) {
        //     return;
        //   }
        //   setText(e.target.value)
        // }}
        onChange={handleChange}
      />

      {/* <h1>{count}</h1> */}
      {isShow ? <h1>{count}</h1> : null}
      <button 
          // onClick={props.onClick}
          // onClick={function() {
            // alert(123);
          // }}
          // onClick={e => {
          //   console.log(e.target.href);
          //   e.preventDefault();
          // }}
          onClick={handleClick}
          // onClick={function(e) {
          //   handleClick(e, foo)
          // }}
        >
          ボタン
        </button>
        <button
          // onClick={() => {
            // setIsShow(isShow => {
              // if(isShow) {
              //   return false;
              // }
              // return true;
              // return isShow ? false : true;
              // return !isShow;
            // });
            // setIsShow(isShow => !isShow);
          // }}
          onClick={handleDisplay}
          >
          {isShow ? `非表示` : `表示`}
        </button>
        <button
          onClick={handleAdd}
        >
          追加
        </button>

        <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </>
  )
}
