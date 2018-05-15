import * as TYPES from '../../store/mutations-types'

const state = {
  list: [],
  pagination: {}
}

const mutations = {
  [TYPES.PRODUCTS_DATA] (nobj, obj) {
    nobj.list = obj.list
    nobj.pagination = obj.pagination
  }
}

const actions = {
  setProducts ({ commit }, obj) {
    commit(TYPES.PRODUCTS_DATA, obj)
  }
}

const module = {
  state,
  mutations,
  actions
}

export default { module }
