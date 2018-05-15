import axios from 'axios'
import interceptors from './interceptor'
import { URLAPI } from '../../config'

export const http = axios.create({
  baseURL: URLAPI
})

export function setToken (token) {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default function install (Vue, { store, router }) {
  interceptors(http, store, router)

  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
