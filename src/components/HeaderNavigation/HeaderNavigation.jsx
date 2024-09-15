import { useState } from 'react'

import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

const HeaderNavigation = ({boards}) => {
  const [isNavOpen, setIsNavOpen] = useState(true)

  function handleToggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen)
  }
  
  return (
    <>
      <Header isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
      <Navigation isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} boards={boards}/>
    </>
  )
}

export default HeaderNavigation
