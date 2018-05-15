import * as TYPES from '../../store/mutations-types'

const state = {
  list: [],
  full_list: [],
  pagination: {}
}

const mutations = {
  [TYPES.CLIENTS_DATA] (nobj, obj) {
    nobj.list = obj.list
    nobj.pagination = obj.pagination
  }
}

const actions = {
  setClients ({ commit }, obj) {
    commit(TYPES.CLIENTS_DATA, obj)
  }
}

const module = {
  state,
  mutations,
  actions
}

export default { module }
