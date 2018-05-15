import { vuex as app } from '../app'
import { vuex as domains } from '../domains'
// create a new object and preserv original keys
export default [...app.plugins, ...domains.plugins]
