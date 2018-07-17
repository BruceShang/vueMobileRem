/**
 * 处理移动端适配问题
 * @author shang
 * @date 2018-07-13
 */
/**
 * @file rem响应式方案的实现，与点击延迟处理
 */
import FastClick from 'fastclick'

FastClick.attach(global.document.body)

const win = global
const doc = win.document
const baseWidth = 750
const documentHTML = doc.documentElement
let pixelRatio = 2

/**
 * 设置html根字体大小
 */
function setRootFont() {
  const docWidth = documentHTML.getBoundingClientRect().width
  const scale = docWidth / baseWidth
  const isIPhone = win.navigator.appVersion.match(/iphone/gi)
  const { devicePixelRatio } = window
  // 处理ihone Retina多倍屏
  if (isIPhone) {
    if (devicePixelRatio >= 3) {
      pixelRatio = 3
    } else if (devicePixelRatio >= 2) {
      pixelRatio = 2
    } else {
      pixelRatio = 1
    }
  } else {
    pixelRatio = 1
  }
  documentHTML.style.fontSize = `${scale * 100}px`
  documentHTML.setAttribute('data-dpr', pixelRatio)
}

setRootFont()
win.addEventListener('resize', setRootFont, false)
