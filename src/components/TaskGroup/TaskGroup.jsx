import styles from './taskGroup.module.css'
import TaskList from '../TaskList/TaskList'
const TaskGroup = (props) => {
  return (
    <div className={styles['task-group-container'] + ' bg-primary-1'}>
      <ul className={styles['task-group-list']} role="list">
        <li className={styles['task-group-item']}>
          <h2 className="color-gray-3">TODO (4)</h2>
          <TaskList />
        </li>

        {/* TODO: add new column */}
        <li className={styles['task-group-item']} data-new-column="true">
          <h2 className="color-gray-3">+New Column</h2>
        </li>
      </ul>
    </div>
  )
}

export default TaskGroup
