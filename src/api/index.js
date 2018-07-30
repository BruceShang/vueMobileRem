import Vue from 'vue'

const prefix = 'api'
const apis = {
  fetchListTest: `${prefix}/fetchAllArticles`,
}
Vue.prototype.$apis = apis
