import * as TYPES from '../../store/mutations-types'

const state = {
  list: [],
  full_list: [],
  pagination: {}
}

const mutations = {
  [TYPES.GROUPPRODUCT_SET_DATA] (nobj, obj) {
    if (obj.list) {
      nobj.list = obj.list
    }
    if (obj.full_list) {
      nobj.full_list = obj.full_list
    }
    if (obj.pagination) {
      nobj.pagination = obj.pagination
    }
  }
}

const actions = {
  setGroupproducts ({ commit }, obj) {
    commit(TYPES.GROUPPRODUCT_SET_DATA, obj)
  }
}

const module = {
  state,
  mutations,
  actions
}

export default { module }
