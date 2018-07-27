import Vue from 'vue'
// import Topbar from './topbar/index.vue'
// import WeCheckbox from './checkbox/index.vue'
// import WeRadio from './radio/index.vue'


// Vue.component('Topbar', Topbar)
// Vue.component('WeCheckbox', WeCheckbox)
// Vue.component('WeRadio', WeRadio)
import { XImg } from 'vux'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import TabAnchor from './tab-anchor/index.vue'
import TabBody from './tab-anchor/tab-body.vue'

Vue.component('TabAnchor', TabAnchor)
Vue.component('TabBody', TabBody)

Vue.component('XImg', XImg)
Vue.use(VueLazyload, {
  preLoad: 1.3, // 图片加载的高度范围比例，默认为1.3，数字越大，预加载图片越多，数字越小，预加载图片数量越少
  error: 'dist/error.png',
  loading: 'https://www.mihui365.com/img/occupying270.png',
  attempt: 1, // 尝试加载的次数 默认为3
})
Vue.use(VueAwesomeSwiper)
