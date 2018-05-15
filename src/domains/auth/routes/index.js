const login = () => import('@/domains/auth/components/Login')

export default[
  {
    path: '/',
    name: 'login.auth',
    component: login,
    meta: { requiresAuth: false }
  }
]
