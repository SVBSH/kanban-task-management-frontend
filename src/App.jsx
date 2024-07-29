import './App.css'
import { useState } from 'react'
import TaskGroup from './components/TaskGroup/TaskGroup'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function handleToggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen)
  }
  return (
    <>
      <main className="main">
        <header className="header">
          <div className="logo">Logo</div>
          <button onClick={handleToggleNav}>Toggle Navbar</button>
        </header>
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
