import Image from 'next/image'
import styles from 'src/components/Main/Main.module.css'
import { Inter } from 'next/font/google'
import { Links } from "src/components/Links"
import { Headline } from 'src/components/Headline'
import { useCallback, useState } from 'react'

const ITEMS = [
  {
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Docs <span>-&gt;</span>',
    description: 'Find in-depth information about Next.js features and API.'
  },
  {
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Learn <span>-&gt;</span>',
    description: 'Learn about Next.js in an interactive course with quizzes!'
  },
  {
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Templates <span>-&gt;</span>',
    description: 'Discover and deploy boilerplate example Next.js rojects.'
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy <span>-&gt;</span>',
    description: 'Instantly deploy your Next.js site to a shareable URLwith Vercel.'
  },
]

const inter = Inter({ subsets: ['latin'] })


export function Main(props) {

  const [items, setItems] = useState(ITEMS); 

  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    })
  }, []);

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
          handleReduce={handleReduce}
        >
          <code className={styles.code}>src/pages/{items.length}</code>
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

        <Links items={items} />

      </main>
    </>
  )
}
