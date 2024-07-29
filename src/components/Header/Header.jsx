import styles from './header.module.css'

const Header = ({ handleToggleNav }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-logo']}>Logo</div>
      <button onClick={handleToggleNav}>Toggle Navbar</button>
    </header>
  )
}

export default Header
