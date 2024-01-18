import Image from 'next/image'
import styles from './header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <Image
        src='/motorola-solutions-logo.svg' alt='Motorola Solutions logo'
        width={56}
        height={48}
      />
      <h1>
        Dashboard
      </h1>
      <div className={styles.invisible} />
    </header>
  )
}
