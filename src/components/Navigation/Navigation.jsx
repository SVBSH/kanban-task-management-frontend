import styles from './navigation.module.css'

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav className={styles['nav']} data-open={isNavOpen}>
      <ul className={styles['board-list']}>
        <li className={styles['board-item']}>ahoj ja som svato</li>
        <li className={styles['board-item']}>123</li>
        <li className={styles['board-item']}>456</li>
        <li className={styles['board-item']}>789</li>
      </ul>
      <div className={styles['control']}>
        <div className={styles['theme-switch']}>Theme Switch</div>
        <div className={styles['hide-sidebar-container']}>
          <p>Hide Sidebar</p>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
