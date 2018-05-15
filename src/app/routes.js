import { routes as error } from './error'
import { routes as panel } from './panel'
import { routes as product } from './product'
import { routes as client } from './client'
import { routes as user } from './user'
import { routes as budget } from './budget'

export default[...error, ...panel, ...product, ...client, ...user, ...budget]
