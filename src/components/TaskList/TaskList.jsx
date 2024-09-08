import styles from './taskList.module.css'
import Task from '../TaskItem/Task'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../Constants'

const TaskList = ({ taskGroupTitle, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item) => migrateTask(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const migrateTask = (item) => {
    moveTask(item.taskGroupTitle, taskGroupTitle, item.title)
  }

  return (
    <ul
      ref={drop}
      className={styles['task-list']}
      role="list"
      style={{ border: isOver ? '1px solid red' : '0px' }}
    >
      {tasks.map((task) => (
        <Task
          key={task.title}
          taskGroupTitle={taskGroupTitle}
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
