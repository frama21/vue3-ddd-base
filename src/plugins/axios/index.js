// axios 
import axios from 'axios'

// store 
import { useAuthStore } from '@/modules/auth/store/auth.store'

let router = null
export const setRouter = (r) => (router = r)

const http = axios.create({
  baseURL: 'some_url',
  timeout: 1000 * 60 * 1 // 1 minutes
})

http.interceptors.request.use(async (config) => {
  const store = useAuthStore()
  const token = store.auth_token
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`
    }
  }

  return config
})

http.interceptors.response.use(undefined, (err) => {
  const errorResponse = err?.response

  if (errorResponse?.status === 500) {
    // some redirect or throw
  }

  // Request Timeout
  if (err?.code === 'ECONNABORTED' || errorResponse?.status === 504) {
    // some redirect or throw
  }

  // Bad Gateway
  if (errorResponse?.status === 502) {
    // some redirect or throw
  }

  // Check if unauthorized
  if (errorResponse?.status === 401) {
    // some redirect or throw
  }

  return Promise.reject(err)
})

export default http
