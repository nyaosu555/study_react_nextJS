import Image from 'next/image'
import styles from 'src/components/Main/Main.module.css'
import { Inter } from 'next/font/google'
import { Links } from "src/components/Links"
import { Headline } from 'src/components/Headline'


const inter = Inter({ subsets: ['latin'] })


export function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline
          page={props.page}
          // number={111}
          // array={[1, 2, 3]}
          // obj={{id:1, name:"Jone"}}
          // boolean
          // code={<code className={styles.code}>src/pages/index.js</code>}
          // onClick={()=>alert('クリック')}
        >
          <code className={styles.code}>src/pages/{props.page}.js</code>
        </Headline>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <Links />

      </main>
    </>
  )
}
