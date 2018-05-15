import localforage from 'localforage'
import { USER_TOKEN_STORAGE } from '../../../../src/config'
import { isEmpty } from 'lodash'
import * as TYPES from './mutations-types'
import * as services from '../services/services'

export const loginAuth = ({ dispatch }, payload) =>
  services.postLogin(payload)
    // eslint-disable-next-line
    .then(({ access_token }) => {
      // eslint-disable-next-line
      var token = access_token

      // eslint-disable-next-line
      dispatch('setToken', token)

      // eslint-disable-next-line
      services.loadLoggedMe().then(user => dispatch('setUser', user))
    })

export const logoutAuth = ({ dispatch }) => {
  // eslint-disable-next-line
  //services.revokeToken()

  return Promise.all([
    dispatch('setToken', null),
    dispatch('setUser', ''),
    localforage.setItem(USER_TOKEN_STORAGE, null)
  ])
}

export const setUser = ({ commit }, user) => {
  commit(TYPES.SET_USER, user)

  Promise.resolve(user)
}

export const setToken = ({ commit }, payload) => {
  const token = (isEmpty(payload)) ? null : payload.token || payload

  commit(TYPES.SET_TOKEN, token)

  return Promise.resolve(token)
}

export const checkLoggedauth = ({ dispatch, state }) => {
  if (state.token != null) {
    return Promise.resolve(state.token)
  }
}

export const checkUser = ({ dispatch, state }) => {
  if (state.token != null) {
    return Promise.resolve(state.token)
  }

  return localforage.getItem(USER_TOKEN_STORAGE)
    .then((token) => {
      if (isEmpty(token)) {
        // eslint-disable-next-line
        return Promise.reject('NO_TOKEN')
      }

      return dispatch('setToken', token)
    })

    .then(() => dispatch('loadMe'))
}

export const loadMe = ({ dispatch }) => services.loadLoggedMe()
  .then(user => dispatch('setUser', user))
  .catch(() => {
    // eslint-disable-next-line
    dispatch('setToken', '')
    // eslint-disable-next-line
    return Promise.reject('FAIL_IN_LOAD_USER')
  })
