const notfound = () => import('@/app/error/components/Notfound')

export default[
  {
    path: '/notfound',
    name: 'notfound.app',
    component: notfound,
    meta: {
      requiresAuth: false
    }
  }
]
