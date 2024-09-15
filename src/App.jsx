import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskManagement from './pages/TaskManagement'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect, useState } from 'react'
import { isAuthenticated } from './utils'

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      setAuthenticated(isAuthenticated())
    }

    checkAuth()
  }, [])

  const handleLogin = () => {
    setAuthenticated(true)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login onLogin={handleLogin} />,
      index: true,
    },
    {
      element: <ProtectedRoute isAuthenticated={authenticated} />,
      children: [
        {
          path: '/task-management',
          element: <TaskManagement />,
        },
      ],
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

// npx sequelize-cli db:drop
// npx sequelize-cli db:create
// npx sequelize-cli db:migrate
