import styles from './taskGroup.module.css'
import TaskList from '../TaskList/TaskList'
const TaskGroup = (props) => {
  return (
    <div className={styles['task-group-container']}>
      <ul className={styles['task-group-list']} role="list">
        <li className={styles['task-group-item']}>
          <h2>TODO (4)</h2>
          <TaskList />
        </li>
        <li className={styles['task-group-item']}>
          <h2>TODO (4)</h2>
          <TaskList />
        </li>
        <li className={styles['task-group-item']}>
          <h2>TODO (4)</h2>
          <TaskList />
        </li>
        <li className={styles['task-group-item']}>
          <h2>TODO (4)</h2>
          <TaskList />
        </li>
      </ul>
    </div>
  )
}

export default TaskGroup
