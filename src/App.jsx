import { useState } from 'react'
import TaskGroup from './components/TaskGroup/TaskGroup'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import logoMobile from '/logo-mobile.svg'
import logoDesktop from '/logo-dark.svg'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true)

  function handleToggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen)
  }
  return (
    <>
      <main className="main">
        <Header isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
        <picture className="logo | bg-primary-3" data-is-nav-open={isNavOpen}>
          <source srcSet={logoDesktop} media="(min-width: 768px)" />
          <img src={logoMobile} alt="logo" />
        </picture>
        <div className="content bg-primary-1">
          <Navigation isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
          <TaskGroup />
        </div>
      </main>
    </>
  )
}

export default App
