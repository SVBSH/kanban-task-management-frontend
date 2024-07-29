import styles from './taskList.module.css'
import Task from '../TaskItem/Task'

const TaskList = () => {
  return (
    <ul className={styles['task-list']} role="list">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  )
}

export default TaskList
