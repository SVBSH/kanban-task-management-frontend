import axios from 'axios'
import { getAccessToken } from './utils'

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

api.interceptors.request.use(
  (config) => {
    if (config.url.startsWith('/api')) {
      const token = getAccessToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

export default api
