/**
 * 动态计算viewpoint
 */
function flex() {
  // const nav = navigator.userAgent
  // const iphoneIpad = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
  const doc = window.document
  const { devicePixelRatio } = window
  const s = devicePixelRatio || 1
  const u = 1 / s
  const meta = doc.querySelector('meta[name="viewport"]') || doc.createElement('meta')
  doc.head.appendChild(meta)
  meta.setAttribute('name', 'viewport')
  meta.setAttribute('content',
    `width=device-width,
    user-scalable=no,
    initial-scale=${u}, minimun-scale=${u},maximum-scale=${u}`)
}
flex()
// export default flex()