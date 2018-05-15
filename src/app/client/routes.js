const client = () => import('@/app/client/components/Client')
const view = () => import('@/app/client/components/Index')
const form = () => import('@/app/client/components/Form')

export default[
  {
    path: '/clients/',
    component: client,
    redirect: { name: 'client.view' },
    name: 'client',
    meta: {
      requiresAuth: true,
      breadcrumb: ' Clientes '
    },

    children: [
      {
        path: 'client',
        name: 'client.view',
        component: view,
        meta: {
          requiresAuth: true,
          nameview: 'Clientes',
          breadcrumb: ' Clientes ',
          show: false
        }
      },
      {
        path: 'create',
        name: 'client.create',
        component: form,
        meta: {
          requiresAuth: true,
          nameview: 'Clientes',
          breadcrumb: ' Cadastro de Clientes ',
          subtitle: 'Cadastro'
        }
      }
    ]
  }
]
