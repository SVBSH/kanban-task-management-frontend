import styles from './task.module.css'

const Task = ({ title, description, status, subtasks }) => {
  return (
    <li className={styles['task-item'] + ' bg-primary-3'}>
      <h3 className="clr-primary-2">{title}</h3>
      <p className="color-gray-3 fw-700">0 of 3 subtasks</p>
    </li>
  )
}

export default Task
