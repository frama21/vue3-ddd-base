// constant
import { LAYOUT } from '@/modules/app/constants/layout.constant'

// wrapper
import { AppBaseWrapper } from '@/modules/app/ui/components/base'

const routes = [
  {
    path: '/',
    component: AppBaseWrapper,
    children: [
      {
        path: '',
        meta: {
          layout: LAYOUT.DEFAULT
        },
        component: () => import('../ui/HomeUI.vue'),
        children: [
          {
            path: '',
            name: 'home',
            meta: {
              layout: LAYOUT.DEFAULT
            },
            component: () => import('../ui/HomeView.vue')
          },
          {
            path: 'about',
            name: 'about',
            meta: {
              layout: LAYOUT.DEFAULT
            },
            component: () => import('../ui/AboutView.vue')
          }
        ]
      }
    ]
  }
]

export default routes
