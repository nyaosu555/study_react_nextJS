import styles from 'src/components/Headline/Headline.module.css'


export function Headline(props) {

  return (
    <>
        <h1 className={styles.title}>{props.page} page</h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            {/* {props.code} */}
            {props.children}
          </p>
        </div>

        <button
          className={styles.button}
          onClick={props.onClick}
        >
          ボタン
        </button>
    </>
  )
}
