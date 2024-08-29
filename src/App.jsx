import TaskGroupList from './components/TaskGroupList/TaskGroupList'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { socket } from './socket.js'
import { useState, useEffect } from 'react'


function getCursorElement(id) {
  var elementId = 'cursor-' + id
  var element = document.getElementById(elementId)
  if (element == null) {
    element = document.createElement('div')
    element.id = elementId
    element.className = 'cursor'
    document.body.appendChild(element)
  }
  return element
}

function removeCursorElement(data) {
  const el = getCursorElement(data.id)
  document.body.removeChild(el)
}


function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
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

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  })

  function handleMouseMove(ev) { 
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  
    const normalizedX = ev.pageX / viewportWidth;
    const normalizedY = ev.pageY / viewportHeight;
  
    socket.emit('draw_cursor', { 
      line: [ normalizedX, normalizedY ], 
      id: socket.id 
    });
  }
  


  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className="main" onMouseMove={handleMouseMove}>
          <h1>{isConnected ? "Connected" : "Not Connected"}</h1>
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