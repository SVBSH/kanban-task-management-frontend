import { useState } from 'react'
import TaskGroup from './components/TaskGroup/TaskGroup'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true)

  function handleToggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen)
  }
  return (
    <>
      <main className="main">
        <Header isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
        <Navigation isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
        <TaskGroup />
      </main>
    </>
  )
}

export default App
