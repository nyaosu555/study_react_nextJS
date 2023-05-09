import parse from 'html-react-parser'
import { Inter } from 'next/font/google'
// import { useCallback, useState } from 'react'
import styles from 'src/components/Links/Links.module.css'

const inter = Inter({ subsets: ['latin'] })

// const ITEMS = [
//   {
//     href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
//     title: 'Docs <span>-&gt;</span>',
//     description: 'Find in-depth information about Next.js features and API.'
//   },
//   {
//     href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
//     title: 'Learn <span>-&gt;</span>',
//     description: 'Learn about Next.js in an interactive course with quizzes!'
//   },
//   {
//     href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
//     title: 'Templates <span>-&gt;</span>',
//     description: 'Discover and deploy boilerplate example Next.js rojects.'
//   },
//   {
//     href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
//     title: 'Deploy <span>-&gt;</span>',
//     description: 'Instantly deploy your Next.js site to a shareable URLwith Vercel.'
//   },
// ]

export const Links = ({ items }) => {
  
  // const [items, setItems] = useState(ITEMS); 

  // const hendleReduce = useCallback(() => {
  //   setItems(prevItems => {
  //     return prevItems.slice(0, prevItems.length - 1);
  //   })
  // }, []);


  return (
    <>
      <div className={styles.grid}>
        {/* {ITEMS.map((item, index) => { */}
        {items.map((item, index) => {
          return (
            <a
              // key={item.href}
              key={index}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={styles.title}>
                {parse(item.title)}
              </h2>
              <p className={styles.description}>
                {item.description}
              </p>
            </a>
          )
        })}

      </div>
    </>
  )
}
