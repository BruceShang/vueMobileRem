// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Panel, Selector, Group } from 'vux'
import App from './App'
import router from './router'
// import 'lib-flexible'
import '@/assets/stylus/index.styl'
require('./utils/responsive')

Vue.component('Panel', Panel)
Vue.component('Selector', Selector)
Vue.component('Group', Group)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
