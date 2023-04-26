import styles from 'src/components/Footer/Footer.module.css'
import Image from 'next/image'



export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src='/vercel.svg'
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </>
  )
}
