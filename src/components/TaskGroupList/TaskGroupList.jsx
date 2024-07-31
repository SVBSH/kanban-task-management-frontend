import styles from './taskGroupList.module.css'
import TaskGroupItem from '../TaskGroupItem/TaskGroupItem'
import { useState } from 'react'

const taskGroupListDefault = [
  {
    name: 'Todo',
    tasks: [
      {
        title: 'Build UI for onboarding flow',
        description: '',
        status: 'Todo',
        subtasks: [
          {
            title: 'Sign up page',
            isCompleted: true,
          },
          {
            title: 'Sign in page',
            isCompleted: false,
          },
          {
            title: 'Welcome page',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Build UI for search',
        description: '',
        status: 'Todo',
        subtasks: [
          {
            title: 'Search page',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Build settings UI',
        description: '',
        status: 'Todo',
        subtasks: [
          {
            title: 'Account page',
            isCompleted: false,
          },
          {
            title: 'Billing page',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'QA and test all major user journeys',
        description:
          'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
        status: 'Todo',
        subtasks: [
          {
            title: 'Internal testing',
            isCompleted: false,
          },
          {
            title: 'External testing',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Doing',
    tasks: [
      {
        title: 'Design settings and search pages',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            title: 'Settings - Account page',
            isCompleted: true,
          },
          {
            title: 'Settings - Billing page',
            isCompleted: true,
          },
          {
            title: 'Search page',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Add account management endpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            title: 'Upgrade plan',
            isCompleted: true,
          },
          {
            title: 'Cancel plan',
            isCompleted: true,
          },
          {
            title: 'Update payment method',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Design onboarding flow',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            title: 'Sign up page',
            isCompleted: true,
          },
          {
            title: 'Sign in page',
            isCompleted: false,
          },
          {
            title: 'Welcome page',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Add search enpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            title: 'Add search endpoint',
            isCompleted: true,
          },
          {
            title: 'Define search filters',
            isCompleted: false,
          },
        ],
      },
      {
        title: 'Add authentication endpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            title: 'Define user model',
            isCompleted: true,
          },
          {
            title: 'Add auth endpoints',
            isCompleted: false,
          },
        ],
      },
      {
        title:
          'Research pricing points of various competitors and trial different business models',
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        status: 'Doing',
        subtasks: [
          {
            title: 'Research competitor pricing and business models',
            isCompleted: true,
          },
          {
            title: 'Outline a business model that works for our solution',
            isCompleted: false,
          },
          {
            title:
              'Talk to potential customers about our proposed solution and ask for fair price expectancy',
            isCompleted: false,
          },
        ],
      },
    ],
  },
]

const TaskGroupList = (props) => {
  const [taskGroupList, setTaskGroupList] = useState(taskGroupListDefault)

  const boardEmpty = taskGroupList.length === 0
  taskGroupList.forEach((taskGroup) => {
    console.log(taskGroup)
  })

  const moveTask = (sourceGroupName, targetGroupName, taskTitle) => {
    console.log(`Move: ${sourceGroupName} -> ${targetGroupName} (${taskTitle})`)
    setTaskGroupList((prevList) => {
      // Find the source and target task groups
      const sourceGroup = prevList.find(
        (group) => group.name === sourceGroupName,
      )
      const targetGroup = prevList.find(
        (group) => group.name === targetGroupName,
      )

      // If either group doesn't exist, return the original list
      if (!sourceGroup || !targetGroup) return prevList

      // Find the task to move
      const taskToMove = sourceGroup.tasks.find(
        (task) => task.title === taskTitle,
      )
      // If the task doesn't exist, return the original list
      if (!taskToMove) return prevList

      // Remove the task from the source group
      const updatedSourceTasks = sourceGroup.tasks.filter(
        (task) => task.title !== taskTitle,
      )

      // Add the task to the target group
      const updatedTargetTasks = [...targetGroup.tasks, taskToMove]

      // Return the updated task group list
      return prevList.map((group) => {
        if (group.name === sourceGroupName) {
          return { ...group, tasks: updatedSourceTasks }
        }
        if (group.name === targetGroupName) {
          return { ...group, tasks: updatedTargetTasks }
        }
        return group
      })
    })
  }

  return (
    <div
      data-board-empty={boardEmpty}
      className={styles['task-group-container'] + ' bg-primary-1'}
    >
      {!boardEmpty ? (
        <ul className={styles['task-group-list']} role="list">
          {taskGroupList.map((taskGroup) => (
            <TaskGroupItem
              key={taskGroup.name}
              taskGroupTitle={taskGroup.name}
              tasks={taskGroup.tasks}
              moveTask={moveTask}
            />
          ))}
          {/* TODO: add new column */}
          <li className={styles['task-group-item']} data-new-column="true">
            <h2 className="color-gray-3">+New Column</h2>
          </li>
        </ul>
      ) : (
        <>
          <p className="color-gray-3 fw-700 fz-heading-l">
            This board is empty. Create a new column to get started.
          </p>
          <button data-type="primary" data-size="l" className="btn">
            + Add New Column
          </button>
        </>
      )}
    </div>
  )
}

export default TaskGroupList
