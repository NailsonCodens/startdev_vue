import { vuex as app } from '../app'
import { vuex as domains } from '../domains'

export default {...app.modules, ...domains.modules}
