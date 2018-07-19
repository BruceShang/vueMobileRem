import Vue from 'vue'
import VueAxios from './axios'
import VueLoading from './loading'

Vue.use(VueAxios)
Vue.use(VueLoading, {
  container: '#app',
})
