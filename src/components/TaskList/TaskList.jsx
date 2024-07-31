import styles from './taskList.module.css'
import Task from '../TaskItem/Task'

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles['task-list']} role="list">
      {tasks.map((task) => (
        <Task
          key={task.title}
          title={task.title}
          description={task.description}
          status={task.status}
          subtasks={task.subtasks}
        />
      ))}
    </ul>
  )
}

export default TaskList
