import Head from 'next/head'
import 'src/styles/globals.css'
import { useCouter } from 'src/hooks/useCouter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgColor } from 'src/hooks/useBgColor'

// export default function App({ Component, pageProps }) {
const App = ({ Component, pageProps }) => {

  // const { count, isShow, handleClick, handleDisplay } = useCouter();
  // const { text, array, handleChange, handleAdd } = useInputArray();
  const counter = useCouter();
  const inputArray = useInputArray();

  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter } {...inputArray} />
    </>
  )
}

export default App