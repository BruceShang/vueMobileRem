import Vue from 'vue'
import NisuComponents from '@position/nisu-components'
import VueAxios from './axios'
import VueLoading from './loading'
import VueToast from './toast'

Vue.use(NisuComponents)
Vue.use(VueAxios)
Vue.use(VueLoading, {
  container: '#app',
})
Vue.use(VueToast, {
  container: '#app',
})
