import { isFunction } from 'lodash'
import { vuexprofile as Profile, vuexcompany as Company } from './user'
import { vuexproduct as Product, vuexgroupproduct as Groupproduct } from './product'
import { vuexclient as Client } from './client'

// extrai os dados do vuex app
const vuex = { Profile, Company, Product, Groupproduct, Client }
const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})
const plugins = keys.reduce((acc, key) => [...acc, vuex[key].plugin], []).filter(isFunction)

export default { modules, plugins }
