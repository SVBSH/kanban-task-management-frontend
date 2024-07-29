import styles from './navigation.module.css'
import iconBoard from '/icon-board.svg'

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav className={styles['nav']} data-open={isNavOpen}>
      <h2 className="heading-all-boards">All Boards (3)</h2>
      <ul className={styles['board-list']}>
        <li className={styles['board-item']}>
          <button className="">
            {/* TODO: set alt property to board name */}
            <img src={iconBoard} alt="board" />
            <span>Platform Launch</span>
          </button>
        </li>
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
