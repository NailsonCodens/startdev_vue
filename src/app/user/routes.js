const profile = () => import('@/app/user/components/Profile')
const company = () => import('@/app/user/components/Company')

export default[
  {
    path: '/profile',
    component: profile,
    meta: {
      requiresAuth: true,
      nameview: 'Perfil'
    }
  },
  {
    path: '/company',
    component: company,
    meta: {
      requiresAuth: true,
      nameview: 'Empresa'
    }
  }
]
