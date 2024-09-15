import TaskGroupList from '../components/TaskGroupList/TaskGroupList'
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation'
import { removeCursorElement, getCursorElement } from '../utils.js'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { useState, useEffect } from 'react'
import { socket } from '../socket.js'
import api from '../axios-config.js'

export default function TaskManagement() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [boards, setBoards] = useState([])
  const [activeBoardId, setActiveBoardId] = useState(0)

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

  // fetch bords
  useEffect(() => {
    async function fetchInitialBoard() {
      // const data = await fetch('/api/boards/1/initialLoad')
      const response = await api.get('/api/boards')
      const { data } = response.data

      const boards = data.map((boardItem) => boardItem.Board)
      setActiveBoardId(boards[0]?.id)
      setBoards(boards)

      console.log('boards', boards)
      console.log('Active Board ID: ', boards[0]?.id)
    }

    fetchInitialBoard()
  }, [activeBoardId])

  useEffect(() => {
    setSavedTheme()

    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function handleDrawCursor(data) {
      var el = getCursorElement(data.id)

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      const actualX = data.line[0] * viewportWidth
      const actualY = data.line[1] * viewportHeight

      el.style.left = actualX + 'px'
      el.style.top = actualY + 'px'
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
    <DndProvider backend={HTML5Backend}>
      <main className="main" onMouseMove={handleMouseMove}>
        <HeaderNavigation boards={boards} />
        <TaskGroupList activeBoardId={activeBoardId} />
      </main>
    </DndProvider>
  )
}
