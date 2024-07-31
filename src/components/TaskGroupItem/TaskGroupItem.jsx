import styles from './taskGroupItem.module.css'
import TaskList from '../TaskList/TaskList'

const TaskGroupItem = ({ taskGroupTitle, tasks, taskGroupList, moveTask }) => {
  return (
    <li className={styles['task-group-item']}>
      <h2 className={styles['task-group-title'] + ' color-gray-3'}>
        {taskGroupTitle} ({tasks.length})
      </h2>
      <TaskList
        taskGroupTitle={taskGroupTitle}
        tasks={tasks}
        taskGroupList={taskGroupList}
        moveTask={moveTask}
      />
    </li>
  )
}

export default TaskGroupItem
