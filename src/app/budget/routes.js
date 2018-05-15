const budget = () => import('@/app/budget/components/Budget')
const view = () => import('@/app/budget/components/Index')
const form = () => import('@/app/budget/components/Form')

export default[
  {
    path: '/budgets',
    component: budget,
    meta: {
      requiresAuth: true,
      breadcrumb: ' Orçamentos '
    },

    children: [
      {
        path: '',
        name: 'budget.view',
        component: view,
        meta: {
          requiresAuth: true,
          nameview: 'Orçamentos'
        }
      },
      {
        path: 'create',
        name: 'budget.create',
        component: form,
        meta: {
          requiresAuth: true,
          nameview: 'Cadastro de Orçamentos',
          breadcrumb: ' Cadastro '
        }
      }
    ]
  }
]
