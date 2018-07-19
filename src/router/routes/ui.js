export default [
  {
    path: '/ui',
    component: resolve => require(['views/ui/index.vue'], resolve),
    children: [
      {
        name: 'ui',
        path: '/ui',
        meta: {
          title: '组件列表',
        },
        component: resolve => require(['views/ui/home.vue'], resolve),
      },
      {
        name: 'ui-button',
        path: '/ui-button',
        meta: {
          title: '按钮',
        },
        component: resolve => require(['views/ui/button.vue'], resolve),
      },
      {
        name: 'ui-card',
        path: '/ui-card',
        meta: {
          title: 'Card',
        },
        component: resolve => require(['views/ui/card.vue'], resolve),
      },
      {
        name: 'ui-form',
        path: '/ui-form',
        meta: {
          title: 'Form',
        },
        component: resolve => require(['views/ui/form.vue'], resolve),
      },
      {
        name: 'ui-icons',
        path: '/ui-icons',
        meta: {
          title: 'Icons',
        },
        component: resolve => require(['views/ui/icons.vue'], resolve),
      },
      {
        name: 'ui-loading',
        path: '/ui-loading',
        meta: {
          title: 'Loading',
        },
        component: resolve => require(['views/ui/loading.vue'], resolve),
      },
      {
        name: 'ui-http',
        path: '/ui-http',
        meta: {
          title: 'Http',
        },
        component: resolve => require(['views/ui/http.vue'], resolve),
      },
    ],
  },
]
