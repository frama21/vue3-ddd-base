// constant
import { LAYOUT } from '@/modules/app/constants/layout.constant'

// wrapper
import { AppBaseWrapper } from '@/modules/app/ui/components/base'

const routes = [
  {
    path: 'login',
    component: AppBaseWrapper,
    children: [
      {
        path: '',
        meta: {
          layout: LAYOUT.DEFAULT
        },
        component: () => import('../ui/LoginUI.vue')
      }
    ]
  }
]

export default routes
