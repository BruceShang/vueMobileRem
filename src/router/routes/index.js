
import routesUi from './ui'

export default [
  {
    path: '/',
    redirect: '/ui',
  },
  ...routesUi,
  // {
  //   path: '/404',
  //   name: '404',
  //   component: resolve => require(['../../views/index/404.vue'], resolve),
  // },
  // {
  //   path: '*',
  //   redirect: '/404',
  // },
]
