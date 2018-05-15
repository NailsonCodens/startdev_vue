const product = () => import('@/app/product/components/Product')
const view = () => import('@/app/product/components/product/Index')
const form = () => import('@/app/product/components/product/Form')

const grouproduct = () => import('@/app/product/components/groupproduct/Groupproduct')

export default[
  {
    path: '/products/',
    component: product,
    redirect: { name: 'product.view' },
    name: 'product',
    meta: {
      requiresAuth: true,
      breadcrumb: ' Produtos '
    },

    children: [
      {
        path: 'product',
        name: 'product.view',
        component: view,
        meta: {
          requiresAuth: true,
          nameview: 'Produtos',
          breadcrumb: ' Produtos ',
          show: false
        }
      },
      {
        path: 'create',
        name: 'product.create',
        component: form,
        meta: {
          requiresAuth: true,
          nameview: 'Produtos',
          breadcrumb: ' Cadastro de Produtos',
          subtitle: 'Cadastro'
        }
      },
      {
        path: 'edit/:id/',
        name: 'product.edit',
        component: form,
        meta: {
          requiresAuth: true,
          nameview: 'Produtos',
          breadcrumb: ' Edição Produtos ',
          subtitle: 'Editar'
        }
      },
      {
        path: 'groupproduct',
        name: 'groupproduct',
        component: grouproduct,
        meta: {
          requiresAuth: true,
          nameview: 'Produtos - Grupo de Produtos',
          breadcrumb: ' Grupo de produtos '
        }
      }
    ]
  }
]
