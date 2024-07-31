import TaskGroupList from './components/TaskGroupList/TaskGroupList'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className="main">
          <HeaderNavigation />
          <TaskGroupList />
        </main>
      </DndProvider>
    </>
  )
}

export default App
