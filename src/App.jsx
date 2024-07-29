import { useState } from 'react'
import TaskGroup from './components/TaskGroup/TaskGroup'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function handleToggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen)
  }
  return (
    <>
      <main className="main">
        <Header handleToggleNav={handleToggleNav} />
        <div className="logo">Logo</div>
        <div className="content">
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <TaskGroup />
        </div>
      </main>
    </>
  )
}

export default App
