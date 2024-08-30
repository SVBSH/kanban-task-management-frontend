import { useState } from 'react'

import styles from './header.module.css'
import Modal from '../Modal/Modal'

import iconSidebarVisible from '/icon-chevron-up.svg'
import iconSidebarHidden from '/icon-chevron-down.svg'
import iconAddNewTask from '/icon-add-task-mobile.svg'
import logoMobile from '/logo-mobile.svg'
import logoDesktop from '/logo-dark.svg'
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
      <picture className="logo | bg-primary-3" data-is-nav-open={isNavOpen}>
        <source srcSet={logoDesktop} media="(min-width: 768px)" />
        <img src={logoMobile} alt="logo" />
      </picture>
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
