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
      toast.$once('hide')
      // toast.hide()
      toast.show(message)
      // resolve()
    }
    /**
     * 初始化并显示loading
     * @param {string} message - 自定义文案
     * @return {Promise} Promise - 实例
     */
    function $toast(message) {
      return new Promise((resolve) => {
        if (!message) {
          reject('消息不能为空')
          return
        }
        const queue = {
          message,
          resolve,
        }
        // debugger
        // 在第一次调用时初始化Loading
        if (!toast) {
          window.console.log('init初始化')
          toast = new VueToast()
          toast.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(toast.$el)
        }
        // 第二次直接调用show方法
        console.log(toast.active, 'active')
        // debugger
        if (toast.active) {
          queues.push(queue)
          // handle({ message: 'me' })
        } else {
          handle(queue)
        }
        resolve()
      }).then(() => {
        if (queues.length > 0) {
          // debugger
          for (let i = 0; i < queues.length; i++) {
            let times = 1000 + (i * 10)
            setTimeout(() => {
              window.console.log(queues[i], 'duilie')
              handle(queues.shift())
            }, times)
            console.log(queues, '--------i')
          }
          // handle(queues.shift())
        }
      })
    }
    Vue.prototype.$toast = $toast
  },
}
