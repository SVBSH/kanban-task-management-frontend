import TaskGroupList from './components/TaskGroupList/TaskGroupList'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { socket } from './socket.js'
import { useState, useEffect } from 'react'
import { removeCursorElement, getCursorElement } from './utils.js'



function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  
  function handleMouseMove(ev) {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
  
    const normalizedX = ev.pageX / viewportWidth
    const normalizedY = ev.pageY / viewportHeight
  
    socket.emit('draw_cursor', {
      line: [normalizedX, normalizedY],
      id: socket.id,
    })
  }

  function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const root = document.querySelector('html')
      root.dataset.theme = savedTheme
    }
  }

  async function fetchInitialBoard() {
    const data = await fetch('/api/boards/1/initialLoad')
    console.log(data.body)
  }

  useEffect(() => {

    setSavedTheme()
    fetchInitialBoard()

    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function handleDrawCursor(data) {
      var el = getCursorElement(data.id);
    
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
    
      const actualX = data.line[0] * viewportWidth;
      const actualY = data.line[1] * viewportHeight;
    
      el.style.left = actualX + 'px';
      el.style.top = actualY + 'px';
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('draw_cursor', handleDrawCursor)
    socket.on('rm:draw_cursor', removeCursorElement)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('draw_cursor', handleDrawCursor)
      socket.off('rm:draw_cursor', removeCursorElement)
    }
  }, [])


  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className="main" onMouseMove={handleMouseMove}>
          {/* <h1>{isConnected ? "Connected" : "Not Connected"}</h1> */}
          <HeaderNavigation />
          <TaskGroupList />
        </main>
      </DndProvider>
    </>
  )
}

export default App


// npx sequelize-cli db:drop
// npx sequelize-cli db:create
// npx sequelize-cli db:migrate