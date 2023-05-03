import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// function handleClick(e, foo) {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// }


export default function Home() {
  
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // },[])

  const [count, setCount] = useState(1);
  
  // let foo = 1;
  
  // const handleClick = e => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  // }

  const handleClick = (e) => {
    // setFoo(foo+1); 非推奨の書き方
    setCount(count => count + 1); //推奨されている書き方（countを受け取ってcountを返す）
    // setCount(count => count + 1); //推奨されている書き方（countを受け取ってcountを返す）
    // setCount(function(count) {
    //   return count + 1;
    // });
    // setCount = count + 1;
  }

  useEffect(() => {
    // console.log('まうんと時');
    document.body.style.backgroundColor = "lightblue";
    
    return () => {
      // console.log('あんまうんと時');
      document.body.style.backgroundColor = "";

    }
  }, []);

  console.log(count);


  return (
    <>
      <Head>
        <title>Index Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <h1>{count}</h1>
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
      <Main page="index" />

      <Footer />
    </>
  )
}