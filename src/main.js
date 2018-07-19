// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './views/App'
import router from './router'
import './filters'
import './directives'
import './components'
import './plugins'
import store from './store'

require('./index')
require('./utils/responsive')

// import { Panel, Selector, Group } from 'vux'
// require('./utils/scale')
// Vue.component('Panel', Panel)
// Vue.component('Selector', Selector)
// Vue.component('Group', Group)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // render: h => h(App),
})
