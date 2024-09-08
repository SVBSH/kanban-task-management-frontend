import { useState } from 'react'

import styles from './header.module.css'
import Modal from '../Modal/Modal'

import iconSidebarVisible from '/icon-chevron-up.svg'
import iconSidebarHidden from '/icon-chevron-down.svg'
import iconAddNewTask from '/icon-add-task-mobile.svg'
import logoMobile from '/logo-mobile.svg'
import logoDesktopDark from '/logo-dark.svg'
import logoDesktopLight from '/logo-light.svg'

import iconClose from '/icon-close.svg'

const FormNewTaskStatuses = ['Todo', 'Doing', 'Done']

const Header = ({ isNavOpen, handleToggleNav }) => {
  const [showModal, setShowModal] = useState(false)
  const [boardControlMenuOpen, setBoardControlMenuOpen] = useState(false)

  function handleBoardControlMenuOpen() {
    setBoardControlMenuOpen((boardControlMenuOpen) => !boardControlMenuOpen)
  }

  function handleShowModal() {
    setShowModal((prevState) => !prevState)
  }

  return (
    <header className={styles.header + ' bg-primary-3'}>
      {/* <picture className="logo | bg-primary-3" data-is-nav-open={isNavOpen}>
        <source srcSet={logoDesktopDark} media="(min-width: 768px)" />
        <img src={logoMobile} alt="logo" className='logoo' />
      </picture> */}
      <div className="logo">
        <svg className={styles['logo-desktop']} width="153" height="26" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
              <path
                  d="M44.56 25v-5.344l1.92-2.112L50.928 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8Zm19.36.384c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM81.968 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Zm24.16.384c1.707 0 3.232-.405 4.576-1.216a8.828 8.828 0 0 0 3.184-3.296c.779-1.387 1.168-2.923 1.168-4.608 0-1.707-.395-3.248-1.184-4.624a8.988 8.988 0 0 0-3.2-3.28c-1.344-.81-2.848-1.216-4.512-1.216-2.112 0-3.787.619-5.024 1.856V.776h-4.8V25h4.48v-1.664c.619.661 1.392 1.168 2.32 1.52a8.366 8.366 0 0 0 2.992.528Zm-.576-4.32c-1.301 0-2.363-.443-3.184-1.328-.821-.885-1.232-2.043-1.232-3.472 0-1.408.41-2.56 1.232-3.456.821-.896 1.883-1.344 3.184-1.344 1.323 0 2.41.453 3.264 1.36.853.907 1.28 2.053 1.28 3.44 0 1.408-.427 2.56-1.28 3.456-.853.896-1.941 1.344-3.264 1.344Zm17.728 4.32c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM141.328 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Z"
                  fill="#000112" fill-rule="nonzero" />
              <g transform="translate(0 1)" fill="#635FC7">
                  <rect width="6" height="25" rx="2" />
                  <rect opacity=".75" x="9" width="6" height="25" rx="2" />
                  <rect opacity=".5" x="18" width="6" height="25" rx="2" />
              </g>
          </g>
        </svg>
        <img src={logoMobile} alt="logo" className={styles['logo-mobile']} />

      </div>
      <h1 className="clr-primary-2">Platform Launch</h1>

      {/* Control Sidebar Visibility */}
      <div
        className={styles['navbar-mobile-control']}
        data-nav-open={isNavOpen}
        onClick={handleToggleNav}
      >
        <img
          className={!isNavOpen ? styles['hidden'] : ''}
          src={iconSidebarVisible}
          alt="Sidebar Visible"
          data-sidebar-visible
        />
        <img
          className={isNavOpen ? styles['hidden'] : ''}
          src={iconSidebarHidden}
          alt="Sidebar Hidden"
          data-sidebar-hidden
        />
      </div>

      <div className={styles['new-task-container']}>
        <button
          onClick={handleShowModal}
          data-type="primary"
          data-size="l"
          className={
            styles['add-new-task-button-lg'] + ' bg-purple-4 clr-white btn'
          }
        >
          + Add New Task
        </button>
        <button
          onClick={handleShowModal}
          className={
            styles['add-new-task-button-sm'] + ' bg-purple-4 clr-white'
          }
        >
          <img src={iconAddNewTask} alt="Add New Task" />
        </button>
        {showModal ? (
          <Modal openModal={showModal} onClose={handleShowModal}>
            <div className={styles['form-container']}>
              <div className={styles['heading-container']}>
                <h1>Add New Task</h1>
                <img src={iconClose} className={styles['close-modal']} alt="close modal" onClick={handleShowModal} />
              </div>
              <form
                className={styles['form']}
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const obj = {
                    title: formData.get('title') ?? '',
                    description: formData.get('description') ?? '',
                    taskStatus: formData.get('taskStatus') ?? '',
                  }
                  console.log(obj)
                  handleShowModal()
                }}
              >
                <div className={styles['form-row'] + ' '}>
                  <label htmlFor="title">Title</label>
                  <input
                    required
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. Build UI for onboarding."
                  />
                </div>
                <div className={styles['form-row'] + ' '}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    type="text"
                    name="description"
                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                  />
                </div>
                <div className={styles['form-row'] + ' '}>
                  <label htmlFor="subtasks">Subtasks</label>
                  <input type="text" name="subtasks" id="subtasks" />
                </div>
                <div className={styles['form-row'] + ' '}>
                  <label htmlFor="taskStatus">Status</label>
                  <select required name="taskStatus" id="taskStatus">
                    {FormNewTaskStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="btn" data-type="primary" data-size="l">
                  Create Task
                </button>
              </form>
            </div>
          </Modal>
        ) : null}
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
