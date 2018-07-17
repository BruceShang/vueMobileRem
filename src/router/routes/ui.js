export default [
  {
    path: '/ui',
    component: resolve => require(['../../views/ui/index.vue'], resolve),
    children: [
      {
        name: 'ui',
        path: '/ui',
        meta: {
          title: '组件列表',
        },
        component: resolve => require(['../../views/ui/home.vue'], resolve),
      },
      {
        name: 'ui-button',
        path: '/ui-button',
        meta: {
          title: '按钮',
        },
        component: resolve => require(['../../views/ui/button.vue'], resolve),
      },
    ],
  },
]
