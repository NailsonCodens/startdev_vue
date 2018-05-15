import store from '../store'

const needAuth = auth => auth === true

const beforeRoute = (to, from, next) => {
  const auth = to.meta.requiresAuth

  if (to.name === 'login.auth') {
    store.dispatch('checkLoggedauth').then(() => {
      next({ name: 'dashboard.view' })
    })
  }

  if (!to.matched.length) {
    next({ name: 'notfound.app' })
  } else {
    store.dispatch('resetMessages')

    if (!needAuth(auth)) {
      next()
      /* eslint-disable */
      //Caso eu queira Zerar o token e outros dados do usuário logado, é só descomentar o return
      //return
    }

    store.dispatch('checkUser').then(() => {
      next()
    }).catch(() => {
      if (to.path != '/notfound') {
        next({ name: 'login.auth' })
      }
    })
  }
  if (to.query.page != undefined) {
    if (isNaN(to.query.page)) {
       next({ name: to.name, query: { page: 1 } })
    }
  }
}

export default beforeRoute
