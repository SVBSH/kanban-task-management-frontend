import styles from './task.module.css'

const Task = () => {
  return (
    <li className={styles['task-item'] + ' bg-primary-3'}>
      <h3 className="clr-primary-2">Build UI for onboarding flow</h3>
      <p className="color-gray-3 fw-700">0 of 3 subtasks</p>
    </li>
  )
}

export default Task
