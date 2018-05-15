export default (http, store, router) => {
  http.interceptors.response.use(
    response => response,

    (error) => {
      const { response } = error

      if ([401, 400].indexOf(response.status) > -1) {
        router.push({name: 'login.auth'})
      }

      if ([422].indexOf(response.status) > -1) {
        store.dispatch('setMessage', { type: 'warning', message: response.data })
      }

      if (response.data) {
        store.dispatch('setMessage', { type: 'invalid', message: 'Os dados fornecidos são invalidos.' })
        // eslint-disable-next-line
      } else {
        store.dispatch('setMessage', { type: 'validation', message: response.data })
      }

      store.dispatch('setFetching', { fetching: false })

      return Promise.reject(error)
    }
  )
}
