import state from './state'
import mutations from './mutations'
import plugin from './plugin'
import * as actions from './actions'
import * as getters from './getters'

const module = { state, mutations, actions, getters }

export default { module, plugin }
