import * as TYPES from '../../store/mutations-types'

const state = {
  list: []
}

const mutations = {
  [TYPES.COMPANY_SET_DATA] (st, obj) {
    st.list = st.list
  }
}

const actions = {
  companySet ({ commit }, obj) {
    commit(TYPES.COMPANY_SET_DATA, obj)
  }
}

const module = {
  state,
  mutations,
  actions
}

export default { module }
