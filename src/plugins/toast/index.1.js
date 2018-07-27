import Toast from './toast.vue'

export default {
  /**
   * 安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    const VueToast = Vue.extend(Toast)
    let toast = null
    const queues = []

    function handle({ message }) {
      // toast.$once('hide')
      toast.show(message)
    }
    /**
     * 初始化并显示loading
     * @param {string} message - 自定义文案
     * @return {Promise} Promise - 实例
     */
    function $toast(message) {
      return new Promise((resolve) => {
        const queue = {
          message,
          resolve,
        }
        // 在第一次调用时初始化Loading
        if (!toast) {
          window.console.log('init初始化')
          toast = new VueToast()
          toast.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(toast.$el)
        }
        // 第二次直接调用show方法
        // console.log(queue, 'queue')
        // debugger
        if (toast.active) {
          queues.push(queue)
        } else {
          handle(queue)
        }
        // console.log(queue, 'queue')
        resolve()
      }).then(() => {
        if (queues.length > 0) {
          handle(queues.shift())
          window.console.log(queues.shift(), 'duilie')
          // handle({ message: 'message' })
        }
      })
    }
    Vue.prototype.$toast = $toast
  },
}
