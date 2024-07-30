import { useState } from 'react'

import styles from './header.module.css'
import iconSidebarVisible from '/icon-chevron-up.svg'
import iconSidebarHidden from '/icon-chevron-down.svg'
import iconAddNewTask from '/icon-add-task-mobile.svg'
import logoMobile from '/logo-mobile.svg'
import logoDesktop from '/logo-dark.svg'

const Header = ({ isNavOpen, handleToggleNav }) => {
  const [boardControlMenuOpen, setBoardControlMenuOpen] = useState(false)

  function handleBoardControlMenuOpen() {
    setBoardControlMenuOpen((boardControlMenuOpen) => !boardControlMenuOpen)
  }

  return (
    <header className={styles.header + ' bg-primary-3'}>
      <picture className="logo | bg-primary-3" data-is-nav-open={isNavOpen}>
        <source srcSet={logoDesktop} media="(min-width: 768px)" />
        <img src={logoMobile} alt="logo" />
      </picture>
      <h1 className="clr-primary-2" style={{ fontSize: '18px' }}>
        Platform Launch
      </h1>

      {/* Control Sidebar Visibility */}
      <div
        className={styles['navbar-mobile-control']}
        data-navOpen={isNavOpen}
        onClick={handleToggleNav}
      >
        <img
          className={!isNavOpen && styles['hidden']}
          src={iconSidebarVisible}
          alt="Sidebar Visible"
          data-sidebarVisible
        />
        <img
          className={isNavOpen && styles['hidden']}
          src={iconSidebarHidden}
          alt="Sidebar Hidden"
          data-sidebarHidden
        />
      </div>

      <div className={styles['new-task-container']}>
        <button
          className={
            styles['add-new-task-button-lg'] + ' bg-purple-4 clr-white'
          }
        >
          + Add New Task
        </button>
        <button
          className={
            styles['add-new-task-button-sm'] + ' bg-purple-4 clr-white'
          }
        >
          <img src={iconAddNewTask} alt="Add New Task" />
        </button>
      </div>

      {/* TODO: Create a separate component for the board control */}
      <div
        className={styles['board-control']}
        data-menu-open={boardControlMenuOpen}
      >
        <button className="clr-gray-4" onClick={handleBoardControlMenuOpen}>
          {/* <img src={iconBoardControl} alt="Board Control" /> */}
        </button>
        <ul
          role="list"
          className={
            styles['board-control-menu'] +
            ' | bg-primary-4' +
            (!boardControlMenuOpen ? ' ' + styles['hidden'] : '')
          }
        >
          <li className={styles['board-control-menu-item']}>
            <button className="color-gray-3 fw-500">Edit Board</button>
          </li>
          <li className={styles['board-control-menu-item']}>
            <button className="clr-red-4 fw-500">Delete Board</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
