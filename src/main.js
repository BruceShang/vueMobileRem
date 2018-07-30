import Vue from 'vue'
import App from './views/App'
import router from './router'
// import './filters'
// import './directives'
// import './components'
// import './plugins'
import store from './store'

require('./index')
require('./utils/responsive')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
