import localforage from 'localforage'
import { USER_TOKEN_STORAGE } from '../../../../src/config'
import { setToken as httpSetToken } from '../../../support/http'
import * as TYPES from './mutations-types'

const subscribe = (store) => {
  store.subscribe((mutation, { Auth }) => {
    if (TYPES.SET_TOKEN === mutation.type) {
      httpSetToken(Auth.token)

      localforage.setItem(USER_TOKEN_STORAGE, Auth.token)
    }
  })
}

export default (store) => {
  subscribe(store)
}
