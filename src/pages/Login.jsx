import { useNavigate } from 'react-router'
import { isAuthenticated, setAccessToken } from '../utils'
import api from '../axios-config'
import { useEffect } from 'react'

export default function Login({ onLogin }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/task-management')
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = {
      username: formData.get('username') ?? '',
      password: formData.get('password') ?? '',
    }
    // Authenticate user
    try {
      const response = await api.post('/signin', obj)
      console.log(response.data)
      const { token } = response.data
      setAccessToken(token)
      onLogin()
      navigate('/task-management')
    } catch (error) {
      console.error('login failed', error)
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
