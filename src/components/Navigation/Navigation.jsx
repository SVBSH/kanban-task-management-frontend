import styles from './navigation.module.css'
import iconBoard from '/icon-board.svg'
import iconShowSidebar from '/icon-show-sidebar.svg'
import iconHideSidebar from '/icon-hide-sidebar.svg'
import iconThemeLight from '/icon-light-theme.svg'
import iconThemeDark from '/icon-dark-theme.svg'

const Navigation = ({ isNavOpen, handleToggleNav }) => {
  return (
    <nav
      className={styles['nav-container'] + ' bg-primary-3'}
      data-open={isNavOpen}
    >
      <div className={styles['nav']} data-open={isNavOpen}>
        <h2 className="heading-all-boards">All Boards (3)</h2>

        {/* Board List */}
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
          {/* Theme Switch */}
          <div className={styles['theme-switch-container'] + ' bg-primary-1'}>
            <img src={iconThemeLight} alt="theme light" />
            <button
              className={styles['theme-switch'] + ' bg-purple-4'}
            ></button>
            <img src={iconThemeDark} alt="theme dark" />
          </div>

          {/* Hide Sidebar */}
          <button
            className={styles['hide-sidebar-container']}
            onClick={handleToggleNav}
          >
            <img src={iconHideSidebar} alt="hide sidebar" />
            <span className="color-gray-3 fw-700">Hide Sidebar</span>
          </button>
        </div>
      </div>

      {/* Dosktop - Nav Control */}
      <button
        className={styles['nav-control'] + ' | bg-purple-4'}
        onClick={handleToggleNav}
      >
        <img src={iconShowSidebar} alt="hide sidebar" />
      </button>
    </nav>
  )
}

export default Navigation
