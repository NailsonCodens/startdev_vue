const panel = () => import('@/app/panel/components/Panel')
const view = () => import('@/app/panel/components/Index')

export default[
  {
    path: '/panel',
    component: panel,
    meta: {
      requiresAuth: true,
      breadcrumb: ' Dashboard '
    },

    children: [
      {
        path: '',
        name: 'dashboard.view',
        component: view,
        meta: {
          requiresAuth: true,
          nameview: 'Dashboard'
        }
      }
    ]
  }
]
