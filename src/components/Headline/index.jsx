import styles from 'src/components/Headline/Headline.module.css'


export const Headline =(props) => {

  return (
    <>
        <h1 className={styles.title}>{props.page} page</h1>
        <div className={styles.description}>
          <p>
            {/* Get started by editing&nbsp; */}
            {/* {props.code} */}
            {/* {props.children} */}
            アイテムの数は{props.children}個です。
          </p>
          <button onClick={props.handleReduce}>減らす</button>
        </div>
    </>
  )
}
