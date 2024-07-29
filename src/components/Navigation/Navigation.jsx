import styles from './navigation.module.css'
import iconBoard from '/icon-board.svg'
import iconShowSidebar from '/icon-show-sidebar.svg'
import iconHideSidebar from '/icon-hide-sidebar.svg'

const Navigation = ({ isNavOpen, handleToggleNav }) => {
  return (
    <nav
      className={styles['nav-container'] + ' bg-primary-3'}
      data-open={isNavOpen}
    >
      <div className={styles['nav']} data-open={isNavOpen}>
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
          <button
            className={styles['hide-sidebar-container']}
            onClick={handleToggleNav}
          >
            <p>Hide Sidebar</p>
          </button>
        </div>
      </div>
      <button
        className={styles['nav-control'] + ' bg-purple-4'}
        onClick={handleToggleNav}
      >
        <img src={iconShowSidebar} alt="hide sidebar" />
      </button>
    </nav>
  )
}

export default Navigation
