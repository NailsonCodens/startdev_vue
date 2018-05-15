import Vue from 'vue'
import Router from 'vue-router'
import beforeRoute from './beforeRoute'
import { routes as app } from '../app'
import { routes as domains } from '../domains'

Vue.use(Router)

const routes = [...app, ...domains]

const router = new Router({
  routes,
  linkActiveClass: 'activeRoute',
  linkExactActiveClass: 'activeRouteExact',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    const page = to.fullPath
    if (page.match(/page=1/)) {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(beforeRoute)

export default router
