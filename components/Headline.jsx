import styles from '@/styles/Home.module.css'


export default function Headline({page}) {
  return (
    <>
        <h1 className={styles.title}>{page} page</h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/{page}.js</code>
          </p>
        </div>
    </>
  )
}
