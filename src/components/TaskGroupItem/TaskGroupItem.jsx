import styles from './taskGroupItem.module.css'
import TaskList from '../TaskList/TaskList'

const TaskGroupItem = ({ taskGroupTitle, tasks }) => {
  return (
    <li className={styles['task-group-item']}>
      <h2 className={styles['task-group-title'] + ' color-gray-3'}>
        {taskGroupTitle} ({tasks.length})
      </h2>
      <TaskList tasks={tasks} />
    </li>
  )
}

export default TaskGroupItem
