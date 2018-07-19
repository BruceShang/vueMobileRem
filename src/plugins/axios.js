/**
 * @file Axios的Vue插件（添加全局请求/响应拦截器）
 */

// https://github.com/mzabriskie/axios
import axios from 'axios'
/**
 * adSource 广告来源
 * adProperty 广告密文
 * 如果有就带上
 * 如果是从庙街那边跳转过来，url上面会有这两个参数，需要带上这两个参数在请求header头中
 * 意义是后端会根据这两个字段统计页面流量来源
 */
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
})

axios.interceptors.response.use((response) => {
  // 此处有争议，需要和后端确认好之后再作处理 todo
  const { data, code } = response.data
  switch (code) {
    case 0:
    case '0':
    case 200:
    case '200':
      return data

    default:
  }
  const err = new Error(data.description)
  err.code = data.code
  err.data = data
  err.response = response

  throw err
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }

  return Promise.reject(err)
})

axios.install = (Vue) => {
  Vue.prototype.$http = axios
}

export default axios
