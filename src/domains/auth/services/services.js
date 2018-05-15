import { http } from '../../../../src/support/http'

import { getObj } from '../../../../src/support/utils/get'
// eslint-disable-next-line
export const postLogin = ({ grant_type, client_id, client_secret, username, password, scope }) =>
  http.post('/oauth/token', { grant_type, client_id, client_secret, username, password, scope })
    .then(getObj)

export const loadLogged = () => http.get('api/uslog/me').then(getObj)

export const loadLoggedMe = () => http.get('api/uslog/myname').then(getObj)

export const revokeToken = () => http.post('auth')
