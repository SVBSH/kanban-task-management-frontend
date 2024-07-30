import styles from './taskGroup.module.css'
import TaskList from '../TaskList/TaskList'
const TaskGroup = (props) => {
  const boardEmpty = !true

  return (
    <div
      data-board-empty={boardEmpty}
      className={styles['task-group-container'] + ' bg-primary-1'}
    >
      {!boardEmpty ? (
        <ul className={styles['task-group-list']} role="list">
          <li className={styles['task-group-item']}>
            <h2 className={styles['task-group-title'] + ' color-gray-3'}>
              TODO (4)
            </h2>
            <TaskList />
          </li>

          {/* TODO: add new column */}
          <li className={styles['task-group-item']} data-new-column="true">
            <h2 className="color-gray-3">+New Column</h2>
          </li>
        </ul>
      ) : (
        <>
          <p className="color-gray-3 fw-500">
            This board is empty. Create a new column to get started.
          </p>
          <button className="">+ Add New Column</button>
        </>
      )}
    </div>
  )
}

export default TaskGroup
