import Vue from 'vue'
import NisuComponents from '@position/nisu-components'
import VueAxios from './axios'
import VueLoading from './loading'

Vue.use(NisuComponents)
Vue.use(VueAxios)
Vue.use(VueLoading, {
  container: '#app',
})
