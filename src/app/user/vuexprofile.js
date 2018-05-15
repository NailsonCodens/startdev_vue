import * as TYPES from '../../store/mutations-types'

const state = {
  list: []
}

const mutations = {
  [TYPES.PROFILE_SET_DATA] (nobj, obj) {
    nobj.list = obj.list
  }
}

const actions = {
  setProfiles ({ commit }, obj) {
    commit(TYPES.PROFILE_SET_DATA, obj)
  }
}

const module = {
  state,
  mutations,
  actions
}

export default { module }
