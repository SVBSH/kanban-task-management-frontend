import styles from './task.module.css'

const Task = () => {
  return (
    <li className={styles['task-item']}>
      <h3>Build UI for onboarding flow</h3>
      <p>0 of 3 subtasks</p>
    </li>
  )
}

export default Task
