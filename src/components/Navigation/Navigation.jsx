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
      <div className={styles['nav']}>
        <h2 className={styles['heading-all-boards'] + ' | color-gray-3'}>
          All Boards (3)
        </h2>

        {/* Board List */}
        <ul className={styles['board-list']}>
          <li className={styles['board-item']} data-active="false">
            <button className="color-gray-3 fw-700">
              {/* TODO: set alt property to board name */}
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828FA3"
                />
              </svg>
              <span>Platform Launch</span>
            </button>
          </li>
          <li className={styles['board-item']} data-active="true">
            <button className="color-gray-3 fw-700">
              {/* TODO: set alt property to board name */}
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828FA3"
                />
              </svg>
              <span>Platform Launch</span>
            </button>
          </li>
          <li className={styles['board-item']} data-type="new-board">
            <button className="color-gray-3 fw-700">
              {/* TODO: set alt property to board name */}
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828FA3"
                />
              </svg>
              <span>+ Create New Board</span>
            </button>
          </li>
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
