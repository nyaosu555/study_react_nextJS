import styles from 'src/components/Header/Header.module.css'
import Link from 'next/link'

const NAV_ITEMS = [
  {href: '/', label: 'Index'},
  {href: '/about', label: 'About'},

]

// export function Header() {
export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map(item => {
        return (
          <Link href={item.href} legacyBehavior key={item.href}>
          <a className={styles.anchor}>{item.label}</a>
          </Link>
        )
      })}
      {/* <Link href="/" legacyBehavior>
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={styles.anchor}>About</a>
      </Link> */}
    </header>
  )
}
