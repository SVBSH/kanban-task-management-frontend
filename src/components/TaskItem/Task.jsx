import styles from './task.module.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Constants'

const Task = ({ taskGroupTitle, title, description, status, subtasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: {
      taskGroupTitle: taskGroupTitle,
      title: title,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <li
      ref={drag}
      className={styles['task-item'] + ' bg-primary-3'}
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    >
      <h3 className="clr-primary-2">{title}</h3>
      <p className="color-gray-3 fw-700">0 of 3 subtasks</p>
    </li>
  )
}

export default Task
